import React, { useState } from "react";
import axios from "axios";
import "./style.scss";

const EducationUdemy = () => {
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch courses from the Udemy API
  const fetchCourses = async (searchQuery) => {
    setLoading(true);
    setError("");
    setCourses([]);
    try {
      const options = {
        method: "GET",
        url: "https://udemy-paid-courses-for-free-api.p.rapidapi.com/rapidapi/courses/search",
        params: { page: "1", page_size: "10", query: searchQuery },
        headers: {
          "x-rapidapi-key": "7ff87d5b30mshb434c79ce9a8c3ap142f45jsnfa133fb5bb9e",
          "x-rapidapi-host": "udemy-paid-courses-for-free-api.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      setCourses(response.data.courses || []);
    } catch (err) {
      setError("Failed to fetch courses. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      fetchCourses(query);
    } else {
      setError("Please enter a search query.");
    }
  };

  return (
    <div className="EducationUdemy-container">
      <header className="header">
        <h1>Discover Udemy Free Courses</h1>
        <p>Search and find free Udemy courses to enhance your skills.</p>
      </header>

      <section className="action-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for courses (e.g., Python, Web Development)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} disabled={loading} className="search-button">
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </section>

      <section className="courses-section">
        {loading && <p className="loading-text">Loading courses...</p>}

        {courses.length > 0 && (
          <div>
            <h2 className="section-title">Search Results for "{query}"</h2>
            <div className="course-cards">
              {courses.map((course, index) => (
                <div key={index} className="course-card">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="course-image"
                  />
                  <h3 className="course-title">{course.name}</h3>
                  <p className="course-category">Category: {course.category}</p>
                  <p className="course-price">
                    <strong>Price:</strong> 
                    <span className="strike">${course.actual_price_usd.toFixed(2)}</span> 
                    Free
                  </p>
                  <p className="course-sale-end">
                    Sale ends on: {new Date(course.sale_end).toLocaleString()}
                  </p>
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-course-link"
                  >
                    Enroll Now
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

export default EducationUdemy;
