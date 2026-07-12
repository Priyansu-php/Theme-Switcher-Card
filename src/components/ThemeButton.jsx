import React from 'react'
import useTheme from "../context/Theme";

export default function ThemeButton() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeButton = (e) => {
    e.target.checked ? darkTheme() : lightTheme();
  };

  return (
    <label
      className="
        inline-flex items-center gap-3
        px-3 py-2
        rounded-full
        bg-gray-200/80 dark:bg-slate-800/90
        backdrop-blur-md
        shadow-md
        hover:shadow-lg
        hover:-translate-y-1
        hover:scale-105
        transition-all duration-300
        cursor-pointer
      "
    >
      <input
        type="checkbox"
        className="sr-only peer"
        checked={themeMode === "dark"}
        onChange={onChangeButton}
      />

      {/* Switch */}
      <div
        className="
          relative w-11 h-6
          rounded-full
          bg-gray-400
          peer-checked:bg-blue-500
          transition-colors duration-300
        "
      >
        <div
  className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${
    themeMode === "dark" ? "translate-x-5" : ""
  }`}
/>
      </div>

      {/* Text */}
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200 select-none">
        {themeMode === "dark" ? "🌙 " : "☀️"}
      </span>
    </label>
  );
}

