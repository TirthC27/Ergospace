import React, { useState } from 'react';
import './admin_style.css';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import VenueList from './VenueList';
import AddVenue from './AddVenue';


const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [venues, setVenues] = useState([
    {
      id: 1,
      type: 'cafe',
      name: 'Brew & Work Cafe',
      location: 'Downtown',
      price: 15,
      rating: 4.5,
      amenities: ['wifi', 'powerOutlets', 'coffeeTea', 'foodService'],
      imageUrl: '/api/placeholder/300/160',
      description: 'Cozy cafe with high-speed WiFi and plenty of power outlets.',
      cafeData: {
        name: "Brew & Work Cafe",
        description: "Cozy cafe with high-speed WiFi and plenty of power outlets.",
        logo: "/api/placeholder/80/80",
        rating: 4.5,
        reviews: 98,
        socialLinks: {
          facebook: "#",
          linkedin: "#",
          instagram: "#"
        },
        address: {
          street: '123 Coffee Street',
          area: 'Downtown Area',
          city: 'Mumbai',
          country: 'America',
          full: '123 Coffee Street, Downtown Area, NewJersey, America',
          phone: '+91 98765 43600',
          openHours: '8:00 AM - 10:00 PM',
          gps: {
            latitude: 19.0760,
            longitude: 72.8777
          }
        },
      },
      workspaces: [
        {
          id: 101,
          name: "Window Side Workspace",
          description: "Street view with natural lighting",
          price: 15,
          image: "/api/placeholder/100/80"
        },
        {
          id: 102,
          name: "Quiet Corner",
          description: "Secluded area perfect for focused work",
          price: 18,
          image: "/api/placeholder/100/80"
        }
      ],
      foodItems: [
        {
          id: 201,
          name: "Avocado Toast",
          description: "Fresh avocado on artisan bread",
          price: 12,
          image: "/api/placeholder/100/80"
        },
        {
          id: 202,
          name: "Cappuccino",
          description: "Rich espresso with steamed milk",
          price: 6,
          image: "/api/placeholder/100/80"
        }
      ],
      reviews: [
        {
          id: 301,
          name: "Alex Chen",
          rating: 5,
          comment: "Perfect atmosphere for working with excellent coffee!"
        },
        {
          id: 302,
          name: "Sarah Johnson",
          rating: 4,
          comment: "Great WiFi speed and comfortable seating. Highly recommended."
        }
      ]
    }
  ]);

  // Mock user data
  const userData = {
    name: "John Smith",
    email: "john@cafespace.com",
    profileImage: "/api/placeholder/80/80"
  };

  const addVenue = (newVenue) => {
    // Create a new venue with a unique ID
    const venue = {
      ...newVenue,
      id: venues.length > 0 ? Math.max(...venues.map(v => v.id)) + 1 : 1
    };
    setVenues([...venues, venue]);
    setActiveSection('venues');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'venues':
        return <VenueList venues={venues} />;
      case 'addVenue':
        return <AddVenue onAddVenue={addVenue} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="admin-panel">
      <Sidebar 
        userData={userData}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPanel;