import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';

const Education = () => {
  const [institutions, setInstitutions] = useState([]);
  const [selectedInstitution, setSelectedInstitution] = useState('');
  const [courses, setCourses] = useState([]);
  const [loadingInstitutions, setLoadingInstitutions] = useState(false);
  const [loadingCourses, setLoadingCourses] = useState(false);
  const [error, setError] = useState('');

  // Fetch institutions
  const fetchInstitutions = async () => {
    setLoadingInstitutions(true);
    setError('');
    try {
      const options = {
        method: 'GET',
        url: 'https://collection-for-coursera-courses.p.rapidapi.com/rapidapi/course/get_institution.php',
        headers: {
          'x-rapidapi-key': '7ff87d5b30mshb434c79ce9a8c3ap142f45jsnfa133fb5bb9e',
          'x-rapidapi-host': 'collection-for-coursera-courses.p.rapidapi.com',
        },
      };

      const response = await axios.request(options);
      setInstitutions(response.data);
    } catch (err) {
      setError('Failed to fetch institutions. Please try again.');
      console.error(err);
    } finally {
      setLoadingInstitutions(false);
    }
  };

  // Fetch courses
  const fetchCourses = async (institution) => {
    setLoadingCourses(true);
    setError('');
    setCourses([]);
    try {
      const options = {
        method: 'GET',
        url: 'https://collection-for-coursera-courses.p.rapidapi.com/rapidapi/course/get_course.php',
        params: { page_no: '1', course_institution: institution },
        headers: {
          'x-rapidapi-key': '7ff87d5b30mshb434c79ce9a8c3ap142f45jsnfa133fb5bb9e',
          'x-rapidapi-host': 'collection-for-coursera-courses.p.rapidapi.com',
        },
      };

      const response = await axios.request(options);
      setCourses(response.data.reviews || []);
    } catch (err) {
      setError('Failed to fetch courses. Please try again.');
      console.error(err);
    } finally {
      setLoadingCourses(false);
    }
  };

  const handleInstitutionSelect = (e) => {
    const institution = e.target.value;
    setSelectedInstitution(institution);
    if (institution) fetchCourses(institution);
  };

  return (
    <div className="education-container">
      <header className="header">
        <h1>Discover Educational Opportunities</h1>
        <p>Find institutions and their courses to enhance your skills.</p>
      </header>

      <section className="action-section">
        <button
          onClick={fetchInstitutions}
          disabled={loadingInstitutions}
          className="fetch-button"
        >
          {loadingInstitutions ? 'Loading Institutions...' : 'Get Institutions'}
        </button>
        {error && <p className="error-message">{error}</p>}

        {institutions.length > 0 && (
          <div className="dropdown-container">
            <label htmlFor="institutions">Select Institution</label>
            <select
              id="institutions"
              value={selectedInstitution}
              onChange={handleInstitutionSelect}
              className="dropdown"
            >
              <option value="">-- Choose an Institution --</option>
              {institutions.map((institution, index) => (
                <option key={index} value={institution}>
                  {institution}
                </option>
              ))}
            </select>
          </div>
        )}
      </section>

      <section className="courses-section">
        {loadingCourses && <p className="loading-text">Loading courses...</p>}

        {courses.length > 0 && (
          <div>
            <h2 className="section-title">
              Courses Offered by {selectedInstitution}
            </h2>
            <div className="course-cards">
              {courses.map((course) => (
                <div key={course.course_id} className="course-card">
                  <h3>{course.course_name}</h3>
                  <p>{course.course_institution}</p>
                  <a
                    href={course.course_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-course-link"
                  >
                    View Course
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Education;
