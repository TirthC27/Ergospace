import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import SearchCard from "../SearchCard/SearchCard";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import WorkspaceResults from "../WorkSpaceResult/WorkspaceResult";
import Footer from "../../Landing_Page_compoents/Footer/Footer";
import { User, History, LogOut } from "lucide-react";
import bgImage from "../../../assets/image.png";
const backgroundImage = bgImage;
import "./WorkspaceFinder.css";
import { useNavigate } from "react-router-dom";


// ProfileMenu component
const ProfileMenu = () => {

  const navigate = useNavigate();


  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    console.log("Navigate to profile page");
    setIsOpen(false);
    // Add navigation logic here (e.g., using React Router)
    navigate("/profile");
  };

  const handleBookingHistoryClick = () => {
    console.log("Navigate to booking history page");
    setIsOpen(false);
    // Add navigation logic here
    navigate("/booking-history");
  };

  const handleLogoutClick = async () => {
    console.log("Perform logout");
    setIsOpen(false);
  
    try {
      await axios.post("/api/logout", {}, {
        withCredentials: true, // if using cookies
      });
  
      console.log("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  
  return (
    <div className="profile-menu-container" ref={menuRef}>
      {/* Avatar Button */}
      <button 
        className="profile-avatar-button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="profile-avatar-text">U</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="profile-dropdown-menu">
          <div className="profile-menu-items" role="menu" aria-orientation="vertical">
            <button
              className="profile-menu-item"
              onClick={handleProfileClick}
              role="menuitem"
            >
              <User className="profile-menu-icon" />
              <span>Profile</span>
            </button>
            <button
              className="profile-menu-item"
              onClick={handleBookingHistoryClick}
              role="menuitem"
            >
              <History className="profile-menu-icon" />
              <span>Booking History</span>
            </button>
            <hr className="profile-menu-divider" />
            <button
              className="profile-menu-item profile-menu-logout"
              onClick={handleLogoutClick}
              role="menuitem"
            >
              <LogOut className="profile-menu-icon" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};



// import { SearchCard } from './SearchCard';
// import { FilterSidebar } from './FilterSidebar';
// import { WorkspaceResults } from './WorkspaceResults';
// import { ProfileMenu } from './ProfileMenu';
// import { Footer } from './Footer';

const WorkspaceFinder = () => {
  const [workspaceType, setWorkspaceType] = useState("cafe");
  const [searchParams, setSearchParams] = useState({});
  
  const [filters, setFilters] = useState({
    priceRange: [0, 100],
    amenities: {
      wifi: false,
      powerOutlets: false,
      quietSpace: false,
      meetingRooms: false,
      printing: false,
      parking: false,
      coffeeTea: false,
      foodService: false,
    },
  });
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (params) => {
    setSearchParams(params);
    setSearchPerformed(true);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="workspace-finder">
      {/* Header with Profile Menu */}
      <header className="header-container">
        <div className="header-content">
          <h2 className="logo">ErgoSpace</h2>
          <ProfileMenu />
        </div>
      </header>
      
      <div className="search-container">
        <h1>Find Your Perfect Workspace</h1>
        <p>Discover cafes and offices that match your remote work needs</p>
        <SearchCard
          workspaceType={workspaceType}
          setWorkspaceType={setWorkspaceType}
          onSearch={handleSearch}
        />
      </div>
      <div className="space"></div>
      
      {searchPerformed && (
        <div className="results-container">
          <div className="filter-silder">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="workspace-Result">
            <WorkspaceResults
              workspaceType={workspaceType}
              searchParams={searchParams}
              filters={filters}
            />
          </div>
        </div>
      )}

      <div className="space"></div>
      <div className="space-line"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default WorkspaceFinder;

