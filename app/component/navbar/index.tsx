import React from "react";
import { Typography } from "@/components/Typography";
import Calender from "@/assets/svg/Calender";
import Image from "next/image";
import logo from '@/assets/images/Ellipse 2.svg'
import Light from "@/assets/svg/light";
import Dark from "@/assets/svg/Dark";
import { useTheme } from '@/hooks/themeContext';

interface ToggleFuncProps{
  onClick : ()=> void;
  isDarkMode : boolean
}
export default function Navbar(prop:ToggleFuncProps) {
  const {onClick,isDarkMode}= prop
 
  return (
    <div className="w-full bg-[##F3F3F3] h-[102.497px] flex gap-[7.52px]">
      <div className={`2xl:w-[483.72px] ${isDarkMode ? 'bg-[#383848]' : 'bg-[#FFF]'} flex items-center xl:px-[16px] 2xl:px-[33px]`}>
        <div className=" w-full flex items-center justify-between">
          <div>
            <Typography variant="h-lm" font="Inter" fontWeight="bold" className={`${isDarkMode ? 'text-white' : ''}`}>Analytics</Typography>
          </div>
          <div className={`flex w-[198.094px] h-[42.831px] p-[10.669px] ${isDarkMode ? 'bg-[#12121E]' : ''} justify-center items-center gap-[10.669px] flex-shrink-0 rounded-[10px]`}>
            <div>
                <Typography font="Inter" color="blackie-100" variant="p-s" fontWeight="medium" className={`${isDarkMode ? 'text-white' : ''}`}>01.06.2023-31.06.2023</Typography>
            </div>
            <div>
                <Calender/>
            </div>
          </div>    
        </div>
      </div>
      <div className={`flex-1 ${isDarkMode ? 'bg-[#383848]' : 'bg-[#FFF]'}  2xl:pl-[297.19px] xl:pl-[250px] flex items-center 2xl:pr-[76.49] xl:pr-[65px] justify-between`}>
        <div className="inline-flex p-[5px] justify-center items-center gap-[11px] rounded-[23px] bg-[#fff]" onClick={onClick}>
            <div>
                <Light/>
            </div>
            <div>
                <Dark/>
            </div>
        </div>
        <div className="flex w-[156.449px] h-[44.017px] justify-center items-center gap-[18.137px] flex-shrink-0">
            <div>
                <Image src={logo} alt="logo" width={43.856} height={43.856}/>
            </div>
            <div>
                <Typography variant="p-m" font="Inter" fontWeight="bold" className={`${isDarkMode ? 'text-white' : ''}`}>Jane Cooper</Typography>
            </div>
        </div>
      </div>
    </div>
  );
}
