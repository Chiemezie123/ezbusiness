import React from "react";
import { useTheme } from "@/hooks/themeContext";

export default function ArrowDown() {
    const { isDarkMode} = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M16.1652 8.56412L10.8309 13.8984L5.49658 8.56412H16.1652Z"
        fill={`${isDarkMode ?'white':"#111111"} `}
        stroke={`${isDarkMode ?'white':"#111111"} `}
        strokeWidth="3.20059"
        strokeLinejoin="round"
      />
    </svg>
  );
}
