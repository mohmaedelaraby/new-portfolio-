import React from "react";
import "./Topbar.css";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function Topbar({ items = [] }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="topbar_component">
      <div className="topbar_brand">
        <img
          className="topbar_brand_logo"
          src="/top%20bar%20logo.jpg"
          alt="Mohamed Mamdouh El-Araby logo"
        />
        <div className="topbar_brand_copy">
          <span className="topbar_brand_name">Mohamed Mamdouh El-Araby</span>
          <span className="topbar_brand_role">Software Engineer</span>
        </div>
      </div>

      <nav className="topbar_nav" aria-label="Section navigation">
        {items.map((item) => (
          <a className="topbar_link" href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="topbar_theme_toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        {theme === "dark" ? (
          <Sun size={16} strokeWidth={2.2} />
        ) : (
          <Moon size={16} strokeWidth={2.2} />
        )}
      </button>
    </header>
  );
}

export default Topbar;
