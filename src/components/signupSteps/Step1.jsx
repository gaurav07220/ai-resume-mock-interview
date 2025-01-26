import React from 'react';
import { Input, Select, Button } from 'antd';
import './style.scss'
const { Option } = Select;

const Step1 = () => {
  return (
    <div className="step-container">
      <div className="step-header">
       👋👋
        <h3 className="step-title">Your Personal Information</h3>
        <p className="step-description">
          Enter your personal information to get closer to companies.
        </p>
      </div>
      <form className="step-form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <Input placeholder="Berkutğ" className="form-input" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <Input placeholder="Mutlu" className="form-input" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <Input placeholder="+90 000 000 000" className="form-input" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <Input placeholder="berktugmutlu@gmail.com" className="form-input" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Country</label>
            <Select placeholder="Turkey" className="form-input">
              <Option value="Turkey">Turkey</Option>
              <Option value="India">India</Option>
              <Option value="USA">USA</Option>
            </Select>
          </div>
          <div className="form-group">
            <label>City</label>
            <Select placeholder="Izmir" className="form-input">
              <Option value="Izmir">Izmir</Option>
              <Option value="Istanbul">Istanbul</Option>
              <Option value="Ankara">Ankara</Option>
            </Select>
          </div>
        </div>
       
      </form>
    </div>
  );
};

export default Step1;
