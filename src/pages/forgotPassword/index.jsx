import React from 'react';
import { Input, Button, Form } from 'antd';
import './style.scss';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Password Reset Email Sent:', values);
    // Redirect or show success message
    alert('Password reset link has been sent to your email!');
  };

  return (
    <div className="forgot-password-container">
      {/* Left Banner Section */}
      <div className="forgot-password-banner">
        <div className="banner-content">
          <img
            src="https://cdn.vectorstock.com/i/500p/88/15/forgot-password-vector-51448815.jpg" // Replace with your illustration URL
            alt="Forgot Password Illustration"
            className="banner-image"
          />
          {/* <h2 className="banner-title">Forgot Your Password?</h2> */}
          <p className="banner-text">
            No worries! Enter your registered email, and we’ll send you a link to reset your password.
          </p>
        </div>
      </div>

      {/* Forgot Password Form Section */}
      <div className="forgot-password-form-container">
        <h1>Reset Password</h1>
        <p className="form-description">
          Enter your email address to receive a password reset link.
        </p>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input placeholder="Enter your registered email" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="forgot-password-button"
            >
              Send Reset Link
            </Button>
          </Form.Item>
        </Form>
        <div className="forgot-password-footer">
          <p className="login-redirect">
            Remembered your password? <Link to='/login'>Log in</Link>
            {/* <a href="/login">Log in</a> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
