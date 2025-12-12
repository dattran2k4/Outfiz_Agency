// import ProjectImg1 from '../images/project/project-1.png';
// import ProjectImg2 from '../images/project/project-2.png';
// import ProjectImg3 from '../images/project/project-3.png';
import ProjectImg4 from '../images/project/project-4.png';
import PartnerImg from '../images/project/partner.png';
import AimingImg from '../images/project/aiming.png';
import ResultImg1 from '../images/project/result-1.png';
import ResultImg2 from '../images/project/result-2.png';
import ResultImg3 from '../images/project/result-3.png';
import DefaultAvatar from '../images/feedback/default-avatar.png';
import type { Project } from '../types';

export const projectData : Project[] = [
  {id: 1,
  slug: "azdkp",
  
  title: "AZKDP Tool",
  tagline: "Thiết kế Website / LandingPage",
  image: ProjectImg4, 
  shortDescription: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",

  overview: {
      // Mảng chứa các đoạn văn (để dễ dàng map ra thẻ <p>)
      description: [
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
      ],

      // 3 hộp thông tin quan trọng nằm ngay dưới đoạn văn
      stats: [
        { label: "Thời gian hoàn thiện", value: "06 tháng" },
        { label: "Quy mô dự án", value: "10 nhân viên tham gia" },
        { label: "Hạng mục công việc", value: "Design, Mobile App, Web App" }
      ]
    },
  
  // Section: Thông tin khách hàng
  clientSection: {
    // 1. Đoạn text mô tả (Mới thêm)
    description: "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
    
    // 2. Các thông tin trong 3 cái box (Đã có, giữ nguyên)
    boxes: [
        { label: "Tên thương hiệu", value: "AZKDP tool" },
        { label: "Lĩnh vực hoạt động", value: "Công nghệ" },
        { label: "Thị trường mục tiêu", value: "Khách hàng trong nước và quốc tế" }
      ],

    // 3. Ảnh banner lớn phía dưới (Mới thêm)
    bannerImage: PartnerImg
  },
  // --- Section 1: Mục tiêu (Aiming) ---
  aiming: {
    content: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ],
    // Ảnh minh họa UI Kit bên phải (Screenshot 1)
    illustrationImage: AimingImg
  },

  // --- Section 2: Giải pháp (Solutions) ---
  solutions: {
    // Danh sách các cards giải pháp (Screenshot 2)
    items: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ]
  },

  // --- Section 3: Kết quả (Results) ---
  results: {
    // Phần mô tả kết quả (Screenshot 3 - phần chữ)
    description: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
    ],
    // Thư viện ảnh kết quả (Screenshot 3 - phần lưới ảnh)
    gallery: [
      ResultImg1,
      ResultImg2,
      ResultImg3,
      ResultImg1,
      ResultImg2,
      ResultImg3
    ]
  },
  reviews: {
      heading: "Đánh giá của khách hàng",
      avatar: DefaultAvatar,
      name: "Jenny Wilson",
      role: "Outfiz.vn",
      rating: 4,
      // Mảng chứa các đoạn văn review
      content: [
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần.",
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần."
      ]
    }
  },
  {id: 2,
  slug: "azdkp",
  
  title: "AZKDP Tool",
  tagline: "Thiết kế Website / LandingPage",
  image: ProjectImg4, 
  shortDescription: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",

  overview: {
      // Mảng chứa các đoạn văn (để dễ dàng map ra thẻ <p>)
      description: [
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
      ],

      // 3 hộp thông tin quan trọng nằm ngay dưới đoạn văn
      stats: [
        { label: "Thời gian hoàn thiện", value: "06 tháng" },
        { label: "Quy mô dự án", value: "10 nhân viên tham gia" },
        { label: "Hạng mục công việc", value: "Design, Mobile App, Web App" }
      ]
    },
  
  // Section: Thông tin khách hàng
  clientSection: {
    // 1. Đoạn text mô tả (Mới thêm)
    description: "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
    
    // 2. Các thông tin trong 3 cái box (Đã có, giữ nguyên)
    boxes: [
        { label: "Tên thương hiệu", value: "AZKDP tool" },
        { label: "Lĩnh vực hoạt động", value: "Công nghệ" },
        { label: "Thị trường mục tiêu", value: "Khách hàng trong nước và quốc tế" }
      ],

    // 3. Ảnh banner lớn phía dưới (Mới thêm)
    bannerImage: PartnerImg
  },
  // --- Section 1: Mục tiêu (Aiming) ---
  aiming: {
    content: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ],
    // Ảnh minh họa UI Kit bên phải (Screenshot 1)
    illustrationImage: AimingImg
  },

  // --- Section 2: Giải pháp (Solutions) ---
  solutions: {
    // Danh sách các cards giải pháp (Screenshot 2)
    items: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ]
  },

  // --- Section 3: Kết quả (Results) ---
  results: {
    // Phần mô tả kết quả (Screenshot 3 - phần chữ)
    description: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
    ],
    // Thư viện ảnh kết quả (Screenshot 3 - phần lưới ảnh)
    gallery: [
      ResultImg1,
      ResultImg2,
      ResultImg3,
      ResultImg1,
      ResultImg2,
      ResultImg3
    ]
  },
  reviews: {
      heading: "Đánh giá của khách hàng",
      avatar: DefaultAvatar,
      name: "Jenny Wilson",
      role: "Outfiz.vn",
      rating: 4,
      // Mảng chứa các đoạn văn review
      content: [
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần.",
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần."
      ]
    }
  },
  {id: 3,
  slug: "azdkp",
  
  title: "AZKDP Tool",
  tagline: "Thiết kế Website / LandingPage",
  image: ProjectImg4, 
  shortDescription: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",

  overview: {
      // Mảng chứa các đoạn văn (để dễ dàng map ra thẻ <p>)
      description: [
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
      ],

      // 3 hộp thông tin quan trọng nằm ngay dưới đoạn văn
      stats: [
        { label: "Thời gian hoàn thiện", value: "06 tháng" },
        { label: "Quy mô dự án", value: "10 nhân viên tham gia" },
        { label: "Hạng mục công việc", value: "Design, Mobile App, Web App" }
      ]
    },
  
  // Section: Thông tin khách hàng
  clientSection: {
    // 1. Đoạn text mô tả (Mới thêm)
    description: "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
    
    // 2. Các thông tin trong 3 cái box (Đã có, giữ nguyên)
    boxes: [
        { label: "Tên thương hiệu", value: "AZKDP tool" },
        { label: "Lĩnh vực hoạt động", value: "Công nghệ" },
        { label: "Thị trường mục tiêu", value: "Khách hàng trong nước và quốc tế" }
      ],

    // 3. Ảnh banner lớn phía dưới (Mới thêm)
    bannerImage: PartnerImg
  },
  // --- Section 1: Mục tiêu (Aiming) ---
  aiming: {
    content: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ],
    // Ảnh minh họa UI Kit bên phải (Screenshot 1)
    illustrationImage: AimingImg
  },

  // --- Section 2: Giải pháp (Solutions) ---
  solutions: {
    // Danh sách các cards giải pháp (Screenshot 2)
    items: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ]
  },

  // --- Section 3: Kết quả (Results) ---
  results: {
    // Phần mô tả kết quả (Screenshot 3 - phần chữ)
    description: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
    ],
    // Thư viện ảnh kết quả (Screenshot 3 - phần lưới ảnh)
    gallery: [
      ResultImg1,
      ResultImg2,
      ResultImg3,
      ResultImg1,
      ResultImg2,
      ResultImg3
    ]
  },
  reviews: {
      heading: "Đánh giá của khách hàng",
      avatar: DefaultAvatar,
      name: "Jenny Wilson",
      role: "Outfiz.vn",
      rating: 4,
      // Mảng chứa các đoạn văn review
      content: [
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần.",
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần."
      ]
    }
  },
  {id: 4,
  slug: "azdkp",
  
  title: "AZKDP Tool",
  tagline: "Thiết kế Website / LandingPage",
  image: ProjectImg4, 
  shortDescription: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",

  overview: {
      // Mảng chứa các đoạn văn (để dễ dàng map ra thẻ <p>)
      description: [
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
      ],

      // 3 hộp thông tin quan trọng nằm ngay dưới đoạn văn
      stats: [
        { label: "Thời gian hoàn thiện", value: "06 tháng" },
        { label: "Quy mô dự án", value: "10 nhân viên tham gia" },
        { label: "Hạng mục công việc", value: "Design, Mobile App, Web App" }
      ]
    },
  
  // Section: Thông tin khách hàng
  clientSection: {
    // 1. Đoạn text mô tả (Mới thêm)
    description: "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
    
    // 2. Các thông tin trong 3 cái box (Đã có, giữ nguyên)
    boxes: [
        { label: "Tên thương hiệu", value: "AZKDP tool" },
        { label: "Lĩnh vực hoạt động", value: "Công nghệ" },
        { label: "Thị trường mục tiêu", value: "Khách hàng trong nước và quốc tế" }
      ],

    // 3. Ảnh banner lớn phía dưới (Mới thêm)
    bannerImage: PartnerImg
  },
  // --- Section 1: Mục tiêu (Aiming) ---
  aiming: {
    content: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ],
    // Ảnh minh họa UI Kit bên phải (Screenshot 1)
    illustrationImage: AimingImg
  },

  // --- Section 2: Giải pháp (Solutions) ---
  solutions: {
    // Danh sách các cards giải pháp (Screenshot 2)
    items: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ]
  },

  // --- Section 3: Kết quả (Results) ---
  results: {
    // Phần mô tả kết quả (Screenshot 3 - phần chữ)
    description: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
    ],
    // Thư viện ảnh kết quả (Screenshot 3 - phần lưới ảnh)
    gallery: [
      ResultImg1,
      ResultImg2,
      ResultImg3,
      ResultImg1,
      ResultImg2,
      ResultImg3
    ]
  },
  reviews: {
      heading: "Đánh giá của khách hàng",
      avatar: DefaultAvatar,
      name: "Jenny Wilson",
      role: "Outfiz.vn",
      rating: 4,
      // Mảng chứa các đoạn văn review
      content: [
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần.",
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần."
      ]
    }
  },
  {id: 5,
  slug: "azdkp",
  
  title: "AZKDP Tool",
  tagline: "Thiết kế Website / LandingPage",
  image: ProjectImg4, 
  shortDescription: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",

  overview: {
      // Mảng chứa các đoạn văn (để dễ dàng map ra thẻ <p>)
      description: [
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
      ],

      // 3 hộp thông tin quan trọng nằm ngay dưới đoạn văn
      stats: [
        { label: "Thời gian hoàn thiện", value: "06 tháng" },
        { label: "Quy mô dự án", value: "10 nhân viên tham gia" },
        { label: "Hạng mục công việc", value: "Design, Mobile App, Web App" }
      ]
    },
  
  // Section: Thông tin khách hàng
  clientSection: {
    // 1. Đoạn text mô tả (Mới thêm)
    description: "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
    
    // 2. Các thông tin trong 3 cái box (Đã có, giữ nguyên)
    boxes: [
        { label: "Tên thương hiệu", value: "AZKDP tool" },
        { label: "Lĩnh vực hoạt động", value: "Công nghệ" },
        { label: "Thị trường mục tiêu", value: "Khách hàng trong nước và quốc tế" }
      ],

    // 3. Ảnh banner lớn phía dưới (Mới thêm)
    bannerImage: PartnerImg
  },
  // --- Section 1: Mục tiêu (Aiming) ---
  aiming: {
    content: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ],
    // Ảnh minh họa UI Kit bên phải (Screenshot 1)
    illustrationImage: AimingImg
  },

  // --- Section 2: Giải pháp (Solutions) ---
  solutions: {
    // Danh sách các cards giải pháp (Screenshot 2)
    items: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ]
  },

  // --- Section 3: Kết quả (Results) ---
  results: {
    // Phần mô tả kết quả (Screenshot 3 - phần chữ)
    description: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
    ],
    // Thư viện ảnh kết quả (Screenshot 3 - phần lưới ảnh)
    gallery: [
      ResultImg1,
      ResultImg2,
      ResultImg3,
      ResultImg1,
      ResultImg2,
      ResultImg3
    ]
  },
  reviews: {
      heading: "Đánh giá của khách hàng",
      avatar: DefaultAvatar,
      name: "Jenny Wilson",
      role: "Outfiz.vn",
      rating: 4,
      // Mảng chứa các đoạn văn review
      content: [
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần.",
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần."
      ]
    }
  },
  {id: 6,
  slug: "azdkp",
  
  title: "AZKDP Tool",
  tagline: "Thiết kế Website / LandingPage",
  image: ProjectImg4, 
  shortDescription: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",

  overview: {
      // Mảng chứa các đoạn văn (để dễ dàng map ra thẻ <p>)
      description: [
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
      ],

      // 3 hộp thông tin quan trọng nằm ngay dưới đoạn văn
      stats: [
        { label: "Thời gian hoàn thiện", value: "06 tháng" },
        { label: "Quy mô dự án", value: "10 nhân viên tham gia" },
        { label: "Hạng mục công việc", value: "Design, Mobile App, Web App" }
      ]
    },
  
  // Section: Thông tin khách hàng
  clientSection: {
    // 1. Đoạn text mô tả (Mới thêm)
    description: "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
    
    // 2. Các thông tin trong 3 cái box (Đã có, giữ nguyên)
    boxes: [
        { label: "Tên thương hiệu", value: "AZKDP tool" },
        { label: "Lĩnh vực hoạt động", value: "Công nghệ" },
        { label: "Thị trường mục tiêu", value: "Khách hàng trong nước và quốc tế" }
      ],

    // 3. Ảnh banner lớn phía dưới (Mới thêm)
    bannerImage: PartnerImg
  },
  // --- Section 1: Mục tiêu (Aiming) ---
  aiming: {
    content: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ],
    // Ảnh minh họa UI Kit bên phải (Screenshot 1)
    illustrationImage: AimingImg
  },

  // --- Section 2: Giải pháp (Solutions) ---
  solutions: {
    // Danh sách các cards giải pháp (Screenshot 2)
    items: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ]
  },

  // --- Section 3: Kết quả (Results) ---
  results: {
    // Phần mô tả kết quả (Screenshot 3 - phần chữ)
    description: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
    ],
    // Thư viện ảnh kết quả (Screenshot 3 - phần lưới ảnh)
    gallery: [
      ResultImg1,
      ResultImg2,
      ResultImg3,
      ResultImg1,
      ResultImg2,
      ResultImg3
    ]
  },
  reviews: {
      heading: "Đánh giá của khách hàng",
      avatar: DefaultAvatar,
      name: "Jenny Wilson",
      role: "Outfiz.vn",
      rating: 4,
      // Mảng chứa các đoạn văn review
      content: [
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần.",
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần."
      ]
    }
  },
  {id: 7,
  slug: "azdkp",
  
  title: "AZKDP Tool",
  tagline: "Thiết kế Website / LandingPage",
  image: ProjectImg4, 
  shortDescription: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",

  overview: {
      // Mảng chứa các đoạn văn (để dễ dàng map ra thẻ <p>)
      description: [
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
      ],

      // 3 hộp thông tin quan trọng nằm ngay dưới đoạn văn
      stats: [
        { label: "Thời gian hoàn thiện", value: "06 tháng" },
        { label: "Quy mô dự án", value: "10 nhân viên tham gia" },
        { label: "Hạng mục công việc", value: "Design, Mobile App, Web App" }
      ]
    },
  
  // Section: Thông tin khách hàng
  clientSection: {
    // 1. Đoạn text mô tả (Mới thêm)
    description: "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
    
    // 2. Các thông tin trong 3 cái box (Đã có, giữ nguyên)
    boxes: [
        { label: "Tên thương hiệu", value: "AZKDP tool" },
        { label: "Lĩnh vực hoạt động", value: "Công nghệ" },
        { label: "Thị trường mục tiêu", value: "Khách hàng trong nước và quốc tế" }
      ],

    // 3. Ảnh banner lớn phía dưới (Mới thêm)
    bannerImage: PartnerImg
  },
  // --- Section 1: Mục tiêu (Aiming) ---
  aiming: {
    content: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ],
    // Ảnh minh họa UI Kit bên phải (Screenshot 1)
    illustrationImage: AimingImg
  },

  // --- Section 2: Giải pháp (Solutions) ---
  solutions: {
    // Danh sách các cards giải pháp (Screenshot 2)
    items: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ]
  },

  // --- Section 3: Kết quả (Results) ---
  results: {
    // Phần mô tả kết quả (Screenshot 3 - phần chữ)
    description: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
    ],
    // Thư viện ảnh kết quả (Screenshot 3 - phần lưới ảnh)
    gallery: [
      ResultImg1,
      ResultImg2,
      ResultImg3,
      ResultImg1,
      ResultImg2,
      ResultImg3
    ]
  },
  reviews: {
      heading: "Đánh giá của khách hàng",
      avatar: DefaultAvatar,
      name: "Jenny Wilson",
      role: "Outfiz.vn",
      rating: 4,
      // Mảng chứa các đoạn văn review
      content: [
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần.",
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần."
      ]
    }
  },
  {id: 8,
  slug: "azdkp",
  
  title: "AZKDP Tool",
  tagline: "Thiết kế Website / LandingPage",
  image: ProjectImg4, 
  shortDescription: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",

  overview: {
      // Mảng chứa các đoạn văn (để dễ dàng map ra thẻ <p>)
      description: [
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
      ],

      // 3 hộp thông tin quan trọng nằm ngay dưới đoạn văn
      stats: [
        { label: "Thời gian hoàn thiện", value: "06 tháng" },
        { label: "Quy mô dự án", value: "10 nhân viên tham gia" },
        { label: "Hạng mục công việc", value: "Design, Mobile App, Web App" }
      ]
    },
  
  // Section: Thông tin khách hàng
  clientSection: {
    // 1. Đoạn text mô tả (Mới thêm)
    description: "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
    
    // 2. Các thông tin trong 3 cái box (Đã có, giữ nguyên)
    boxes: [
        { label: "Tên thương hiệu", value: "AZKDP tool" },
        { label: "Lĩnh vực hoạt động", value: "Công nghệ" },
        { label: "Thị trường mục tiêu", value: "Khách hàng trong nước và quốc tế" }
      ],

    // 3. Ảnh banner lớn phía dưới (Mới thêm)
    bannerImage: PartnerImg
  },
  // --- Section 1: Mục tiêu (Aiming) ---
  aiming: {
    content: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ],
    // Ảnh minh họa UI Kit bên phải (Screenshot 1)
    illustrationImage: AimingImg
  },

  // --- Section 2: Giải pháp (Solutions) ---
  solutions: {
    // Danh sách các cards giải pháp (Screenshot 2)
    items: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ]
  },

  // --- Section 3: Kết quả (Results) ---
  results: {
    // Phần mô tả kết quả (Screenshot 3 - phần chữ)
    description: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
    ],
    // Thư viện ảnh kết quả (Screenshot 3 - phần lưới ảnh)
    gallery: [
      ResultImg1,
      ResultImg2,
      ResultImg3,
      ResultImg1,
      ResultImg2,
      ResultImg3
    ]
  },
  reviews: {
      heading: "Đánh giá của khách hàng",
      avatar: DefaultAvatar,
      name: "Jenny Wilson",
      role: "Outfiz.vn",
      rating: 4,
      // Mảng chứa các đoạn văn review
      content: [
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần.",
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần."
      ]
    }
  },
  {id: 9,
  slug: "azdkp",
  
  title: "AZKDP Tool",
  tagline: "Thiết kế Website / LandingPage",
  image: ProjectImg4, 
  shortDescription: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",

  overview: {
      // Mảng chứa các đoạn văn (để dễ dàng map ra thẻ <p>)
      description: [
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
      ],

      // 3 hộp thông tin quan trọng nằm ngay dưới đoạn văn
      stats: [
        { label: "Thời gian hoàn thiện", value: "06 tháng" },
        { label: "Quy mô dự án", value: "10 nhân viên tham gia" },
        { label: "Hạng mục công việc", value: "Design, Mobile App, Web App" }
      ]
    },
  
  // Section: Thông tin khách hàng
  clientSection: {
    // 1. Đoạn text mô tả (Mới thêm)
    description: "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
    
    // 2. Các thông tin trong 3 cái box (Đã có, giữ nguyên)
    boxes: [
        { label: "Tên thương hiệu", value: "AZKDP tool" },
        { label: "Lĩnh vực hoạt động", value: "Công nghệ" },
        { label: "Thị trường mục tiêu", value: "Khách hàng trong nước và quốc tế" }
      ],

    // 3. Ảnh banner lớn phía dưới (Mới thêm)
    bannerImage: PartnerImg
  },
  // --- Section 1: Mục tiêu (Aiming) ---
  aiming: {
    content: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ],
    // Ảnh minh họa UI Kit bên phải (Screenshot 1)
    illustrationImage: AimingImg
  },

  // --- Section 2: Giải pháp (Solutions) ---
  solutions: {
    // Danh sách các cards giải pháp (Screenshot 2)
    items: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ]
  },

  // --- Section 3: Kết quả (Results) ---
  results: {
    // Phần mô tả kết quả (Screenshot 3 - phần chữ)
    description: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
    ],
    // Thư viện ảnh kết quả (Screenshot 3 - phần lưới ảnh)
    gallery: [
      ResultImg1,
      ResultImg2,
      ResultImg3,
      ResultImg1,
      ResultImg2,
      ResultImg3
    ]
  },
  reviews: {
      heading: "Đánh giá của khách hàng",
      avatar: DefaultAvatar,
      name: "Jenny Wilson",
      role: "Outfiz.vn",
      rating: 4,
      // Mảng chứa các đoạn văn review
      content: [
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần.",
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần."
      ]
    }
  },
  {id: 10,
  slug: "azdkp",
  
  title: "AZKDP Tool",
  tagline: "Thiết kế Website / LandingPage",
  image: ProjectImg4, 
  shortDescription: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",

  overview: {
      // Mảng chứa các đoạn văn (để dễ dàng map ra thẻ <p>)
      description: [
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
      ],

      // 3 hộp thông tin quan trọng nằm ngay dưới đoạn văn
      stats: [
        { label: "Thời gian hoàn thiện", value: "06 tháng" },
        { label: "Quy mô dự án", value: "10 nhân viên tham gia" },
        { label: "Hạng mục công việc", value: "Design, Mobile App, Web App" }
      ]
    },
  
  // Section: Thông tin khách hàng
  clientSection: {
    // 1. Đoạn text mô tả (Mới thêm)
    description: "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
    
    // 2. Các thông tin trong 3 cái box (Đã có, giữ nguyên)
    boxes: [
        { label: "Tên thương hiệu", value: "AZKDP tool" },
        { label: "Lĩnh vực hoạt động", value: "Công nghệ" },
        { label: "Thị trường mục tiêu", value: "Khách hàng trong nước và quốc tế" }
      ],

    // 3. Ảnh banner lớn phía dưới (Mới thêm)
    bannerImage: PartnerImg
  },
  // --- Section 1: Mục tiêu (Aiming) ---
  aiming: {
    content: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ],
    // Ảnh minh họa UI Kit bên phải (Screenshot 1)
    illustrationImage: AimingImg
  },

  // --- Section 2: Giải pháp (Solutions) ---
  solutions: {
    // Danh sách các cards giải pháp (Screenshot 2)
    items: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ]
  },

  // --- Section 3: Kết quả (Results) ---
  results: {
    // Phần mô tả kết quả (Screenshot 3 - phần chữ)
    description: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
    ],
    // Thư viện ảnh kết quả (Screenshot 3 - phần lưới ảnh)
    gallery: [
      ResultImg1,
      ResultImg2,
      ResultImg3,
      ResultImg1,
      ResultImg2,
      ResultImg3
    ]
  },
  reviews: {
      heading: "Đánh giá của khách hàng",
      avatar: DefaultAvatar,
      name: "Jenny Wilson",
      role: "Outfiz.vn",
      rating: 4,
      // Mảng chứa các đoạn văn review
      content: [
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần.",
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần."
      ]
    }
  },
  {id: 11,
  slug: "azdkp",
  
  title: "AZKDP Tool",
  tagline: "Thiết kế Website / LandingPage",
  image: ProjectImg4, 
  shortDescription: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",

  overview: {
      // Mảng chứa các đoạn văn (để dễ dàng map ra thẻ <p>)
      description: [
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
      ],

      // 3 hộp thông tin quan trọng nằm ngay dưới đoạn văn
      stats: [
        { label: "Thời gian hoàn thiện", value: "06 tháng" },
        { label: "Quy mô dự án", value: "10 nhân viên tham gia" },
        { label: "Hạng mục công việc", value: "Design, Mobile App, Web App" }
      ]
    },
  
  // Section: Thông tin khách hàng
  clientSection: {
    // 1. Đoạn text mô tả (Mới thêm)
    description: "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
    
    // 2. Các thông tin trong 3 cái box (Đã có, giữ nguyên)
    boxes: [
        { label: "Tên thương hiệu", value: "AZKDP tool" },
        { label: "Lĩnh vực hoạt động", value: "Công nghệ" },
        { label: "Thị trường mục tiêu", value: "Khách hàng trong nước và quốc tế" }
      ],

    // 3. Ảnh banner lớn phía dưới (Mới thêm)
    bannerImage: PartnerImg
  },
  // --- Section 1: Mục tiêu (Aiming) ---
  aiming: {
    content: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ],
    // Ảnh minh họa UI Kit bên phải (Screenshot 1)
    illustrationImage: AimingImg
  },

  // --- Section 2: Giải pháp (Solutions) ---
  solutions: {
    // Danh sách các cards giải pháp (Screenshot 2)
    items: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ]
  },

  // --- Section 3: Kết quả (Results) ---
  results: {
    // Phần mô tả kết quả (Screenshot 3 - phần chữ)
    description: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
    ],
    // Thư viện ảnh kết quả (Screenshot 3 - phần lưới ảnh)
    gallery: [
      ResultImg1,
      ResultImg2,
      ResultImg3,
      ResultImg1,
      ResultImg2,
      ResultImg3
    ]
  },
  reviews: {
      heading: "Đánh giá của khách hàng",
      avatar: DefaultAvatar,
      name: "Jenny Wilson",
      role: "Outfiz.vn",
      rating: 4,
      // Mảng chứa các đoạn văn review
      content: [
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần.",
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần."
      ]
    }
  },
  {id: 12,
  slug: "azdkp",
  
  title: "AZKDP Tool",
  tagline: "Thiết kế Website / LandingPage",
  image: ProjectImg4, 
  shortDescription: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",

  overview: {
      // Mảng chứa các đoạn văn (để dễ dàng map ra thẻ <p>)
      description: [
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
      ],

      // 3 hộp thông tin quan trọng nằm ngay dưới đoạn văn
      stats: [
        { label: "Thời gian hoàn thiện", value: "06 tháng" },
        { label: "Quy mô dự án", value: "10 nhân viên tham gia" },
        { label: "Hạng mục công việc", value: "Design, Mobile App, Web App" }
      ]
    },
  
  // Section: Thông tin khách hàng
  clientSection: {
    // 1. Đoạn text mô tả (Mới thêm)
    description: "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
    
    // 2. Các thông tin trong 3 cái box (Đã có, giữ nguyên)
    boxes: [
        { label: "Tên thương hiệu", value: "AZKDP tool" },
        { label: "Lĩnh vực hoạt động", value: "Công nghệ" },
        { label: "Thị trường mục tiêu", value: "Khách hàng trong nước và quốc tế" }
      ],

    // 3. Ảnh banner lớn phía dưới (Mới thêm)
    bannerImage: PartnerImg
  },
  // --- Section 1: Mục tiêu (Aiming) ---
  aiming: {
    content: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ],
    // Ảnh minh họa UI Kit bên phải (Screenshot 1)
    illustrationImage: AimingImg
  },

  // --- Section 2: Giải pháp (Solutions) ---
  solutions: {
    // Danh sách các cards giải pháp (Screenshot 2)
    items: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ]
  },

  // --- Section 3: Kết quả (Results) ---
  results: {
    // Phần mô tả kết quả (Screenshot 3 - phần chữ)
    description: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
    ],
    // Thư viện ảnh kết quả (Screenshot 3 - phần lưới ảnh)
    gallery: [
      ResultImg1,
      ResultImg2,
      ResultImg3,
      ResultImg1,
      ResultImg2,
      ResultImg3
    ]
  },
  reviews: {
      heading: "Đánh giá của khách hàng",
      avatar: DefaultAvatar,
      name: "Jenny Wilson",
      role: "Outfiz.vn",
      rating: 4,
      // Mảng chứa các đoạn văn review
      content: [
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần.",
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần."
      ]
    }
  },
  {id: 13,
  slug: "azdkp",
  
  title: "AZKDP Tool",
  tagline: "Thiết kế Website / LandingPage",
  image: ProjectImg4, 
  shortDescription: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",

  overview: {
      // Mảng chứa các đoạn văn (để dễ dàng map ra thẻ <p>)
      description: [
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
      ],

      // 3 hộp thông tin quan trọng nằm ngay dưới đoạn văn
      stats: [
        { label: "Thời gian hoàn thiện", value: "06 tháng" },
        { label: "Quy mô dự án", value: "10 nhân viên tham gia" },
        { label: "Hạng mục công việc", value: "Design, Mobile App, Web App" }
      ]
    },
  
  // Section: Thông tin khách hàng
  clientSection: {
    // 1. Đoạn text mô tả (Mới thêm)
    description: "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
    
    // 2. Các thông tin trong 3 cái box (Đã có, giữ nguyên)
    boxes: [
        { label: "Tên thương hiệu", value: "AZKDP tool" },
        { label: "Lĩnh vực hoạt động", value: "Công nghệ" },
        { label: "Thị trường mục tiêu", value: "Khách hàng trong nước và quốc tế" }
      ],

    // 3. Ảnh banner lớn phía dưới (Mới thêm)
    bannerImage: PartnerImg
  },
  // --- Section 1: Mục tiêu (Aiming) ---
  aiming: {
    content: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ],
    // Ảnh minh họa UI Kit bên phải (Screenshot 1)
    illustrationImage: AimingImg
  },

  // --- Section 2: Giải pháp (Solutions) ---
  solutions: {
    // Danh sách các cards giải pháp (Screenshot 2)
    items: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ]
  },

  // --- Section 3: Kết quả (Results) ---
  results: {
    // Phần mô tả kết quả (Screenshot 3 - phần chữ)
    description: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
    ],
    // Thư viện ảnh kết quả (Screenshot 3 - phần lưới ảnh)
    gallery: [
      ResultImg1,
      ResultImg2,
      ResultImg3,
      ResultImg1,
      ResultImg2,
      ResultImg3
    ]
  },
  reviews: {
      heading: "Đánh giá của khách hàng",
      avatar: DefaultAvatar,
      name: "Jenny Wilson",
      role: "Outfiz.vn",
      rating: 4,
      // Mảng chứa các đoạn văn review
      content: [
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần.",
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần."
      ]
    }
  },
  {id: 14,
  slug: "azdkp",
  
  title: "AZKDP Tool",
  tagline: "Thiết kế Website / LandingPage",
  image: ProjectImg4, 
  shortDescription: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",

  overview: {
      // Mảng chứa các đoạn văn (để dễ dàng map ra thẻ <p>)
      description: [
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
      ],

      // 3 hộp thông tin quan trọng nằm ngay dưới đoạn văn
      stats: [
        { label: "Thời gian hoàn thiện", value: "06 tháng" },
        { label: "Quy mô dự án", value: "10 nhân viên tham gia" },
        { label: "Hạng mục công việc", value: "Design, Mobile App, Web App" }
      ]
    },
  
  // Section: Thông tin khách hàng
  clientSection: {
    // 1. Đoạn text mô tả (Mới thêm)
    description: "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
    
    // 2. Các thông tin trong 3 cái box (Đã có, giữ nguyên)
    boxes: [
        { label: "Tên thương hiệu", value: "AZKDP tool" },
        { label: "Lĩnh vực hoạt động", value: "Công nghệ" },
        { label: "Thị trường mục tiêu", value: "Khách hàng trong nước và quốc tế" }
      ],

    // 3. Ảnh banner lớn phía dưới (Mới thêm)
    bannerImage: PartnerImg
  },
  // --- Section 1: Mục tiêu (Aiming) ---
  aiming: {
    content: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ],
    // Ảnh minh họa UI Kit bên phải (Screenshot 1)
    illustrationImage: AimingImg
  },

  // --- Section 2: Giải pháp (Solutions) ---
  solutions: {
    // Danh sách các cards giải pháp (Screenshot 2)
    items: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ]
  },

  // --- Section 3: Kết quả (Results) ---
  results: {
    // Phần mô tả kết quả (Screenshot 3 - phần chữ)
    description: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
    ],
    // Thư viện ảnh kết quả (Screenshot 3 - phần lưới ảnh)
    gallery: [
      ResultImg1,
      ResultImg2,
      ResultImg3,
      ResultImg1,
      ResultImg2,
      ResultImg3
    ]
  },
  reviews: {
      heading: "Đánh giá của khách hàng",
      avatar: DefaultAvatar,
      name: "Jenny Wilson",
      role: "Outfiz.vn",
      rating: 4,
      // Mảng chứa các đoạn văn review
      content: [
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần.",
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần."
      ]
    }
  },
  {id: 15,
  slug: "azdkp",
  
  title: "AZKDP Tool",
  tagline: "Thiết kế Website / LandingPage",
  image: ProjectImg4, 
  shortDescription: "Dịch vụ quảng cáo đa nền tảng giúp tiếp cận khách hàng hiệu quả trên nhiều kênh cùng lúc.",

  overview: {
      // Mảng chứa các đoạn văn (để dễ dàng map ra thẻ <p>)
      description: [
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
        "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
      ],

      // 3 hộp thông tin quan trọng nằm ngay dưới đoạn văn
      stats: [
        { label: "Thời gian hoàn thiện", value: "06 tháng" },
        { label: "Quy mô dự án", value: "10 nhân viên tham gia" },
        { label: "Hạng mục công việc", value: "Design, Mobile App, Web App" }
      ]
    },
  
  // Section: Thông tin khách hàng
  clientSection: {
    // 1. Đoạn text mô tả (Mới thêm)
    description: "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
    
    // 2. Các thông tin trong 3 cái box (Đã có, giữ nguyên)
    boxes: [
        { label: "Tên thương hiệu", value: "AZKDP tool" },
        { label: "Lĩnh vực hoạt động", value: "Công nghệ" },
        { label: "Thị trường mục tiêu", value: "Khách hàng trong nước và quốc tế" }
      ],

    // 3. Ảnh banner lớn phía dưới (Mới thêm)
    bannerImage: PartnerImg
  },
  // --- Section 1: Mục tiêu (Aiming) ---
  aiming: {
    content: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ],
    // Ảnh minh họa UI Kit bên phải (Screenshot 1)
    illustrationImage: AimingImg
  },

  // --- Section 2: Giải pháp (Solutions) ---
  solutions: {
    // Danh sách các cards giải pháp (Screenshot 2)
    items: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự."
    ]
  },

  // --- Section 3: Kết quả (Results) ---
  results: {
    // Phần mô tả kết quả (Screenshot 3 - phần chữ)
    description: [
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất.",
      "Từ mong muốn phát triển một tiệm nail với hệ thống quản lý booking và nhân viên trực tuyến, OUTFIZ đã tạo ra thành công cho khách hàng - một hệ thống quản lý khách hàng và nhân sự. Đây là một hệ thống quản lý tiệm nail hiện đại với đầy đủ tính năng theo yêu cầu của khách hàng được sắp xếp một cách tối ưu nhất."
    ],
    // Thư viện ảnh kết quả (Screenshot 3 - phần lưới ảnh)
    gallery: [
      ResultImg1,
      ResultImg2,
      ResultImg3,
      ResultImg1,
      ResultImg2,
      ResultImg3
    ]
  },
  reviews: {
      heading: "Đánh giá của khách hàng",
      avatar: DefaultAvatar,
      name: "Jenny Wilson",
      role: "Outfiz.vn",
      rating: 4,
      // Mảng chứa các đoạn văn review
      content: [
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần.",
        "Outfiz Agency làm việc chuyên nghiệp, phản hồi nhanh và sáng tạo. Chiến dịch giúp chúng tôi tăng trưởng doanh số rõ rệt chỉ sau vài tuần."
      ]
    }
  },
]