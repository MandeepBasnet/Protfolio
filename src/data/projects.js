const gh = (repo) => `https://github.com/MandeepBasnet/${repo}`;

export const projects = [
  {
    title: "Trackon GPS E-commerce Platform",
    context: "iTsoch · Production",
    summary:
      "Full e-commerce platform for a GPS-tracking brand: storefront with cart, coupons, saved addresses and checkout (cash-on-delivery & eSewa), a headless Vendure backend with an Appwrite CMS so the team edits pages, products and SEO without a developer, and an admin dashboard for products, orders, customers and content. Covered by Playwright and Vitest, deployed through CI on every push.",
    tags: ["Next.js", "TypeScript", "Vendure", "GraphQL", "Appwrite", "Playwright", "Vitest"],
    live: "https://site.trackongps.com",
    image: "/projects/trackon.webp",
    featured: true,
  },
  {
    title: "East Rider Kiran",
    context: "Client project · Production",
    summary:
      "Motovlog site for a Nepali moto-vlogger: bike reviews, travel and diary posts, Web Stories, reels synced from YouTube and a merch shop with product variants. Built on Payload CMS with drafts and autosave, migrated from WordPress, with AdSense slots, light/dark themes and Dockerised deploys on Dokploy.",
    tags: ["Next.js 16", "Payload CMS", "TypeScript", "PostgreSQL", "MinIO", "Docker"],
    live: "https://eastriderkiran.com",
    image: "/projects/eastriderkiran.webp",
    featured: true,
  },
  {
    title: "Ramen Shop Website & Digital Menu",
    context: "Client project",
    summary:
      "CMS-driven restaurant website and live menu — toppings, sides and beverages managed through Appwrite with an in-page edit panel, plus signage integration. Containerised with Docker and Nginx.",
    tags: ["React", "Vite", "Tailwind CSS", "Appwrite", "Docker"],
    github: gh("Uudu"),
    live: "https://uudu.vercel.app",
    image: "/projects/uudu.webp",
    featured: true,
  },
  {
    title: "Chhathare Limbu Sahitya",
    context: "Client project",
    summary:
      "Trilingual digital literature library (Yakthung, Nepali, English) with an in-browser PDF reader, full-text search, Limbu & Devanagari on-screen keyboards, and an admin/author studio with draft approval.",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Appwrite"],
    github: gh("chhathare"),
    live: "https://chhathare.vercel.app",
    image: "/projects/chhathare.webp",
    featured: true,
  },
  {
    title: "Fundora",
    context: "Academic project",
    summary:
      "Crowdfunding platform for Nepal with role-based access, a 5-step campaign wizard, eSewa & Khalti payments, real-time messaging and creator analytics with CSV export.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: gh("Fundora"),
    live: "https://fundora-nepal.vercel.app",
    image: "/projects/fundora.webp",
    featured: true,
  },
  {
    title: "Precision Parts",
    context: "Academic project · Team",
    summary:
      "Vehicle-parts inventory and service platform with admin, staff and customer portals: parts and vendor management, a POS with loyalty discounts, PDF invoices, financial reports and low-stock alerts. React front end on a .NET Clean Architecture API with EF Core.",
    tags: ["React 19", ".NET", "C#", "EF Core", "Tailwind CSS", "Docker"],
    github: "https://github.com/pawal-karki/Precision_Parts",
    live: "https://precision-parts.vercel.app",
    image: "/projects/precisionparts.webp",
    featured: true,
  },
  // Live sites below only show a login page in their screenshot, so they sit after the ones that show real work.
  {
    title: "Hamro Hajir",
    context: "iTsoch · Production",
    summary:
      "Multi-tenant attendance-as-a-service platform for ZKTeco biometric devices. An ADMS (iclock) server receives fingerprint, face and card punches; companies sign up, pair devices with a code, group them into branches and view attendance reports in Bikram Sambat dates from a PWA dashboard, with each company's data isolated server-side.",
    tags: ["Next.js", "TypeScript", "Node.js", "Appwrite", "ZKTeco ADMS", "PWA"],
    live: "https://hajir.trackongps.com",
    image: "/projects/hamrohajir.webp",
    featured: true,
  },
  {
    title: "Digital Signage Management App",
    context: "Client project",
    summary:
      "Streamlined client app for managing digital-signage screens on top of the Xibo CMS API — auth, media uploads, layout management and a publish workflow.",
    tags: ["React", "Node.js", "Express", "Xibo API", "JWT"],
    github: gh("Signage-Web-Platform"),
    live: "https://signage-web-platform.vercel.app",
    image: "/projects/signage.webp",
    featured: true,
  },
  {
    title: "Multi-Store Coffee KPI Platform",
    context: "Client project",
    summary:
      "Role-based platform that logs KPIs across multiple coffee stores, shows them on in-store screens and generates reports for admins.",
    tags: ["React", "Express", "Appwrite", "Recharts"],
    github: gh("StoreScore"),
    live: "https://store-score-three.vercel.app",
    image: "/projects/storescore.webp",
    featured: true,
  },
  {
    title: "PressHub",
    context: "Client project",
    summary:
      "Bilingual (English/Nepali) news portal on Payload CMS: categories, Web Stories, reels, live updates, ad slots, NRB forex rates and a WordPress-to-Payload importer, running on a self-contained Docker stack.",
    tags: ["Next.js 15", "Payload CMS", "PostgreSQL", "Redis", "MinIO", "next-intl"],
  },
  {
    title: "LawyerConnect",
    context: "Academic project",
    summary: "Book appointments with featured lawyers. Separate client, admin and backend apps with JWT auth and Cloudinary media.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: gh("SYP-LawyerConnect-"),
  },
  {
    title: "LawLink",
    context: "Academic project",
    summary: "Lawyer management system built with JDBC, JSP and Maven.",
    tags: ["Java", "JSP", "JDBC", "Maven"],
    github: gh("LawLink-Advanced-Programming-And-Technology"),
  },
];
