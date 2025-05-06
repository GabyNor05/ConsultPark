import React, { useState } from 'react';
import './Services.css';

const ServicesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: 'Virtual Customer Support & Live Chat',
      sideImage: 'url(../../../assets/plant.jpg)',
      subTitle: `Consult Park specializes in outsourcing virtual teams to support international companies in achieving their business goals. Here are some key services that fall under Customer Support & Live Chat for the Consult Park website:`,
      contentTitle1: `Helpdesk Support:`,
      content1: `● Email-based Ticketing System: Managing customer queries and issues through an email-based system where tickets are created, tracked, and resolved. This includes providing fi rst-level telephone support and exceptional customer service via email
        ● Remote Desktop Support: Using remote desktop applications to troubleshoot and resolve technical issues directly on the customer's device
        ● On-Site Support: Providing physical assistance at the customer's location for hardware and software issues`,
      contentTitle2: `Technical Support:`,
      content2: `● Software Troubleshooting: Resolving issues related to software applications, operating systems, and other digital tools
        ● Hardware Maintenance: Addressing problems with physical devices such as computers, servers, and networking equipment
        ● Network Connectivity: Ensuring stable and secure network connections, including VPN setup and troubleshooting`,
    },
  ];

  return (
    <div className="accordion-container">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          {/* Title and Subtitle (Always Visible) */}
          <div
            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <h3>{item.title}</h3>
            <p className="accordion-subtitle">{item.subTitle}</p>
            <span>{activeIndex === index ? '−' : '+'}</span>
          </div>

          {/* Content (Visible Only When Open) */}
          {activeIndex === index && (
            <div className="accordion-content-container">
              <div className="accordion-content">
                <h4>{item.contentTitle1}</h4>
                {item.content1.split('●').map((line, i) => (
                  line.trim() && <p key={i}>● {line.trim()}</p>
                ))}
              </div>
              <div className="accordion-content">
                <h4>{item.contentTitle2}</h4>
                {item.content2.split('●').map((line, i) => (
                  line.trim() && <p key={i}>● {line.trim()}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesAccordion;