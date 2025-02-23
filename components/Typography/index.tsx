"use client";

import React, { JSX } from "react";
import { cn } from "@/utils/helpers";
import { cva } from "class-variance-authority";
import colorClasses from "./colorClasses";
import { TypographyProps, variantMapping } from "./index.types";



export const typography = cva("", {
  variants: {
    intent: {
      "h-xxl": "text-h-xxl mmd:text-h-xl mxs:text-h-l",
      "h-xl": "text-h-xl xl:text-h-lm mmd:text-h-l ",
      "h-lm":"text-h-lm xl:text-h-l mmd:text-h-m ",
      "h-l": "text-h-l xl:text-h-m mmd:text-h-s",
      "h-m": "text-m xl:text-h-s",
      "h-s": "text-h-s",
      "h-xs": "text-h-xs",
      "p-xxl": "text-p-xxl mmd:p-xl",
      "p-xl": "text-p-xl mmd:p-l",
      "p-l": "text-p-l",
      "p-m": "text-p-m",
      "p-s": "text-p-s xl:text-p-s",
      "c-xxl": "text-c-xxl ",
      "c-xl": "text-c-xl",
      "c-l": "text-c-l",
      "c-m": "text-c-m",
      "c-s": "text-c-s",
      span: "",
      div: "",
    },
    font: {
        Inter: "font-Inter",
      },
    color:colorClasses,
    fontWeight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    underline: { always: "underline", hover: "hover:underline", none: "" },
    align: {
      center: "text-center",
      start: "text-start",
      end: "text-end",
      left: "text-left",
      right: "text-right",
      justify: "text-justify",
    },
  },
  compoundVariants: [],
});

// Typography component
function Typography(props: TypographyProps) {
  const {
    variant="div",
    tag,
    underline = "none",
    fontWeight = "regular",
    gutterBottom,
    noWrap,
    align = "left",
    color = "black",
    customClassName = "",
    font = "Inter",
    children,
    className,
    ...rest
  } = props;

  // Resolved tag
  const Tag = (tag ||
    variantMapping[variant] ||
    "p") as keyof JSX.IntrinsicElements;

  // Classes
  const classNameI = cn(
    gutterBottom && "mb-4",
    noWrap && "overflow-hidden text-ellipsis whitespace-nowrap",
    className && className,
  );

  return (
    <Tag
      className={typography({
        intent: variant,
        underline,
        fontWeight,
        color,
        align,
        font,
        className: cn(
          classNameI && classNameI,
          customClassName && customClassName,
        ),
      })}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export { Typography };

