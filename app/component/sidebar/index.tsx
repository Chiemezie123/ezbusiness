import { Logo } from "@/assets/svg";
import { Typography } from "@/components/Typography";
import { footerbarcontent, sidebarcontent } from "@/contact/data";
import React from "react";
import SideBarInnerComp from "./sidebarinnerComp";
import NeedHelp from "@/components/Cards/needHelp";
import { useTheme } from "@/hooks/themeContext";

export default function Sidebar() {
const { isDarkMode} = useTheme();
  return (
    <div className={`w-full ${isDarkMode ? 'bg-[#1D1D29]' : 'bg-[#F3F3F3]'} h-full flex flex-col gap-[3.71px]`}>
      <div className={`h-[450.168px] ${isDarkMode ? 'bg-[#1D1D29]' : 'bg-[#F3F3F3]'}`}>
        <div className="pt-[36.79px] pl-[23.68px] flex w-[141.211px] h-[28.911px] items-center gap-[10.669px] shrink-0">
          <div>
            <Logo />
          </div>
          <div>
            <Typography
              variant="h-l"
              fontWeight="bold"
              className={`${isDarkMode ? 'text-white' : ''} leading-normal`}
            >
              Business
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="pt-[30px]">
            {sidebarcontent.map((items,index) => (
              <SideBarInnerComp
                key={index}
                path={items.path}
                isActive={items.isActive}
                icon={items.icon}
                title={items.title}
              />
            ))}
          </div>
          <div>
            {footerbarcontent.map((items,index) => (
              <SideBarInnerComp
                key={index}
                path={items.path}
                isActive={items.isActive}
                icon={items.icon}
                title={items.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={`flex-1 ${isDarkMode ? 'bg-[#1D1D29]' : 'bg-[#F3F3F3]'} flex items-center justify-center`}>
       <NeedHelp/>
      </div>
    </div>
  );
}
