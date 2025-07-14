import React, { useState } from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ filters, onFilterChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const handlePriceChange = (event, index) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[index] = parseInt(event.target.value);
    
    onFilterChange({
      ...filters,
      priceRange: newPriceRange
    });
  };

  const handleAmenityChange = (amenity) => {
    onFilterChange({
      ...filters,
      amenities: {
        ...filters.amenities,
        [amenity]: !filters.amenities[amenity]
      }
    });
  };

  // Group amenities for better organization
  const amenityGroups = [
    {
      title: "Basic",
      items: ["wifi", "powerOutlets", "quietSpace"]
    },
    {
      title: "Services",
      items: ["meetingRooms", "printing"]
    },
    {
      title: "Convenience",
      items: ["parking", "coffeeTea", "foodService"]
    }
  ];

  // Convert amenity key to display name
  const getAmenityDisplayName = (key) => {
    const displayNames = {
      wifi: "WiFi",
      powerOutlets: "Power Outlets",
      quietSpace: "Quiet Space",
      meetingRooms: "Meeting Rooms",
      printing: "Printing Services",
      parking: "Parking",
      coffeeTea: "Coffee/Tea",
      foodService: "Food Service"
    };
    return displayNames[key] || key;
  };

  return (
    <div className={`filter-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="filter-header">
        <h2>Filters</h2>
        <button 
          className="collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand filters" : "Collapse filters"}
        >
          {isCollapsed ? '↓' : '↑'}
        </button>
      </div>

      <div className="filter-content">
        <div className="filter-section">
          <h3>Price Range</h3>
          <div className="price-display">
            <span className="price-tag">${filters.priceRange[0]}</span>
            <span className="price-separator">-</span>
            <span className="price-tag">${filters.priceRange[1]}</span>
          </div>
          <div className="price-range">
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="1000"
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className="price-slider min-slider"
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className="price-slider max-slider"
              />
              <div className="slider-track"></div>
            </div>
          </div>
        </div>

        <div className="filter-section">
          <h3>Amenities</h3>
          <div className="amenities-container">
            {amenityGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="amenity-group">
                <h4>{group.title}</h4>
                <div className="amenities-list">
                  {group.items.map((amenity) => (
                    <label key={amenity} className="amenity-checkbox">
                      <input
                        type="checkbox"
                        checked={filters.amenities[amenity]}
                        onChange={() => handleAmenityChange(amenity)}
                      />
                      <span className="checkbox-custom"></span>
                      <span className="amenity-label">{getAmenityDisplayName(amenity)}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button className="clear-filters-btn" onClick={() => onFilterChange({
          priceRange: [0, 1000],
          amenities: Object.keys(filters.amenities).reduce((acc, key) => ({...acc, [key]: false}), {})
        })}>
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;

