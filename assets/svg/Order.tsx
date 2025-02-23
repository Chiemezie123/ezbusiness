import React from "react";
import { useTheme } from "@/hooks/themeContext";

export default function Order() {
   const { isDarkMode} = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
    >
      <path
        d="M18.7469 4.59424H8.07828C6.89985 4.59424 5.94455 5.54954 5.94455 6.72797V20.5972C5.94455 21.7756 6.89985 22.7309 8.07828 22.7309H18.7469C19.9254 22.7309 20.8807 21.7756 20.8807 20.5972V6.72797C20.8807 5.54954 19.9254 4.59424 18.7469 4.59424Z"
        stroke={`${isDarkMode ? "white": "#111111"}`}
        strokeWidth="2.13373"
      />
      <path
        d="M10.212 9.92856H16.6132M10.212 14.196H16.6132M10.212 18.4635H14.4795"
        stroke={`${isDarkMode ? "white": "#111111"}`}
        strokeWidth="2.13373"
        strokeLinecap="round"
      />
    </svg>
  );
}
