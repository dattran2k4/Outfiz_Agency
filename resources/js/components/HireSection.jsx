import {hiringJobs} from '../data/hire';
import HireNotiImg from '../images/hire/hire-noti.png';
import {ArrowRightIcon, ArrowUpIcon} from '../components/Icons';

const HireSection = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Col */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            
            {/* Header */}
            <div className="mb-6">
               {/* Decor */}
               <div className="flex gap-1 mb-2">
                  <span className="w-6 h-1 bg-amber-500 rounded-full"></span>
                  <span className="w-3 h-1 bg-amber-500 rounded-full"></span>
                </div>
                {/* Title */}
                <h2 className="text-4xl font-bold text-brand">
                  Tuyển Dụng
                </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              Bạn muốn phát triển sự nghiệp trong môi trường trẻ trung, chuyên nghiệp và luôn cập nhật xu hướng marketing mới – OUTFIZ chính là nơi dành cho bạn.
            </p>

            {/* Img */}
            <div className="w-full flex justify-center lg:justify-start mb-8">
              <img 
                src={HireNotiImg}
                alt="Tuyển dụng Outfiz" 
                className="w-64 md:w-80 object-contain hover:scale-105 transition duration-500"
              />
            </div>

            {/* Button View All */}
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition flex items-center gap-2">
              Xem tất cả tuyển dụng
              <ArrowRightIcon />
            </button>
          </div>


          {/* Right Col */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {hiringJobs.map((job) => (
              <div 
                key={job.id} 
                className="bg-white rounded-3xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-md transition flex flex-col sm:flex-row gap-6 items-center"
              >
                {/* Banner */}
                <div className="w-full sm:w-1/3 shrink-0">
                  <img 
                    src={job.image} 
                    alt={job.title} 
                    className="w-full h-32 sm:h-auto object-cover rounded-2xl"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 w-full flex flex-col items-start justify-center">
                  
                  {/* Tag */}
                  <span className="px-4 py-1 rounded-full border border-gray-300 text-gray-500 text-xs mb-3 inline-block">
                    {job.type}
                  </span>

                  {/* Job Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {job.title}
                  </h3>

                  {/* Deadline */}
                  <p className="text-gray-500 text-sm mb-4">
                    Hạn nộp CV: {job.deadline}
                  </p>

                  {/* Job Description */}
                  <a 
                    href={job.link} 
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400 text-amber-500 text-sm font-semibold hover:bg-amber-50 transition group"
                  >
                    Mô tả công việc
                    <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Scroll Button */}
        <div className="absolute -bottom-6 right-4 lg:right-0">
          <button onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-transparent border border-amber-500 text-amber-500 
            flex items-center justify-center shadow-lg hover:bg-amber-500 hover:text-white transition transform hover:-translate-y-1">
            <ArrowUpIcon />
          </button>
        </div>

      </div>
    </section>
  );
};

export default HireSection;