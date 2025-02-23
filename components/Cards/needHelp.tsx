import React from 'react'
import { Typography } from '../Typography'
import { Button } from '../ui/button'
import { useTheme } from '@/hooks/themeContext'
export default function NeedHelp() {    
    const { isDarkMode} = useTheme();
  return (
    <div className={`w-[171.529px] h-[150.637px] rounded-[10.669px]  ${isDarkMode ? 'bg-[#383848]' : 'bg-[#F3F3F3]'} flex flex-col items-center justify-center gap-[20px]`}>
        <div className=''>
            <Typography align='center' variant='p-m' fontWeight="bold" className={`${isDarkMode ? 'text-white' : ''}`}>
            Need Help
            </Typography>
            <Typography align='center' variant='p-s' fontWeight="regular" className={`${isDarkMode ? 'text-white' : ''}`}>
            You can contact?
            </Typography>
        </div>
        <div>
            <Button children={"GET SUPPORT"} className='rounded-[10.669px] bg-[#748BDF]'/>
        </div>

    </div>
  )
}

// 