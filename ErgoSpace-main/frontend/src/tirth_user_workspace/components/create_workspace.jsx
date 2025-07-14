import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, Trash2, Plus, X, Wifi, Car, Wind, Coffee, Users, DollarSign, MapPin, Building, Printer, 
  Video, Clipboard, Utensils, Sofa, Phone, Clock, Shield, Mail, Box, Bike, ShowerHead, Dumbbell, 
  Calendar, Baby 
} from "lucide-react";

const CreateWorkspace = ({ existingWorkspaces = [], isEditing = false }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const workspaceId = isEditing ? parseInt(id) : null;
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);


  const existingWorkspace = isEditing && existingWorkspaces.length > 0
    ? existingWorkspaces.find(w => w.id === workspaceId)
    : null;

  const [workspaceData, setWorkspaceData] = useState({
    name: existingWorkspace?.name || "",
    location: existingWorkspace?.location || "",
    workspace_type: existingWorkspace?.workspace_type || "Hotdesk",
    description: existingWorkspace?.description || "",
    capacity: existingWorkspace?.capacity || "",
    pricePerHour: existingWorkspace?.pricePerHour || "",
    pricePerDay: existingWorkspace?.pricePerDay || "",
    pricePerMonth: existingWorkspace?.pricePerMonth || "",
    amenities: existingWorkspace?.amenities || [],
    coverImage: existingWorkspace?.coverImage || null,
    galleryImages: existingWorkspace?.galleryImages || [],
    insta: existingWorkspace?.insta || "",
  facebook: existingWorkspace?.facebook || "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    latitude: "",
    longitude: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [seatInput, setSeatInput] = useState({ seatName: "", extraCharge: "" });
  const [seatPreferences, setSeatPreferences] = useState([]);

  // ✅ Amenities LIST with icons and names
  const amenitiesList = [
    { name: "WiFi", icon: <Wifi className="w-3 h-3 mr-1" /> },
    { name: "Parking", icon: <Car className="w-3 h-3 mr-1" /> },
    { name: "AC", icon: <Wind className="w-3 h-3 mr-1" /> },
    { name: "Coffee", icon: <Coffee className="w-3 h-3 mr-1" /> },
    { name: "Meeting Room", icon: <Users className="w-3 h-3 mr-1" /> },
    { name: "Printer", icon: <Printer className="w-3 h-3 mr-1" /> },
    { name: "Projector", icon: <Video className="w-3 h-3 mr-1" /> },
    { name: "Whiteboard", icon: <Clipboard className="w-3 h-3 mr-1" /> },
    { name: "Kitchen", icon: <Utensils className="w-3 h-3 mr-1" /> },
    { name: "Lounge", icon: <Sofa className="w-3 h-3 mr-1" /> },
    { name: "Phone Booth", icon: <Phone className="w-3 h-3 mr-1" /> },
    { name: "24/7 Access", icon: <Clock className="w-3 h-3 mr-1" /> },
    { name: "Security", icon: <Shield className="w-3 h-3 mr-1" /> },
    { name: "Mail Service", icon: <Mail className="w-3 h-3 mr-1" /> },
    { name: "Storage", icon: <Box className="w-3 h-3 mr-1" /> },
    { name: "Bicycle Parking", icon: <Bike className="w-3 h-3 mr-1" /> },
    { name: "Shower", icon: <ShowerHead className="w-3 h-3 mr-1" /> },
    { name: "Gym", icon: <Dumbbell className="w-3 h-3 mr-1" /> },
    { name: "Event Space", icon: <Calendar className="w-3 h-3 mr-1" /> },
    { name: "Childcare", icon: <Baby className="w-3 h-3 mr-1" /> },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkspaceData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleCheckboxChange = (amenityName) => {
    setWorkspaceData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenityName)
        ? prev.amenities.filter(a => a !== amenityName)
        : [...prev.amenities, amenityName]
    }));
  };

  const handleCoverImageUpload = (e) => {
    if (e.target.files[0]) {
      setWorkspaceData(prev => ({ ...prev, coverImage: e.target.files[0] }));
    }
  };

  const handleGalleryImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setWorkspaceData(prev => ({
      ...prev,
      galleryImages: [...prev.galleryImages, ...files].slice(0, 10)
    }));
  };

  const removeImage = (index) => {
    setWorkspaceData(prev => {
      const updated = [...prev.galleryImages];
      updated.splice(index, 1);
      return { ...prev, galleryImages: updated };
    });
  };

  const removeCoverImage = () => {
    setWorkspaceData(prev => ({ ...prev, coverImage: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!workspaceData.name) newErrors.name = "Workspace name is required";
    if (!workspaceData.location) newErrors.location = "Location is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setWorkspaceData(prevData => ({
          ...prevData,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
      });
    } else {
      alert("Geolocation not supported by your browser");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
  
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
  
    if (!loggedInUser) {
      alert("User not logged in. Please login first.");
      setIsSubmitting(false);
      return;
    }
  
    const token = loggedInUser?.token;
  
    // 🛑 1. Check minimum 1 gallery image
    if (!workspaceData.galleryImages || workspaceData.galleryImages.length === 0) {
      alert("Please upload at least one Gallery Image");
      setIsSubmitting(false);
      return;
    }
  
    // 🛑 2. Check valid latitude and longitude
    if (!workspaceData.latitude || isNaN(parseFloat(workspaceData.latitude))) {
      alert("Please fill valid Latitude!");
      setIsSubmitting(false);
      return;
    }
    if (!workspaceData.longitude || isNaN(parseFloat(workspaceData.longitude))) {
      alert("Please fill valid Longitude!");
      setIsSubmitting(false);
      return;
    }
  
    const latitude = parseFloat(workspaceData.latitude).toFixed(7);   // 7 digits after decimal
    const longitude = parseFloat(workspaceData.longitude).toFixed(7); // 7 digits after decimal
  
    const formData = new FormData();
    formData.append('name', workspaceData.name);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('workspace_type', workspaceData.workspace_type);
    formData.append('description', workspaceData.description || '');
    formData.append('address_1', workspaceData.address1 || '');
    formData.append('address_2', workspaceData.address2 || '');
    formData.append('pincode', workspaceData.pincode || '');
    formData.append('city', workspaceData.city || '');
    formData.append('state', workspaceData.state || '');
    formData.append('country', workspaceData.country || '');
    formData.append('start_time', "10:00:00");
    formData.append('end_time', "22:00:00");
    formData.append('insta', workspaceData.insta);
    formData.append('facebook', workspaceData.facebook);
    formData.append('rate_per_day', workspaceData.pricePerDay || '');
    formData.append('rate_per_month', workspaceData.pricePerMonth || '');
    formData.append('rate_per_hour', workspaceData.pricePerHour || '');
    formData.append('owner', loggedInUser.id);
  
    if (workspaceData.coverImage) {
      formData.append('logo', workspaceData.coverImage);
    }
  
    workspaceData.galleryImages.forEach(file => {
      formData.append('uploaded_images', file);   // ✅ Field for multiple images
    });
  
    const amenitiesFormatted = workspaceData.amenities.map(name => ({ name: name.toLowerCase() }));
    formData.append('amenities', JSON.stringify(amenitiesFormatted));
  
    const seatCapacityFormatted = seatPreferences.map(seat => ({
      name: seat.seatName,
      description: null,
      capacity: seat.extraCharge,
      rate_per_hour: null,
      rate_per_day: null,
      rate_per_month: null,
    }));
    formData.append('capacity', JSON.stringify(seatCapacityFormatted));
  
    console.log('Token about to be sent:', token);
  
    try {
      const response = await fetch('http://127.0.0.1:8000/workspace/new-workspace/', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`,   // ✅
        },
        credentials: 'include',
        body: formData,
      });
  
      if (response.ok) {
        console.log('✅ Workspace created successfully!');
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
          navigate('/admin');
        }, 2000);  // 2 seconds popup and redirect
      }
      
      else {
        const errorData = await response.text();
        console.error('❌ Error creating workspace:', errorData);
      }
    } catch (error) {
      console.error('❌ Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  const handleCancel = () => {
    navigate("/admin");
  };





  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Top Bar */}
      <div className="p-4 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-8 h-8 mr-3 text-blue-600" viewBox="0 0 24 24" fill="none">
              <path d="M3 8L7 4L11 8V16M13 16L17 20L21 16V8M3 12H21" stroke="black" strokeWidth="2" />
            </svg>
            <div>
              <h2 className="text-xl font-bold text-gray-800">{isEditing ? "Edit Workspace" : "Create New Workspace"}</h2>
              <p className="text-gray-600 text-sm">Fill in all the workspace details carefully.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Start */}
      <form onSubmit={handleSubmit} className="flex-1 flex overflow-hidden max-w-7xl mx-auto w-full bg-white my-4 shadow-sm rounded-lg">

        {/* Left Side */}
        <div className="w-2/3 p-6 flex flex-col overflow-hidden border-r">
          <div className="flex-1 grid grid-cols-2 gap-5 overflow-auto pr-2">

            {/* Workspace Name */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Workspace Name*</label>
              <div className="relative">
                <Building className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={workspaceData.name}
                  onChange={handleChange}
                  className={`pl-10 p-2 w-full border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md`}
                  placeholder="Enter workspace name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location*</label>
              <button
                type="button"
                onClick={() => setShowLocationModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                <MapPin className="w-4 h-4" /> Fill Location
              </button>
              {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
            </div>

            {/* Social Media Details */}
<div className="col-span-2">
  <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
  <input
    type="url"
    name="insta"
    value={workspaceData.insta}
    onChange={handleChange}
    placeholder="https://instagram.com/yourworkspace"
    className="p-2 w-full border border-gray-300 rounded-md mb-3"
  />
  
  <label className="block text-sm font-medium text-gray-700 mb-1">Facebook</label>
  <input
    type="url"
    name="facebook"
    value={workspaceData.facebook}
    onChange={handleChange}
    placeholder="https://facebook.com/yourworkspace"
    className="p-2 w-full border border-gray-300 rounded-md"
  />
</div>


            {/* Seat Preferences */}
            <div className="mt-4 col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Seat Preferences (Optional)</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  name="seatName"
                  value={seatInput.seatName}
                  onChange={(e) => setSeatInput({ ...seatInput, seatName: e.target.value })}
                  placeholder="e.g., Window Seat, Corner Couch"
                  className="p-2 border border-gray-300 rounded-md w-1/2"
                />
                <input
                  type="number"
                  name="extraCharge"
                  value={seatInput.extraCharge}
                  onChange={(e) => setSeatInput({ ...seatInput, extraCharge: e.target.value })}
                  placeholder="Extra ₹"
                  className="p-2 border border-gray-300 rounded-md w-1/3"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (seatInput.seatName.trim() && seatInput.extraCharge.trim()) {
                      setSeatPreferences([...seatPreferences, seatInput]);
                      setSeatInput({ seatName: "", extraCharge: "" });
                    }
                  }}
                  className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add
                </button>
              </div>

              {seatPreferences.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {seatPreferences.map((seat, index) => (
                    <li key={index} className="text-sm text-gray-700 flex justify-between items-center border p-2 rounded">
                      <span>{seat.seatName} (+₹{seat.extraCharge})</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = seatPreferences.filter((_, i) => i !== index);
                          setSeatPreferences(updated);
                        }}
                        className="text-red-500 hover:underline text-xs"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Workspace Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                name="workspace_type"
                value={workspaceData.workspace_type}
                onChange={handleChange}
                className="p-2 w-full border border-gray-300 rounded-md bg-white"
              >
                <option value="Office">Office</option>
                <option value="Café">Café</option>
                <option value="Hotdesk">Hotdesk</option>
                <option value="Co-working">Co-working</option>
              </select>
            </div>

            {/* Capacity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="number"
                  name="capacity"
                  value={workspaceData.capacity}
                  onChange={handleChange}
                  className="pl-10 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Number of people"
                />
              </div>
            </div>

            {/* Cover Image */}
            <div className="col-span-2 mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
              {!workspaceData.coverImage ? (
                <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <Camera className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-xs text-gray-500">Upload Cover</span>
                  <input type="file" className="hidden" onChange={handleCoverImageUpload} accept="image/*" />
                </label>
              ) : (
                <div className="relative h-32 rounded-md overflow-hidden">
                  <img
                    src={typeof workspaceData.coverImage === 'object' ? URL.createObjectURL(workspaceData.coverImage) : workspaceData.coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeCoverImage}
                    className="absolute top-2 right-2 bg-white p-1 rounded-full"
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              )}
            </div>

            {/* Gallery Images */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Gallery Images ({workspaceData.galleryImages.length}/10)</label>
              <div className="grid grid-cols-3 gap-2">
                {workspaceData.galleryImages.map((img, index) => (
                  <div key={index} className="relative group h-20 rounded overflow-hidden">
                    <img
                      src={typeof img === 'object' ? URL.createObjectURL(img) : img}
                      alt={`Gallery ${index}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-white p-1 rounded-full"
                    >
                      <X className="h-3 w-3 text-red-500" />
                    </button>
                  </div>
                ))}
                {workspaceData.galleryImages.length < 10 && (
                  <label className="flex flex-col items-center justify-center h-20 border border-gray-200 rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <Plus className="h-4 w-4 text-gray-400" />
                    <input type="file" multiple className="hidden" onChange={handleGalleryImageUpload} accept="image/*" />
                  </label>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/3 p-6 flex flex-col overflow-auto">
          <div className="flex-1 space-y-6">

            {/* Pricing */}
            <div>
              <h3 className="text-md font-semibold text-gray-800 mb-2">Pricing</h3>
              <div className="space-y-3">
                {["pricePerHour", "pricePerDay", "pricePerMonth"].map((field) => (
                  <div key={field}>
                    <input
                      type="number"
                      name={field}
                      value={workspaceData[field]}
                      onChange={handleChange}
                      placeholder={`Enter ${field === "pricePerHour" ? "Hourly" : field === "pricePerDay" ? "Daily" : "Monthly"} Price (₹)`}
                      className="w-full border p-2 rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
<div>
  <h3 className="text-md font-semibold text-gray-800 mb-2">Description</h3>
  <textarea
    name="description"
    value={workspaceData.description}
    onChange={handleChange}
    placeholder="Write workspace description here..."
    className="w-full border p-2 rounded-md h-28 resize-none"
  />
</div>
 {/* Amenities */}
          <div>
          <div>
  <h3 className="text-md font-semibold text-gray-800 mb-2">Amenities</h3>
  <div className="flex flex-wrap gap-3">
    {amenitiesList.map((amenity, index) => (
      <div key={index} className="flex items-center">
        <input
          type="checkbox"
          id={`amenity-${index}`}
          checked={workspaceData.amenities.includes(amenity.name)}
          onChange={() => handleCheckboxChange(amenity.name)}
          className="w-4 h-4"
        />
        <label htmlFor={`amenity-${index}`} className="ml-2 text-sm flex items-center">
          {amenity.icon} {amenity.name}
        </label>
      </div>
    ))}
  </div>
</div>


            </div>

          </div>

          {/* Form Buttons */}
          <div className="pt-6 border-t mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 ${isSubmitting ? 'opacity-75' : ''}`}
            >
              {isSubmitting ? 'Saving...' : (isEditing ? 'Update' : 'Create')}
            </button>
          </div>
        </div>

      </form>

      {/* Location Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-lg font-bold mb-4">Enter Location Details</h3>
            <div className="grid grid-cols-2 gap-4">
              {["address1", "address2", "city", "state", "country", "pincode", "latitude", "longitude"].map((field) => (
                <input
                  key={field}
                  name={field}
                  value={workspaceData[field]}
                  onChange={handleChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="border p-2 rounded"
                />
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <button
                type="button"
                onClick={getCurrentLocation}
                className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Auto Fill Location
              </button>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setShowLocationModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setWorkspaceData(prev => ({
                      ...prev,
                      location: `${prev.address1}, ${prev.city}, ${prev.state}, ${prev.country}`,
                    }));
                    setShowLocationModal(false);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
<AnimatePresence>
  {showSuccessPopup && (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
    >
      🎉 Workspace Created Successfully!
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default CreateWorkspace;