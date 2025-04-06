"use client";
import { useDeviceStore } from "@/shared/model";
import { ReactQueryProvider } from "./query-provider";
import { useEffect } from "react";

interface IProps {
  children: React.ReactNode;
  isMobile?: boolean;
}

export function Providers({ children, isMobile }: IProps) {
  const { setIsMobile } = useDeviceStore();

  useEffect(() => {
    setIsMobile(!!isMobile);
  }, [isMobile]);

  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
