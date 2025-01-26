import React, { useState } from "react";
import { Card, Row, Col, Button, Tag } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "./style.scss";

const plans = [
  {
    key: "free",
    title: "Free",
    price: "₹0",
    features: [
      "Resume Analysis",
      "Basic Job Recommendations",
      "Access to Resources",
      "Create resumes (limited)",
    ],
    button: "Select Plan",
    buttonType: "default",
  },
  {
    key: "pro",
    title: "Pro",
    price: "₹499/month",
    features: [
      "Advanced Resume Insights",
      "Mock Interviews",
      "Customized Job Analysis",
      "Priority Support",
    ],
    button: "Select Plan",
    buttonType: "primary",
  },
  {
    key: "enterprise",
    title: "Enterprise",
    price: "₹999/month",
    features: [
      "Team Access",
      "In-depth Analytics",
      "Dedicated Support",
      "Custom Features",
    ],
    button: "Select Plan",
    buttonType: "dashed",
  },
];

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("free"); // Default is Free Plan

  const handlePlanSelect = (key) => {
    setSelectedPlan(key);
  };

  return (
    <div className="pricing-section">
      <h1 className="pricing-section__title">Choose the Right Plan</h1>
      <p className="pricing-section__subtitle">
        Explore our plans and find the perfect fit for your career goals.
      </p>
      <Row gutter={[24, 24]} justify="center">
        {plans.map((plan) => (
          <Col key={plan.key} xs={24} sm={12} md={8}>
            <Card
              className={`pricing-card ${
                selectedPlan === plan.key ? "pricing-card--active" : ""
              }`}
              bordered={false}
              hoverable
            >
              {plan.key === "pro" && (
                <Tag color="gold" className="pricing-card__tag">
                  Most Popular
                </Tag>
              )}
              <h2 className="pricing-card__title">{plan.title}</h2>
              <h3 className="pricing-card__price">{plan.price}</h3>
              <ul className="pricing-card__features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="pricing-card__feature">
                    <CheckOutlined /> {feature}
                  </li>
                ))}
              </ul>
              <Button
                type={plan.buttonType}
                size="large"
                block
                onClick={() => handlePlanSelect(plan.key)}
              >
                {selectedPlan === plan.key ? "Selected" : plan.button}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PricingSection;
