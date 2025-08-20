import React, { useState } from "react";
import "./tech.css";

const tabData = {
  frontend: [
    { name: "React Native", img: "/images/reactn.png" },
    { name: "Bootstrap", img: "/images/boot.jpg" },
    { name: "Next.js", img: "/images/next.png" },
    { name: "Javascript", img: "/images/js.webp" },
    { name: "CSS", img: "/images/css.png" },
    { name: "HTML", img: "/images/html.png" }
  ],
  backend: [
    { name: "PHP", img: "/images/php.png" },
    { name: "Node.js", img: "/images/node.png" },
    { name: "Express.js", img: "/images/express.png" }
  ],
  database: [
    { name: "SQL", img: "/images/sql.png"},
    { name: "PostgreSQL", img: "/images/postgre.png"},
    { name: "MongoDB", img: "/images/mysql.png" }
  ],
  tools: [
    { name: "VS Code", img: "/images/vs.png" },
    { name: "Git", img: "/images/git.png" },
    { name: "Postman", img: "/images/postman.webp" }
  ]
};

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="technologies-section">
      <div className="container">
        <p className="label">Technologies</p>
        <h2 className="main-heading">
          We Don’t Just Use Technology — We Master It To {" "}
          <span className="highlight-blue">Deliver Solutions</span> That Drive Real Business Growth
        </h2>
        <hr className="divider" />

        <nav className="tabs">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>

        <div className="tab-content">
          {tabData[activeTab].map((tech, index) => (
            <div className="tech-item" key={index}>
              <img src={tech.img} alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
