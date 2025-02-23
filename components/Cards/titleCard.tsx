import React from 'react'
import { Typography } from '../Typography'
import { ArrowDown } from '@/assets/svg';
import { useTheme } from "@/hooks/themeContext";
interface TitleCardProp{
    header: string;
    date:String;
}

export default function TitleCard(props:TitleCardProp) {
    const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className='flex items-center justify-between'>
        <div>
            <Typography variant="h-m" fontWeight="bold" className={`${isDarkMode ? 'text-white' : ''}`}>{props.header}</Typography>
        </div>
        <div className='flex items-center'>
            <div>
                <Typography variant="h-m" fontWeight="medium" className={`${isDarkMode ? 'text-white' : ''}`}>{props.date}</Typography>
            </div>
            <div>
                <ArrowDown/>
            </div>
        </div>
    </div>
  )
}
