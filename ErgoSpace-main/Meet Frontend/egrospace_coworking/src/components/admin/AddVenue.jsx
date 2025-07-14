// // import React, { useState } from 'react';
// // import WorkspaceItem from './WorkspaceItem';
// // import FoodItem from './FoodItem';

// // const AddVenue = ({ onAddVenue }) => {
// //   const [venueData, setVenueData] = useState({
// //     type: 'cafe',
// //     name: '',
// //     location: '',
// //     price: '',
// //     description: '',
// //     amenities: [],
// //     imageUrl: '/api/placeholder/300/160',
// //     cafeData: {
// //       description: '',
// //       logo: '/api/placeholder/80/80',
// //       socialLinks: {
// //         facebook: '',
// //         linkedin: '',
// //         instagram: ''
// //       },
// //       address: {
// //         street: '',
// //         area: '',
// //         city: '',
// //         country: '',
// //         phone: '',
// //         openHours: '',
// //         gps: {
// //           latitude: '',
// //           longitude: ''
// //         }
// //       }
// //     },
// //     workspaces: [
// //       {
// //         id: Date.now(),
// //         name: '',
// //         description: '',
// //         price: '',
// //         image: '/api/placeholder/100/80'
// //       }
// //     ],
// //     foodItems: []
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
    
// //     if (name.includes('.')) {
// //       const [parent, child] = name.split('.');
// //       setVenueData({
// //         ...venueData,
// //         [parent]: {
// //           ...venueData[parent],
// //           [child]: value
// //         }
// //       });
// //     } else {
// //       setVenueData({
// //         ...venueData,
// //         [name]: value
// //       });
// //     }
// //   };

// //   const handleAddressChange = (e) => {
// //     const { name, value } = e.target;
// //     setVenueData({
// //       ...venueData,
// //       cafeData: {
// //         ...venueData.cafeData,
// //         address: {
// //           ...venueData.cafeData.address,
// //           [name]: value
// //         }
// //       }
// //     });
// //   };

// //   const handleGpsChange = (e) => {
// //     const { name, value } = e.target;
// //     setVenueData({
// //       ...venueData,
// //       cafeData: {
// //         ...venueData.cafeData,
// //         address: {
// //           ...venueData.cafeData.address,
// //           gps: {
// //             ...venueData.cafeData.address.gps,
// //             [name]: value
// //           }
// //         }
// //       }
// //     });
// //   };

// //   const handleSocialLinksChange = (e) => {
// //     const { name, value } = e.target;
// //     setVenueData({
// //       ...venueData,
// //       cafeData: {
// //         ...venueData.cafeData,
// //         socialLinks: {
// //           ...venueData.cafeData.socialLinks,
// //           [name]: value
// //         }
// //       }
// //     });
// //   };

// //   const handleAmenityChange = (e) => {
// //     const { value, checked } = e.target;
    
// //     if (checked) {
// //       setVenueData({
// //         ...venueData,
// //         amenities: [...venueData.amenities, value]
// //       });
// //     } else {
// //       setVenueData({
// //         ...venueData,
// //         amenities: venueData.amenities.filter(a => a !== value)
// //       });
// //     }
// //   };

// //   const handleAddWorkspace = () => {
// //     setVenueData({
// //       ...venueData,
// //       workspaces: [
// //         ...venueData.workspaces,
// //         {
// //           id: Date.now(),
// //           name: '',
// //           description: '',
// //           price: '',
// //           image: '/api/placeholder/100/80'
// //         }
// //       ]
// //     });
// //   };

// //   const handleWorkspaceChange = (id, field, value) => {
// //     setVenueData({
// //       ...venueData,
// //       workspaces: venueData.workspaces.map(workspace => 
// //         workspace.id === id ? { ...workspace, [field]: value } : workspace
// //       )
// //     });
// //   };

// //   const handleRemoveWorkspace = (id) => {
// //     setVenueData({
// //       ...venueData,
// //       workspaces: venueData.workspaces.filter(workspace => workspace.id !== id)
// //     });
// //   };

// //   const handleAddFoodItem = () => {
// //     setVenueData({
// //       ...venueData,
// //       foodItems: [
// //         ...venueData.foodItems,
// //         {
// //           id: Date.now(),
// //           name: '',
// //           description: '',
// //           price: '',
// //           image: '/api/placeholder/100/80'
// //         }
// //       ]
// //     });
// //   };

// //   const handleFoodItemChange = (id, field, value) => {
// //     setVenueData({
// //       ...venueData,
// //       foodItems: venueData.foodItems.map(item => 
// //         item.id === id ? { ...item, [field]: value } : item
// //       )
// //     });
// //   };

// //   const handleRemoveFoodItem = (id) => {
// //     setVenueData({
// //       ...venueData,
// //       foodItems: venueData.foodItems.filter(item => item.id !== id)
// //     });
// //   };

// //   const handleFetchGPS = () => {
// //     // In a real app, this would use the browser's geolocation API
// //     // For demo purposes, we'll just set some example coordinates
// //     setVenueData({
// //       ...venueData,
// //       cafeData: {
// //         ...venueData.cafeData,
// //         address: {
// //           ...venueData.cafeData.address,
// //           gps: {
// //             latitude: '19.0760',
// //             longitude: '72.8777'
// //           }
// //         }
// //       }
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     // Create the full address string
// //     const fullAddress = `${venueData.cafeData.address.street}, ${venueData.cafeData.address.area}, ${venueData.cafeData.address.city}, ${venueData.cafeData.address.country}`;
    
// //     // Prepare the complete venue data
// //     const newVenue = {
// //       ...venueData,
// //       cafeData: {
// //         ...venueData.cafeData,
// //         name: venueData.name,
// //         address: {
// //           ...venueData.cafeData.address,
// //           full: fullAddress
// //         }
// //       }
// //     };
    
// //     onAddVenue(newVenue);
// //   };

// //   const amenityOptions = [
// //     { value: 'wifi', label: 'WiFi' },
// //     { value: 'powerOutlets', label: 'Power Outlets' },
// //     { value: 'coffeeTea', label: 'Coffee/Tea' },
// //     { value: 'foodService', label: 'Food Service' },
// //     { value: 'meetingRooms', label: 'Meeting Rooms' },
// //     { value: 'printer', label: 'Printer' },
// //     { value: 'projector', label: 'Projector' },
// //     { value: 'airConditioning', label: 'Air Conditioning' },
// //     { value: 'parking', label: 'Parking' }
// //   ];

// //   return (
// //     <div>
// //       <h1 className="section-title">Add New Venue</h1>
      
// //       <form onSubmit={handleSubmit} className="form-container">
// //         <div className="card form-section">
// //           <h2 className="mb-4">Basic Information</h2>
          
// //           <div className="form-group">
// //             <label className="form-label">Venue Type</label>
// //             <select 
// //               name="type"
// //               value={venueData.type}
// //               onChange={handleChange}
// //               className="form-select"
// //             >
// //               <option value="cafe">Cafe</option>
// //               <option value="coworking">Co-working Space</option>
// //               <option value="office">Office Space</option>
// //               <option value="library">Library</option>
// //             </select>
// //           </div>
          
// //           <div className="form-group">
// //             <label className="form-label">Venue Name</label>
// //             <input 
// //               type="text"
// //               name="name"
// //               value={venueData.name}
// //               onChange={handleChange}
// //               className="form-input"
// //               placeholder="E.g., Brew & Work Cafe"
// //               required
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label className="form-label">Location</label>
// //             <input 
// //               type="text"
// //               name="location"
// //               value={venueData.location}
// //               onChange={handleChange}
// //               className="form-input"
// //               placeholder="E.g., Downtown"
// //               required
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label className="form-label">Base Price (per hour)</label>
// //             <input 
// //               type="number"
// //               name="price"
// //               value={venueData.price}
// //               onChange={handleChange}
// //               className="form-input"
// //               placeholder="E.g., 15"
// //               required
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label className="form-label">Description</label>
// //             <textarea 
// //               name="description"
// //               value={venueData.description}
// //               onChange={handleChange}
// //               className="form-textarea"
// //               placeholder="Describe your venue..."
// //               required
// //             ></textarea>
// //           </div>
          
// //           <div className="form-group">
// //             <label className="form-label">Amenities</label>
// //             <div className="amenities-grid">
// //               {amenityOptions.map(option => (
// //                 <div key={option.value} className="amenity-checkbox">
// //                   <input 
// //                     type="checkbox"
// //                     id={option.value}
// //                     value={option.value}
// //                     checked={venueData.amenities.includes(option.value)}
// //                     onChange={handleAmenityChange}
// //                     className="form-checkbox"
// //                   />
// //                   <label htmlFor={option.value}>{option.label}</label>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
        
// //         <div className="card form-section">
// //           <h2 className="mb-4">Address Information</h2>
          
// //           <div className="form-group">
// //             <label className="form-label">Street</label>
// //             <input 
// //               type="text"
// //               name="street"
// //               value={venueData.cafeData.address.street}
// //               onChange={handleAddressChange}
// //               className="form-input"
// //               placeholder="E.g., 123 Coffee Street"
// //               required
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label className="form-label">Area</label>
// //             <input 
// //               type="text"
// //               name="area"
// //               value={venueData.cafeData.address.area}
// //               onChange={handleAddressChange}
// //               className="form-input"
// //               placeholder="E.g., Downtown Area"
// //               required
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label className="form-label">City</label>
// //             <input 
// //               type="text"
// //               name="city"
// //               value={venueData.cafeData.address.city}
// //               onChange={handleAddressChange}
// //               className="form-input"
// //               placeholder="E.g., Mumbai"
// //               required
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label className="form-label">Country</label>
// //             <input 
// //               type="text"
// //               name="country"
// //               value={venueData.cafeData.address.country}
// //               onChange={handleAddressChange}
// //               className="form-input"
// //               placeholder="E.g., India"
// //               required
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label className="form-label">Phone</label>
// //             <input 
// //               type="text"
// //               name="phone"
// //               value={venueData.cafeData.address.phone}
// //               onChange={handleAddressChange}
// //               className="form-input"
// //               placeholder="E.g., +91 98765 43600"
// //               required
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label className="form-label">Opening Hours</label>
// //             <input 
// //               type="text"
// //               name="openHours"
// //               value={venueData.cafeData.address.openHours}
// //               onChange={handleAddressChange}
// //               className="form-input"
// //               placeholder="E.g., 8:00 AM - 10:00 PM"
// //               required
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label className="form-label">GPS Coordinates</label>
// //             <div className="flex gap-4">
// //               <input 
// //                 type="text"
// //                 name="latitude"
// //                 value={venueData.cafeData.address.gps.latitude}
// //                 onChange={handleGpsChange}
// //                 className="form-input"
// //                 placeholder="Latitude"
// //               />
// //               <input 
// //                 type="text"
// //                 name="longitude"
// //                 value={venueData.cafeData.address.gps.longitude}
// //                 onChange={handleGpsChange}
// //                 className="form-input"
// //                 placeholder="Longitude"
// //               />
// //               <button 
// //                 type="button"
// //                 className="btn btn-secondary"
// //                 onClick={handleFetchGPS}
// //               >
// //                 Fetch Current GPS
// //               </button>
// //             </div>
// //           </div>
// //         </div>
        
// //         <div className="card form-section">
// //           <h2 className="mb-4">Social Links</h2>
          
// //           <div className="form-group">
// //             <label className="form-label">Facebook</label>
// //             <input 
// //               type="text"
// //               name="facebook"
// //               value={venueData.cafeData.socialLinks.facebook}
// //               onChange={handleSocialLinksChange}
// //               className="form-input"
// //               placeholder="Facebook profile URL"
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label className="form-label">LinkedIn</label>
// //             <input 
// //               type="text"
// //               name="linkedin"
// //               value={venueData.cafeData.socialLinks.linkedin}
// //               onChange={handleSocialLinksChange}
// //               className="form-input"
// //               placeholder="LinkedIn profile URL"
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label className="form-label">Instagram</label>
// //             <input 
// //               type="text"
// //               name="instagram"
// //               value={venueData.cafeData.socialLinks.instagram}
// //               onChange={handleSocialLinksChange}
// //               className="form-input"
// //               placeholder="Instagram profile URL"
// //             />
// //           </div>
// //         </div>
        
// //         <div className="card form-section">
// //           <h2 className="mb-4">Workspaces</h2>
// //           <p className="mb-4">Add workspaces available at your venue:</p>
          
// //           <div className="items-list">
// //             {venueData.workspaces.map((workspace, index) => (
// //               <WorkspaceItem 
// //                 key={workspace.id}
// //                 workspace={workspace}
// //                 onChange={handleWorkspaceChange}
// //                 onRemove={handleRemoveWorkspace}
// //                 canRemove={venueData.workspaces.length > 1}
// //               />
// //             ))}
// //           </div>
          
// //           <button 
// //             type="button"
// //             className="add-item-btn"
// //             onClick={handleAddWorkspace}
// //           >
// //             + Add Another Workspace
// //           </button>
// //         </div>
        
// //         <div className="card form-section">
// //           <h2 className="mb-4">Food & Beverages</h2>
// //           <p className="mb-4">Add food and beverage items available at your venue:</p>
          
// //           <div className="items-list">
// //             {venueData.foodItems.map((item, index) => (
// //               <FoodItem 
// //                 key={item.id}
// //                 item={item}
// //                 onChange={handleFoodItemChange}
// //                 onRemove={handleRemoveFoodItem}
// //               />
// //             ))}
// //           </div>
          
// //           <button 
// //             type="button"
// //             className="add-item-btn"
// //             onClick={handleAddFoodItem}
// //           >
// //             + Add Food/Beverage Item
// //           </button>
// //         </div>
        
// //         <div className="flex gap-4 mb-4">
// //           <button type="submit" className="btn btn-primary">
// //             Save Venue
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AddVenue;


// import React, { useState } from 'react';
// import WorkspaceItem from './WorkspaceItem';
// import FoodItem from './FoodItem';
// import './admin_style.css';



// const AddVenue = ({ onAddVenue }) => {
//   const [venueData, setVenueData] = useState({
//     type: 'cafe',
//     name: '',
//     location: '',
//     price: '',
//     description: '',
//     amenities: [],
//     imageUrl: '/api/placeholder/300/160',
//     cafeData: {
//       description: '',
//       logo: '/api/placeholder/80/80',
//       socialLinks: {
//         facebook: '',
//         linkedin: '',
//         instagram: ''
//       },
//       address: {
//         street: '',
//         area: '',
//         city: '',
//         country: '',
//         phone: '',
//         openHours: '',
//         gps: {
//           latitude: '',
//           longitude: ''
//         }
//       }
//     },
//     workspaces: [
//       {
//         id: Date.now(),
//         name: '',
//         description: '',
//         price: '',
//         image: '/api/placeholder/100/80'
//       }
//     ],
//     foodItems: []
//   });

//   const [cafeBackgroundPreview, setCafeBackgroundPreview] = useState(venueData.imageUrl);
//   const [cafeLogoPreview, setCafeLogoPreview] = useState(venueData.cafeData.logo);

//   const handleBackgroundImageChange = (e) => {
//     // In a real application, this would handle file uploads to a server
//     // For demo purposes, we're just showing a placeholder image
//     if (e.target.files && e.target.files[0]) {
//       // For demonstration, we'll just use our placeholder API
//       const randomId = Math.floor(Math.random() * 1000);
//       const newImageUrl = `/api/placeholder/300/160?id=${randomId}`;
      
//       setCafeBackgroundPreview(newImageUrl);
//       setVenueData({
//         ...venueData,
//         imageUrl: newImageUrl
//       });
//     }
//   };

//   const handleLogoImageChange = (e) => {
//     // In a real application, this would handle file uploads to a server
//     // For demo purposes, we're just showing a placeholder image
//     if (e.target.files && e.target.files[0]) {
//       // For demonstration, we'll just use our placeholder API
//       const randomId = Math.floor(Math.random() * 1000);
//       const newImageUrl = `/api/placeholder/80/80?id=${randomId}`;
      
//       setCafeLogoPreview(newImageUrl);
//       setVenueData({
//         ...venueData,
//         cafeData: {
//           ...venueData.cafeData,
//           logo: newImageUrl
//         }
//       });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
    
//     if (name.includes('.')) {
//       const [parent, child] = name.split('.');
//       setVenueData({
//         ...venueData,
//         [parent]: {
//           ...venueData[parent],
//           [child]: value
//         }
//       });
//     } else {
//       setVenueData({
//         ...venueData,
//         [name]: value
//       });
//     }
//   };

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setVenueData({
//       ...venueData,
//       cafeData: {
//         ...venueData.cafeData,
//         address: {
//           ...venueData.cafeData.address,
//           [name]: value
//         }
//       }
//     });
//   };

//   const handleGpsChange = (e) => {
//     const { name, value } = e.target;
//     setVenueData({
//       ...venueData,
//       cafeData: {
//         ...venueData.cafeData,
//         address: {
//           ...venueData.cafeData.address,
//           gps: {
//             ...venueData.cafeData.address.gps,
//             [name]: value
//           }
//         }
//       }
//     });
//   };

//   const handleSocialLinksChange = (e) => {
//     const { name, value } = e.target;
//     setVenueData({
//       ...venueData,
//       cafeData: {
//         ...venueData.cafeData,
//         socialLinks: {
//           ...venueData.cafeData.socialLinks,
//           [name]: value
//         }
//       }
//     });
//   };

//   const handleAmenityChange = (e) => {
//     const { value, checked } = e.target;
    
//     if (checked) {
//       setVenueData({
//         ...venueData,
//         amenities: [...venueData.amenities, value]
//       });
//     } else {
//       setVenueData({
//         ...venueData,
//         amenities: venueData.amenities.filter(a => a !== value)
//       });
//     }
//   };

//   const handleAddWorkspace = () => {
//     setVenueData({
//       ...venueData,
//       workspaces: [
//         ...venueData.workspaces,
//         {
//           id: Date.now(),
//           name: '',
//           description: '',
//           price: '',
//           image: '/api/placeholder/100/80'
//         }
//       ]
//     });
//   };

//   const handleWorkspaceChange = (id, field, value) => {
//     setVenueData({
//       ...venueData,
//       workspaces: venueData.workspaces.map(workspace => 
//         workspace.id === id ? { ...workspace, [field]: value } : workspace
//       )
//     });
//   };

//   const handleRemoveWorkspace = (id) => {
//     setVenueData({
//       ...venueData,
//       workspaces: venueData.workspaces.filter(workspace => workspace.id !== id)
//     });
//   };

//   const handleAddFoodItem = () => {
//     setVenueData({
//       ...venueData,
//       foodItems: [
//         ...venueData.foodItems,
//         {
//           id: Date.now(),
//           name: '',
//           description: '',
//           price: '',
//           image: '/api/placeholder/100/80'
//         }
//       ]
//     });
//   };

//   const handleFoodItemChange = (id, field, value) => {
//     setVenueData({
//       ...venueData,
//       foodItems: venueData.foodItems.map(item => 
//         item.id === id ? { ...item, [field]: value } : item
//       )
//     });
//   };

//   const handleRemoveFoodItem = (id) => {
//     setVenueData({
//       ...venueData,
//       foodItems: venueData.foodItems.filter(item => item.id !== id)
//     });
//   };

//   const handleFetchGPS = () => {
//     // In a real app, this would use the browser's geolocation API
//     // For demo purposes, we'll just set some example coordinates
//     setVenueData({
//       ...venueData,
//       cafeData: {
//         ...venueData.cafeData,
//         address: {
//           ...venueData.cafeData.address,
//           gps: {
//             latitude: '19.0760',
//             longitude: '72.8777'
//           }
//         }
//       }
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Create the full address string
//     const fullAddress = `${venueData.cafeData.address.street}, ${venueData.cafeData.address.area}, ${venueData.cafeData.address.city}, ${venueData.cafeData.address.country}`;
    
//     // Prepare the complete venue data
//     const newVenue = {
//       ...venueData,
//       cafeData: {
//         ...venueData.cafeData,
//         name: venueData.name,
//         address: {
//           ...venueData.cafeData.address,
//           full: fullAddress
//         }
//       }
//     };
    
//     onAddVenue(newVenue);
//   };

//   const amenityOptions = [
//     { value: 'wifi', label: 'WiFi' },
//     { value: 'powerOutlets', label: 'Power Outlets' },
//     { value: 'coffeeTea', label: 'Coffee/Tea' },
//     { value: 'foodService', label: 'Food Service' },
//     { value: 'meetingRooms', label: 'Meeting Rooms' },
//     { value: 'printer', label: 'Printer' },
//     { value: 'projector', label: 'Projector' },
//     { value: 'airConditioning', label: 'Air Conditioning' },
//     { value: 'parking', label: 'Parking' }
//   ];

//   return (
//     <div>
//       <h1 className="section-title">Add New Venue</h1>
      
//       <form onSubmit={handleSubmit} className="form-container">
//         <div className="card form-section">
//           <h2 className="mb-4">Basic Information</h2>
          
//           <div className="form-group">
//             <label className="form-label">Venue Type</label>
//             <select 
//               name="type"
//               value={venueData.type}
//               onChange={handleChange}
//               className="form-select"
//             >
//               <option value="cafe">Cafe</option>
//               <option value="coworking">Co-working Space</option>
//               <option value="office">Office Space</option>
//               <option value="library">Library</option>
//             </select>
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">Venue Name</label>
//             <input 
//               type="text"
//               name="name"
//               value={venueData.name}
//               onChange={handleChange}
//               className="form-input"
//               placeholder="E.g., Brew & Work Cafe"
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">Location</label>
//             <input 
//               type="text"
//               name="location"
//               value={venueData.location}
//               onChange={handleChange}
//               className="form-input"
//               placeholder="E.g., Downtown"
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">Base Price (per hour)</label>
//             <input 
//               type="number"
//               name="price"
//               value={venueData.price}
//               onChange={handleChange}
//               className="form-input"
//               placeholder="E.g., 15"
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">Description</label>
//             <textarea 
//               name="description"
//               value={venueData.description}
//               onChange={handleChange}
//               className="form-textarea"
//               placeholder="Describe your venue..."
//               required
//             ></textarea>
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">Venue Background Image</label>
//             <div className="mb-4">
//               <img 
//                 src={cafeBackgroundPreview}
//                 alt="Venue Background Preview"
//                 style={{ 
//                   width: '100%', 
//                   height: '160px', 
//                   objectFit: 'cover', 
//                   borderRadius: '8px',
//                   marginBottom: '12px'
//                 }}
//               />
//               <input 
//                 type="file"
//                 accept="image/*"
//                 onChange={handleBackgroundImageChange}
//                 className="form-input"
//               />
//               <p className="text-muted" style={{ marginTop: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
//                 Recommended size: 1200x600 pixels for best display
//               </p>
//             </div>
//           </div>

//           <div className="form-group">
//             <label className="form-label">Venue Logo</label>
//             <div className="flex gap-4 items-center">
//               <img 
//                 src={cafeLogoPreview}
//                 alt="Venue Logo Preview"
//                 style={{ 
//                   width: '80px', 
//                   height: '80px', 
//                   objectFit: 'cover', 
//                   borderRadius: '50%',
//                   border: '2px solid var(--accent)'
//                 }}
//               />
//               <input 
//                 type="file"
//                 accept="image/*"
//                 onChange={handleLogoImageChange}
//                 className="form-input"
//               />
//             </div>
//             <p className="text-muted" style={{ marginTop: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
//               Recommended size: 400x400 pixels (square format)
//             </p>
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">Amenities</label>
//             <div className="amenities-grid">
//               {amenityOptions.map(option => (
//                 <div key={option.value} className="amenity-checkbox">
//                   <input 
//                     type="checkbox"
//                     id={option.value}
//                     value={option.value}
//                     checked={venueData.amenities.includes(option.value)}
//                     onChange={handleAmenityChange}
//                     className="form-checkbox"
//                   />
//                   <label htmlFor={option.value}>{option.label}</label>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
        
//         <div className="card form-section">
//           <h2 className="mb-4">Address Information</h2>
          
//           <div className="form-group">
//             <label className="form-label">Street</label>
//             <input 
//               type="text"
//               name="street"
//               value={venueData.cafeData.address.street}
//               onChange={handleAddressChange}
//               className="form-input"
//               placeholder="E.g., 123 Coffee Street"
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">Area</label>
//             <input 
//               type="text"
//               name="area"
//               value={venueData.cafeData.address.area}
//               onChange={handleAddressChange}
//               className="form-input"
//               placeholder="E.g., Downtown Area"
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">City</label>
//             <input 
//               type="text"
//               name="city"
//               value={venueData.cafeData.address.city}
//               onChange={handleAddressChange}
//               className="form-input"
//               placeholder="E.g., Mumbai"
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">Country</label>
//             <input 
//               type="text"
//               name="country"
//               value={venueData.cafeData.address.country}
//               onChange={handleAddressChange}
//               className="form-input"
//               placeholder="E.g., India"
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">Phone</label>
//             <input 
//               type="text"
//               name="phone"
//               value={venueData.cafeData.address.phone}
//               onChange={handleAddressChange}
//               className="form-input"
//               placeholder="E.g., +91 98765 43600"
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">Opening Hours</label>
//             <input 
//               type="text"
//               name="openHours"
//               value={venueData.cafeData.address.openHours}
//               onChange={handleAddressChange}
//               className="form-input"
//               placeholder="E.g., 8:00 AM - 10:00 PM"
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">GPS Coordinates</label>
//             <div className="flex gap-4">
//               <input 
//                 type="text"
//                 name="latitude"
//                 value={venueData.cafeData.address.gps.latitude}
//                 onChange={handleGpsChange}
//                 className="form-input"
//                 placeholder="Latitude"
//               />
//               <input 
//                 type="text"
//                 name="longitude"
//                 value={venueData.cafeData.address.gps.longitude}
//                 onChange={handleGpsChange}
//                 className="form-input"
//                 placeholder="Longitude"
//               />
//               <button 
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick={handleFetchGPS}
//               >
//                 Fetch Current GPS
//               </button>
//             </div>
//           </div>
//         </div>
        
//         <div className="card form-section">
//           <h2 className="mb-4">Social Links</h2>
          
//           <div className="form-group">
//             <label className="form-label">Facebook</label>
//             <input 
//               type="text"
//               name="facebook"
//               value={venueData.cafeData.socialLinks.facebook}
//               onChange={handleSocialLinksChange}
//               className="form-input"
//               placeholder="Facebook profile URL"
//             />
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">LinkedIn</label>
//             <input 
//               type="text"
//               name="linkedin"
//               value={venueData.cafeData.socialLinks.linkedin}
//               onChange={handleSocialLinksChange}
//               className="form-input"
//               placeholder="LinkedIn profile URL"
//             />
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">Instagram</label>
//             <input 
//               type="text"
//               name="instagram"
//               value={venueData.cafeData.socialLinks.instagram}
//               onChange={handleSocialLinksChange}
//               className="form-input"
//               placeholder="Instagram profile URL"
//             />
//           </div>
//         </div>
        
//         <div className="card form-section">
//           <h2 className="mb-4">Workspaces</h2>
//           <p className="mb-4">Add workspaces available at your venue:</p>
          
//           <div className="items-list">
//             {venueData.workspaces.map((workspace, index) => (
//               <WorkspaceItem 
//                 key={workspace.id}
//                 workspace={workspace}
//                 onChange={handleWorkspaceChange}
//                 onRemove={handleRemoveWorkspace}
//                 canRemove={venueData.workspaces.length > 1}
//               />
//             ))}
//           </div>
          
//           <button 
//             type="button"
//             className="add-item-btn"
//             onClick={handleAddWorkspace}
//           >
//             + Add Another Workspace
//           </button>
//         </div>
        
//         <div className="card form-section">
//           <h2 className="mb-4">Food & Beverages</h2>
//           <p className="mb-4">Add food and beverage items available at your venue:</p>
          
//           <div className="items-list">
//             {venueData.foodItems.map((item, index) => (
//               <FoodItem 
//                 key={item.id}
//                 item={item}
//                 onChange={handleFoodItemChange}
//                 onRemove={handleRemoveFoodItem}
//               />
//             ))}
//           </div>
          
//           <button 
//             type="button"
//             className="add-item-btn"
//             onClick={handleAddFoodItem}
//           >
//             + Add Food/Beverage Item
//           </button>
//         </div>
        
//         <div className="flex gap-4 mb-4">
//           <button type="submit" className="btn btn-primary">
//             Save Venue
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddVenue;




import React, { useState } from 'react';
import WorkspaceItem from './WorkspaceItem';
import FoodItem from './FoodItem';
import './admin_style.css';

const AddVenue = ({ onAddVenue }) => {
  const [venueData, setVenueData] = useState({
    type: 'cafe',
    name: '',
    location: '',
    price: '',
    description: '',
    amenities: [],
    imageUrl: '/api/placeholder/300/160',
    cafeData: {
      description: '',
      logo: '/api/placeholder/80/80',
      socialLinks: {
        facebook: '',
        linkedin: '',
        instagram: ''
      },
      address: {
        street: '',
        area: '',
        city: '',
        country: '',
        phone: '',
        openHours: '',
        gps: {
          latitude: '',
          longitude: ''
        }
      }
    },
    workspaces: [
      {
        id: Date.now(),
        name: '',
        description: '',
        price: '',
        image: '/api/placeholder/100/80'
      }
    ],
    foodItems: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [cafeBackgroundPreview, setCafeBackgroundPreview] = useState(venueData.imageUrl);
  const [cafeLogoPreview, setCafeLogoPreview] = useState(venueData.cafeData.logo);
  const [uploadProgress, setUploadProgress] = useState({
    background: 0,
    logo: 0,
    workspace: {},
    foodItem: {}
  });

  // Upload image to cloud storage and get URL
  const uploadImageToCloud = async (file, imageType, id = null) => {
    if (!file) return null;
    
    try {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', imageType);
      if (id) formData.append('id', id);
      
      // Track upload progress
      const updateProgress = (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        
        if (imageType === 'background') {
          setUploadProgress(prev => ({ ...prev, background: percentCompleted }));
        } else if (imageType === 'logo') {
          setUploadProgress(prev => ({ ...prev, logo: percentCompleted }));
        } else if (imageType === 'workspace' && id) {
          setUploadProgress(prev => ({
            ...prev,
            workspace: { ...prev.workspace, [id]: percentCompleted }
          }));
        } else if (imageType === 'foodItem' && id) {
          setUploadProgress(prev => ({
            ...prev,
            foodItem: { ...prev.foodItem, [id]: percentCompleted }
          }));
        }
      };

      // Replace with your actual cloud storage API endpoint
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
        onUploadProgress: updateProgress
      });

      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }

      const data = await response.json();
      return data.imageUrl; // Return the URL from cloud storage
    } catch (error) {
      console.error('Error uploading image:', error);
      setSubmitError(`Error uploading ${imageType} image: ${error.message}`);
      return null;
    }
  };

  const handleBackgroundImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Show preview immediately using local URL
      const localPreviewUrl = URL.createObjectURL(file);
      setCafeBackgroundPreview(localPreviewUrl);
      
      // Store the file in the state to upload later when form is submitted
      setVenueData({
        ...venueData,
        backgroundImageFile: file
      });
    }
  };

  const handleLogoImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Show preview immediately using local URL
      const localPreviewUrl = URL.createObjectURL(file);
      setCafeLogoPreview(localPreviewUrl);
      
      // Store the file in the state to upload later when form is submitted
      setVenueData({
        ...venueData,
        cafeData: {
          ...venueData.cafeData,
          logoFile: file
        }
      });
    }
  };

  const handleWorkspaceImageChange = (id, e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Create a preview URL
      const previewUrl = URL.createObjectURL(file);
      
      // Update workspace with file and preview
      setVenueData({
        ...venueData,
        workspaces: venueData.workspaces.map(workspace => 
          workspace.id === id 
            ? { 
                ...workspace, 
                image: previewUrl,
                imageFile: file
              } 
            : workspace
        )
      });
    }
  };

  const handleFoodItemImageChange = (id, e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Create a preview URL
      const previewUrl = URL.createObjectURL(file);
      
      // Update food item with file and preview
      setVenueData({
        ...venueData,
        foodItems: venueData.foodItems.map(item => 
          item.id === id 
            ? { 
                ...item, 
                image: previewUrl,
                imageFile: file
              } 
            : item
        )
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setVenueData({
        ...venueData,
        [parent]: {
          ...venueData[parent],
          [child]: value
        }
      });
    } else {
      setVenueData({
        ...venueData,
        [name]: value
      });
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setVenueData({
      ...venueData,
      cafeData: {
        ...venueData.cafeData,
        address: {
          ...venueData.cafeData.address,
          [name]: value
        }
      }
    });
  };

  const handleGpsChange = (e) => {
    const { name, value } = e.target;
    setVenueData({
      ...venueData,
      cafeData: {
        ...venueData.cafeData,
        address: {
          ...venueData.cafeData.address,
          gps: {
            ...venueData.cafeData.address.gps,
            [name]: value
          }
        }
      }
    });
  };

  const handleSocialLinksChange = (e) => {
    const { name, value } = e.target;
    setVenueData({
      ...venueData,
      cafeData: {
        ...venueData.cafeData,
        socialLinks: {
          ...venueData.cafeData.socialLinks,
          [name]: value
        }
      }
    });
  };

  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setVenueData({
        ...venueData,
        amenities: [...venueData.amenities, value]
      });
    } else {
      setVenueData({
        ...venueData,
        amenities: venueData.amenities.filter(a => a !== value)
      });
    }
  };

  const handleAddWorkspace = () => {
    setVenueData({
      ...venueData,
      workspaces: [
        ...venueData.workspaces,
        {
          id: Date.now(),
          name: '',
          description: '',
          price: '',
          image: '/api/placeholder/100/80'
        }
      ]
    });
  };

  const handleWorkspaceChange = (id, field, value) => {
    setVenueData({
      ...venueData,
      workspaces: venueData.workspaces.map(workspace => 
        workspace.id === id ? { ...workspace, [field]: value } : workspace
      )
    });
  };

  const handleRemoveWorkspace = (id) => {
    setVenueData({
      ...venueData,
      workspaces: venueData.workspaces.filter(workspace => workspace.id !== id)
    });
  };

  const handleAddFoodItem = () => {
    setVenueData({
      ...venueData,
      foodItems: [
        ...venueData.foodItems,
        {
          id: Date.now(),
          name: '',
          description: '',
          price: '',
          image: '/api/placeholder/100/80'
        }
      ]
    });
  };

  const handleFoodItemChange = (id, field, value) => {
    setVenueData({
      ...venueData,
      foodItems: venueData.foodItems.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    });
  };

  const handleRemoveFoodItem = (id) => {
    setVenueData({
      ...venueData,
      foodItems: venueData.foodItems.filter(item => item.id !== id)
    });
  };

  const handleFetchGPS = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setVenueData({
            ...venueData,
            cafeData: {
              ...venueData.cafeData,
              address: {
                ...venueData.cafeData.address,
                gps: {
                  latitude: position.coords.latitude.toFixed(6),
                  longitude: position.coords.longitude.toFixed(6)
                }
              }
            }
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          // Fallback to example coordinates
          setVenueData({
            ...venueData,
            cafeData: {
              ...venueData.cafeData,
              address: {
                ...venueData.cafeData.address,
                gps: {
                  latitude: '19.0760',
                  longitude: '72.8777'
                }
              }
            }
          });
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // Fallback to example coordinates
      setVenueData({
        ...venueData,
        cafeData: {
          ...venueData.cafeData,
          address: {
            ...venueData.cafeData.address,
            gps: {
              latitude: '19.0760',
              longitude: '72.8777'
            }
          }
        }
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    
    try {
      // Upload all images to cloud storage
      let backgroundImageUrl = venueData.imageUrl;
      let logoImageUrl = venueData.cafeData.logo;
      
      // Upload background image if exists
      if (venueData.backgroundImageFile) {
        const uploadedUrl = await uploadImageToCloud(venueData.backgroundImageFile, 'background');
        if (uploadedUrl) backgroundImageUrl = uploadedUrl;
      }
      
      // Upload logo image if exists
      if (venueData.cafeData.logoFile) {
        const uploadedUrl = await uploadImageToCloud(venueData.cafeData.logoFile, 'logo');
        if (uploadedUrl) logoImageUrl = uploadedUrl;
      }
      
      // Upload workspace images
      const updatedWorkspaces = await Promise.all(
        venueData.workspaces.map(async (workspace) => {
          let imageUrl = workspace.image;
          
          if (workspace.imageFile) {
            const uploadedUrl = await uploadImageToCloud(workspace.imageFile, 'workspace', workspace.id);
            if (uploadedUrl) imageUrl = uploadedUrl;
          }
          
          // Remove the imageFile property as we don't need to send it to the API
          const { imageFile, ...workspaceData } = workspace;
          return {
            ...workspaceData,
            image: imageUrl
          };
        })
      );
      
      // Upload food item images
      const updatedFoodItems = await Promise.all(
        venueData.foodItems.map(async (item) => {
          let imageUrl = item.image;
          
          if (item.imageFile) {
            const uploadedUrl = await uploadImageToCloud(item.imageFile, 'foodItem', item.id);
            if (uploadedUrl) imageUrl = uploadedUrl;
          }
          
          // Remove the imageFile property
          const { imageFile, ...itemData } = item;
          return {
            ...itemData,
            image: imageUrl
          };
        })
      );
      
      // Create the full address string
      const fullAddress = `${venueData.cafeData.address.street}, ${venueData.cafeData.address.area}, ${venueData.cafeData.address.city}, ${venueData.cafeData.address.country}`;
      
      // Remove file objects from venue data
      const { backgroundImageFile, ...restVenueData } = venueData;
      const { logoFile, ...restCafeData } = venueData.cafeData;
      
      // Prepare the complete venue data with updated image URLs
      const newVenue = {
        ...restVenueData,
        imageUrl: backgroundImageUrl,
        cafeData: {
          ...restCafeData,
          logo: logoImageUrl,
          name: venueData.name,
          address: {
            ...venueData.cafeData.address,
            full: fullAddress
          }
        },
        workspaces: updatedWorkspaces,
        foodItems: updatedFoodItems
      };
      
      // Send the data to the API
      const response = await fetch('/api/venues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVenue),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add venue');
      }
      
      const responseData = await response.json();
      
      // Call the onAddVenue callback with the new venue data from the API
      if (onAddVenue) {
        onAddVenue(responseData);
      }
      
      setSubmitSuccess(true);
      
      // Reset form or redirect
      // You can either reset the form or redirect the user to another page
      // For now, we'll just show a success message
      
    } catch (error) {
      console.error('Error submitting venue:', error);
      setSubmitError(error.message || 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const amenityOptions = [
    { value: 'wifi', label: 'WiFi' },
    { value: 'powerOutlets', label: 'Power Outlets' },
    { value: 'coffeeTea', label: 'Coffee/Tea' },
    { value: 'foodService', label: 'Food Service' },
    { value: 'meetingRooms', label: 'Meeting Rooms' },
    { value: 'printer', label: 'Printer' },
    { value: 'projector', label: 'Projector' },
    { value: 'airConditioning', label: 'Air Conditioning' },
    { value: 'parking', label: 'Parking' }
  ];

  return (
    <div>
      <h1 className="section-title">Add New Venue</h1>
      
      {submitSuccess && (
        <div className="alert alert-success mb-4">
          Venue added successfully!
        </div>
      )}
      
      {submitError && (
        <div className="alert alert-error mb-4">
          Error: {submitError}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="form-container">
        <div className="card form-section">
          <h2 className="mb-4">Basic Information</h2>
          
          <div className="form-group">
            <label className="form-label">Venue Type</label>
            <select 
              name="type"
              value={venueData.type}
              onChange={handleChange}
              className="form-select"
            >
              <option value="cafe">Cafe</option>
              <option value="coworking">Co-working Space</option>
              <option value="office">Office Space</option>
              <option value="library">Library</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Venue Name</label>
            <input 
              type="text"
              name="name"
              value={venueData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="E.g., Brew & Work Cafe"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Location</label>
            <input 
              type="text"
              name="location"
              value={venueData.location}
              onChange={handleChange}
              className="form-input"
              placeholder="E.g., Downtown"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Base Price (per hour)</label>
            <input 
              type="number"
              name="price"
              value={venueData.price}
              onChange={handleChange}
              className="form-input"
              placeholder="E.g., 15"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea 
              name="description"
              value={venueData.description}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Describe your venue..."
              required
            ></textarea>
          </div>
          
          <div className="form-group">
            <label className="form-label">Venue Background Image</label>
            <div className="mb-4">
              <img 
                src={cafeBackgroundPreview}
                alt="Venue Background Preview"
                style={{ 
                  width: '100%', 
                  height: '160px', 
                  objectFit: 'cover', 
                  borderRadius: '8px',
                  marginBottom: '12px'
                }}
              />
              <input 
                type="file"
                accept="image/*"
                onChange={handleBackgroundImageChange}
                className="form-input"
              />
              {uploadProgress.background > 0 && uploadProgress.background < 100 && (
                <div className="progress mt-2">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${uploadProgress.background}%` }}
                  >
                    {uploadProgress.background}%
                  </div>
                </div>
              )}
              <p className="text-muted" style={{ marginTop: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Recommended size: 1200x600 pixels for best display
              </p>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Venue Logo</label>
            <div className="flex gap-4 items-center">
              <img 
                src={cafeLogoPreview}
                alt="Venue Logo Preview"
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  objectFit: 'cover', 
                  borderRadius: '50%',
                  border: '2px solid var(--accent)'
                }}
              />
              <input 
                type="file"
                accept="image/*"
                onChange={handleLogoImageChange}
                className="form-input"
              />
            </div>
            {uploadProgress.logo > 0 && uploadProgress.logo < 100 && (
              <div className="progress mt-2">
                <div 
                  className="progress-bar" 
                  style={{ width: `${uploadProgress.logo}%` }}
                >
                  {uploadProgress.logo}%
                </div>
              </div>
            )}
            <p className="text-muted" style={{ marginTop: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Recommended size: 400x400 pixels (square format)
            </p>
          </div>
          
          <div className="form-group">
            <label className="form-label">Amenities</label>
            <div className="amenities-grid">
              {amenityOptions.map(option => (
                <div key={option.value} className="amenity-checkbox">
                  <input 
                    type="checkbox"
                    id={option.value}
                    value={option.value}
                    checked={venueData.amenities.includes(option.value)}
                    onChange={handleAmenityChange}
                    className="form-checkbox"
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="card form-section">
          <h2 className="mb-4">Address Information</h2>
          
          <div className="form-group">
            <label className="form-label">Street</label>
            <input 
              type="text"
              name="street"
              value={venueData.cafeData.address.street}
              onChange={handleAddressChange}
              className="form-input"
              placeholder="E.g., 123 Coffee Street"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Area</label>
            <input 
              type="text"
              name="area"
              value={venueData.cafeData.address.area}
              onChange={handleAddressChange}
              className="form-input"
              placeholder="E.g., Downtown Area"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">City</label>
            <input 
              type="text"
              name="city"
              value={venueData.cafeData.address.city}
              onChange={handleAddressChange}
              className="form-input"
              placeholder="E.g., Mumbai"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Country</label>
            <input 
              type="text"
              name="country"
              value={venueData.cafeData.address.country}
              onChange={handleAddressChange}
              className="form-input"
              placeholder="E.g., India"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input 
              type="text"
              name="phone"
              value={venueData.cafeData.address.phone}
              onChange={handleAddressChange}
              className="form-input"
              placeholder="E.g., +91 98765 43600"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Opening Hours</label>
            <input 
              type="text"
              name="openHours"
              value={venueData.cafeData.address.openHours}
              onChange={handleAddressChange}
              className="form-input"
              placeholder="E.g., 8:00 AM - 10:00 PM"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">GPS Coordinates</label>
            <div className="flex gap-4">
              <input 
                type="text"
                name="latitude"
                value={venueData.cafeData.address.gps.latitude}
                onChange={handleGpsChange}
                className="form-input"
                placeholder="Latitude"
              />
              <input 
                type="text"
                name="longitude"
                value={venueData.cafeData.address.gps.longitude}
                onChange={handleGpsChange}
                className="form-input"
                placeholder="Longitude"
              />
              <button 
                type="button"
                className="btn btn-secondary"
                onClick={handleFetchGPS}
              >
                Fetch Current GPS
              </button>
            </div>
          </div>
        </div>
        
        <div className="card form-section">
          <h2 className="mb-4">Social Links</h2>
          
          <div className="form-group">
            <label className="form-label">Facebook</label>
            <input 
              type="text"
              name="facebook"
              value={venueData.cafeData.socialLinks.facebook}
              onChange={handleSocialLinksChange}
              className="form-input"
              placeholder="Facebook profile URL"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">LinkedIn</label>
            <input 
              type="text"
              name="linkedin"
              value={venueData.cafeData.socialLinks.linkedin}
              onChange={handleSocialLinksChange}
              className="form-input"
              placeholder="LinkedIn profile URL"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Instagram</label>
            <input 
              type="text"
              name="instagram"
              value={venueData.cafeData.socialLinks.instagram}
              onChange={handleSocialLinksChange}
              className="form-input"
              placeholder="Instagram profile URL"
            />
          </div>
        </div>
        
        <div className="card form-section">
          <h2 className="mb-4">Workspaces</h2>
          <p className="mb-4">Add workspaces available at your venue:</p>
          
          <div className="items-list">
            {venueData.workspaces.map((workspace) => (
              <WorkspaceItem 
                key={workspace.id}
                workspace={workspace}
                onChange={handleWorkspaceChange}
                onRemove={handleRemoveWorkspace}
                onImageChange={(e) => handleWorkspaceImageChange(workspace.id, e)}
                uploadProgress={uploadProgress.workspace[workspace.id] || 0}
                canRemove={venueData.workspaces.length > 1}
              />
            ))}
          </div>
          
          <button 
            type="button"
            className="add-item-btn"
            onClick={handleAddWorkspace}
          >
            + Add Another Workspace
          </button>
        </div>
        
        <div className="card form-section">
          <h2 className="mb-4">Food & Beverages</h2>
          <p className="mb-4">Add food and beverage items available at your venue:</p>
          
          <div className="items-list">
            {venueData.foodItems.map((item) => (
              <FoodItem 
                key={item.id}
                item={item}
                onChange={handleFoodItemChange}
                onRemove={handleRemoveFoodItem}
                onImageChange={(e) => handleFoodItemImageChange(item.id, e)}
                uploadProgress={uploadProgress.foodItem[item.id] || 0}
              />
            ))}
          </div>
          
          <button 
            type="button"
            className="add-item-btn"
            onClick={handleAddFoodItem}
          >
            + Add Food/Beverage Item
          </button>
        </div>
        
        <div className="flex gap-4 mb-4">
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save Venue'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVenue;