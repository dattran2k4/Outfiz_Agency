import {partners, feedbacks} from '../data/feedback';
import NavButton from '../components/NavButton';
import {ArrowLeft, ArrowRight, StartIcon} from '../components/Icons';
import BackGroundFeedBack from '../images/feedback/background-feedback.png';
import Background from '../images/feedback/background.png';
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
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-20 relative">
          <div className="flex items-center justify-between">
            {/* Nút Prev */}
            <NavButton><ArrowLeft /></NavButton>

            {/* List Logo - Cần dùng Grid hoặc Flex */}
            <div className="flex-1 flex justify-around items-center gap-8 overflow-hidden px-8">
              {partners.map((p) => (
                <img 
                  key={p.id} 
                  src={p.logo} 
                  alt={p.name} 
                  className="h-12 object-contain opacity-80 hover:opacity-100 transition" 
                />
              ))}
            </div>

             {/* Nút Next */}
             <NavButton><ArrowRight /></NavButton>
          </div>
        </div>


        {/* --- Phần 2: Feedback Cards (Quan trọng) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {feedbacks.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* 1. Lớp Background chứa ảnh bạn xuất ra */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={BackGroundFeedBack} 
                  alt="bg-card" 
                  className="w-full h-full object-fill drop-shadow-md" // Dùng object-fill để ảnh co giãn theo khung
                />
              </div>

              {/* 2. Lớp Nội dung đè lên trên */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                
                {/* Header Card: Avatar + Info */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Avatar - Dùng margin âm để đẩy nó bay lên trên border ảnh nền */}
                  <div className="-mt-16 bg-white p-1 rounded-full shadow-md"> 
                     <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                    />
                  </div>
                  
                  {/* Tên & Role */}
                  <div className="mt-2"> {/* Thêm margin top để bù lại do avatar bị đẩy lên */}
                    <h4 className="font-bold text-gray-800 text-lg">{item.name}</h4>
                    <span className="text-sm text-gray-500">{item.role}</span>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 text-amber-400 mb-4 pl-2">
                  {[...Array(5)].map((_, i) => (
                    <StartIcon key={i} className={`w-5 h-5 ${i < item.rating ? "text-amber-400" : "text-gray-300"}`} />
                  ))}
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