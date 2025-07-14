import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkspaceResults.css';
import Cafe1Img from '../../../assets/cafe1.jpeg'
import Cafe2Img from '../../../assets/cafe2.jpeg'

// Mock data for demonstration
const mockWorkspaces = [
  {
    id: 1,
    type: 'cafe',
    name: 'Brew & Work Cafe',
    location: 'Downtown',
    price: 15,
    rating: 4.5,
    amenities: ['wifi', 'powerOutlets', 'coffeeTea', 'foodService'],
    imageUrl: Cafe1Img,
    description: 'Cozy cafe with high-speed WiFi and plenty of power outlets.',
    // Data needed for CafeBookingPage
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
        full: '123 Coffee Street, Downtown Area, Mumbai, India',
        phone: '+91 98765 43210',
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
  },

  {
    id: 2,
    type: 'cafe',
    name: 'Brew & Work Cafe',
    location: 'Downtown',
    price: 15,
    rating: 4.5,
    amenities: ['wifi', 'powerOutlets', 'coffeeTea', 'foodService'],
    imageUrl: Cafe1Img,
    description: 'Cozy cafe with high-speed WiFi and plenty of power outlets.',
    // Data needed for CafeBookingPage
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
        full: '123 Coffee Street, Downtown Area, NewJersey , America ',
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
  },
  
];

 // Store the workspace data in localStorage
export const saveWorkspaceData = (workspace) => {
  localStorage.setItem('selectedWorkspace', JSON.stringify(workspace));
};

const WorkspaceResults = ({ workspaceType, searchParams, filters }) => {
  const navigate = useNavigate();

  // Filter workspaces based on type, search params, and filters
  const filteredWorkspaces = mockWorkspaces.filter(workspace => {
    // Filter by type if workspaceType is provided
    if (workspaceType && workspace.type !== workspaceType) return false;
    
    // Filter by price range if filters.priceRange is provided
    if (filters?.priceRange && 
        (workspace.price < filters.priceRange[0] || workspace.price > filters.priceRange[1])) 
        return false;
    
    // Filter by amenities if filters.amenities is provided
    if (filters?.amenities) {
      const requiredAmenities = Object.keys(filters.amenities)
        .filter(amenity => filters.amenities[amenity]);
      
      if (requiredAmenities.length > 0) {
        const hasAllAmenities = requiredAmenities.every(amenity => 
          workspace.amenities.includes(amenity)
        );
        if (!hasAllAmenities) return false;
      }
    }
    
    return true;
  });

  // Function to handle booking button click
  const handleBookNow = (workspace) => {
    saveWorkspaceData(workspace);
    navigate(`/book/${workspace.id}`);
  };

  // Render amenity icon
  const renderAmenityTag = (amenity) => {
    const amenityMap = {
      wifi: { icon: '📶', text: 'WiFi' },
      powerOutlets: { icon: '🔌', text: 'Power' },
      quietSpace: { icon: '🤫', text: 'Quiet' },
      meetingRooms: { icon: '👥', text: 'Meetings' },
      printing: { icon: '🖨️', text: 'Printing' },
      parking: { icon: '🚗', text: 'Parking' },
      coffeeTea: { icon: '☕', text: 'Coffee/Tea' },
      foodService: { icon: '🍽️', text: 'Food' }
    };

    const { icon, text } = amenityMap[amenity] || { icon: '', text: amenity };
    
    return (
      <span key={amenity} className="amenity-tag">
        <span className="amenity-icon">{icon}</span> {text}
      </span>
    );
  };

  // Show empty state when no workspaces match filters
  if (filteredWorkspaces.length === 0) {
    return (
      <div className="workspace-results">
        <div className="no-results">
          <h2>No workspaces found</h2>
          <p>Try adjusting your search criteria or filters.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="workspace-results">
      <h2 className="results-count">{filteredWorkspaces.length} Workspaces Found</h2>
      
      <div className="workspace-cards-grid">
        {filteredWorkspaces.map(workspace => (
          <div key={workspace.id} className="workspace-card">
            <div className="workspace-image-container">
              <img 
                src={workspace.imageUrl} 
                alt={workspace.name} 
                className="workspace-image" 
              />
            </div>
            
            <div className="workspace-content">
              <div className="workspace-header">
                <h3 className="workspace-title">{workspace.name}</h3>
                <span className="workspace-price">${workspace.price}/hr</span>
              </div>
              
              <p className="workspace-location">{workspace.location}</p>
              <p className="workspace-description">{workspace.description}</p>
              
              <div className="workspace-amenities">
                {workspace.amenities.map(amenity => renderAmenityTag(amenity))}
              </div>
              
              <button 
                className="book-now-btn"
                onClick={() => handleBookNow(workspace)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkspaceResults;