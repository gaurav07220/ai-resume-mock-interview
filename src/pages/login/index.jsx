
import { Input, Button, Form } from 'antd';
import './style.scss';
import { Link } from 'react-router-dom';


const Login = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Login Successful:', values);
    // Redirect to the dashboard or homepage
    window.location.href = '/dashboard'; // Adjust route as needed
  };

  return (
    <div className="login-container">
      {/* Left Banner Section */}
      <div className="login-banner">
        <div className="banner-content">
          <img
            src="https://getillustrations.b-cdn.net//packs/sketch-vector-illustrations/scenes/_1x/accounts%20_%20profile,%20account,%20user,%20cv,%20resume,%20information,%20man,%20people_demo.png" // Replace with your illustration URL
            alt="Login Illustration"
            className="banner-image"
          />
          <h2 className="banner-title">Welcome Back</h2>
          <p className="banner-text">
            Log in to analyze resumes, match job descriptions, and prepare for
            mock interviews with ease.
          </p>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="login-form-container">
        <h1>Login</h1>
        <p className="form-description">
          Enter your credentials to access your account.
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
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-button"
            >
              Log In
            </Button>
          </Form.Item>
        </Form>
        <div className="login-footer">
         
          <Link to='/forgot-password'>    Forgot Password?</Link>
          <p className="signup-redirect">
            Don’t have an account? 
            <Link to="/signup" style={{marginLeft:'10px'}}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
