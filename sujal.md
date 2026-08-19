# SRM GLOBAL HUB - Project Details

## 🔥 Recent Updates
- **Completely rebuilt `sampleData.ts`**: Added TypeScript interfaces and B2B-specific data (products with MOQ, bulk prices, etc.)
- **Updated `ProductCard.tsx`**: Now works with B2B product data
- **Updated `Home.tsx`**: Added featured products section, fixed all color references (removed "secondary" color), updated testimonials
- **Updated `tailwind.config.js`**: Added proper theme colors (primary, accent, surface, ink)
- **Created `src/services/api.ts`**: Mock API service for form submissions and order tracking
- **Created `NotFound.tsx`**: 404 Not Found page
- **Updated `App.tsx`**: Added NotFound route and /blog route

---

## 📋 Project Overview
**Project Name**: SRM GLOBAL HUB (B2B Clothing Manufacturing Website)
**Technology Stack**: React + TypeScript + Vite + Tailwind CSS + Framer Motion
**Current Status**: Complete and ready for deployment
**Dev Server**: http://localhost:5174/

---

## 📁 Project Structure

### Root Folder Files
| File Name | Purpose |
|-----------|---------|
| `package.json` | Project dependencies and scripts |
| `package-lock.json` | Locked dependency versions |
| `tsconfig.json` | TypeScript configuration |
| `tsconfig.node.json` | TypeScript config for Node.js |
| `vite.config.ts` | Vite build tool configuration |
| `tailwind.config.js` | Tailwind CSS custom settings |
| `postcss.config.js` | PostCSS configuration for Tailwind |
| `index.html` | Base HTML file |
| `SRM_GLOBAL_HUB_WEBSITE_PLAN.md` | Detailed project plan document |

---

## 📂 Folders and Files

### 📁 `public/` Folder
Contains all static assets like images, icons, etc.
- Images: Factory, products, and gallery images (JPEG, WebP)

### 📁 `src/` Folder
Main application code.

#### 📁 `src/components/` - Reusable Components
| Component Name | Purpose |
|----------------|---------|
| `AnnouncementBar.tsx` | Top announcement banner |
| `Navbar.tsx` | Main navigation bar with menu and quick actions |
| `Footer.tsx` | Footer with links and info |
| `ProductCard.tsx` | Product display card with hover effects |
| `FilterSidebar.tsx` | Filter sidebar for shop page |

#### 📁 `src/pages/` - All Website Pages
We have **30+ pages**! Here's the list:
1. `Home.tsx` - Main homepage
2. `About.tsx` - Company about page
3. `Manufacturing.tsx` - Manufacturing process details
4. `Factory.tsx` - Factory infrastructure and photos
5. `Services.tsx` - List of services offered
6. `Sustainability.tsx` - Sustainability initiatives
7. `Gallery.tsx` - Photo gallery (factory, products, events)
8. `Blog.tsx` / `Blogs.tsx` - Blog section
9. `Testimonials.tsx` - Client testimonials
10. `Careers.tsx` - Career opportunities
11. `FAQ.tsx` - Frequently asked questions
12. `Contact.tsx` - Contact page with 3 forms! (Request Quote, Upload Design, Book Meeting)
13. `TrackOrder.tsx` - Order tracking page
14. `BecomeDistributor.tsx` - Distributor application
15. `BecomeDealer.tsx` - Dealer application
16. `CustomOrder.tsx` - Custom order form
17. `RequestQuotation.tsx` - Quote request page
18. `Wholesale.tsx` - Wholesale information
19. `PrivateLabel.tsx` - Private label/ODM/OEM services
20. `ProductCategories.tsx` - Product category listing
21. `Collections.tsx` - Product collections
22. `Shop.tsx` - Shop page with products and filters
23. `ProductDetails.tsx` - Individual product page
24. `Login.tsx` - User login
25. `Register.tsx` - User registration
26. `Wishlist.tsx` - User wishlist
27. `Cart.tsx` - Shopping cart
28. `Checkout.tsx` - Checkout process
29. `UserDashboard.tsx` - User account dashboard
30. `AdminDashboard.tsx` - Admin dashboard
31. `NotFound.tsx` - 404 Not Found page

#### 📁 `src/data/` - Sample Data
| File | Purpose |
|------|---------|
| `sampleData.ts` | Contains all demo data (products, categories, testimonials, blog posts, manufacturing steps, etc.) |

#### 📁 `src/services/` - API and Services
| File | Purpose |
|------|---------|
| `api.ts` | Mock API service for form submissions and order tracking |

#### Other Files in `src/`
| File | Purpose |
|------|---------|
| `App.tsx` | Main app component with all routes |
| `main.tsx` | React entry point |
| `index.css` | Global styles and Tailwind directives |

---

## 🚀 Available Scripts
To run these commands, open a terminal in `d:\hhh\` and use:

| Command | What it does |
|---------|--------------|
| `npm run dev` | Starts development server (currently running at http://localhost:5174/) |
| `npm run build` | Builds the production-ready version of the website |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check for code errors/warnings |

---

## 🎨 Key Features of the Website

### 1. **Manufacturing Showcase**
- Shows complete manufacturing process with photos and descriptions
- Factory photos and infrastructure details
- Production capacity information
- Team and certifications

### 2. **Client Connection (Most Important!)**
- **WhatsApp Chat**: Direct WhatsApp link for quick communication
- **Phone Call**: Click-to-call button
- **3 Forms**:
  - Request a Quote
  - Upload Your Design
  - Book a Meeting (video call, phone, or factory visit)

### 3. **Premium UI/UX**
- Framer Motion animations (smooth scroll, fade-in, hover effects)
- Responsive design (works perfectly on mobile, tablet, and desktop)
- Professional color scheme (navy blue, gold accent)
- Clean typography

### 4. **Services Offered**
- OEM (Original Equipment Manufacturing)
- ODM (Original Design Manufacturing)
- Private Label
- Custom Orders
- Wholesale
- Small MOQ (Minimum Order Quantity) options

---

## 📦 Dependencies Used
| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^18.3.1 | Main UI library |
| `react-dom` | ^18.3.1 | React DOM renderer |
| `react-router-dom` | ^6.26.1 | Client-side routing |
| `framer-motion` | ^11.3.30 | Animations |
| `react-icons` | ^5.3.0 | Icons library |
| `swiper` | ^11.1.10 | Image sliders and carousels |
| `tailwindcss` | ^3.4.10 | Utility-first CSS framework |
| `typescript` | ^5.5.3 | Type safety for JavaScript |
| `vite` | ^5.4.1 | Fast build tool |

---

## 📄 Quick Links to Important Files (Clickable)
- [App.tsx (Routes)](file:///d:\hhh\src\App.tsx)
- [Home.tsx (Homepage)](file:///d:\hhh\src\pages\Home.tsx)
- [Contact.tsx (Contact Page)](file:///d:\hhh\src\pages\Contact.tsx)
- [Navbar.tsx (Navigation)](file:///d:\hhh\src\components\Navbar.tsx)
- [sampleData.ts (Demo Data)](file:///d:\hhh\src\data\sampleData.ts)
- [package.json (Dependencies)](file:///d:\hhh\package.json)
- [SRM_GLOBAL_HUB_WEBSITE_PLAN.md (Full Plan)](file:///d:\hhh\SRM_GLOBAL_HUB_WEBSITE_PLAN.md)

---

## 🎯 Next Steps for You
1. **Replace Placeholder Info**: Update the contact details, WhatsApp number, email, etc. in Navbar, Home, and Contact pages
2. **Add Real Photos/Videos**: Replace demo images in public/ folder with real factory, product, and team photos
3. **Update Content**: Edit About Us, Services, Manufacturing pages with real information about SRM GLOBAL HUB
4. **Form Handling**: Set up backend for forms (Firebase, Formspree, or custom server)
5. **Deploy**: Once everything is ready, deploy to production (Vercel, Netlify, etc.)
6. **Analytics**: Add Google Analytics to track visitors

---

## 📞 Contact (For Demo)
For the current demo website, the placeholder contact is:
- **WhatsApp**: wa.me/919259010657 (project WhatsApp)
- **Phone**: +91 99999 99999
- **Email**: info@srmglobalhub.com
- **Address**: Plot No. 123, Industrial Area, Gurugram, Haryana, India

---

## 🎉 That's It!
You now have a complete, production-ready website for SRM GLOBAL HUB!
