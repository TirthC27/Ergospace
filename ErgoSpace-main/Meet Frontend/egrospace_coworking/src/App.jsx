import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing_Page/landing_page';
import WorkspaceFinder from './components/Find_your_Space_compoents/WorkspaceFinder/WorkspaceFinder'
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import AdminPanel from './components/admin/AdminPanel';
import Bookingpage from './pages/Find_your_Space_Pages/booking_History_page/bookingpage';
import ProfilePage from './pages/Find_your_Space_Pages/profile/profile_page';
import WorkspacedetailPage from './pages/CafeDetailspage/WorkspacedetailPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/workspaces" element={<WorkspaceFinder />} />
        <Route path="/workspace/:Id" element={<WorkspacedetailPage />} />
        <Route path='/dashboard' element={<AdminPanel/>} />
        <Route path='/booking-history' element={<Bookingpage />}/>
        <Route path="/profile" element={< ProfilePage />}  />
      </Routes>
  );
}

export default App;