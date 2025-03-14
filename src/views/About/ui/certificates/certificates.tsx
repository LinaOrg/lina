"use client";
import { useDeviceStore } from "@/shared/model";
import { CertificateDesktop } from "./certificatesDesktop";
import { CertificatesMobile } from "./certificatesMobile";

export const Certificates = () => {
  const { isMobile } = useDeviceStore();

  return isMobile ? <CertificatesMobile /> : <CertificateDesktop />;
};
