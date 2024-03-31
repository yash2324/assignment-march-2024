import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ChangeMode } from "../utils/darkMode";

const Dark = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      dispatch(ChangeMode("dark"));
    } else {
      document.documentElement.classList.remove("dark");
      dispatch(ChangeMode("light"));
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      className="absolute rounded-full bg-[#F1F5FE] dark:bg-gray-900  z-50 m-2 bg-transparent p-4 hover:bg-gray-300"
      onClick={handleThemeSwitch}
    >
      {theme === "dark" ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>{" "}
        </>
      ) : (
        <>
          <svg
            className="h-6 w-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
            />
          </svg>
        </>
      )}
    </button>
  );
};

export default Dark;
