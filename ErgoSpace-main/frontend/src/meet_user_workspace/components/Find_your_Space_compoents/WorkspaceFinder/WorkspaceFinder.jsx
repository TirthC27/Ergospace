import React, { useState } from "react";
import SearchCard from "../SearchCard/SearchCard";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import WorkspaceResults from "../WorkSpaceResult/WorkspaceResult";
import Footer from "../../Landing_Page_compoents/Footer/Footer";
import bgImage from "../../../assets/image.png";
const backgroundImage = bgImage;
import "./WorkspaceFinder.css";

const WorkspaceFinder = () => {
  const [workspaceType, setWorkspaceType] = useState("cafe");
  const [searchParams, setSearchParams] = useState({
    location: "",
    date: "",
    time: "",
  });
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
    // Here you would typically fetch results from your API
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Here you would typically refetch results with the new filters
  };

  return (
    <div className="workspace-finder">
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
