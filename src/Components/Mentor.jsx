import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';
import './mentor.css';

const courseData = {
  marketing: [
    {
      title: 'Digital Marketing Mastery',
      months: '5 months',
      enrolled: '300+ Enrolled',
      image: '/images/courses.jpg',
    },
  ],
  uiux: [
    {
      title: 'UI/UX Design Bootcamp',
      months: '4 months',
      enrolled: '850+ Enrolled',
      image: 'img/graphic1.jpg',
    },
    {
      title: 'Figma Masterclass for Beginners',
      months: '3 months',
      enrolled: '1200+ Enrolled',
      image: 'img/graphic2.jpg',
    },
  ],
  software: [
    {
      title: 'Full Stack Web Development',
      months: '6 months',
      enrolled: '250+ Enrolled',
      image: 'img/software.jpg',
    },
    {
      title: 'Frontend Developer Bootcamp',
      months: '4 months',
      enrolled: '500+ Enrolled',
      image: 'img/software1.jpg',
    },
  ],
};

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('marketing');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/graphicDesign') {
      setSelectedCategory('uiux');
    } else if (location.pathname === '/courses') {
      setSelectedCategory('marketing');
    }
  }, [location.pathname]);

  const renderCourses = () => {
    return courseData[selectedCategory]?.map((course, index) => (
      <a
        key={index}
        className="course-card"
        href={`/details?course=${encodeURIComponent(course.title)}`}
      >
        <img src={course.image} alt={course.title} />
        <div className="course-content">
          <div className="course-title">{course.title}</div>
          <div className="course-meta">
            {course.months} &nbsp; 👤 {course.enrolled}
          </div>
        </div>
      </a>
    ));
  };

  return (
    <>
    <div className='Heading'>
      <h1>Mentor-Led Courses</h1>
    </div>
      <p className="subtitle">
        Choose your career path & explore our wide range of specialized courses that help you grow.
      </p>

      <div className="category-buttons">
        <Link to="/courses">
          <button className={`category-btn ${selectedCategory === 'marketing' ? 'active' : ''}`}>
            <img src="images/courses.jpg" alt="Digital Marketing" />
            <span>Digital Marketing</span>
          </button>
        </Link>

        <Link to="/graphicDesign">
          {/* <button className={`category-btn ${selectedCategory === 'uiux' ? 'active' : ''}`}> */}
            {/* <img src="images/ux.jpg" alt="UI/UX Design" /> */}
        <button className={`category-btn ${selectedCategory === 'software' ? 'active' : ''}`}>
            <span>UI/UX Design</span>
          </button>
        </Link>

        <Link to="/software">
          <button className={`category-btn ${selectedCategory === 'software' ? 'active' : ''}`}>
            <img src="images/sd.jpg" alt="Software Development" />
            <span>Software Development</span>
          </button>
        </Link>
      </div>

      <div className="course-container">{renderCourses()}</div>
      <Footer />
    </>
  );
};

export default CoursesPage;
