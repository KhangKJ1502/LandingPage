export const SITE = {
  name: "Sunflower Marketing LLC",
  shortName: "Sunflower Marketing",
  tagline: "Giải pháp Digital Marketing toàn diện & chuẩn chuyển đổi cho doanh nghiệp tại Mỹ.",
  subtagline: "Đồng hành cùng chủ tiệm Nail Salon, Spa, Restaurant và Beauty Salon tại Mỹ bứt phá hiện diện số: Website chuẩn chuyển đổi, Chăm sóc Social Media, Quảng cáo đa kênh & Google Maps.",
  hotline: "+1 (307) 998-1364",
  hotlineHref: "tel:+13079981364",
  messengerHref: "https://www.facebook.com/messages/t/61594964864831",
  email: "hello@sunflowermarketing.com",
  address: "75 E 3rd St, Ste 7, Sheridan, WY 82801, USA",
};

export const NAV_LINKS = [
  { label: "Dịch vụ", href: "#services" },
  { label: "Dự án", href: "#portfolio" },
  { label: "So sánh giải pháp", href: "#comparison" },
  { label: "Bảng giá", href: "#pricing" },
  { label: "Tư vấn", href: "#contact" },
];

export interface PartnerBrand {
  name: string;
  category: string;
  location: string;
  service: string;
  image: string;
}

export const PARTNER_BRANDS: PartnerBrand[] = [
  {
    name: "Luxe Nail Lounge",
    category: "Nail Salon",
    location: "Houston, TX",
    service: "Social & Ads Combo",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=500&h=350&fit=crop&auto=format",
  },
  {
    name: "Serenity Day Spa & Wellness",
    category: "Spa & Wellness",
    location: "Dallas, TX",
    service: "Website & SEO",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=350&fit=crop&auto=format",
  },
  {
    name: "Golden Lotus Bistro",
    category: "Restaurant",
    location: "San Jose, CA",
    service: "Google Maps & Local SEO",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=350&fit=crop&auto=format",
  },
  {
    name: "Glow & Co. Beauty Salon",
    category: "Beauty Salon",
    location: "Miami, FL",
    service: "Facebook & Instagram Ads",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=350&fit=crop&auto=format",
  },
  {
    name: "Opulence Nail & Lash Bar",
    category: "Nail Salon",
    location: "Garden Grove, CA",
    service: "Social Media Management",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=500&h=350&fit=crop&auto=format",
  },
  {
    name: "Bella Rose Aesthetic & Spa",
    category: "Spa & Beauty",
    location: "Atlanta, GA",
    service: "Google Ads & Website",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=350&fit=crop&auto=format",
  },
];

export const TRUST_STATS = [
  {
    value: 100,
    suffix: "%",
    label: "Chính chủ tài sản số",
    note: "Chủ tiệm sở hữu 100% website, tài khoản Ads & Fanpage",
    emerald: true,
  },
  {
    value: 4,
    suffix: " Múi giờ",
    label: "Hỗ trợ chuẩn giờ Mỹ",
    note: "Linh hoạt phục vụ theo giờ EST, CST, MST, PST",
    emerald: false,
  },
  {
    value: 2,
    suffix: " Ngôn ngữ",
    label: "Song ngữ Anh - Việt",
    note: "Trao đổi tiếng Việt thuận tiện & Bài viết chuẩn tiếng Anh",
    emerald: false,
  },
];

export const SERVICES = [
  {
    id: "review",
    badge: "Reputation & Trust",
    label: "Google Maps & Quản Lý Đánh Giá",
    title: "Quản Lý Đánh Giá Google & Tối Ưu Local SEO",
    description:
      "Tối ưu hồ sơ Google Business Profile chuẩn SEO, hỗ trợ thiết lập quy trình thu thập phản hồi tích cực từ khách hàng và xử lý chuyên nghiệp các đánh giá tiêu cực.",
    deliverables: [
      "Tối ưu chuẩn SEO hồ sơ Google Business Profile địa phương",
      "Triển khai thẻ chạm & mã QR Code lấy phản hồi nhanh tại quầy",
      "Kịch bản chăm sóc và phản hồi đánh giá khách hàng chuyên nghiệp",
      "Hỗ trợ khiếu nại và kháng nghị đánh giá vi phạm chính sách Google",
    ],
    outcome: "Xây dựng uy tín vững chắc trên Google Maps để khách quanh tiệm dễ dàng tin chọn.",
    cta: "Nhận tư vấn miễn phí",
    href: "#contact",
  },
  {
    id: "website",
    badge: "Digital Flagship",
    label: "Thiết Kế Website Chuẩn Chuyển Đổi",
    title: "Thiết Kế Website Chuẩn Phong Cách Mỹ",
    description:
      "Website tốc độ cao, phong cách Light Luxury sang trọng, tích hợp bảng giá dịch vụ rõ ràng, hệ thống đặt lịch hẹn online 24/7 và tối ưu hoàn hảo trên điện thoại.",
    deliverables: [
      "Giao diện độc quyền thiết kế riêng cho ngành Nail, Spa, Salon, F&B",
      "Hệ thống đặt lịch hẹn (Booking) và liên hệ nhanh không ma sát",
      "Tối ưu tốc độ tải trang dưới 1.2s chuẩn Google Core Web Vitals",
      "Bàn giao trọn gói 100% mã nguồn kèm hướng dẫn sử dụng chi tiết",
    ],
    outcome: "Khách hàng dễ dàng xem menu và chủ động đặt hẹn trực tuyến mọi lúc mọi nơi.",
    cta: "Nhận tư vấn miễn phí",
    href: "#contact",
  },
  {
    id: "social",
    badge: "Brand Identity",
    label: "Social Media Management",
    title: "Quản Lý & Chăm Sóc Mạng Xã Hội",
    description:
      "Xây dựng và duy trì Fanpage Facebook & Instagram chuyên nghiệp, sáng tạo nội dung đều đặn, thiết kế hình ảnh mẫu nail, không gian spa, món ăn bắt mắt.",
    deliverables: [
      "Lên lịch bài đăng định kỳ hàng tuần với nội dung hấp dẫn",
      "Thiết kế hình ảnh và video ngắn (Reels) đúng gu thẩm mỹ tại Mỹ",
      "Biên tập nội dung song ngữ Anh - Việt hoặc tiếng Anh chuẩn bản địa",
      "Tối ưu thông tin tiểu sử, đường dẫn đặt hẹn và cập nhật story thường xuyên",
    ],
    outcome: "Trang mạng xã hội luôn tươi mới, chuyên nghiệp và tạo thiện cảm lớn với khách hàng.",
    cta: "Nhận tư vấn miễn phí",
    href: "#contact",
  },
  {
    id: "meta_ads",
    badge: "Targeted Reach",
    label: "Facebook & Instagram Ads",
    title: "Quảng Cáo Facebook & Instagram Địa Phương",
    description:
      "Chiến dịch quảng cáo nhắm mục tiêu chuẩn xác vào cư dân trong bán kính 3-10 dặm quanh tiệm, thu hút khách hàng mới nhắn tin và đặt hẹn.",
    deliverables: [
      "Cài đặt và tối ưu chiến dịch quảng cáo nhắm vị trí bán kính quanh tiệm",
      "Thiết kế mẫu quảng cáo thu hút (hình ảnh ưu đãi, video dịch vụ nổi bật)",
      "Nhắm đúng tệp khách hàng tiềm năng theo độ tuổi, sở thích và thói quen làm đẹp",
      "Báo cáo chi tiêu và kết quả minh bạch trực tiếp từ tài khoản Meta Ads",
    ],
    outcome: "Tiếp cận hàng nghìn khách hàng tiềm năng đang sinh sống và làm việc quanh tiệm mỗi tuần.",
    cta: "Nhận tư vấn miễn phí",
    href: "#contact",
  },
  {
    id: "google_ads",
    badge: "High Intent",
    label: "Google Ads",
    title: "Quảng Cáo Tìm Kiếm Google Search & Maps",
    description:
      "Hiển thị ngay đầu trang tìm kiếm Google và trên Google Maps khi khách hàng địa phương gõ tìm kiếm các từ khóa có nhu cầu cao như 'nail salon near me', 'best spa'.",
    deliverables: [
      "Nghiên cứu bộ từ khóa tìm kiếm có ý định đặt hẹn cao nhất tại khu vực",
      "Cài đặt chiến dịch quảng cáo tìm kiếm và nút gọi điện trực tiếp",
      "Kiểm soát chi phí mỗi lượt nhấp (CPC) để tối ưu hóa ngân sách thực tế",
      "Đo lường cuộc gọi, lượt nhấp chỉ đường và lượt gửi yêu cầu đặt hẹn",
    ],
    outcome: "Đón đầu khách hàng đang có nhu cầu làm đẹp và sẵn sàng ghé tiệm ngay lập tức.",
    cta: "Nhận tư vấn miễn phí",
    href: "#contact",
  },
  {
    id: "seo",
    badge: "Organic Search",
    label: "SEO & Local SEO",
    title: "SEO Địa Phương & Tối Ưu Google Maps",
    description:
      "Chiến lược tối ưu hóa công cụ tìm kiếm dài hạn, nâng cao độ hiển thị của cơ sở trên Google Local Pack và Google Search mà không bị phụ thuộc hoàn toàn vào quảng cáo trả phí.",
    deliverables: [
      "Tối ưu từ khóa tìm kiếm địa phương gắn liền với tên thành phố và bang",
      "Đồng bộ chuẩn hóa thông tin NAP (Name, Address, Phone) trên các danh bạ Mỹ",
      "Xây dựng liên kết và trích dẫn địa phương (Local Citations) uy tín",
      "Tối ưu cấu trúc trang web thân thiện với thuật toán tìm kiếm của Google",
    ],
    outcome: "Duy trì thứ hạng hiển thị nổi bật và thu hút khách hàng tự nhiên bền vững lâu dài.",
    cta: "Nhận tư vấn miễn phí",
    href: "#contact",
  },
  {
    id: "combo",
    badge: "Best Value",
    label: "Social + Ads Combo",
    title: "Combo Chăm Sóc Social & Chạy Ads Đa Kênh",
    description:
      "Giải pháp tiếp thị toàn diện kết hợp giữa Quản lý nội dung mạng xã hội chuyên nghiệp và Chiến dịch chạy quảng cáo nhắm chọn, mang lại hiệu quả kép với chi phí tối ưu.",
    deliverables: [
      "Bao gồm toàn bộ quyền lợi của gói Social Media Management",
      "Vận hành và tối ưu liên tục chiến dịch quảng cáo Facebook & Instagram Ads",
      "Đồng bộ hóa hình ảnh bài đăng thường ngày với các chương trình khuyến mãi",
      "Hỗ trợ linh hoạt điều chỉnh ngân sách và chiến lược theo mùa lễ hội tại Mỹ",
    ],
    outcome: "Vừa xây dựng hình ảnh thương hiệu chỉn chu vừa chủ động kéo dòng khách mới về tiệm.",
    cta: "Nhận tư vấn miễn phí",
    href: "#contact",
  },
];

export interface IndustryScorecard {
  id: string;
  name: string;
  businessName: string;
  healthScore: number;
  reviewedDate: string;
  summaryQuote: string;
  metrics: {
    name: string;
    score: number;
    status: string;
    implication: string;
    color: "emerald" | "amber" | "blue";
  }[];
  keyOpportunity: string;
}

export const AUDIT_INDUSTRIES: IndustryScorecard[] = [
  {
    id: "nail",
    name: "Nail Salon",
    businessName: "Luxe Nail Lounge - Houston, TX",
    healthScore: 82,
    reviewedDate: "Cập nhật Q3/2026",
    summaryQuote: "Cơ sở có không gian hiện đại nhưng chưa khai thác tối đa trang đặt hẹn online và quảng cáo nhắm chọn địa phương.",
    metrics: [
      {
        name: "Hiện diện Google Maps",
        score: 85,
        status: "Nền tảng tốt",
        implication: "Cần tăng mật độ hình ảnh mẫu móng thực tế và duy trì review tích cực",
        color: "emerald",
      },
      {
        name: "Website & Đặt lịch hẹn",
        score: 65,
        status: "Cần nâng cấp",
        implication: "Chưa có trang đặt hẹn 1 chạm mượt mà trên điện thoại",
        color: "amber",
      },
      {
        name: "Social Media & Hình ảnh",
        score: 72,
        status: "Đang phát triển",
        implication: "Bài đăng chưa đều đặn, cần bổ sung video ngắn chuẩn phong cách Mỹ",
        color: "blue",
      },
      {
        name: "Chiến dịch Quảng cáo Ads",
        score: 60,
        status: "Chưa khai thác",
        implication: "Chưa chạy quảng cáo nhắm chọn khách trong bán kính 5 dặm quanh tiệm",
        color: "amber",
      },
    ],
    keyOpportunity: "Tích hợp website đặt lịch online kết hợp chạy Facebook Ads khu vực lân cận để lấp đầy khung giờ vắng khách.",
  },
  {
    id: "spa",
    name: "Spa & Wellness",
    businessName: "Serenity Day Spa - Dallas, TX",
    healthScore: 84,
    reviewedDate: "Cập nhật Q3/2026",
    summaryQuote: "Dịch vụ chất lượng cao nhưng khách khó tra cứu bảng giá chi tiết trên di động trước khi quyết định đặt lịch.",
    metrics: [
      {
        name: "Hiện diện Google Maps",
        score: 80,
        status: "Khá tốt",
        implication: "Cần tối ưu danh mục từ khóa trị liệu chuyên sâu trên Google Business",
        color: "emerald",
      },
      {
        name: "Website & Trải nghiệm",
        score: 88,
        status: "Rất tốt",
        implication: "Giao diện thanh lịch, bảng giá menu rõ ràng và hình ảnh tinh tế",
        color: "emerald",
      },
      {
        name: "Local SEO & Thứ hạng",
        score: 70,
        status: "Cần tối ưu",
        implication: "Cần tăng cường trích dẫn địa phương và tối ưu thông tin hiển thị Google Maps",
        color: "blue",
      },
      {
        name: "Quảng cáo Google Search",
        score: 64,
        status: "Tiềm năng lớn",
        implication: "Chưa chạy từ khóa tìm kiếm khi khách hàng gõ 'best spa near me'",
        color: "amber",
      },
    ],
    keyOpportunity: "Triển khai chiến dịch Google Ads đón đầu lượt tìm kiếm địa phương kết hợp trang menu dịch vụ trực quan.",
  },
  {
    id: "beauty",
    name: "Beauty Salon",
    businessName: "Glow & Co. Beauty Salon - Miami, FL",
    healthScore: 86,
    reviewedDate: "Cập nhật Q3/2026",
    summaryQuote: "Đã có phong cách nhận diện đẹp, cần đẩy mạnh kênh mạng xã hội và bảo vệ uy tín trước đánh giá tiêu cực.",
    metrics: [
      {
        name: "Hiện diện & Uy tín",
        score: 90,
        status: "Rất uy tín",
        implication: "Hồ sơ hiển thị rõ ràng, cần cơ chế gom review tự nhiên sau dịch vụ",
        color: "emerald",
      },
      {
        name: "Social Media & Tương tác",
        score: 86,
        status: "Chuyên nghiệp",
        implication: "Hình ảnh trước/sau chất lượng cao, bài đăng thu hút tương tác tốt",
        color: "emerald",
      },
      {
        name: "Tối ưu Quảng cáo Ads",
        score: 74,
        status: "Cần mở rộng",
        implication: "Ngân sách quảng cáo chưa phân bổ đều giữa Meta Ads và Google",
        color: "blue",
      },
      {
        name: "Tốc độ & Trải nghiệm Web",
        score: 85,
        status: "Mượt mà",
        implication: "Tốc độ tải nhanh trên cả iOS và Android, hiển thị sắc nét",
        color: "emerald",
      },
    ],
    keyOpportunity: "Duy trì chăm sóc Fanpage/Instagram định kỳ và chạy quảng cáo khuyến mãi dịch vụ chủ lực theo mùa.",
  },
  {
    id: "restaurant",
    name: "Restaurant",
    businessName: "Golden Lotus Bistro - San Jose, CA",
    healthScore: 79,
    reviewedDate: "Cập nhật Q3/2026",
    summaryQuote: "Món ăn ngon và view đẹp nhưng thực khách khó xem thực đơn trên điện thoại và thiếu nút đặt bàn nhanh.",
    metrics: [
      {
        name: "Hiện diện Google Maps",
        score: 88,
        status: "Vị trí đẹp",
        implication: "Được khách hàng tìm kiếm thường xuyên trên Google Maps",
        color: "emerald",
      },
      {
        name: "Website & Menu di động",
        score: 62,
        status: "Cần làm mới",
        implication: "Menu hiện tại là file ảnh/PDF khó đọc, cần trang web tra cứu trực quan",
        color: "amber",
      },
      {
        name: "Hình ảnh & Mạng xã hội",
        score: 75,
        status: "Đang phát triển",
        implication: "Cần cập nhật hình ảnh món ăn sắc nét và video giới thiệu không gian",
        color: "blue",
      },
      {
        name: "Chỉ đường & Đặt bàn trước",
        score: 78,
        status: "Cần tích hợp",
        implication: "Cần tối ưu nút gọi đặt bàn và chỉ đường nhanh trên trang chủ",
        color: "blue",
      },
    ],
    keyOpportunity: "Xây dựng website chuẩn di động hiển thị menu món ăn sắc nét kèm nút chỉ đường và đặt bàn 1 chạm.",
  },
];

export const SERVICE_COMPARISON = {
  col1: {
    title: "Tối Ưu & Quản Lý Kênh Hiện Tại",
    subtitle: "Dành cho cơ sở đã có website, Fanpage hoặc Google Maps nhưng chưa đạt hiệu quả mong muốn",
    tag: "Tối ưu chi phí & Triển khai nhanh",
    bestFor: "Cơ sở đã hoạt động, muốn làm mới hình ảnh mạng xã hội, sửa lỗi website và đẩy mạnh quảng cáo địa phương.",
    startingPoint: "Khảo sát & đánh giá toàn diện hồ sơ Google Maps, rà soát kênh Fanpage và kế hoạch quảng cáo hiện có.",
    coreWork: [
      "Tối ưu lại thông tin Google Business Profile chuẩn SEO",
      "Chăm sóc lại trang Fanpage & Instagram chuyên nghiệp",
      "Thiết lập chiến dịch quảng cáo nhắm trúng khách hàng quanh tiệm",
      "Sửa lỗi UX/tốc độ website và bổ sung nút gọi/đặt lịch nhanh",
    ],
    timeline: "5 – 7 ngày làm việc",
    deliverable: "Kênh truyền thông được làm mới + Chiến dịch quảng cáo đã kích hoạt + Báo cáo minh bạch.",
    cta: "Nhận tư vấn miễn phí",
    href: "#contact",
  },
  col2: {
    title: "Thiết Kế & Xây Dựng Trọn Gói Mới",
    subtitle: "Dành cho cơ sở mới mở, tái định vị thương hiệu hoặc muốn dẫn đầu thị trường khu vực",
    tag: "Giải pháp toàn diện & Chuẩn Mỹ",
    bestFor: "Chủ tiệm muốn có hệ thống hiện diện số chuyên nghiệp từ đầu: Website cao cấp, đồng bộ Social và chạy Ads bài bản.",
    startingPoint: "Tư vấn định vị thương hiệu, thiết kế phong cách giao diện và lên kế hoạch marketing đa kênh.",
    coreWork: [
      "Thiết kế Website chuẩn Light Luxury độc quyền kèm hệ thống Booking",
      "Xây dựng và chuẩn hóa nhận diện Fanpage, Instagram, Google Maps",
      "Lên chiến lược nội dung bài đăng và kế hoạch chạy quảng cáo ra mắt",
      "Bàn giao trọn gói quyền sở hữu 100% tài sản số cho chủ tiệm",
    ],
    timeline: "10 – 14 ngày làm việc",
    deliverable: "Website hoàn chỉnh cao cấp + Bộ kênh truyền thông đồng bộ + Bàn giao 100% quyền quản trị.",
    cta: "Nhận tư vấn miễn phí",
    href: "#contact",
  },
};

export const PORTFOLIO_ITEMS = [
  {
    category: "Nail Salon",
    name: "Luxe Nail Lounge",
    location: "Houston, TX, USA",
    service: "Social + Ads Combo & Google Maps",
    result: "Triển khai trọn gói • Chuẩn phong cách tiệm Nail tại Mỹ",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&h=600&fit=crop&auto=format",
    alt: "Không gian tiệm Luxe Nail Lounge phong cách hiện đại tại Mỹ",
    metrics: {
      ratingBefore: "Thiếu nhận diện",
      ratingAfter: "Social + Ads Combo",
      reviewGrowth: "Bán kính 5 dặm quanh tiệm",
      leadGrowth: "100% Chính chủ Ads",
    },
    beforeNote: "Hình ảnh mạng xã hội rời rạc, chưa có chiến dịch quảng cáo thu hút khách quanh tiệm.",
    afterNote: "Đồng bộ Fanpage, Instagram và chạy quảng cáo bán kính 5 dặm thu hút khách mới mỗi tuần.",
  },
  {
    category: "Spa & Wellness",
    name: "Serenity Day Spa",
    location: "Dallas, TX, USA",
    service: "Thiết Kế Website Chuẩn Chuyển Đổi & SEO",
    result: "Triển khai trọn gói • Giao diện Light Luxury & Booking Online",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop&auto=format",
    alt: "Không gian spa thư giãn Serenity Spa tại Dallas, Mỹ",
    metrics: {
      ratingBefore: "Chưa có website",
      ratingAfter: "Website & Local SEO",
      reviewGrowth: "Đặt lịch online 24/7",
      leadGrowth: "100% Mã nguồn riêng",
    },
    beforeNote: "Khách phải nhắn tin hỏi giá và thời gian, dễ rớt khách khi nhân viên bận phục vụ.",
    afterNote: "Website sang trọng tích hợp menu dịch vụ rõ ràng, khách chủ động đặt hẹn trực tuyến 24/7.",
  },
  {
    category: "Restaurant",
    name: "Golden Lotus Bistro",
    location: "San Jose, CA, USA",
    service: "Google Maps, Local SEO & Social Ads",
    result: "Triển khai trọn gói • Định vị thương hiệu & Menu trực quan",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&auto=format",
    alt: "Không gian nhà hàng ẩm thực ấm cúng Golden Lotus Bistro tại Mỹ",
    metrics: {
      ratingBefore: "Khó tìm trên Maps",
      ratingAfter: "Google Maps & Menu Web",
      reviewGrowth: "Chỉ đường & Xem menu",
      leadGrowth: "Hồ sơ Maps chuẩn SEO",
    },
    beforeNote: "Menu chỉ có dạng file scan mờ, khách tìm kiếm quán ăn quanh khu vực khó tiếp cận.",
    afterNote: "Website mini tra cứu menu món ăn sắc nét, liên kết nút chỉ đường và đặt bàn nhanh chóng.",
  },
  {
    category: "Beauty Salon",
    name: "Glow & Co. Beauty Salon",
    location: "Miami, FL, USA",
    service: "Facebook & Instagram Ads & Social Management",
    result: "Triển khai trọn gói • Hình ảnh cao cấp & Quảng cáo nhắm chọn",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop&auto=format",
    alt: "Không gian Beauty Salon hiện đại Glow & Co tại Miami, Mỹ",
    metrics: {
      ratingBefore: "Ít tương tác",
      ratingAfter: "Facebook & Instagram Ads",
      reviewGrowth: "Tệp khách nữ địa phương",
      leadGrowth: "Báo cáo chi phí minh bạch",
    },
    beforeNote: "Trang Instagram lâu ngày không cập nhật bài mới, chưa khai thác kênh quảng cáo.",
    afterNote: "Bài đăng hình ảnh chất lượng cao định kỳ, chiến dịch quảng cáo tiếp cận tệp khách hàng yêu làm đẹp.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Sunflower Marketing LLC hỗ trợ rất nhiệt tình và thấu hiểu đặc thù tiệm nail tại Mỹ. Đội ngũ giao tiếp tiếng Việt rất tiện cho mình trao đổi, các bài đăng và quảng cáo tiếng Anh thì chuẩn chỉnh, chuyên nghiệp. Rất yên tâm khi hợp tác lâu dài!",
    author: "Chị Jennifer Nguyen",
    role: "Chủ sáng lập tiệm",
    business: "Luxe Nail Lounge",
    location: "Houston, TX, USA",
    stars: 5,
    highlight: "Giao tiếp tiếng Việt thuận tiện & Bài viết chuẩn tiếng Anh",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&auto=format",
  },
  {
    quote:
      "Website mới mang phong cách nhẹ nhàng, sang trọng rất đúng gu khách Mỹ. Khách khen website đẹp, dễ xem menu giá và đặt hẹn online nhanh chóng. Tiệm không còn bị quá tải tin nhắn mà khách vẫn đặt lịch đều đặn.",
    author: "Anh Kevin Tran",
    role: "Giám đốc điều hành",
    business: "Serenity Day Spa",
    location: "Dallas, TX, USA",
    stars: 5,
    highlight: "Website sang trọng & Tích hợp đặt lịch hẹn 24/7",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format",
  },
  {
    quote:
      "Rất hài lòng với sự minh bạch trong việc quản lý tài khoản quảng cáo. Chi phí chạy Ads rõ ràng từng đồng, có báo cáo chi tiết hàng tuần và hỗ trợ chỉnh sửa hình ảnh rất nhanh theo giờ của bang mình.",
    author: "Chị Christine Le",
    role: "Chủ cơ sở",
    business: "Glow & Co. Beauty Salon",
    location: "Miami, FL, USA",
    stars: 5,
    highlight: "Minh bạch tài khoản quảng cáo & Hỗ trợ chuẩn giờ Mỹ",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&auto=format",
  },
  {
    quote:
      "Từ khi làm lại menu trực quan trên trang web và tối ưu chỉ đường trên Google Maps, thực khách đến quán rất thuận tiện. Đội ngũ luôn tận tâm, phản hồi nhanh và bàn giao đầy đủ quyền quản trị cho chủ quán.",
    author: "Anh David Vu",
    role: "Chủ nhà hàng",
    business: "Golden Lotus Bistro",
    location: "San Jose, CA, USA",
    stars: 5,
    highlight: "Tối ưu tìm kiếm địa phương & Menu món trực quan",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format",
  },
];

export const WHY_US = [
  {
    icon: "ShieldCheck",
    title: "Chính chủ & Minh bạch 100%",
    description: "Chủ tiệm sở hữu 100% tài khoản quảng cáo, Fanpage và mã nguồn website. Không phụ phí ẩn, chi phí quảng cáo thanh toán trực tiếp cho Meta và Google.",
  },
  {
    icon: "Users",
    title: "Am hiểu thị trường tại Mỹ",
    description: "Đội ngũ hiểu rõ văn hóa và thói quen làm đẹp của khách hàng bản địa tại Mỹ; đồng thời hỗ trợ giao tiếp tiếng Việt thuận tiện cho chủ tiệm.",
  },
  {
    icon: "Clock",
    title: "Hỗ trợ theo múi giờ Mỹ",
    description: "Làm việc linh hoạt theo các múi giờ EST, CST, MST, PST. Hỗ trợ xử lý yêu cầu nhanh chóng ngay trong ngày làm việc.",
  },
  {
    icon: "TrendingUp",
    title: "Giải pháp toàn diện A-Z",
    description: "Từ thiết kế website, quản lý Fanpage/Instagram, chạy quảng cáo Meta & Google Ads đến chăm sóc Google Maps — tất cả trong một đầu mối chuyên nghiệp.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Khảo sát & Tư vấn",
    description: "Lắng nghe nhu cầu cụ thể của tiệm, khảo sát hiện trạng Google Maps, Fanpage hoặc website và đề xuất giải pháp phù hợp nhất.",
  },
  {
    step: "02",
    title: "Kế hoạch & Thống nhất",
    description: "Xây dựng kế hoạch chi tiết: định hướng nội dung bài đăng, thiết lập tệp khách quảng cáo hoặc phác thảo giao diện website.",
  },
  {
    step: "03",
    title: "Triển khai & Vận hành",
    description: "Tiến hành đăng bài định kỳ, bật chiến dịch quảng cáo nhắm chọn quanh tiệm hoặc hoàn thiện lập trình website chuẩn di động.",
  },
  {
    step: "04",
    title: "Báo cáo & Tối ưu",
    description: "Gửi báo cáo định kỳ minh bạch về lượt tương tác, chi phí quảng cáo và lượt liên hệ, liên tục tối ưu để mang lại hiệu quả cao nhất.",
  },
];

export const PRICING_PLANS = {
  socialAndAds: [
    {
      id: "social-basic",
      name: "Social Basic",
      subtitle: "Duy trì hiện diện thương hiệu trên mạng xã hội",
      price: "$79",
      period: "/tháng",
      desc: "Phù hợp cho tiệm muốn duy trì hình ảnh Fanpage & Instagram chỉn chu, bài đăng định kỳ cơ bản.",
      features: [
        "Chăm sóc Fanpage Facebook & Instagram",
        "8 - 10 bài đăng thiết kế chất lượng cao mỗi tháng",
        "Viết nội dung thu hút song ngữ Anh - Việt hoặc tiếng Anh",
        "Cập nhật thông tin dịch vụ, giờ mở cửa và địa chỉ",
        "Hỗ trợ chỉnh sửa thông tin nhanh chóng",
      ],
      cta: "Nhận tư vấn miễn phí",
      highlight: false,
      badge: "Tiết kiệm",
    },
    {
      id: "social-standard",
      name: "Social Standard",
      subtitle: "Phát triển thương hiệu & tương tác nổi bật",
      price: "$129",
      period: "/tháng",
      desc: "Dành cho tiệm muốn tăng cường hình ảnh, bài đăng thường xuyên kèm video ngắn (Reels) bắt mắt.",
      features: [
        "Bao gồm toàn bộ quyền lợi của gói Social Basic",
        "14 - 16 bài đăng thiết kế phong cách hiện đại mỗi tháng",
        "Bổ sung 2 - 4 video ngắn (Reels/Shorts) về mẫu nail, spa, món ăn",
        "Thiết kế ảnh bìa, avatar và story ưu đãi theo mùa",
        "Tối ưu hóa hashtag và thông tin liên hệ đặt lịch",
      ],
      cta: "Nhận tư vấn miễn phí",
      highlight: false,
      badge: "Phổ biến",
    },
    {
      id: "ads-management",
      name: "Ads Management",
      subtitle: "Chuyên sâu chạy quảng cáo kéo khách địa phương",
      price: "$100",
      period: "/tháng",
      desc: "Chuyên trách quản lý, cài đặt và tối ưu chiến dịch quảng cáo Facebook & Instagram Ads hoặc Google Ads.",
      features: [
        "Cài đặt chiến dịch quảng cáo nhắm bán kính quanh tiệm",
        "Thiết kế hình ảnh & viết bài quảng cáo ưu đãi thu hút",
        "Nhắm chọn đúng tệp khách hàng tiềm năng tại khu vực",
        "Theo dõi và tối ưu chi phí quảng cáo hàng ngày",
        "Báo cáo chi tiêu minh bạch trực tiếp từ tài khoản Ads",
      ],
      cta: "Nhận tư vấn miễn phí",
      highlight: false,
      badge: "Kéo khách mới",
    },
    {
      id: "social-ads-combo",
      name: "Social + Ads Combo",
      subtitle: "Giải pháp toàn diện nhất — Chăm sóc Social & Quản lý Ads",
      price: "$199",
      period: "/tháng",
      desc: "Gói giải pháp kết hợp trọn vẹn: vừa có bài đăng đẹp mắt vừa có quảng cáo liên tục tiếp cận khách quanh tiệm.",
      features: [
        "Toàn bộ quyền lợi gói Social Standard (bài đăng + video ngắn)",
        "Toàn bộ quyền lợi gói Ads Management (quản lý & tối ưu Ads)",
        "Đồng bộ hóa hình ảnh bài đăng với chiến dịch quảng cáo",
        "Thiết kế banner ưu đãi theo các mùa lễ hội tại Mỹ",
        "Hỗ trợ tư vấn chiến lược tiếp thị khách hàng 1-1",
      ],
      cta: "Nhận tư vấn miễn phí",
      highlight: true,
      badge: "Gói đề xuất • Tiết kiệm nhất",
    },
  ],
  website: [
    {
      id: "website-starter",
      name: "Website Starter",
      subtitle: "Landing page 1 trang tinh gọn & chuyên nghiệp",
      price: "$199",
      period: " (Trọn gói)",
      desc: "Website 1 trang phong cách hiện đại, đầy đủ bảng giá menu, địa chỉ Google Maps và nút gọi điện nhanh.",
      features: [
        "Thiết kế giao diện 1 trang chuẩn phong cách dịch vụ tại Mỹ",
        "Hiển thị bảng giá menu dịch vụ rõ ràng, sắc nét",
        "Tích hợp bản đồ chỉ đường Google Maps & nút gọi nhanh",
        "Tối ưu hiển thị hoàn hảo trên điện thoại di động",
        "Bàn giao trọn gói 100% quyền sở hữu cho chủ tiệm",
      ],
      cta: "Nhận tư vấn miễn phí",
      highlight: false,
      badge: "Khởi đầu nhanh",
    },
    {
      id: "website-business",
      name: "Website Business",
      subtitle: "Website đa trang hoàn chỉnh kèm đặt lịch hẹn",
      price: "$299",
      period: " (Trọn gói)",
      desc: "Giải pháp được đa số chủ tiệm lựa chọn: website đa trang sang trọng, tích hợp form đặt lịch hẹn online 24/7.",
      features: [
        "Website đa trang hoàn chỉnh (Trang chủ, Menu, Về tiệm, Liên hệ)",
        "Tích hợp hệ thống form đặt lịch hẹn (Booking) online 24/7",
        "Thư viện hình ảnh sắc nét trưng bày mẫu nail, không gian tiệm",
        "Tối ưu tốc độ tải trang nhanh dưới 1.2s chuẩn Google",
        "Tích hợp liên kết mạng xã hội (Facebook, Instagram, Yelp)",
        "Bàn giao trọn gói kèm hướng dẫn quản trị dễ dàng",
      ],
      cta: "Nhận tư vấn miễn phí",
      highlight: true,
      badge: "Được chọn nhiều nhất",
    },
    {
      id: "website-premium",
      name: "Website Premium",
      subtitle: "Digital Flagship cao cấp độc quyền chuẩn Studio",
      price: "$399",
      period: " (Trọn gói)",
      desc: "Thiết kế đo ni đóng giày chuẩn Light Luxury, hiệu ứng tương tác mượt mà, tối ưu SEO On-page chuyên sâu.",
      features: [
        "Thiết kế giao diện độc quyền chuẩn Light Luxury đỉnh cao",
        "Hệ thống đặt lịch hẹn chuyên sâu tích hợp thông báo tự động",
        "Tối ưu SEO On-page chuẩn cấu trúc dữ liệu địa phương",
        "Tích hợp hiển thị đánh giá Google Maps trực tiếp lên website",
        "Tối ưu tốc độ đạt điểm tối đa trên Google PageSpeed",
        "Hỗ trợ kỹ thuật ưu tiên 1-1 và bảo hành kỹ thuật dài hạn",
      ],
      cta: "Nhận tư vấn miễn phí",
      highlight: false,
      badge: "Đẳng cấp cao nhất",
    },
  ],
};

export const FAQS = [
  {
    q: "Sunflower Marketing LLC có nhận thanh toán chi phí quảng cáo như thế nào?",
    a: "Chúng tôi áp dụng nguyên tắc minh bạch 100%. Phí dịch vụ của chúng tôi là phí quản lý và tối ưu chiến dịch ($100/tháng hoặc nằm trong Combo $199/tháng). Ngân sách chạy quảng cáo (Ad Spend) sẽ do chủ tiệm thanh toán trực tiếp cho Meta (Facebook/Instagram) hoặc Google qua thẻ tín dụng/debit của quý vị, đảm bảo quý vị kiểm soát hoàn toàn ngân sách.",
  },
  {
    q: "Sunflower Marketing LLC hỗ trợ những ngành nào và tại các tiểu bang nào tại Mỹ?",
    a: "Chúng tôi chuyên sâu phục vụ các doanh nghiệp dịch vụ của người Việt tại Mỹ, trọng tâm là Nail Salon, Spa & Wellness, Restaurant và Beauty Salon tại tất cả 50 tiểu bang (Texas, California, Florida, Georgia, Washington, v.v.). Đội ngũ làm việc linh hoạt theo các múi giờ EST, CST, MST và PST.",
  },
  {
    q: "Sau khi hoàn thành website, tôi có toàn quyền sở hữu không?",
    a: "Tuyệt đối có. Toàn bộ mã nguồn website, tài khoản tên miền, tài khoản Google Maps và các tài sản số khác đều là tài sản vĩnh viễn thuộc sở hữu của quý vị. Sunflower Marketing LLC bàn giao 100% quyền quản trị và hướng dẫn quý vị sử dụng dễ dàng.",
  },
  {
    q: "Website mất bao lâu để hoàn thành và có dễ xem trên điện thoại không?",
    a: "Website thông thường được hoàn thiện và đưa vào hoạt động trong vòng 7 - 14 ngày làm việc. Toàn bộ giao diện được chúng tôi thiết kế theo tiêu chuẩn Mobile-First, giúp khách hàng lướt xem menu và bấm đặt lịch hẹn vô cùng mượt mà trên iPhone và Android.",
  },
  {
    q: "Đội ngũ giao tiếp bằng ngôn ngữ nào?",
    a: "Chúng tôi hỗ trợ song ngữ linh hoạt: trao đổi và tư vấn trực tiếp với chủ tiệm bằng tiếng Việt thuận tiện, đồng thời toàn bộ nội dung bài đăng, quảng cáo và website được biên tập bằng tiếng Anh chuẩn bản địa hoặc song ngữ theo đúng mong muốn của quý vị.",
  },
];
