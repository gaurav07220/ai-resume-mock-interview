import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Header.scss';

const { Header } = Layout;

const profileMenu = (
  <Menu>
    <Menu.Item key="see-profile">
      <Link to="/profile">See Profile</Link>
    </Menu.Item>
    <Menu.Item key="my-interviews">
      <Link to="/my-interviews">My Interviews</Link>
    </Menu.Item>
    <Menu.Item key="my-resumes">
      <Link to="/my-resumes">My Resumes</Link>
    </Menu.Item>
    <Menu.Item key="logout">
      <Link to="/logout">Log Out</Link>
    </Menu.Item>
    <Menu.Item key="signup">
      <Link to="/signup">Sign Up</Link>
    </Menu.Item>
  </Menu>
);

function AppHeader() {
  return (
    <Header className="app-header" logo="JobAssist" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

      {/* <div className="app-header__logo">JobAssist</div> */}
      <Menu theme="light" mode="horizontal" className="app-header__menu">


        <Menu.Item key="resume-analysis">
          <Link to="/resume-analysis">Resume</Link>
        </Menu.Item>

        <Menu.Item key="resources">
          <Link to="/courses">Courses</Link>
        </Menu.Item>
        <Menu.Item key="pricing">
          <Link to="/pricing">Pricing</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
        <Menu.Item key='profile'>
          <Dropdown overlay={profileMenu} trigger={["click"]} className="app-header__dropdown">
            <a href="#" onClick={(e) => e.preventDefault()}>
              Profile <DownOutlined />
            </a>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default AppHeader;
