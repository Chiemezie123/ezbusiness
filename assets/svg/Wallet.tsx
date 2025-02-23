import React from 'react'
import { useTheme } from "@/hooks/themeContext";

export default function Wallet() {
   const { isDarkMode} = useTheme();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
    <path d="M34.3335 7.49597C35.2766 7.49597 36.1812 7.87064 36.8481 8.53756C37.515 9.20448 37.8897 10.109 37.8897 11.0522V12.8303H27.221C24.8631 12.8303 22.6018 13.767 20.9345 15.4343C19.2672 17.1016 18.3305 19.3629 18.3305 21.7208C18.3305 24.0788 19.2672 26.3401 20.9345 28.0074C22.6018 29.6747 24.8631 30.6114 27.221 30.6114H37.8897V32.3895C37.8897 33.3327 37.515 34.2372 36.8481 34.9041C36.1812 35.571 35.2766 35.9457 34.3335 35.9457H9.43994C8.49678 35.9457 7.59224 35.571 6.92532 34.9041C6.2584 34.2372 5.88373 33.3327 5.88373 32.3895V11.0522C5.88373 10.109 6.2584 9.20448 6.92532 8.53756C7.59224 7.87064 8.49678 7.49597 9.43994 7.49597H34.3335ZM36.1116 16.3865C37.0547 16.3865 37.9593 16.7612 38.6262 17.4281C39.2931 18.095 39.6678 18.9996 39.6678 19.9427V23.4989C39.6678 24.4421 39.2931 25.3466 38.6262 26.0136C37.9593 26.6805 37.0547 27.0552 36.1116 27.0552H27.221C25.8063 27.0552 24.4495 26.4932 23.4491 25.4928C22.4487 24.4924 21.8867 23.1356 21.8867 21.7208C21.8867 20.3061 22.4487 18.9493 23.4491 17.9489C24.4495 16.9485 25.8063 16.3865 27.221 16.3865H36.1116ZM27.221 19.9427C26.7494 19.9427 26.2972 20.1301 25.9637 20.4635C25.6303 20.797 25.4429 21.2493 25.4429 21.7208C25.4429 22.1924 25.6303 22.6447 25.9637 22.9781C26.2972 23.3116 26.7494 23.4989 27.221 23.4989C27.6926 23.4989 28.1449 23.3116 28.4783 22.9781C28.8118 22.6447 28.9991 22.1924 28.9991 21.7208C28.9991 21.2493 28.8118 20.797 28.4783 20.4635C28.1449 20.1301 27.6926 19.9427 27.221 19.9427Z" fill={`${isDarkMode ?'white':"#111111"} `}/>
  </svg>
  )
}
