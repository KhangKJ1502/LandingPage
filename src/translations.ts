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
    popularBadge: string;
    featuresLabel: string;
    legalNote: string;
    plans: {
      name: string;
      subtitle: string;
      price: string;
      period: string;
      desc: string;
      features: string[];
      cta: string;
      highlight: boolean;
      warranty: string;
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
      name: "Craft Web Studio",
      shortName: "Craft Studio",
      tagline: "Giúp cơ sở của bạn được tin tưởng, được tìm thấy và được chọn.",
      subtagline: "Studio chuyên sâu về Quản lý Review 5 sao & Thiết kế Website chuẩn chuyển đổi cho Nail salon, Spa, Nhà hàng và Thẩm mỹ viện.",
      hotline: "0909 123 456",
      hotlineHref: "tel:0909123456",
      email: "hello@craftwebstudio.vn",
      address: "Quận 1, TP. Hồ Chí Minh",
    },
    nav: {
      links: [
        { label: "Dịch vụ", href: "#services" },
        { label: "Bảng Audit", href: "#audit-scorecard" },
        { label: "So sánh gói", href: "#comparison" },
        { label: "Dự án mẫu", href: "#portfolio" },
        { label: "Khách hàng", href: "#testimonials" },
        { label: "Báo giá", href: "#pricing" },
      ],
      hotlineLabel: "Hotline",
      auditCta: "Nhận audit uy tín",
      navMenuLabel: "Danh mục điều hướng",
      themePill: "Light Luxury",
    },
    hero: {
      trustBadge: "Được tin chọn bởi 85+ cơ sở cao cấp",
      headlinePart1: "Giúp cơ sở của bạn được",
      headlineTrust: "tin tưởng",
      headlinePart2: ", được tìm thấy và",
      headlineChosen: "được chọn",
      description: "Studio chuyên sâu về Quản lý Review 5 sao & Thiết kế Website chuẩn chuyển đổi cho Nail salon, Spa, Nhà hàng và Thẩm mỹ viện. Chúng tôi thẩm định các điểm nghẽn uy tín, tối ưu hóa hiển thị trên Google Maps và xây dựng website chuyển đổi khách thật.",
      inputPlaceholder: "Nhập tên cơ sở, link Google Maps hoặc Website...",
      ctaButton: "Nhận audit miễn phí",
      scanningSteps: [
        "Đang kết nối Google Maps & Domain...",
        "Đang phân tích Core Web Vitals & Review Trust...",
        "Hoàn tất chẩn đoán! Đã sẵn sàng."
      ],
      successTitle: "Hoàn tất thẩm định bước đầu!",
      successStatus: "Sẵn sàng báo cáo",
      successDesc: "Chuyên viên của Craft Studio đang tiến hành rà soát chuyên sâu 4 chỉ số (Review, Maps Rank, Tốc độ, Tỷ lệ thoát). Báo cáo phân tích sẽ được gửi đến bạn trong 24 giờ.",
      resetButton: "← Thẩm định thêm URL khác",
      viewScorecardLink: "Xem mẫu bảng Scorecard tiêu chuẩn ↓",
      freeAuditBadge: "Thẩm định bước đầu hoàn toàn miễn phí",
      noCommitment: "Không ràng buộc cam kết",
      errorRequired: "Vui lòng nhập URL website hoặc đường dẫn Google Maps.",
      errorInvalid: "URL không hợp lệ. Ví dụ: lillynailspa.vn hoặc maps.google.com/...",
      featuredCase: "Case study nổi bật",
      featuredTitle: "Lily Nail & Boutique — Quận 3",
      verifiedRating: "Google Maps • +186 Review thật",
      growthHighlight: "Tăng trưởng",
      topRankPill: "Top 1 Google Local Pack",
      partnerTitle: "Đồng hành cùng các thương hiệu dịch vụ tiêu biểu",
    },
    trustStats: {
      sectionTag: "Dữ liệu bảo chứng thực tế",
      heading: "Chất lượng đo lường bằng kết quả kinh doanh",
      sourceContext: "Xác minh theo dữ liệu thực từ Google Business Profile Q3/2026",
      stats: [
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
      ],
    },
    services: {
      tag: "Dịch vụ trọng tâm",
      heading: "Hai con đường đưa cơ sở đến vị thế dẫn đầu",
      subheading: "Mọi giải pháp đều hướng tới một mục tiêu duy nhất: biến khách vãng lai thành khách quen trung thành và tăng doanh thu bền vững.",
      deliverablesLabel: "Hạng mục cốt lõi:",
      outcomeLabel: "Kết quả kỳ vọng đo được",
      comparisonNote: "Bạn phân vân cơ sở của mình cần tối ưu những gì trước?",
      comparisonLink: "Xem bảng so sánh chi tiết 2 hướng đi ↓",
      items: [
        {
          id: "review",
          badge: "Reputation & Trust",
          label: "Quản Lý & Bảo Vệ Uy Tín",
          title: "Tăng Review 5 Sao & SEO Google Maps",
          description: "Thiết lập cơ chế thu hút review tự nhiên từ khách hàng hài lòng tại quầy, sàng lọc phản hồi kín đáo và xử lý chuyên nghiệp các đánh giá tiêu cực.",
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
          description: "Website tốc độ cao, giao diện Light Luxury định vị đẳng cấp thương hiệu, tích hợp đặt lịch hẹn trực tiếp và tối ưu hành trình khách hàng di động.",
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
      ],
    },
    scorecard: {
      tag: "Tiêu Chuẩn Thẩm Định 4 Tiêu Chí",
      heading: "Bảng chấm điểm sức khỏe thương hiệu số",
      subheading: "Chúng tôi không phán đoán cảm tính. Mọi đề xuất đều được đo lường cụ thể qua 4 trụ cột quyết định lượt khách ghé cơ sở của bạn.",
      sampleBadge: "Hồ sơ thẩm định mẫu",
      healthScoreLabel: "Điểm sức khỏe",
      pointsLabel: "/100 Điểm",
      eligibleLabel: "Đủ điều kiện bứt phá",
      opportunityTitle: "Cơ hội tăng trưởng đột phá nhất",
      ctaButton: "Nhận phân tích cơ sở bạn",
      industries: [
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
      ],
    },
    comparison: {
      tag: "Lựa Chọn Lộ Trình Phù Hợp",
      heading: "Nên tối ưu kênh hiện tại hay xây dựng mới?",
      subheading: "Chúng tôi đánh giá trung thực hiện trạng của bạn. Nếu hệ thống cũ còn giá trị, chúng tôi sẽ tối ưu; nếu đã quá lỗi thời, chúng tôi mới đề xuất làm mới.",
      bestForLabel: "Phù hợp nhất cho:",
      startingPointLabel: "Điểm bắt đầu:",
      scopeLabel: "Phạm vi công việc:",
      deliverableLabel: "Kết quả bàn giao:",
      bottomQuestion: "Bạn vẫn chưa chắc chắn gói nào là tối ưu nhất?",
      bottomCta: "Đăng ký 15 phút tư vấn chuyên sâu cùng Studio",
      col1: {
        tag: "Tối ưu chi phí & Triển khai nhanh",
        timeline: "7 – 10 ngày làm việc",
        title: "Audit & Tối Ưu Hiện Tại",
        subtitle: "Dành cho cơ sở đã có website / Google Maps nhưng hiệu quả chưa cao",
        bestFor: "Cơ sở đã hoạt động trên 6 tháng, đã có kênh online nhưng mất hút khách hoặc review còn thấp.",
        startingPoint: "Thẩm định toàn diện URL, Google Maps Profile và phân tích 3 đối thủ trực tiếp trong bán kính 3km.",
        coreWork: [
          "Làm sạch hồ sơ Google Business Profile",
          "Kích hoạt hệ thống gom review tự nhiên tại cơ sở",
          "Sửa lỗi UX, tăng tốc độ website và thêm nút gọi/đặt lịch",
          "Khắc phục rủi ro rò rỉ khách vào tay đối thủ",
        ],
        deliverable: "Bộ tài liệu Audit chi tiết + Hệ thống gom review đã kích hoạt + Website tối ưu.",
        cta: "Thẩm định cơ sở hiện tại",
        href: "#audit",
      },
      col2: {
        badge: "Giải pháp toàn diện nhất",
        tag: "Đẳng cấp toàn diện & Đột phá",
        timeline: "14 – 21 ngày làm việc",
        title: "Thiết Kế & Xây Dựng Mới",
        subtitle: "Dành cho cơ sở mới mở, tái định vị thương hiệu hoặc muốn dẫn đầu thị trường",
        bestFor: "Cơ sở cao cấp mở chi nhánh mới, hoặc muốn nâng tầm hình ảnh để thu hút tệp khách sẵn sàng chi trả cao.",
        startingPoint: "Tư vấn chiến lược định vị, kiến trúc thương hiệu số và trải nghiệm khách hàng mục tiêu.",
        coreWork: [
          "Thiết kế giao diện độc quyền chuẩn Light Luxury",
          "Lập trình tối ưu SEO On-page và chuẩn Core Web Vitals",
          "Tích hợp hệ thống quản lý đặt lịch & CRM chăm sóc",
          "Đồng bộ nhận diện Google Maps, Fanpage và Website",
        ],
        deliverable: "Website hoàn chỉnh cao cấp + Hồ sơ Maps chuẩn Top 1 + Bàn giao quyền sở hữu 100%.",
        cta: "Lên kế hoạch website mới",
        href: "#contact",
      },
    },
    portfolio: {
      tag: "Before & After Case Studies",
      heading: "Sự chuyển đổi thực tế từ các cơ sở đối tác",
      subheading: "Nhấn vào nút công tắc trên từng dự án để đối chiếu hiện trạng ban đầu và kết quả bứt phá sau khi đồng hành cùng Craft Web Studio.",
      allCategory: "Tất cả ngành",
      afterLabel: "Sau can thiệp",
      beforeLabel: "Trước can thiệp",
      serviceLabel: "Dịch vụ triển khai:",
      verifiedStatus: "Đã nghiệm thu",
      beforeStateTitle: "Trạng thái ban đầu:",
      afterStateTitle: "Kết quả sau can thiệp:",
      ratingMetric: "Đánh giá",
      newReviewsMetric: "Review mới",
      conversionMetric: "Chuyển đổi",
      ctaButton: "Xem lộ trình tăng trưởng tương tự",
      items: [
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
      ],
    },
    testimonials: {
      tag: "Đánh Giá & Trải Nghiệm Thực Tế",
      heading: "Được tín nhiệm bởi các chủ thương hiệu dịch vụ",
      subheading: "Lắng nghe chia sẻ từ những người trực tiếp vận hành tiệm nail, spa, nhà hàng và phòng khám thẩm mỹ sau khi hợp tác cùng Craft Web Studio.",
      verifiedBadge: "Đã xác thực",
      impactLabel: "Kết quả ấn tượng",
      items: [
        {
          quote: "Trước đây tiệm mình chỉ có khoảng 30 review, khách khen trực tiếp rất nhiều nhưng không ai lên mạng viết. Từ khi Craft Web Studio setup hệ thống QR và tối ưu Maps, chỉ trong 3 tháng tiệm đã có gần 200 review 5 sao. Lượng khách vãng lai và du khách tìm đến tăng rõ rệt!",
          author: "Chị Mai Phương",
          role: "Chủ sáng lập",
          business: "Lily Nail & Boutique",
          location: "Quận 3, TP.HCM",
          stars: 5,
          highlight: "Tăng 180 review 5★ trong 3 tháng",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&auto=format",
        },
        {
          quote: "Website mới mang phong cách nhẹ nhàng, sang trọng rất đúng gu của Zen Garden. Khách hàng khen website rất đẹp, dễ xem bảng giá và đặt lịch nhanh chóng. Chúng tôi không còn bị quá tải tin nhắn fanpage mà vẫn lấp đầy 90% lịch trị liệu mỗi cuối tuần.",
          author: "Anh Hoàng Nam",
          role: "Giám đốc điều hành",
          business: "Zen Garden Spa & Wellness",
          location: "Quận 7, TP.HCM",
          stars: 5,
          highlight: "Tỷ lệ lấp đầy lịch hẹn đạt 90%",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format",
        },
        {
          quote: "Làm phòng khám thẩm mỹ thì chữ 'Tín' là quan trọng nhất. Craft Web Studio đã giúp cơ sở xử lý triệt để các review spam ác ý, đồng thời định hình website chuẩn chỉ. Khách hàng bước vào phòng khám với tâm thế hoàn toàn tin tưởng vào tay nghề bác sĩ.",
          author: "Bác sĩ Thu Trang",
          role: "Bác sĩ Chuyên khoa & Giám đốc",
          business: "Rosé Beauty Clinic",
          location: "Quận 1, TP.HCM",
          stars: 5,
          highlight: "Bảo vệ danh tiếng & Tăng 3x lượt đặt hẹn",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&auto=format",
        },
        {
          quote: "Rất ưng ý với sự tận tâm và minh bạch. Họ không hứa hẹn suông kiểu cam kết top 1 ảo, mà chỉ số đo lường qua dashboard rất rõ ràng. Cứ đến ngày 30 hàng tháng là có báo cáo tiến độ chi tiết. Đầu tư cực kỳ xứng đáng!",
          author: "Anh Trọng Hiếu",
          role: "Chủ nhà hàng",
          business: "Phố Đèn Lồng Restaurant",
          location: "Hội An",
          stars: 5,
          highlight: "Lọt Top 3 Google Local Pack",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format",
        },
      ],
    },
    whyUs: {
      tag: "Cam Kết Thực Chất",
      heading: "Tại sao các thương hiệu dịch vụ chọn chúng tôi?",
      subheading: "Chúng tôi xem website và hồ sơ Google Maps là tài sản sinh lời của cơ sở, không phải là một chi phí tiêu hao.",
      items: [
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
      ],
    },
    process: {
      tag: "Quy trình 4 bước",
      heading: "Từ thẩm định đến bứt phá lượt đặt hẹn",
      subheading: "Quy trình tinh gọn, không chiếm dụng thời gian quý báu của chủ cơ sở và thấy rõ tiến độ từng tuần.",
      calloutText: "Bạn có thể bắt đầu với bước 01 (Thẩm định miễn phí) ngay hôm nay mà không phải chi trả bất kỳ khoản phí nào.",
      calloutButton: "Nhận audit ngay",
      steps: [
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
      ],
    },
    pricing: {
      tag: "Đầu Tư Minh Bạch",
      heading: "Bảng giá dịch vụ Concierge",
      subheading: "Mọi gói dịch vụ đều được cam kết tiêu chuẩn đầu ra rõ ràng, không chi phí ẩn và bắt đầu bằng báo cáo thẩm định ban đầu.",
      popularBadge: "Lựa chọn hàng đầu",
      featuresLabel: "Đặc quyền bao gồm:",
      legalNote: "Hợp đồng dịch vụ pháp lý minh bạch • Bàn giao 100% quyền sở hữu tài sản số",
      plans: [
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
      ],
    },
    contact: {
      tag: "Tư Vấn Concierge 1-1",
      heading: "Bắt đầu với một buổi thẩm định cơ sở",
      subheading: "Để lại thông tin cơ sở của bạn. Chuyên viên của Craft Web Studio sẽ chuẩn bị sẵn báo cáo phân tích uy tín và liên hệ trao đổi phương án phù hợp nhất.",
      hotlineHeader: "Hotline & Zalo ưu tiên",
      hotlineSub: "Hỗ trợ nhanh 8:00 – 21:00 hàng ngày",
      emailHeader: "Hộp thư thẩm định",
      commitmentsTitle: "Cam kết từ Craft Web Studio:",
      commitment1: "Phản hồi chi tiết trong vòng 24 giờ làm việc",
      commitment2: "Bảo mật tuyệt đối thông tin kinh doanh của cơ sở",
      commitment3: "Không chèo kéo, không gọi làm phiền ngoài giờ",
      formTitle: "Đăng ký thẩm định & nhận lộ trình tăng trưởng",
      formSubtitle: "Vui lòng điền thông tin để chúng tôi chuẩn bị báo cáo chính xác nhất.",
      serviceLegend: "1. Dịch vụ cơ sở đang quan tâm:",
      nameLabel: "Họ và tên",
      namePlaceholder: "Ví dụ: Chị Mai Phương",
      phoneLabel: "Số điện thoại / Zalo",
      phonePlaceholder: "0909 123 456",
      bizLabel: "Loại hình cơ sở",
      bizPlaceholder: "Chọn ngành dịch vụ...",
      urlLabel: "Website hoặc Link Google Maps",
      urlPlaceholder: "https://maps.google.com/...",
      noteLabel: "Nhu cầu cụ thể hoặc mong muốn cần giải quyết (Tùy chọn)",
      notePlaceholder: "Ví dụ: Cơ sở mới mở cần gom review nhanh, hoặc muốn làm lại website sang trọng hơn...",
      submitButton: "Gửi yêu cầu thẩm định miễn phí",
      submittingButton: "Đang mã hóa & gửi thông tin...",
      privacyNote: "Bằng việc gửi thông tin, bạn đồng ý để Craft Web Studio phân tích dữ liệu công khai trên Google Maps của cơ sở.",
      successTitle: "Yêu cầu tư vấn đã được tiếp nhận!",
      successDesc: "Cảm ơn bạn đã tin tưởng Craft Web Studio. Chuyên viên sẽ rà soát thông tin cơ sở và liên hệ trong vòng 24 giờ.",
      successNextTitle: "Bước tiếp theo:",
      successNextDesc: "Chúng tôi sẽ gửi một bản báo cáo PDF tóm tắt hiện trạng Google Maps và website trước khi gọi điện trao đổi trực tiếp.",
      sendAnother: "Gửi thêm một yêu cầu khác",
      servicesOptions: [
        { value: "review", label: "Quản lý & Tăng Review 5★" },
        { value: "website", label: "Thiết kế Website Chuẩn Chuyển Đổi" },
        { value: "combo", label: "Combo Trọn Gói (Review + Website)" },
      ],
      businessTypes: [
        "Tiệm nail / Mi",
        "Spa / Massage / Onsen",
        "Thẩm mỹ viện / Clinic",
        "Nhà hàng / Fine Dining",
        "Cơ sở dịch vụ khác",
      ],
    },
    faq: {
      tag: "Giải Đáp Thắc Mắc",
      heading: "Những câu hỏi thường gặp",
      subheading: "Mọi giải đáp thẳng thắn về quy trình gom review chuẩn Google, thời gian bàn giao và quyền sở hữu mã nguồn website.",
      specialCaseTitle: "Bạn cần câu trả lời cho trường hợp đặc thù?",
      specialCaseSub: "Chúng tôi sẵn sàng giải đáp trực tiếp qua điện thoại hoặc Zalo.",
      specialCaseCta: "Nhắn tin với chuyên viên ngay →",
      faqs: [
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
      ],
    },
    finalCta: {
      badge: "Nâng Tầm Thương Hiệu Số Ngay Hôm Nay",
      heading: "Biến uy tín online thành khách hàng thật cho cơ sở",
      description: "Đừng để khách hàng tiềm năng xung quanh bạn lựa chọn đối thủ chỉ vì vài đánh giá 5 sao. Hãy để Craft Web Studio đồng hành cùng bạn ngay hôm nay.",
      ctaAudit: "Nhận audit uy tín miễn phí",
      hotlinePrefix: "Hotline",
      perk1: "Báo cáo trong 24h",
      perk2: "100% Không ràng buộc",
      perk3: "Bảo mật thông tin",
    },
    footer: {
      description: "Chuyên sâu giải pháp tăng trưởng uy tín và chuyển đổi cho các cơ sở dịch vụ cao cấp tại Việt Nam.",
      navHeading: "Điều hướng",
      servicesHeading: "Giải pháp dịch vụ",
      industriesHeading: "Ngành chuyên sâu",
      auditButton: "Nhận audit cơ sở miễn phí",
      copyright: "Bản quyền thuộc về Craft Web Studio. Thiết kế chuẩn Light Luxury.",
      privacyLink: "Chính sách bảo mật",
      termsLink: "Điều khoản hợp tác",
      backToTop: "Về đầu trang",
    },
  },

  en: {
    site: {
      name: "Craft Web Studio",
      shortName: "Craft Studio",
      tagline: "Helping your business get trusted, discovered, and chosen.",
      subtagline: "A boutique studio specializing in 5-star review management & high-converting website design for luxury nail salons, spas, aesthetic clinics, and fine restaurants.",
      hotline: "+84 909 123 456",
      hotlineHref: "tel:+84909123456",
      email: "hello@craftwebstudio.vn",
      address: "District 1, Ho Chi Minh City, Vietnam",
    },
    nav: {
      links: [
        { label: "Services", href: "#services" },
        { label: "Audit Scorecard", href: "#audit-scorecard" },
        { label: "Compare", href: "#comparison" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Pricing", href: "#pricing" },
      ],
      hotlineLabel: "Hotline",
      auditCta: "Free Audit",
      navMenuLabel: "Navigation Menu",
      themePill: "Light Luxury",
    },
    hero: {
      trustBadge: "Trusted by 85+ premium service venues",
      headlinePart1: "Your business deserves to be",
      headlineTrust: "trusted",
      headlinePart2: ", discovered, and",
      headlineChosen: "chosen",
      description: "Craft Web Studio turns underperforming websites and neglected Google Maps profiles into clear, fast, authoritative growth engines. We inspect the evidence, remove conversion bottlenecks, and build websites that convert visitors into paying clients.",
      inputPlaceholder: "Enter your Google Maps listing or Website URL...",
      ctaButton: "Get Free Audit",
      scanningSteps: [
        "Connecting to Google Maps & Domain...",
        "Analyzing Core Web Vitals & Review Trust...",
        "Diagnostics Complete! Ready."
      ],
      successTitle: "Preliminary Audit Complete!",
      successStatus: "Report Ready",
      successDesc: "Our senior audit specialists are inspecting your 4 core pillars (Review Trust, Maps Rank, Speed, Bounce Rate). Your bespoke breakdown will be delivered within 24 hours.",
      resetButton: "← Audit another URL",
      viewScorecardLink: "Inspect standard Scorecard metrics ↓",
      freeAuditBadge: "100% Free Preliminary Audit",
      noCommitment: "No commitment required",
      errorRequired: "Please enter a valid website or Google Maps link.",
      errorInvalid: "Invalid URL. Example: lillynailspa.com or maps.google.com/...",
      featuredCase: "Featured Case Study",
      featuredTitle: "Lily Nail & Boutique — District 3",
      verifiedRating: "Google Maps • +186 Verified Reviews",
      growthHighlight: "Growth",
      topRankPill: "Top 1 Google Local Pack",
      partnerTitle: "Trusted by distinguished hospitality and wellness brands",
    },
    trustStats: {
      sectionTag: "Evidence-Based Performance",
      heading: "Quality measured by tangible business growth",
      sourceContext: "Verified from live Google Business Profiles & Analytics, Q3/2026",
      stats: [
        {
          value: 85,
          suffix: "+",
          label: "Luxury Venues Partnered",
          note: "Nail · Spa · Aesthetic · Fine Dining",
          emerald: false,
        },
        {
          value: 6200,
          suffix: "+",
          label: "Verified 5★ Reviews",
          note: "Google Maps, Facebook & Yelp",
          emerald: false,
        },
        {
          value: 280,
          suffix: "%",
          label: "Local Discovery Growth",
          note: "Achieved Top 3 Google Local Pack",
          emerald: true,
        },
      ],
    },
    services: {
      tag: "Core Practices",
      heading: "Two deliberate paths to local market dominance",
      subheading: "Every intervention has one clear objective: turning curious browsers into loyal regulars and expanding sustainable recurring revenue.",
      deliverablesLabel: "Core Deliverables:",
      outcomeLabel: "Measurable Target Outcome",
      comparisonNote: "Unsure which engagement path fits your venue best?",
      comparisonLink: "Compare the two strategic paths in detail ↓",
      items: [
        {
          id: "review",
          badge: "Reputation & Trust",
          label: "Reputation Engineering",
          title: "5-Star Review Growth & Google Maps SEO",
          description: "Implement frictionless QR collection touchpoints for delighted in-store clients, discreetly capture constructive feedback, and professionally defuse malicious attacks.",
          deliverables: [
            "Smart NFC & QR review stands for reception counters",
            "Google Business Profile optimization for local SEO dominance",
            "Reputation defense against spam and hostile negative reviews",
            "Monthly sentiment telemetry and client feedback analytics",
          ],
          outcome: "Average +120 authentic 5★ reviews within the first 60 days.",
          cta: "Explore Review Process",
          href: "#process",
        },
        {
          id: "website",
          badge: "Digital Flagship",
          label: "Conversion Website Design",
          title: "Bespoke Light Luxury Website Development",
          description: "Ultra-fast, editorial-grade digital flagships designed for discerning clients. Features frictionless appointment booking and mobile-first micro-interactions.",
          deliverables: [
            "Custom Light Luxury design system tailored to hospitality & wellness",
            "Frictionless appointment booking & deposit flow",
            "Sub-1.2s page load speeds meeting Google Core Web Vitals",
            "Complete ownership handover with intuitive CMS training",
          ],
          outcome: "65% increase in direct appointment bookings within 30 days.",
          cta: "Explore Portfolio Designs",
          href: "#portfolio",
        },
      ],
    },
    scorecard: {
      tag: "4-Pillar Diagnostic Framework",
      heading: "Digital Brand Health Scorecard",
      subheading: "We avoid guesswork. Every strategic recommendation is rooted in the 4 fundamental pillars that determine whether clients book your venue or your rival's.",
      sampleBadge: "Sample Venue Assessment",
      healthScoreLabel: "Health Score",
      pointsLabel: "/100 Pts",
      eligibleLabel: "Prime for Breakthrough",
      opportunityTitle: "Highest Impact Growth Opportunity",
      ctaButton: "Audit Your Own Venue",
      industries: [
        {
          id: "nail",
          name: "Nail & Lash Lounge",
          businessName: "Lily Nail Lounge (Live Sample)",
          healthScore: 78,
          reviewedDate: "Audited Q3/2026",
          summaryQuote: "Exquisite interior ambiance, but leaking high-intent local map searchers due to missing instant mobile booking.",
          metrics: [
            {
              name: "Review Trust & Velocity",
              score: 84,
              status: "Solid Baseline (4.3★)",
              implication: "Need higher photo review density directly from service chairs",
              color: "emerald",
            },
            {
              name: "Website Conversion Flow",
              score: 62,
              status: "Requires Attention",
              implication: "No prominent 1-tap booking button visible above the mobile fold",
              color: "amber",
            },
            {
              name: "Google Maps Visibility",
              score: 74,
              status: "Ascending",
              implication: "Ranks #4-6 within 3km radius; needs Local Citations boost",
              color: "blue",
            },
            {
              name: "Mobile Experience & Speed",
              score: 91,
              status: "Flawless",
              implication: "Loads in 1.1s with immaculate typography on iOS and Android",
              color: "emerald",
            },
          ],
          keyOpportunity: "Integrating 1-tap booking and on-table QR review cards will unlock ~40% higher direct booking volume.",
        },
        {
          id: "spa",
          name: "Spa & Wellness",
          businessName: "Zen Garden Spa & Onsen",
          healthScore: 82,
          reviewedDate: "Audited Q3/2026",
          summaryQuote: "High walk-in volume, but lacking automated follow-up to prompt repeat clients for post-treatment reviews.",
          metrics: [
            {
              name: "Review Trust & Velocity",
              score: 79,
              status: "High Potential",
              implication: "Overwhelmingly positive sentiment, but total review volume is modest",
              color: "blue",
            },
            {
              name: "Website Conversion Flow",
              score: 86,
              status: "Excellent",
              implication: "Transparent menu and serene imagery inspire immediate trust",
              color: "emerald",
            },
            {
              name: "Google Maps Visibility",
              score: 68,
              status: "Needs Optimization",
              implication: "Missing secondary treatment keyword tags in Maps categories",
              color: "amber",
            },
            {
              name: "Mobile Experience & Speed",
              score: 89,
              status: "Strong Foundation",
              implication: "100% responsive across retina displays",
              color: "emerald",
            },
          ],
          keyOpportunity: "Optimize local SEO keywords for 'luxury massage & wellness near me' to capture the #1 Map pin.",
        },
        {
          id: "clinic",
          name: "Aesthetic Clinic",
          businessName: "Rosé Beauty Clinic",
          healthScore: 89,
          reviewedDate: "Audited Q3/2026",
          summaryQuote: "Reputable clinical authority, now focused on insulating prestige against anonymous smear campaigns.",
          metrics: [
            {
              name: "Review Trust & Velocity",
              score: 94,
              status: "Top Tier (4.9★)",
              implication: "320+ authentic client testimonials praising head doctors",
              color: "emerald",
            },
            {
              name: "Website Conversion Flow",
              score: 88,
              status: "High Converting",
              implication: "Clinical case study pages generate 15-20 qualified inquiries daily",
              color: "emerald",
            },
            {
              name: "Google Maps Visibility",
              score: 90,
              status: "Dominant #1",
              implication: "Unrivaled visibility across central District 1",
              color: "emerald",
            },
            {
              name: "Mobile Experience & Speed",
              score: 85,
              status: "Studio Grade",
              implication: "High-resolution treatment protocol charts load seamlessly",
              color: "blue",
            },
          ],
          keyOpportunity: "Maintain automated reputation defense and mirror this framework across new branch locations.",
        },
        {
          id: "restaurant",
          name: "Dining & Hospitality",
          businessName: "Phố Đèn Lồng Restaurant",
          healthScore: 76,
          reviewedDate: "Audited Q3/2026",
          summaryQuote: "Exceptional culinary craft, but international travelers struggle with PDF-only menus and clumsy reservations.",
          metrics: [
            {
              name: "Review Trust & Velocity",
              score: 81,
              status: "Solid (4.4★)",
              implication: "Frequent culinary praise; needs more dish photo submissions",
              color: "emerald",
            },
            {
              name: "Website Conversion Flow",
              score: 65,
              status: "Needs Renewal",
              implication: "Lacks dedicated web presence; currently dependent on social pages",
              color: "amber",
            },
            {
              name: "Google Maps Visibility",
              score: 88,
              status: "Prime Location",
              implication: "Heavy discovery traffic from tourists exploring Old Town",
              color: "emerald",
            },
            {
              name: "Mobile Experience & Speed",
              score: 70,
              status: "Moderate",
              implication: "Requires fast web menu view without downloading heavy PDF files",
              color: "blue",
            },
          ],
          keyOpportunity: "Deploy a lightweight web menu with instant reservation booking ahead of peak dinner rushes.",
        },
      ],
    },
    comparison: {
      tag: "Choosing Your Path",
      heading: "Optimize your current presence or rebuild from scratch?",
      subheading: "We give you an honest appraisal. If your existing setup has strong bones, we optimize it. If it is beyond salvage, only then do we recommend a ground-up rebuild.",
      bestForLabel: "Best suited for:",
      startingPointLabel: "Starting point:",
      scopeLabel: "Core scope:",
      deliverableLabel: "Deliverable:",
      bottomQuestion: "Still wondering which route yields the highest ROI?",
      bottomCta: "Book a complimentary 15-minute studio strategy session",
      col1: {
        tag: "Cost-Effective & Fast Deployment",
        timeline: "7 – 10 Business Days",
        title: "Audit & Optimize",
        subtitle: "For venues with useful foundations that lose attention, trust, or bookings",
        bestFor: "Operating venues with existing web/map assets that suffer from low review counts or high mobile drop-off rates.",
        startingPoint: "Complete URL audit, Google Business Profile inspection, and competitor benchmark in a 3km radius.",
        coreWork: [
          "Google Business Profile sanitization and keyword optimization",
          "In-store NFC/QR review acquisition engine deployment",
          "Mobile UX repair, speed acceleration, and 1-tap booking integration",
          "Eliminating conversion leaks sending clients to nearby rivals",
        ],
        deliverable: "Prioritized Audit Dossier + Activated Review System + Repaired High-Speed Website.",
        cta: "Audit Existing Venue",
        href: "#audit",
      },
      col2: {
        badge: "Flagship Solution",
        tag: "Bespoke Craft & Market Leadership",
        timeline: "14 – 21 Business Days",
        title: "Design & Build",
        subtitle: "For new luxury venues, complete rebrands, or commanding market leaders",
        bestFor: "Discerning venues opening flagship branches or seeking premium positioning to attract high-ticket clients.",
        startingPoint: "Brand discovery, digital architecture, luxury positioning, and client conversion path strategy.",
        coreWork: [
          "Bespoke Light Luxury UI design system crafted from scratch",
          "Clean-code development meeting Google Core Web Vitals",
          "Frictionless booking engine & CRM integration",
          "Omnichannel alignment across Google Maps, Social, and Web",
        ],
        deliverable: "Turnkey Luxury Flagship Website + Top-Ranked Google Maps Profile + 100% IP Handover.",
        cta: "Commission New Flagship",
        href: "#contact",
      },
    },
    portfolio: {
      tag: "Before & After Case Studies",
      heading: "Real transformation from partner venues",
      subheading: "Toggle between 'Before' and 'After' on any case study to examine the observable shift after partnering with Craft Web Studio.",
      allCategory: "All Industries",
      afterLabel: "After Intervention",
      beforeLabel: "Before Intervention",
      serviceLabel: "Engaged Service:",
      verifiedStatus: "Verified Outcome",
      beforeStateTitle: "Initial Bottlenecks:",
      afterStateTitle: "Post-Launch Results:",
      ratingMetric: "Rating",
      newReviewsMetric: "Review Growth",
      conversionMetric: "Direct Bookings",
      ctaButton: "View similar growth roadmap",
      items: [
        {
          category: "Nail Salon",
          name: "Lily Nail & Spa",
          location: "District 3, HCMC",
          service: "Review Engineering & Maps SEO",
          result: "4.2★ → 4.9★ · +180 reviews in 3 months",
          image: "https://images.unsplash.com/photo-1652869122685-c7792ef56ee2?w=800&h=600&fit=crop&auto=format",
          alt: "Luxury nail lounge with velvet seating and warm ambient lighting",
          metrics: {
            ratingBefore: "4.2★",
            ratingAfter: "4.9★",
            reviewGrowth: "+180 reviews",
            leadGrowth: "+75% new bookings",
          },
          beforeNote: "Infrequent reviews, ranked #8 on Google Maps for local queries",
          afterNote: "#1 Google Maps rank, flood of verified photo reviews and weekend walk-ins",
        },
        {
          category: "Spa & Wellness",
          name: "Zen Garden Spa",
          location: "District 7, HCMC",
          service: "Luxury Web Design + Booking Engine",
          result: "Online bookings jumped 65% in 30 days",
          image: "https://images.unsplash.com/photo-1633681926019-03bd9325ec20?w=800&h=600&fit=crop&auto=format",
          alt: "Serene spa interior with natural oak and botanical accents",
          metrics: {
            ratingBefore: "4.4★",
            ratingAfter: "4.9★",
            reviewGrowth: "+125 reviews",
            leadGrowth: "+65% appointments",
          },
          beforeNote: "Clients waited hours for social chat replies; 40% abandoned inquiries",
          afterNote: "Clients self-schedule treatment packages 24/7 on mobile",
        },
        {
          category: "Restaurant",
          name: "Phố Đèn Lồng Restaurant",
          location: "Ancient Town, Hoi An",
          service: "Review Engineering + Google Maps SEO",
          result: "Top 3 Google Maps · +95 five-star reviews",
          image: "https://images.unsplash.com/photo-1770819372114-644ada828e22?w=800&h=600&fit=crop&auto=format",
          alt: "Intimate restaurant with lantern glow and heritage wood",
          metrics: {
            ratingBefore: "4.1★",
            ratingAfter: "4.8★",
            reviewGrowth: "+95 reviews",
            leadGrowth: "Top 3 Maps Pin",
          },
          beforeNote: "Plagued by random 3-star reviews; invisible to foreign travelers",
          afterNote: "Bilingual digital menu, doubled advance dinner reservations",
        },
        {
          category: "Aesthetic Clinic",
          name: "Rosé Beauty Clinic",
          location: "District 1, HCMC",
          service: "Reputation Armor + Conversion Flagship",
          result: "3× increase in online consultation leads",
          image: "https://images.unsplash.com/photo-1658492055212-e1acbccfca5a?w=800&h=600&fit=crop&auto=format",
          alt: "Pristine clinical dermatology treatment suite",
          metrics: {
            ratingBefore: "4.5★",
            ratingAfter: "5.0★",
            reviewGrowth: "+210 reviews",
            leadGrowth: "3× Inquiries",
          },
          beforeNote: "Slow legacy site caused high visitor drop-off before booking",
          afterNote: "Medical-grade aesthetic flagship, transparent treatment plans, record inquiries",
        },
      ],
    },
    testimonials: {
      tag: "Client Endorsements",
      heading: "Trusted by visionary hospitality & beauty founders",
      subheading: "Hear directly from salon, spa, restaurant, and clinic proprietors who turned digital reputation into tangible revenue with Craft Web Studio.",
      verifiedBadge: "Verified Client",
      impactLabel: "Notable Impact",
      items: [
        {
          quote: "Before Craft Web Studio, our salon only had ~30 reviews. Clients loved our work in person, but rarely reviewed online. Within 3 months of deploying their smart QR system, we broke past 200 five-star reviews. Our walk-in tourist traffic exploded.",
          author: "Ms. Mai Phuong",
          role: "Founder & Lead Stylist",
          business: "Lily Nail & Boutique",
          location: "District 3, HCMC",
          stars: 5,
          highlight: "+180 5★ reviews in 90 days",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&auto=format",
        },
        {
          quote: "Our new website embodies the serene, understated elegance of Zen Garden. Guests love how effortless it is to browse our rituals and reserve slots online. Our weekend schedule is consistently 90% booked without any manual messaging hassle.",
          author: "Mr. Hoang Nam",
          role: "Managing Director",
          business: "Zen Garden Spa & Wellness",
          location: "District 7, HCMC",
          stars: 5,
          highlight: "90% Weekend Occupancy Rate",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format",
        },
        {
          quote: "In medical aesthetics, trust is everything. Craft Web Studio neutralized malicious reviews while elevating our flagship site to clinical luxury standards. Our patients now arrive with complete confidence in our medical team.",
          author: "Dr. Thu Trang",
          role: "Medical Director & Head Dermatologist",
          business: "Rosé Beauty Clinic",
          location: "District 1, HCMC",
          stars: 5,
          highlight: "Reputation Protected & 3× Leads",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&auto=format",
        },
        {
          quote: "Their clarity and transparency are unmatched. No false promises—just honest telemetry delivered on the 30th of every month. The return on investment has been exceptional for our restaurant.",
          author: "Mr. Trong Hieu",
          role: "Restaurateur",
          business: "Phố Đèn Lồng Restaurant",
          location: "Hoi An",
          stars: 5,
          highlight: "Ranked Top 3 Local Pack",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format",
        },
      ],
    },
    whyUs: {
      tag: "Core Principles",
      heading: "Why leading service brands choose us",
      subheading: "We treat your web presence and Google Maps listing as income-generating assets, not decorative expenses.",
      items: [
        {
          icon: "ShieldCheck",
          title: "Audited & Transparent",
          description: "Every metric is pulled directly from verified Google Business Profiles & Analytics. No inflated vanity numbers.",
        },
        {
          icon: "Zap",
          title: "Results in 7 Days",
          description: "Within the very first week of system activation, you will witness authentic 5-star customer reviews streaming in.",
        },
        {
          icon: "Users",
          title: "Deep Industry Fluency",
          description: "Nails, spas, clinics, restaurants—we engineer interfaces that mirror the real emotional journey of your clients.",
        },
        {
          icon: "TrendingUp",
          title: "Long-Term Guardianship",
          description: "We don't vanish after launch. We provide ongoing monthly optimization, security backups, and ranking guardianship.",
        },
      ],
    },
    process: {
      tag: "4-Stage Workflow",
      heading: "From evidence audit to predictable bookings",
      subheading: "A streamlined, respectful process designed to minimize demands on your schedule while delivering rapid weekly milestones.",
      calloutText: "You can initiate Stage 01 (Free Diagnostic Audit) today without paying a single cent.",
      calloutButton: "Claim Free Audit",
      steps: [
        {
          step: "01",
          title: "Audit & Diagnostics",
          description: "Forensic inspection of your Google Maps listing, existing website, and rival vulnerabilities within your local catchment area.",
        },
        {
          step: "02",
          title: "Conversion Strategy",
          description: "Formulating high-impact priorities: in-venue review collection, mobile reservation flows, and photo asset curation.",
        },
        {
          step: "03",
          title: "Turnkey Execution",
          description: "Deploying countertop NFC/QR review stands, engineering the Light Luxury website, and synchronizing local search SEO.",
        },
        {
          step: "04",
          title: "Growth & Governance",
          description: "Monthly conversion reporting, proactive review mediation, and technical expansion as your venue scales new branches.",
        },
      ],
    },
    pricing: {
      tag: "Transparent Investment",
      heading: "Concierge Retainer Plans",
      subheading: "Every tier includes unambiguous deliverables, no hidden extras, and commences with an initial forensic audit.",
      popularBadge: "Most Popular",
      featuresLabel: "Retainer Privileges:",
      legalNote: "Binding Service Level Agreement • 100% Full IP Handover upon completion",
      plans: [
        {
          name: "Starter Concierge",
          subtitle: "For venues seeking an unshakeable local reputation foundation",
          price: "$199",
          period: "/month",
          desc: "Focused on solving the review deficit and anchoring your venue in the top 3 Google Maps pins across your district.",
          features: [
            "Comprehensive Google Maps & Digital Reputation Audit",
            "Turnkey in-venue QR & NFC review collection kit",
            "Google Business Profile SEO & category calibration",
            "Negative review monitoring & crisis response scripts",
            "Transparent monthly performance telemetry report",
          ],
          cta: "Begin with Starter",
          highlight: false,
          warranty: "Guaranteed minimum +30 real reviews/month",
        },
        {
          name: "Growth Elite",
          subtitle: "Our flagship engagement — 5★ Reviews & Bespoke Luxury Web",
          price: "$399",
          period: "/month",
          desc: "Establish undisputed local market leadership with an editorial Light Luxury website, automated booking, and 5-star review dominance.",
          features: [
            "All capabilities included in Starter Concierge",
            "Bespoke Light Luxury Website Design & Development",
            "24/7 frictionless appointment reservation engine",
            "Google Local Pack top-ranking SEO optimization",
            "Priority 24/7 technical hotline & automated backups",
            "Complimentary premium domain & ultra-fast CDN hosting",
          ],
          cta: "Select Growth Elite",
          highlight: true,
          warranty: "Selected by 70% of client venues",
        },
        {
          name: "Enterprise Bespoke",
          subtitle: "For multi-location chains and luxury boutique groups",
          price: "Custom",
          period: "",
          desc: "Tailored multi-location digital architecture, unified brand reputation governance, and enterprise POS/booking integrations.",
          features: [
            "All capabilities from Growth Elite included",
            "Centralized governance for multi-branch Google Maps",
            "Dedicated Senior Account Director (1-on-1)",
            "Deep integration with proprietary POS/CRM platforms",
            "Contractually binding Enterprise SLA commitments",
          ],
          cta: "Request Executive Consultation",
          highlight: false,
          warranty: "Bespoke proposal tailored to your group",
        },
      ],
    },
    contact: {
      tag: "1-on-1 Concierge Consultation",
      heading: "Commence with a venue diagnostic session",
      subheading: "Submit your venue details. A senior Craft Web Studio specialist will prepare a bespoke reputation audit dossier before we connect.",
      hotlineHeader: "Priority Hotline & WhatsApp",
      hotlineSub: "Daily concierge support 8:00 – 21:00 (GMT+7)",
      emailHeader: "Diagnostic Inquiries",
      commitmentsTitle: "Craft Web Studio Commitments:",
      commitment1: "Detailed diagnostic response within 24 business hours",
      commitment2: "Strict NDA privacy covering your operational data",
      commitment3: "No high-pressure sales calls or unwanted outreach",
      formTitle: "Request Venue Audit & Growth Roadmap",
      formSubtitle: "Please provide your venue details so we can conduct preliminary telemetry.",
      serviceLegend: "1. Primary area of interest:",
      nameLabel: "Proprietor / Manager Name",
      namePlaceholder: "e.g. Ms. Mai Phuong",
      phoneLabel: "Phone / WhatsApp / Zalo",
      phonePlaceholder: "+84 909 123 456",
      bizLabel: "Venue Category",
      bizPlaceholder: "Select venue category...",
      urlLabel: "Website or Google Maps Link",
      urlPlaceholder: "https://maps.google.com/...",
      noteLabel: "Specific challenges or objectives (Optional)",
      notePlaceholder: "e.g. Newly opened branch needing rapid 5-star review density, or redesigning an outdated website...",
      submitButton: "Claim Free Diagnostic Audit",
      submittingButton: "Encrypting & Transmitting...",
      privacyNote: "By submitting, you authorize Craft Web Studio to inspect publicly available Google Maps telemetry for your venue.",
      successTitle: "Audit Request Successfully Received!",
      successDesc: "Thank you for trusting Craft Web Studio. Our specialists will inspect your venue profile and contact you within 24 hours.",
      successNextTitle: "Next Steps:",
      successNextDesc: "We will compile a concise PDF audit highlighting your highest-impact Google Maps and conversion opportunities prior to our call.",
      sendAnother: "Submit an additional request",
      servicesOptions: [
        { value: "review", label: "5★ Review & Reputation" },
        { value: "website", label: "Conversion Web Design" },
        { value: "combo", label: "Turnkey Combo (Review + Web)" },
      ],
      businessTypes: [
        "Nail & Lash Lounge",
        "Spa / Wellness / Onsen",
        "Aesthetic / Dermatology Clinic",
        "Restaurant / Fine Dining",
        "Other Premium Service Venue",
      ],
    },
    faq: {
      tag: "Clear Answers",
      heading: "Frequently Asked Questions",
      subheading: "Transparent explanations regarding Google policy compliance, deployment timeframes, and intellectual property ownership.",
      specialCaseTitle: "Have a unique multi-venue operational model?",
      specialCaseSub: "Our directors are readily available for direct phone or WhatsApp consultations.",
      specialCaseCta: "Message a Senior Specialist →",
      faqs: [
        {
          q: "How does the review collection engine work, and does it comply with Google's policies?",
          a: "It is 100% compliant with Google, Yelp, and Facebook developer policies. We install subtle countertop touchpoints (NFC cards, elegant QR stands) at your checkout desk. Delighted clients tap their phones in 5 seconds to leave verified feedback on their personal Google accounts while on your premises—which Google algorithms prioritize highest.",
        },
        {
          q: "Can I engage your review management service if my venue doesn't have a website yet?",
          a: "Absolutely. Our Reputation Management operates directly on your Google Business Profile and Google Maps pins. However, pairing it with a high-converting website ensures visitors who read your 5-star reviews immediately book an appointment rather than shopping around.",
        },
        {
          q: "How long does website delivery take, and will my staff be able to manage it?",
          a: "Standard flagship websites are completed and launched within 14 to 21 business days. We build intuitive, lightweight visual editors, allowing your team to update seasonal pricing, gallery photos, and view bookings easily from a smartphone.",
        },
        {
          q: "Do you assist when rivals or malicious actors post fraudulent 1-star reviews?",
          a: "Yes. We maintain a dual-action crisis protocol: (1) Direct escalation appeals with Google Trust & Safety for reviews violating content policies, and (2) Strategic public response phrasing that reassures prospective clients reading the profile.",
        },
        {
          q: "If we conclude our retainer, do we keep our website and reviews?",
          a: "Unequivocally yes. All digital assets—including custom code, domain names, Google Maps credentials, and collected reviews—are 100% your permanent property. We execute a clean intellectual property handover.",
        },
      ],
    },
    finalCta: {
      badge: "Elevate Your Digital Flagship Today",
      heading: "Turn online reputation into booked appointments",
      description: "Don't lose local clients to lesser competitors simply because of a review deficit. Partner with Craft Web Studio to command the authority your craft deserves.",
      ctaAudit: "Claim Free Reputation Audit",
      hotlinePrefix: "Hotline",
      perk1: "24h Response",
      perk2: "100% No Commitment",
      perk3: "Strict Confidentiality",
    },
    footer: {
      description: "Boutique digital studio specializing in reputation growth and high-converting websites for premium service brands in Vietnam.",
      navHeading: "Navigation",
      servicesHeading: "Service Solutions",
      industriesHeading: "Focus Sectors",
      auditButton: "Get Free Venue Audit",
      copyright: "Craft Web Studio. All rights reserved. Light Luxury Design.",
      privacyLink: "Privacy Policy",
      termsLink: "Terms of Engagement",
      backToTop: "Back to Top",
    },
  },
};
