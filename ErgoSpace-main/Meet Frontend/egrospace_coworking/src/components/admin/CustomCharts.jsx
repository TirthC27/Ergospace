import React from 'react';
import './admin_style.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomCharts = ({ data, dataKey }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="name" stroke="#a0a0a0" />
        <YAxis stroke="#a0a0a0" />
        <Tooltip 
          contentStyle={{ backgroundColor: '#252525', border: '1px solid #333' }}
          labelStyle={{ color: '#e0e0e0' }}
        />
        <Line 
          type="monotone" 
          dataKey={dataKey} 
          stroke="#4f46e5" 
          activeDot={{ r: 8 }} 
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomCharts;