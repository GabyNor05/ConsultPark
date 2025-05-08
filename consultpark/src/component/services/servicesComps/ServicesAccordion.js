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

      // subTitle: `Consult Park specializes in outsourcing virtual teams to support international companies in achieving their business goals. Here are some key services that fall under Customer Support & Live Chat for the Consult Park website:`,
      contentTitle1: `1. Helpdesk Support:`,
      content1: `● Email-based Ticketing System: Managing customer queries and issues through an email-based system where tickets are created, tracked, and resolved. This includes providing first-level telephone support and exceptional customer service via email
        ● Remote Desktop Support: Using remote desktop applications to troubleshoot and resolve technical issues directly on the customer's device
        ● On-Site Support: Providing physical assistance at the customer's location for hardware and software issues`,
      contentTitle2: `2. Technical Support:`,
      content2: `● Software Troubleshooting: Resolving issues related to software applications, operating systems, and other digital tools
        ● Hardware Maintenance: Addressing problems with physical devices such as computers, servers, and networking equipment
        ● Network Connectivity: Ensuring stable and secure network connections, including VPN setup and troubleshooting`,
      contentTitle3: `3. Customer Relationship Management (CRM):`,
      content3: `● Customer Data Management: Storing and analyzing customer data to provide personalized support and improve service quality
        ● Feedback and Surveys: Collecting customer feedback to identify areas for improvement and enhance customer satisfaction`,
      contentTitle4: `4. Live Chat Support:`,
      content4: `● Real-Time Chat Support: Providing instant support to customers through live chat on the Consult Park website. This includes using automated chatbots to handle common queries and direct customers to the appropriate support channels
       ● Live Agent Support: Offering real-time assistance from human agents for more complex issues that require personalized attention`,
      contentTitle5: `5. Social Media Support:`,
      content5: `● Monitoring Social Media Channels: Keeping an eye on mentions and messages on platforms like Twitter, Facebook, and Instagram
       ● Responding to Queries: Providing timely responses to customer inquiries and resolving issues through social media interactions`,
      contentTitle6: `6. Community Forums:`,
      content6: `● Online Forums: Creating and managing online forums where customers can ask questions, share experiences, and get support from other users and company representatives`,
    },
    {
      title: 'Admin Support',
      contentTitle1: `1. Helpdesk Administration:`,
      content1: `● Email-based Ticketing System: Managing customer queries and issues through an email-based system where tickets are created, tracked, and resolved. This includes providing first-level telephone support and exceptional customer service via email
● Remote Desktop Support: Using remote desktop applications to troubleshoot and resolve technical issues directly on the customer's device
● On-Site End User Support: Providing physical assistance at the customer's location for hardware and software issues`,
      contentTitle2: `2. Systems Administration:`,
      content2: `● Active Directory Management: Managing user accounts, permissions, and security settings using Active Directory
● Microsoft Office 365 Administration: Handling tasks related to Microsoft Office 365, including email administration, software upgrades, and troubleshooting
● Network Connectivity and VPN: Ensuring stable and secure network connections, including VPN setup and troubleshooting`,
      contentTitle3: `3. Database Management:`,
      content3: `● MySQL Administration: Managing and maintaining MySQL databases to ensure data integrity and availability
● Database Backup and Recovery: Implementing backup and recovery procedures to protect data from loss or corruption`,
      contentTitle4: `4. Project Management:`,
      content4: `● Software Project Management: Overseeing software development projects, ensuring they are completed on time and within budget
● Budgeting and Finance: Managing project budgets and financial planning to ensure efficient use of resources`,
      contentTitle5: `5. General Administrative Tasks:`,
      content5: `● Scheduling Meetings: Coordinating and scheduling meetings for project teams and leadership
● Data Entry: Performing data entry tasks to maintain accurate records and databases
● Developing Presentations: Creating presentations for meetings, reports, and other business needs
● Managing Incoming and Outgoing Mail: Handling mail correspondence to ensure timely communication`,
    },
    {
      title: 'Sales & Lead Generation',
      contentTitle1: `1. Lead Generation:`,
      content1: `● Market Research: Conducting thorough market research to identify potential clients and understand their needs and pain points. This involves analyzing market trends, competitor activities, and customer behavior to develop targeted lead generation strategies.
● Digital Marketing: Utilizing digital marketing techniques such as search engine optimization (SEO), social media marketing, and email marketing to attract potential clients. This includes creating engaging content, running targeted ad campaigns, and optimizing the website for search engines to increase visibility and drive traffi c.
● Web Forms and Chatbots: Implementing web forms and chatbots on the Consult Park website to capture leads directly. These tools help in collecting contact information and qualifying leads by asking relevant questions and providing instant responses.
● Networking and Referrals: Leveraging existing client relationships to generate referrals and word-of-mouth marketing. Providing excellent service to current clients and encouraging them to refer Consult Park to other businesses in need of outsourcing services.`,
      contentTitle2: `2. Sales Process:`,
      content2: `● Sales Funnel Management: Developing and managing a sales funnel to track leads from initial contact to conversion. This involves nurturing leads through personalized communication, providing relevant information, and addressing any concerns or objections they may have.
● Client Relationship Management (CRM): Using CRM systems to manage and analyze customer interactions and data throughout the customer
lifecycle. This helps in improving customer relationships, retaining clients, and driving sales growth.
● Proposal and Contract Management: Creating and managing proposals and contracts for potential clients. This includes drafting detailed proposals that outline the services offered, pricing, and terms of agreement, and ensuring timely follow-up to close deals.
● Performance Metrics and Reporting: Tracking and analyzing key performance metrics to measure the effectiveness of sales and lead generation efforts. This includes monitoring conversion rates, customer acquisition costs, and return on investment (ROI) to optimize strategies and improve results.`,
      
    },
    {
      title: 'Accounting & Bookkeeping',
      contentTitle1: `1. Bookkeeping Services:`,
      content1: `● Daily Transaction Recording: Keeping accurate records of all financial transactions, including sales, purchases, receipts, and payments.
● Accounts Payable and Receivable: Managing invoices, ensuring timely payments to suppliers, and collecting payments from clients.
● Bank Reconciliation: Regularly comparing and reconciling bank statements with the company's financial records to ensure accuracy.
● Expense Tracking: Monitoring and categorizing business expenses to maintain a clear financial picture.`,
      contentTitle2: `2. Accounting Services:`,
      content2: `● Financial Statement Preparation: Compiling and preparing financial statements such as balance sheets, income statements, and cash fl ow statements.
● Tax Preparation and Filing: Ensuring compliance with tax regulations, preparing tax returns, and fi ling them on time.
● Budgeting and Forecasting: Assisting in the creation of budgets and financial forecasts to help businesses plan for the future.
● Payroll Processing: Managing payroll, including calculating wages, withholding taxes, and ensuring timely payment to employees.`,
      contentTitle3: `3. Management Accounting:`,
      content3: `● Cost Analysis: Analyzing costs associated with business operations to identify areas for cost reduction and efficiency improvement.
● Financial Reporting: Providing detailed financial reports to management for decision-making purposes.
● Performance Metrics: Tracking key performance indicators (KPIs) to measure the financial health and performance of the business.`,
      contentTitle4: `4. Consulting Services:`,
      content4: `● Financial Advisory: Offering expert advice on financial planning, investment strategies, and risk management.
● Audit Support: Assisting with internal and external audits by providing necessary documentation and support.
● Compliance and Regulatory Support: Ensuring that the business complies with all relevant financial regulations and standards.`,
    },
    {
      title: 'Social Media & Digital Marketing',
      contentTitle1: `1. Social Media Management:`,
      content1: `● Content Creation: Developing engaging and relevant content for various social media platforms such as Facebook, Twitter, LinkedIn, and Instagram. This includes creating posts, graphics, videos, and other multimedia content.
● Social Media Strategy: Crafting a comprehensive social media strategy that aligns with the client's business goals. This involves identifying target audiences, setting objectives, and planning content calendars.
● Community Management: Monitoring and managing social media interactions, responding to comments and messages, and engaging with followers to build a strong online community.
● Social Media Advertising: Running targeted ad campaigns on social media platforms to increase brand awareness, drive traffic, and generate leads. This includes setting up and managing ads, optimizing ad performance, and analyzing results.`,
      contentTitle2: `2. Digital Marketing:`,
      content2: `● Search Engine Optimization (SEO): Optimizing the client's website and content to improve search engine rankings and drive organic traffic. This includes keyword research, on-page optimization, link building, and technical SEO.
● Pay-Per-Click (PPC) Advertising: Managing PPC campaigns on platforms like Google Ads and Bing Ads to drive targeted traffic and generate leads. This involves keyword bidding, ad creation, and performance analysis.
● Email Marketing: Creating and managing email marketing campaigns to nurture leads and engage with customers. This includes designing email templates, segmenting email lists, and analyzing campaign performance.
● Content Marketing: Developing and distributing valuable content to attract and engage the target audience. This includes blog posts, articles, whitepapers, infographics, and videos.
● Analytics and Reporting: Tracking and analyzing the performance of digital marketing campaigns using tools like Google Analytics. This involves generating reports, identifying trends, and making data-driven decisions to optimize campaigns.`,
      
    },
  ];

  return (
    <div className="accordion-container">
{accordionItems.map((item, index) => (
  <div className="accordion-item" key={index}>
    {/* Title and Subtitle (Subtitle Visible Only When Open) */}
    <div
      className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
      onClick={() => toggleAccordion(index)}
    >
      <h4>{item.title}</h4>
      {activeIndex === index && (
        <p className="accordion-subtitle">{item.subTitle}</p>
      )}
      <span>{activeIndex === index ? '−' : '+'}</span>
    </div>

    {/* Content (Visible Only When Open) */}
    {activeIndex === index && (
      <div className="accordion-content-container">
        {[1, 2, 3, 4, 5, 6].map((num) => {
          const contentTitle = item[`contentTitle${num}`];
          const content = item[`content${num}`];
          return (
            content && (
              <div className="accordion-content" key={num}>
                
                  <div className="content-text">
                    <h4>{contentTitle}</h4>
                    {content.split('●').map((line, i) => (
                      line.trim() && <p key={i}>● {line.trim()}</p>
                    ))}
                  </div>

              </div>
            )
          );
        })}
      </div>
    )}
  </div>
))}
    </div>
  );
}

export default ServicesAccordion;