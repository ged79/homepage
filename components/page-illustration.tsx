"use client";

import Image from "next/image";
import Illustration from "@/public/images/page-illustration.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { useTheme } from "@/components/theme-provider";

export default function PageIllustration({
  multiple = false,
}: {
  multiple?: boolean;
}) {
  const { isDarkMode } = useTheme();
  return (
    <>
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/4"
        aria-hidden="true"
        style={!isDarkMode ? {
          filter: 'hue-rotate(180deg) brightness(0.8) contrast(1.2)',
          opacity: 0.6
        } : {}}
      >
        <Image
          className="max-w-none"
          src={Illustration}
          width={846}
          height={594}
          alt="Page illustration"
        />
      </div>
      {multiple && (
        <>
          <div
            className="pointer-events-none absolute left-1/2 top-[400px] -z-10 -mt-20 -translate-x-full opacity-50"
            aria-hidden="true"
            style={!isDarkMode ? {
              filter: 'hue-rotate(180deg) brightness(0.7)',
              opacity: 0.3
            } : {}}
          >
            <Image
              className="max-w-none"
              src={BlurredShapeGray}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>
          <div
            className="pointer-events-none absolute left-1/2 top-[440px] -z-10 -translate-x-1/3"
            aria-hidden="true"
            style={!isDarkMode ? {
              filter: 'hue-rotate(180deg) brightness(0.7)',
              opacity: 0.4
            } : {}}
          >
            <Image
              className="max-w-none"
              src={BlurredShape}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>
        </>
      )}
    </>
  );
}
