// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './WorkspaceResults.css';
// import Cafe1Img from '../../../assets/cafe1.jpeg'
// import OfficeImg from '../../../assets/office_image.png'

// import Cafe2Img from '../../../assets/cafe2.jpeg'

// // Mock data for demonstration
// const mockWorkspaces = [
 
//   {
//     id: 2,
//     type: 'office',
//     name: 'The Startup Hub',
//     location: 'Midtown',
//     price: 30,
//     rating: 4.8,
//     amenities: ['wifi', 'powerOutlets', 'meetingRooms', 'coffeeTea'],
//     imageUrl: OfficeImg,
//     description: 'Modern coworking space for startups with meeting rooms and fast internet.',
//     // Data needed for OfficeBookingPage
//     officeData: {
//       name: "The Startup Hub",
//       description: "Modern coworking space for startups with meeting rooms and fast internet.",
//       logo: "/api/placeholder/80/80",
//       rating: 4.8,
//       reviews: 120,
//       socialLinks: {
//         facebook: "#",
//         linkedin: "#",
//         instagram: "#"
//       },
//       address: {
//         street: '456 Innovation Avenue',
//         area: 'Midtown',
//         city: 'New York',
//         country: 'USA',
//         full: '456 Innovation Avenue, Midtown, New York, USA',
//         phone: '+1 212-555-6789',
//         openHours: '9:00 AM - 6:00 PM',
//         gps: {
//           latitude: 40.7128,
//           longitude: -74.0060
//         }
//       },
//     },
//     workspaces: [
//       {
//         id: 103,
//         name: "Private Office",
//         description: "Private workspace with a door and soundproof walls.",
//         price: 45,
//         image: "/api/placeholder/100/80"
//       },
//       {
//         id: 104,
//         name: "Shared Desk",
//         description: "Collaborative desk area with high-speed internet.",
//         price: 25,
//         image: "/api/placeholder/100/80"
//       }
//     ],
//     foodItems: [
//       {
//         id: 203,
//         name: "Energy Bars",
//         description: "Healthy snacks to keep you energized.",
//         price: 5,
//         image: "/api/placeholder/100/80"
//       },
//       {
//         id: 204,
//         name: "Smoothie",
//         description: "Fresh fruit smoothie with protein boost.",
//         price: 8,
//         image: "/api/placeholder/100/80"
//       }
//     ],
//     reviews: [
//       {
//         id: 303,
//         name: "James Carter",
//         rating: 5,
//         comment: "Perfect for startups. Great facilities and atmosphere!"
//       },
//       {
//         id: 304,
//         name: "Emily Brown",
//         rating: 4.5,
//         comment: "Very professional environment and excellent internet speed."
//       }
//     ]
//   },
  
// ];

//  // Store the workspace data in localStorage
// export const saveWorkspaceData = (workspace) => {
//   localStorage.setItem('selectedWorkspace', JSON.stringify(workspace));
// };

// const WorkspaceResults = ({ workspaceType, searchParams, filters }) => {
//   const navigate = useNavigate();

//   // Filter workspaces based on type, search params, and filters
//   const filteredWorkspaces = mockWorkspaces.filter(workspace => {
//     // Filter by type if workspaceType is provided
//     if (workspaceType && workspace.type !== workspaceType) return false;
    
//     // Filter by price range if filters.priceRange is provided
//     if (filters?.priceRange && 
//         (workspace.price < filters.priceRange[0] || workspace.price > filters.priceRange[1])) 
//         return false;
    
//     // Filter by amenities if filters.amenities is provided
//     if (filters?.amenities) {
//       const requiredAmenities = Object.keys(filters.amenities)
//         .filter(amenity => filters.amenities[amenity]);
      
//       if (requiredAmenities.length > 0) {
//         const hasAllAmenities = requiredAmenities.every(amenity => 
//           workspace.amenities.includes(amenity)
//         );
//         if (!hasAllAmenities) return false;
//       }
//     }
    
//     return true;
//   });

//   // Function to handle booking button click
//   const handleBookNow = (workspace) => {
//     saveWorkspaceData(workspace);
//     navigate(`/book/${workspace.id}`);
//   };

//   // Render amenity icon
//   const renderAmenityTag = (amenity) => {
//     const amenityMap = {
//       wifi: { icon: '📶', text: 'WiFi' },
//       powerOutlets: { icon: '🔌', text: 'Power' },
//       quietSpace: { icon: '🤫', text: 'Quiet' },
//       meetingRooms: { icon: '👥', text: 'Meetings' },
//       printing: { icon: '🖨️', text: 'Printing' },
//       parking: { icon: '🚗', text: 'Parking' },
//       coffeeTea: { icon: '☕', text: 'Coffee/Tea' },
//       foodService: { icon: '🍽️', text: 'Food' }
//     };

//     const { icon, text } = amenityMap[amenity] || { icon: '', text: amenity };
    
//     return (
//       <span key={amenity} className="amenity-tag">
//         <span className="amenity-icon">{icon}</span> {text}
//       </span>
//     );
//   };

//   // Show empty state when no workspaces match filters
//   if (filteredWorkspaces.length === 0) {
//     return (
//       <div className="workspace-results">
//         <div className="no-results">
//           <h2>No workspaces found</h2>
//           <p>Try adjusting your search criteria or filters.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="workspace-results">
//       <h2 className="results-count">{filteredWorkspaces.length} Workspaces Found</h2>
      
//       <div className="workspace-cards-grid">
//         {filteredWorkspaces.map(workspace => (
//           <div key={workspace.id} className="workspace-card">
//             <div className="workspace-image-container">
//               <img 
//                 src={workspace.imageUrl} 
//                 alt={workspace.name} 
//                 className="workspace-image" 
//               />
//             </div>
            
//             <div className="workspace-content">
//               <div className="workspace-header">
//                 <h3 className="workspace-title">{workspace.name}</h3>
//                 <span className="workspace-price">${workspace.price}/hr</span>
//               </div>
              
//               <p className="workspace-location">{workspace.location}</p>
//               <p className="workspace-description">{workspace.description}</p>
              
//               <div className="workspace-amenities">
//                 {workspace.amenities.map(amenity => renderAmenityTag(amenity))}
//               </div>
              
//               <button 
//                 className="book-now-btn"
//                 onClick={() => handleBookNow(workspace)}
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkspaceResults;




import React from 'react';
import './WorkspaceResults.css';
import { useNavigate } from 'react-router-dom';

//Store the workspace data in localStorage
export const saveWorkspaceData = (workspace) => {
  localStorage.setItem('selectedWorkspace', JSON.stringify(workspace));
};

const WorkspaceResults = ({ workspaceType, searchParams, filters }) => {
  const navigate = useNavigate();
  
  // Safely access search results from searchParams
  const workspaces = searchParams?.results || [];
  const isLoading = searchParams?.loading || false;
  const error = searchParams?.error || null;

  // Filter workspaces based on type and filters
  const filteredWorkspaces = workspaces.filter(workspace => {
    // Filter by type if workspaceType is provided
    if (workspaceType) {
      const apiWorkspaceType = workspace.workspace_type?.toLowerCase();
      // Match "cafe" with "hotdesk" and "office" with "office"
      if (workspaceType === 'cafe' && apiWorkspaceType !== 'hotdesk') return false;
      if (workspaceType === 'office' && apiWorkspaceType !== 'office') return false;
    }
    
    // Filter by price range if filters.priceRange is provided
    if (filters?.priceRange && workspace.price) {
      const [minPrice, maxPrice] = filters.priceRange;
      if (workspace.price < minPrice || workspace.price > maxPrice) return false;
    }
    
    // Filter by amenities if filters.amenities is provided
    if (filters?.amenities) {
      const requiredAmenities = Object.keys(filters.amenities)
        .filter(amenity => filters.amenities[amenity]);
      
      if (requiredAmenities.length > 0 && workspace.amenities) {
        // Check if workspace has all required amenities
        const hasAllAmenities = requiredAmenities.every(requiredAmenity => 
          workspace.amenities.some(amenity => 
            amenity.name?.toLowerCase() === requiredAmenity.toLowerCase()
          )
        );
        if (!hasAllAmenities) return false;
      }
    }
    
    return true;
  });

  // Function to handle booking button click
  const handleBookNow = (workspace) => {
    saveWorkspaceData(workspace);
    navigate(`/workspace/${workspace.id}`);

  };

  // Render amenity icon and text
  const renderAmenityTag = (amenity) => {
    const amenityMap = {
      wifi: { icon: '📶', text: 'WiFi' },
      poweroutlets: { icon: '🔌', text: 'Power' },
      quietspace: { icon: '🤫', text: 'Quiet' },
      meetingrooms: { icon: '👥', text: 'Meetings' },
      printing: { icon: '🖨️', text: 'Printing' },
      parking: { icon: '🚗', text: 'Parking' },
      coffeetea: { icon: '☕', text: 'Coffee/Tea' },
      foodservice: { icon: '🍽️', text: 'Food' }
    };

    // Normalize amenity name to lowercase for case-insensitive matching
    const normalizedAmenity = typeof amenity === 'string' 
      ? amenity.toLowerCase().replace(/\s+/g, '') 
      : '';
    
    const { icon, text } = amenityMap[normalizedAmenity] || 
      { icon: '✓', text: typeof amenity === 'string' ? amenity : 'Amenity' };
    
    return (
      <span key={amenity} className="amenity-tag">
        <span className="amenity-icon">{icon}</span> {text}
      </span>
    );
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="workspace-results">
        <div className="loading-results">
          <h2>Loading workspaces...</h2>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="workspace-results">
        <div className="error-results">
          <h2>Error loading workspaces</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

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
                src={workspace.logo || (workspace.workspace_type?.toLowerCase() === 'office' ? OfficeImg : Cafe1Img)} 
                alt={workspace.name} 
                className="workspace-image" 
              />
            </div>
            
            <div className="workspace-content">
              <div className="workspace-header">
                <h3 className="workspace-title">{workspace.name}</h3>
                {workspace.price && <span className="workspace-price">${workspace.price}/hr</span>}
              </div>
              
              <p className="workspace-location">{workspace.city || 'Location not specified'}</p>
              <p className="workspace-description">{workspace.description || 'No description available'}</p>
              
              <div className="workspace-amenities">
                {workspace.amenities && workspace.amenities.map(amenity => 
                  renderAmenityTag(amenity.name)
                )}
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