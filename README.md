Riyasudeen Farook - IT Operations Portfolio

A modern, high-performance portfolio website built with Next.js 15, Tailwind CSS 3.4, and TypeScript. Designed to showcase IT Operations expertise with a responsive, glassmorphic Bento Grid layout.

(Note: Add a screenshot of your site to the public folder and name it screenshot.png to see it here)

🚀 Features
Bento Grid Layout: A responsive, modular grid design popular in modern SaaS and dev portfolios.
Tech Stack Marquee: An infinite scrolling animation showcasing technical skills.Glassmorphism UI: Modern frosted glass effects using Tailwind's backdrop-blur utilities.
Mobile Responsive: Fully optimized layout that switches from a complex grid to a clean vertical stack on mobile devices.
Dark Mode Native: Built with a developer-centric dark theme (Slate-900/Slate-800).Downloadable CV: Direct asset download functionality.

🛠️ Tech Stack
Framework: Next.js 15 (App Router)
Styling: Tailwind CSS 3.4
Language: TypeScript
Icons: FontAwesome 6 (via CDN)
Deployment: Vercel

📂 Project Structure├── app/
│   ├── globals.css      # Global styles, Marquee animations, and Grid utilities
│   ├── layout.tsx       # Root layout (Fonts, Icons, Metadata)
│   └── page.tsx         # Main entry point
├── components/
│   ├── Navbar.tsx       # Sticky header with mobile menu logic
│   ├── BentoGrid.tsx    # Main layout wrapper
│   ├── Hero.tsx         # Intro section & CV download
│   ├── ProfileCard.tsx  # Photo & Role display
│   ├── TechMarquee.tsx  # Infinite scroll skills list
│   ├── ImpactMetrics.tsx# KPI cards (Uptime, etc.)
│   ├── ProjectGrid.tsx  # Detailed project showcase
│   └── Footer.tsx       # Contact & Copyright
├── public/
│   ├── profile.jpg      # Personal headshot
│   └── cv.pdf           # Resume file
└── tailwind.config.ts   # Theme customization

⚡ Getting Started
Clone the repository:

git clone [https://github.com/riyas22/riyasudeen-portfolio-v2.git](https://github.com/riyas22/riyasudeen-portfolio-v2.git)
cd riyasudeen-portfolio-v2
Install dependencies:
npm install
Run the development server:
npm run dev
View locally:Open http://localhost:3000 in your browser.

📱 Mobile Testing (Local Network)
To view the site on your phone while developing:
1. Find your computer's local IP address (e.g., 192.168.1.5).
2. Run the server with the host flag:npm run dev -- -H 0.0.0.0
3. Visit http://YOUR_IP_ADDRESS:3000 on your phone.

🚢 Deployment
This project is optimized for Vercel.
Push your code to GitHub.
Import the repository in Vercel.
The build settings are pre-configured (Framework: Next.js).
Click Deploy.

📄 License
This project is open source and available under the MIT License.
© 2025 Riyasudeen Farook. All rights reserved.