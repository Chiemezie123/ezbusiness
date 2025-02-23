import React from "react";
import { useTheme } from "@/hooks/themeContext";
export default function Funds() {
  const { isDarkMode} = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
    >
      <path
        d="M11.7353 12.5195C16.1544 12.5195 19.7367 10.7283 19.7367 8.51875C19.7367 6.3092 16.1544 4.51801 11.7353 4.51801C7.31615 4.51801 3.73376 6.3092 3.73376 8.51875C3.73376 10.7283 7.31615 12.5195 11.7353 12.5195Z"
        stroke={`${isDarkMode ? "white": "#111111"}`}
        strokeWidth="2.13373"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.73376 8.51874V14.1198C3.73376 16.329 7.31603 18.1205 11.7353 18.1205C16.1545 18.1205 19.7367 16.329 19.7367 14.1198V8.51874"
        stroke={`${isDarkMode ? "white": "#111111"}`}
        strokeWidth="2.13373"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.73376 14.1198V19.7208C3.73376 21.93 7.31603 23.7216 11.7353 23.7216C16.1545 23.7216 19.7367 21.93 19.7367 19.7208V14.1198"
        stroke={`${isDarkMode ? "white": "#111111"}`}
        strokeWidth="2.13373"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.73376 19.7208V25.3219C3.73376 27.5311 7.31603 29.3226 11.7353 29.3226C16.1545 29.3226 19.7367 27.5311 19.7367 25.3219V19.7208"
        stroke={`${isDarkMode ? "white": "#111111"}`}
        strokeWidth="2.13373"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.73376 25.3219V30.9229C3.73376 33.1321 7.31603 34.9237 11.7353 34.9237C16.1545 34.9237 19.7367 33.1321 19.7367 30.9229V25.3219"
        stroke={`${isDarkMode ? "white": "#111111"}`}
        strokeWidth="2.13373"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.7382 23.7216C32.1573 23.7216 35.7397 21.9304 35.7397 19.7208C35.7397 17.5113 32.1573 15.7201 27.7382 15.7201C23.3191 15.7201 19.7367 17.5113 19.7367 19.7208C19.7367 21.9304 23.3191 23.7216 27.7382 23.7216Z"
        stroke={`${isDarkMode ? "white": "#111111"}`}
        strokeWidth="2.13373"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.7367 19.7208V25.3219C19.7367 27.5311 23.319 29.3226 27.7382 29.3226C32.1574 29.3226 35.7397 27.5311 35.7397 25.3219V19.7208"
        stroke={`${isDarkMode ? "white": "#111111"}`}
        strokeWidth="2.13373"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.7367 25.3219V30.9229C19.7367 33.1321 23.319 34.9237 27.7382 34.9237C32.1574 34.9237 35.7397 33.1321 35.7397 30.9229V25.3219"
        stroke={`${isDarkMode ? "white": "#111111"}`}
        strokeWidth="2.13373"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
