"use client"

import { useEffect } from 'react';
import { MOBILE_BREAKPOINT, useDeviceStore } from "@/shared/model";
import { CertificateDesktop } from "./certificatesDesktop";
import { CertificatesMobile } from './certificatesMobile';


export const Certificates = () => {
    const { isMobile, setIsMobile } = useDeviceStore();

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
            setIsMobile(isMobile);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [setIsMobile]);

    return isMobile ? <CertificatesMobile/> : <CertificateDesktop />;
};