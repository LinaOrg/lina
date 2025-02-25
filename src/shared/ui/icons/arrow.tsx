import * as React from "react";

interface SvgIconProps {
  className?: string; 
}

const SvgIcon: React.FC<SvgIconProps> = ({ className }) => (
  <img
    src="/images/curlyArrow.svg"
    alt="arrow icon"
    width="48px"
    height="48px"
    className={className} 
  />
);

export default SvgIcon;
