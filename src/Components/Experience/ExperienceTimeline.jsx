import React, { useState } from "react";
import "./ExperienceTimeline.css";
import { Building2, Info } from "lucide-react";

const experiences = [
  {
    role: "Software Front-End Engineer",
    company: "Breadfast",
    companyLogo: "/breadfast.webp",
    companySite: "https://breadfast.com",
    companyLinkedIn: "https://www.linkedin.com/company/breadfast/",
    period: "04/2025 - Present",
    location: "Cairo, Egypt",
    techStack: "React.js, Vue.js",
    highlights: [
      "Played a key role within the Supply Chain Engineering team, building scalable systems for inventory management, demand forecasting, and supply planning.",
      "Designed and implemented features that optimized warehouse organization and workflows, generating around 1.5M EGP monthly savings per warehouse.",
      "Collaborated with product managers, backend engineers, and operations teams to translate complex business needs into scalable solutions.",
      "Refactored dashboard modules and improved state management, reducing load times and improving rendering performance.",
      "Led migration of legacy frontend applications from Vue.js to React.js to improve maintainability and scalability.",
      "Provided frontend technical leadership in Pricing Engineering for a product-matching system that improved tracking accuracy and increased collection efficiency by 20-30% using AI."
    ]
  },
  {
    role: "Front-End Engineer",
    company: "IOTBlue",
    companyLogo: "/iot.jpg",
    companySite: "https://iotblue.com",
    companyLinkedIn: "https://www.linkedin.com/company/iotblue/",
    period: "11/2024 - 04/2025",
    location: "Cairo, Egypt",
    techStack: "React.js, Next.js",
    highlights: [
      "Developed and maintained scalable, high-performance frontend applications across the full lifecycle from analysis to deployment.",
      "Contributed to life-streaming and surveillance system improvements, increasing usability, performance, and reliability.",
      "Optimized load time, rendering, and responsiveness through profiling, code splitting, and targeted performance tuning.",
      "Worked closely with design, backend, and product teams to ensure smooth integration and timely delivery."
    ]
  },
  {
    role: "Front-End Engineer",
    companySite: "https://www.gameball.co",
    companyLinkedIn: "https://www.linkedin.com/company/gameball/",
    company: "Gameball",
    companyLogo: "/gamball.png",
    period: "12/2022 - 12/2024",
    location: "Cairo, Egypt",
    techStack: "Angular, React.js, Vanilla JavaScript, Webpack, TypeScript, Node.js",
    highlights: [
      "Built adaptive, responsive features with cross-browser compatibility and improved runtime performance.",
      "Improved maintainability through focused refactoring and architecture enhancements.",
      "Designed scalable design systems and robust project structures to increase consistency and reusability.",
      "Reduced bundle size using Webpack chunk splitting and build optimizations for faster loading.",
      "Contributed to the dashboard v3 revamp by modernizing UI and supporting a scalable frontend architecture.",
      "Participated in code reviews and mentored junior developers through constructive feedback."
    ]
  },
  {
    role: "Junior Front-End Engineer",
    //companySite: "https://turndigitalagency.com",
    companyLinkedIn: "https://www.linkedin.com/company/turndigital/posts/?feedView=all/",
    company: "Turn Digital",
    companyLogo: "/turn didgtal.jpg",
    period: "03/2022 - 12/2022",
    location: "Cairo, Egypt",
    techStack: "Vue.js, React.js",
    highlights: [
      "Designed, developed, and debugged web applications to ensure smooth functionality across browsers and platforms.",
      "Led frontend implementation and integration with backend systems."
    ]
  },
  {
    role: "Software Engineer Intern",
    companySite: "https://igrcsquare.com",
    companyLinkedIn: "https://www.linkedin.com/company/igrcsquare/",
    company: "IGRC Square",
    companyLogo: "/igrc.jpg",
    period: "Internship Experience",
    location: "Cairo, Egypt",
    techStack: "Node.js",
    highlights: [
      "Developed and deployed the company website with a focus on functionality and performance optimization.",
      "Designed and implemented simple CRUD APIs using Node.js to support website data interactions."
    ]
  }
];

function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleToggleKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle(index);
    }
  };

  return (
    <section className="experience_section" aria-label="Experience">
      <h2 className="experience_title">Experience</h2>
      <div className="experience_timeline">
        {experiences.map((item, index) => (
          <article
            className={`experience_step ${openIndex === index ? "is_open" : ""}`}
            key={`${item.company}-${item.period}-${item.role}`}
          >
            <div className="experience_marker" aria-hidden="true"></div>
            <div className="experience_card">
              <div className="experience_header">
                <div
                  className="experience_toggle"
                  onClick={() => handleToggle(index)}
                  onKeyDown={(event) => handleToggleKeyDown(event, index)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openIndex === index}
                  aria-controls={`experience-content-${index}`}
                >
                  <span className="experience_heading">
                    <h3 className="experience_role">
                      {item.role},
                      <span className="company_name_with_logo">
                        {item.companyLogo && (
                          <img
                            className="company_logo"
                            src={item.companyLogo}
                            alt={`${item.company} logo`}
                            loading="lazy"
                          />
                        )}
                        <span>{item.company}</span>
                      </span>
                      <span className="company_icon_links">
        {
                        item.companySite && (
                              <a
                          className="company_icon_link"
                          href={item.companySite}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          onKeyDown={(event) => event.stopPropagation()}
                          aria-label={`Visit ${item.company} company site`}
                          title="Company site"
                          data-tooltip="Company site"
                        >
                          <Info size={13} strokeWidth={2.2} />
                        </a>)
        }
                      
                        <a
                          className="company_icon_link"
                          href={item.companyLinkedIn}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          onKeyDown={(event) => event.stopPropagation()}
                          aria-label={`Visit ${item.company} on LinkedIn`}
                          title="LinkedIn"
                          data-tooltip="LinkedIn"
                        >
                          <Building2 size={13} strokeWidth={2.2} />
                        </a>
                      </span>
                    </h3>
                    <p className="experience_meta">
                      {item.period} | {item.location}
                    </p>
                  </span>
                  <span className="experience_chevron" aria-hidden="true">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
              </div>
              <div
                id={`experience-content-${index}`}
                className={`experience_body ${openIndex === index ? "is_open" : ""}`}
              >
                <p className="experience_stack">Tech stack: {item.techStack}</p>
                <ul className="experience_points">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;
