import React from "react";
import Image from "next/image";

interface OMQLogoImageProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  language?: "ar" | "en";
}

export const OMQLogoImage: React.FC<OMQLogoImageProps> = ({
  className = "",
  size = "xxxxl",
  language = "ar",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
    xxl: "w-24 h-24",
    xxxl: "w-28 h-28",
    xxxxl: "w-32 h-32",
  };

  const logoSrc = language === "ar" ? "/logo-ar.png" : "/logo-en.png";

  return (
    <div
      className={`w-56 h-18 ${className} relative
    cursor-pointer
    rounded-lg
   
    `}
    >
      <Image
        src={logoSrc}
        alt={language === "ar" ? "ألفا  أوإمكيو" : "Alpha OMQ"}
        fill
        className="object-contain   rounded-lg block w-full h-full"
        priority
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          borderRadius: "20px",
        }}
      />
    </div>
  );
};

export default OMQLogoImage;
