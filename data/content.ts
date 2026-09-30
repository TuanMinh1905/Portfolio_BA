export type Lang = "en" | "vi";

export const content = {
  nav: {
    en: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },
    vi: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      projects: "Dự án",
      experience: "Kinh nghiệm",
      education: "Học vấn",
      contact: "Liên hệ",
    },
  },

  hero: {
    en: {
      greeting: "Hi, I'm",
      name: "Phạm Tuấn Minh",
      roles: [
        "Business Analyst",
        "IT-Savvy BA",
        "Requirements Analyst",
        "Process Design Specialist",
      ],
      description:
        "A Business Analyst with a solid IT background — bridging business needs and technology to deliver clear requirements, streamlined processes, and data-driven solutions.",
      cta_projects: "View Projects",
      cta_contact: "Contact Me",
      cta_cv: "Download CV",
    },
    vi: {
      greeting: "Xin chào, tôi là",
      name: "Phạm Tuấn Minh",
      roles: [
        "Business Analyst",
        "BA có nền tảng IT",
        "Phân tích yêu cầu hệ thống",
        "Thiết kế quy trình nghiệp vụ",
      ],
      description:
        "Business Analyst với nền tảng IT vững chắc — kết nối nghiệp vụ và công nghệ, xây dựng yêu cầu rõ ràng, tối ưu quy trình và đưa ra giải pháp dựa trên dữ liệu.",
      cta_projects: "Xem dự án",
      cta_contact: "Liên hệ",
      cta_cv: "Tải CV",
    },
  },

  about: {
    en: {
      title: "About Me",
      subtitle: "Get to know me",
      bio: "I'm a Business Analyst candidate and a recent IT graduate from Ho Chi Minh City University of Technology and Education (HCMUTE), majoring in Information Technology / Information Systems.",
      bio2:
        "My background as a developer gives me an uncommon edge as a BA — I can speak directly with dev teams, write precise technical specifications, and understand system constraints that purely business-oriented analysts often miss. I've applied BA thinking across both real-world internship work and graduation thesis projects.",
      bio3:
        "I'm driven by turning complex, messy requirements into clear, actionable plans. Whether it's drawing process flows, writing user stories, or conducting stakeholder interviews — I bring structure to ambiguity.",
      info: [
        { label: "Name", value: "Phạm Tuấn Minh" },
        { label: "Date of Birth", value: "19 May 2003" },
        { label: "Email", value: "phamtuanminh19052003@gmail.com" },
        { label: "Phone", value: "0773-772-174" },
        { label: "LinkedIn", value: "linkedin.com/in/ptm1905" },
        { label: "GitHub", value: "github.com/TuanMinh1905" },
      ],
    },
    vi: {
      title: "Giới thiệu",
      subtitle: "Tìm hiểu về tôi",
      bio: "Tôi là ứng viên Business Analyst, tốt nghiệp từ Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE), chuyên ngành Công nghệ thông tin / Hệ thống thông tin.",
      bio2:
        "Nền tảng lập trình giúp tôi có lợi thế khác biệt khi làm BA — tôi có thể trao đổi trực tiếp với đội dev, viết đặc tả kỹ thuật chính xác và hiểu các ràng buộc hệ thống mà nhiều BA thuần nghiệp vụ thường bỏ qua. Tôi đã áp dụng tư duy BA xuyên suốt quá trình thực tập và trong đề tài tốt nghiệp.",
      bio3:
        "Tôi được thúc đẩy bởi việc chuyển hóa những yêu cầu phức tạp, rối rắm thành các kế hoạch rõ ràng, có thể thực hiện được. Dù là vẽ sơ đồ quy trình, viết user story, hay phỏng vấn stakeholder — tôi mang lại sự rõ ràng cho những điều còn mơ hồ.",
      info: [
        { label: "Họ và tên", value: "Phạm Tuấn Minh" },
        { label: "Ngày sinh", value: "19/05/2003" },
        { label: "Email", value: "phamtuanminh19052003@gmail.com" },
        { label: "Điện thoại", value: "0773-772-174" },
        { label: "LinkedIn", value: "linkedin.com/in/ptm1905" },
        { label: "GitHub", value: "github.com/TuanMinh1905" },
      ],
    },
  },

  skills: {
    en: {
      title: "Skills",
      subtitle: "My BA toolkit",
      featured_note: "Core strength",
      groups: [
        {
          name: "BA Methods & Techniques",
          icon: "📋",
          skills: [
            "Requirements Elicitation",
            "User Stories",
            "Use Case Analysis",
            "Gap Analysis",
            "As-Is / To-Be Mapping",
            "Stakeholder Analysis",
            "Functional Specification",
          ],
          featured: ["Requirements Elicitation", "User Stories", "Functional Specification"],
        },
        {
          name: "Process & Modeling",
          icon: "🔄",
          skills: [
            "BPMN 2.0",
            "Swimlane Diagrams",
            "ERD",
            "Data Flow Diagrams",
            "Wireframing",
            "Figma",
          ],
          featured: ["BPMN 2.0", "Wireframing"],
        },
        {
          name: "Tools & Platforms",
          icon: "🛠️",
          skills: [
            "Jira",
            "Confluence",
            "Notion",
            "Google Workspace",
            "Figma",
            "draw.io / Lucidchart",
            "MS Office",
          ],
          featured: ["Jira", "Confluence", "Notion"],
        },
        {
          name: "Technical Knowledge",
          icon: "⚙️",
          skills: [
            "REST API concepts",
            "SQL / Database",
            "System Architecture basics",
            "Frontend understanding",
            "Agile / Scrum",
          ],
          featured: ["REST API concepts", "SQL / Database", "Agile / Scrum"],
        },
        {
          name: "Soft Skills",
          icon: "🤝",
          skills: [
            "Communication",
            "Problem Solving",
            "Critical Thinking",
            "Active Listening",
            "Documentation",
            "Presentation",
          ],
          featured: ["Communication", "Documentation"],
        },
      ],
    },
    vi: {
      title: "Kỹ năng",
      subtitle: "Bộ công cụ của tôi",
      featured_note: "Thế mạnh cốt lõi",
      groups: [
        {
          name: "Phương pháp BA",
          icon: "📋",
          skills: [
            "Khai thác yêu cầu",
            "User story",
            "Phân tích use case",
            "Phân tích khoảng cách",
            "Sơ đồ As-Is / To-Be",
            "Phân tích stakeholder",
            "Đặc tả chức năng",
          ],
          featured: ["Khai thác yêu cầu", "User story", "Đặc tả chức năng"],
        },
        {
          name: "Quy trình & mô hình hóa",
          icon: "🔄",
          skills: [
            "BPMN 2.0",
            "Sơ đồ swimlane",
            "ERD",
            "Sơ đồ luồng dữ liệu",
            "Wireframing",
            "Figma",
          ],
          featured: ["BPMN 2.0", "Wireframing"],
        },
        {
          name: "Công cụ & nền tảng",
          icon: "🛠️",
          skills: [
            "Jira",
            "Confluence",
            "Notion",
            "Google Workspace",
            "Figma",
            "draw.io / Lucidchart",
            "MS Office",
          ],
          featured: ["Jira", "Confluence", "Notion"],
        },
        {
          name: "Kiến thức kỹ thuật",
          icon: "⚙️",
          skills: [
            "Khái niệm REST API",
            "SQL / Cơ sở dữ liệu",
            "Kiến trúc hệ thống cơ bản",
            "Hiểu về Frontend",
            "Agile / Scrum",
          ],
          featured: ["Khái niệm REST API", "SQL / Cơ sở dữ liệu", "Agile / Scrum"],
        },
        {
          name: "Kỹ năng mềm",
          icon: "🤝",
          skills: [
            "Giao tiếp",
            "Giải quyết vấn đề",
            "Tư duy phản biện",
            "Lắng nghe tích cực",
            "Viết tài liệu",
            "Thuyết trình",
          ],
          featured: ["Giao tiếp", "Viết tài liệu"],
        },
      ],
    },
  },

  projects: {
    en: {
      title: "Projects",
      subtitle: "BA case studies & analysis work",
      view_github: "GitHub",
      view_live: "Live Site",
      view_demo: "Demo Video",
      view_diagram: "View Diagrams",
      items: [
        {
          id: "fitting-room-ba",
          title: "AI Virtual Fitting Room",
          subtitle: "TMF Fashion – Graduation Thesis (BA + Developer)",
          period: "02/2026 – 07/2026",
          badges: ["Graduation Thesis", "Solo BA + Dev"],
          description:
            "Sole owner end-to-end: surveyed the market, gathered and documented requirements, modeled the system with UML, designed the architecture, implemented the full stack, and designed test scenarios. The platform combines fashion e-commerce with an AI-powered 3D virtual fitting room and a GPT-4o-mini size advisor.",
          highlights: [
            "Surveyed the online fashion market and 5+ existing virtual try-on tools to define the core problem: customers cannot try garments before buying, driving 30–40% return rates — used findings to set project scope and objectives",
            "Gathered and documented functional requirements across 8 modules (product browsing, cart, checkout, order tracking, account & role management, 3D fitting room, AI size advisor, admin management & revenue reports) and non-functional requirements (security, performance, scalability, responsive UI)",
            "Modeled the system with UML: use case diagrams with detailed descriptions (actors, stakeholders, main & exception flows), sequence diagrams, collaboration diagrams, and state diagrams — designed the full database schema",
            "Defined end-to-end business flows for two actor groups: Customer (browse → try-on → cart → checkout → track order) and Admin (product/category management → order processing → revenue reporting) with role-based access control (RBAC)",
            "Designed a 3-service architecture (Next.js frontend, HonoJS/Node.js API, FastAPI AI engine) as the technical blueprint — implemented the full system including an AI size advisor powered by GPT-4o-mini that compares user measurements against product size charts",
            "Designed and executed test scenarios for the fitting room (tops, bottoms, full outfits, male/female models, edge cases) and for the AI size advisor — documented pass/fail results, known limitations, and a product roadmap (payment gateways, advanced inventory, multi-language, analytics)",
          ],
          featuredHighlights: [2, 3, 4],
          tech: ["Requirements Analysis", "UML Diagrams", "ERD", "Business Flow Design", "Architecture Design", "Test Scenarios", "GPT-4o-mini"],
          links: {
            github: "https://github.com/TuanMinh1905/Fittingroom-Official",
            demo: "https://drive.google.com/file/d/1i4diSXaiE48r_edPh_6n0nJzjKH5ry0L/view",
            diagram: "https://drive.google.com/drive/folders/1bVyCAmOL7_A100XdHf4kfoXxacKhDsiW",
          },
        },
        {
          id: "moon-tea-ba",
          title: "Moon Tea Management System",
          subtitle: "Personal BA Project – Beverage chain POS & management",
          period: "2025",
          badges: ["Personal Project", "BA Case Study"],
          description:
            "Conducted full business analysis for a multi-branch bubble tea chain management system. Covered point-of-sale operations, inventory tracking, staff management, and reporting dashboards — producing complete BA documentation artifacts from stakeholder interviews to final specifications.",
          highlights: [
            "Identified core pain points through stakeholder interviews: manual order tracking, inconsistent inventory across branches, and lack of sales visibility for owners",
            "Mapped As-Is operational flow (paper-based orders, manual stock checks) and designed To-Be digitized process using BPMN 2.0 swimlane diagrams",
            "Produced use case diagram covering all system actors: Cashier, Kitchen Staff, Branch Manager, and System Admin — with 20+ use cases across 4 modules",
            "Designed normalized database schema (ERD) covering menu items, orders, inventory batches, staff shifts, and branch data — optimized for cross-branch reporting queries via SQL",
            "Authored full functional specification document: 30+ user stories with acceptance criteria, covering POS flow, inventory alerts, shift management, and sales report generation",
            "Defined reporting module requirements: daily/monthly revenue by branch, best-selling items, and low-stock alerts — specified SQL query logic and dashboard data structures",
          ],
          featuredHighlights: [3, 4, 5],
          tech: ["Business Analysis", "BPMN 2.0", "Use Case Diagrams", "ERD", "SQL specs", "User Stories", "Functional Spec"],
          links: {
            diagram: "https://drive.google.com/drive/folders/1cIeEntK2UVd0_OLhqHXajUUpVm6q33sa",
          },
        },
      ],
    },
    vi: {
      title: "Dự án",
      subtitle: "Case study & công việc phân tích BA",
      view_github: "GitHub",
      view_live: "Trang web",
      view_demo: "Video demo",
      view_diagram: "Xem sơ đồ",
      items: [
        {
          id: "fitting-room-ba",
          title: "Phòng thử đồ ảo AI",
          subtitle: "TMF Fashion – Khóa luận tốt nghiệp (BA + Developer)",
          period: "02/2026 – 07/2026",
          badges: ["Khóa luận tốt nghiệp", "Solo BA + Dev"],
          description:
            "Chủ dự án duy nhất từ đầu đến cuối: khảo sát thị trường, thu thập và tài liệu hóa yêu cầu, mô hình hóa hệ thống bằng UML, thiết kế kiến trúc, triển khai toàn bộ hệ thống và thiết kế kịch bản kiểm thử. Nền tảng kết hợp thương mại điện tử thời trang với phòng thử đồ ảo 3D và tính năng tư vấn size bằng GPT-4o-mini.",
          highlights: [
            "Khảo sát thị trường thời trang trực tuyến và 5+ công cụ virtual try-on hiện có để xác định vấn đề cốt lõi: khách hàng không thể thử đồ trước khi mua, dẫn đến tỷ lệ hoàn hàng 30–40% — dùng kết quả để xác định phạm vi và mục tiêu dự án",
            "Thu thập và tài liệu hóa yêu cầu chức năng cho 8 module (duyệt sản phẩm, giỏ hàng, thanh toán, theo dõi đơn hàng, quản lý tài khoản & phân quyền, phòng thử đồ 3D, tư vấn size AI, quản trị & báo cáo doanh thu) và yêu cầu phi chức năng (bảo mật, hiệu năng, khả năng mở rộng, giao diện responsive)",
            "Mô hình hóa hệ thống bằng UML: sơ đồ use case kèm mô tả chi tiết (actors, stakeholders, luồng chính & luồng ngoại lệ), sơ đồ tuần tự, sơ đồ cộng tác và sơ đồ trạng thái — thiết kế schema cơ sở dữ liệu toàn diện",
            "Xác định luồng nghiệp vụ end-to-end cho 2 nhóm actor: Khách hàng (duyệt → thử đồ → giỏ hàng → thanh toán → theo dõi đơn) và Admin (quản lý sản phẩm/danh mục → xử lý đơn hàng → báo cáo doanh thu) với phân quyền theo vai tró (RBAC)",
            "Thiết kế kiến trúc 3 service (Next.js frontend, HonoJS/Node.js API, FastAPI AI engine) làm blueprint kỹ thuật — triển khai toàn bộ hệ thống bao gồm tính năng tư vấn size AI dùng GPT-4o-mini, so sánh số đo người dùng với bảng size sản phẩm",
            "Thiết kế và thực thi các kịch bản kiểm thử cho phòng thử đồ (áo, quần, trang phục đầy đủ, mô hình nam/nữ, các trường hợp biên) và tư vấn size AI — lập tài liệu kết quả pass/fail, hạn chế đã biết và lộ trình sản phẩm (cổng thanh toán, quản lý kho nâng cao, đa ngôn ngữ, analytics)",
          ],
          featuredHighlights: [2, 3, 4],
          tech: ["Phân tích nghiệp vụ", "Sơ đồ UML", "ERD", "Thiết kế luồng nghiệp vụ", "Thiết kế kiến trúc", "Kịch bản kiểm thử", "GPT-4o-mini"],
          links: {
            github: "https://github.com/TuanMinh1905/Fittingroom-Official",
            demo: "https://drive.google.com/file/d/1i4diSXaiE48r_edPh_6n0nJzjKH5ry0L/view",
            diagram: "https://drive.google.com/drive/folders/1bVyCAmOL7_A100XdHf4kfoXxacKhDsiW",
          },
        },
        {
          id: "moon-tea-ba",
          title: "Hệ thống quản lý Moon Tea",
          subtitle: "Dự án BA cá nhân – POS & quản lý chuỗi trà sữa",
          period: "2025",
          badges: ["Dự án cá nhân", "BA Case Study"],
          description:
            "Thực hiện phân tích nghiệp vụ đầy đủ cho hệ thống quản lý chuỗi trà sữa đa chi nhánh. Bao gồm vận hành điểm bán hàng, theo dõi tồn kho, quản lý nhân sự và dashboard báo cáo — tạo ra bộ tài liệu BA hoàn chỉnh từ phỏng vấn stakeholder đến đặc tả cuối cùng.",
          highlights: [
            "Xác định các điểm đau cốt lõi qua phỏng vấn stakeholder: ghi nhận đơn hàng thủ công, tồn kho không đồng nhất giữa các chi nhánh và thiếu khả năng theo dõi doanh thu cho chủ chuỗi",
            "Vẽ sơ đồ luồng As-Is (đặt hàng bằng giấy, kiểm kho thủ công) và thiết kế quy trình To-Be số hóa bằng sơ đồ swimlane BPMN 2.0",
            "Vẽ sơ đồ use case bao gồm tất cả actors: Thu ngân, Nhân viên pha chế, Quản lý chi nhánh và Admin hệ thống — với 20+ use case trên 4 module",
            "Thiết kế schema cơ sở dữ liệu chuẩn hóa (ERD) bao gồm menu, đơn hàng, lô tồn kho, ca làm việc và dữ liệu chi nhánh — tối ưu cho các truy vấn SQL báo cáo liên chi nhánh",
            "Xây dựng tài liệu đặc tả chức năng đầy đủ: 30+ user story với tiêu chí chấp nhận, bao gồm luồng POS, cảnh báo tồn kho, quản lý ca và tạo báo cáo doanh thu",
            "Xác định yêu cầu module báo cáo: doanh thu theo ngày/tháng theo chi nhánh, sản phẩm bán chạy và cảnh báo tồn kho thấp — đặc tả logic truy vấn SQL và cấu trúc dữ liệu dashboard",
          ],
          featuredHighlights: [3, 4, 5],
          tech: ["Phân tích nghiệp vụ", "BPMN 2.0", "Sơ đồ use case", "ERD", "Đặc tả SQL", "User story", "Đặc tả chức năng"],
          links: {
            diagram: "https://drive.google.com/drive/folders/1cIeEntK2UVd0_OLhqHXajUUpVm6q33sa",
          },
        },
      ],
    },
  },

  experience: {
    en: {
      title: "Work Experience",
      subtitle: "My professional journey",
      items: [
        {
          role: "Frontend Developer / Implicit BA (Full-time Intern)",
          company: "Maysoft Company – Petpet.vn",
          period: "July 2025 – December 2025",
          type: "Internship",
          description: [
            "Gathered and clarified requirements from the product team for both Desktop and Mobile interfaces",
            "Translated business requirements into implementable frontend features using Nuxt.js",
            "Collaborated with backend team to align on API contracts and data flows",
            "Documented component behavior, rendering strategy (SSR/CSR), and SEO requirements",
            "Applied Mobile-First design principles based on user experience requirements",
            "Managed feature scope and code workflow via GitHub",
          ],
          tech: ["Requirements gathering", "Nuxt.js", "API alignment", "Documentation", "GitHub"],
        },
      ],
    },
    vi: {
      title: "Kinh nghiệm làm việc",
      subtitle: "Hành trình nghề nghiệp của tôi",
      items: [
        {
          role: "Lập trình viên Frontend / BA ngầm (thực tập toàn thời gian)",
          company: "Công ty Maysoft – Petpet.vn",
          period: "Tháng 7/2025 – Tháng 12/2025",
          type: "Thực tập",
          description: [
            "Thu thập và làm rõ yêu cầu từ team sản phẩm cho cả giao diện Desktop và Mobile",
            "Chuyển đổi yêu cầu kinh doanh thành các tính năng frontend có thể triển khai bằng Nuxt.js",
            "Phối hợp với team backend để thống nhất API contract và luồng dữ liệu",
            "Lập tài liệu hành vi component, chiến lược render (SSR/CSR) và yêu cầu SEO",
            "Áp dụng nguyên tắc thiết kế Mobile-First dựa trên yêu cầu trải nghiệm người dùng",
            "Quản lý phạm vi tính năng và quy trình code qua GitHub",
          ],
          tech: ["Thu thập yêu cầu", "Nuxt.js", "Thống nhất API", "Lập tài liệu", "GitHub"],
        },
      ],
    },
  },

  education: {
    en: {
      title: "Education",
      subtitle: "Academic background",
      items: [
        {
          school: "Ho Chi Minh City University of Technology and Education",
          shortName: "HCMUTE",
          major: "Information Technology / Information Systems",
          period: "2021 – 2026",
          gpa: "7.46 / 10.00  (2.95 / 4.00)",
          degree: "Bachelor of Engineering",
        },
      ],
    },
    vi: {
      title: "Học vấn",
      subtitle: "Nền tảng học thuật",
      items: [
        {
          school: "Trường Đại học Sư phạm Kỹ thuật TP.HCM",
          shortName: "HCMUTE",
          major: "Công nghệ thông tin / Hệ thống thông tin",
          period: "2021 – 2026",
          gpa: "7.46 / 10.00  (2.95 / 4.00)",
          degree: "Kỹ sư",
        },
      ],
    },
  },

  contact: {
    en: {
      title: "Contact",
      subtitle: "Let's work together",
      description:
        "Open to BA opportunities and collaborations. Whether you'd like to discuss a project, ask about my experience, or just connect — feel free to reach out!",
      email_label: "Send Email",
      links: [
        { label: "Email", value: "phamtuanminh19052003@gmail.com", href: "mailto:phamtuanminh19052003@gmail.com", icon: "email" },
        { label: "Phone", value: "0773-772-174", href: "tel:+84773772174", icon: "phone" },
        { label: "LinkedIn", value: "linkedin.com/in/ptm1905", href: "https://linkedin.com/in/ptm1905", icon: "linkedin" },
        { label: "GitHub", value: "github.com/TuanMinh1905", href: "https://github.com/TuanMinh1905", icon: "github" },
      ],
    },
    vi: {
      title: "Liên hệ",
      subtitle: "Hãy cùng làm việc",
      description:
        "Sẵn sàng cho các cơ hội BA và hợp tác. Dù bạn muốn thảo luận về dự án, hỏi về kinh nghiệm của tôi, hay chỉ đơn giản là kết nối — hãy liên hệ nhé!",
      email_label: "Gửi email",
      links: [
        { label: "Email", value: "phamtuanminh19052003@gmail.com", href: "mailto:phamtuanminh19052003@gmail.com", icon: "email" },
        { label: "Điện thoại", value: "0773-772-174", href: "tel:+84773772174", icon: "phone" },
        { label: "LinkedIn", value: "linkedin.com/in/ptm1905", href: "https://linkedin.com/in/ptm1905", icon: "linkedin" },
        { label: "GitHub", value: "github.com/TuanMinh1905", href: "https://github.com/TuanMinh1905", icon: "github" },
      ],
    },
  },
};
