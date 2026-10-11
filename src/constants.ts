export const SITE = {
  name: "Sunflower Marketing LLC",
  shortName: "Sunflower Marketing",
  tagline: "Giúp cơ sở của bạn được tin tưởng, được tìm thấy và được chọn.",
  subtagline: "Studio chuyên sâu về Quản lý Review 5 sao & Thiết kế Website chuẩn chuyển đổi cho Nail salon, Spa, Nhà hàng và Thẩm mỹ viện.",
  hotline: "+1 (307) 998-1364",
  hotlineHref: "tel:+13079981364",
  messengerHref: "https://www.facebook.com/messages/t/61594964864831",
  email: "hello@sunflowermarketing.com",
  address: "75 E 3rd St, Ste 7, Sheridan, WY 82801, USA",
};

export const NAV_LINKS = [
  { label: "Dịch vụ", href: "#services" },
  { label: "Bảng Audit", href: "#audit-scorecard" },
  { label: "So sánh gói", href: "#comparison" },
  { label: "Dự án mẫu", href: "#portfolio" },
  { label: "Khách hàng", href: "#testimonials" },
  { label: "Báo giá", href: "#pricing" },
];

export interface PartnerBrand {
  name: string;
  category: string;
  location: string;
  rating: string;
  reviews: string;
  image: string;
}

export const PARTNER_BRANDS: PartnerBrand[] = [
  {
    name: "Lily Nail & Boutique",
    category: "Nail Lounge",
    location: "Quận 1, TP.HCM",
    rating: "4.9",
    reviews: "186+",
    image: "https://images.unsplash.com/photo-1652869122685-c7792ef56ee2?w=500&h=350&fit=crop&auto=format",
  },
  {
    name: "Zen Garden Spa & Onsen",
    category: "Luxury Wellness",
    location: "Thảo Điền, TP. Thủ Đức",
    rating: "5.0",
    reviews: "342+",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=350&fit=crop&auto=format",
  },
  {
    name: "Phố Đèn Lồng Fine Dining",
    category: "Vietnamese Cuisine",
    location: "Phố Cổ Hội An",
    rating: "4.8",
    reviews: "290+",
    image: "https://images.unsplash.com/photo-1770819372114-644ada828e22?w=500&h=350&fit=crop&auto=format",
  },
  {
    name: "Rosé Beauty & Aesthetic",
    category: "Clinic & Spa",
    location: "Quận 3, TP.HCM",
    rating: "4.9",
    reviews: "210+",
    image: "https://images.unsplash.com/photo-1658492055212-e1acbccfca5a?w=500&h=350&fit=crop&auto=format",
  },
  {
    name: "The Bloom Esthetics",
    category: "Skincare Studio",
    location: "Quận 7, TP.HCM",
    rating: "5.0",
    reviews: "155+",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=350&fit=crop&auto=format",
  },
  {
    name: "Elysian Restaurant & Bar",
    category: "Hospitality",
    location: "Quận 1, TP.HCM",
    rating: "4.9",
    reviews: "418+",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=350&fit=crop&auto=format",
  },
];

export const TRUST_STATS = [
  {
    value: 85,
    suffix: "+",
    label: "Cơ sở dịch vụ cao cấp",
    note: "Nail · Spa · Thẩm mỹ · F&B",
    emerald: false,
  },
  {
    value: 6200,
    suffix: "+",
    label: "Review 5★ được xác minh",
    note: "Google Maps, Facebook & Yelp",
    emerald: false,
  },
  {
    value: 280,
    suffix: "%",
    label: "Tăng trưởng lượt tìm thấy",
    note: "Đạt Top 3 Google Local Pack",
    emerald: true,
  },
];

export const SERVICES = [
  {
    id: "review",
    badge: "Reputation & Trust",
    label: "Quản Lý & Bảo Vệ Uy Tín",
    title: "Tăng Review 5 Sao & SEO Google Maps",
    description:
      "Thiết lập cơ chế thu hút review tự nhiên từ khách hàng hài lòng tại quầy, sàng lọc phản hồi kín đáo và xử lý chuyên nghiệp các đánh giá tiêu cực.",
    deliverables: [
      "Quy trình QR Code thông minh tại quầy thanh toán",
      "Tối ưu hồ sơ Google Business Profile chuẩn SEO",
      "Bảo vệ thương hiệu trước đánh giá spam/ác ý",
      "Báo cáo phân tích cảm xúc khách hàng định kỳ",
    ],
    outcome: "Tăng trung bình +120 review 5★ thật sau 60 ngày đầu.",
    cta: "Khám phá quy trình Review",
    href: "#process",
  },
  {
    id: "website",
    badge: "Digital Flagship",
    label: "Website Chuẩn Chuyển Đổi",
    title: "Thiết Kế Website Trọn Gói Sang Trọng",
    description:
      "Website tốc độ cao, giao diện Light Luxury định vị đẳng cấp thương hiệu, tích hợp đặt lịch hẹn trực tiếp và tối ưu hành trình khách hàng di động.",
    deliverables: [
      "Giao diện chuẩn Studio Luxury dành riêng cho ngành dịch vụ",
      "Hệ thống booking/đặt lịch giữ chỗ không ma sát",
      "Tối ưu tốc độ tải trang dưới 1.2s chuẩn Core Web Vitals",
      "Bàn giao trọn gói kèm hướng dẫn quản trị dễ dàng",
    ],
    outcome: "Tăng 65% tỷ lệ khách ghé thăm nhấn nút Đặt Lịch hẹn.",
    cta: "Xem các mẫu giao diện",
    href: "#portfolio",
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
    name: "Tiệm Nail & Mi",
    businessName: "Lily Nail Lounge (Mẫu thực tế)",
    healthScore: 78,
    reviewedDate: "Cập nhật Q3/2026",
    summaryQuote: "Cơ sở có không gian sang trọng nhưng chưa chuyển hóa được lượt xem trên Google Maps thành cuộc gọi đặt lịch.",
    metrics: [
      {
        name: "Điểm tin cậy & Review",
        score: 84,
        status: "Nền tảng tốt (4.3★)",
        implication: "Cần tăng mật độ review mới kèm ảnh thực tế tại quầy",
        color: "emerald",
      },
      {
        name: "Tỷ lệ chuyển đổi Website",
        score: 62,
        status: "Cần cải thiện",
        implication: "Chưa có nút đặt hẹn online nổi bật trên điện thoại",
        color: "amber",
      },
      {
        name: "Hiển thị Google Maps",
        score: 74,
        status: "Đang phát triển",
        implication: "Nằm top 4-6 trong bán kính 3km, cần đẩy Local SEO",
        color: "blue",
      },
      {
        name: "Trải nghiệm Mobile & Tốc độ",
        score: 91,
        status: "Xuất sắc",
        implication: "Tốc độ tải 1.1s, giao diện hiển thị sắc nét",
        color: "emerald",
      },
    ],
    keyOpportunity: "Tích hợp form đặt lịch 1 chạm và hệ thống QR review ngay bàn làm móng giúp tăng 40% doanh thu.",
  },
  {
    id: "spa",
    name: "Spa & Massage",
    businessName: "Zen Garden Spa & Wellness",
    healthScore: 82,
    reviewedDate: "Cập nhật Q3/2026",
    summaryQuote: "Lượng khách vãng lai cao nhưng thiếu kịch bản nhắc khách thân thiết để lại đánh giá 5 sao sau liệu trình.",
    metrics: [
      {
        name: "Điểm tin cậy & Review",
        score: 79,
        status: "Tiềm năng lớn",
        implication: "Chỉ số hài lòng cao nhưng số lượng review còn khiêm tốn",
        color: "blue",
      },
      {
        name: "Tỷ lệ chuyển đổi Website",
        score: 86,
        status: "Rất tốt",
        implication: "Bảng giá và menu dịch vụ rõ ràng, hình ảnh tinh tế",
        color: "emerald",
      },
      {
        name: "Hiển thị Google Maps",
        score: 68,
        status: "Cần tối ưu",
        implication: "Thiếu từ khóa trị liệu chuyên sâu trong danh mục Maps",
        color: "amber",
      },
      {
        name: "Trải nghiệm Mobile & Tốc độ",
        score: 89,
        status: "Nền tảng vững",
        implication: "Tương thích 100% thiết bị iOS và Android",
        color: "emerald",
      },
    ],
    keyOpportunity: "Tối ưu bộ từ khóa Local SEO 'spa massage trị liệu gần đây' để chiếm top 1 bản đồ.",
  },
  {
    id: "clinic",
    name: "Thẩm mỹ & Clinic",
    businessName: "Rosé Beauty Clinic",
    healthScore: 89,
    reviewedDate: "Cập nhật Q3/2026",
    summaryQuote: "Đã có thương hiệu uy tín, cần bảo vệ danh tiếng trước các đánh giá tiêu cực ẩn danh từ đối thủ cạnh tranh.",
    metrics: [
      {
        name: "Điểm tin cậy & Review",
        score: 94,
        status: "Đỉnh cao (4.9★)",
        implication: "Hơn 320 đánh giá xác thực từ khách hàng thật",
        color: "emerald",
      },
      {
        name: "Tỷ lệ chuyển đổi Website",
        score: 88,
        status: "Chuyển đổi cao",
        implication: "Trang tư vấn chuyên sâu mang lại 15-20 lead mỗi ngày",
        color: "emerald",
      },
      {
        name: "Hiển thị Google Maps",
        score: 90,
        status: "Top 1 Khu vực",
        implication: "Chiếm trọn vị trí nổi bật tại Quận 1",
        color: "emerald",
      },
      {
        name: "Trải nghiệm Mobile & Tốc độ",
        score: 85,
        status: "Chuẩn studio",
        implication: "Hình ảnh phác đồ điều trị tải mượt mà",
        color: "blue",
      },
    ],
    keyOpportunity: "Duy trì bảo vệ uy tín tự động và nhân rộng mô hình cho chi nhánh thứ hai.",
  },
  {
    id: "restaurant",
    name: "Nhà hàng & F&B",
    businessName: "Phố Đèn Lồng Restaurant",
    healthScore: 76,
    reviewedDate: "Cập nhật Q3/2026",
    summaryQuote: "Món ăn ngon và view đẹp nhưng thực khách nước ngoài khó tìm thấy menu tiếng Anh và link đặt bàn trước.",
    metrics: [
      {
        name: "Điểm tin cậy & Review",
        score: 81,
        status: "Khá tốt (4.4★)",
        implication: "Rất nhiều review khen món ăn, cần bổ sung review ảnh",
        color: "emerald",
      },
      {
        name: "Tỷ lệ chuyển đổi Website",
        score: 65,
        status: "Cần làm mới",
        implication: "Chưa có website riêng, hiện phụ thuộc fanpage",
        color: "amber",
      },
      {
        name: "Hiển thị Google Maps",
        score: 88,
        status: "Vị trí đẹp",
        implication: "Được khách du lịch tìm kiếm thường xuyên trên Google",
        color: "emerald",
      },
      {
        name: "Trải nghiệm Mobile & Tốc độ",
        score: 70,
        status: "Trung bình",
        implication: "Cần trang tra cứu menu món nhanh không cần tải PDF",
        color: "blue",
      },
    ],
    keyOpportunity: "Xây dựng website mini kèm menu trực quan và đặt bàn trước giờ cao điểm.",
  },
];

export const SERVICE_COMPARISON = {
  col1: {
    title: "Audit & Tối Ưu Hiện Tại",
    subtitle: "Dành cho cơ sở đã có website / Google Maps nhưng hiệu quả chưa cao",
    tag: "Tối ưu chi phí & Triển khai nhanh",
    bestFor: "Cơ sở đã hoạt động trên 6 tháng, đã có kênh online nhưng mất hút khách hoặc review còn thấp.",
    startingPoint: "Thẩm định toàn diện URL, Google Maps Profile và phân tích 3 đối thủ trực tiếp trong bán kính 3km.",
    coreWork: [
      "Làm sạch hồ sơ Google Business Profile",
      "Kích hoạt hệ thống gom review tự nhiên tại cơ sở",
      "Sửa lỗi UX, tăng tốc độ website và thêm nút gọi/đặt lịch",
      "Khắc phục rủi ro rò rỉ khách vào tay đối thủ",
    ],
    timeline: "7 – 10 ngày làm việc",
    deliverable: "Bộ tài liệu Audit chi tiết + Hệ thống gom review đã kích hoạt + Website tối ưu.",
    cta: "Thẩm định cơ sở hiện tại",
    href: "#audit",
  },
  col2: {
    title: "Thiết Kế & Xây Dựng Mới",
    subtitle: "Dành cho cơ sở mới mở, tái định vị thương hiệu hoặc muốn dẫn đầu thị trường",
    tag: "Đẳng cấp toàn diện & Đột phá",
    bestFor: "Cơ sở cao cấp mở chi nhánh mới, hoặc muốn nâng tầm hình ảnh để thu hút tệp khách sẵn sàng chi trả cao.",
    startingPoint: "Tư vấn chiến lược định vị, kiến trúc thương hiệu số và trải nghiệm khách hàng mục tiêu.",
    coreWork: [
      "Thiết kế giao diện độc quyền chuẩn Light Luxury",
      "Lập trình tối ưu SEO On-page và chuẩn Core Web Vitals",
      "Tích hợp hệ thống quản lý đặt lịch & CRM chăm sóc",
      "Đồng bộ nhận diện Google Maps, Fanpage và Website",
    ],
    timeline: "14 – 21 ngày làm việc",
    deliverable: "Website hoàn chỉnh cao cấp + Hồ sơ Maps chuẩn Top 1 + Bàn giao quyền sở hữu 100%.",
    cta: "Lên kế hoạch website mới",
    href: "#contact",
  },
};

export const PORTFOLIO_ITEMS = [
  {
    category: "Nail Salon",
    name: "Lily Nail & Spa",
    location: "Quận 3, TP.HCM",
    service: "Quản lý Review & Local SEO",
    result: "4.2★ → 4.9★ · +180 review trong 3 tháng",
    image: "https://images.unsplash.com/photo-1652869122685-c7792ef56ee2?w=800&h=600&fit=crop&auto=format",
    alt: "Nội thất tiệm Lily Nail Salon sang trọng với tone hồng pastel và ghế bọc nhung",
    metrics: {
      ratingBefore: "4.2★",
      ratingAfter: "4.9★",
      reviewGrowth: "+180 review",
      leadGrowth: "+75% khách mới",
    },
    beforeNote: "Review lác đác, xếp hạng thứ 8 trên Maps khi tìm 'tiệm nail quận 3'",
    afterNote: "Top 1 Google Maps, đầy ắp ảnh khách check-in và review tích cực mỗi ngày",
  },
  {
    category: "Spa & Wellness",
    name: "Zen Garden Spa",
    location: "Quận 7, TP.HCM",
    service: "Thiết kế Website Luxury + Booking",
    result: "Lượt đặt lịch online tăng 65% sau 30 ngày",
    image: "https://images.unsplash.com/photo-1633681926019-03bd9325ec20?w=800&h=600&fit=crop&auto=format",
    alt: "Không gian Zen Garden Spa thư thái với ánh sáng tự nhiên và hương thảo mộc",
    metrics: {
      ratingBefore: "4.4★",
      ratingAfter: "4.9★",
      reviewGrowth: "+125 review",
      leadGrowth: "+65% lịch hẹn",
    },
    beforeNote: "Khách phải nhắn tin fanpage chờ trả lời, tỷ lệ rớt khách tới 40%",
    afterNote: "Khách tự chọn gói liệu trình và giờ hẹn trực tiếp trên website 24/7",
  },
  {
    category: "Nhà hàng",
    name: "Phố Đèn Lồng Restaurant",
    location: "Phố Cổ Hội An",
    service: "Review Management + Google Maps SEO",
    result: "Xuất hiện top 3 Google Maps · +95 review 5 sao",
    image: "https://images.unsplash.com/photo-1770819372114-644ada828e22?w=800&h=600&fit=crop&auto=format",
    alt: "Nhà hàng phong cách truyền thống ấm cúng với lồng đèn lung linh",
    metrics: {
      ratingBefore: "4.1★",
      ratingAfter: "4.8★",
      reviewGrowth: "+95 review",
      leadGrowth: "Top 3 Maps",
    },
    beforeNote: "Bị đánh giá 3 sao không rõ lý do, khách quốc tế khó tìm thấy",
    afterNote: "Menu song ngữ rõ ràng, tăng gấp đôi lượng bàn đặt trước từ du khách",
  },
  {
    category: "Thẩm mỹ viện",
    name: "Rosé Beauty Clinic",
    location: "Quận 1, TP.HCM",
    service: "Combo Review & Website Chuyển Đổi",
    result: "Tăng 3× lượt tư vấn online trong 60 ngày",
    image: "https://images.unsplash.com/photo-1658492055212-e1acbccfca5a?w=800&h=600&fit=crop&auto=format",
    alt: "Phòng trị liệu da chuyên sâu sạch sẽ, hiện đại tại Rosé Clinic",
    metrics: {
      ratingBefore: "4.5★",
      ratingAfter: "5.0★",
      reviewGrowth: "+210 review",
      leadGrowth: "Gấp 3× lượt tư vấn",
    },
    beforeNote: "Website cũ tải chậm, khách không tin tưởng để lại số điện thoại",
    afterNote: "Giao diện chuẩn y khoa cao cấp, phác đồ minh bạch, chuyển đổi vượt bậc",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Trước đây tiệm mình chỉ có khoảng 30 review, khách khen trực tiếp rất nhiều nhưng không ai lên mạng viết. Từ khi Sunflower Marketing LLC setup hệ thống QR và tối ưu Maps, chỉ trong 3 tháng tiệm đã có gần 200 review 5 sao. Lượng khách vãng lai và du khách tìm đến tăng rõ rệt!",
    author: "Chị Mai Phương",
    role: "Chủ sáng lập",
    business: "Lily Nail & Boutique",
    location: "Quận 3, TP.HCM",
    stars: 5,
    highlight: "Tăng 180 review 5★ trong 3 tháng",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&auto=format",
  },
  {
    quote:
      "Website mới mang phong cách nhẹ nhàng, sang trọng rất đúng gu của Zen Garden. Khách hàng khen website rất đẹp, dễ xem bảng giá và đặt lịch nhanh chóng. Chúng tôi không còn bị quá tải tin nhắn fanpage mà vẫn lấp đầy 90% lịch trị liệu mỗi cuối tuần.",
    author: "Anh Hoàng Nam",
    role: "Giám đốc điều hành",
    business: "Zen Garden Spa & Wellness",
    location: "Quận 7, TP.HCM",
    stars: 5,
    highlight: "Tỷ lệ lấp đầy lịch hẹn đạt 90%",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format",
  },
  {
    quote:
      "Làm phòng khám thẩm mỹ thì chữ 'Tín' là quan trọng nhất. Sunflower Marketing LLC đã giúp cơ sở xử lý triệt để các review spam ác ý, đồng thời định hình website chuẩn chỉ. Khách hàng bước vào phòng khám với tâm thế hoàn toàn tin tưởng vào tay nghề bác sĩ.",
    author: "Bác sĩ Thu Trang",
    role: "Bác sĩ Chuyên khoa & Giám đốc",
    business: "Rosé Beauty Clinic",
    location: "Quận 1, TP.HCM",
    stars: 5,
    highlight: "Bảo vệ danh tiếng & Tăng 3x lượt đặt hẹn",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&auto=format",
  },
  {
    quote:
      "Rất ưng ý với sự tận tâm và minh bạch. Họ không hứa hẹn suông kiểu cam kết top 1 ảo, mà chỉ số đo lường qua dashboard rất rõ ràng. Cứ đến ngày 30 hàng tháng là có báo cáo tiến độ chi tiết. Đầu tư cực kỳ xứng đáng!",
    author: "Anh Trọng Hiếu",
    role: "Chủ nhà hàng",
    business: "Phố Đèn Lồng Restaurant",
    location: "Hội An",
    stars: 5,
    highlight: "Lọt Top 3 Google Local Pack",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format",
  },
];

export const WHY_US = [
  {
    icon: "ShieldCheck",
    title: "Minh bạch & Đo lường thực",
    description: "Mỗi chỉ số đều trích xuất từ Google Analytics và Google Business thật. Không báo cáo khống, không hứa ảo.",
  },
  {
    icon: "Zap",
    title: "Thấy kết quả sau 7 ngày",
    description: "Ngay tuần đầu tiên sau khi kích hoạt hệ thống, bạn sẽ thấy những lượt review 5 sao chất lượng đầu tiên xuất hiện.",
  },
  {
    icon: "Users",
    title: "Thấu hiểu ngành dịch vụ",
    description: "Nail, spa, phòng khám, nhà hàng — chúng tôi thiết kế dựa trên hành vi tâm lý thật của khách hàng bước vào cơ sở.",
  },
  {
    icon: "TrendingUp",
    title: "Cam kết đồng hành dài hạn",
    description: "Không 'bỏ con giữa chợ' sau khi bàn giao website. Chúng tôi duy trì bảo trì và tối ưu thứ hạng hàng tháng.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Thẩm định (Audit)",
    description: "Kiểm tra toàn diện hiện trạng Google Maps, website hiện có và rà soát các lỗ hổng khiến khách hàng rơi vào tay đối thủ.",
  },
  {
    step: "02",
    title: "Chiến lược (Strategy)",
    description: "Xây dựng lộ trình ưu tiên những việc mang lại doanh thu ngay: gom review 5 sao, tối ưu trang đặt hẹn, chuẩn hóa hình ảnh.",
  },
  {
    step: "03",
    title: "Triển khai (Execution)",
    description: "Bàn giao ấn phẩm QR review tại quầy, hoàn thiện website Light Luxury và đồng bộ SEO địa phương trên mọi nền tảng.",
  },
  {
    step: "04",
    title: "Tăng trưởng (Scale)",
    description: "Theo dõi báo cáo chuyển đổi hàng tháng, chủ động hỗ trợ phản hồi review và nâng cấp tính năng khi cơ sở mở rộng chi nhánh.",
  },
];

export const PRICING_PLANS = [
  {
    name: "Starter Concierge",
    subtitle: "Dành cho cơ sở muốn xây dựng nền móng uy tín vững chắc",
    price: "4.900.000",
    period: "đ/tháng",
    desc: "Tập trung giải quyết bài toán review và định vị top trên Google Maps để khách hàng trong khu vực luôn nhìn thấy bạn.",
    features: [
      "Audit toàn diện Google Maps & Uy tín online",
      "Triển khai bộ giải pháp QR gom review tại quầy",
      "Tối ưu hồ sơ Google Business Profile chuẩn SEO",
      "Giám sát và kịch bản phản hồi đánh giá tiêu cực",
      "Báo cáo tiến độ minh bạch hàng tháng",
    ],
    cta: "Bắt đầu với Starter",
    highlight: false,
    warranty: "Cam kết tối thiểu +30 review thật/tháng",
  },
  {
    name: "Growth Elite",
    subtitle: "Giải pháp toàn diện nhất — Tăng review & Website chuyển đổi",
    price: "9.900.000",
    period: "đ/tháng",
    desc: "Biến cơ sở thành thương hiệu số 1 khu vực với website cao cấp, tính năng đặt lịch thông minh và hệ thống review đỉnh cao.",
    features: [
      "Toàn bộ tính năng của gói Starter",
      "Thiết kế Website trọn gói chuẩn Light Luxury",
      "Tích hợp hệ thống đặt lịch (Booking) tự động 24/7",
      "Tối ưu SEO địa phương & Google Maps Local Pack",
      "Hỗ trợ kỹ thuật ưu tiên 24/7 và sao lưu hàng tuần",
      "Miễn phí duy trì tên miền & hosting tốc độ cao",
    ],
    cta: "Chọn gói Growth Elite",
    highlight: true,
    warranty: "Được 70% khách hàng lựa chọn",
  },
  {
    name: "Enterprise Bespoke",
    subtitle: "Dành cho chuỗi cơ sở & thương hiệu đa chi nhánh",
    price: "Liên hệ",
    period: "",
    desc: "Giải pháp kiến trúc số may đo riêng, đồng bộ danh tiếng và trải nghiệm đặt lịch tập trung cho toàn bộ hệ thống chi nhánh.",
    features: [
      "Tất cả quyền lợi của gói Growth Elite",
      "Quản lý đồng bộ đa chi nhánh / đa vị trí Maps",
      "Chuyên viên Account Manager đồng hành 1-1",
      "Tích hợp phần mềm quản lý POS / CRM sẵn có",
      "Cam kết chất lượng dịch vụ SLA bằng hợp đồng",
    ],
    cta: "Đặt lịch tư vấn chuyên sâu",
    highlight: false,
    warranty: "Tư vấn phương án tối ưu riêng",
  },
];

export const FAQS = [
  {
    q: "Hệ thống gom review hoạt động như thế nào và có vi phạm chính sách Google không?",
    a: "Hoàn toàn an toàn và tuân thủ 100% chính sách của Google. Chúng tôi cung cấp ấn phẩm thông minh (thẻ NFC, mã QR tinh tế) đặt tại bàn tiếp tân hoặc bàn dịch vụ. Khi khách hàng hài lòng, nhân viên chỉ mất 5 giây mời khách chạm điện thoại để để lại đánh giá thật. Google đặc biệt đánh giá cao các review phát sinh từ tài khoản thật và vị trí thực tế.",
  },
  {
    q: "Cơ sở của tôi chưa có website thì có làm dịch vụ review được không?",
    a: "Được. Dịch vụ Quản lý & Tăng review hoạt động trực tiếp trên nền tảng Google Business Profile và Google Maps của bạn. Tuy nhiên, việc sở hữu một website chuẩn chuyển đổi sẽ giúp khách hàng sau khi đọc review tin tưởng bấm đặt lịch ngay lập tức thay vì phân vân so sánh với đối thủ.",
  },
  {
    q: "Bao lâu thì website được hoàn thiện và tôi có tự quản lý được không?",
    a: "Website tiêu chuẩn được thiết kế và bàn giao hoàn chỉnh trong vòng 14–21 ngày làm việc. Chúng tôi thiết kế bảng quản trị trực quan, bạn có thể dễ dàng thay đổi hình ảnh, cập nhật bảng giá liệu trình hoặc xem danh sách đặt lịch ngay trên điện thoại.",
  },
  {
    q: "Có hỗ trợ xử lý khi bị đối thủ chơi xấu hoặc dính review tiêu cực vô căn cứ không?",
    a: "Có. Chúng tôi có quy trình chuyên biệt: (1) Khiếu nại gỡ bỏ trực tiếp lên Google với các đánh giá vi phạm chính sách spam, bôi nhọ; (2) Kịch bản phản hồi xử lý khủng hoảng khéo léo để những khách hàng khác đọc vào vẫn thấy được sự chuyên nghiệp và uy tín của cơ sở.",
  },
  {
    q: "Nếu dừng hợp tác thì website và review của tôi có bị mất không?",
    a: "Tuyệt đối không. Toàn bộ tài sản số gồm tên miền, mã nguồn website, tài khoản Google Maps và tất cả review đã thu thập là tài sản vĩnh viễn thuộc sở hữu của bạn. Chúng tôi bàn giao đầy đủ quyền sở hữu khi kết thúc hợp đồng.",
  },
];
