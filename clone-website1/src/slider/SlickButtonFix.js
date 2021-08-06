import React from "react";

// this code fixes console error on slider's props
export default function SlickButtonFix({
  currentSlide,
  slideCount,
  children,
  ...props
}) {
  return <span {...props}>{children}</span>;
}