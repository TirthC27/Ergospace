import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import CreateWorkspace from "./create_workspace";

const Dashboard = () => {
  const navigate = useNavigate();
  // State to store all workspaces
  const [workspaces, setWorkspaces] = useState([
    { id: 1, name: "My Cafe Workspace", members: 8, type: "Café" },
    { id: 2, name: "Office Workspace", members: 12, type: "Office" },
    { id: 3, name: "My Hotdesk", members: 5, type: "Hotdesk" }
  ]);

  // Function to add a new workspace
  const addWorkspace = (newWorkspace) => {
    // Generate a new ID (in a real app, this would come from the backend)
    const newId = workspaces.length > 0 
      ? Math.max(...workspaces.map(w => w.id)) + 1 
      : 1;
    
    // Create workspace object with required fields
    const workspaceToAdd = {
      id: newId,
      name: newWorkspace.name,
      type: newWorkspace.type,
      location: newWorkspace.location,
      // Default to 0 members for new workspaces
      members: 0,
      capacity: newWorkspace.capacity,
      pricePerHour: newWorkspace.pricePerHour,
      pricePerDay: newWorkspace.pricePerDay,
      pricePerMonth: newWorkspace.pricePerMonth,
      amenities: newWorkspace.amenities,
      coverImage: newWorkspace.coverImage,
      galleryImages: newWorkspace.galleryImages,
    };
    
    // Add the new workspace to state
    setWorkspaces([...workspaces, workspaceToAdd]);
    
    // Navigate back to dashboard after creation
    navigate("/");
  };

  // Function to handle editing a workspace
  const editWorkspace = (id, updatedWorkspace) => {
    if (updatedWorkspace) {
      // If updating with new data
      setWorkspaces(
        workspaces.map(workspace => 
          workspace.id === id ? { ...updatedWorkspace, id } : workspace
        )
      );
    } else {
      // Just navigate to edit page
      navigate(`/edit-workspace/${id}`);
    }
  };

  // Function to handle deleting a workspace
  const deleteWorkspace = (id) => {
    // Filter out the workspace with the specified ID
    setWorkspaces(workspaces.filter(workspace => workspace.id !== id));
  };

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b">
        <h1 className="text-2xl font-bold">Workspaces</h1>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
          onClick={() => navigate("create-workspace")}
        >
          Create Workspace
        </button>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Your Workspaces</h2>
                <p className="text-gray-600">Manage and access all your workspaces</p>
              </div>
              
              {workspaces.length > 0 ? (
                <div className="overflow-x-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {workspaces.map((workspace) => (
                      <div 
                        key={workspace.id} 
                        className="border rounded-lg p-4 hover:shadow-md transition cursor-pointer flex flex-col h-64"
                        onClick={() => editWorkspace(workspace.id)}
                      >
                        <div className="flex-1">
                          {workspace.coverImage && (
                            <div className="w-full h-24 rounded-md overflow-hidden mb-3">
                              <img 
                                src={typeof workspace.coverImage === 'object' ? URL.createObjectURL(workspace.coverImage) : workspace.coverImage} 
                                alt="Cover" 
                                className="w-full h-full object-cover" 
                              />
                            </div>
                          )}
                          <div>
                            <h3 className="font-medium text-lg">{workspace.name}</h3>
                            <div className="flex flex-wrap text-xs text-gray-500 mt-1">
                              <span>{workspace.type}</span>
                              {workspace.location && (
                                <>
                                  <span className="mx-1">•</span>
                                  <span>{workspace.location}</span>
                                </>
                              )}
                              <span className="mx-1">•</span>
                              <span>{workspace.members} members</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end space-x-2 pt-2 mt-auto border-t">
                          <button 
                            className="text-blue-600 hover:text-blue-800"
                            onClick={(e) => {
                              e.stopPropagation();
                              editWorkspace(workspace.id);
                            }}
                          >
                            Edit
                          </button>
                          <button 
                            className="text-red-600 hover:text-red-800"
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteWorkspace(workspace.id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 border rounded-lg">
                  <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No workspaces yet</h3>
                  <p className="mt-1 text-sm text-gray-500">Get started by creating a new workspace</p>
                  <button
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
                    onClick={() => navigate("/create-workspace")}
                  >
                    Create Workspace
                  </button>
                </div>
              )}
            </div>
          } />
          
          <Route 
            path="/create-workspace" 
            element={<CreateWorkspace onSubmit={addWorkspace} />} 
          />
          
          <Route 
            path="/edit-workspace/:id" 
            element={<CreateWorkspace 
              existingWorkspaces={workspaces} 
              onSubmit={(updatedWorkspace) => {
                const id = parseInt(updatedWorkspace.id);
                editWorkspace(id, updatedWorkspace);
              }} 
              isEditing={true} 
            />} 
          />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;