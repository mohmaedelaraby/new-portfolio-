import React, { useEffect, useState } from "react";
import "./ProjectsSection.css";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";

const productionProjects = [
  {
    title: "Breadfast Dashboard",
    stack: ["React.js", "Vue.js"],
    logo: "/breadfast.webp",
    description:
      "A centralized internal web platform used by operations, supply chain, and warehouse teams to manage and monitor daily business activities. The dashboard provides real-time visibility into inventory levels, supply and demand metrics, order fulfillment, warehouse operations, shopping, payment, and mentoring while integrating with multiple backend services to support data-driven decision-making and process optimization."
  },
  {
    title: "IOTBlue PSIM Platform",
    stack: ["React.js"],
    logo: "/iot.jpg",
    href: "https://www.iotblue.com/en/products/bluecontrol",
    linkLabel: "Link",
    description:
      "A real-time video surveillance solution that unifies security operations through a Network Video Forwarding agent to reduce NAT conflicts. The platform also includes a video gateway that interprets RTSP, HLS, and WebRTC streams for seamless protocol interoperability."
  },
  {
    title: "Gameball Platform",
    stack: "Angular",
    logo: "/gamball.png",
    href: "https://www.youtube.com/watch?v=kuT_tcI9hAoo",
    linkLabel: "Intro video",
    description:
      "A customer engagement and loyalty platform that helps businesses improve retention, increase loyalty, and grow revenue through gamification tools, reward systems, and analytics. It supports personalized experiences and seamless integrations for long-term customer engagement."
  },
  {
    title: "Gameball Referral App",
    stack: ["React", "TypeScript"],
    logo: "/gamball.png",
    description:
      "A dedicated referral solution that rewards customers for bringing in new users. Built as a flexible standalone application, it supports scalable word-of-mouth acquisition while remaining easy to integrate into existing business ecosystems."
  },
  {
    title: "Awqaf Egypt",
    stack: ["vue.js", "JavaScript"],
    logo: "/awaqaf.jpg",
    href: "https://awkafonline.gov.eg/",
    linkLabel: "Official site",
    description:
      "The official digital platform of the Ministry of Awqaf, providing access to Islamic resources, prayer schedules, scholarly works, and ministry initiatives. The platform improves community engagement, transparency, and public service delivery."
  },
  {
    title: "Usolloy",
    stack: ["React", "JavaScript"],
    logo: "/osoly.svg",
    href: "https://osoly.net/",
    linkLabel: "Official site",
    description:
      "A real estate management system that streamlines property listing and rental workflows. It enables owners to advertise units efficiently while giving renters strong search capabilities through an intuitive and functional interface."
  }
];

const personalProjects = {
  fullstack: [
    {
      title: "E-Commerce App",
      stack: ["React" , "Node.js" , "MongoDB" , "Express.js"],
      logo: "https://porofolio-b96a3.web.app/static/media/2.38ca03ac.png",
      href: "https://eco-ecommerce-mohamed-mamdouh.web.app/",
      linkLabel: "Live demo",
      codeHref: "https://github.com/mohmaedelaraby/E-Commerce-Front-End",
      codeLabel: "Code",
      description:
        "A full-stack e-commerce application built with React.js and Firebase. It features user authentication, product browsing, shopping cart functionality, and a checkout process. The app provides a seamless shopping experience while demonstrating modern web development practices."

    },
    {
      title: "Chat App MERN",
      stack: ["React", "Node.js", "Firebase", "Express.js", "Socket.io"],
      logo: "https://porofolio-b96a3.web.app/static/media/8.4295e184.png",
      href: "https://chat-app-mern-ca251.web.app/",
      linkLabel: "Live demo",
      codeHref: "https://github.com/mohmaedelaraby/ChatApp-Reactjs",
      codeLabel: "Code",
      description:
        "A real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io for real-time communication. It features user authentication, private messaging, and group chat functionality, providing a seamless and interactive chatting experience."
    }
  ],
  frontend: [
    {
      title: "Adventure",
      stack: ["React", "JavaScript"],
      logo: "https://porofolio-b96a3.web.app/static/media/7.3a873895.png",
      href: "https://adventure-react-js.firebaseapp.com/",
      linkLabel: "Live demo",
      codeHref: "https://github.com/mohmaedelaraby/Adventure-React-js",
      codeLabel: "Code",
      description:
        "A visually engaging travel website built with React.js, showcasing various destinations and travel packages. The site features dynamic content, interactive elements, and a responsive design to provide users with an immersive browsing experience."
    },
    {
      title: "Pizza Restaurant",
      stack: ["React", "JavaScript"],
      logo: "https://porofolio-b96a3.web.app/static/media/6.49411455.png",
      href: "https://pizza-restaurant-40098.web.app/",
      linkLabel: "Live demo",
      codeHref: "https://github.com/mohmaedelaraby/Pizza-restaurant",
      codeLabel: "Code",
      description:
        "A modern pizza restaurant website built with React.js, featuring a menu display, online ordering system, and reservation functionality. The site provides an intuitive user interface and responsive design to enhance the customer experience."
    },
    {
      title: "Moto",
      stack: ["React", "JavaScript"],
      logo: "https://porofolio-b96a3.web.app/static/media/9.74a7efb2.png",
      href: "https://dazzling-tesla-689691.netlify.app/#intro/",
      linkLabel: "Live demo",
      codeHref: "https://github.com/mohmaedelaraby/Moto",
      codeLabel: "Code",
      description:
        "A sleek and modern motorcycle website built with React.js, showcasing various motorcycle models, features, and specifications. The site includes interactive elements and a responsive design to provide users with an engaging browsing experience."
    },
    {
      title: "IGRC",
      stack: ["React", "JavaScript"],
      logo: "https://porofolio-b96a3.web.app/static/media/10.29519f24.png",
      href: "https://www.igrcsquare.com/",
      linkLabel: "Live demo",
      description:
        "A responsive website for the International Global Risk Consulting (IGRC) company, built with React.js. The site features information about the company's services, expertise, and contact details, providing a professional online presence for potential clients."
    }
  ]
};

function ProjectsSection() {
  const getCardsPerView = () => {
    if (typeof window === "undefined") {
      return 4;
    }

    if (window.innerWidth <= 768) {
      return 1;
    }

    if (window.innerWidth <= 1100) {
      return 2;
    }

    if (window.innerWidth <= 1400) {
      return 3;
    }

    return 4;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullstackIndex, setFullstackIndex] = useState(0);
  const [frontendIndex, setFrontendIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const maxIndex = Math.max(productionProjects.length - cardsPerView, 0);
  const fullstackMaxIndex = Math.max(personalProjects.fullstack.length - cardsPerView, 0);
  const frontendMaxIndex = Math.max(personalProjects.frontend.length - cardsPerView, 0);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    setFullstackIndex((prev) => Math.min(prev, fullstackMaxIndex));
  }, [fullstackMaxIndex]);

  useEffect(() => {
    setFrontendIndex((prev) => Math.min(prev, frontendMaxIndex));
  }, [frontendMaxIndex]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const pageCount = maxIndex + 1;

  const closeModal = () => {
    setSelectedProject(null);
  };

  const getStackItems = (stack) => {
    if (Array.isArray(stack)) {
      return stack;
    }

    return stack ? [stack] : [];
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const renderCarousel = (items, currentIndex, setIndex, maxValue, labelPrefix) => (
    <>
      <div className="projects_header projects_header_inner">
        <div className="projects_controls" aria-label={`${labelPrefix} navigation`}>
          <button
            type="button"
            className="projects_nav_button"
            onClick={() => setIndex((prev) => (prev === 0 ? maxValue : prev - 1))}
            aria-label={`Show previous ${labelPrefix.toLowerCase()} project`}
          >
            <ArrowLeft size={16} strokeWidth={2.2} />
          </button>
          <button
            type="button"
            className="projects_nav_button"
            onClick={() => setIndex((prev) => (prev === maxValue ? 0 : prev + 1))}
            aria-label={`Show next ${labelPrefix.toLowerCase()} project`}
          >
            <ArrowRight size={16} strokeWidth={2.2} />
          </button>
        </div>
      </div>
      <div className="projects_carousel">
        <div
          className="projects_track"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`
          }}
        >
          {items.map((project) => (
            <article className="project_slide" key={project.title}>
              <div className="project_card">
                <div className="project_image" aria-hidden="true">
                  {project.logo ? (
                    <img
                      className="project_image_logo"
                      src={project.logo}
                      alt={`${project.title} preview`}
                    />
                  ) : (
                    <span className="project_image_fallback">{project.title}</span>
                  )}
                </div>
                <h3 className="project_title">{project.title}</h3>
                <button
                  type="button"
                  className="project_details_button"
                  onClick={() => setSelectedProject(project)}
                >
                  More details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="projects_dots" aria-label={`${labelPrefix} slide indicators`}>
        {Array.from({ length: maxValue + 1 }, (_, index) => (
          <button
            key={index}
            type="button"
            className={`projects_dot ${currentIndex === index ? "is_active" : ""}`}
            onClick={() => setIndex(index)}
            aria-label={`Show ${labelPrefix.toLowerCase()} group ${index + 1}`}
            aria-pressed={currentIndex === index}
          />
        ))}
      </div>
    </>
  );

  return (
    <>
      <section className="projects_section" aria-label="Projects">
        <div className="projects_group_heading">
          <h3 className="projects_subtitle">Production Projects</h3>
          <p className="projects_subtext">
            Production systems and platforms delivered for real business use.
          </p>
        </div>
        <div className="projects_header">
          <div className="projects_controls" aria-label="Project navigation">
            <button
              type="button"
              className="projects_nav_button"
              onClick={goToPrevious}
              aria-label="Show previous project"
            >
              <ArrowLeft size={16} strokeWidth={2.2} />
            </button>
            <button
              type="button"
              className="projects_nav_button"
              onClick={goToNext}
              aria-label="Show next project"
            >
              <ArrowRight size={16} strokeWidth={2.2} />
            </button>
          </div>
        </div>
        <div className="projects_carousel">
          <div
            className="projects_track"
            style={{
              transform: `translateX(-${(activeIndex * 100) / cardsPerView}%)`
            }}
          >
            {productionProjects.map((project) => (
              <article className="project_slide" key={project.title}>
                <div className="project_card">
                  <div className="project_image" aria-hidden="true">
                    {project.logo ? (
                      <img
                        className="project_image_logo"
                        src={project.logo}
                        alt={`${project.title} logo`}
                      />
                    ) : (
                      <span className="project_image_fallback">{project.title}</span>
                    )}
                  </div>
                  <h3 className="project_title">{project.title}</h3>
                  <button
                    type="button"
                    className="project_details_button"
                    onClick={() => setSelectedProject(project)}
                  >
                    More details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="projects_dots" aria-label="Project slide indicators">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              className={`projects_dot ${activeIndex === index ? "is_active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show project group ${index + 1}`}
              aria-pressed={activeIndex === index}
            />
          ))}
        </div>

        <div className="projects_divider"></div>

        <div className="projects_group">
          <div className="projects_group_heading">
            <h3 className="projects_subtitle">Personal Fullstack Projects</h3>
            <p className="projects_subtext">Extracted from your previous portfolio.</p>
          </div>
          {renderCarousel(
            personalProjects.fullstack,
            fullstackIndex,
            setFullstackIndex,
            fullstackMaxIndex,
            "Fullstack"
          )}
        </div>

        <div className="projects_group">
          <div className="projects_group_heading">
            <h3 className="projects_subtitle">Personal Frontend Projects</h3>
            <p className="projects_subtext">Extracted from your previous portfolio.</p>
          </div>
          {renderCarousel(
            personalProjects.frontend,
            frontendIndex,
            setFrontendIndex,
            frontendMaxIndex,
            "Frontend"
          )}
        </div>
      </section>
      {selectedProject ? (
        <div
          className="project_modal_overlay"
          onClick={handleOverlayClick}
          role="presentation"
        >
          <div
            className="project_modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              type="button"
              className="project_modal_close"
              onClick={closeModal}
              aria-label="Close project details"
            >
              <X size={18} strokeWidth={2.2} />
            </button>
            <div className="project_modal_stack" aria-label="Project stack">
              {getStackItems(selectedProject.stack).map((item) => (
                <span className="project_modal_stack_item" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <h3 className="project_modal_title" id="project-modal-title">
              {selectedProject.title}
            </h3>
            <p className="project_modal_description">
              {selectedProject.description}
            </p>
            {selectedProject.href ? (
              <a
                className="project_link"
                href={selectedProject.href}
                target="_blank"
                rel="noreferrer"
              >
                {selectedProject.linkLabel}
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </a>
            ) : null}
            {selectedProject.codeHref ? (
              <a
                className="project_link project_link_secondary"
                href={selectedProject.codeHref}
                target="_blank"
                rel="noreferrer"
              >
                {selectedProject.codeLabel || "Code"}
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProjectsSection;