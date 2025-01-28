import React from "react";
import { Card, List, Typography } from "antd";
import "./style.scss";
import JobPortalSection from "../../components/matchedJobs";

const dummyResources = [
  {
    id: 1,
    title: "How to Write a Winning Resume",
    description: "Tips and tricks to craft a resume that stands out.",
    link: "#",
  },
  {
    id: 2,
    title: "Top 10 Interview Questions",
    description: "Prepare for interviews with these common questions.",
    link: "#",
  },
  {
    id: 3,
    title: "Upskill with Online Courses",
    description: "Explore platforms offering career-enhancing courses.",
    link: "#",
  },
  {
    id: 4,
    title: "Networking for Success",
    description: "Learn the art of professional networking.",
    link: "#",
  },
];

const ResourcesSection = () => {
  return (
    <div className="resources-section">
      <Typography.Title level={2} className="section-title">
        Explore Resources
      </Typography.Title>
      <p className="section-subtitle">
        Enhance your career journey with these handpicked guides and tools.
      </p>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={dummyResources}
        renderItem={(item) => (
          <List.Item>
            <Card
            //   hoverable
              className="resource-card"
              cover={
                <div className="card-cover">
                  <img
                    src='/assets/images/how to write resume image.webp'
                    alt={item.title}
                    className="card-image"
                  />
                </div>
              }
            >
              <div className="card-content">
                <Typography.Title level={4} className="card-title">
                  {item.title}
                </Typography.Title>
                <p className="card-description">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Learn More
                </a>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
     
  );
};

export default ResourcesSection;