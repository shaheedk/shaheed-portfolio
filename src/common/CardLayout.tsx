import React from "react";

interface CardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const CardLayout: React.FC<CardLayoutProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg w-[120px] h-[120px] flex flex-col justify-center items-center  
     transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-transparent hover:border   ${className}`}
    >
      {children}
    </div>
  );
};

export default CardLayout;
