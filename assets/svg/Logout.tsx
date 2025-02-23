import React from "react";
import { useTheme } from "@/hooks/themeContext";

export default function Logout() {
  const { isDarkMode} = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
    >
      <g clipPath="url(#clip0_0_31)">
        <path
          d="M7.6196 12.9345C7.6196 12.9635 7.62323 13.0361 7.63049 13.1522C7.63774 13.2683 7.63956 13.3645 7.63593 13.4407C7.6323 13.5169 7.62142 13.6022 7.60327 13.6965C7.58513 13.7909 7.54884 13.8616 7.49441 13.9088C7.43998 13.956 7.36559 13.9796 7.27124 13.9796H3.7876C2.92394 13.9796 2.18548 13.6729 1.57222 13.0597C0.958952 12.4464 0.652319 11.708 0.652319 10.8443V3.18029C0.652319 2.31664 0.958952 1.57818 1.57222 0.964912C2.18548 0.351646 2.92394 0.0450134 3.7876 0.0450134H7.27124C7.36559 0.0450134 7.44723 0.079487 7.51618 0.148434C7.58513 0.217381 7.6196 0.299029 7.6196 0.393377C7.6196 0.422408 7.62323 0.494984 7.63049 0.611105C7.63774 0.727226 7.63956 0.823389 7.63593 0.899594C7.6323 0.975799 7.62142 1.06108 7.60327 1.15542C7.58513 1.24977 7.54884 1.32053 7.49441 1.36771C7.43998 1.41488 7.36559 1.43847 7.27124 1.43847H3.7876C3.3086 1.43847 2.89854 1.60902 2.55744 1.95013C2.21633 2.29124 2.04578 2.70129 2.04578 3.18029V10.8443C2.04578 11.3233 2.21633 11.7334 2.55744 12.0745C2.89854 12.4156 3.3086 12.5861 3.7876 12.5861H7.18415L7.30934 12.597L7.43453 12.6297L7.52162 12.6895L7.59783 12.7875L7.6196 12.9345ZM17.7222 7.01229C17.7222 7.20099 17.6532 7.36429 17.5153 7.50218L11.5931 13.4244C11.4552 13.5623 11.2919 13.6312 11.1032 13.6312C10.9145 13.6312 10.7512 13.5623 10.6134 13.4244C10.4755 13.2865 10.4065 13.1232 10.4065 12.9345V9.79921H5.52942C5.34072 9.79921 5.17742 9.73026 5.03953 9.59237C4.90164 9.45447 4.83269 9.29118 4.83269 9.10248V4.92211C4.83269 4.73341 4.90164 4.57012 5.03953 4.43222C5.17742 4.29433 5.34072 4.22538 5.52942 4.22538H10.4065V1.09011C10.4065 0.901408 10.4755 0.738113 10.6134 0.600219C10.7512 0.462325 10.9145 0.393377 11.1032 0.393377C11.2919 0.393377 11.4552 0.462325 11.5931 0.600219L17.5153 6.52241C17.6532 6.6603 17.7222 6.8236 17.7222 7.01229Z"
          fill={`${isDarkMode ?'white':"#111111"} `}
        />
      </g>
      <defs>
        <clipPath id="clip0_0_31">
          <rect
            width="17.0698"
            height="13.9346"
            fill={`${isDarkMode ?'#111111':"white"} `}
            transform="translate(0.652319 0.0450134)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
