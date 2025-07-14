// components/Modes.jsx
import React from 'react';
import ModeCard from './ModeCard';
import './Modes.css';
import Img_1 from "../../../assets/on-demand-worker.jpeg";
import Img_2 from "../../../assets/Team_Collaboration.jpeg";
import Img_3 from "../../../assets/Digital_Nomad.jpeg";
import Img_4 from "../../../assets/Space_Provider.png";


const Modes = () => {
  const modes = [
    {
      id: 1,
      image: Img_1,
      title: 'On-Demand Workspace',
      description: 'Need a quick spot to work for a few hours? Find nearby spaces with available seating, verified WiFi speeds, and the right atmosphere. Book instantly and pay only for the time you need.'
    },
    {
      id: 2,
      image: Img_2,
      title: 'Team Collaboration',
      description: 'Book private rooms or dedicated areas for your team meetings. Filter by capacity, presentation equipment, and whiteboard availability to ensure productive collaboration sessions.'
    },
    {
      id: 3,
      image: Img_3,
      title: 'Digital Nomad',
      description: 'Discover workspaces in new cities as you travel. Our platform shows you verified locations with all the amenities you need to stay productive, no matter where your journey takes you.'
    },
    {
      id: 4,
      image: Img_4,
      title: 'Space Provider',
      description: 'Turn your unused space into revenue. List your café, office, or coworking space on our platform, set your own pricing and availability, and welcome motivated professionals to your location.'
    }
  ];

  return (
    <section className="modes">
      <div className="container">
        <div className="section-header">
          <h2>A Solution for Every Work Style</h2>
        </div>
        <div className="modes-container">
          {modes.map(mode => (
            <ModeCard 
              key={mode.id}
              image={mode.image}
              title={mode.title}
              description={mode.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modes;