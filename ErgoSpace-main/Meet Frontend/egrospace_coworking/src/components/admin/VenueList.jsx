import React from 'react';
import './admin_style.css';

const VenueList = ({ venues }) => {
  const getAmenityLabel = (amenity) => {
    const amenityMap = {
      wifi: 'WiFi',
      powerOutlets: 'Power Outlets',
      coffeeTea: 'Coffee/Tea',
      foodService: 'Food Service',
      meetingRooms: 'Meeting Rooms',
      printer: 'Printer',
      projector: 'Projector',
      airConditioning: 'AC',
      parking: 'Parking'
    };
    return amenityMap[amenity] || amenity;
  };

  return (
    <div>
      <h1 className="section-title">Your Venues</h1>
      
      {venues.length === 0 ? (
        <div className="card">
          <p>You haven't added any venues yet.</p>
        </div>
      ) : (
        <div className="venue-list">
          {venues.map(venue => (
            <div key={venue.id} className="venue-card">
              <img 
                src={venue.imageUrl || "/api/placeholder/300/160"} 
                alt={venue.name} 
                className="venue-card-img" 
              />
              <div className="venue-card-content">
                <h3 className="venue-name">{venue.name}</h3>
                <p className="venue-details">
                  <strong>Type:</strong> {venue.type.charAt(0).toUpperCase() + venue.type.slice(1)}
                  <br />
                  <strong>Location:</strong> {venue.location}
                  <br />
                  <strong>Rating:</strong> {venue.rating}/5
                </p>
                <div className="venue-amenities">
                  {venue.amenities.map((amenity, index) => (
                    <span key={index} className="venue-amenity">
                      {getAmenityLabel(amenity)}
                    </span>
                  ))}
                </div>
                <p className="venue-price">
                  ${venue.price}/hour
                </p>
                <div className="flex gap-2 mt-4">
                  <button className="btn btn-secondary">Edit</button>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VenueList;