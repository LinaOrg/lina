"use client";
import { ReactQueryProvider } from "./query-provider";

interface IProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProps) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
