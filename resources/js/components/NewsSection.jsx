import { useState } from 'react';
import {newsCategories, newsArticles} from '../data/news';
import {ArrowLeft, ArrowRight, ArrowRightIcon} from '../components/Icons';
import NavButton from '../components/NavButton';

const NewsSection = () => {
  // State để quản lý tab đang chọn
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-amber-500 relative inline-block mb-6 pb-3">
            Tin Tức
             {/* Decoration */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
              <span className="w-5 h-1.5 bg-linear-to-r from-[#FF782E] to-brand rounded-full"></span>
              <span className="w-10 h-1.5 bg-linear-to-r from-[#FF782E] to-brand rounded-full"></span>
            </div>
          </h2>
          <p className="text-[#404040] font-medium text-lg mt-4 mx-auto">
            Nắm bắt những kiến thức marketing mới nhất, xu hướng thương hiệu, mẹo tối ưu quảng cáo và case study thực tế từ Outfiz Agency.
          </p>
        </div>

        {/* --- Filter Menu Bar --- */}
        <div className="bg-[#F5F5F5] py-3 px-6 rounded-[10px] flex items-center gap-5 mb-12 mx-auto">
          {/* Pre Button */}
          <div className="hidden md:block">
             <NavButton className="bg-white border-none w-9 h-9"><ArrowLeft className="w-3 h-3" /></NavButton>
          </div>

          {/* List Categories */}
          <div className="flex-1 flex gap-5 overflow-x-hidden items-center justify-start">
            {newsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`
                  whitespace-nowrap px-8 rounded-[10px] font-semibold text-lg transition-all border md:h-14
                  flex items-center justify-center  
                  ${activeTab === cat.id 
                    ? 'bg-white text-brand border-brand shadow-sm' // Active Style
                    : 'text-[#737373] border-[#E9E9E9] bg-white' // Inactive Style
                  }
                `}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <div className="hidden md:block">
            <NavButton className="bg-white border-none w-9 h-9"><ArrowRight className="w-3 h-3" /></NavButton>
          </div>
        </div>

        {/* List News */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article key={article.id} className="group cursor-pointer p-6">
              
              {/* Image Card */}
              <div className="relative rounded-2xl overflow-hidden mb-5">
                {/* Img News */}
                <div className="aspect-4/3 overflow-hidden">
                    <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                </div>
                
                {/* Lớp phủ màu xanh nhẹ (gradient overlay) để giống ảnh mẫu */}
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition"></div>

                {/* Date Badge (Nằm đè lên ảnh ở giữa cạnh dưới) */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-amber-400 text-white text-xs font-bold px-4 py-1.5 rounded-t-lg shadow-sm">
                  {article.date}
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                {/* Category Tag */}
                <div className="mb-3">
                   <span className="inline-flex justify-center items-center px-6 py-1 border border-[#D4D4D4] bg-[#F9F9F9] rounded-full text-gray-500 text-xs uppercase font-medium h-9">
                      {article.category}
                   </span>
                </div>

                {/* Title */}
                <h3 className="text-[24px] font-semibold text-[#404040] mb-3 line-clamp-1 group-hover:text-amber-500 transition">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#525252] text-lg leading-[4/3] mb-6 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Link */}
                <a href={article.slug} className="text-brand font-semibold underline hover:underline underline-offset-4 inline-flex items-center gap-1">
                  Xem chi tiết
                </a>
              </div>

            </article>
          ))}
        </div>

        {/* --- Button View All (Bottom) --- */}
        <div className="text-center mt-16">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition flex items-center gap-2 mx-auto">
            Xem tất cả tin tức
            <ArrowRightIcon />
          </button>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;