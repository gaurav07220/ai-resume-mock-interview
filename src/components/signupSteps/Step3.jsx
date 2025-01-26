import React, { useState } from 'react';
import { Input, Button } from 'antd';
import './style.scss'
const Step3 = () => {
  const [experiences, setExperiences] = useState([
    { company: 'Google Inc.', position: 'Full-Stack Developer' },
    { company: 'Slack', position: 'Sr. User Experience Designer' },
  ]);

  const [newExperience, setNewExperience] = useState({ company: '', position: '' });

  // Add a new experience to the list
  const addExperience = () => {
    if (newExperience.company.trim() && newExperience.position.trim()) {
      setExperiences([...experiences, newExperience]);
      setNewExperience({ company: '', position: '' });
    }
  };

  // Remove an experience from the list
  const removeExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  return (
    <div className="step-3-container">
      <div className="step-header">
       👍
        <h3 className="step-title">Work Experiences</h3>
        <p className="step-description">
          Can you talk about your past work experience?
        </p>
      </div>
      <form className="step-form">
        {experiences.map((experience, index) => (
          <div className="form-row" key={index}>
            <Input
              value={experience.company}
              readOnly
              className="form-input"
              addonAfter={
                <Button
                  type="text"
                  danger
                  onClick={() => removeExperience(index)}
                >
                  ✕
                </Button>
              }
            />
            <Input
              value={experience.position}
              readOnly
              className="form-input"
              placeholder="Position"
            />
          </div>
        ))}
        <div className="form-row">
          <Input
            placeholder="Add New Experience"
            value={newExperience.company}
            onChange={(e) =>
              setNewExperience({ ...newExperience, company: e.target.value })
            }
            className="form-input"
          />
          <Input
            placeholder="Position"
            value={newExperience.position}
            onChange={(e) =>
              setNewExperience({ ...newExperience, position: e.target.value })
            }
            className="form-input"
          />
        </div>
        <Button
          type="dashed"
          className="add-experience-btn"
          onClick={addExperience}
        >
          Add New Experience
        </Button>
        
      </form>
    </div>
  );
};

export default Step3;
