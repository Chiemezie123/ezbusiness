import React from "react";
import { useTheme } from "@/hooks/themeContext";
export default function Dark() {
  const { isDarkMode} = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <circle cx="8.95438" cy="9.24851" r="8.42435" fill={`${isDarkMode ?"white":"#111111"}`} />
    </svg>
  );
}
