import AboutUsImg from '../images/about-us-img.png';
import Button from './Button';
import {ArrowRightIcon} from '../components/Icons';

const AboutSection = () => {
   return (
     <div class="relative w-full max-w-[1240px] mx-auto h-[500px] md:h-[565px] group">
       
       {/* Image */}
      <img 
        src={AboutUsImg} 
        alt="Background Outfiz" 
        class="absolute inset-0 w-full h-full object-contain z-0 bg-transparent"
      />


    {/* Content */}
  <div class="absolute z-10 right-0 md:right-[10%] top-[12%] w-full md:max-w-[450px] px-6 md:px-0">
    
    <div class="flex flex-col space-y-4">
      <h2 className="text-center text-[40px] font-bold text-brand">Về chúng tôi</h2>
      <h3 class="bg-gradient-highlight bg-clip-text text-transparent font-bold text-3xl uppercase tracking-wide mt-15">
        Outfiz Agency
      </h3>

      <p class="text-[#404040] leading-tight text-justify text-lg">
        Là agency tại Đà Nẵng chuyên sâu về Digital Marketing, quy tụ đội ngũ giàu kinh nghiệm, trẻ trung và đầy nhiệt huyết.
        Chúng tôi mang đến giải pháp marketing tổng thể – từ tư vấn chiến lược đến triển khai thực tế, tối ưu đa kênh và bám sát mục tiêu kinh doanh. Với mỗi ngân sách, OUTFIZ cam kết tạo ra hiệu quả tương xứng, giúp doanh nghiệp tăng trưởng bền vững và nổi bật trên thị trường.
      </p>

      <div>
        <a href="#">
          <Button variant="outline" className="w-[186px]">
            Tìm hiểu thêm
            <ArrowRightIcon />
          </Button>
        </a>
      </div>

    </div>
  </div>

</div>
   )
}

export default AboutSection;