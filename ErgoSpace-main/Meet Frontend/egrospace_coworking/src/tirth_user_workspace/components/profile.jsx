import React, { useState, useEffect } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch('http://127.0.0.1:8000/auth/profile/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you store token
          },
          credentials: 'include'  // if you use session cookies
        });

        if (response.ok) {
          const data = await response.json();
          setProfileData({
            firstName: data.first_name,
            lastName: data.last_name,
            email: data.email
          });
        } else {
          console.error('Failed to fetch profile.');
        }
      } catch (error) {
        console.error('Profile fetch error:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
        <div className="text-xl font-semibold">Loading Profile...</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-start p-10">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg p-10 flex flex-col gap-10">

        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Profile Settings</h2>
          <p className="text-gray-600">Manage your personal info, security and preferences</p>
        </div>

        {/* Section - Account Information */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Account Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">First Name</label>
              <input
                type="text"
                value={profileData.firstName}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Last Name</label>
              <input
                type="text"
                value={profileData.lastName}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                value={profileData.email}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
