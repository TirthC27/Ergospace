import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, MapPin, Phone, Clock } from "lucide-react";

import "./test.css";

const WorkspacedetailPage = () => {


  const { Id } = useParams();
  const navigate = useNavigate();
  const [workspace, setWorkspace] = useState(null);
  const [activeTab, setActiveTab] = useState("DETAILS");
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    amenities: false,
  });

  useEffect(() => {
    const fetchWorkspaceData = async () => {
      try {
        const response = await fetch(`http://localhost:8002/workspace/${Id}`);
        const data = await response.json();
        setWorkspace(data);
      } catch (error) {
        console.error("Error fetching workspace:", error);
      }
    };

    fetchWorkspaceData();
  }, [Id]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleBack = () => {
    navigate("/workspaces");
  };

  if (!workspace) {
    return <p>Loading workspace...</p>;
  }

  return (
    <div className="cafe-booking-container">
      {/* Back Button */}
      <button onClick={handleBack} className="back-button">
        ← Back to Results
      </button>

      {/* Cafe Banner */}
      <div className="cafe-banner">
        <div className="banner-bg">
          <div className="banner-text">
            <span className="background-text">BACKGROUND BANNER</span>
          </div>
          <img
            src={workspace.background}
            alt="Banner"
            className="banner-image"
          />
        </div>
        <div className="cafe-logo">
          <span className="logo-text">CAFE LOGO</span>
        </div>
      </div>

      {/* Cafe Info */}
      <div className="cafe-info">
        <div className="cafe-info-content">
          <div className="cafe-details">
            <h1 className="cafe-name">{workspace.name}</h1>
            <p className="cafe-description">
              {workspace.description || "No description provided."}
            </p>
          </div>
          <div className="cafe-social">
            <a
              href={workspace.facebook}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              f
            </a>
            <a
              href={workspace.insta}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              ig
            </a>
            <div className="cafe-reviews">Reviews ★★★★★</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <div className="tabs">
          {[
            "DETAILS",
            "WORKSPACE",
            "Reviews",
            "Photos",
            "Locations",
          ].map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active-tab" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* DETAILS Tab */}
        {activeTab === "DETAILS" && (
          <div className="details-tab">
            {/* Description Section */}
            <div className="expandable-section">
              <div
                className="section-header"
                onClick={() => toggleSection("description")}
              >
                <h3 className="section-title">Cafe Description</h3>
                {expandedSections.description ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {expandedSections.description && (
                <div className="section-content">
                  <p className="full-description">
                    {workspace.fullDescription ||
                      `${workspace.name} is a cozy workspace café designed for productivity and comfort. Our space combines the warm ambiance of a café with the functionality of a modern workspace. We've created an environment where professionals, students, and creatives can work efficiently while enjoying premium coffee and delicious food options.

                      Founded in 2020, we've grown to become a hub for remote workers and digital nomads looking for a reliable space to focus and connect. Our staff is dedicated to providing exceptional service to ensure you have everything you need for a productive work session.`}
                  </p>
                </div>
              )}
            </div>

            {/* Amenities Section */}
            <div className="expandable-section">
              <div
                className="section-header"
                onClick={() => toggleSection("amenities")}
              >
                <h3 className="section-title">Cafe Amenities</h3>
                {expandedSections.amenities ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {expandedSections.amenities && (
                <div className="section-content">
                  <div className="amenities-grid">
                    {workspace.amenities.map((amenity) => (
                      <div key={amenity.id} className="amenity-item">
                        <div className="amenity-icon">🔹</div>
                        <span className="amenity-name">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Seating Capacity Section */}
            <div className="expandable-section">
              <div className="section-header">
                <h3 className="section-title">Seating Capacity</h3>
              </div>
              <div className="section-content">
                <div className="capacity-info">
                  {workspace.capacity.map((cap) => (
                    <div key={cap.id} className="capacity-item">
                      <span className="capacity-label">{cap.name}:</span>
                      <span className="capacity-value">
                        {cap.capacity} seats
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Workspace Tab */}
      {activeTab === "WORKSPACE" && (
        <div className="workspace-tab">
          {/* Capacities Display */}
          <div className="capacity-section">
            <h2 className="section-heading">Available Workspace Options</h2>
            <div className="capacity-cards">
              {workspace.capacity.map((cap) => (
                <div key={cap.id} className="menu-card capacity-listing">
                  <div className="capacity-details">
                    <div className="capacity-header">
                      <h3 className="capacity-name">{cap.name}</h3>
                    </div>
                    <p className="capacity-text">
                      <strong>Capacity:</strong> {cap.capacity}
                    </p>
                    <p className="capacity-price">
                      ₹ {cap.rate_per_hour} / hour | ₹ {cap.rate_per_day} / day
                      | ₹ {cap.rate_per_month} / month
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Component */}
          <div className="booking-section">
            <h2 className="section-heading">Book Your Workspace</h2>
            <WorkspaceBooking workspace={workspace} />
          </div>
        </div>
      )}

      {/* Photos Tab */}
      {activeTab === "Photos" && (
        <div className="photos-grid">
          {(workspace.images && workspace.images.length > 0
            ? workspace.images
            : Array.from({ length: 6 }, (_, i) => ({
                id: i,
                url: `/api/placeholder/300/300?text=Cafe+Photo+${i + 1}`,
              }))
          ).map((img, i) => (
            <div key={img.id || i} className="photo-item">
              <img
                src={img.gallery || img.url}
                alt={`Cafe Photo ${i + 1}`}
                className="photo-image"
              />
            </div>
          ))}
        </div>
      )}

      {activeTab === "Reviews" && (
        <div className="reviews-tab">
          <p>Coming Soon ...</p>
          {/* {(reviews?.length > 0 ? reviews : defaultReviews).map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">
                  <span>{review.name?.charAt(0) || "U"}</span>
                </div>
                <div className="reviewer-info">
                  <h3 className="reviewer-name">{review.name}</h3>
                  <div className="reviewer-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < review.rating ? "currentColor" : "none"}
                        className={
                          i < review.rating ? "star-filled" : "star-empty"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))} */}
        </div>
      )}

      {/* Locations Tab */}
      {activeTab === "Locations" && workspace && (
        <div className="location-card">
          <div className="location-content">
            {/* Google Maps Clickable Box */}
            <div
              className="map-container"
              onClick={() => {
                const defaultLatitude = "28.6139"; // Default: New Delhi
                const defaultLongitude = "77.2090";

                let latitude = defaultLatitude;
                let longitude = defaultLongitude;

                if (workspace.location) {
                  const match = workspace.location.match(
                    /POINT\s*\(\s*([\d.-]+)\s+([\d.-]+)\s*\)/
                  );
                  if (match) {
                    longitude = match[1]; // WKT POINT format: (longitude latitude)
                    latitude = match[2];
                  }
                }

                window.open(
                  `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
                  "_blank"
                );
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="map-placeholder">
                <MapPin size={24} className="map-icon" />
                <p className="map-text">Map View</p>
                <p className="map-subtext">Google Maps Integration</p>
              </div>
            </div>

            {/* Dynamic Address Info */}
            <div className="address-container">
              <h3 className="address-title">Address</h3>
              <p className="address-line">
                <MapPin size={18} className="address-icon" />
                <span>{`${workspace.address_1}, ${workspace.city}, ${workspace.state}`}</span>
              </p>
              <p className="address-line">
                <Phone size={18} className="address-icon" />
                <span>{workspace.phone || "Phone number not available"}</span>
              </p>
              <p className="address-line">
                <Clock size={18} className="address-icon" />
                <span>
                  Open: {workspace.start_time} - {workspace.end_time}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Workspace Booking Component
const WorkspaceBooking = ({ workspace }) => {
  // State for booking
  const [selectedCapacity, setSelectedCapacity] = useState(
    workspace.capacity[0]
  );
  const [bookingType, setBookingType] = useState("hour");
  const [bookingDate, setBookingDate] = useState("");
  const [startTime, setStartTime] = useState(workspace.start_time.slice(0, 5));
  const [endTime, setEndTime] = useState("");
  const [hours, setHours] = useState(1); // Default 1 hour
  const [total, setTotal] = useState(0);

  // Format time to HH:MM
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    return `${hours}:${minutes || "00"}`;
  };

  // Calculate end time based on start time and hours
  const calculateEndTime = (start, hoursToAdd) => {
    const [startHours, startMinutes] = start.split(":").map(Number);
    const totalMinutes = startHours * 60 + startMinutes + hoursToAdd * 60;
    const endHours = Math.floor(totalMinutes / 60) % 24;
    const endMinutes = totalMinutes % 60;
    return `${endHours.toString().padStart(2, "0")}:${endMinutes
      .toString()
      .padStart(2, "0")}`;
  };

  // Initialize with default values
  useEffect(() => {
    if (selectedCapacity) {
      setEndTime(calculateEndTime(startTime, hours));
      calculateTotal(bookingType, selectedCapacity, hours);
    }
  }, []);

  // Handle booking type change
  const handleBookingTypeChange = (type) => {
    setBookingType(type);
    setHours(1);

    // Reset times based on booking type
    if (type === "hour") {
      setStartTime(workspace.start_time.slice(0, 5));
      setEndTime(calculateEndTime(workspace.start_time.slice(0, 5), 1));
    } else {
      // For day and month, use cafe operating hours
      setStartTime(workspace.start_time.slice(0, 5));
      setEndTime(workspace.end_time.slice(0, 5));
    }

    calculateTotal(type, selectedCapacity, 1);
  };

  // Handle capacity selection
  const handleCapacityChange = (capacity) => {
    setSelectedCapacity(capacity);
    calculateTotal(bookingType, capacity, hours);
  };

  // Handle hours change
  const handleHoursChange = (newHours) => {
    if (newHours < 1) return; // Minimum 1 hour

    // Check if new end time would exceed closing time
    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = workspace.end_time
      .slice(0, 5)
      .split(":")
      .map(Number);
    const startTimeInMinutes = startHours * 60 + startMinutes;
    const endTimeInMinutes = endHours * 60 + endMinutes;

    if (startTimeInMinutes + newHours * 60 > endTimeInMinutes) {
      alert("Cannot extend beyond cafe closing time");
      return;
    }

    setHours(newHours);
    setEndTime(calculateEndTime(startTime, newHours));
    calculateTotal(bookingType, selectedCapacity, newHours);
  };

  // Handle start time change
  const handleStartTimeChange = (newStartTime) => {
    setStartTime(newStartTime);
    setEndTime(calculateEndTime(newStartTime, hours));
    calculateTotal(bookingType, selectedCapacity, hours);
  };

  // Calculate total price
  const calculateTotal = (type, capacity, hrs) => {
    let calculatedTotal = 0;

    switch (type) {
      case "hour":
        calculatedTotal = capacity.rate_per_hour * hrs;
        break;
      case "day":
        calculatedTotal = capacity.rate_per_day;
        break;
      case "month":
        calculatedTotal = capacity.rate_per_month;
        break;
      default:
        calculatedTotal = 0;
    }

    setTotal(calculatedTotal);
  };

  // Handle booking submission

  const handleBooking = async () => {
    if (!bookingDate) {
      alert("Please select a date");
      return;
    }

    // Set loading state if you have one
    // setIsLoading(true);

    try {
      const bookingDetails = {
        capacity_id: selectedCapacity.id,
        booking_type: bookingType,
        date: bookingDate,
        start_time:
          bookingType === "hour" ? startTime : workspace.start_time.slice(0, 5),
        end_time:
          bookingType === "hour" ? endTime : workspace.end_time.slice(0, 5),
        hours: bookingType === "hour" ? hours : null,
        total_amount: total,
        workspace_id: workspace.id,
        seat: 8, // Added seat parameter as requested
      };

      console.log("Booking details:", bookingDetails);

    // Booking create karne ke liye

    //   const createResponse = await fetch("booking/create-booking/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       // Include authentication token if needed
    //       // 'Authorization': `Bearer ${yourAuthToken}`
    //     },
    //     body: JSON.stringify(bookingDetails),
    //   });

    //   if (!createResponse.ok) {
    //     throw new Error("Failed to create booking");
    //   }

    //   const createData = await createResponse.json();
    //   console.log("Booking created:", createData);

    // To Get Confirm booking data
    
    //   const confirmResponse = await fetch("booking/confirm-booking", {
    //     method: "GET",
    //     headers: {
    //       // Include authentication token if needed
    //       // 'Authorization': `Bearer ${yourAuthToken}`
    //     },
    //   });

    //   if (!confirmResponse.ok) {
    //     throw new Error("Failed to confirm booking");
    //   }

    //   const confirmData = await confirmResponse.json();
    //   console.log("Booking confirmed:", confirmData);

    // Success Card dikana hai

    } catch (error) {
      console.error("Booking error:", error);
      alert("Failed to complete booking. Please try again.");

    } finally {
    //   setIsLoading(false);
    }
  };

  return (
    <div className="booking-form">
      {/* Capacities */}
      <div className="booking-section">
        <h3 className="section-subtitle">Select Capacity</h3>
        <div className="capacity-selection">
          {workspace.capacity.map((cap) => (
            <div
              key={cap.id}
              className={`capacity-option ${
                selectedCapacity.id === cap.id ? "selected-capacity" : ""
              }`}
              onClick={() => handleCapacityChange(cap)}
            >
              <div className="capacity-option-header">
                <h4>{cap.name}</h4>
                <span className="capacity-badge">{cap.capacity} persons</span>
              </div>
              <p className="capacity-rates">
                ₹{cap.rate_per_hour}/hour | ₹{cap.rate_per_day}/day | ₹
                {cap.rate_per_month}/month
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Type */}
      <div className="booking-section">
        <h3 className="section-subtitle">Booking Type</h3>
        <div className="booking-type-options">
          <label className="booking-type-option">
            <input
              type="radio"
              name="bookingType"
              value="hour"
              checked={bookingType === "hour"}
              onChange={() => handleBookingTypeChange("hour")}
            />
            <span>Per Hour</span>
          </label>
          <label className="booking-type-option">
            <input
              type="radio"
              name="bookingType"
              value="day"
              checked={bookingType === "day"}
              onChange={() => handleBookingTypeChange("day")}
            />
            <span>Per Day</span>
          </label>
          <label className="booking-type-option">
            <input
              type="radio"
              name="bookingType"
              value="month"
              checked={bookingType === "month"}
              onChange={() => handleBookingTypeChange("month")}
            />
            <span>Per Month</span>
          </label>
        </div>
      </div>

      {/* Date Selection */}
      <div className="booking-section">
        <h3 className="section-subtitle">Date</h3>
        <input
          type="date"
          className="date-picker"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
        />
      </div>

      {/* Time Selection - Only for Per Hour */}
      {bookingType === "hour" && (
        <div className="booking-section">
          <h3 className="section-subtitle">Time</h3>
          <div className="time-selection">
            <div className="time-input-group">
              <label>Start Time</label>
              <input
                type="time"
                className="time-picker"
                value={startTime}
                onChange={(e) => handleStartTimeChange(e.target.value)}
                min={workspace.start_time.slice(0, 5)}
                max={workspace.end_time.slice(0, 5)}
              />
            </div>
            <div className="time-input-group">
              <label>End Time</label>
              <input
                type="time"
                className="time-picker"
                value={endTime}
                readOnly
              />
            </div>
          </div>

          {/* Hours Adjustment */}
          <div className="hours-adjustment">
            <label>Hours</label>
            <div className="hours-controls">
              <button
                type="button"
                className="hour-btn decrease"
                onClick={() => handleHoursChange(hours - 1)}
              >
                -
              </button>
              <span className="hours-display">{hours}</span>
              <button
                type="button"
                className="hour-btn increase"
                onClick={() => handleHoursChange(hours + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Display Selected Hours for day/month */}
      {bookingType !== "hour" && (
        <div className="booking-section">
          <h3 className="section-subtitle">Time</h3>
          <p className="time-display">
            {formatTime(workspace.start_time)} -{" "}
            {formatTime(workspace.end_time)}
          </p>
        </div>
      )}

      {/* Booking Summary */}
      <div className="booking-summary">
        <h3 className="section-subtitle">Booking Summary</h3>
        <div className="summary-item">
          <span>Capacity Type:</span>
          <span>{selectedCapacity.name}</span>
        </div>
        <div className="summary-item">
          <span>Booking Type:</span>
          <span>
            {bookingType === "hour"
              ? "Per Hour"
              : bookingType === "day"
              ? "Per Day"
              : "Per Month"}
          </span>
        </div>
        {bookingType === "hour" && (
          <div className="summary-item">
            <span>Hours:</span>
            <span>{hours}</span>
          </div>
        )}
        <div className="summary-total">
          <span>Total Amount:</span>
          <span>₹{total}</span>
        </div>
      </div>

      {/* Book Button */}
      <button onClick={handleBooking} className="book-now-btn">
        Book Now
      </button>
    </div>
  );
};

const BookingSuccessCard = ({ bookingData }) => {
  if (!bookingData) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div id="booking-success-card" className="success-card">
      <div className="success-header">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="success-icon"
        >
          <path
            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 4 12 14.01l-3-3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2>Booking Confirmed!</h2>
      </div>

      <div className="booking-details">
        <p>
          <strong>Order ID:</strong> {bookingData.order_id}
        </p>
        <p>
          <strong>Seat:</strong> {bookingData.seat}
        </p>
        <p>
          <strong>Start Time:</strong> {formatDate(bookingData.start_time)}
        </p>
        <p>
          <strong>End Time:</strong> {formatDate(bookingData.end_time)}
        </p>
        <p>
          <strong>Amount Paid:</strong> ${bookingData.amount}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span className="status-completed">{bookingData.status}</span>
        </p>
      </div>

      <div className="booking-actions">
        <button className="primary-button">View Details</button>
        <button className="secondary-button">Add to Calendar</button>
      </div>
    </div>
  );
};

export default WorkspacedetailPage;
