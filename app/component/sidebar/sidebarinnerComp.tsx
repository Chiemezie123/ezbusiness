"use client";
import React from "react";
import { SideBarInnerProps } from "./index.types";
import { cn } from "@/utils/helpers";
import { Typography } from "@/components/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/hooks/themeContext";

export default function SideBarInnerComp(props: SideBarInnerProps) {
    const { isDarkMode} = useTheme();
  const { icon, title, isActive, path } = props;

  const pathName = usePathname();

  return (
    <Link href={path} className="w-full">
      <div
        className={cn(
          `flex items-center gap-3 self-stretch px-2 py-1 pr-4 rounded-lg w-full ${
            pathName === path ? "" : ""
          }`
        )}
      >
        <div
          className={cn(
            `flex items-center justify-center w-12 h-12 p-3 ${
              pathName === path
                ? ""
                : ""
            }`
          )}
        >
          {icon}
        </div>
        <div className={cn(``)}>
          <Typography font="Inter" fontWeight="medium" variant="p-l" className={`${isDarkMode ? 'text-white' : ''} leading-normal`}>
            {title}
          </Typography>
        </div>
      </div>
    </Link>
  );
}
