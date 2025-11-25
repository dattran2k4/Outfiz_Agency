import React from 'react';
import Button from './Button'; // Tái sử dụng nút xịn đã làm
import { CallingIcon, ZaloIcon, MessengerIcon } from './Icons'; // Icon điện thoại

const ActionButton = ({ icon, href }) => {
    return (
      <a 
        href={href}
        className="relative group flex items-center justify-center w-[50px] h-[50px] bg-[#F04C4C] rounded-full text-white shadow-lg transition-all hover:scale-110"
      >
        {/* Vòng tròn Ring Effect khi Hover */}
        <span className="absolute inset-0 rounded-full border-2 border-[#F04C4C] opacity-0 scale-100 transition-all duration-300 group-hover:scale-125 group-hover:opacity-60"></span>
        
        {/* Icon */}
        <div className="relative z-10">
          {icon}
        </div>
      </a>
    );
  };

const Hero = () => {
  return (
    <section className="relative w-full bg-gray-50 pt-10 pb-20 overflow-hidden">
      
      {/* Container giới hạn độ rộng (trùng với Header) */}
      <div className="w-full max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* === CỘT TRÁI: TEXT === */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            
            {/* 1. Badge nhỏ trên cùng */}
            <h1 className="text-brand font-bold text-[60px] leading-[75px] tracking-[-0.02em] uppercase mb-2">
                OUTFIZ AGENCY
            </h1>
            {/* 2. Tiêu đề lớn (H1) */}
            <h2 className="font-semibold text-[30px] leading-[38px] tracking-[-0.01em] text-[#404040] mb-6">
                SEO, Ads, Digital Marketing
            </h2>

            {/* 3. Mô tả (Description) */}
            <p className="font-semibold text-[16px] leading-[22px] tracking-normal text-[#525252] mb-8 max-w-[540px]">
                Chuyên cung cấp các dịch vụ marketing tổng thể, giúp doanh nghiệp xây dựng thương hiệu, thu hút khách hàng và tăng trưởng bền vững.
            </p>

            {/* 4. Nhóm nút (Buttons) */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Nút Gradient: Đăng ký tư vấn */}
                <Button variant="primary" className="!w-[211px]">
                    Đăng ký tư vấn ngay
                </Button>
            </div>
        </div>

        {/* === CỘT PHẢI: HÌNH ẢNH 3D === */}
        <div className="relative flex justify-center lg:justify-end z-10 group">
            {/* <img src="/images/hero-bg.png" className="absolute top-0 right-0 w-full h-full object-contain -z-10 opacity-50 scale-125" /> */}

            {/* Ảnh nhân vật chính */}
            <img 
                src="/images/hero-img.png" 
                alt="Digital Marketing 3D Illustration" 
                className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl animate-fade-in-up"
            />

<div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                
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