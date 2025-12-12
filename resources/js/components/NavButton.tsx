import type { ButtonHTMLAttributes } from "react";

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const NavButton = ({children, className = "" , ...props }: NavButtonProps) => {
  return (
    <button 
      {...props}
      className={`hidden md:flex cursor-pointer rounded-full border-2 items-center justify-center transition-all active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default NavButton;