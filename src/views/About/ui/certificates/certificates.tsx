"use client";
import { useDeviceStore } from "@/shared/model";
import { CertificateDesktop } from "./certificatesDesktop";
import { CertificateMobile } from "./certificatesMobile";

export const Certificates = () => {
  const { isMobile } = useDeviceStore();

  return isMobile ? <CertificateMobile /> : <CertificateDesktop />;
};
