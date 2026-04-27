"use client";

import Image from "next/image";

export default function LogoMark({ className = "", alt = "Huroca logo" }) {
  return (
    <Image
      src="/Huroca-Icon.svg"
      alt={alt}
      width={556}
      height={501}
      priority
      className={className}
    />
  );
}
