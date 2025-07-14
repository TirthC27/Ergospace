// import React from 'react';

// const WorkspaceItem = ({ workspace, onChange, onRemove, canRemove }) => {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     onChange(workspace.id, name, value);
//   };

//   return (
//     <div className="item-card">
//       <div className="flex justify-between items-center mb-4">
//         <h3>Workspace Details</h3>
//         {canRemove && (
//           <button 
//             type="button"
//             className="btn-danger"
//             onClick={() => onRemove(workspace.id)}
//           >
//             Remove
//           </button>
//         )}
//       </div>
      
//       <div className="form-group">
//         <label className="form-label">Workspace Name</label>
//         <input 
//           type="text"
//           name="name"
//           value={workspace.name}
//           onChange={handleChange}
//           className="form-input"
//           placeholder="E.g., Window Side Workspace"
//           required
//         />
//       </div>
      
//       <div className="form-group">
//         <label className="form-label">Description</label>
//         <input 
//           type="text"
//           name="description"
//           value={workspace.description}
//           onChange={handleChange}
//           className="form-input"
//           placeholder="E.g., Street view with natural lighting"
//           required
//         />
//       </div>
      
//       <div className="form-group">
//         <label className="form-label">Price (per hour)</label>
//         <input 
//           type="number"
//           name="price"
//           value={workspace.price}
//           onChange={handleChange}
//           className="form-input"
//           placeholder="E.g., 15"
//           required
//         />
//       </div>
//     </div>
//   );
// };

// export default WorkspaceItem;



import React, { useState } from 'react';
import './admin_style.css';

const WorkspaceItem = ({ workspace, onChange, onRemove, canRemove }) => {
  const [previewImage, setPreviewImage] = useState(workspace.image);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(workspace.id, name, value);
  };

  const handleImageChange = (e) => {
    // In a real application, this would handle file uploads to a server
    // For demo purposes, we're just showing a placeholder image
    if (e.target.files && e.target.files[0]) {
      // For demonstration, we'll just use our placeholder API
      const randomId = Math.floor(Math.random() * 1000);
      const newImageUrl = `/api/placeholder/100/80?id=${randomId}`;
      
      setPreviewImage(newImageUrl);
      onChange(workspace.id, 'image', newImageUrl);
    }
  };

  return (
    <div className="item-card">
      <div className="flex justify-between items-center mb-4">
        <h3>Workspace Details</h3>
        {canRemove && (
          <button 
            type="button"
            className="btn btn-danger"
            onClick={() => onRemove(workspace.id)}
          >
            Remove
          </button>
        )}
      </div>
      
      <div className="form-group">
        <label className="form-label">Workspace Name</label>
        <input 
          type="text"
          name="name"
          value={workspace.name}
          onChange={handleChange}
          className="form-input"
          placeholder="E.g., Window Side Workspace"
          required
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Description</label>
        <input 
          type="text"
          name="description"
          value={workspace.description}
          onChange={handleChange}
          className="form-input"
          placeholder="E.g., Street view with natural lighting"
          required
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Price (per hour)</label>
        <input 
          type="number"
          name="price"
          value={workspace.price}
          onChange={handleChange}
          className="form-input"
          placeholder="E.g., 15"
          required
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Workspace Image</label>
        <div className="flex gap-4 items-center">
          <img 
            src={previewImage} 
            alt="Workspace Preview" 
            className="workspace-preview-img"
            style={{ width: '100px', height: '80px', objectFit: 'cover', borderRadius: '4px' }}
          />
          <input 
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="form-input"
          />
        </div>
        <p className="text-muted" style={{ marginTop: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          Recommended size: 300x240 pixels
        </p>
      </div>
    </div>
  );
};

export default WorkspaceItem;