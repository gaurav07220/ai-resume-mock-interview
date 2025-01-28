import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss'; // Import SCSS styles

const JobPortalSection = () => {
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState('Front end developer'); // Default search keyword
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch jobs
  const fetchJobs = async (searchKeyword) => {
    const options = {
      method: 'GET',
      url: 'https://linkedin-job-api.p.rapidapi.com/job/search',
      params: {
        keyword: searchKeyword,
        page: '1',
      },
      headers: {
        'x-rapidapi-key': '7ff87d5b30mshb434c79ce9a8c3ap142f45jsnfa133fb5bb9e',
        'x-rapidapi-host': 'linkedin-job-api.p.rapidapi.com',
      },
    };

    try {
      setLoading(true);
      setError(null);
      const response = await axios.request(options);
      setJobs(response.data?.data || []);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch job data.');
    } finally {
      setLoading(false);
    }
  };

  // Handle search button click
  const handleSearch = () => {
    if (keyword.trim()) {
      fetchJobs(keyword);
    } else {
      setError('Please enter a valid keyword.');
    }
  };

  useEffect(() => {
    fetchJobs(keyword); // Initial fetch
  }, []);

  return (
    <div className="job-portal">
      <div className="container">
        <h1 className="title">Explore Top Job Listings</h1>

        {/* Search Section */}
        <div className="search-section">
          <input
            type="text"
            className="search-input"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search for jobs (e.g., Frontend Developer)"
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* Error or Loading States */}
        {error && <p className="error">{error}</p>}
        {loading ? (
          <p className="loading">Fetching jobs, please wait...</p>
        ) : jobs.length > 0 ? (
          <div className="job-grid">
            {jobs.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-card-header">
                  <img
                    src={job.companyDetails?.companyLogo || 'https://via.placeholder.com/100'}
                    alt={job.companyDetails?.name || 'Company Logo'}
                    className="company-logo"
                  />
                  <div className="job-info">
                    <h2 className="job-title">{job.title || 'Job Title'}</h2>
                    <p className="company-name">
                      {job.companyDetails?.name || 'Company Name'}
                    </p>
                  </div>
                </div>
                <p className="job-location">
                  <strong>Location:</strong> {job.location || 'Not Specified'}
                </p>
                <p className="job-description">
                  {job.description
                    ? job.description.slice(0, 100) + '...'
                    : 'No description available.'}
                </p>
                <a
                  href={job.jobPostingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apply-button"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-jobs">No jobs found for "{keyword}".</p>
        )}
      </div>
    </div>
  );
};

export default JobPortalSection;
