"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { default as NextImage } from "next/image";
import { SyntheticEvent, useEffect, useState } from "react";
interface IImage {
  id?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  src: string | StaticImport;
  alt: string;
  onError?: (e: SyntheticEvent) => void;
  fallbackImage?: string | StaticImport;
  priority?: boolean;
  loading?: "eager" | "lazy";
  className?: string;
  fill?: boolean;
  unoptimized?: boolean;
  sizes?: string;
  layout?: string;
}
export const Image = (props: IImage) => {
  const [error, setError] = useState<SyntheticEvent | null>(null);
  useEffect(() => {
    setError(null);
  }, [props.src]);
  return (
    <NextImage
      id={props.id}
      width={props.width}
      height={props.height}
      className={props.className}
      src={error ? props.fallbackImage ?? "/images/no-image.webp" : props.src}
      alt={props.alt}
      onError={props.onError ?? setError}
      priority={props.priority}
      loading={props.loading}
      fill={props.fill}
      unoptimized={props.unoptimized}
      sizes={props.sizes}
      layout={props.layout}
    />
  );
};
