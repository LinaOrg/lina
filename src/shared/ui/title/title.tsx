import { FC, ReactNode } from "react";


type TTitleSize = "xl" | "lg" | "md" | "sm" | "xs";


type TTitleProps = {
  children: ReactNode; 
  size?: TTitleSize;   
  className?: string; 
};


const sizeToTag: Record<TTitleSize, keyof JSX.IntrinsicElements> = {
  xl: "h1",
  lg: "h2",
  md: "h3",
  sm: "h4",
  xs: "h5", 
};

export const Title: FC<TTitleProps> = ({ children, size = "md", className }) => {
  const Tag = sizeToTag[size];

  return <Tag className={className}>{children}</Tag>;
};
