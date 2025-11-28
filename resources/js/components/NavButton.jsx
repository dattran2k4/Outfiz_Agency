const NavButton = ({ onClick, children, className = "" }) => {
  return (
    <button 
      onClick={onClick}
      className={`hidden md:flex cursor-pointer rounded-full border-2 items-center justify-center transition-all active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default NavButton;