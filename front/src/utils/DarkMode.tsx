import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-100 border border-gray-200 dark:border-slate-600 shadow-sm hover:shadow-md"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            darkMode
              ? "opacity-0 rotate-90 scale-0"
              : "opacity-100 rotate-0 scale-100"
          } text-purple-600`}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            darkMode
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0"
          } text-purple-400`}
        />
      </div>
      <span className="text-sm">{darkMode ? "Dark" : "Light"}</span>
    </button>
  );
};

export default DarkModeToggle;
