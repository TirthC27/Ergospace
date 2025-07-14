import React, { useState } from 'react';

const statistics = () => {
  // Sample metric data with initial state
  const [metrics, setMetrics] = useState([
    {
      id: 1,
      title: "Revenue",
      value: "$50,846.90",
      trend: "+20%",
      isPositive: true,
      sparklineColor: "#34D399",
      data: [15, 20, 18, 25, 22, 30, 35]
    },
    {
      id: 2,
      title: "Outbound Clicks",
      value: "1",
      trend: "+10%",
      isPositive: true,
      sparklineColor: "#34D399",
      data: [30, 32, 35, 38, 40, 42, 45]
    },
    {
      id: 3,
      title: "Total Audience",
      value: "1",
      trend: "-12%",
      isPositive: false,
      sparklineColor: "#F87171",
      data: [50, 45, 42, 40, 36, 32, 30]
    },
    {
      id: 4,
      title: "Avg. Time",
      value: "00:30:14",
      trend: "+16%",
      isPositive: true,
      sparklineColor: "#34D399",
      data: [10, 15, 18, 22, 25, 28, 30]
    }
  ]);

  // Function to simulate a user clicking on an ad
  const handleAdClick = () => {
    setMetrics(currentMetrics => 
      currentMetrics.map(metric => {
        if (metric.id === 2) { // Update Outbound Clicks
          const newClickValue = parseInt(metric.value.replace(/,/g, '')) + 1;
          const formattedValue = newClickValue.toLocaleString();
          const newData = [...metric.data];
          newData.shift(); // Remove first element
          newData.push(newData[newData.length - 1] + 1); // Add new value
          
          return {
            ...metric,
            value: formattedValue,
            data: newData
          };
        } 
        else if (metric.id === 3) { // Update Total Audience
          const newAudienceValue = parseInt(metric.value.replace(/,/g, '')) + 1;
          const formattedValue = newAudienceValue.toLocaleString();
          const newData = [...metric.data];
          newData.shift(); // Remove first element
          newData.push(newData[newData.length - 1] + 1); // Add new value
          
          // Check if we should change trend direction
          const oldAudience = parseInt(metric.value.replace(/,/g, ''));
          const isGrowing = newAudienceValue > oldAudience;
          
          return {
            ...metric,
            value: formattedValue,
            isPositive: isGrowing,
            trend: isGrowing ? "+1%" : "-12%",
            sparklineColor: isGrowing ? "#34D399" : "#F87171",
            data: newData
          };
        }
        return metric;
      })
    );
  };

  // Generate dynamic sparkline path based on real data
  const getSparklinePath = (data, isPositive) => {
    if (!data || data.length === 0) {
      // Fallback to static path if no data
      return isPositive 
        ? "M0,15 C20,25 40,5 60,15 C80,25 100,5 120,15" 
        : "M0,15 C20,5 40,25 60,15 C80,5 100,25 120,15";
    }
    
    // Scale data points to fit SVG viewBox
    const height = 30;
    const width = 120;
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    const range = maxValue - minValue || 1;
    
    // Create points for the path
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - minValue) / range) * height * 0.7; // Use 70% of height
      return `${x},${y}`;
    });
    
    return `M${points.join(" L")}`;
  };

  return (
    <div className="p-6 flex-1 overflow-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Reports Snapshot</h1>
        <p className="text-gray-500">
          Upward arrow indicating an increase in revenue compared to the previous period.
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <div className="bg-white border rounded-md px-4 py-2 flex items-center space-x-2">
            <span>01 JAN, 2023 - 01 JAN, 2024</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={handleAdClick}
            className="px-4 py-2 border rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium"
          >
            SIMULATE AD CLICK
          </button>
          <button className="px-4 py-2 border rounded-md bg-white hover:bg-gray-50 text-gray-800 font-medium">
            VIEW REPORT
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {metrics.map(metric => (
          <div key={metric.id} className="bg-white rounded-md shadow-sm p-6 border">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-gray-500 font-medium">{metric.title}</h3>
              <span className={`font-medium ${metric.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {metric.trend}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-6">{metric.value}</div>
            <div className="w-full h-16">
              <svg width="100%" height="100%" viewBox="0 0 120 30">
                <path 
                  d={getSparklinePath(metric.data, metric.isPositive)} 
                  fill="none" 
                  stroke={metric.sparklineColor} 
                  strokeWidth="2"
                />
                <path 
                  d={`${getSparklinePath(metric.data, metric.isPositive)} L120,30 L0,30 Z`}
                  fill={metric.isPositive ? "rgba(52, 211, 153, 0.1)" : "rgba(248, 113, 113, 0.1)"} 
                  strokeWidth="0"
                />
              </svg>
            </div>
            <div className="mt-3 flex items-center text-blue-600">
              <span className="text-sm font-medium">See more details</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default statistics;