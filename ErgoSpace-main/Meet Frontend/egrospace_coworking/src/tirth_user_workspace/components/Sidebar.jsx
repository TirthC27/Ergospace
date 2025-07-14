import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ setActivePage, activePage }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteName, setInviteName] = useState('');
  const [inviteStatus, setInviteStatus] = useState('');
  
  // Generate initials from name
  const getInitials = (name) => {
    return name.split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  // Generate random color
  const getRandomColor = () => {
    const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-yellow-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  // Handle invitation submission
  const handleInviteSubmit = (e) => {
    e.preventDefault();
    
    if (inviteEmail && inviteName) {
      // Create new team member (in a real app, this would send an invitation email)
      const newMember = {
        id: Date.now(),
        name: inviteName,
        initials: getInitials(inviteName),
        color: getRandomColor(),
        status: 'bg-gray-300', // Pending status
        invited: true
      };
      
      setTeamMembers([...teamMembers, newMember]);
      setInviteStatus(`Invitation sent to ${inviteEmail}`);
      
      // Reset form
      setInviteEmail('');
      setInviteName('');
      
      // Auto hide form after 3 seconds
      setTimeout(() => {
        setInviteStatus('');
        setShowInviteForm(false);
      }, 3000);
    }
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col screen-h-screen">
      {/* Header */}
      <div className="px-4 py-5 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">ERGO-SPACE</h2>
        <p className="text-xs text-gray-500 mt-1">Workspace Management</p>
      </div>
      
      {/* Main Navigation */}
      <div className="py-4">
        <div 
          className={`px-4 py-2 flex items-center ${activePage === 'dashboard' ? 'bg-gray-100' : 'hover:bg-gray-50'} rounded-md mx-2 cursor-pointer`}
          onClick={() => setActivePage('dashboard')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span className="ml-3 font-medium text-gray-900">Dashboard</span>
        </div>

        <div 
          className={`px-4 py-2 flex items-center ${activePage === 'statistics' ? 'bg-gray-100' : 'hover:bg-gray-50'} rounded-md mx-2 mt-1 cursor-pointer`}
          onClick={() => setActivePage('statistics')}
        >
          <svg viewBox="0 0 30 20" width="25" height="20">
            {/* X and Y Axis */}
            <line x1="3" y1="3" x2="3" y2="17" stroke="black" strokeWidth="0.5" />
            <line x1="3" y1="17" x2="27" y2="17" stroke="black" strokeWidth="0.5" />

            {/* Bars */}
            <rect x="5" y="14" width="3" height="3" fill="#3498db" />
            <rect x="9" y="12" width="3" height="5" fill="#2ecc71" />
            <rect x="13" y="9" width="3" height="8" fill="#e74c3c" />
            <rect x="17" y="13" width="3" height="4" fill="#f1c40f" />
            <rect x="21" y="8" width="3" height="9" fill="#9b59b6" />
          </svg>
          <span className="ml-1 font-medium text-gray-600">Statistics</span>
        </div>
        
        <div 
          className={`px-4 py-2 flex items-center ${activePage === 'create-workspace' ? 'bg-gray-100' : 'hover:bg-gray-50'} rounded-md mx-2 mt-1 cursor-pointer`}
          onClick={() => setActivePage('create-workspace')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span className="ml-3 font-medium text-gray-600">Create Workspace</span>
        </div>
        
        <div className="px-4 py-2 flex items-center justify-between hover:bg-gray-50 rounded-md mx-2 mt-1">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span className="ml-3 font-medium text-gray-600">Inbox</span>
          </div>
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">14</span>
        </div>
        
        <div  
          className={`px-4 py-2 flex items-center ${activePage === 'profile' ? 'bg-gray-100' : 'hover:bg-gray-50'} rounded-md mx-2 mt-1 cursor-pointer`}
          onClick={() => setActivePage('profile')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span className="ml-3 font-medium text-gray-600">Profile</span>
        </div>
      </div>
      
      {/* Projects Section */}
      <div className="px-6 mt-2">
        <h3 className="text-xs uppercase font-semibold text-gray-500 mb-2">My Workspaces</h3>
        <div className="px-2 py-2 flex items-center rounded-md bg-gray-50">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span className="ml-3 font-medium text-gray-600">Cafe Workspaces</span>
        </div>
        <div className="px-2 py-2 flex items-center rounded-md mt-1">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="ml-3 font-medium text-gray-600">Office Workspaces</span>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="px-6 mt-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xs uppercase font-semibold text-gray-500">Team</h3>
          <button 
            onClick={() => setShowInviteForm(!showInviteForm)}
            className="text-xs text-blue-500 hover:text-blue-700 font-medium"
          >
            {showInviteForm ? 'Cancel' : '+ Add'}
          </button>
        </div>
        
        {/* Team Invitation Form */}
        {showInviteForm && (
          <div className="mb-3 p-2 bg-gray-50 rounded-md">
            <form onSubmit={handleInviteSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full mb-2 px-2 py-1 text-sm border rounded"
                value={inviteName}
                onChange={(e) => setInviteName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full mb-2 px-2 py-1 text-sm border rounded"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xs py-1 rounded"
              >
                Send Invitation
              </button>
              {inviteStatus && (
                <p className="mt-2 text-xs text-green-600">{inviteStatus}</p>
              )}
            </form>
          </div>
        )}
        
        {/* Team Members List */}
        {teamMembers.map((member) => (
          <div key={member.id} className="px-2 py-2 flex items-center">
            <div className={`w-7 h-7 rounded-full ${member.color} flex items-center justify-center text-white text-xs font-bold`}>
              {member.initials}
            </div>
            <span className="ml-3 font-medium text-gray-600">{member.name}</span>
            {member.invited ? (
              <span className="ml-auto text-xs text-gray-400">Pending</span>
            ) : (
              <div className={`w-2 h-2 rounded-full ${member.status} ml-auto`}></div>
            )}
          </div>
        ))}
      </div>
      
      {/* Log Out Section */}
      <div className="mt-auto px-6 py-4 border-t border-gray-200">
        <Link 
          to="/"
          className="flex items-center text-red-500 hover:text-red-700 font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          <span className="ml-2">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;