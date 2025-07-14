import React, { useState } from 'react';
import './admin_style.css';

const FoodItem = ({ item, onChange, onRemove }) => {
  const [previewImage, setPreviewImage] = useState(item.image);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(item.id, name, value);
  };

  const handleImageChange = (e) => {
    // In a real application, this would handle file uploads to a server
    // For demo purposes, we're just showing a placeholder image
    if (e.target.files && e.target.files[0]) {
      // For demonstration, we'll just use our placeholder API
      const randomId = Math.floor(Math.random() * 1000);
      const newImageUrl = `/api/placeholder/100/80?id=${randomId}`;
      
      setPreviewImage(newImageUrl);
      onChange(item.id, 'image', newImageUrl);
    }
  };

  return (
    <div className="item-card">
      <div className="flex justify-between items-center mb-4">
        <h3>Food/Beverage Item</h3>
        <button 
          type="button"
          className="btn btn-danger"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
      </div>
      
      <div className="form-group">
        <label className="form-label">Item Name</label>
        <input 
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
          className="form-input"
          placeholder="E.g., Avocado Toast"
          required
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Description</label>
        <input 
          type="text"
          name="description"
          value={item.description}
          onChange={handleChange}
          className="form-input"
          placeholder="E.g., Fresh avocado on artisan bread"
          required
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Price</label>
        <input 
          type="number"
          name="price"
          value={item.price}
          onChange={handleChange}
          className="form-input"
          placeholder="E.g., 12"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Food Item Image</label>
        <div className="flex gap-4 items-center">
          <img 
            src={previewImage} 
            alt="Food Item Preview" 
            className="food-preview-img"
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

export default FoodItem;