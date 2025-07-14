import React from 'react';
import CustomCharts from './CustomCharts';
import './admin_style.css';


const Dashboard = () => {
  // Mock data for stats
  const stats = {
    dailyCustomers: 42,
    weeklyCustomers: 256,
    monthlyCustomers: 1128,
    dailyRevenue: 635,
    weeklyRevenue: 3842,
    monthlyRevenue: 16950
  };

  // Mock data for charts
  const customerData = [
    { name: 'Mon', value: 30 },
    { name: 'Tue', value: 40 },
    { name: 'Wed', value: 35 },
    { name: 'Thu', value: 50 },
    { name: 'Fri', value: 65 },
    { name: 'Sat', value: 75 },
    { name: 'Sun', value: 60 }
  ];

  const revenueData = [
    { name: 'Mon', value: 450 },
    { name: 'Tue', value: 520 },
    { name: 'Wed', value: 480 },
    { name: 'Thu', value: 650 },
    { name: 'Fri', value: 800 },
    { name: 'Sat', value: 950 },
    { name: 'Sun', value: 750 }
  ];

  return (
    <div>
      <h1 className="section-title">Dashboard</h1>
      
      <h2 className="section-title">Customer Statistics</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-title">Today's Customers</p>
          <p className="stat-value">{stats.dailyCustomers}</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">Weekly Customers</p>
          <p className="stat-value">{stats.weeklyCustomers}</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">Monthly Customers</p>
          <p className="stat-value">{stats.monthlyCustomers}</p>
        </div>
      </div>

      <div className="card chart-container">
        <h3>Customer Statistics (Weekly)</h3>
        <CustomCharts data={customerData} dataKey="value" />
      </div>

      <h2 className="section-title">Revenue Statistics</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-title">Today's Revenue</p>
          <p className="stat-value">${stats.dailyRevenue}</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">Weekly Revenue</p>
          <p className="stat-value">${stats.weeklyRevenue}</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">Monthly Revenue</p>
          <p className="stat-value">${stats.monthlyRevenue}</p>
        </div>
      </div>

      <div className="card chart-container">
        <h3>Revenue Statistics (Weekly)</h3>
        <CustomCharts data={revenueData} dataKey="value" />
      </div>
    </div>
  );
};

export default Dashboard;