import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("ds-theme") as "light" | "dark") || "light",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ds-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="nav-logo">
        ds.
      </a>
      <div className="nav-right">
        <a href="#projects" className="nav-link">
          Work
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
        <button
          className="theme-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "◑" : "◐"} {theme === "dark" ? "Light" : "Dark"}
        </button>
        <a href="/public/Daniel-Sosa-Merino.pdf" download className="nav-cv">
          ↓ Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
