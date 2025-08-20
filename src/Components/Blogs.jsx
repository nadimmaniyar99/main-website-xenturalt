import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./blogs.css";

const blogData = {
  blog1: {
    title: "Exploring the Wonders of Hiking",
    image: "img/travel.jpg",
    content: (
      <>
        <h2>Exploring the Wonders of Hiking</h2>
        <p>
          This article explores the top hiking destinations for adventure
          seekers. From serene mountain trails to coastal treks, experience the
          peace and thrill of nature.
        </p>
      </>
    ),
  },
  blog2: {
    title: "Design Interviews & Tips",
    image: "img/design.jpg",
    content: (
      <>
        <h2>Design Interviews & Tips</h2>
        <p>
          Discover how leading designers tackle creativity and freelancing in
          today’s fast-paced industry. Insights from Frankie Sillivan and
          others.
        </p>
      </>
    ),
  },
  blog3: {
    title: "The Art of Home Transformation",
    image: "img/home.jpg",
    content: (
      <>
        <h2>The Art of Home Transformation</h2>
        <p>
          Learn how to make the most of your living space with design tips and
          product inspiration that turn houses into homes.
        </p>
      </>
    ),
  },

  blog4: {
    title: "SEO Work: Why It's Crucial for Your Online Presence",
    image: "img/Seo.webp",
    content: (
      <>
        <h2>
          Learn why SEO is a key element for building a successful online
          presence.
        </h2>
        <p>
          Introduction Search Engine Optimization (SEO) is a cornerstone of
          digital marketing. It involves optimizing your website to rank higher
          on search engines like Google. Why SEO is Important With millions of
          websites on the internet, standing out in search results is crucial.
          SEO ensures your website is visible to potential customers. Components
          of SEO SEO comprises on-page factors like content optimization and
          off-page factors such as link-building. Both work together to improve
          your ranking. Best Practices Some SEO best practices include using
          relevant keywords, optimizing your website’s speed, ensuring
          mobile-friendliness, and creating quality content. Conclusion SEO is
          an ongoing process that helps improve your site’s visibility and
          attracts organic traffic, ultimately leading to increased conversions
          and growth.
        </p>
      </>
    ),
  },
  blog5: {
    title: "Create a Website and Why It's Important",
    image: "img/web.webp",
    content: (
      <>
        <h2>
          Understand the process of creating a website and its significance in
          today’s digital world.
        </h2>
        <p>
          Introduction In today’s digital landscape, having an online presence
          is essential for businesses and individuals alike. A website acts as
          the cornerstone of your online identity. Why You Need a Website A
          website is a powerful tool for marketing, communication, and
          establishing credibility. It allows customers to find you online and
          learn more about your products or services. Steps to Create a Website
          Creating a website involves several steps, including choosing a domain
          name, selecting a hosting provider, designing the layout, and adding
          relevant content. Importance of User Experience The design and user
          experience (UX) of your website are crucial to retaining visitors. A
          clean, easy-to-navigate design encourages users to explore and take
          action. Conclusion Creating a website is an investment that pays off
          by helping you reach a global audience, build trust, and drive
          conversion
        </p>
      </>
    ),
  },
  blog6: {
    title: "Create a Website and Why It's Important",
    image: "img/App.jpg",
    content: (
      <>
        <h2>App Development: The Path to Building Successful Mobile Apps</h2>
        <p>
          Introduction App development is a dynamic and growing field that
          allows businesses to offer services, products, or content directly to
          users' smartphones and tablets. Types of Apps There are different
          types of apps: native apps, web apps, and hybrid apps. Each has its
          advantages depending on the intended purpose and platform. Development
          Process The app development process includes several stages, such as
          ideation, design, development, testing, and deployment. It's essential
          to follow a structured process to ensure success. Key Considerations
          Performance, security, and user experience are critical factors in app
          development. Focusing on these areas ensures your app delivers value
          to users and stands out in the competitive market. Conclusion App
          development offers businesses a chance to engage with their audience
          on a more personal level. With proper planning and execution, mobile
          apps can drive growth and customer loyalty.
        </p>
      </>
    ),
  },
  blog7: {
    title: "The Role of Marketing in Business Growth",
    image: "img/marketing.jpg",
    content: (
      <>
        <h2>
          Understand how marketing plays a pivotal role in business growth and
          sustainability.
        </h2>
        <p>
          Introduction Marketing is essential to building and growing any
          business. It involves understanding customer needs and promoting
          products or services in a way that adds value. Types of Marketing
          Traditional marketing includes TV and print advertisements, while
          digital marketing utilizes channels like social media, email, and SEO.
          Both strategies are important for different target audiences. Building
          a Marketing Strategy A successful marketing strategy starts with
          understanding your audience, setting clear goals, and choosing the
          right channels to reach your target customers. Challenges in Marketing
          With increasing competition and shifting consumer behavior, businesses
          must adapt to new trends and technologies to remain relevant and stand
          out in a crowded marketplace. Conclusion Effective marketing is a key
          driver of business growth, helping to create awareness, build customer
          loyalty, and generate sales.
        </p>
      </>
    ),
  },
  blog8: {
    title: "The Impact of Virtual Reality on Industries",
    image: "img/virtual.jpg",
    content: (
      <>
        <h2>
          Explore how virtual reality is changing various industries, from
          healthcare to entertainment.
        </h2>
        <p>
          Introduction Virtual Reality (VR) is no longer just for gaming. It's
          increasingly being used in healthcare, education, entertainment, and
          even marketing to create immersive experiences. Applications of VR In
          healthcare, VR is used for surgical training and patient
          rehabilitation. In marketing, brands are leveraging VR for immersive
          product experiences. Challenges of VR Despite its potential, VR
          adoption faces challenges such as high costs, the need for specialized
          equipment, and the development of realistic, high-quality content.
          Future of VR As technology advances, VR is expected to become more
          affordable and accessible, with broader applications in training,
          remote work, and entertainment. Conclusion VR is transforming how we
          experience the world around us. It’s poised to revolutionize
          industries by creating deeper, more engaging interactions.
        </p>
      </>
    ),
  },
  blog9: {
    title: "The Importance of Data Security in the Digital Age",
    image: "img/digi.jpg",
    content: (
      <>
        <h2>
          Learn why data security is more critical than ever in today’s
          interconnected world.
        </h2>
        <p>
          Introduction As the digital world evolves, protecting sensitive
          information has become one of the highest priorities for businesses
          and individuals alike. Types of Data Security Data security includes
          various measures such as encryption, multi-factor authentication, and
          network protection to prevent unauthorized access. Cybersecurity
          Threats Cyber threats are becoming more sophisticated. Malware,
          ransomware, and phishing attacks are just a few of the risks
          businesses face. Building a Data Security Strategy A strong data
          security strategy involves regular software updates, employee
          training, and securing both physical and digital access to sensitive
          information. Conclusion Data security is an ongoing effort that
          requires constant attention. By prioritizing it, businesses can
          protect themselves from financial loss, reputational damage, and legal
          consequences.
        </p>
      </>
    ),
  },
};

const BlogCard = ({ blogId, blog, onClick }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div className="blog-card" onClick={() => onClick(blogId)}>
      <img src={blog.image} alt={blog.title} />
      <div className="blog-info">
        <h3>{blog.title}</h3>
        <div className="meta">Travel • Apr 15, 2025</div>
        <p>Discover serene trails and epic adventures...</p>
      </div>
      <div className="like-section">
        <button className="like-button" onClick={handleLike} disabled={liked}>
          ❤️ <span className="like-count">{likes}</span>
        </button>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (blogId) => {
    setActiveModal(blogId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <div id="navbar"></div>

      <section className="blog-container">
        <h1>Blog Page</h1>
        <p className="subtext">
          inspirational designs, illustrations, and graphic elements from the
          world’s best designers.
        </p>
        <div className="blogs">
          {Object.entries(blogData).map(([blogId, blog]) => (
            <BlogCard
              key={blogId}
              blogId={blogId}
              blog={blog}
              onClick={openModal}
            />
          ))}
        </div>
      </section>

      {activeModal && (
        <div className="popup-modal" style={{ display: "flex" }}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={blogData[activeModal].image}
              alt={blogData[activeModal].title}
            />
            {blogData[activeModal].content}
          </div>
        </div>
      )}

      <div id="footer-placeholder"></div>
      <div>
        <Footer/>
      </div>
    </>
    
  );
};

export default BlogPage;
