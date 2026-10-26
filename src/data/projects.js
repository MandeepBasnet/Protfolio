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
