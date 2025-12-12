import targetImg from '../images/feature/feature-target.png';
import socialImg from '../images/feature/feature-social.png';
import staffImg from '../images/feature/feature-staff.png';
import type { Feature } from '../types';

export const featureData: Feature[] = [
    {
    id: 1,
    title: "Chiến lược rõ ràng – Triển khai hiệu quả",
    description: "OUTFIZ giúp doanh nghiệp xây dựng kế hoạch marketing tinh gọn, đúng mục tiêu và phù hợp với ngân sách thực tế.",
    image: targetImg
  },
  {
    id: 2,
    title: "Đa kênh – Tối ưu chi phí",
    description: "Triển khai đồng bộ trên Facebook, TikTok, Google, Website,... giúp thương hiệu tiếp cận khách hàng ở mọi điểm chạm.",
    image: socialImg
  },
  {
    id: 3,
    title: "Đội ngũ chuyên nghiệp",
    description: "OUTFIZ theo sát từng giai đoạn phát triển thương hiệu cùng bạn, với team giàu kinh nghiệm, trẻ trung và linh hoạt.",
    image: staffImg
  }
]