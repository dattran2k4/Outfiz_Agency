import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon, 
  ...props 
}) => {
  
  // Base styles: padding 10px 16px, gap 4px, radius 30px (Chuẩn Figma)
  const baseStyles = "flex items-center justify-center gap-[4px] rounded-[30px] font-semibold text-sm transition-all duration-300 pt-[10px] pb-[10px] px-[16px]";

  const variants = {
    // 1. Primary: Nền cam #FAAF3A
    primary: "bg-brand text-white w-[170px] h-[42px] hover:bg-brand-dark hover:shadow-btn hover:-translate-y-0.5 border border-transparent",

    // 2. Outline: Viền cam, nền trắng
    outline: `
      bg-white text-brand border border-brand
      w-[172px] h-[42px]
      hover:bg-orange-50
    `,

    // 3. Gradient: Dùng cho Banner sau này (Nền chuyển sắc)
    gradient: `
      bg-brand-gradient text-white
      w-[170px] h-[42px]
      hover:shadow-lg hover:opacity-90 hover:-translate-y-0.5
      border-none
    `,
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {/* Icon từ prop (ví dụ icon điện thoại) */}
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      
      {/* QUAN TRỌNG: Wrapper này giúp nội dung bên trong (Cờ + Chữ) luôn nằm ngang */}
      <span className="flex items-center justify-center gap-[4px]">
          {children}
      </span>
      
    </button>
  );
};

export default Button;