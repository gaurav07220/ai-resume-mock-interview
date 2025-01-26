import React, { useState } from 'react';
import { Input, Button } from 'antd';
import './style.scss'
const Step2 = () => {
  const [schools, setSchools] = useState(['ODTÜ', 'Bogazici University']);
  const [newSchool, setNewSchool] = useState('');

  // Add a new school to the list
  const addSchool = () => {
    if (newSchool.trim()) {
      setSchools([...schools, newSchool]);
      setNewSchool('');
    }
  };

  // Remove a school from the list
  const removeSchool = (index) => {
    setSchools(schools.filter((_, i) => i !== index));
  };

  return (
    <div className="step-2-container">
      <div className="step-header">
     👌
        <h3 className="step-title">Education</h3>
        <p className="step-description">
          Inform companies about your education life.
        </p>
      </div>
      <form className="step-form">
        {schools.map((school, index) => (
          <div className="form-row" key={index}>
            <Input
              value={school}
              className="form-input"
              readOnly
              addonAfter={
                <Button
                  type="text"
                  danger
                  onClick={() => removeSchool(index)}
                >
                  ✕
                </Button>
              }
            />
          </div>
        ))}
        <div className="form-row">
          <Input
            placeholder="Add New School"
            value={newSchool}
            onChange={(e) => setNewSchool(e.target.value)}
            className="form-input"
          />
          <Button
            type="dashed"
            className="add-school-btn"
            onClick={addSchool}
          >
            Add New School
          </Button>
        </div>
        
      </form>
    </div>
  );
};

export default Step2;
