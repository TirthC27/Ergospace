import { useState } from 'react';
import { Calendar, Coffee, Clock, MapPin, Receipt, Wifi, Power, Utensils, ChevronRight } from 'lucide-react';
import './cafe-booking-styles.css';

// Dummy data for past and future bookings
const pastBookings = [
  {
    id: 1,
    billId: "INV-20250425-001",
    name: "Brew & Work Cafe",
    image: "/api/placeholder/300/200",
    description: "Cozy cafe with high-speed WiFi and plenty of power outlets.",
    location: "Downtown",
    date: "April 25, 2025",
    time: "10:00 AM - 1:00 PM",
    duration: 3, // hours
    pricePerHour: 15,
    totalAmount: 45,
    amenities: ["WiFi", "Power", "Coffee/Tea", "Food"]
  },
  {
    id: 2,
    billId: "INV-20250422-087",
    name: "Quiet Corner",
    image: "/api/placeholder/300/200",
    description: "Peaceful atmosphere perfect for focused work sessions.",
    location: "Midtown",
    date: "April 22, 2025",
    time: "2:00 PM - 5:00 PM",
    duration: 3,
    pricePerHour: 12,
    totalAmount: 36,
    amenities: ["WiFi", "Power", "Coffee/Tea"]
  },
  {
    id: 3,
    billId: "INV-20250418-156",
    name: "Digital Nomad Hub",
    image: "/api/placeholder/300/200",
    description: "Modern workspace with ergonomic seating and gourmet coffee.",
    location: "Tech District",
    date: "April 18, 2025",
    time: "9:00 AM - 4:00 PM",
    duration: 7,
    pricePerHour: 20,
    totalAmount: 140,
    amenities: ["WiFi", "Power", "Coffee/Tea", "Food"]
  }
];

const futureBookings = [
  {
    id: 4,
    billId: "INV-20250503-042",
    name: "The Focused Space",
    image: "/api/placeholder/300/200",
    description: "Minimalist design with private booths and premium coffee.",
    location: "West End",
    date: "May 3, 2025",
    time: "11:00 AM - 3:00 PM",
    duration: 4,
    pricePerHour: 18,
    totalAmount: 72,
    amenities: ["WiFi", "Power", "Coffee/Tea", "Food"]
  },
  {
    id: 5,
    billId: "INV-20250507-113",
    name: "Brew & Work Cafe",
    image: "/api/placeholder/300/200",
    description: "Cozy cafe with high-speed WiFi and plenty of power outlets.",
    location: "Downtown",
    date: "May 7, 2025",
    time: "9:00 AM - 12:00 PM",
    duration: 3,
    pricePerHour: 15,
    totalAmount: 45,
    amenities: ["WiFi", "Power", "Coffee/Tea", "Food"]
  }
];

// Amenity icon mapping component
const AmenityIcon = ({ type }) => {
  switch (type) {
    case "WiFi":
      return <Wifi size={16} className="text-blue-400" />;
    case "Power":
      return <Power size={16} className="text-green-400" />;
    case "Coffee/Tea":
      return <Coffee size={16} className="text-amber-400" />;
    case "Food":
      return <Utensils size={16} className="text-red-400" />;
    default:
      return null;
  }
};

// Booking card component for individual bookings
const BookingCard = ({ booking }) => {
  return (
    <div className="booking-card">
      <div className="booking-card-content">
        {/* Cafe Image */}
        <div className="booking-image-container">
          <img 
            src={booking.image} 
            alt={booking.name} 
            className="booking-image"
          />
        </div>
        
        {/* Booking Details */}
        <div className="booking-details">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="booking-name">{booking.name}</h3>
              <div className="booking-location">
                <MapPin size={16} className="mr-1" />
                <span>{booking.location}</span>
              </div>
            </div>
            <div>
              <span className="booking-id">
                {booking.billId}
              </span>
            </div>
          </div>
          
          <p className="booking-description">{booking.description}</p>
          
          <div className="booking-datetime">
            <div className="booking-date">
              <Calendar size={16} className="mr-1" />
              <span>{booking.date}</span>
            </div>
            <div className="booking-time">
              <Clock size={16} className="mr-1" />
              <span>{booking.time}</span>
            </div>
          </div>
          
          <div className="amenities-container">
            {booking.amenities.map((amenity, index) => (
              <div key={index} className="amenity-tag">
                <span className="amenity-icon"><AmenityIcon type={amenity} /></span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
          
          <div className="booking-footer">
            <div className="booking-price-calc">
              <Receipt size={16} className="mr-1" />
              <span>{booking.duration} hours × ${booking.pricePerHour}/hr</span>
            </div>
            <div className="booking-total">
              ${booking.totalAmount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Section component for past or future bookings
const BookingSection = ({ title, bookings }) => {
  return (
    <div className="mb-8">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <button className="view-all-button">
          View All <ChevronRight size={16} />
        </button>
      </div>
      <div>
        {bookings.map(booking => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

// Search/Filter bar component
const SearchFilterBar = () => {
  return (
    <div className="search-filter-bar">
      <div className="flex flex-col md:flex-row gap-4">
        <input 
          type="text" 
          placeholder="Search bookings by cafe name or bill ID..."
          className="search-input"
        />
        <div className="flex gap-2">
          <button className="filter-button">
            <Calendar size={16} className="inline mr-2" />
            Date
          </button>
          <button className="filter-button">
            <MapPin size={16} className="inline mr-2" />
            Location
          </button>
          <button className="search-button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

// Main component
export default function CafeBookingPage() {
  const [activeTab, setActiveTab] = useState("bookings");
  
  return (
    <div className="min-h-screen ">
      <div className="cafe-booking-container">
        <header className="page-header">
          <h1 className="page-title">My Cafe Bookings</h1>
          <p className="page-subtitle">Manage your past and upcoming work space reservations</p>
        </header>
        
        <div className="mb-6">
          <div className="tab-navigation">
            <button 
              className={`tab-button ${activeTab === "bookings" ? "active" : ""}`}
              onClick={() => setActiveTab("bookings")}
            >
              My Bookings
            </button>
            <button 
              className={`tab-button ${activeTab === "explore" ? "active" : ""}`}
              onClick={() => setActiveTab("explore")}
            >
              Explore Cafes
            </button>
          </div>
        </div>
        
        {activeTab === "bookings" ? (
          <>
            <SearchFilterBar />
            <BookingSection title="Upcoming Bookings" bookings={futureBookings} />
            <BookingSection title="Past Bookings" bookings={pastBookings} />
          </>
        ) : (
          <div className="empty-state">
            <Coffee size={48} className="empty-state-icon" />
            <p className="empty-state-text">Explore cafes feature coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}