import React, { useEffect, useState } from "react";
import "./SkillsSection.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const skillHighlights = [
  {
    title: "Accessibility",
    description:
      "Knowledge of accessibility guidelines and best practices for creating inclusive applications."
  },
  {
    title: "Platform-Specific Features",
    description:
      "Experience accessing native platform capabilities through frontend platform stacks such as Angular, React, and Vue."
  },
  {
    title: "Mentorship",
    description:
      "Experience mentoring junior developers and fostering a collaborative work environment."
  },
  {
    title: "Problem-Solving",
    description:
      "Ability to identify and resolve complex technical challenges effectively."
  },
  {
    title: "Version Control",
    description:
      "Expertise using Git and collaborative version control workflows across teams."
  },
  {
    title: "Adaptability",
    description:
      "Flexibility to adapt quickly to changing requirements, tools, and technologies."
  }
];

const technicalSkills = [
  {
    label: "Frontend Frameworks & Libraries",
    items: ["React.js", "Vue.js", "Angular", "Next.js"]
  },
  {
    label: "Backend & Runtime",
    items: ["Node.js", "Express.js", "Nest.js" , "Postgres" , "MongoDB", "Firebase"]
  },
  {
    label: "State Management",
    items: ["Redux", "Zustand", "Vuex", "Context API"]
  },
  {
    label: "Build Tools & Bundlers",
    items: ["Webpack", "Vite", "Babel", "NPM", "Yarn"]
  },
  {
    label: "Testing",
    items: ["Jest", "Vitest", "React Testing Library", "Playwright"]
  },
  {
    label: "API & Data Handling",
    items: ["REST APIs", "GraphQL", "Axios", "TanStack Query"]
  },
  {
    label: "Performance Optimization",
    items: [
      "Code Splitting",
      "Lazy Loading",
      "Memoization",
      "Tree Shaking",
      "Rendering Optimization"
    ]
  },
  {
    label: "Architecture & Practices",
    items: [
      "Component-Based Architecture",
      "Scalable Frontend Architecture",
      "Microfrontends",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Accessibility"
    ]
  },
  {
    label: "DevOps & Tools",
    items: ["CI/CD Pipelines", "Docker (Basics)", "Postman"]
  }
];

function SkillsSection() {
  const getCardsPerView = () => {
    if (typeof window === "undefined") {
      return 3;
    }

    if (window.innerWidth <= 768) {
      return 1;
    }

    if (window.innerWidth <= 1100) {
      return 2;
    }

    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = Math.max(skillHighlights.length - cardsPerView, 0);

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

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const pageCount = maxIndex + 1;

  return (
    <section className="skills_section" aria-label="Skills">
      <div className="skills_heading">
        <h2 className="skills_title">Skills</h2>
        <p className="skills_intro">
          Technical depth paired with delivery-focused engineering across
          frontend architecture, collaboration, performance, and product
          execution.
        </p>
      </div>

      <div className="skills_carousel_header">
        <h3 className="skills_carousel_title">Core Highlights</h3>
        <div className="skills_controls" aria-label="Skills highlights navigation">
          <button
            type="button"
            className="skills_nav_button"
            onClick={goToPrevious}
            aria-label="Show previous skill highlight"
          >
            <ArrowLeft size={16} strokeWidth={2.2} />
          </button>
          <button
            type="button"
            className="skills_nav_button"
            onClick={goToNext}
            aria-label="Show next skill highlight"
          >
            <ArrowRight size={16} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <div className="skills_highlights_carousel">
        <div
          className="skills_highlights_track"
          style={{ transform: `translateX(-${(activeIndex * 100) / cardsPerView}%)` }}
        >
          {skillHighlights.map((skill, index) => (
            <article
              className="skill_highlight_slide"
              key={skill.title}
            >
              <article
                className="skill_highlight_card"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <h3 className="skill_highlight_title">{skill.title}</h3>
                <p className="skill_highlight_text">{skill.description}</p>
              </article>
            </article>
          ))}
        </div>
      </div>

      <div className="skills_dots" aria-label="Skills highlight slide indicators">
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            type="button"
            className={`skills_dot ${activeIndex === index ? "is_active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show skills group ${index + 1}`}
            aria-pressed={activeIndex === index}
          />
        ))}
      </div>

      <div className="skills_technical_grid">
        {technicalSkills.map((group) => (<div className="skills_group_wrapper" key={group.label}>
          <article
            className="skills_group_card"
          >
            <h3 className="skills_group_title">{group.label}</h3>
            <div className="skills_tags">
              {group.items.map((item) => (
                <span className="skills_tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;