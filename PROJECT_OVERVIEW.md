# SRM GLOBAL HUB - Complete Project Overview

> Last Updated: 25 July 2026

---

## 📌 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Project Architecture & Folder Structure](#3-project-architecture--folder-structure)
4. [Routing & All Pages](#4-routing--all-pages)
5. [Reusable Components](#5-reusable-components)
6. [Data Models & Sample Data](#6-data-models--sample-data)
7. [Design System & Theme](#7-design-system--theme)
8. [Key Business Features](#8-key-business-features)
9. [Services & API Layer](#9-services--api-layer)
10. [NPM Scripts & Build System](#10-npm-scripts--build-system)
11. [Quick File Links (Clickable)](#11-quick-file-links-clickable)
12. [Next Steps & Future Enhancements](#12-next-steps--future-enhancements)

---

## 1. Project Overview

### Basic Info
| Item | Details |
|------|---------|
| **Project Name** | SRM GLOBAL HUB |
| **Business Type** | B2B Ladies' Garment Manufacturing (OEM / ODM / Private Label) |
| **Business Model** | Lead Generation (NOT B2C E-commerce) |
| **Focus Products** | Kurtis, Suits, Gowns, Co-ord Sets, Ethnic Wear, Western Wear |
| **Target Audience** | Boutiques, Retailers, Distributors, Private Label Brands (India + International) |
| **Current Status** | Production Ready, Demo Content Active |

### Core Business Proposition
SRM GLOBAL HUB ek premium garment manufacturing company hai jo women's ethnic aur western wear ka production karti hai. Website ka primary purpose **client leads generate karna** hai (shopping cart / B2C sale nahi):
- **Quote Request** → Client poocha kar sakta hai bulk order ke liye
- **Design Upload** → Client apna custom design / tech pack upload kar sakta hai
- **Meeting Booking** → Client factory visit / video call book kar sakta hai
- **Direct WhatsApp** → Har page pe floating WhatsApp button + sticky CTA bar

---

## 2. Technology Stack

### 📦 Core Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^18.3.1 | UI Library (Function Components + Hooks) |
| `react-dom` | ^18.3.1 | React DOM Renderer |
| `react-router-dom` | ^6.26.1 | Client-side Routing (BrowserRouter, Routes, lazy loading) |
| `typescript` | ^5.5.3 | Type Safety (Strict Mode Enabled) |
| `vite` | ^5.4.1 | Build Tool + Dev Server (HMR, Fast Refresh) |

### 🎨 UI & Styling
| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | ^3.4.10 | Utility-First CSS Framework |
| `framer-motion` | ^11.3.30 | Page Animations, Scroll Reveals, Hover Effects |
| `react-icons` | ^5.3.0 | Icon Library (Font Awesome / `Fa` icons used) |
| `swiper` | ^11.1.10 | Carousels, Testimonial Sliders, Product Galleries |

### 🔧 Dev Tools
| Package | Version | Purpose |
|---------|---------|---------|
| `postcss` | ^8.4.41 | CSS Processing (Tailwind Pipeline) |
| `autoprefixer` | ^10.4.20 | Vendor Prefixing |
| `eslint` | ^8.57.0 | Code Linting |
| `@typescript-eslint/*` | ^8.2.0 | TS-specific ESLint Rules |
| `@vitejs/plugin-react` | ^4.3.1 | React JSX + Fast Refresh Support |
| `axios` | ^1.7.5 | HTTP Client (for future backend integration) |

---

## 3. Project Architecture & Folder Structure

```
d:\hhh\
├── index.html                     # Base HTML entry
├── package.json                   # Dependencies + Scripts
├── tsconfig.json                  # TypeScript Config (Strict Mode)
├── tailwind.config.js             # Tailwind Theme (Colors, Fonts)
├── postcss.config.js              # PostCSS Pipeline
├── vite.config.ts                 # Vite Build Config
│
├── public/                        # Static Assets (served as-is)
│   ├── *.jpg.jpeg / *.webp        # Factory + Product demo images
│   └── Universal_Premium_*.md     # Reference prompt document
│
├── uploads/                       # Mirror of public/ (for upload path)
│
├── dist/                          # Production Build output (generated)
│
└── src/                           # 🔴 Main Application Code
    ├── main.tsx                   # React entry point (mounts App)
    ├── App.tsx                    # Routes + Global Layout (Navbar/Footer/CTA)
    ├── index.css                  # Tailwind Directives + Custom Utilities
    │
    ├── components/                # Reusable UI Components (7 files)
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   ├── AnnouncementBar.tsx
    │   ├── WhatsAppFloatingButton.tsx
    │   ├── StickyRequestQuote.tsx
    │   ├── ProductCard.tsx
    │   └── FilterSidebar.tsx
    │
    ├── pages/                     # Route-level Pages (31 files)
    │   ├── Home.tsx
    │   ├── About.tsx
    │   ├── Manufacturing.tsx
    │   ├── Factory.tsx
    │   ├── Services.tsx
    │   ├── Sustainability.tsx
    │   ├── Gallery.tsx
    │   ├── Blogs.tsx / Blog.tsx
    │   ├── Testimonials.tsx
    │   ├── Careers.tsx
    │   ├── FAQ.tsx
    │   ├── Contact.tsx
    │   ├── TrackOrder.tsx
    │   ├── BecomeDistributor.tsx
    │   ├── BecomeDealer.tsx
    │   ├── CustomOrder.tsx
    │   ├── RequestQuotation.tsx
    │   ├── Wholesale.tsx
    │   ├── PrivateLabel.tsx
    │   ├── ProductCategories.tsx
    │   ├── Collections.tsx
    │   ├── Shop.tsx
    │   ├── ProductDetails.tsx
    │   ├── Login.tsx
    │   ├── Register.tsx
    │   ├── Wishlist.tsx
    │   ├── Cart.tsx
    │   ├── Checkout.tsx
    │   ├── UserDashboard.tsx
    │   ├── AdminDashboard.tsx
    │   └── NotFound.tsx
    │
    ├── data/                      # Sample Data + TypeScript Interfaces
    │   └── sampleData.ts
    │
    └── services/                  # Mock API Layer (for future backend)
        └── api.ts
```

### Architecture Pattern

```
┌─────────────────────────────────────────────────────────────────┐
│  App.tsx (Layout Shell)                                         │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  AnnouncementBar (Top)                                     │  │
│  │  Navbar (Sticky, Glassmorphism, Mega Menu)                │  │
│  ├───────────────────────────────────────────────────────────┤  │
│  │  Lazy-loaded Page Component (per route)                   │  │
│  │  - Suspense fallback: Loading screen                      │  │
│  ├───────────────────────────────────────────────────────────┤  │
│  │  StickyRequestQuote (Bottom Sticky CTA Bar)               │  │
│  │  WhatsAppFloatingButton (Fixed bottom-right)              │  │
│  │  Footer (4-column with links + socials)                   │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

**Key Patterns Used:**
- **React.lazy() + Suspense** → Code splitting per page (initial bundle size chhota)
- **Framer Motion `whileInView`** → Scroll-triggered fade/slide animations
- **React Router `useParams`** → Dynamic product/blog pages (`/product/:id`, `/blog/:id`)
- **Tailwind `@layer utilities`** → Custom `.glassmorphism` class

---

## 4. Routing & All Pages

Total **31 Routes** defined in [App.tsx](file:///d:/hhh/src/App.tsx#L48-L82):

### 🏠 Core Marketing Pages
| Route | Page File | Purpose |
|-------|-----------|---------|
| `/` | [Home.tsx](file:///d:/hhh/src/pages/Home.tsx) | Landing page (Hero, Stats, Why Choose, Process, Services, Testimonials, Blog CTAs) |
| `/about` | [About.tsx](file:///d:/hhh/src/pages/About.tsx) | Company story, team, milestones, timeline |
| `/gallery` | [Gallery.tsx](file:///d:/hhh/src/pages/Gallery.tsx) | Categorized photo gallery (Factory / Machinery / Team / Products / Events) |
| `/testimonials` | [Testimonials.tsx](file:///d:/hhh/src/pages/Testimonials.tsx) | Full client reviews page |
| `/blogs` or `/blog` | [Blogs.tsx](file:///d:/hhh/src/pages/Blogs.tsx) | Blog listing + single blog (`/blog/:id`) |
| `/careers` | [Careers.tsx](file:///d:/hhh/src/pages/Careers.tsx) | Open job positions + application form |
| `/faq` | [FAQ.tsx](file:///d:/hhh/src/pages/FAQ.tsx) | MOQ, samples, payment, shipping FAQs |

### 🏭 Manufacturing & Factory
| Route | Page File | Purpose |
|-------|-----------|---------|
| `/manufacturing` | [Manufacturing.tsx](file:///d:/hhh/src/pages/Manufacturing.tsx) | 8-step production process (Design → Dispatch) |
| `/factory` | [Factory.tsx](file:///d:/hhh/src/pages/Factory.tsx) | Infrastructure stats, certifications, export countries, video tour CTA |
| `/services` | [Services.tsx](file:///d:/hhh/src/pages/Services.tsx) | OEM / ODM / Private Label / Custom / Wholesale breakdown |
| `/sustainability` | [Sustainability.tsx](file:///d:/hhh/src/pages/Sustainability.tsx) | Eco fabrics, waste reduction, ethical manufacturing |

### 💼 B2B Services Pages
| Route | Page File | Purpose |
|-------|-----------|---------|
| `/wholesale` | [Wholesale.tsx](file:///d:/hhh/src/pages/Wholesale.tsx) | Wholesale pricing tiers, MOQ slabs, bulk process |
| `/private-label` | [PrivateLabel.tsx](file:///d:/hhh/src/pages/PrivateLabel.tsx) | White-label / brand creation, packaging, labeling service |

### 🛍️ Product Catalog (B2B Showcase, NOT Checkout)
| Route | Page File | Purpose |
|-------|-----------|---------|
| `/categories` | [ProductCategories.tsx](file:///d:/hhh/src/pages/ProductCategories.tsx) | 6 product category grid |
| `/shop` | [Shop.tsx](file:///d:/hhh/src/pages/Shop.tsx) | Full product listing + FilterSidebar (category, price, fabric, color) |
| `/product/:id` | [ProductDetails.tsx](file:///d:/hhh/src/pages/ProductDetails.tsx) | Dynamic product page (MOQ, sample price, bulk range, color/size select, inquiry CTA) |
| `/collections` | [Collections.tsx](file:///d:/hhh/src/pages/Collections.tsx) | Curated collection showcase |

### 📞 Lead Capture & Contact (Most Important)
| Route | Page File | Purpose |
|-------|-----------|---------|
| `/contact` | [Contact.tsx](file:///d:/hhh/src/pages/Contact.tsx) | **3-Tab Mega Form**: Request Quote + Upload Design + Book Meeting |
| `/request-quotation` | [RequestQuotation.tsx](file:///d:/hhh/src/pages/RequestQuotation.tsx) | Standalone detailed quotation form |
| `/custom-order` | [CustomOrder.tsx](file:///d:/hhh/src/pages/CustomOrder.tsx) | Custom manufacturing order form |
| `/become-distributor` | [BecomeDistributor.tsx](file:///d:/hhh/src/pages/BecomeDistributor.tsx) | Distributor onboarding form |
| `/become-dealer` | [BecomeDealer.tsx](file:///d:/hhh/src/pages/BecomeDealer.tsx) | Dealer / reseller application form |

### 👤 User System (Demo)
| Route | Page File | Purpose |
|-------|-----------|---------|
| `/login` | [Login.tsx](file:///d:/hhh/src/pages/Login.tsx) | Client login form |
| `/register` | [Register.tsx](file:///d:/hhh/src/pages/Register.tsx) | New client registration |
| `/dashboard` | [UserDashboard.tsx](file:///d:/hhh/src/pages/UserDashboard.tsx) | Client panel (orders, inquiries, wishlist, cart) |
| `/admin` | [AdminDashboard.tsx](file:///d:/hhh/src/pages/AdminDashboard.tsx) | Admin panel (inquiry management, mock data) |
| `/track-order` | [TrackOrder.tsx](file:///d:/hhh/src/pages/TrackOrder.tsx) | Order tracking with timeline (uses `trackOrder()` mock API) |
| `/wishlist` | [Wishlist.tsx](file:///d:/hhh/src/pages/Wishlist.tsx) | Saved products for later inquiry |
| `/cart` | [Cart.tsx](file:///d:/hhh/src/pages/Cart.tsx) | Inquiry basket (MOQ-validated quantities) |
| `/checkout` | [Checkout.tsx](file:///d:/hhh/src/pages/Checkout.tsx) | Final inquiry submission |

### ❌ Error Pages
| Route | Page File | Purpose |
|-------|-----------|---------|
| `*` (catch-all) | [NotFound.tsx](file:///d:/hhh/src/pages/NotFound.tsx) | 404 page |

---

## 5. Reusable Components

Total **7 Components** in [src/components/](file:///d:/hhh/src/components):

### Navigation & Layout
| Component | File | Details |
|-----------|------|---------|
| **AnnouncementBar** | [AnnouncementBar.tsx](file:///d:/hhh/src/components/AnnouncementBar.tsx) | Top thin bar (free shipping, export info, promotional banner) |
| **Navbar** | [Navbar.tsx](file:///d:/hhh/src/components/Navbar.tsx) | Sticky nav with `.glassmorphism`. Desktop: Mega Menu dropdown + WhatsApp CTA + Request Quote pill. Mobile: Hamburger with slide-out menu. Height: 80px (`h-20`). |
| **Footer** | [Footer.tsx](file:///d:/hhh/src/components/Footer.tsx) | 4-column layout: Brand, Quick Links, Services, Contact Info. Social icons (FB/IG/Twitter/LinkedIn/WhatsApp). Copyright bar. |

### Lead Capture CTAs (Every Page)
| Component | File | Details |
|-----------|------|---------|
  | **WhatsAppFloatingButton** | [WhatsAppFloatingButton.tsx](file:///d:/hhh/src/components/WhatsAppFloatingButton.tsx) | Fixed `bottom-6 right-6`, green `bg-green-500`, rounded-full, hover scale. Links to `wa.me/919259010657` (project WhatsApp). |
| **StickyRequestQuote** | [StickyRequestQuote.tsx](file:///d:/hhh/src/components/StickyRequestQuote.tsx) | `sticky bottom-0` navy blue bar. Two pill buttons: "Request a Quote" (accent) + "Book a Consultation" (outline). |

### Product & Filter
| Component | File | Details |
|-----------|------|---------|
| **ProductCard** | [ProductCard.tsx](file:///d:/hhh/src/components/ProductCard.tsx) | B2B card: Hover image swap, NEW/FEATURED badges, heart+eye quick actions, MOQ line, Sample Price ₹, Bulk Price range, color swatches, "View Details & Inquiry" CTA (NOT "Buy Now"). |
| **FilterSidebar** | [FilterSidebar.tsx](file:///d:/hhh/src/components/FilterSidebar.tsx) | Shop page sidebar filters: category checkboxes, price range slider, fabric filter, color filter, MOQ filter. |

---

## 6. Data Models & Sample Data

All data + TypeScript interfaces live in a single file: [sampleData.ts](file:///d:/hhh/src/data/sampleData.ts)

### 📐 TypeScript Interfaces (11 Total)

#### Core Business Types
```typescript
Product           # B2B product with MOQ, samplePrice, bulkPriceRange
TeamMember        # Leadership team (name, role, bio, image)
Milestone         # Company timeline (year, title, description)
MachineSpec       # Factory equipment (type, brand, quantity)
TestimonialEntry  # Client reviews (name, brand, quote, rating)
BlogPost          # Blog articles (title, excerpt, category, HTML content)
GalleryItem       # Photo (title, category: Factory/Machinery/Team/Products/Events)
FAQItem           # FAQ (question, answer)
CareerPosition    # Job opening (title, department, requirements)
Inquiry           # Admin dashboard entries (type, status, contact)
InquiryData       # API service payload (submitInquiry)
```

#### `Product` Interface (B2B-Specific)
Key fields (NOT B2C):
- **`moq`** (number) → Minimum Order Quantity (e.g., 50 pieces for Kurtis)
- **`samplePrice`** (₹) → Higher per-piece rate for sample orders
- **`bulkPriceRange: [min, max]`** (₹) → Sliding pricing (e.g., ₹280 - ₹350 / piece based on volume)
- **`originalPrice`** → Strikethrough display
- **`isFeatured`, `isBestSeller`, `isNew`** → Badges
- **`fabric`** → Fabric type (Cotton, Georgette, Silk Blend, etc.)

### 📊 Sample Data Counts
| Dataset | Count |
|---------|-------|
| **Products** | 12 (across 6 categories) |
| **Categories** | 6 (Kurtis, Suits, Gowns, Co-ord Sets, Ethnic Wear, Western Wear) |
| **Team Members** | 4 (Founder/MD, Head Production, Head QC, Head Design) |
| **Milestones** | 5 (2010 → 2024) |
| **Machine Specs** | 8 (Juki, Brother, Pegasus, Barudan, Eastman, Singer) |
| **Testimonials** | 6 (India + USA + UK clients, 4-5⭐ ratings) |
| **Blog Posts** | 4 (Business, Manufacturing, Design categories) |
| **Gallery Items** | 15 (5 categories × 3 each) |
| **FAQ Items** | 12 (MOQ, Samples, Payment, Shipping, QC, Cancellation) |
| **Career Positions** | 3 (Pattern Master, Quality Inspector, Merchandiser) |
| **Manufacturing Steps** | 8 (Design → Fabric → Pattern → Cut → Stitch → QC → Pack → Dispatch) |
| **Mock Inquiries** | 3 (INQ-001, INQ-002, INQ-003) |

---

## 7. Design System & Theme

### 🎨 Colors (Tailwind Custom Tokens)
Defined in [tailwind.config.js](file:///d:/hhh/tailwind.config.js#L9-L14):

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#0F2545` | Navy Blue → Headings, Navbar, Footer, Primary Buttons |
| `accent` | `#B8862E` | Gold → CTAs, Icons, Links, Accent Highlights, Badges |
| `surface` | `#F8F9FA` | Light Gray → Card backgrounds, Section stripes |
| `ink` | `#212529` | Dark Gray → Body text fallback |

Button color patterns:
- **Primary CTA** → `bg-accent hover:bg-accent/90 text-white rounded-full`
- **Secondary CTA** → `bg-primary hover:bg-primary/90 text-white rounded-full`
- **Outline CTA** → `border-2 border-white hover:bg-white hover:text-primary`
- **WhatsApp** → `bg-green-500 hover:bg-green-600 text-white`

### 🔤 Typography (Fonts)
| Font Family | Tailwind Name | Use Case |
|-------------|---------------|----------|
| **Poppins** | `font-poppins` | Headings, Titles, Logos, Large Text |
| **Inter** | `font-inter` | Body Text, Paragraphs, Default (set in App root) |

Load fonts via Google Fonts `<link>` in [index.html](file:///d:/hhh/index.html) (assumed pattern).

### ✨ Custom Tailwind Utility
In [index.css](file:///d:/hhh/src/index.css#L12-L14):
```css
.glassmorphism {
  @apply backdrop-blur-lg bg-white/70 border border-white/30;
}
```
→ Used in Navbar (frosted glass effect on scroll).

### 📐 UI Spacing Conventions
| Element | Tailwind |
|---------|----------|
| Card border radius | `rounded-xl` / `rounded-2xl` |
| Pill buttons | `rounded-full` |
| Section padding | `py-16` / `py-20` |
| Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |

### 🎬 Animation (Framer Motion)
Standard patterns used everywhere:
```typescript
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: index * 0.1 }}
viewport={{ once: true }}   // Animate only on first scroll-in
```
→ Staggered list animations (0.1s per item delay).

---

## 8. Key Business Features

### ✅ B2B Lead Generation (Primary Purpose)
| Feature | Where | Details |
|---------|-------|---------|
| **3-Tab Contact Form** | `/contact` | 1. Request Quote (14 fields: company, country, product type, quantity, budget, details) |
| | | 2. Upload Design (drag-drop file upload: JPG/PNG/PDF/AI/EPS/Tech Packs, fabric + quantity) |
| | | 3. Book Meeting (meeting type: Zoom / Phone / Factory Visit, date picker, time picker, agenda) |
| **WhatsApp Everywhere** | All pages | Floating button + Navbar pill + Contact card + Footer social |
| **Sticky Bottom Bar** | All pages | "Ready to start?" → Request Quote + Book Consultation (always visible) |
| **Standalone Quote Form** | `/request-quotation` | Detailed dedicated quotation form |
| **Custom Order Form** | `/custom-order` | Custom manufacturing specification form |
| **Distributor / Dealer** | `/become-*` | B2B partner onboarding forms |
| **MOQ-Validated Product Inquiry** | `/shop` + `/product/:id` | Cart/Wishlist minimum quantity = product MOQ |

### 🏭 Manufacturing Credibility Features
| Feature | Details |
|---------|---------|
| **Stats Section** | 15+ Years • 200+ Workers • 50,000+ pcs/month • 50+ Countries |
| **Factory Stats** | 50,000 sq ft unit, 500+ workers, 100,000+ pcs/month (in [Factory.tsx](file:///d:/hhh/src/pages/Factory.tsx#L5-L10)) |
| **4 Certifications** | ISO 9001:2015, SA8000, Oeko-Tex 100, SMETA |
| **8 Export Countries** | USA, UK, Germany, France, Canada, Australia, Japan, UAE |
| **8-Step Manufacturing Process** | Design → Fabric → Pattern → Cut → Stitch → QC → Pack → Dispatch |
| **Machinery List** | 8 machine rows with quantity (Juki, Brother, Pegasus, Barudan) |
| **5-Company Milestone Timeline** | 2010 Founded → 2024 Global Scale |

### 🎯 Product Catalog (B2B-Oriented)
- **No "Add to Cart"** → "View Details & Inquiry" (button text)
- **3 Prices per product**: Sample Price ₹ • Bulk Min-Max ₹ • Original Price (strikethrough)
- **MOQ display prominent**: Kart par "MOQ: 50 pcs" visible
- **Color swatches** + Size chips
- **Filter sidebar**: Category, Price Range, Fabric, Color, MOQ slabs

### 📈 Marketing Content
- Blog with 4 full articles (with HTML `<h2>`, `<ul>`, `<p>` inside `content` field)
- Testimonial carousel (Swiper) + dedicated testimonials page
- FAQ accordion (12 questions)
- Career page with 3 positions
- Company profile download CTA (Home page)

---

## 9. Services & API Layer

**File:** [api.ts](file:///d:/hhh/src/services/api.ts)

Purpose: **Mock API service layer** → Console logs + Promise delays. Replace with real backend (Firebase, Formspree, Express, etc.)

### 3 Mock Functions

#### `submitInquiry(data: InquiryData)` → Promise<{ success, message, inquiryId }>
```typescript
// Input type
{
  type: 'quote' | 'design' | 'meeting' | 'custom' | 'distributor' | 'dealer' | 'wholesale';
  name: string;
  email: string;
  phone: string;
  ...additionalFields;
}

// Returns after 1.5s simulated delay
{
  success: true,
  message: 'Your inquiry has been submitted successfully! We will contact you within 24 hours.',
  inquiryId: 'INQ-XXXXXX'  // timestamp-based
}
```
→ TODO comment: Use `fetch('/api/inquiries', { method: 'POST' ... })`

#### `trackOrder(orderId: string)` → Promise<{ orderId, status, timeline }>
```typescript
// Returns after 1s delay
{
  orderId: '<input>',
  status: 'In Production',
  timeline: [
    { status: 'Order Confirmed', date: '2024-07-18', description: '...' },
    { status: 'In Production',  date: '2024-07-19', description: '...' },
    { status: 'Quality Check',  date: '', description: '' },   // empty = not reached
    { status: 'Dispatched',     date: '', description: '' },
    { status: 'Delivered',      date: '', description: '' },
  ]
}
```

#### `loginClient(email, password)` → Promise<{ success, token, user }>
Mock JWT login: Any email/password → success. Returns `mock-jwt-token-<timestamp>`.

---

## 10. NPM Scripts & Build System

### Scripts (from [package.json](file:///d:/hhh/package.json#L6-L11))
| Command | What It Does |
|---------|--------------|
| `npm run dev` | Starts Vite dev server (HMR) on `http://localhost:5173` |
| `npm run build` | **2 steps**: 1. `tsc -b` (TypeScript build check, strict mode) 2. `vite build` → output in `dist/` folder |
| `npm run preview` | Serves the `dist/` production build locally |
| `npm run lint` | ESLint check: `.ts/.tsx` files, no unused vars, no unused params, zero warnings allowed |

### TypeScript Strict Mode
[tsconfig.json](file:///d:/hhh/tsconfig.json#L17-L21) enforces:
- `"strict": true`
- `"noUnusedLocals": true`
- `"noUnusedParameters": true`
- `"noFallthroughCasesInSwitch": true`

### Build Output (dist/)
```
dist/
├── index.html
├── assets/
│   ├── index-*.css          # All Tailwind + custom CSS (bundled)
│   ├── index-*.js           # App shell + router
│   ├── Home-*.js            # Lazy chunk
│   ├── Contact-*.js
│   ├── Shop-*.js
│   ├── ProductDetails-*.js
│   ├── Factory-*.js
│   └── [30+ other page chunks]
└── [image assets]
```

---

## 11. Quick File Links (Clickable)

### 🔧 Config & Root Files
- [package.json](file:///d:/hhh/package.json) → Dependencies + Scripts
- [tailwind.config.js](file:///d:/hhh/tailwind.config.js) → Theme Colors + Fonts
- [tsconfig.json](file:///d:/hhh/tsconfig.json) → TypeScript Strict Mode
- [vite.config.ts](file:///d:/hhh/vite.config.ts) → Build Tool Config
- [index.css](file:///d:/hhh/src/index.css) → Tailwind + `.glassmorphism`

### 🏗️ Application Skeleton
- [App.tsx](file:///d:/hhh/src/App.tsx) → All Routes + Layout Shell
- [main.tsx](file:///d:/hhh/src/main.tsx) → React Entry Point

### 🧩 Components (src/components)
- [Navbar.tsx](file:///d:/hhh/src/components/Navbar.tsx) → Glassmorphism Sticky Nav
- [Footer.tsx](file:///d:/hhh/src/components/Footer.tsx) → 4-Column Footer
- [ProductCard.tsx](file:///d:/hhh/src/components/ProductCard.tsx) → B2B Product Card
- [WhatsAppFloatingButton.tsx](file:///d:/hhh/src/components/WhatsAppFloatingButton.tsx) → Floating WA CTA
- [StickyRequestQuote.tsx](file:///d:/hhh/src/components/StickyRequestQuote.tsx) → Bottom Sticky CTA Bar
- [FilterSidebar.tsx](file:///d:/hhh/src/components/FilterSidebar.tsx) → Shop Filters
- [AnnouncementBar.tsx](file:///d:/hhh/src/components/AnnouncementBar.tsx) → Top Banner

### 📄 Key Pages
- [Home.tsx](file:///d:/hhh/src/pages/Home.tsx) → Full Landing (Hero → Blog CTA, 14 sections)
- [Factory.tsx](file:///d:/hhh/src/pages/Factory.tsx) → Stats + Certs + Export + Gallery
- [Contact.tsx](file:///d:/hhh/src/pages/Contact.tsx) → 3-Tab Quote/Design/Meeting Forms
- [ProductDetails.tsx](file:///d:/hhh/src/pages/ProductDetails.tsx) → MOQ + Bulk Pricing + Inquiry
- [Shop.tsx](file:///d:/hhh/src/pages/Shop.tsx) → Product Listing + FilterSidebar
- [Wholesale.tsx](file:///d:/hhh/src/pages/Wholesale.tsx) → Wholesale Tiers
- [PrivateLabel.tsx](file:///d:/hhh/src/pages/PrivateLabel.tsx) → White Label Service
- [UserDashboard.tsx](file:///d:/hhh/src/pages/UserDashboard.tsx) → Client Dashboard
- [AdminDashboard.tsx](file:///d:/hhh/src/pages/AdminDashboard.tsx) → Admin Panel
- [TrackOrder.tsx](file:///d:/hhh/src/pages/TrackOrder.tsx) → Order Timeline
- [NotFound.tsx](file:///d:/hhh/src/pages/NotFound.tsx) → 404 Page

### 🗄️ Data & Services
- [sampleData.ts](file:///d:/hhh/src/data/sampleData.ts) → All TS Interfaces + Demo Data
- [api.ts](file:///d:/hhh/src/services/api.ts) → Mock API (submitInquiry / trackOrder / loginClient)

---

## 12. Next Steps & Future Enhancements

### 🚨 Critical Before Go-Live (Replace Placeholders)
1. **WhatsApp Number**: Change `919259010657` everywhere:
   - [Navbar.tsx L40](file:///d:/hhh/src/components/Navbar.tsx#L40), [L69](file:///d:/hhh/src/components/Navbar.tsx#L69)
   - [WhatsAppFloatingButton.tsx L6](file:///d:/hhh/src/components/WhatsAppFloatingButton.tsx#L6)
   - [Contact.tsx L64](file:///d:/hhh/src/pages/Contact.tsx#L64)
   - [Footer.tsx L17](file:///d:/hhh/src/components/Footer.tsx#L17)
   - [Home.tsx L179](file:///d:/hhh/src/pages/Home.tsx#L179)

2. **Contact Info**: Replace address/phone/email:
   - [Contact.tsx L44-L47](file:///d:/hhh/src/pages/Contact.tsx#L44-L47)
   - [Footer.tsx L46-L56](file:///d:/hhh/src/components/Footer.tsx#L46-L56)

3. **Google Maps iFrame**: Replace Empire State Building coordinates with real factory address in [Contact.tsx L441](file:///d:/hhh/src/pages/Contact.tsx#L441)

4. **Real Images**: Replace placeholder Unsplash/Stock images in `public/` and `uploads/` with:
   - Real factory floor, stitching, QC, embroidery department photos
   - Real product photos (white background or lifestyle)
   - Team headshots
   - Client logos (replace "Brand 1..6" placeholders in [Home.tsx L423-L434](file:///d:/hhh/src/pages/Home.tsx#L423-L434))

5. **Company Profile PDF**: Replace `href="#"` in [Home.tsx L452](file:///d:/hhh/src/pages/Home.tsx#L452) with real PDF URL

### 🔌 Backend Integration
1. **Form Submission**: Implement `submitInquiry()` in [api.ts](file:///d:/hhh/src/services/api.ts) with real backend:
   - **Option 1 (No-code)**: Formspree / Getform / Basin (POST form data directly)
   - **Option 2 (Firebase)**: Firestore collection `inquiries` + Cloud Functions → Email / WhatsApp notification
   - **Option 3 (Custom)**: Node.js Express + MongoDB + Nodemailer / Twilio WhatsApp
   - Connect to Contact's 3-tab form, CustomOrder, BecomeDistributor, BecomeDealer forms

2. **Order Tracking**: Implement real `trackOrder()` → Pull from order management DB

3. **Auth**: Replace `loginClient()` mock with real auth (Firebase Auth / Auth0 / JWT)

4. **Wishlist / Cart / UserDashboard**: Add localStorage persistence or backend sync

### 🚀 SEO & Analytics
1. Add **React Helmet** for per-page `<title>`, meta description, Open Graph tags
2. Install **Google Analytics 4** (gtag.js) in [index.html](file:///d:/hhh/index.html)
3. Set up **Facebook Pixel** for retargeting
4. Add **sitemap.xml** + **robots.txt** in public/

### ☁️ Deployment
Recommended platforms:
- **Vercel** → One-click deploy (auto-detects Vite), preview deployments
- **Netlify** → Drag-drop `dist/` folder or Git-connected
- **AWS S3 + CloudFront** → Scalable production CDN

### 📈 Post-Launch Features
1. **Multi-language** (Hindi, Gujarati, Marathi, Spanish for exports)
2. **Live Chat** (Tawk.to or Intercom widget)
3. **Video Testimonials** (Embed YouTube/Vimeo on Testimonials page)
4. **360° Factory Tour** (Interactive virtual tour replaces "Video Tour" placeholder in [Factory.tsx L80-L85](file:///d:/hhh/src/pages/Factory.tsx#L80-L85))
5. **Email Notifications** → Auto-reply to inquiry submissions (with inquiry ID)
6. **CRM Integration** → Auto-create lead in HubSpot / Salesforce / Zoho

---

**📦 Project Size:** ~31 Pages × 7 Components × 12 Products × Full Animations × Strict TypeScript  
**✅ Status:** Complete and Production-Ready (after placeholder replacement)
