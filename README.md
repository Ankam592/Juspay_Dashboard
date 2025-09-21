Juspay Dashboard

A modern analytics dashboard built with React, Vite, and TailwindCSS.
It provides interactive charts, geographic visualizations, responsive layouts, and theme toggling.

🔗 Live Demo: https://juspay-dashboard.vercel.app
https://juspay-dashboard-2li6.vercel.app/

Demo Link :
https://www.loom.com/share/514db7fe88904473bbed764d7359da57?sid=98c17859-e59e-49fe-9219-d03abdd5e798

🚀 Tech Stack

React 19 + Vite → frontend and fast build setup
TailwindCSS → utility-first responsive styling
Recharts → data visualizations (line charts, bar charts, pie charts)
React Simple Maps → geographic visualization
Lucide-react & React Icons → icons
Context API → global theme state (light/dark)
LocalStorage → persist user preferences (theme toggle)
Vercel → deployment with GitHub integration

🌐 Deployment

The app is deployed on Vercel, supporting automatic builds from the GitHub repo.
Every push to main triggers a new deployment.

📂 Folder Structure
src/
├── App.jsx                # Root component, routes defined
├── Components/
│   ├── Button/            # Reusable button component
│   ├── Dashboard/         # Main dashboard page
│   │   ├── Dashboard.jsx
│   │   ├── KPI/           # KPIs component
│   │   ├── Projectionchart/ 
│   │   ├── RevenueChart/
│   │   ├── RevenueByLocation/
│   │   ├── TopProducts/
│   │   └── TotalSales/
│   ├── Header/            # Top navigation bar
│   ├── LeftSidebar/       # Sidebar + modal handling
│   ├── ModalLayout/       # Modal sidebar layout
│   ├── OrderList/         # Orders data table
│   └── ...other shared UI
├── Context/
│   └── ModeContext.jsx    # Context API for theme + LocalStorage persistence
├── Hooks/
│   └── useDashboardData.js # Custom hook to fetch dashboard data
└── main.jsx               # App entry point

🎯 Features & Components

🔹 Header
Located at the top of the app.
Contains:
Breadcrumb navigation → e.g., Dashboards / Default
Search bar → with shortcut hint (⌘/)
Action buttons → theme toggle, refresh, notifications, layout settings
Responsive behavior:
Mobile → centered layout
Desktop → justify-between with left & right groups

🔹 Left Sidebar

Compact vertical bar (icons only) on large screens (lg:).
Expands into Modal Sidebar on small screens via hamburger button.
Modal closes by:
Clicking the ❌ close button inside
Clicking the dark backdrop overlay

🔹 ModalLayout

Full vertical navigation menu when opened in modal mode.
Sections:
Dashboard (Default, eCommerce, Projects, Online Courses)
Pages (User Profile, Account, Corporate, Blog, Social)
Nested menu items toggle open/closed with chevron icons.


🔹 Dashboard Page
Displays all analytics and KPIs.
KPIs
Grid of key numbers (e.g., sales, customers).
Uses KPIs.jsx with props from useDashboardData.
Projections vs Actuals Chart
Line/Bar chart comparing projected vs actual revenue.
Built using Recharts.
Revenue Chart
Main chart showing revenue trends.
Responsive width, resizes across breakpoints.
Revenue by Location
Map visualization using React Simple Maps.
Shows revenue distribution per location.
Top Products
Table-style component listing product names, sales, and performance.
Total Sales Breakdown
Pie/donut chart showing percentage contribution of sales categories.

🔹 Order List

Displays order data in a responsive table.
Supports:Search
Built with Tailwind for styling.

🔹 Theme Toggle (Dark/Light Mode)

Managed globally via Context API (ModeContext).
Uses LocalStorage to remember the user’s choice across reloads.
Updates instantly across all components (Header, Sidebar, Dashboard, etc.).

⚙️ Approach & Design Decisions

Mobile-first responsive design:
Layout adapts with Tailwind breakpoints (sm:, md:, lg:).
Example: sidebar becomes modal on small screens.

Reusable components:
Each dashboard section (KPIs, charts, table) is isolated for reusability.

Global state with Context API:
Avoids prop drilling for theme and layout state.

Persistence with LocalStorage:
Theme mode is stored, so refreshing the page doesn’t reset user preference.

Data hook abstraction:
useDashboardData simulates API calls → easy to replace with a real backend.

Clean structure:
Clear separation of concerns: Components, Context, Hooks.

🛠️ Scripts

npm run dev → Start development server (Vite)
npm run build → Build for production
npm run preview → Preview production build locally

📸 Screenshots (optional section for your report/video)

Dashboard Light Mode
Dashboard Dark Mode
Sidebar Open (Mobile)

Order List Table

📌 Future Improvements
Replace mock hook (useDashboardData) with real API integration.
Add authentication (Login/Logout).
Add user profile settings.
Improve chart interactivity (tooltips, zoom).

🙌 Credits

Recharts for charts

React Simple Maps for map visualizations
Lucide React + React Icons for icons

TailwindCSS for styling
