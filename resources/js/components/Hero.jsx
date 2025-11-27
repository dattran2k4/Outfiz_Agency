import React from 'react';
import Button from './Button';
import { CallingIcon, ZaloIcon, MessengerIcon } from './Icons';
import HeroImage from '../images/hero-img.png'

const ActionButton = ({ icon, href }) => {
    return (
      <a 
        href={href}
        className="relative group flex items-center justify-center w-10 h-10 bg-[#FF4D4D] rounded-full text-white shadow-lg transition-all hover:scale-110"
      >
        {/* Vòng tròn Ring Effect khi Hover */}
        <span className="absolute inset-0 rounded-full border-2 border-[#FF4D4D] opacity-0 scale-100 transition-all duration-300 group-hover:scale-125 group-hover:opacity-60"></span>
        
        {/* Icon */}
        <div className="relative z-10">
          {icon}
        </div>
      </a>
    );
  };

const Hero = () => {
  return (
    <section className="pt-16 pb-32 md:pb-40">
      
      <div className="w-full max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* === Left Col: TEXT === */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 max-h-[289px]">
            
            {/* Title */}
            <h1 className="bg-gradient-main bg-clip-text text-transparent font-bold text-6xl leading-[75px] tracking-[-0.02em] uppercase mb-2">
                OUTFIZ AGENCY
            </h1>
            <h2 className="font-semibold text-[30px] leading-[38px] tracking-[-0.01em] text-[#404040] mb-6">
                SEO, Ads, Digital Marketing
            </h2>

            {/* Description */}
            <p className="font-semibold leading-5 tracking-normal text-[#525252] mb-8 max-w-[540px]">
                Chuyên cung cấp các dịch vụ marketing tổng thể, giúp doanh nghiệp xây dựng thương hiệu, thu hút khách hàng và tăng trưởng bền vững.
            </p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button variant="primary" className="w-[211px]!">
                    Đăng ký tư vấn ngay
                </Button>
            </div>
        </div>

        {/* Hero image */}
        <div className="relative flex justify-center lg:justify-end z-10 group">

            {/* Ảnh nhân vật chính */}
            <img 
                src={HeroImage} 
                alt="Digital Marketing 3D Illustration" 
                className="max-w-[633px] h-auto object-contain drop-shadow-2xl animate-fade-in-up"
            />

            <div className="absolute -right-11 top-2/3 flex flex-col gap-4">
                
                {/* Nút Phone */}
                <ActionButton 
                    href="tel:0905xxxxx" 
                    icon={<CallingIcon className="w-5 h-5" />} 
                />

                {/* Nút Zalo */}
                <ActionButton 
                    href="https://zalo.me/..." 
                    icon={<ZaloIcon className="w-6 h-6" />} 
                />

                {/* Nút Messenger */}
                <ActionButton 
                    href="https://m.me/..." 
                    icon={<MessengerIcon className="w-6 h-6" />} 
                />

            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;