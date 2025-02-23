'use client'
import React, { ReactNode, useState } from "react";
import SideBar from "@/app/component/sidebar";
import Navbar from "@/app/component/navbar";
import { useTheme } from "@/hooks/themeContext";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className={`flex ${isDarkMode ? 'bg-[#12121E]' : 'bg-[#F3F3F3]'} h-full gap-2`}>
      <div className={`w-[220px] ${isDarkMode ? 'bg-[#1D1D29]' : 'bg-[#F3F3F3]'} bg-[#fff] h-screen fixed top-0 left-0 z-10`}>
        <SideBar />
      </div>
      <div className="flex-grow ml-[228px]">
       <Navbar isDarkMode={isDarkMode} onClick={toggleTheme} />
        {children}
      </div>
    </div>
  );
};

export default Layout;

// #1D1D29