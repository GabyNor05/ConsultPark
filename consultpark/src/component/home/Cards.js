import React from "react";
import '../../css/home/home.css';
import coins from "../../assets/home/coins.png";
import clock from "../../assets/home/wall-clock.png";
import people from "../../assets/home/people.png";
import speak from "../../assets/home/rumor.png";
import gradCap from "../../assets/home/graduation-cap.png";
import office from "../../assets/home/office-building.png";
import target from "../../assets/home/target.png";
import chart from "../../assets/home/chart-up.png";

const data = [
    {
        Image: coins,
        title: "Reduce Costs",
        description: "Save up to 70% on operational expenses."
    },
    {
        Image: clock,
        title: "Increase Efficiency",
        description: "Focus on growth while we handle the heavy lifting."
    },
    {
        Image: people,
        title: "No Rigid Contracts",
        description: "Scale your workforce up or down as needed."
    },
    {
        Image: speak,
        title: "Fluent & Culturally Aligned Communication",
        description: "Professionals trained for global markets."
    },
    {
        Image: gradCap,
        title: "Highly Skilled & Certified Talent",
        description: "Experts in their fields, not just degree holders"
    },
    {
        Image: office,
        title: "Office-Based Professionals",
        description: "Reliable, structured, and fully managed teams."
    },
    {
        Image: target,
        title: "100% Dedicated Workforce",
        description: "Focused professionals committed to your success"
    },
    {
        Image: chart,
        title: "Performance-Driven Approach",
        description: "Regular training and quality assurance for excellence"
    }
];

const WhyUsCards = () => {
  return (
    <div className="whyUs-container">
      {data.map((section, index) => (
        <div className="card" key={index}>
          <img src={section.Image} alt={section.title} className="card-image" />
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyUsCards;