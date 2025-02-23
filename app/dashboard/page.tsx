'use client'
import React from "react";
import FirstDisplayCard from "@/components/Cards/firstDisplayCard";
import SecondDisplayCard from "@/components/Cards/secondDisplayCard";
import ThirdDisplayCard from "@/components/Cards/thirdDisplayCard";
import { OrderItems } from "@/contact/data";
import { UserDetail, userDetails, moreDetails } from "@/contact/data";
import TitleCard from "@/components/Cards/titleCard";
import { useTheme } from "@/hooks/themeContext";

export default function Page() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <main className={`${isDarkMode ? 'bg-[#12121E]' : 'bg-[#F3F3F3]'} h-screen w-full xl:px-[40.43px] 2xl:px-[79.43px] xl:pt-[20px] 2xl:pt-[24.25px] flex xl:gap-[15px] 2xl:gap-[20.42px]`}>
      <section className="flex flex-col xl:gap-[20.42px] 2xl:gap-[20.42px] xl:w-[500px] 2xl:w-[521.255px]">
        <div className="w-full grid grid-cols-2 xl:gap-x-[8.88px] 2xl:gap-x-[12.88px] xl:gap-y-[10.71px] 2xl:!gap-y-[10.71px]">
          {OrderItems.map((items,index) => (
            <FirstDisplayCard
              key={index}
              icon={items.icon}
              header={items.header}
              amount={items.amount}
              number={items.number}
            />
          ))}
        </div>
        <div className={`w-full h-[267.335px] ${isDarkMode ? 'bg-[#383848]' :'bg-[#fff]'} rounded-[10.669px]`}>
          <div className="w-full px-[23px] py-[22px]">
          <TitleCard header="Sales dynamics" date={"2023"}/>
          </div>
        </div>
        <div className={`w-full h-[267.335px] ${isDarkMode ? 'bg-[#383848]' : 'bg-[#fff]'} rounded-[10.669px]`}>
        <div className="w-full px-[23px] py-[22px]">
          <TitleCard header="Overall User Activity" date={"2023"}/>
          </div>
        </div>
      </section>
      <section className="flex-1 flex flex-col gap-[20.42]">
        <div className="flex gap-[14.8px]">
          {userDetails.map((items,index) => (
            <SecondDisplayCard
              key={index}
              header={items.header}
              BigText={items.BigText}
              userType={items.userType}
              userTypeTwo={items.userTypeTwo}
              icon={items.icon}
            />
          ))}
        </div>
        <div className="w-full flex gap-[14.8px] ">
          {moreDetails.map((items)=>(
            <ThirdDisplayCard header={items.header} icon1={items.icon1} icon2={items.icon2} invoice={items.invoice} content={items.content}/>
          ))}
        </div>
        <div className={`w-full h-[267.335px] ${isDarkMode ? 'bg-[#383848]' : 'bg-[#fff]'} rounded-[10.669px]`}>
        <div className="w-full px-[23px] py-[22px]">
          <TitleCard header="Profit & Loss" date={"2023"}/>
          </div>
        </div>
      </section>
    </main>
  );
}
