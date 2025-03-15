"use client";
import { useDeviceStore } from "@/shared/model";
import { CertificateMobile } from "./certificatesMobile";
import { CertificateDesktop } from "./certificatesDesktop";

export const Certificates = () => {
  const { isMobile } = useDeviceStore();

  return isMobile ? <CertificateMobile /> : <CertificateDesktop />;
};
