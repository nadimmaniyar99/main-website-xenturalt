import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ourwork.css";
import Footer from "./Footer";
import Button from "./Button";

const projectData = [
  {
    type: "wordpress",
    title: "Real Estate Platform",
    desc: "A modern real estate platform showcasing properties with seamless navigation and responsive design.",
    image: "img/real estate.jpg",
    link: "https://www.actindustrial.co.uk/",
  },
  {
    type: "wordpress",
    title: "Healthray Healthcare",
    desc: "A healthcare management system offering telemedicine, patient records, and seamless hospital integration.",
    image: "img/health.avif",
    link: "https://healthray.com/",
  },
  {
    type: "wordpress",
    title: "Fashion Plus",
    desc: "A trendy online fashion store featuring the latest clothing styles and accessories.",
    image: "img/fashion.webp",
    link: "https://canaryfashionplus.com/",
  },
  {
    type: "react",
    title: "Exam Corner",
    desc: "Boost your exam preparation with Test Series for Banking, SSC, RRB & All other Govt. Exams.",
    image: "img/test book.jpg",
    link: "#",
  },
  {
    type: "wordpress",
    title: "MegaMatches",
    desc: "A sports betting web application enables users to wager on sports events online.",
    image: "img/mega.png",
    link: "#",
  },
  {
    type: "react",
    title: "Raja Bets",
    desc: "A sports betting web application enables users to wager on sports events online.",
    image: "img/rajabet.webp",
    link: "#",
  },
  {
    type: "wordpress",
    title: "Mr & Mrs Smith",
    desc: "A travel club for hotel lovers offering exclusive deals, luxury stays, and curated experiences.",
    image: "img/smith.webp",
    link: "#",
  },
  {
    type: "wordpress",
    title: "Gala Caters",
    desc: "Exquisite catering tailored to delight your guests.",
    image: "img/gala.jpg",
    link: "https://www.galacaterers.in/",
  },
  {
    type: "react",
    title: "The Catering Co.",
    desc: "Extraordinary culinary experience, an unforgettable celebration.",
    image: "img/catering.webp",
    link: "https://thecateringco.in/",
  },
  {
    type: "react",
    title: "StudentDoctorNet",
    desc: "Student Doctor Network is helping build a diverse doctor workforce.",
    image: "img/studentdoctor.webp",
    link: "#",
  },
  {
    type: "wordpress",
    title: "Ezovion Project",
    desc: "A WordPress-powered online store with payment integration.",
    image: "img/azovion.webp",
    link: "https://ezovion.com/",
  },
  {
    type: "react",
    title: "Nutts and Dry Fruits",
    desc: "A premium nuts and dry fruits e-commerce platform with secure online shopping.",
    image: "img/nutts.webp",
    link: "https://cashhewala.com/",
  },
];


const Page = () => {
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

export default Page;
