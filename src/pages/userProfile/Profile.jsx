import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Row,
  Avatar,
  Button,
  List,
  Tag,
  Typography,
  Input,
  Tooltip,
  Timeline,
  Upload,
  message,
  Switch,
} from "antd";
import { PlusOutlined, EditOutlined, CheckCircleOutlined, BulbOutlined, UploadOutlined } from "@ant-design/icons";
import ReactECharts from "echarts-for-react";
import showToast from "../../components/message/ShowTaost";
import { getProfile, updateProfile } from "../../api/api";

const { Title, Text } = Typography;

const UserProfile = () => {
  const [refresh,setRefresh] = useState(false);
  const [profile, setProfile] = useState({
    name: "Amar Kumar Prajapati",
    title: "AI Developer",
    status: "Active Job Seeker",
    image: null,
    skills: ["Python", "AI/ML", "ReactJS", "NodeJS"],
    roadmap: [{ step: "Complete Python Advanced Course", completed: true },
    { step: "Obtain AWS ML Certification", completed: true },
    { step: "Apply for 5 relevant roles", completed: false },
    { step: "Attend advanced mock interviews", completed: false },]
  });


  const [isEditMode, setIsEditMode] = useState(false); // Edit mode toggle
  const [profileStrength, setProfileStrength] = useState(85);


  // Save Profile
  const saveProfile = () => {
    showToast('success', 'Profile saved successfully!');
    setIsEditMode(false);
    const {email,title,skills} = profile  
    const updatedData = {
    email,title,skills
    };
  
    updateProfile(updatedData)
      .then((res) => setRefresh(!refresh))
      .catch((error) => console.error("Error updating profile:", error));
  };
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile("gauravchavhan05@gmail.com"); // Wait for response
        const full_name = res?.firstname + " " + res?.lastname;
        setProfile((prev) => ({
          ...prev,
          name: full_name,
          ...res
          
        }));
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [refresh]);


  // Handle Profile Image Upload
  const handleImageUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
      return false;
    }
    const reader = new FileReader();
    reader.onload = () => setProfile((prev) => ({ ...prev, image: reader.result }));
    reader.readAsDataURL(file);
    return false;
  };

  // Handle Skill Addition
  const handleAddSkill = (skill) => {
    if (profile.skills.includes(skill)) {
      message.warning("Skill already added!");
    } else {
      setProfile((prev) => ({ ...prev, skills: [...prev.skills, skill] }));
      message.success("Skill added!");
    }
  };

  // Handle Skill Removal
  const handleRemoveSkill = (skill) => {
    setProfile((prev) => ({ ...prev, skills: prev.skills.filter((s) => s !== skill) }));
    message.success("Skill removed!");
  };

  // Profile Strength Doughnut Chart
  const profileStrengthOptions = {
    tooltip: { trigger: "item" },
    series: [
      {
        name: "Profile Strength",
        type: "pie",
        radius: ["50%", "70%"],
        label: { show: true, position: "center", formatter: "{d}%", fontSize: 18, fontWeight: "bold" },
        data: [
          { value: profileStrength, name: "Completed" },
          { value: 100 - profileStrength, name: "Remaining" },
        ],
        color: ["#1890ff", "#f0f2f5"],
      },
    ],
  };

  return (
    <div style={{ background: "#f9f9f9", padding: "24px" }}>
      {/* Profile Header */}
      <Card style={{ marginBottom: "24px", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
        <Row justify="space-between" align="middle">
          <Col>
            <div style={{ display: "flex", alignItems: "end" }}>
              <Upload
                showUploadList={false}
                beforeUpload={handleImageUpload}
              >
                <Avatar
                  size={80}
                  src={profile?.image}
                  style={{ marginRight: "16px", cursor: "pointer", backgroundColor: "#1890ff" }}
                />
              </Upload>
              <div>
                {isEditMode ? (
                  <Input
                    value={profile.name}
                    onChange={(e) => setProfile((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter Name"
                    style={{ marginBottom: "8px" }}
                  />
                ) : (
                  <Title level={4} style={{ marginBottom: 0 }}>
                    {profile.name}
                  </Title>
                )}
                {isEditMode ? (
                  <Input
                    value={profile.title}
                    onChange={(e) => setProfile((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter Title"
                  />
                ) : (
                  <Text>{profile.title}</Text>
                )}
                <br />
                <Text type="secondary">
                  Status:{" "}
                  {isEditMode ? (
                    <Input
                      value={profile.status}
                      onChange={(e) => setProfile((prev) => ({ ...prev, status: e.target.value }))}
                      placeholder="Enter Status"
                      style={{ width: "50%" }}
                    />
                  ) : (
                    profile.status
                  )}
                </Text>
              </div>
            </div>
          </Col>
          <Col>
            <Switch
              checked={isEditMode}
              onChange={(checked) => setIsEditMode(checked)}
              checkedChildren="Edit Mode"
              unCheckedChildren="View Mode"
            />
          </Col>
        </Row>
      </Card>

      {/* Profile Strength */}
      <Row gutter={24}>
        <Col span={12}>
          <Card title="Profile Strength" hoverable>
            <ReactECharts option={profileStrengthOptions} style={{ height: "200px" }} />
          </Card>
        </Col>

        {/* Skills Section */}
        <Col span={12}>
          <Card title="Skills & Endorsements" hoverable>
            <div>
              {profile.skills.map((skill) => (
                <Tag
                  color="blue"
                  key={skill}
                  closable={isEditMode}
                  onClose={() => handleRemoveSkill(skill)}
                  style={{ marginBottom: "8px" }}
                >
                  {skill}
                </Tag>
              ))}
            </div>
            {isEditMode && (
              <Input.Search
                placeholder="Add a skill"
                enterButton={<PlusOutlined />}
                onSearch={handleAddSkill}
                style={{ marginTop: "16px" }}
              />
            )}
          </Card>
        </Col>
      </Row>

      {/* Career Roadmap */}
      <Row gutter={24} style={{ marginTop: "24px" }}>
        <Col span={24}>
          <Card title="Career Roadmap" hoverable>
            <Timeline>
              {profile?.roadmap?.map((item, index) => (
                <Timeline.Item
                  key={index}
                  color={item.completed ? "green" : "gray"}
                  dot={item.completed ? <CheckCircleOutlined /> : <BulbOutlined />}
                >
                  {item.step}
                </Timeline.Item>
              ))}
            </Timeline>
            <Button type="primary" style={{ marginTop: "16px", background: 'black' }}>
              Access Free Courses
            </Button>
          </Card>
        </Col>
      </Row>

      {/* Save Profile Button */}
      {isEditMode && (
        <Row justify="end" style={{ marginTop: "24px" }}>
          <Button type="primary" size="large" style={{ backgroundColor: "black" }} onClick={saveProfile}>
            Save Profile
          </Button>
        </Row>
      )}
    </div>
  );
};

export default UserProfile;
