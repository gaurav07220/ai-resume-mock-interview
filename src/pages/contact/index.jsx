import React from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";
import "./style.scss";

const ContactSection = () => {
  const handleFormSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className="contact-section">
      <h1 className="contact-section__title">Get in Touch</h1>
      <p className="contact-section__subtitle">
        Have questions? We’d love to hear from you. Fill out the form below or reach us through the provided contact details.
      </p>
      <Row gutter={[24, 24]} align="middle">
        {/* Contact Form with Illustration */}
        <Col xs={24} md={12}>
          <Card className="contact-section__form-card">
            <h2>Contact Form</h2>
            <Form layout="vertical" onFinish={handleFormSubmit}>
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email address" },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                name="subject"
                label="Subject"
                rules={[{ required: true, message: "Please enter the subject" }]}
              >
                <Input placeholder="Enter the subject" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: "Please enter your message" }]}
              >
                <Input.TextArea rows={4} placeholder="Enter your message" />
              </Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <img
            src="https://img.freepik.com/free-vector/fomo-fear-missing-out-concept_23-2148659425.jpg?semt=ais_hybrid"
            alt="Contact Form Illustration"
            className="contact-section__illustration"
            width='60%'
          />
        </Col>
      </Row>

      {/* Contact Information with Illustration */}
      <Row gutter={[24, 24]} align="middle" className="contact-section__info-row">
        <Col xs={24} md={12}>
          <img
            src="https://img.freepik.com/free-vector/virtual-assistant-concept-illustration_114360-25576.jpg?semt=ais_hybrid"
            alt="Contact Information Illustration"
            className="contact-section__illustration"
            width='40%'
          />
        </Col>
        <Col xs={24} md={12}>
          <Card className="contact-section__info-card">
            <h2>Contact Information</h2>
            <p>
              Reach out to us via email, phone, or visit our office. We're here to help you!
            </p>
            <ul className="contact-section__info-list">
              <li>
                <MailOutlined /> support@example.com
              </li>
              <li>
                <PhoneOutlined /> +1 (555) 123-4567
              </li>
              <li>
                <EnvironmentOutlined /> 123 Example Street, City, Country
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContactSection;
