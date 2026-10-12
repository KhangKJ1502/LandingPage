export interface TranslationContent {
  site: {
    name: string;
    shortName: string;
    tagline: string;
    subtagline: string;
    hotline: string;
    hotlineHref: string;
    email: string;
    address: string;
  };
  nav: {
    links: { label: string; href: string }[];
    hotlineLabel: string;
    auditCta: string;
    navMenuLabel: string;
    themePill: string;
  };
  hero: {
    trustBadge: string;
    headlinePart1: string;
    headlineTrust: string;
    headlinePart2: string;
    headlineChosen: string;
    description: string;
    inputPlaceholder: string;
    ctaButton: string;
    scanningSteps: string[];
    successTitle: string;
    successStatus: string;
    successDesc: string;
    resetButton: string;
    viewScorecardLink: string;
    freeAuditBadge: string;
    noCommitment: string;
    errorRequired: string;
    errorInvalid: string;
    featuredCase: string;
    featuredTitle: string;
    verifiedRating: string;
    growthHighlight: string;
    topRankPill: string;
    partnerTitle: string;
  };
  trustStats: {
    sectionTag: string;
    heading: string;
    sourceContext: string;
    stats: {
      value: number;
      suffix: string;
      label: string;
      note: string;
      emerald: boolean;
    }[];
  };
  services: {
    tag: string;
    heading: string;
    subheading: string;
    deliverablesLabel: string;
    outcomeLabel: string;
    comparisonNote: string;
    comparisonLink: string;
    items: {
      id: string;
      badge: string;
      label: string;
      title: string;
      description: string;
      deliverables: string[];
      outcome: string;
      cta: string;
      href: string;
    }[];
  };
  scorecard: {
    tag: string;
    heading: string;
    subheading: string;
    sampleBadge: string;
    healthScoreLabel: string;
    pointsLabel: string;
    eligibleLabel: string;
    opportunityTitle: string;
    ctaButton: string;
    industries: {
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
    }[];
  };
  comparison: {
    tag: string;
    heading: string;
    subheading: string;
    bestForLabel: string;
    startingPointLabel: string;
    scopeLabel: string;
    deliverableLabel: string;
    bottomQuestion: string;
    bottomCta: string;
    col1: {
      tag: string;
      timeline: string;
      title: string;
      subtitle: string;
      bestFor: string;
      startingPoint: string;
      coreWork: string[];
      deliverable: string;
      cta: string;
      href: string;
    };
    col2: {
      badge: string;
      tag: string;
      timeline: string;
      title: string;
      subtitle: string;
      bestFor: string;
      startingPoint: string;
      coreWork: string[];
      deliverable: string;
      cta: string;
      href: string;
    };
  };
  portfolio: {
    tag: string;
    heading: string;
    subheading: string;
    allCategory: string;
    afterLabel: string;
    beforeLabel: string;
    serviceLabel: string;
    verifiedStatus: string;
    beforeStateTitle: string;
    afterStateTitle: string;
    ratingMetric: string;
    newReviewsMetric: string;
    conversionMetric: string;
    ctaButton: string;
    items: {
      category: string;
      name: string;
      location: string;
      service: string;
      result: string;
      image: string;
      alt: string;
      metrics: {
        ratingBefore: string;
        ratingAfter: string;
        reviewGrowth: string;
        leadGrowth: string;
      };
      beforeNote: string;
      afterNote: string;
    }[];
  };
  testimonials: {
    tag: string;
    heading: string;
    subheading: string;
    verifiedBadge: string;
    impactLabel: string;
    items: {
      quote: string;
      author: string;
      role: string;
      business: string;
      location: string;
      stars: number;
      highlight: string;
      avatar: string;
    }[];
  };
  whyUs: {
    tag: string;
    heading: string;
    subheading: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  process: {
    tag: string;
    heading: string;
    subheading: string;
    calloutText: string;
    calloutButton: string;
    steps: {
      step: string;
      title: string;
      description: string;
    }[];
  };
  pricing: {
    tag: string;
    heading: string;
    subheading: string;
    tabSocial: string;
    tabWebsite: string;
    popularBadge: string;
    featuresLabel: string;
    legalNote: string;
    plans: {
      id: string;
      category: "social" | "website";
      name: string;
      subtitle: string;
      price: string;
      period: string;
      desc: string;
      features: string[];
      cta: string;
      highlight: boolean;
      badge?: string;
    }[];
  };
  contact: {
    tag: string;
    heading: string;
    subheading: string;
    hotlineHeader: string;
    hotlineSub: string;
    emailHeader: string;
    commitmentsTitle: string;
    commitment1: string;
    commitment2: string;
    commitment3: string;
    formTitle: string;
    formSubtitle: string;
    serviceLegend: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    bizLabel: string;
    bizPlaceholder: string;
    urlLabel: string;
    urlPlaceholder: string;
    noteLabel: string;
    notePlaceholder: string;
    submitButton: string;
    submittingButton: string;
    privacyNote: string;
    successTitle: string;
    successDesc: string;
    successNextTitle: string;
    successNextDesc: string;
    sendAnother: string;
    servicesOptions: { value: string; label: string }[];
    businessTypes: string[];
  };
  faq: {
    tag: string;
    heading: string;
    subheading: string;
    specialCaseTitle: string;
    specialCaseSub: string;
    specialCaseCta: string;
    faqs: { q: string; a: string }[];
  };
  finalCta: {
    badge: string;
    heading: string;
    description: string;
    ctaAudit: string;
    hotlinePrefix: string;
    perk1: string;
    perk2: string;
    perk3: string;
  };
  footer: {
    description: string;
    navHeading: string;
    servicesHeading: string;
    industriesHeading: string;
    auditButton: string;
    copyright: string;
    privacyLink: string;
    termsLink: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<"vi" | "en", TranslationContent> = {
  vi: {
    site: {
      name: "Sunflower Marketing LLC",
      shortName: "Sunflower Marketing",
      tagline: "Giải pháp Digital Marketing toàn diện & chuẩn chuyển đổi cho doanh nghiệp tại Mỹ.",
      subtagline: "Đồng hành cùng chủ tiệm Nail Salon, Spa, Restaurant và Beauty Salon tại Mỹ bứt phá hiện diện số: Website chuẩn chuyển đổi, Chăm sóc Social Media, Quảng cáo đa kênh & Google Maps.",
      hotline: "+1 (307) 998-1364",
      hotlineHref: "tel:+13079981364",
      email: "hello@sunflowermarketing.com",
      address: "75 E 3rd St, Ste 7, Sheridan, WY 82801, USA",
    },
    nav: {
      links: [
        { label: "Dịch vụ", href: "#services" },
        { label: "Dự án", href: "#portfolio" },
        { label: "So sánh giải pháp", href: "#comparison" },
        { label: "Bảng giá", href: "#pricing" },
        { label: "Tư vấn", href: "#contact" },
      ],
      hotlineLabel: "Hotline",
      auditCta: "Nhận tư vấn miễn phí",
      navMenuLabel: "Danh mục điều hướng",
      themePill: "Digital Marketing USA",
    },
    hero: {
      trustBadge: "Chuyên sâu Digital Marketing cho doanh nghiệp tại Mỹ",
      headlinePart1: "Giúp cơ sở của bạn được",
      headlineTrust: "tin tưởng",
      headlinePart2: ", được tìm thấy và",
      headlineChosen: "được chọn",
      description: "Sunflower Marketing LLC cung cấp giải pháp Digital Marketing toàn diện cho Nail Salon, Spa, Restaurant và Beauty Salon tại Mỹ. Từ thiết kế Website chuẩn chuyển đổi, chăm sóc Social Media, chạy Ads nhắm chọn đến tối ưu Google Maps địa phương.",
      inputPlaceholder: "Nhập tên tiệm, link Google Maps hoặc Website của bạn...",
      ctaButton: "Nhận tư vấn miễn phí",
      scanningSteps: [
        "Đang kết nối tên miền & Google Maps...",
        "Đang phân tích tối ưu hiển thị & chiến dịch Ads...",
        "Đã sẵn sàng kết nối cùng chuyên viên tư vấn."
      ],
      successTitle: "Thông tin đã sẵn sàng!",
      successStatus: "Sẵn sàng tư vấn",
      successDesc: "Chuyên viên tư vấn của Sunflower Marketing LLC sẽ kết nối và tư vấn giải pháp Digital Marketing phù hợp nhất cho cơ sở của bạn trong vòng 24 giờ.",
      resetButton: "← Nhập địa chỉ khác",
      viewScorecardLink: "Xem bảng so sánh giải pháp ↓",
      freeAuditBadge: "Tư vấn & khảo sát 100% miễn phí",
      noCommitment: "Không ràng buộc cam kết",
      errorRequired: "Vui lòng nhập tên tiệm, website hoặc đường dẫn Google Maps.",
      errorInvalid: "Đường dẫn không hợp lệ. Ví dụ: luxenailspa.com hoặc maps.google.com/...",
      featuredCase: "Dự án tiêu biểu",
      featuredTitle: "Luxe Nail Lounge — Houston, TX",
      verifiedRating: "Vận hành chuẩn phong cách Mỹ",
      growthHighlight: "Tiêu chuẩn Mỹ",
      topRankPill: "Dự án tiêu biểu",
      partnerTitle: "Đồng hành và phát triển cùng các thương hiệu tại Mỹ",
    },
    trustStats: {
      sectionTag: "Tiêu chuẩn vận hành",
      heading: "Tiêu chuẩn dịch vụ chuyên nghiệp & minh bạch",
      sourceContext: "Hỗ trợ khách hàng linh hoạt trên khắp các tiểu bang tại Mỹ",
      stats: [
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
      ],
    },
    services: {
      tag: "Dịch vụ trọng tâm",
      heading: "Giải pháp Digital Marketing toàn diện cho doanh nghiệp tại Mỹ",
      subheading: "Đồng bộ từ thương hiệu, nội dung mạng xã hội, quảng cáo thu hút khách mới đến website chuyển đổi và Google Maps.",
      deliverablesLabel: "Hạng mục cốt lõi:",
      outcomeLabel: "Giá trị mang lại",
      comparisonNote: "Bạn phân vân cơ sở của mình cần ưu tiên triển khai dịch vụ nào trước?",
      comparisonLink: "Xem bảng so sánh chi tiết lộ trình ↓",
      items: [
        {
          id: "review",
          badge: "Reputation & Trust",
          label: "Google Maps & Quản Lý Đánh Giá",
          title: "Quản Lý Đánh Giá Google & Tối Ưu Local SEO",
          description: "Tối ưu hồ sơ Google Business Profile chuẩn SEO, hỗ trợ thiết lập quy trình thu thập phản hồi tích cực từ khách hàng và xử lý chuyên nghiệp các đánh giá tiêu cực.",
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
          description: "Website tốc độ cao, phong cách Light Luxury sang trọng, tích hợp bảng giá dịch vụ rõ ràng, hệ thống đặt lịch hẹn online 24/7 và tối ưu hoàn hảo trên điện thoại.",
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
          description: "Xây dựng và duy trì Fanpage Facebook & Instagram chuyên nghiệp, sáng tạo nội dung đều đặn, thiết kế hình ảnh mẫu nail, không gian spa, món ăn bắt mắt.",
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
          description: "Chiến dịch quảng cáo nhắm mục tiêu chuẩn xác vào cư dân trong bán kính 3-10 dặm quanh tiệm, thu hút khách hàng mới nhắn tin và đặt hẹn.",
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
          description: "Hiển thị ngay đầu trang tìm kiếm Google và trên Google Maps khi khách hàng địa phương gõ tìm kiếm các từ khóa có nhu cầu cao như 'nail salon near me', 'best spa'.",
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
          description: "Chiến lược tối ưu hóa công cụ tìm kiếm dài hạn, nâng cao độ hiển thị của cơ sở trên Google Local Pack và Google Search mà không bị phụ thuộc hoàn toàn vào quảng cáo trả phí.",
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
          description: "Giải pháp tiếp thị toàn diện kết hợp giữa Quản lý nội dung mạng xã hội chuyên nghiệp và Chiến dịch chạy quảng cáo nhắm chọn, mang lại hiệu quả kép với chi phí tối ưu.",
          deliverables: [
            "Bao gồm toàn bộ quyền lợi của gói Social Media Management",
            "Vận hành và tối ưu liên tục chiến dịch quảng cáo Facebook & Instagram Ads",
            "Đồng bộ hóa hình ảnh bài đăng với chiến dịch quảng cáo",
            "Hỗ trợ linh hoạt điều chỉnh ngân sách và chiến lược theo mùa lễ hội tại Mỹ",
          ],
          outcome: "Vừa xây dựng hình ảnh thương hiệu chỉn chu vừa chủ động kéo dòng khách mới về tiệm.",
          cta: "Nhận tư vấn miễn phí",
          href: "#contact",
        },
      ],
    },
    scorecard: {
      tag: "Tiêu Chuẩn Đánh Giá Chuyên Nghiệp",
      heading: "Bảng phân tích hiện diện thương hiệu số",
      subheading: "Đánh giá đa chiều qua các trụ cột quyết định lượt khách ghé cơ sở của bạn: Maps, Website, Social Media và Chiến dịch Ads.",
      sampleBadge: "Khảo sát & Đánh giá tiêu chuẩn",
      healthScoreLabel: "Điểm hiện diện",
      pointsLabel: "/100 Điểm",
      eligibleLabel: "Tiềm năng phát triển cao",
      opportunityTitle: "Cơ hội cải thiện nổi bật nhất",
      ctaButton: "Nhận tư vấn miễn phí",
      industries: [
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
      ],
    },
    comparison: {
      tag: "Lựa Chọn Lộ Trình Phù Hợp",
      heading: "Nên tối ưu kênh hiện tại hay xây dựng mới?",
      subheading: "Chúng tôi đánh giá trung thực hiện trạng của bạn. Nếu hệ thống cũ còn giá trị, chúng tôi sẽ tối ưu; nếu chưa đồng bộ, chúng tôi đề xuất giải pháp trọn gói mới.",
      bestForLabel: "Phù hợp nhất cho:",
      startingPointLabel: "Điểm bắt đầu:",
      scopeLabel: "Phạm vi công việc:",
      deliverableLabel: "Kết quả bàn giao:",
      bottomQuestion: "Bạn vẫn chưa chắc chắn gói nào là tối ưu nhất?",
      bottomCta: "Nhận tư vấn miễn phí cùng chuyên viên",
      col1: {
        tag: "Tối ưu chi phí & Triển khai nhanh",
        timeline: "5 – 7 ngày làm việc",
        title: "Tối Ưu & Quản Lý Kênh Hiện Tại",
        subtitle: "Dành cho cơ sở đã có website, Fanpage hoặc Google Maps nhưng chưa đạt hiệu quả mong muốn",
        bestFor: "Cơ sở đã hoạt động, muốn làm mới hình ảnh mạng xã hội, sửa lỗi website và đẩy mạnh quảng cáo địa phương.",
        startingPoint: "Khảo sát & đánh giá toàn diện hồ sơ Google Maps, rà soát kênh Fanpage và kế hoạch quảng cáo hiện có.",
        coreWork: [
          "Tối ưu lại thông tin Google Business Profile chuẩn SEO",
          "Chăm sóc lại trang Fanpage & Instagram chuyên nghiệp",
          "Thiết lập chiến dịch quảng cáo nhắm trúng khách hàng quanh tiệm",
          "Sửa lỗi UX/tốc độ website và bổ sung nút gọi/đặt lịch nhanh",
        ],
        deliverable: "Kênh truyền thông được làm mới + Chiến dịch quảng cáo đã kích hoạt + Báo cáo minh bạch.",
        cta: "Nhận tư vấn miễn phí",
        href: "#contact",
      },
      col2: {
        badge: "Giải pháp toàn diện nhất",
        tag: "Đẳng cấp toàn diện & Chuẩn Mỹ",
        timeline: "10 – 14 ngày làm việc",
        title: "Thiết Kế & Xây Dựng Trọn Gói Mới",
        subtitle: "Dành cho cơ sở mới mở, tái định vị thương hiệu hoặc muốn dẫn đầu thị trường khu vực",
        bestFor: "Chủ tiệm muốn có hệ thống hiện diện số chuyên nghiệp từ đầu: Website cao cấp, đồng bộ Social và chạy Ads bài bản.",
        startingPoint: "Tư vấn định vị thương hiệu, thiết kế phong cách giao diện và lên kế hoạch marketing đa kênh.",
        coreWork: [
          "Thiết kế Website chuẩn Light Luxury độc quyền kèm hệ thống Booking",
          "Xây dựng và chuẩn hóa nhận diện Fanpage, Instagram, Google Maps",
          "Lên chiến lược nội dung bài đăng và kế hoạch chạy quảng cáo ra mắt",
          "Bàn giao trọn gói quyền sở hữu 100% tài sản số cho chủ tiệm",
        ],
        deliverable: "Website hoàn chỉnh cao cấp + Bộ kênh truyền thông đồng bộ + Bàn giao 100% quyền quản trị.",
        cta: "Nhận tư vấn miễn phí",
        href: "#contact",
      },
    },
    portfolio: {
      tag: "Dự Án Tiêu Biểu",
      heading: "Giải pháp số hóa thực tế cho tiệm tại Mỹ",
      subheading: "Các dự án số hóa đa kênh dành cho Nail Salon, Spa, Restaurant và Beauty Salon tại các tiểu bang Mỹ. Nhấn công tắc trên từng dự án để xem đối chiếu giải pháp.",
      allCategory: "Tất cả ngành",
      afterLabel: "Giải pháp",
      beforeLabel: "Ban đầu",
      serviceLabel: "Dịch vụ triển khai:",
      verifiedStatus: "Dự án hoàn thành",
      beforeStateTitle: "Hiện trạng ban đầu:",
      afterStateTitle: "Sau khi tối ưu & số hóa:",
      ratingMetric: "Kênh triển khai",
      newReviewsMetric: "Mục tiêu tiếp cận",
      conversionMetric: "Quyền lợi sở hữu",
      ctaButton: "Nhận tư vấn miễn phí",
      items: [
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
      ],
    },
    testimonials: {
      tag: "Trải Nghiệm Khách Hàng Thực Tế",
      heading: "Được tin chọn bởi các chủ cơ sở tại Mỹ",
      subheading: "Lắng nghe chia sẻ từ những người trực tiếp vận hành Nail Salon, Spa, Restaurant và Beauty Salon tại các tiểu bang sau khi đồng hành cùng Sunflower Marketing LLC.",
      verifiedBadge: "Chủ cơ sở tại Mỹ",
      impactLabel: "Điểm nổi bật",
      items: [
        {
          quote: "Sunflower Marketing LLC hỗ trợ rất nhiệt tình và thấu hiểu đặc thù tiệm nail tại Mỹ. Đội ngũ giao tiếp tiếng Việt rất tiện cho mình trao đổi, các bài đăng và quảng cáo tiếng Anh thì chuẩn chỉnh, chuyên nghiệp. Rất yên tâm khi hợp tác lâu dài!",
          author: "Chị Jennifer Nguyen",
          role: "Chủ sáng lập tiệm",
          business: "Luxe Nail Lounge",
          location: "Houston, TX, USA",
          stars: 5,
          highlight: "Giao tiếp tiếng Việt thuận tiện & Bài viết chuẩn tiếng Anh",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&auto=format",
        },
        {
          quote: "Website mới mang phong cách nhẹ nhàng, sang trọng rất đúng gu khách Mỹ. Khách khen website đẹp, dễ xem menu giá và đặt hẹn online nhanh chóng. Tiệm không còn bị quá tải tin nhắn mà khách vẫn đặt lịch đều đặn.",
          author: "Anh Kevin Tran",
          role: "Giám đốc điều hành",
          business: "Serenity Day Spa",
          location: "Dallas, TX, USA",
          stars: 5,
          highlight: "Website sang trọng & Tích hợp đặt lịch hẹn 24/7",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format",
        },
        {
          quote: "Rất hài lòng với sự minh bạch trong việc quản lý tài khoản quảng cáo. Chi phí chạy Ads rõ ràng từng đồng, có báo cáo chi tiết hàng tuần và hỗ trợ chỉnh sửa hình ảnh rất nhanh theo giờ của bang mình.",
          author: "Chị Christine Le",
          role: "Chủ cơ sở",
          business: "Glow & Co. Beauty Salon",
          location: "Miami, FL, USA",
          stars: 5,
          highlight: "Minh bạch tài khoản quảng cáo & Hỗ trợ chuẩn giờ Mỹ",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&auto=format",
        },
        {
          quote: "Từ khi làm lại menu trực quan trên trang web và tối ưu chỉ đường trên Google Maps, thực khách đến quán rất thuận tiện. Đội ngũ luôn tận tâm, phản hồi nhanh và bàn giao đầy đủ quyền quản trị cho chủ quán.",
          author: "Anh David Vu",
          role: "Chủ nhà hàng",
          business: "Golden Lotus Bistro",
          location: "San Jose, CA, USA",
          stars: 5,
          highlight: "Tối ưu tìm kiếm địa phương & Menu món trực quan",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format",
        },
      ],
    },
    whyUs: {
      tag: "Giá Trị Thực Tế",
      heading: "Vì sao các chủ cơ sở tại Mỹ chọn chúng tôi?",
      subheading: "Chúng tôi tập trung vào tính hiệu quả, minh bạch chi phí và sự thuận tiện tối đa cho chủ tiệm gốc Việt.",
      items: [
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
      ],
    },
    process: {
      tag: "Quy trình 4 bước",
      heading: "Quy trình triển khai tinh gọn & rõ ràng",
      subheading: "Tiết kiệm tối đa thời gian cho chủ tiệm, thấy rõ tiến độ từng bước và hiệu quả thực tế.",
      calloutText: "Bắt đầu với buổi trao đổi tư vấn trực tiếp hoàn toàn miễn phí ngay hôm nay.",
      calloutButton: "Nhận tư vấn miễn phí",
      steps: [
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
      ],
    },
    pricing: {
      tag: "Bảng Giá Minh Bạch",
      heading: "Bảng giá dịch vụ Digital Marketing",
      subheading: "Chi phí rõ ràng, không phụ phí ẩn. Được thiết kế chuyên biệt cho chủ tiệm Nail, Spa, Restaurant và Beauty Salon tại Mỹ.",
      tabSocial: "Mạng Xã Hội & Quảng Cáo (Hàng tháng)",
      tabWebsite: "Thiết Kế Website (Trọn gói)",
      popularBadge: "Được chọn nhiều nhất",
      featuresLabel: "Đặc quyền bao gồm:",
      legalNote: "Hợp đồng dịch vụ minh bạch • Bàn giao 100% quyền sở hữu tài sản số",
      plans: [
        {
          id: "social-basic",
          category: "social",
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
          category: "social",
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
          category: "social",
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
          category: "social",
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
        {
          id: "website-starter",
          category: "website",
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
          category: "website",
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
          category: "website",
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
    },
    contact: {
      tag: "Tư Vấn Trực Tiếp 1-1",
      heading: "Đăng ký nhận tư vấn miễn phí cho cơ sở",
      subheading: "Để lại thông tin cơ sở của bạn. Chuyên viên của Sunflower Marketing LLC sẽ chuẩn bị giải pháp phù hợp nhất và liên hệ tư vấn trực tiếp.",
      hotlineHeader: "Hotline & Tin nhắn hỗ trợ",
      hotlineSub: "Hỗ trợ linh hoạt theo các múi giờ Mỹ",
      emailHeader: "Email tư vấn",
      commitmentsTitle: "Nguyên tắc dịch vụ từ Sunflower Marketing LLC:",
      commitment1: "Phản hồi chi tiết trong vòng 24 giờ làm việc",
      commitment2: "Bảo mật tuyệt đối thông tin kinh doanh của cơ sở",
      commitment3: "Không chèo kéo, không làm phiền ngoài giờ làm việc",
      formTitle: "Đăng ký nhận tư vấn giải pháp Digital Marketing",
      formSubtitle: "Vui lòng điền thông tin để chuyên viên chuẩn bị giải pháp chính xác nhất.",
      serviceLegend: "1. Dịch vụ cơ sở đang quan tâm:",
      nameLabel: "Họ và tên của bạn",
      namePlaceholder: "Ví dụ: Jennifer Nguyen",
      phoneLabel: "Số điện thoại / Zalo",
      phonePlaceholder: "+1 (307) ... hoặc số phone tại Mỹ",
      bizLabel: "Loại hình cơ sở",
      bizPlaceholder: "Chọn ngành dịch vụ...",
      urlLabel: "Website hoặc Link Google Maps (Nếu có)",
      urlPlaceholder: "https://maps.google.com/... hoặc tên tiệm",
      noteLabel: "Nhu cầu cụ thể hoặc mong muốn của tiệm (Tùy chọn)",
      notePlaceholder: "Ví dụ: Muốn làm lại website sang trọng hơn, chạy quảng cáo kéo khách mới...",
      submitButton: "Nhận tư vấn miễn phí",
      submittingButton: "Đang gửi thông tin...",
      privacyNote: "Thông tin của bạn được bảo mật tuyệt đối 100% và chỉ dùng cho mục đích tư vấn dịch vụ.",
      successTitle: "Yêu cầu tư vấn đã được tiếp nhận!",
      successDesc: "Cảm ơn bạn đã liên hệ cùng Sunflower Marketing LLC. Chuyên viên sẽ rà soát thông tin cơ sở và liên hệ tư vấn trong vòng 24 giờ.",
      successNextTitle: "Bước tiếp theo:",
      successNextDesc: "Chúng tôi sẽ chuẩn bị bản đề xuất giải pháp phù hợp nhất trước khi liên hệ trao đổi trực tiếp cùng bạn.",
      sendAnother: "Gửi thêm một yêu cầu khác",
      servicesOptions: [
        { value: "combo", label: "Social + Ads Combo ($199/tháng)" },
        { value: "social", label: "Social Media Management ($79 - $129/tháng)" },
        { value: "meta_ads", label: "Facebook & Instagram Ads ($100/tháng)" },
        { value: "google_ads", label: "Google Ads (Tìm kiếm & Maps)" },
        { value: "website", label: "Thiết Kế Website Chuẩn Chuyển Đổi ($199 - $399)" },
        { value: "seo", label: "SEO & Local SEO Google Maps" },
        { value: "review", label: "Quản Lý Đánh Giá Google & Local Maps" },
      ],
      businessTypes: [
        "Nail Salon",
        "Spa & Wellness",
        "Restaurant",
        "Beauty Salon",
        "Cơ sở dịch vụ khác",
      ],
    },
    faq: {
      tag: "Giải Đáp Thắc Mắc",
      heading: "Những câu hỏi thường gặp",
      subheading: "Thông tin minh bạch về quy trình quản lý quảng cáo, quyền sở hữu website và cách thức hỗ trợ.",
      specialCaseTitle: "Bạn cần câu trả lời cho trường hợp đặc thù của tiệm?",
      specialCaseSub: "Chúng tôi sẵn sàng giải đáp trực tiếp qua điện thoại hoặc tin nhắn.",
      specialCaseCta: "Nhắn tin với chuyên viên ngay →",
      faqs: [
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
      ],
    },
    finalCta: {
      badge: "Nâng Tầm Thương Hiệu Số Ngay Hôm Nay",
      heading: "Đưa cơ sở của bạn tiếp cận nhiều khách hàng hơn tại Mỹ",
      description: "Đồng hành cùng Sunflower Marketing LLC để sở hữu diện mạo số chuyên nghiệp: Website sang trọng, Social Media thu hút và Quảng cáo nhắm chọn hiệu quả.",
      ctaAudit: "Nhận tư vấn miễn phí",
      hotlinePrefix: "Hotline",
      perk1: "Phản hồi trong 24h",
      perk2: "100% Không ràng buộc",
      perk3: "Bảo mật thông tin",
    },
    footer: {
      description: "Chuyên sâu giải pháp Digital Marketing, Website chuẩn chuyển đổi, Chăm sóc Social Media và Quảng cáo đa kênh cho Nail Salon, Spa, Restaurant và Beauty Salon tại Mỹ.",
      navHeading: "Điều hướng",
      servicesHeading: "Giải pháp dịch vụ",
      industriesHeading: "Ngành chuyên sâu",
      auditButton: "Nhận tư vấn miễn phí",
      copyright: "Bản quyền thuộc về Sunflower Marketing LLC. Giải pháp Digital Marketing tại Mỹ.",
      privacyLink: "Chính sách bảo mật",
      termsLink: "Điều khoản hợp tác",
      backToTop: "Về đầu trang",
    },
  },

  en: {
    site: {
      name: "Sunflower Marketing LLC",
      shortName: "Sunflower Marketing",
      tagline: "Comprehensive & High-Converting Digital Marketing for US Businesses.",
      subtagline: "Empowering Nail Salons, Spas, Restaurants, and Beauty Salons across the US with conversion-focused Websites, Social Media Management, Targeted Ads, and Google Maps Local SEO.",
      hotline: "+1 (307) 998-1364",
      hotlineHref: "tel:+13079981364",
      email: "hello@sunflowermarketing.com",
      address: "75 E 3rd St, Ste 7, Sheridan, WY 82801, USA",
    },
    nav: {
      links: [
        { label: "Services", href: "#services" },
        { label: "Projects", href: "#portfolio" },
        { label: "Comparison", href: "#comparison" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "#contact" },
      ],
      hotlineLabel: "Hotline",
      auditCta: "Get Free Consultation",
      navMenuLabel: "Navigation Menu",
      themePill: "US Digital Marketing",
    },
    hero: {
      trustBadge: "Digital Marketing Specialist for US Businesses",
      headlinePart1: "Your venue deserves to be",
      headlineTrust: "trusted",
      headlinePart2: ", discovered, and",
      headlineChosen: "chosen",
      description: "Sunflower Marketing LLC provides end-to-end Digital Marketing solutions for Nail Salons, Spas, Restaurants, and Beauty Salons in the United States. From high-converting websites and social media to hyper-local ads and Google Maps SEO.",
      inputPlaceholder: "Enter your business name, Google Maps, or website URL...",
      ctaButton: "Get Free Consultation",
      scanningSteps: [
        "Connecting domain & Google Maps listing...",
        "Analyzing local visibility & ad campaigns...",
        "Ready to connect with our senior strategist."
      ],
      successTitle: "Information Ready!",
      successStatus: "Consultation Ready",
      successDesc: "A senior specialist from Sunflower Marketing LLC will reach out to discuss the most effective digital marketing roadmap for your venue within 24 hours.",
      resetButton: "← Enter another URL",
      viewScorecardLink: "Inspect standard Scorecard metrics ↓",
      freeAuditBadge: "100% Free Consultation",
      noCommitment: "No commitment required",
      errorRequired: "Please enter your business name, website, or Google Maps link.",
      errorInvalid: "Invalid URL. Example: luxenailspa.com or maps.google.com/...",
      featuredCase: "Featured Case Study",
      featuredTitle: "Luxe Nail Lounge — Houston, TX",
      verifiedRating: "US High-End Operational Benchmark",
      growthHighlight: "US Standard",
      topRankPill: "Featured Project",
      partnerTitle: "Supporting local hospitality & wellness brands across the US",
    },
    trustStats: {
      sectionTag: "Operational Standards",
      heading: "Professional Standards & Uncompromising Transparency",
      sourceContext: "Flexible support across US states and local time zones",
      stats: [
        {
          value: 100,
          suffix: "%",
          label: "Client Asset Ownership",
          note: "You retain 100% full ownership of website, ads accounts, and pages",
          emerald: true,
        },
        {
          value: 4,
          suffix: " US Timezones",
          label: "Operational Alignment",
          note: "Flexible coverage across EST, CST, MST, and PST",
          emerald: false,
        },
        {
          value: 2,
          suffix: " Languages",
          label: "Bilingual Coordination",
          note: "Seamless Vietnamese support & native English copy for US clients",
          emerald: false,
        },
      ],
    },
    services: {
      tag: "Core Practices",
      heading: "Comprehensive Digital Marketing for US Businesses",
      subheading: "Harmonizing brand presence, social media engagement, targeted ad campaigns, and high-converting flagship websites.",
      deliverablesLabel: "Core Deliverables:",
      outcomeLabel: "Tangible Benefit",
      comparisonNote: "Unsure which service to prioritize first for your venue?",
      comparisonLink: "Explore the comparative roadmap ↓",
      items: [
        {
          id: "review",
          badge: "Reputation & Trust",
          label: "Google Maps & Review Management",
          title: "Google Review Management & Local SEO",
          description: "Optimize your Google Business Profile, implement countertop customer feedback touchpoints, and professionally respond to online reviews.",
          deliverables: [
            "Local Google Business Profile SEO calibration",
            "Smart QR feedback stands for reception counters",
            "Professional customer review mediation and response scripts",
            "Official appeal assistance for policy-violating negative reviews",
          ],
          outcome: "Establish rock-solid trust on Google Maps so local searchers choose your business with confidence.",
          cta: "Get Free Consultation",
          href: "#contact",
        },
        {
          id: "website",
          badge: "Digital Flagship",
          label: "Conversion Web Design",
          title: "US-Standard Light Luxury Website Design",
          description: "Ultra-fast, mobile-first websites tailored to US service standards, complete with transparent pricing menus, 24/7 online booking, and sublime typography.",
          deliverables: [
            "Bespoke design custom-crafted for Nail Salons, Spas, Salons, and Restaurants",
            "Frictionless 24/7 appointment scheduling & fast-call integration",
            "Sub-1.2s page load speeds meeting Google Core Web Vitals standards",
            "100% intellectual property handover with straightforward management training",
          ],
          outcome: "Clients effortlessly explore your menu and self-book appointments straight from their smartphones.",
          cta: "Get Free Consultation",
          href: "#contact",
        },
        {
          id: "social",
          badge: "Brand Identity",
          label: "Social Media Management",
          title: "Social Media Curation & Management",
          description: "Maintain a pristine, vibrant presence on Facebook and Instagram with regular schedule publishing, aesthetic nail art designs, spa ambiance, and mouthwatering food visuals.",
          deliverables: [
            "Weekly scheduled publishing with engaging storytelling copy",
            "Aesthetic graphic design and engaging short-form video reels",
            "Bilingual Vietnamese & native US English caption copywriting",
            "Bio optimization, appointment link integration, and story highlights",
          ],
          outcome: "An active, captivating social presence that elevates your venue's prestige and credibility.",
          cta: "Get Free Consultation",
          href: "#contact",
        },
        {
          id: "meta_ads",
          badge: "Targeted Reach",
          label: "Facebook & Instagram Ads",
          title: "Hyper-Local Meta Ad Campaigns",
          description: "Targeted advertising calibrated precisely for local residents within a 3–10 mile catchment area, driving inquiries and direct bookings.",
          deliverables: [
            "Setup and ongoing optimization targeting neighborhoods around your venue",
            "Compelling ad creatives (promotional banners, highlight video reels)",
            "Audience targeting based on beauty, dining, and lifestyle interests",
            "100% transparent ad spend reporting direct from your Meta Ads dashboard",
          ],
          outcome: "Reach thousands of high-intent local clients living and working nearby each week.",
          cta: "Get Free Consultation",
          href: "#contact",
        },
        {
          id: "google_ads",
          badge: "High Intent",
          label: "Google Ads",
          title: "Google Search & Maps Ad Campaigns",
          description: "Reach motivated local searchers on Google Search and Maps when prospective customers look for keywords like 'nail salon near me' or 'best spa'.",
          deliverables: [
            "In-depth research on high-intent booking keywords in your zip code",
            "Search campaign setup with direct click-to-call phone extensions",
            "Continuous Cost-Per-Click (CPC) optimization to maximize budget efficiency",
            "Telemetry tracking calls, direction requests, and web appointment submissions",
          ],
          outcome: "Capture ready-to-book clients searching actively for services in your immediate area.",
          cta: "Get Free Consultation",
          href: "#contact",
        },
        {
          id: "seo",
          badge: "Organic Search",
          label: "SEO & Local SEO",
          title: "Local SEO & Google Maps Optimization",
          description: "Sustainable long-term search engine optimization enhancing Google Local Pack and Maps placement without relying entirely on paid advertising.",
          deliverables: [
            "Local keyword optimization tied to your city, neighborhood, and state",
            "Standardized NAP (Name, Address, Phone) consistency across US directories",
            "High-authority local citation building and Google Maps category tuning",
            "Mobile-first on-page website architecture optimized for Google algorithms",
          ],
          outcome: "Command organic search and map visibility for enduring, sustainable client acquisition.",
          cta: "Get Free Consultation",
          href: "#contact",
        },
        {
          id: "combo",
          badge: "Best Value",
          label: "Social + Ads Combo",
          title: "Complete Social Curation & Ads Management",
          description: "Our premier dual-engine solution uniting professional social media management with targeted paid ads for maximum impact and value.",
          deliverables: [
            "Complete features of the Social Media Management plan included",
            "Continuous management and optimization of Facebook & Instagram ad campaigns",
            "Omnichannel visual alignment between organic posts and seasonal promotions",
            "Flexible holiday and seasonal campaign adjustments tailored to US buying cycles",
          ],
          outcome: "Cultivate prestigious brand authority while consistently channeling new clients through your doors.",
          cta: "Get Free Consultation",
          href: "#contact",
        },
      ],
    },
    scorecard: {
      tag: "Professional Assessment",
      heading: "Digital Brand Presence Scorecard",
      subheading: "Evaluating the 4 decisive pillars that drive client bookings in the US: Maps Presence, Website UX, Social Media, and Targeted Ad Campaigns.",
      sampleBadge: "Omnichannel Strategic Evaluation",
      healthScoreLabel: "Presence Score",
      pointsLabel: "/100 Pts",
      eligibleLabel: "High Growth Potential",
      opportunityTitle: "Highest Impact Growth Opportunity",
      ctaButton: "Get Free Consultation",
      industries: [
        {
          id: "nail",
          name: "Nail Salon",
          businessName: "Luxe Nail Lounge - Houston, TX",
          healthScore: 82,
          reviewedDate: "Updated Q3/2026",
          summaryQuote: "Contemporary interior atmosphere, but lacking frictionless mobile booking and targeted neighborhood ad campaigns.",
          metrics: [
            {
              name: "Google Maps Presence",
              score: 85,
              status: "Solid Baseline",
              implication: "Need higher photo density of nail sets and active positive reviews",
              color: "emerald",
            },
            {
              name: "Website & Booking Flow",
              score: 65,
              status: "Needs Upgrade",
              implication: "Missing a streamlined 1-tap mobile reservation interface",
              color: "amber",
            },
            {
              name: "Social Media & Visuals",
              score: 72,
              status: "Developing",
              implication: "Irregular posting schedule; needs aesthetic video reels",
              color: "blue",
            },
            {
              name: "Targeted Ad Campaigns",
              score: 60,
              status: "Unexploited",
              implication: "Not currently running radius-targeted ads within 5 miles",
              color: "amber",
            },
          ],
          keyOpportunity: "Deploy a mobile-friendly booking site paired with radius-targeted Meta Ads to fill off-peak chair hours.",
        },
        {
          id: "spa",
          name: "Spa & Wellness",
          businessName: "Serenity Day Spa - Dallas, TX",
          healthScore: 84,
          reviewedDate: "Updated Q3/2026",
          summaryQuote: "Exceptional therapeutic quality, but guests struggle to review transparent treatment pricing prior to reserving.",
          metrics: [
            {
              name: "Google Maps Presence",
              score: 80,
              status: "Good Standing",
              implication: "Need specialized holistic treatment category tags on Google Business",
              color: "emerald",
            },
            {
              name: "Website & UX Flow",
              score: 88,
              status: "Excellent",
              implication: "Serene aesthetic with clear treatment descriptions and tranquil imagery",
              color: "emerald",
            },
            {
              name: "Local SEO & Citations",
              score: 70,
              status: "Needs Attention",
              implication: "Strengthen local citations and optimize Google Maps presence details",
              color: "blue",
            },
            {
              name: "Google Search Ads",
              score: 64,
              status: "High Potential",
              implication: "Currently missing high-intent searches like 'best spa near me'",
              color: "amber",
            },
          ],
          keyOpportunity: "Launch Google Search Ads capturing active search intent combined with an intuitive mobile service menu.",
        },
        {
          id: "beauty",
          name: "Beauty Salon",
          businessName: "Glow & Co. Beauty Salon - Miami, FL",
          healthScore: 86,
          reviewedDate: "Updated Q3/2026",
          summaryQuote: "Established brand aesthetics; ready to expand reach through active social posting and reputation defense.",
          metrics: [
            {
              name: "Reputation & Trust",
              score: 90,
              status: "Highly Authoritative",
              implication: "Solid profile; establish systematic post-service review collection",
              color: "emerald",
            },
            {
              name: "Social Media Engagement",
              score: 86,
              status: "Professional",
              implication: "Polished before/after client transformations with strong engagement",
              color: "emerald",
            },
            {
              name: "Paid Ad Optimization",
              score: 74,
              status: "Opportunity to Scale",
              implication: "Ad budget could be balanced more effectively between Meta and Google",
              color: "blue",
            },
            {
              name: "Website Speed & Mobile",
              score: 85,
              status: "Seamless",
              implication: "Loads crisply across both iOS and Android mobile viewports",
              color: "emerald",
            },
          ],
          keyOpportunity: "Maintain regular Instagram curation while deploying seasonal promotional campaigns for high-ticket services.",
        },
        {
          id: "restaurant",
          name: "Restaurant",
          businessName: "Golden Lotus Bistro - San Jose, CA",
          healthScore: 79,
          reviewedDate: "Updated Q3/2026",
          summaryQuote: "Outstanding cuisine and ambiance, but patrons face clumsy PDF menus on mobile and miss instant reservations.",
          metrics: [
            {
              name: "Google Maps Presence",
              score: 88,
              status: "Prime Footprint",
              implication: "Frequently searched by nearby diners on Google Maps",
              color: "emerald",
            },
            {
              name: "Mobile Web Menu",
              score: 62,
              status: "Needs Renewal",
              implication: "Menu is an image/PDF file; requires responsive digital view",
              color: "amber",
            },
            {
              name: "Visuals & Social",
              score: 75,
              status: "Developing",
              implication: "Needs mouthwatering dish photography and brief video reels",
              color: "blue",
            },
            {
              name: "Directions & Booking",
              score: 78,
              status: "Needs Optimization",
              implication: "Add prominent 1-tap call reservation and directions buttons",
              color: "blue",
            },
          ],
          keyOpportunity: "Deploy a mobile-first digital menu site with 1-tap call reservations and prominent map directions.",
        },
      ],
    },
    comparison: {
      tag: "Strategic Direction",
      heading: "Optimize your existing channels or build fresh?",
      subheading: "We provide an honest evaluation. If your existing setup has strong fundamentals, we optimize it; if disjointed, we recommend a cohesive new foundation.",
      bestForLabel: "Best suited for:",
      startingPointLabel: "Starting point:",
      scopeLabel: "Core scope:",
      deliverableLabel: "Deliverable:",
      bottomQuestion: "Unsure which engagement route provides the strongest return on investment?",
      bottomCta: "Schedule a complimentary consultation with our strategists",
      col1: {
        tag: "Cost-Effective & Rapid Deployment",
        timeline: "5 – 7 Business Days",
        title: "Optimize Existing Channels",
        subtitle: "For venues with existing web, social, or map profiles that need rejuvenation",
        bestFor: "Established venues wanting to revamp social content, resolve website bottlenecks, and launch local ads.",
        startingPoint: "Holistic evaluation of Google Maps profile, social pages, and current advertising performance.",
        coreWork: [
          "Google Business Profile SEO & keyword optimization",
          "Rejuvenating Facebook & Instagram pages with professional branding",
          "Setting up radius-targeted ad campaigns around your venue",
          "Fixing website UX and speed issues with instant booking buttons",
        ],
        deliverable: "Rejuvenated digital channels + Active ad campaigns + Transparent telemetry reporting.",
        cta: "Get Free Consultation",
        href: "#contact",
      },
      col2: {
        badge: "Flagship Turnkey Solution",
        tag: "Comprehensive & US-Standard",
        timeline: "10 – 14 Business Days",
        title: "Design & Build Turnkey",
        subtitle: "For new venues, rebrands, or businesses seeking definitive market leadership",
        bestFor: "Proprietors desiring a cohesive digital powerhouse from day one: bespoke luxury site, aligned social, and structured ads.",
        startingPoint: "Brand discovery, luxury UI styling, and omnichannel marketing roadmap.",
        coreWork: [
          "Bespoke Light Luxury Website development with integrated booking",
          "Synchronized branding across Facebook, Instagram, and Google Maps",
          "Content publishing strategy and debut promotional advertising plan",
          "100% intellectual property and administrative access handover",
        ],
        deliverable: "Turnkey luxury flagship website + Synchronized social & map channels + Full ownership handover.",
        cta: "Get Free Consultation",
        href: "#contact",
      },
    },
    portfolio: {
      tag: "Featured Case Studies",
      heading: "Realistic digital transformation models for US venues",
      subheading: "Digital marketing case studies for Nail Salons, Spas, Restaurants, and Beauty Salons across the US. Toggle between Before and After to examine the intervention.",
      allCategory: "All Industries",
      afterLabel: "Solution",
      beforeLabel: "Before",
      serviceLabel: "Engaged Service:",
      verifiedStatus: "Completed Project",
      beforeStateTitle: "Initial Bottlenecks:",
      afterStateTitle: "Digital Transformation Solution:",
      ratingMetric: "Core Channel",
      newReviewsMetric: "Local Focus",
      conversionMetric: "Ownership & Asset",
      ctaButton: "Get Free Consultation",
      items: [
        {
          category: "Nail Salon",
          name: "Luxe Nail Lounge",
          location: "Houston, TX, USA",
          service: "Social + Ads Combo & Google Maps",
          result: "Turnkey Deployment • US Nail Salon Standard",
          image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&h=600&fit=crop&auto=format",
          alt: "Modern luxury nail salon interior in the United States",
          metrics: {
            ratingBefore: "Lacked Identity",
            ratingAfter: "Social + Ads Combo",
            reviewGrowth: "5-Mile Local Radius",
            leadGrowth: "100% Client Owned",
          },
          beforeNote: "Inconsistent social posting; missing targeted advertising to attract neighborhood clients.",
          afterNote: "Synchronized Facebook & Instagram presence paired with 5-mile radius ads bringing steady walk-ins.",
        },
        {
          category: "Spa & Wellness",
          name: "Serenity Day Spa",
          location: "Dallas, TX, USA",
          service: "Conversion Website Design & SEO",
          result: "Turnkey Deployment • Light Luxury UI & 24/7 Booking",
          image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop&auto=format",
          alt: "Tranquil spa interior in Dallas, Texas",
          metrics: {
            ratingBefore: "No Website",
            ratingAfter: "Website & Local SEO",
            reviewGrowth: "24/7 Online Booking",
            leadGrowth: "100% Custom Code",
          },
          beforeNote: "Clients waited for messaging replies to check prices, frequently dropping off during busy hours.",
          afterNote: "Sophisticated flagship website with transparent treatment menus; clients self-book online 24/7.",
        },
        {
          category: "Restaurant",
          name: "Golden Lotus Bistro",
          location: "San Jose, CA, USA",
          service: "Google Maps, Local SEO & Social Ads",
          result: "Turnkey Deployment • Brand Positioning & Visual Menu",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&auto=format",
          alt: "Warm contemporary restaurant interior in San Jose, California",
          metrics: {
            ratingBefore: "Hard to Find",
            ratingAfter: "Google Maps & Menu Web",
            reviewGrowth: "Directions & Visual Menu",
            leadGrowth: "Optimized Maps SEO",
          },
          beforeNote: "Menu existed only as blurry scanned image files; diners struggled with navigation and hours.",
          afterNote: "Responsive mobile menu with high-resolution photography, 1-tap directions, and call reservations.",
        },
        {
          category: "Beauty Salon",
          name: "Glow & Co. Beauty Salon",
          location: "Miami, FL, USA",
          service: "Facebook & Instagram Ads & Social Management",
          result: "Turnkey Deployment • Premium Visuals & Targeted Reach",
          image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop&auto=format",
          alt: "Chic modern beauty salon in Miami, Florida",
          metrics: {
            ratingBefore: "Low Engagement",
            ratingAfter: "Meta Ads & Social",
            reviewGrowth: "Local Audience Targeting",
            leadGrowth: "Transparent Ad Spend",
          },
          beforeNote: "Instagram feed dormant for months; missing local advertising opportunities.",
          afterNote: "Consistent high-resolution editorial posts combined with targeted ads reaching beauty enthusiasts.",
        },
      ],
    },
    testimonials: {
      tag: "Authentic Client Experiences",
      heading: "Trusted by salon & venue proprietors across the US",
      subheading: "Hear from founders managing Nail Salons, Spas, Restaurants, and Beauty Salons who partnered with Sunflower Marketing LLC.",
      verifiedBadge: "US Business Proprietor",
      impactLabel: "Key Benefit",
      items: [
        {
          quote: "Sunflower Marketing LLC understands the nuances of US salon operations. Communicating in Vietnamese makes coordination effortless for me, while all English social posts and ads are completely native and polished. Highly recommended!",
          author: "Jennifer Nguyen",
          role: "Founder & Proprietor",
          business: "Luxe Nail Lounge",
          location: "Houston, TX, USA",
          stars: 5,
          highlight: "Effortless Bilingual Communication & Native English Copy",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&auto=format",
        },
        {
          quote: "Our new website embodies the understated luxury our American clients love. Guests praise how easy it is to browse service pricing and book slots directly on mobile. We no longer spend all evening answering booking DMs.",
          author: "Kevin Tran",
          role: "Managing Director",
          business: "Serenity Day Spa",
          location: "Dallas, TX, USA",
          stars: 5,
          highlight: "Elegant Flagship Website & 24/7 Automated Scheduling",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format",
        },
        {
          quote: "I truly appreciate their advertising transparency. Every dollar of ad spend is visible directly in our Meta account, weekly reports are clear, and creative adjustments happen quickly in our local time zone.",
          author: "Christine Le",
          role: "Salon Proprietor",
          business: "Glow & Co. Beauty Salon",
          location: "Miami, FL, USA",
          stars: 5,
          highlight: "100% Ad Spend Transparency & Responsive Time Zone Support",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&auto=format",
        },
        {
          quote: "Since deploying the visual mobile menu and optimizing Google Maps navigation, new guests find us with zero friction. The team is dedicated, communicative, and hands over full administrative ownership.",
          author: "David Vu",
          role: "Restaurateur",
          business: "Golden Lotus Bistro",
          location: "San Jose, CA, USA",
          stars: 5,
          highlight: "Local Discovery Optimization & Intuitive Mobile Menu",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format",
        },
      ],
    },
    whyUs: {
      tag: "Tangible Principles",
      heading: "Why US venue proprietors choose us",
      subheading: "We focus on tangible efficiency, complete cost transparency, and seamless communication tailored to Vietnamese-American business owners.",
      items: [
        {
          icon: "ShieldCheck",
          title: "100% Client Asset Ownership",
          description: "You retain permanent ownership of ad accounts, social pages, domain names, and website code. No hidden fees; ad spend is billed directly by Meta and Google.",
        },
        {
          icon: "Users",
          title: "Deep US Market Fluency",
          description: "Our strategists grasp local American consumer preferences and aesthetics, while providing seamless Vietnamese communication for salon owners.",
        },
        {
          icon: "Clock",
          title: "US Time Zone Operations",
          description: "Working actively across EST, CST, MST, and PST so client requests and ad optimizations happen promptly within the same business day.",
        },
        {
          icon: "TrendingUp",
          title: "Comprehensive End-to-End Suite",
          description: "From custom websites and social media to Meta/Google Ads and Google Maps management—all coordinated smoothly under one reliable umbrella.",
        },
      ],
    },
    process: {
      tag: "4-Stage Workflow",
      heading: "A streamlined, transparent execution process",
      subheading: "Designed to respect your schedule, deliver clear weekly milestones, and produce tangible results.",
      calloutText: "Begin with a complimentary 1-on-1 strategy consultation today.",
      calloutButton: "Get Free Consultation",
      steps: [
        {
          step: "01",
          title: "Discovery & Consultation",
          description: "We listen to your specific operational goals, review your current Google Maps, social media, or website, and recommend tailored solutions.",
        },
        {
          step: "02",
          title: "Strategy & Alignment",
          description: "Formulating a clear action plan: social publishing calendar, local ad target demographics, or custom website design mockups.",
        },
        {
          step: "03",
          title: "Execution & Activation",
          description: "Rolling out scheduled posts, activating local ad campaigns around your venue, or developing your mobile-first flagship website.",
        },
        {
          step: "04",
          title: "Reporting & Optimization",
          description: "Transparent reporting on ad spend, engagement, and direct inquiries, with continuous calibration for optimal performance.",
        },
      ],
    },
    pricing: {
      tag: "Transparent Investment",
      heading: "Digital Marketing Retainer & Design Pricing",
      subheading: "Clear, upfront pricing with no hidden charges. Tailored specifically for US Nail Salons, Spas, Restaurants, and Beauty Salons.",
      tabSocial: "Social & Ads Management (Monthly)",
      tabWebsite: "Website Design (One-Time)",
      popularBadge: "Most Popular",
      featuresLabel: "Included Deliverables:",
      legalNote: "Binding Service Agreement • 100% Full IP Handover upon completion",
      plans: [
        {
          id: "social-basic",
          category: "social",
          name: "Social Basic",
          subtitle: "Maintain an active, polished social media presence",
          price: "$79",
          period: "/month",
          desc: "Ideal for venues wanting a well-curated Facebook & Instagram presence with steady routine publishing.",
          features: [
            "Facebook Page & Instagram curation",
            "8 – 10 high-resolution custom designed posts per month",
            "Engaging bilingual Vietnamese/English or native English copywriting",
            "Information updates for hours, service menus, and location",
            "Quick responsive support for profile edits",
          ],
          cta: "Get Free Consultation",
          highlight: false,
          badge: "Essential",
        },
        {
          id: "social-standard",
          category: "social",
          name: "Social Standard",
          subtitle: "Accelerate brand presence & community engagement",
          price: "$129",
          period: "/month",
          desc: "For venues seeking frequent publishing with eye-catching short-form video reels and seasonal highlights.",
          features: [
            "All capabilities from the Social Basic plan included",
            "14 – 16 modern editorial design posts per month",
            "2 – 4 short-form video reels highlighting nail sets, spa services, or dishes",
            "Seasonal cover photo, profile graphic, and promo story designs",
            "Hashtag calibration and booking link bio optimization",
          ],
          cta: "Get Free Consultation",
          highlight: false,
          badge: "Popular",
        },
        {
          id: "ads-management",
          category: "social",
          name: "Ads Management",
          subtitle: "Specialized hyper-local advertising to drive new clients",
          price: "$100",
          period: "/month",
          desc: "Dedicated campaign setup, demographic targeting, and continuous optimization for Meta Ads or Google Ads.",
          features: [
            "Radius-targeted campaign setup around your venue zip code",
            "High-converting promotional ad creative and copywriting",
            "Precise demographic and interest targeting for local clients",
            "Daily budget monitoring and Cost-Per-Click calibration",
            "100% transparent ad spend reporting direct from your dashboard",
          ],
          cta: "Get Free Consultation",
          highlight: false,
          badge: "Local Reach",
        },
        {
          id: "social-ads-combo",
          category: "social",
          name: "Social + Ads Combo",
          subtitle: "Complete dual-engine growth: Social Curation & Active Ads",
          price: "$199",
          period: "/month",
          desc: "Our premier comprehensive package: combines vibrant social presence with active local ad campaigns.",
          features: [
            "Complete deliverables of Social Standard (posts + video reels)",
            "Complete deliverables of Ads Management (hyper-local ad execution)",
            "Synchronized promotional alignment between posts and paid ads",
            "Custom banner and holiday promotional campaign design",
            "1-on-1 strategic growth consulting with our senior specialist",
          ],
          cta: "Get Free Consultation",
          highlight: true,
          badge: "Recommended • Best Value",
        },
        {
          id: "website-starter",
          category: "website",
          name: "Website Starter",
          subtitle: "Streamlined 1-page digital flagship with instant call",
          price: "$199",
          period: " (One-Time)",
          desc: "A sleek modern 1-page website showcasing your service menu, Google Maps location, and fast click-to-call actions.",
          features: [
            "US hospitality-standard 1-page bespoke UI design",
            "High-resolution digital service pricing menu display",
            "Google Maps directions integration & 1-tap call button",
            "100% mobile-responsive layout for iPhone and Android",
            "Full intellectual property and domain handover",
          ],
          cta: "Get Free Consultation",
          highlight: false,
          badge: "Fast Launch",
        },
        {
          id: "website-business",
          category: "website",
          name: "Website Business",
          subtitle: "Multi-page flagship site with 24/7 online booking",
          price: "$299",
          period: " (One-Time)",
          desc: "Our most requested solution: a multi-page luxury website with full 24/7 online appointment booking integration.",
          features: [
            "Complete multi-page website (Home, Menu, About, Contact)",
            "Integrated 24/7 online appointment scheduling (Booking) engine",
            "Photo showcase gallery displaying nail sets, spa suites, or cuisine",
            "Sub-1.2s rapid page load speed meeting Google Core Web Vitals",
            "Social media and Yelp profile connectivity",
            "Complete ownership handover with straightforward CMS instructions",
          ],
          cta: "Get Free Consultation",
          highlight: true,
          badge: "Most Popular",
        },
        {
          id: "website-premium",
          category: "website",
          name: "Website Premium",
          subtitle: "Bespoke Light Luxury digital flagship engineered from scratch",
          price: "$399",
          period: " (One-Time)",
          desc: "Custom-crafted editorial Light Luxury design, frictionless booking flow, and comprehensive Local SEO calibration.",
          features: [
            "Exclusive Light Luxury editorial UI design crafted from scratch",
            "Advanced booking flow with automated confirmation alerts",
            "Local On-Page SEO optimization with local schema markup",
            "Live Google Maps review feed integration directly on website",
            "Top-tier performance tuning for Google PageSpeed scores",
            "Priority 1-on-1 concierge technical support and warranty",
          ],
          cta: "Get Free Consultation",
          highlight: false,
          badge: "Highest Caliber",
        },
      ],
    },
    contact: {
      tag: "1-on-1 Consultation",
      heading: "Request a complimentary strategy consultation",
      subheading: "Share your venue details. A senior Sunflower Marketing LLC specialist will tailor a custom digital marketing roadmap and reach out directly.",
      hotlineHeader: "Hotline & Messaging",
      hotlineSub: "Flexible support across US time zones",
      emailHeader: "Consultation Inquiries",
      commitmentsTitle: "Sunflower Marketing LLC Commitments:",
      commitment1: "Detailed response within 24 business hours",
      commitment2: "Strict confidentiality covering your business information",
      commitment3: "No high-pressure sales calls or unwanted outreach",
      formTitle: "Request Free Digital Marketing Consultation",
      formSubtitle: "Please provide your venue details so we can prepare tailored recommendations.",
      serviceLegend: "1. Primary service of interest:",
      nameLabel: "Your Full Name",
      namePlaceholder: "e.g. Jennifer Nguyen",
      phoneLabel: "Phone Number / WhatsApp",
      phonePlaceholder: "+1 (307) ... or your US phone number",
      bizLabel: "Business Category",
      bizPlaceholder: "Select business category...",
      urlLabel: "Website or Google Maps Link (If any)",
      urlPlaceholder: "https://maps.google.com/... or venue name",
      noteLabel: "Specific goals or challenges (Optional)",
      notePlaceholder: "e.g. Redesigning website, launching local ads to attract new clients...",
      submitButton: "Get Free Consultation",
      submittingButton: "Submitting details...",
      privacyNote: "Your information is 100% confidential and used exclusively for your consultation session.",
      successTitle: "Consultation Request Received!",
      successDesc: "Thank you for reaching out to Sunflower Marketing LLC. Our specialist will review your venue details and connect within 24 hours.",
      successNextTitle: "Next Steps:",
      successNextDesc: "We will compile a tailored digital marketing overview prior to our phone or video consultation.",
      sendAnother: "Submit another inquiry",
      servicesOptions: [
        { value: "combo", label: "Social + Ads Combo ($199/mo)" },
        { value: "social", label: "Social Media Management ($79 - $129/mo)" },
        { value: "meta_ads", label: "Facebook & Instagram Ads ($100/mo)" },
        { value: "google_ads", label: "Google Ads (Search & Maps)" },
        { value: "website", label: "Conversion Web Design ($199 - $399)" },
        { value: "seo", label: "Local SEO & Google Maps" },
        { value: "review", label: "Google Review Management & Local Maps" },
      ],
      businessTypes: [
        "Nail Salon",
        "Spa & Wellness",
        "Restaurant",
        "Beauty Salon",
        "Other Service Business",
      ],
    },
    faq: {
      tag: "Clear Answers",
      heading: "Frequently Asked Questions",
      subheading: "Transparent explanations regarding ad spend handling, website ownership, and time zone coordination.",
      specialCaseTitle: "Have unique questions about your specific venue?",
      specialCaseSub: "Our team is readily available for direct phone or WhatsApp consultations.",
      specialCaseCta: "Message a Senior Specialist →",
      faqs: [
        {
          q: "How does Sunflower Marketing LLC handle advertising spend?",
          a: "We maintain 100% transparent financial boundaries. Our pricing covers management and optimization ($100/month or included in the $199/month Combo). Your advertising budget (Ad Spend) is billed directly by Meta (Facebook/Instagram) or Google to your own business credit/debit card, ensuring you maintain complete control over your budget.",
        },
        {
          q: "Which sectors and US states does Sunflower Marketing LLC support?",
          a: "We specialize in supporting Vietnamese-American and local service businesses, focusing on Nail Salons, Spas & Wellness, Restaurants, and Beauty Salons across all 50 states (Texas, California, Florida, Georgia, Washington, etc.). Our team operates flexibly across EST, CST, MST, and PST time zones.",
        },
        {
          q: "Do I retain complete ownership of my website upon completion?",
          a: "Unequivocally yes. All source code, domain name accounts, Google Maps credentials, and digital assets remain 100% your permanent property. Sunflower Marketing LLC provides complete administrative access handover along with simple management guides.",
        },
        {
          q: "How long does website delivery take, and is it mobile-optimized?",
          a: "Standard flagship websites are completed and launched within 7 to 14 business days. Every interface is engineered following a Mobile-First standard, ensuring visitors can browse your menu and tap to book appointments effortlessly on iPhone and Android.",
        },
        {
          q: "What languages does your team communicate in?",
          a: "We offer seamless bilingual support: direct consultation and project coordination in Vietnamese for your convenience, while all external customer-facing copy, graphics, ads, and website content are crafted in native US English.",
        },
      ],
    },
    finalCta: {
      badge: "Elevate Your Digital Brand Presence",
      heading: "Attract more local clients to your venue in the US",
      description: "Partner with Sunflower Marketing LLC to establish authoritative digital presence: Elegant Websites, Engaging Social Media, and High-Converting Local Ads.",
      ctaAudit: "Get Free Consultation",
      hotlinePrefix: "Hotline",
      perk1: "24h Response",
      perk2: "100% No Commitment",
      perk3: "Strict Confidentiality",
    },
    footer: {
      description: "Digital Marketing, Conversion Web Design, Social Media Management, and Targeted Ads for Nail Salons, Spas, Restaurants, and Beauty Salons across the US.",
      navHeading: "Navigation",
      servicesHeading: "Service Solutions",
      industriesHeading: "Focus Sectors",
      auditButton: "Get Free Consultation",
      copyright: "Sunflower Marketing LLC. All rights reserved. US Digital Marketing Solutions.",
      privacyLink: "Privacy Policy",
      termsLink: "Terms of Engagement",
      backToTop: "Back to Top",
    },
  },
};
