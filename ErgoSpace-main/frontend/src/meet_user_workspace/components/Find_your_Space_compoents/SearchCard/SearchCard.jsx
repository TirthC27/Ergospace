// 
import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Navigation, Coffee, Building } from 'lucide-react';
import './SearchCard.css';

const SearchCard = ({ workspaceType, setWorkspaceType, onSearch }) => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ location, date, time });
  };

  const useCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        
        // In a production app, you would use Google's Geocoding API here
        // This is a simplified example showing how you would structure the call
        
        // Example of how you might use the Google Maps Geocoding API
        // Note: In a real app, you would need to implement proper API key handling
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`)
          .then(response => response.json())
          .then(data => {
            if (data.status === 'OK') {
              // Use the formatted address from Google's response
              setLocation(data.results[0].formatted_address);
            } else {
              // Fallback
              setLocation('Current Location');
            }
          })
          .catch(() => {
            setLocation('Current Location');
          });
      });
    }
  };

  return (
    // <div className="search-card-container">
      <div className="search-card-wrapper">
        <div className="workspace-toggle">
          <button 
            className={`workspace-btn ${workspaceType === 'cafe' ? 'active' : ''}`}
            onClick={() => setWorkspaceType('cafe')}
          >
            <Coffee size={18} />
            <span>Cafe</span>
          </button>
          <button 
            className={`workspace-btn ${workspaceType === 'office' ? 'active' : ''}`}
            onClick={() => setWorkspaceType('office')}
          >
            <Building size={18} />
            <span>Startup Office</span>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="search-form">
          <div className="input-group">
            <label htmlFor="location">
              <MapPin size={18} />
              <span>Location</span>
            </label>
            <div className="location-input-wrapper">
              <input
                type="text"
                id="location"
                placeholder="Enter city, address, or landmark"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <button 
                type="button" 
                className="current-location-btn"
                onClick={useCurrentLocation}
                aria-label="Use current location"
              >
                <Navigation size={16} />
              </button>
            </div>
          </div>
          
          <div className="search-form-row">
            <div className="input-group">
              <label htmlFor="date">
                <Calendar size={18} />
                <span>Date</span>
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="time">
                <Clock size={18} />
                <span>Time</span>
              </label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>
          
          <button type="submit" className="search-submit-btn">
            Find Workspace
          </button>
        </form>
      </div>
    //</div>
  );
};

export default SearchCard;