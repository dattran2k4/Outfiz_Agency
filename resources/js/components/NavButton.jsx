const NavButton = ({ onClick, children, className = "" }) => {
  return (
    <button 
      onClick={onClick}
      className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-all active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default NavButton;