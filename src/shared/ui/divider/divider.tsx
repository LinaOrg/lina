import React from "react";

interface DividerProps {
  width: string;
  height: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ width, height, className = "" }) => {
  return <div className={className} style={{ width, height }} />;
};
