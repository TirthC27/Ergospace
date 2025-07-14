// components/StartupSection/StartupSection.jsx
import React from 'react';
import './StartupSection.css';
import Ceo_Image from "../../../assets/ceo_img.jpeg";
import Img_2 from "../../../assets/Team_Collaboration.jpeg";

const StartupSection = () => {
  const startupPlans = [
    {
      name: "Flexible Team",
      description: "For teams that need occasional meeting spaces and flexible workspace options.",
      features: [
        "Access to meeting rooms on demand",
        "Flexible seating for team members",
        "Pay-as-you-go pricing model"
      ],
      icon: "icon-flexible"
    },
    {
      name: "Growth Scale",
      description: "For rapidly growing startups with changing space requirements and team sizes.",
      features: [
        "Scalable workspace solutions",
        "Priority booking for meeting rooms",
        "Discounted monthly packages"
      ],
      icon: "icon-growth"
    },
    {
      name: "Enterprise Hub",
      description: "For established startups needing dedicated spaces with enterprise amenities.",
      features: [
        "Dedicated private areas",
        "Custom branding options",
        "Advanced tech infrastructure"
      ],
      icon: "icon-enterprise"
    }
  ];

  return (
    <section className="startup-section">
      <div className="container">
        <div className="section-header">
          <h2>Built for Startups and Growing Teams</h2>
          <p>Flexible workspace solutions that scale with your company's needs</p>
        </div>

        <div className="startup-highlights">
          <div className="highlight-text">
            <h3>Why Startups Choose WorkSpace</h3>
            <ul className="highlight-list">
              <li>
                <span className="highlight-icon">💰</span>
                <div>
                  <h4>Cost Efficiency</h4>
                  <p>Save up to 70% compared to traditional office leases while maintaining professional workspaces.</p>
                </div>
              </li>
              <li>
                <span className="highlight-icon">🔄</span>
                <div>
                  <h4>Ultimate Flexibility</h4>
                  <p>Scale your workspace needs up or down as your team grows or changes, with no long-term commitments.</p>
                </div>
              </li>
              <li>
                <span className="highlight-icon">🔍</span>
                <div>
                  <h4>Location Freedom</h4>
                  <p>Choose from thousands of workspaces across multiple locations to suit your distributed team.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="highlight-image">
            <img src= {Img_2} alt="Startup team in a modern workspace" />
            <div className="testimonial-overlay">
              <p>"WorkSpace has been crucial to our growth. As we scaled from 5 to 50 employees, we never had to worry about outgrowing our office space or being locked into expensive leases."</p>
              <div className="testimonial-author">
                <img src={Ceo_Image} alt="CEO" className="author-avatar" />
                <div>
                  <p className="author-name">Alex Rivera</p>
                  <p className="author-role">CEO, TechNova</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="startup-plans">
          {startupPlans.map((plan, index) => (
            <div className="plan-card" key={index}>
              <div className="plan-icon">
                <i className={plan.icon}></i>
              </div>
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-features" id='pricing'>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-outline">Learn More</button>
            </div>
          ))}
        </div>
        <div className="startup-cta" >
        <h3>Find the Perfect Workspace for Your Team</h3>
        <p>Book your ideal workspace instantly and start working without any hassle.</p>
        <button className="btn btn-primary btn-large">Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default StartupSection;