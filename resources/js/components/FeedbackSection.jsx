import {partners, feedbacks} from '../data/feedback';
import NavButton from '../components/NavButton';
import {ArrowLeft, ArrowRight, StartIcon} from '../components/Icons';
import BackGroundFeedBack from '../images/feedback/background-feedback.png';
import Background from '../images/feedback/background.png';
import BackgroundAvatar from '../images/feedback/background-avatar.png';
const FeedbackSection = () => {
    return (
        <section className="py-20 relative">
      {/* Trang trí background (nếu có các đốm vàng bay bay thì thêm thẻ div absolute ở đây) */}

      <div className="w-full absolute inset-0 -z-10">
        <img src={Background} alt="Background" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- Header & Title --- */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500 flex items-center justify-center gap-3">
            {/* Nếu có icon ngôi sao trang trí thì thêm vào đây */}
            Đối Tác & Feedback
             {/* Nếu có hình tay cầm mảnh ghép puzzle thì đặt absolute right-0 top-0 ở container cha */}
          </h2>    
        </div>

        {/* --- Phần 1: Partners Carousel --- */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#D4D4D4] p-6 mb-20 relative">
          <div className="flex items-center justify-between h-[169px]">
            {/* Nút Prev */}
            <NavButton><ArrowLeft /></NavButton>

            {/* List Logo - Cần dùng Grid hoặc Flex */}
            <div className="flex-1 flex justify-around items-center overflow-hidden">
              {partners.map((p) => (
                <img 
                  key={p.id} 
                  src={p.logo} 
                  alt={p.name} 
                  className="w-[205px] h-[73px] object-cover" 
                />
              ))}
            </div>

             {/* Nút Next */}
             <NavButton><ArrowRight /></NavButton>
          </div>
        </div>


        {/* --- Phần 2: Feedback Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {feedbacks.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* 1. Background  */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={BackGroundFeedBack} 
                  alt="bg-card" 
                  className="w-full h-full object-fill drop-shadow-md"
                />
              </div>

              {/* 2. Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                
                {/* Header Card: Avatar + Info + Start */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Khối Avatar với nền vàng */}
                  <div className="relative w-20 h-20 shrink-0">
                    <div className="relative shrink-0 w-[83px] h-[85px]"> 
                      {/* Avatar - BG */}
                      <img 
                        src={BackgroundAvatar} 
                        alt="background shape"
                        className="absolute inset-0 w-full h-full object-contain z-0"
                      />
                      {/* Avatar */}
                      <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[64px] h-[64px] rounded-full object-cover z-10 shadow-sm"
                      />
                    </div>
                  </div>
                  
                  {/* Info & Starts */}
                <div className="flex flex-col pt-1">
                  <h4 className="font-bold text-gray-800 text-xl leading-tight">{item.name}</h4>
                  <span className="text-gray-500 text-sm mb-2">{item.role}</span>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StartIcon 
                        key={i} 
                        className={`w-5 h-5 ${i < item.rating ? "text-[#FAAF3A]" : "text-[#E5E5E5]"}`} 
                      />
                    ))}
                  </div>
                </div>
                </div>

                {/* Nội dung text */}
                <p className="text-gray-600 text-sm leading-relaxed pl-2 pb-6">
                  {item.content}
                </p>

                {/* Dấu quote đã có sẵn trong ảnh nền (góc phải dưới), 
                    nên ta chỉ cần padding bottom cho text để không đè lên nó */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    )
}

export default FeedbackSection;