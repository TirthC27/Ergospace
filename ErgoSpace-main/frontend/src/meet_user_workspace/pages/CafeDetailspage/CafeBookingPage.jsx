import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Camera,
  MapPin,
  Star,
  Phone,
  Clock,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
import "./CafeBookingPage.css";

// Main App Component
export default function CafeBookingPage() {
  const { workspaceId } = useParams();
  const navigate = useNavigate();

  // Get workspace data from localStorage
  const getWorkspaceData = () => {
    const data = localStorage.getItem("selectedWorkspace");
    return data ? JSON.parse(data) : null;
  };

  const workspaceData = getWorkspaceData();

  // Redirect if no workspace data is found
  useEffect(() => {
    if (!workspaceData) {
      navigate("/workspaces");
    }
  }, [workspaceData, navigate]);

  // If no data loaded yet, show loading
  if (!workspaceData) {
    return <div className="loading">Loading workspace data...</div>;
  }

  // Destructure the workspaceData
  const { cafeData, workspaces, foodItems, reviews } = workspaceData;

  // State for active tab
  const [activeTab, setActiveTab] = useState("WORKSPACE");

  // State for workspace and menu selections
  const [workspaceHours, setWorkspaceHours] = useState(1);
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookingComplete, setBookingComplete] = useState(false);

  // Calculate total price whenever cart or workspace selection changes
  useEffect(() => {
    let total = 0;
    if (selectedWorkspace) {
      total += selectedWorkspace.price * workspaceHours;
    }

    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });

    setTotalPrice(total);
  }, [selectedWorkspace, workspaceHours, cartItems]);

  // Function to add workspace to selection
  const selectWorkspace = (workspace) => {
    setSelectedWorkspace(workspace);
  };

  // Function to add menu item to cart
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to remove menu item from cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Function to increase workspace hours
  const incrementHours = () => {
    setWorkspaceHours(workspaceHours + 1);
  };

  // Function to decrease workspace hours
  const decrementHours = () => {
    if (workspaceHours > 1) {
      setWorkspaceHours(workspaceHours - 1);
    }
  };

  // Function to handle payment
  const handlePayment = () => {
    // In a real app, this would integrate with Razorpay
    console.log("Processing payment...");

    // For demo purposes, simulate a successful payment
    setTimeout(() => {
      setBookingComplete(true);
    }, 1000);
  };

  // Function to handle going back to search results
  const handleBack = () => {
    navigate("/workspaces");
  };

  // If booking is complete, show success page
  if (bookingComplete) {
    return (
      <BookingSuccessPage
        cafeData={cafeData}
        workspace={selectedWorkspace}
        workspaceHours={workspaceHours}
        menuItems={cartItems}
        totalAmount={totalPrice}
        onBack={handleBack}
      />
    );
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
            src="/api/placeholder/1200/300"
            alt="Banner"
            className="banner-image"
          />
        </div>

        {/* Cafe Logo */}
        <div className="cafe-logo">
          <span className="logo-text">CAFE LOGO</span>
        </div>
      </div>

      {/* Cafe Info */}
      <div className="cafe-info">
        <div className="cafe-info-content">
          <div className="cafe-details">
            <h1 className="cafe-name">{cafeData.name}</h1>
            <p className="cafe-description">{cafeData.description}</p>
          </div>
          <div className="cafe-social">
            <a href={cafeData.socialLinks.facebook} className="social-link">
              f
            </a>
            <a href={cafeData.socialLinks.linkedin} className="social-link">
              in
            </a>
            <a href={cafeData.socialLinks.instagram} className="social-link">
              ig
            </a>
            <div className="cafe-reviews">Reviews★★★★★</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <div className="tabs">
          {["WORKSPACE", "Menu Items", "Reviews", "Photos", "Locations"].map(
            (tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? "active-tab" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            )
          )}
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Workspace Tab */}
        {activeTab === "WORKSPACE" && (
          <div className="workspace-tab">
            <div className="bestseller-tag">BESTSELLER</div>
            {workspaces.map((workspace) => (
              <div key={workspace.id} className="menu-card">
                <img
                  src={workspace.image}
                  alt={workspace.name}
                  className="workspace-image"
                />
                <div className="workspace-details">
                  <h3 className="workspace-name">{workspace.name}</h3>
                  <p className="workspace-description">
                    {workspace.description}
                  </p>
                </div>
                <div className="workspace-actions">
                  <div className="workspace-price">₹ {workspace.price}/hrs</div>
                  <div className="workspace-booking">
                    <div className="hour-counter">
                      <button onClick={decrementHours} className="counter-btn">
                        -
                      </button>
                      <span className="hour-count">{workspaceHours}</span>
                      <button onClick={incrementHours} className="counter-btn">
                        +
                      </button>
                    </div>
                    <button
                      className="book-btn"
                      onClick={() => selectWorkspace(workspace)}
                    >
                      BOOK
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Menu Items Tab */}
        {activeTab === "Menu Items" && (
          <div className="menu-tab">
            <div className="bestseller-tag">BESTSELLER</div>
            {foodItems.map((item) => (
              <div key={item.id} className="menu-card">
                <img src={item.image} alt={item.name} className="menu-image" />
                <div className="menu-details">
                  <h3 className="menu-name">{item.name}</h3>
                  <p className="menu-description">{item.description}</p>
                </div>
                <div className="menu-actions">
                  <div className="menu-price">₹ {item.price}</div>
                  <div className="menu-booking">
                    <div className="quantity-counter">
                      <span className="quantity-count">1</span>
                    </div>
                    <button
                      className="book-btn"
                      onClick={() => addToCart(item)}
                    >
                      BOOK
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "Reviews" && reviews && (
          <div className="reviews-tab">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="reviewer-avatar">
                    <span>{review.name.charAt(0)}</span>
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
            ))}
          </div>
        )}

        {/* Photos Tab */}
        {activeTab === "Photos" && (
          <div className="photos-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="photo-item">
                <img
                  src={`/api/placeholder/300/300?text=Cafe Photo ${i}`}
                  alt={`Cafe Photo ${i}`}
                  className="photo-image"
                />
              </div>
            ))}
          </div>
        )}

        {/* Locations Tab */}
        {activeTab === "Locations" && cafeData && (
          <div className="location-card">
            <div className="location-content">
              {/* Google Maps Clickable Box */}
              <div
                className="map-container"
                onClick={() => {
                  const { latitude, longitude } = cafeData.address.gps;
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
                  <span>{cafeData.address.full}</span>
                </p>
                <p className="address-line">
                  <Phone size={18} className="address-icon" />
                  <span>{cafeData.address.phone}</span>
                </p>
                <p className="address-line">
                  <Clock size={18} className="address-icon" />
                  <span>Open: {cafeData.address.openHours}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Total Section - Fixed at bottom */}
      <div className="total-section">
        <div className="total-title">Total:</div>
        {selectedWorkspace && (
          <div className="order-item">
            <span className="item-name">{selectedWorkspace.name}</span>
            <div className="item-details">
              <span className="item-quantity">{workspaceHours}</span>
              <span className="item-price">
                ₹ {selectedWorkspace.price * workspaceHours}
              </span>
            </div>
          </div>
        )}

        {cartItems.map((item) => (
          <div key={item.id} className="order-item">
            <span className="item-name">{item.name}</span>
            <div className="item-details">
              <span className="item-quantity">{item.quantity}</span>
              <span className="item-price">₹ {item.price * item.quantity}</span>
            </div>
          </div>
        ))}

        <div className="total-footer">
          <span className="final-total">Total: {totalPrice}</span>
          <button
            className="pay-button"
            onClick={handlePayment}
            disabled={!selectedWorkspace && cartItems.length === 0}
          >
            Pay {totalPrice}
          </button>
        </div>
      </div>
    </div>
  );
}

// Booking Success Page Component
function BookingSuccessPage({
  cafeData,
  workspace,
  workspaceHours,
  menuItems,
  totalAmount,
  onBack,
}) {
  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon-container">
          <div className="success-icon">
            <svg
              className="checkmark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="success-title">Booking Successful!</h1>

        <div className="booking-section">
          <h2 className="section-title">Booking Details</h2>
          <p className="booking-detail">Cafe: {cafeData.name}</p>
          <p className="booking-detail">
            Booking ID: BK
            {Math.floor(Math.random() * 10000)
              .toString()
              .padStart(4, "0")}
          </p>
          <p className="booking-detail">
            Date: {new Date().toLocaleDateString()}
          </p>
          <p className="booking-detail">
            Time: {new Date().toLocaleTimeString()}
          </p>
        </div>

        {workspace && (
          <div className="booking-section">
            <h2 className="section-title">Workspace</h2>
            <div className="booked-item">
              <span className="item-name">{workspace.name}</span>
              <div className="item-details">
                <span className="item-quantity">{workspaceHours} hrs</span>
                <span className="item-price">
                  ₹ {workspace.price * workspaceHours}
                </span>
              </div>
            </div>
          </div>
        )}

        {menuItems && menuItems.length > 0 && (
          <div className="booking-section">
            <h2 className="section-title">Food & Beverages</h2>
            {menuItems.map((item) => (
              <div key={item.id} className="booked-item">
                <span className="item-name">{item.name}</span>
                <div className="item-details">
                  <span className="item-quantity">x{item.quantity}</span>
                  <span className="item-price">
                    ₹ {item.price * item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="total-amount">
          <span>Total Paid:</span>
          <span>₹ {totalAmount}</span>
        </div>

        <div className="success-footer">
          <p className="confirmation-message">
            A confirmation has been sent to your email.
          </p>
          <button className="home-button" onClick={onBack}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
