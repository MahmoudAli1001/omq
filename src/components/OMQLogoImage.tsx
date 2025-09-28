import React from 'react';
import Image from 'next/image';

interface OMQLogoImageProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  language?: 'ar' | 'en';
}

export const OMQLogoImage: React.FC<OMQLogoImageProps> = ({ 
  className = '', 
  size = 'xxxxl', 
  language = 'ar' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    xxl: 'w-24 h-24',
    xxxl: 'w-28 h-28',
    xxxxl: 'w-32 h-32'
  };

  const logoSrc = language === 'ar' ? '/logo-ar-trans.png' : '/logo-en-trans.png';

  return (
    <div className={`w-40 h-16 ${className} relative
    cursor-pointer
    rounded-lg
    bg-gradient-to-b font-cairo from-[#22994d] via-[#0db56c] to-[#2e558d] 
    `}>
      <Image
        src={logoSrc}
        alt={language === 'ar' ? 'عمق المملكة' : 'Kingdom Depth'}
        fill
        className="object-contain   rounded-lg block w-full h-full"
        priority
        style={{ width: '100%', height: '100%' ,
            objectFit: 'contain',
            borderRadius: '10px'
        }}
      />
    </div>
  );
};

export default OMQLogoImage;
