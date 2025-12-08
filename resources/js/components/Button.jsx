import React from "react";

const Button = ({ children, variant = "primary", className = "", icon, iconRight, ...props }) => {
    const baseStyles =
        "flex items-center justify-center gap-[4px] rounded-[30px] transition-all duration-300 pt-[10px] pb-[10px] px-[16px] cursor-pointer";

    const variants = {
        // 1. Primary: Nền cam #FAAF3A
        primary:
            "bg-brand text-white w-[170px] h-[42px] hover:bg-brand-dark hover:shadow-btn hover:-translate-y-0.5 border border-transparent",

        // 2. Outline: Viền cam, nền trắng
        outline: `
      bg-transparent text-brand border border-brand
      w-[172px] h-[42px]
      hover:bg-brand
      hover:text-white
    `,

        // 3. Gradient: Dùng cho Banner sau này (Nền chuyển sắc)
        gradient: `
      bg-gradient-to-r from-[#FF742E] to-[#FFAD2C] text-white
      w-[170px] h-[42px]
      hover:shadow-lg hover:opacity-90 hover:-translate-y-0.5
      border-none
    `,
    };

    const defaultWidth = className.includes("w-") ? "" : "min-w-[140px]";

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className} ${defaultWidth}`} {...props}>
            {/* Icon  */}
            {icon && <span className="flex items-center justify-center">{icon}</span>}

            {/* Children */}
            <span className="flex items-center justify-center gap-1">{children}</span>

            {/* Icon Arrow Right */}
            {iconRight && <span>{iconRight}</span>}
        </button>
    );
};

export default Button;
