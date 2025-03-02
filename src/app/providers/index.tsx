"use client";
import { useDeviceStore } from "@/shared/model";
import { ReactQueryProvider } from "./query-provider";
import { useEffect } from "react";

interface IProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProps) {
  const { setIsMobile } = useDeviceStore();

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobile = window.innerWidth < 991; // You can adjust the threshold
      console.log({ isMobile });
      console.log("isMobile", window.innerWidth);
      setIsMobile(isMobile);
    };

    checkIsMobile(); // Set on initial load
    window.addEventListener("resize", checkIsMobile); // Update on resize

    return () => window.removeEventListener("resize", checkIsMobile);
  }, [setIsMobile]);

  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
