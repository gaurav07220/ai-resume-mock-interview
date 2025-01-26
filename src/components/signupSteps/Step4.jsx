import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined, ShareAltOutlined, HeartOutlined } from '@ant-design/icons';
import './style.scss';

const Step4 = () => {
    const [imageUrl, setImageUrl] = useState(
        'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png'
    );

    const uploadProps = {
        beforeUpload: (file) => {
            const reader = new FileReader();
            reader.onload = (e) => setImageUrl(e.target.result);
            reader.readAsDataURL(file);
            return false; // Prevent automatic upload
        },
    };

    // Dummy data for previous steps
    const userDetails = {
        personalInfo: {
            firstName: 'Berkutğ',
            lastName: 'Mutlu',
            phone: '+90 000 000 000',
            email: 'berktugmutlu@gmail.com',
        },
        education: ['ODTÜ', 'Bogazici University'],
        workExperience: [
            { company: 'Google Inc.', position: 'Full-Stack Developer' },
            { company: 'Slack', position: 'Sr. User Experience Designer' },
        ],
    };

    return (
        <div className="step4-container">
            <div className="header">

                <p className="description">Upload your profile picture and review your details.</p>
            </div>

            {/* Profile Photo Section */}
            <div className="photo-card">
                <div className="image-container">
                    <img src={imageUrl} alt="User" className="profile-photo" />
                </div>
                <div className="details">
                    <h4>{`${userDetails.personalInfo.firstName} ${userDetails.personalInfo.lastName}`}</h4>
                    <p className="location">
                        <span className="highlight">Izmir, Turkey</span> • Hiring!
                    </p>
                </div>
            </div>

            {/* Summary Section */}
            <div className="summary">
                <h4 className="summary-title">Personal Information</h4>
                <p>Name: {`${userDetails.personalInfo.firstName} ${userDetails.personalInfo.lastName}`}</p>
                <p>Phone: {userDetails.personalInfo.phone}</p>
                <p>Email: {userDetails.personalInfo.email}</p>

                <h4 className="summary-title">Education</h4>
                <ul>
                    {userDetails.education.map((school, index) => (
                        <li key={index}>{school}</li>
                    ))}
                </ul>

                <h4 className="summary-title">Work Experiences</h4>
                <ul>
                    {userDetails.workExperience.map((experience, index) => (
                        <li key={index}>
                            {experience.company} - {experience.position}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Upload Photo */}
            <Upload {...uploadProps} className="upload-button">
                <Button icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>


        </div>
    );
};

export default Step4;
