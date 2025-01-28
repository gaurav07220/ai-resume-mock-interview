import React, { useState } from 'react';
import axios from 'axios';

const Analyze = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resumeData, setResumeData] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setError('');
    setResumeData(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Please select a file to analyze.');
      return;
    }

    setLoading(true);
    setError('');

    // Step 1: Upload the file and get the ID
    const formData = new FormData();
    formData.append('file', selectedFile);

    const uploadOptions = {
      method: 'POST',
      url: 'https://resume-parser-and-analyzer.p.rapidapi.com/api/v1/cv/',
      headers: {
        'x-rapidapi-key': '7ff87d5b30mshb434c79ce9a8c3ap142f45jsnfa133fb5bb9e',
        'x-rapidapi-host': 'resume-parser-and-analyzer.p.rapidapi.com',
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    };

    try {
      const uploadResponse = await axios.request(uploadOptions);
      const { id } = uploadResponse.data;

      // Step 2: Fetch resume details using the ID
      const options = {
        method: 'GET',
        url: `https://resume-parser-and-analyzer.p.rapidapi.com/api/v1/cv/${id}/`,
        headers: {
          'x-rapidapi-key': '7ff87d5b30mshb434c79ce9a8c3ap142f45jsnfa133fb5bb9e',
          'x-rapidapi-host': 'resume-parser-and-analyzer.p.rapidapi.com'
        }
      };

      const detailResponse = await axios.request(options);
      setResumeData(detailResponse.data);
    } catch (err) {
      setError('Failed to process the resume. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="analyze-container">
      <h1>Resume Analyzer</h1>
      <form onSubmit={handleSubmit} className="analyze-form">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="file-input"
        />
        <button type="submit" disabled={loading} className="submit-button">
          {loading ? 'Processing...' : 'Analyze Resume'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {resumeData && (
        <div className="result-container">
          <h2>Resume Details</h2>
          <pre>{JSON.stringify(resumeData, null, 2)}</pre>
        </div>
      )}
      <style jsx>{`
        .analyze-container {
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }
        .analyze-form {
          margin-bottom: 20px;
        }
        .file-input {
          margin-bottom: 10px;
        }
        .submit-button {
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .submit-button:disabled {
          background-color: #aaa;
          cursor: not-allowed;
        }
        .error-message {
          color: red;
          margin-top: 10px;
        }
        .result-container {
          margin-top: 20px;
          text-align: left;
          background-color: #f9f9f9;
          padding: 15px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default Analyze;
