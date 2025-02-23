import React from 'react'
import { Typography } from '../Typography'
import { UserDetail } from '@/contact/data'
import { useTheme } from "@/hooks/themeContext";
export default function SecondDisplayCard(props:UserDetail) {
    const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className={`2xl:flex-1 xl:w-[210px] h-[296.505px] shrink-0 flex-1 rounded-[10.669px] ${isDarkMode ? 'bg-[#383848]' : 'bg-[#fff]'} flex flex-col gap-8`}>
        <div className='w-full px-[23px] pt-[22.58px] flex flex-col gap-4'>
            <div>
                <Typography variant="h-m" font="Inter" fontWeight="bold" className={`${isDarkMode ? 'text-white' : ''}`}>{props.header}</Typography>
            </div>
            <div>
            <Typography variant="h-xl" font="Inter" fontWeight="bold"  className={`${isDarkMode ? 'text-white' : ''}`}> {props.BigText}</Typography>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='pl-[12.3px] flex flex-col gap-[2px]'>
                <div className='flex items-center gap-[5.699px]'>
                    <div className='w-[12.913px] h-[8.702px] rounded-[2.134px] bg-[#FEDE78]'></div>
                    <div>
                        <Typography variant="p-s" font="Inter" fontWeight="medium" className={`${isDarkMode ? 'text-white' : ''}`}>{props.userType}</Typography>
                    </div>
                </div>
                <div className='flex items-center gap-[5.699px]'>
                    <div className='w-[12.913px] h-[8.702px] rounded-[2.134px] bg-[#FEDE78]'></div>
                    <div>
                        <Typography variant="p-s" font="Inter" fontWeight="medium" className={`${isDarkMode ? 'text-white' : ''}`}>{props.userTypeTwo}</Typography>
                    </div>
                </div>
            </div>
            <div className="2xl:w-full 2xl:h-full xl:w-[30px] xl:h-[30px]">
             {props.icon}
            </div>
        </div>
    </div>
  )
}



// w-[254.189px]