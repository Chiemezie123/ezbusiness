import React from "react";
import { Typography } from "../Typography";
import { OrderItemProps } from "@/contact/data";
import { useTheme } from "@/hooks/themeContext";

export default function FirstDisplayCard(props: OrderItemProps) {
    const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className={`xl:w-[245px] 2xl:w-[254.189px] h-[142.899px] flex-shrink-0 rounded-[10.669px] flex flex-col ${isDarkMode ? 'bg-[#383848]' : 'bg-[#fff]'} pt-[11.91] pb-[14.49px]`}>
      <div className=" w-full pl-[12.33px] pr-[15.03px]">
        <div className="flex items-center p-[10.669px] justify-between">
          <div>
            <Typography variant="h-m" font="Inter" fontWeight="bold" className={`${isDarkMode ? 'text-white' : ''}`}>{props.header}</Typography>
          </div>
          <div>{props.icon}</div>
        </div>
      </div>
      <div className="w-full pl-[22.05px] flex flex-col gap-[8px]">
        <div>
          <Typography variant="h-xl" font="Inter" fontWeight="bold" className={`${isDarkMode ? 'text-white' : ''}`}>{props.number}</Typography>
        </div>
        <div>
          <Typography  variant="h-m" font="Inter" fontWeight="bold" color="fruit-salad-500" className={`${isDarkMode ? 'text-white' : 'text-fruit-salad-500'}`}>{props.amount}</Typography>
        </div>
      </div>
    </div>
  );
}

// text-fruit-salad-500