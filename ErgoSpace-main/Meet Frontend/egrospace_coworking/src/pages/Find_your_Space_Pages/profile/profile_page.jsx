import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Clock,
  Settings,
  Bell,
  Shield,
  ChevronRight,
  Edit2,
  Camera,
  Coffee,
} from "lucide-react";
import "./UserProfilePage.css";

// Dummy user data
const userData = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Main Street, Apartment 4B, New York, NY 10001",
  memberSince: "June 2023",
  profileImage: "/api/placeholder/150/150",
  paymentMethods: [
    {
      id: 1,
      type: "Credit Card",
      name: "Visa ending in 4242",
      isDefault: true,
    },
    {
      id: 2,
      type: "Credit Card",
      name: "Mastercard ending in 8888",
      isDefault: false,
    },
  ],
  preferences: {
    notifications: true,
    marketingEmails: false,
    twoFactorAuth: true,
  },
  stats: {
    totalBookings: 27,
    favoriteLocation: "Downtown",
    totalHoursBooked: 152,
    averageSessionLength: 3.5,
  },
};

// Profile stat card component
const StatCard = ({ title, value, icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <span className="stat-title">{title}</span>
        <div className="stat-icon">{icon}</div>
      </div>
      <div className="stat-value">{value}</div>
    </div>
  );
};

// Profile section component
const ProfileSection = ({ title, children, actionText, onAction }) => {
  return (
    <div className="profile-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {actionText && (
          <button onClick={onAction} className="section-action">
            {actionText} <ChevronRight size={16} />
          </button>
        )}
      </div>
      <div className="section-content">{children}</div>
    </div>
  );
};

// Payment method component
const PaymentMethod = ({ method }) => {
  return (
    <div className="payment-method">
      <div className="payment-method-info">
        <CreditCard size={20} className="payment-icon" />
        <div>
          <p className="payment-name">{method.name}</p>
          {method.isDefault && (
            <span className="payment-default">Default payment method</span>
          )}
        </div>
      </div>
      <button className="edit-button">
        <Edit2 size={16} />
      </button>
    </div>
  );
};

// Toggle switch component
const ToggleSwitch = ({ enabled, onChange }) => {
  return (
    <button
      className={`toggle-switch ${enabled ? "toggle-enabled" : ""}`}
      onClick={() => onChange(!enabled)}
    >
      <span
        className={`toggle-slider ${enabled ? "toggle-slider-enabled" : ""}`}
      />
    </button>
  );
};

// Preference item component
const PreferenceItem = ({ title, description, enabled, onChange }) => {
  return (
    <div className="preference-item">
      <div className="preference-info">
        <p className="preference-title">{title}</p>
        <p className="preference-description">{description}</p>
      </div>
      <ToggleSwitch enabled={enabled} onChange={onChange} />
    </div>
  );
};

// Main component
export default function UserProfilePage() {
  const [preferences, setPreferences] = useState(userData.preferences);

  const updatePreference = (key, value) => {
    setPreferences({
      ...preferences,
      [key]: value,
    });
  };

  return (
    <div className="profile-container">
      <div className="content-wrapper">
        <header className="page-header">
          <h1 className="page-title">My Profile</h1>
          <p className="page-subtitle">
            Manage your account details and preferences
          </p>
        </header>

        <div className="profile-grid">
          {/* Left column - Profile info */}
          <div className="profile-left-column">
            <div className="profile-card">
              <div className="profile-image-container">
                <img
                  src={userData.profileImage}
                  alt="Profile"
                  className="profile-image"
                />
                <button className="camera-button">
                  <Camera size={16} className="camera-icon" />
                </button>
              </div>
              <h2 className="profile-name">{userData.name}</h2>
              <p className="member-since">
                Member since {userData.memberSince}
              </p>
              <button className="edit-profile-button">Edit Profile</button>
            </div>

            <div className="stats-grid">
              <StatCard
                title="Total Bookings"
                value={userData.stats.totalBookings}
                icon={<Coffee size={20} />}
              />
              <StatCard
                title="Hours Booked"
                value={userData.stats.totalHoursBooked}
                icon={<Clock size={20} />}
              />
            </div>

            <ProfileSection title="Account Statistics">
              <div className="account-stats-grid">
                <StatCard
                  title="Favorite Location"
                  value={userData.stats.favoriteLocation}
                  icon={<MapPin size={20} />}
                />
                <StatCard
                  title="Average Session"
                  value={`${userData.stats.averageSessionLength} hours`}
                  icon={<Clock size={20} />}
                />
              </div>
            </ProfileSection>
          </div>

          {/* Right column - Payment methods and preferences */}
          <div className="profile-right-column">
            <ProfileSection title="Contact Information">
              <div className="contact-list">
                <div className="contact-item">
                  <User size={20} className="contact-icon" />
                  <div>
                    <p className="contact-label">Full Name</p>
                    <p className="contact-value">{userData.name}</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Mail size={20} className="contact-icon" />
                  <div>
                    <p className="contact-label">Email</p>
                    <p className="contact-value">{userData.email}</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Phone size={20} className="contact-icon" />
                  <div>
                    <p className="contact-label">Phone</p>
                    <p className="contact-value">{userData.phone}</p>
                  </div>
                </div>

                <div className="contact-item">
                  <MapPin size={20} className="contact-icon" />
                  <div>
                    <p className="contact-label">Address</p>
                    <p className="contact-value">{userData.address}</p>
                  </div>
                </div>
              </div>
            </ProfileSection>

            <ProfileSection title="Preferences & Settings">
              <div className="preferences-list">
                <PreferenceItem
                  title="Push Notifications"
                  description="Receive notifications about booking confirmations and reminders"
                  enabled={preferences.notifications}
                  onChange={(value) => updatePreference("notifications", value)}
                />
                <PreferenceItem
                  title="Two-Factor Authentication"
                  description="Add an extra layer of security to your account"
                  enabled={preferences.twoFactorAuth}
                  onChange={(value) => updatePreference("twoFactorAuth", value)}
                />
              </div>
            </ProfileSection>

            {/* <ProfileSection 
              title="Payment Methods" 
              actionText="Add New"
              onAction={() => console.log("Add payment method")}
            >
              <div className="payment-methods-list">
                {userData.paymentMethods.map(method => (
                  <PaymentMethod key={method.id} method={method} />
                ))}
              </div>
            </ProfileSection> */}

            <div className="footer-actions">
              <button className="delete-account-button">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
