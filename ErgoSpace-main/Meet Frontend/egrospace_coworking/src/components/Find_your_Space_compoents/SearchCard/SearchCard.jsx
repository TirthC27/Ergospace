// import React, { useState } from 'react';
// import { MapPin, Search, Navigation, Coffee, Building } from 'lucide-react';
// import './SearchCard.css';
// import WorkspaceResults from '../WorkSpaceResult/WorkspaceResult';

// const SearchCard = ({ workspaceType, setWorkspaceType, onSearch }) => {
//   const [searchName, setSearchName] = useState('');
//   const [location, setLocation] = useState('');
//   const [range, setRange] = useState('5'); // Default 5km range
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSearch = () => {

//     function getCookie(name) {
//       const value = `; ${document.cookie}`;
//       console.log(document.cookie)
//       console.log(value)
//       const parts = value.split(`; ${name}=`);
//       console.log(parts)
//       if (parts.length === 2) return parts.pop().split(';').shift();
//     }

//     const sessionId = getCookie('Token');
//     // First, call onSearch with default parameters or current state
//     // This will immediately update the UI while the fetch happens in background
//     onSearch({
//       location: location || 'Any location',
//       searchName: searchName,
//       coordinates: latitude && longitude ? { lat: latitude, lon: longitude } : null,
//       range: range,
//       results: [], // Default empty results until fetch completes
//     });
    
//     // Build the API endpoint based on the workspace type
//     let endpoint = `http://192.168.226.93:8000/workspace/search/?type=${workspaceType === 'cafe' ? 'hotdesk' : 'workspace'}`;
    
//     // Add optional parameters if they exist
//     if (searchName) {
//       endpoint += `&search=${encodeURIComponent(searchName)}`;
//     }
    
//     if (latitude && longitude) {
//       endpoint += `&lat=${latitude}&lon=${longitude}`;
//     }
    
//     if (range) {
//       endpoint += `&range=${range}`;
//     }
    
//     // Send the request to the backend
//     console.log("Sending request to:", endpoint);
    
//     setLoading(true);
//     setError(null);
//     const token = localStorage.getItem("token")
//     console.log("search token")
//     console.log(token);

//     fetch(endpoint,{
//       // credentials: 'include',
//       // headers: {
//       //   'Authorization': `Token ${token}`,
//       //   'Content-Type': 'application/json' // Optional, if you're sending JSON
//       // }
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log("Search results:", data);
//         setLoading(false);
//         // Update again with actual results when they come back
//         onSearch({
//           location: location || 'Any location',
//           searchName: searchName,
//           coordinates: latitude && longitude ? { lat: latitude, lon: longitude } : null,
//           range: range,
//           results: data,
//         });
//       })
//       .catch(err => {
//         console.error("Search error:", err);
//         setError(err.message);
//         setLoading(false);
//       });
//   };

//   const useCurrentLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const { latitude, longitude } = position.coords;
        
//         setLatitude(latitude.toString());
//         setLongitude(longitude.toString());
//         setLocation('Current Location');
//       });
//     }
//   };

//   return (
//     <div className="search-card-wrapper">
//       <div className="workspace-toggle">
//         <button 
//           className={`workspace-btn ${workspaceType === 'cafe' ? 'active' : ''}`}
//           onClick={() => setWorkspaceType('cafe')}
//           type="button"
//         >
//           <Coffee size={18} />
//           <span>Cafe</span>
//         </button> 
//         <button 
//           className={`workspace-btn ${workspaceType === 'Office ' ? 'active' : ''}`}
//           onClick={() => setWorkspaceType('Office ')}
//           type="button"
//         >
//           <Building size={18} />
//           <span>Startup Office</span>
//         </button>
//       </div>
      
//       <div className="search-form">
//         <div className="input-group">
//           <label htmlFor="searchName">
//             <Search size={18} />
//             <span>Search by name</span>
//           </label>
//           <input
//             type="text"
//             id="searchName"
//             placeholder="Enter workspace name"
//             value={searchName}
//             onChange={(e) => setSearchName(e.target.value)}
//           />
//         </div>

//         <div className="input-group">
//           <label htmlFor="location">
//             <MapPin size={18} />
//             <span>Location</span>
//           </label>
//           <div className="location-input-wrapper">
//             <input
//               type="text"
//               id="location"
//               placeholder="Click button to use current location"
//               value={location}
//               readOnly
//             />
//             <button 
//               type="button" 
//               className="current-location-btn"
//               onClick={useCurrentLocation}
//               aria-label="Use current location"
//             >
//               <Navigation size={16} />
//             </button>
//           </div>
//         </div>
        
//         <div className="input-group">
//           <label htmlFor="range">
//             <span>Range (km)</span>
//           </label>
//           <input
//             type="number"
//             id="range"
//             min="1"
//             max="50"
//             placeholder="Search radius in km"
//             value={range}
//             onChange={(e) => setRange(e.target.value)}
//           />
//         </div>
        
//         <button 
//           type="button" 
//           className="search-submit-btn"
//           onClick={handleSearch}
//           disabled={loading}
//         >
//           {loading ? 'Searching...' : 'Find Workspace'}
//         </button>
        
//         {/* Status messages */}
//         {error && <div className="search-error">Error: {error}</div>}
//       </div>
//     </div>
//   );
// };

// export default SearchCard;



import React, { useState } from 'react';
import { MapPin, Search, Navigation, Coffee, Building } from 'lucide-react';
import './SearchCard.css';
import { apilocal } from '../../../api/api';
import { apitirth } from '../../../api/api';

const SearchCard = ({ workspaceType, setWorkspaceType, onSearch }) => {
  const [searchName, setSearchName] = useState('');
  const [location, setLocation] = useState('');
  const [range, setRange] = useState('5'); // Default 5km range
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    // First, call onSearch with default parameters or current state
    // This will immediately update the UI while the fetch happens in background
    onSearch({
      location: location || 'Any location',
      searchName: searchName,
      coordinates: latitude && longitude ? { lat: latitude, lon: longitude } : null,
      range: range,
      results: [], // Default empty results until fetch completes
    });
    
    // Build the API endpoint based on the workspace type
    let endpoint = `${apilocal}/workspace/search/?type=${workspaceType === 'cafe' ? 'hotdesk' : 'office'}`;
    
    // Add optional parameters if they exist
    if (searchName) {
      endpoint += `&search=${encodeURIComponent(searchName)}`;
    }
    
    if (latitude && longitude) {
      endpoint += `&lat=${latitude}&lon=${longitude}`;
    }
    
    if (range) {
      endpoint += `&range=${range}`;
    }
    
    // Send the request to the backend
    console.log("Sending request to:", endpoint);
    
    setLoading(true);
    setError(null);
    
//     const token = localStorage.getItem("token")
//     console.log("search token")
//     console.log(token);

    fetch(endpoint,
      //       {
      //       // credentials: 'include',
      //       // headers: {
      //       //   'Authorization': `Token ${token}`,
      //       //   'Content-Type': 'application/json' // Optional, if you're sending JSON
      //       // }
      //     }
      )
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Search results:", data);
        setLoading(false);
        // Update again with actual results when they come back
        onSearch({
          location: location || 'Any location',
          searchName: searchName,
          coordinates: latitude && longitude ? { lat: latitude, lon: longitude } : null,
          range: range,
          results: data,
        });
      })
      .catch(err => {
        console.error("Search error:", err);
        setError(err.message);
        setLoading(false);
      });
  };

  const useCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        
        setLatitude(latitude.toString());
        setLongitude(longitude.toString());
        setLocation('Current Location');
      });
    }
  };

  return (
    <div className="search-card-wrapper">
      <div className="workspace-toggle">
        <button 
          className={`workspace-btn ${workspaceType === 'cafe' ? 'active' : ''}`}
          onClick={() => setWorkspaceType('cafe')}
          type="button"
        >
          <Coffee size={18} />
          <span>Cafe</span>
        </button>
        <button 
          className={`workspace-btn ${workspaceType === 'office' ? 'active' : ''}`}
          onClick={() => setWorkspaceType('office')}
          type="button"
        >
          <Building size={18} />
          <span>Startup Office</span>
        </button>
      </div>
      
      <div className="search-form">
        <div className="input-group">
          <label htmlFor="searchName">
            <Search size={18} />
            <span>Search by name</span>
          </label>
          <input
            type="text"
            id="searchName"
            placeholder="Enter workspace name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="location">
            <MapPin size={18} />
            <span>Location</span>
          </label>
          <div className="location-input-wrapper">
            <input
              type="text"
              id="location"
              placeholder="Click button to use current location"
              value={location}
              readOnly
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
        
        <div className="input-group">
          <label htmlFor="range">
            <span>Range (km)</span>
          </label>
          <input
            type="number"
            id="range"
            min="1"
            max="50"
            placeholder="Search radius in km"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
        </div>
        
        <button 
          type="button" 
          className="search-submit-btn"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Find Workspace'}
        </button>
        
        {/* Status messages */}
        {error && <div className="search-error">Error: {error}</div>}
      </div>
    </div>
  );
};

export default SearchCard;