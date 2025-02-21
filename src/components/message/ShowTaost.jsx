import toast from 'react-hot-toast';
import { CheckCircleOutlined, CloseCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';

const showToast = (type, message) => {
  let icon, bgColor;

  switch (type) {
    case 'success':
      icon = <CheckCircleOutlined style={{ color: '#28a745', fontSize: 18 }} />;
      bgColor = '#e6ffed'; // Light Green
      break;
    case 'error':
      icon = <CloseCircleOutlined style={{ color: '#dc3545', fontSize: 18 }} />;
      bgColor = '#ffe6e6'; // Light Red
      break;
    case 'info':
      icon = <InfoCircleOutlined style={{ color: '#17a2b8', fontSize: 18 }} />;
      bgColor = '#e6f7ff'; // Light Blue
      break;
    default:
      icon = <InfoCircleOutlined style={{ color: '#6c757d', fontSize: 18 }} />;
      bgColor = '#f8f9fa'; // Light Grey
  }

  toast.custom((t) => (
    <div
      className={`custom-toast ${t.visible ? 'show' : 'hide'}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        borderRadius: '8px',
        background: bgColor,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
        color: '#333',
        fontSize: '14px',
        fontWeight: '500',
        minWidth: '250px',
      }}
    >
      {icon}
      <span style={{ marginLeft: '12px' }}>{message}</span>
    </div>
  ));
};

export default showToast;
