import React, { useEffect, useState } from "react";
import "./ourwork2.css";
import Button from "./Button";
import Footer from "./Footer";

const projectData = [
  {
    type: "React",
    title: "E-commerce",
    desc: "An advanced online shopping experience with intuitive navigation and secure checkout..",
    image: "img/ecomerce online.png",
    link: "https://www.vedantcomputers.com/",
  },
  {
    type: "wordpress",
    title: "online grocery",
    desc: "A local grocery delivery platform with an easy-to-use interface for daily essentials.",
    image: "img/onlineshop.webp",
    link: "https://onlinekirana.co.in/",
  },
  {
    type: "react",
    title: "LuxeGlow Beauty",
    desc: "An elegant website featuring premium beauty & skincare products with user experience.",
    image: "img/beauty.webp",
    link: "https://www.bondexch.buzz/home",
  },
  {
    type: "react",
    title: "Hotel Booking",
    desc: "A hospitality booking platform providing an effortless hotel reservation experience.",
    image: "img/hotel.webp",
    link: "https://calmstays.in/",
  },
  {
    type: "wordpress",
    title: "Car Rental",
    desc: "A vehicle rental service offering an easy booking process and a diverse fleet.",
    image: "img/car.webp",
    link: "https://modcar.travelerwp.com/",
  },
  {
    type: "react",
    title: "Market Research",
    desc: "A comprehensive data analysis platform offering insights for business growth.",
    image: "img/market2.webp",
    link: "https://msmarketresearchtools.com/",
  },
  {
    type: "wordpress",
    title: "Q Blue",
    desc: "An innovative business website for a trading company with a modern and professional look.",
    image: "img/qblue.webp",
    link: "https://rmptraders.in/",
  },
  {
    type: "wordpress",
    title: "Smart Mentor Education",
    desc: "An online learning platform providing educational resources and virtual classes.",
    image: "img/education.webp",
    link: "https://smartmentoredu.com/",
  },
  {
    type: "react",
    title: "IT Solutions",
    desc: "A tech-driven website offering IT services, cybersecurity solutions, and cloud computing.",
    image: "img/it solution.webp",
    link: "https://mycustomercare24x7.in/",
  },
  {
    type: "react",
    title: "Agriculture",
    desc: "An agricultural website promoting modern farming techniques and sustainable practices..",
    image: "img/agriculture.webp",
    link: "https://cybrixs.net/",
  },
  {
    type: "wordpress",
    title: "Sweet & Cookiest",
    desc: "A delightful online store for premium sweets, cookies, and baked goods..",
    image: "img/food web.webp",
    link: "https://jrssnacks.com/cgi-sys/suspendedpage.cgi",
  },
  {
    type: "react",
    title: "Cosmetic",
    desc: "An AI-powered hospital management solution  and patient data management.",
    image: "img/cosmetic.webp",
    link: "#",
  },
];

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setProjects(projectData);
  }, []);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type.toLowerCase() === filter);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <>
    <div>
      <div id="navbar"></div>
      <h1 className="main-heading">Our Projects</h1>

      <section className="projects-section">
        <div className="projects-header">
          <select
            id="project-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="wordpress">Wordpress</option>
            <option value="react">React</option>
          </select>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((p, idx) => (
            <div className="project-card" key={idx}>
              <img
                src={p.image}
                alt={p.title}
                className="project-image"
              />
              <div className="project-content">
                <div className="project-type">{capitalize(p.type)}</div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <a
                  href={p.link}
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="pagination">
          <a href="#">
            <button>&larr; Prev</button>
          </a>
          <a href="portfolio.html">
            <button>Next &rarr;</button>
          </a>
        </div> */}
      </section>

      <div id="footer-placeholder"></div>
    </div>
    <div>
      <Button/>
      
    </div>
    <div>
          <Footer/>
        </div>
  </> 
  );
};

export default ProjectsPage;
