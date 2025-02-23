import React from "react";
import { useTheme } from "@/hooks/themeContext";
export default function Approved() {
   const { isDarkMode} = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M9.73773 10.9954L13.2136 13.6028C13.4289 13.7643 13.6973 13.8385 13.965 13.8104C14.2327 13.7823 14.4799 13.654 14.657 13.4514L21.4732 5.6611"
        stroke={`${isDarkMode ? "white": "#111111"}`}
        strokeWidth="2.13373"
        strokeLinecap="round"
      />
      <path
        d="M22.5401 13.1291C22.5402 15.1354 21.9117 17.0913 20.7432 18.7221C19.5746 20.3529 17.9245 21.5767 16.0247 22.2215C14.1249 22.8664 12.0708 22.9 10.1509 22.3176C8.23107 21.7352 6.54186 20.566 5.32057 18.9743C4.09927 17.3826 3.40725 15.4483 3.34168 13.4431C3.27611 11.4379 3.8403 9.46255 4.95501 7.79445C6.06971 6.12636 7.67893 4.84933 9.55665 4.14274C11.4344 3.43615 13.4863 3.33548 15.4241 3.85488"
        stroke={`${isDarkMode ? "white": "#111111"}`}
        strokeWidth="2.13373"
        strokeLinecap="round"
      />
    </svg>
  );
}
