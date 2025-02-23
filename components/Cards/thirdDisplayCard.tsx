import React from 'react'
import { Typography } from '../Typography';
import { MoreDetail } from '@/contact/data';
import { useTheme } from "@/hooks/themeContext";
export default function ThirdDisplayCard(props:MoreDetail) {
    const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className={`flex-1  h-[189.845px] rounded-[10.669px] ${isDarkMode ? 'bg-[#383848]' : 'bg-[#fff]'}`}>
        <div className='w-full pl-[12.16px] pr-[13px] pt-[22.62px] flex items-center  justify-between'>
            <div>
                {props.icon1}
            </div>
            <div>
                {props.icon2}
            </div>
        </div>
        <div className='pt-[9.64px] flex flex-col gap-[9.77px] px-[1rem]'>
            <div>
                <Typography variant="h-m" fontWeight="bold" color="fuscous-gray-700" className={`${isDarkMode ? 'text-white' : ''}`}>{props.header}</Typography>
            </div>
            <div className='flex flex-col gap-[4px]'>
            <Typography variant="h-l" fontWeight="bold" className={`${isDarkMode ? 'text-white' : ''}`}>{props.invoice}</Typography>
            <Typography variant="c-s" fontWeight='regular' color="tuatara-900" className={`${isDarkMode ? 'text-white' : ''}`}>{props.content}</Typography>
            </div>
        </div>
    </div>
  )
}


// w-[254.189px]