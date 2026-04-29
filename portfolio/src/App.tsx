import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("ds-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div
      className="bg-[#e8ede3] dark:bg-[#0c0c0c] text-[#1e3828] dark:text-[#e8ede3] min-h-screen overflow-x-hidden transition-colors duration-300"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <Home onToggleDark={() => setIsDark((d) => !d)} isDark={isDark} />
    </div>
  );
}

export default App;
