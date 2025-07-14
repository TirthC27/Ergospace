import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Statistics from "../components/statistics";
import Profile from "../components/profile";
import CreateWorkspace from "../components/create_workspace";

function AdminContent() {
  const [activePage, setActivePage] = useState("dashboard");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.replace("/admin", "");
    if (path === "" || path === "/") {
      setActivePage("dashboard");
    } else if (path === "/statistics") {
      setActivePage("statistics");
    } else if (path === "/profile") {
      setActivePage("profile");
    } else if (path === "/create-workspace") {
      setActivePage("create-workspace");
    }
  }, [location]);

  const handleSidebarNavigation = (page) => {
    setActivePage(page);
    if (page === "dashboard") {
      navigate("/admin");
    } else if (page === "statistics") {
      navigate("/admin/statistics");
    } else if (page === "profile") {
      navigate("/admin/profile");
    } else if (page === "create-workspace") {
      navigate("/admin/create-workspace");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 w-[100vw]">
      <div className="flex flex-col min-h-screen">
        

        {/* Main */}
        <div className="flex flex-1">
          <Sidebar setActivePage={handleSidebarNavigation} activePage={activePage} />
          
          <div className="flex-1">
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="profile" element={<Profile />} />
              <Route path="create-workspace" element={<CreateWorkspace />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

function Admin() {
  return <AdminContent />;
}

export default Admin;
