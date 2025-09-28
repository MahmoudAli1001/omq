import React from 'react';

interface OMQLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const OMQLogo: React.FC<OMQLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Diving Helmet */}
        <g transform="translate(20, 15)">
          {/* Helmet Body */}
          <ellipse
            cx="30"
            cy="25"
            rx="18"
            ry="22"
            fill="#E5E7EB"
            stroke="#9CA3AF"
            strokeWidth="2"
          />
          
          {/* Helmet Viewport */}
          <circle
            cx="30"
            cy="25"
            r="12"
            fill="#1F2937"
            stroke="#9CA3AF"
            strokeWidth="1.5"
          />
          
          {/* Helmet Details */}
          <circle
            cx="30"
            cy="25"
            r="8"
            fill="#374151"
            opacity="0.3"
          />
          
          {/* Light Arm */}
          <path
            d="M 30 10 Q 35 5 40 8"
            stroke="#374151"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Light Bulb */}
          <circle
            cx="40"
            cy="8"
            r="3"
            fill="#FEF3C7"
            stroke="#F59E0B"
            strokeWidth="1"
          />
          
          {/* Light Rays */}
          <g opacity="0.6">
            <circle cx="40" cy="8" r="6" fill="none" stroke="#FEF3C7" strokeWidth="0.5" />
            <circle cx="40" cy="8" r="9" fill="none" stroke="#FEF3C7" strokeWidth="0.3" />
            <circle cx="40" cy="8" r="12" fill="none" stroke="#FEF3C7" strokeWidth="0.2" />
          </g>
          
          {/* Diver Body */}
          <ellipse
            cx="30"
            cy="50"
            rx="12"
            ry="8"
            fill="#10B981"
            stroke="#059669"
            strokeWidth="1.5"
          />
          
          {/* Oxygen Tanks */}
          <ellipse
            cx="20"
            cy="45"
            rx="3"
            ry="12"
            fill="#6B7280"
            stroke="#4B5563"
            strokeWidth="1"
          />
          <ellipse
            cx="40"
            cy="45"
            rx="3"
            ry="12"
            fill="#6B7280"
            stroke="#4B5563"
            strokeWidth="1"
          />
          
          {/* Bubbles */}
          <g opacity="0.7">
            <circle cx="15" cy="20" r="1.5" fill="#B9EAF2" />
            <circle cx="45" cy="30" r="1" fill="#B9EAF2" />
            <circle cx="25" cy="15" r="0.8" fill="#B9EAF2" />
            <circle cx="50" cy="25" r="1.2" fill="#B9EAF2" />
            <circle cx="10" cy="35" r="0.6" fill="#B9EAF2" />
          </g>
        </g>
        
        {/* Spiral Decorative Elements */}
        <g opacity="0.8">
          <path
            d="M 70 20 Q 75 15 80 20 Q 75 25 70 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 75 30 Q 80 25 85 30 Q 80 35 75 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default OMQLogo;

