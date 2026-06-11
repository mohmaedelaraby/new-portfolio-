import React, { useState } from "react";
import "./HomePage.css";
import { ReactTyped } from "react-typed";
import { Mail, MapPin, Phone } from "lucide-react";
import ExperienceTimeline from "../Experience/ExperienceTimeline";
import ProjectsSection from "../Projects/ProjectsSection";
import SkillsSection from "../Skills/SkillsSection";

const contactItems = [
  {
    label: "LinkedIn",
    subLabel: "mohamed elaraby",
    value: "linkedin.com/in/mohamed-elaraby-060a96158",
    href: "https://www.linkedin.com/in/mohamed-elaraby-060a96158/",
    logo: "/linkedin.svg",
    external: true
  },
  {
    label: "GitHub",
    subLabel: "mohmaedelaraby",
    value: "github.com/mohmaedelaraby",
    href: "https://github.com/mohmaedelaraby",
    logo: "/github.svg",
    external: true
  },
  {
    label: "Email",
    subLabel: "Elarabym857@gmail.com",
    value: "Elarabym857@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=Elarabym857@gmail.com",
    icon: Mail,
    external: true
  },
  {
    label: "Phone",
    subLabel: "+20 010 199 50 706",
    value: "+20 010 199 50 706",
    href: "tel:+201019950706",
    icon: Phone
  },
  {
    label: "Location",
    subLabel: "Cairo, Egypt",
    value: "Cairo, Egypt",
    icon: MapPin
  }
];

function HomePage() {
  const right = `{" `;
  const left = ` "}`;
  const [aboutExpanded, setAboutExpanded] = useState(false);
  return (
    <div className="homepage">
      <div className="homepage_container">
        <section className="home_anchor my_name" id="home">
          <div className="name_text">{"// HI, I'M Mohamed EL-Araby, A..."}</div>
          <div className="name_animation">
            {right}
            <ReactTyped
              startWhenVisible
              strings={[ "_Senior Front End Engineer..."]}
              typeSpeed={80}
              
              className="name_animation_text"
            />
            {left}
          </div>
        </section>
        <section className="home_anchor profile_section" id="about" aria-label="Profile">
          <div className="profile_content">
            <div className="profile_logo_panel">
              <img
                className="profile_logo"
                src="/new%20logo.jpg"
                alt="Mohamed El-Araby logo"
              />
            </div>
            <div className="profile_copy">
              <h2 className="profile_title">About me</h2>
              <p className={`profile_text${aboutExpanded ? "" : " profile_text_clamped"}`}>
                Software Frontend Engineer with 4+ years of experience building
                scalable web applications across supply chain, security &
                surveillance, and customer engagement platforms. Experienced in
                React.js, Angular, Vue.js, and modern frontend architecture, with a
                strong focus on performance optimization, system scalability, and
                business-driven solutions. Proven track record of leading frontend
                initiatives, improving operational efficiency, and collaborating
                across cross-functional engineering teams.
              </p>
              <button
                className="read_more_btn"
                onClick={() => setAboutExpanded(p => !p)}
              >
                {aboutExpanded ? "Show less" : "Read more"}
              </button>
              <a
                className="resume_button"
                href="/Mohamed_Elaraby_Resume.pdf"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>
      
        <div className="home_anchor" id="experience">
          <ExperienceTimeline />
        </div>
        <div className="home_anchor" id="projects">
          <ProjectsSection />
        </div>

        <div className="home_anchor" id="skills">
          <SkillsSection />
        </div>

        <section className="home_anchor contact_section" id="contact" aria-label="Contact me">
          <div className="contact_heading">
            <h2 className="contact_title">Contact me</h2>
            <p className="contact_intro">
              Open to frontend opportunities, product collaborations, and meaningful technical work.
            </p>
          </div>

          <div className="contact_grid">
            {contactItems.map((item) => {
              const content = (
                <>
                  <div className="contact_card_icon">
                    {item.logo ? (
                      <img className="contact_card_logo" src={item.logo} alt={`${item.label} logo`} />
                    ) : (
                      <item.icon size={18} strokeWidth={2.2} />
                    )}
                  </div>
                  <div className="contact_card_copy">
                    <span className="contact_card_label">{item.label}</span>
                    <span className="contact_card_subLabel">{item.subLabel}</span>
                  </div>
                </>
              );

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    className="contact_card"
                    href={item.href}
                    target={item.external || item.href.startsWith("https://") ? "_blank" : undefined}
                    rel={item.external || item.href.startsWith("https://") ? "noreferrer" : undefined}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={item.label} className="contact_card contact_card_static">
                  {content}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
