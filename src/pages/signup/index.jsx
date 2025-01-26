
import { Input, Button, Checkbox, Form } from 'antd';
import './style.scss';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form Submitted:', values);
        // Redirect to the dashboard or next step
        window.location.href = '/resume-analysis'; // Adjust route as needed
    };

    return (
        <div className="signup-container">
            {/* Left Banner Section */}
            <div className="signup-banner">
                <div className="banner-content">
                    <img
                        src="https://getillustrations.b-cdn.net//packs/sketch-vector-illustrations/scenes/_1x/accounts%20_%20profile,%20account,%20user,%20cv,%20resume,%20information,%20man,%20people_demo.png" // Replace with your logo URL
                        alt="Resume Illustration"
                        className="banner-image"
                    />
                    <h2 className="banner-title">
                        Perfect your resume and land your dream job
                    </h2>
                    <p className="banner-text">
                        Analyze your resume against job descriptions, get tailored
                        recommendations, and prepare for your next interview with confidence.
                    </p>
                </div>
            </div>

            {/* Registration Form Section */}
            <div className="signup-form-container">
                <h1>Register</h1>
                <p className="form-description">
                    Create an account to start analyzing your resume, matching it to job
                    descriptions, and preparing for mock interviews.
                </p>
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <div className="form-row">
                        <Form.Item
                            label="First Name"
                            name="firstName"
                            rules={[{ required: true, message: 'Please enter your first name!' }]}
                        >
                            <Input placeholder="Enter your first name" />
                        </Form.Item>
                        <Form.Item
                            label="Last Name"
                            name="lastName"
                            rules={[{ required: true, message: 'Please enter your last name!' }]}
                        >
                            <Input placeholder="Enter your last name" />
                        </Form.Item>
                    </div>
                    <div className="form-row">
                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[{ required: true, message: 'Please enter your phone number!' }]}
                        >
                            <Input placeholder="Enter your phone number" />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Please enter your email!' },
                                { type: 'email', message: 'Please enter a valid email!' },
                            ]}
                        >
                            <Input placeholder="Enter your email" />
                        </Form.Item>
                    </div>
                    <div className="form-row">
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                { required: true, message: 'Please enter your password!' },
                                { min: 6, message: 'Password must be at least 6 characters!' },
                            ]}
                        >
                            <Input.Password placeholder="Enter your password" />
                        </Form.Item>
                        <Form.Item
                            label="Confirm Password"
                            name="confirmPassword"
                            dependencies={['password']}
                            rules={[
                                { required: true, message: 'Please confirm your password!' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error('The two passwords do not match!')
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder="Confirm your password" />
                        </Form.Item>
                    </div>
                    <Form.Item name="terms" valuePropName="checked" className="checkbox-item">
                        <Checkbox className='checkbox'>
                            I agree to the <a href="/terms">Terms, Privacy Policy, and Fees</a>.
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="signup-button"
                        >
                            Create Account
                        </Button>
                    </Form.Item>
                </Form>
                <p className="login-redirect">
                    Already have an account?
                    <Link to='/login' style={{ marginLeft: '10px' }}>Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
