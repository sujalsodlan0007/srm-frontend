// TypeScript Interfaces
// TODO: Replace all sample content with real product, brand, gallery, testimonial, and FAQ data.
export interface Product {
  id: number;
  name: string;
  category: "Kurtis" | "Suits" | "Gowns" | "Co-ord Sets" | "Ethnic Wear" | "Western Wear";
  image: string;
  hoverImage?: string;
  description: string;
  fabric: string;
  moq: number; // Minimum Order Quantity
  samplePrice: number;
  price: number; // For display in cart/wishlist (use samplePrice as default)
  originalPrice: number; // For strikethrough price
  bulkPriceRange: [number, number]; // min and max bulk price per piece
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
}

export interface MachineSpec {
  id: number;
  type: string;
  brand: string;
  quantity: number;
}

export interface TestimonialEntry {
  id: number;
  name: string;
  brand: string;
  quote: string;
  rating: number;
  image?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  content: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: "Factory" | "Machinery" | "Team" | "Products" | "Events";
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface CareerPosition {
  id: number;
  title: string;
  department: string;
  description: string;
  requirements: string[];
}

export interface Inquiry {
  id: string;
  type: "quote" | "design" | "meeting" | "custom" | "distributor" | "dealer" | "wholesale";
  submittedAt: string;
  status: "New" | "Contacted" | "Quotation Sent" | "Sample Stage" | "Order Confirmed" | "Closed";
  name: string;
  email: string;
  phone: string;
  details: string;
}

// Data
export const products: Product[] = [
  {
    id: 1,
    name: "Embroidered Georgette Kurti",
    category: "Kurtis",
    image: "/uploads/luba-glazunova-hl8EFKDlbKw-unsplash.jpg.jpeg",
    hoverImage: "/uploads/francois-le-nguyen-pouTfHUG430-unsplash.jpg.jpeg",
    description: "Elegant georgette kurti with intricate hand and machine embroidery, perfect for everyday and festive wear.",
    fabric: "Georgette",
    moq: 50,
    samplePrice: 450,
    price: 450,
    originalPrice: 599,
    bulkPriceRange: [280, 350],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#B8862E", "#E91E63", "#9C27B0", "#009688", "#3F51B5"],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Cotton Printed Kurti Set",
    category: "Kurtis",
    image: "/uploads/francois-le-nguyen-pouTfHUG430-unsplash.jpg.jpeg",
    hoverImage: "/uploads/equalstock-kuyumG6hKWk-unsplash.jpg.jpeg",
    description: "Comfortable cotton kurti with dupatta set, perfect for daily wear and office use.",
    fabric: "Cotton",
    moq: 40,
    samplePrice: 380,
    price: 380,
    originalPrice: 499,
    bulkPriceRange: [220, 280],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#FF5722", "#FFC107", "#4CAF50", "#00BCD4", "#2196F3"],
    isNew: true
  },
  {
    id: 3,
    name: "Silk Blend Anarkali Suit",
    category: "Suits",
    image: "/uploads/equalstock-kuyumG6hKWk-unsplash.jpg.jpeg",
    hoverImage: "/uploads/collab-media-upKXvfgKABY-unsplash - Copy.jpg.jpeg",
    description: "Premium silk blend Anarkali suit with heavy embroidery and dupatta, ideal for weddings and festive occasions.",
    fabric: "Silk Blend",
    moq: 30,
    samplePrice: 1800,
    price: 1800,
    originalPrice: 2499,
    bulkPriceRange: [1200, 1600],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#B8862E", "#E91E63", "#673AB7", "#9C27B0"],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 4,
    name: " Georgette Palazzo Suit",
    category: "Suits",
    image: "/uploads/collab-media-upKXvfgKABY-unsplash - Copy.jpg.jpeg",
    hoverImage: "/uploads/remy-gieling-KP6XQIEjjPA-unsplash.jpg.jpeg",
    description: "Stylish georgette palazzo suit with digital print, comfortable and trendy.",
    fabric: "Georgette",
    moq: 35,
    samplePrice: 950,
    price: 950,
    originalPrice: 1299,
    bulkPriceRange: [650, 850],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#00BCD4", "#8BC34A", "#FF9800", "#F44336"],
    isNew: true
  },
  {
    id: 5,
    name: "Heavy Net Gown",
    category: "Gowns",
    image: "/uploads/remy-gieling-KP6XQIEjjPA-unsplash.jpg.jpeg",
    hoverImage: "/uploads/marco-j-haenssgen-sE0udIZcgGM-unsplash.jpg.jpeg",
    description: "Luxurious heavy net gown with sequin and bead work, perfect for bridal and party wear.",
    fabric: "Net",
    moq: 20,
    samplePrice: 3500,
    price: 3500,
    originalPrice: 4499,
    bulkPriceRange: [2400, 3200],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#B8862E", "#E91E63", "#FFFFFF", "#9C27B0"],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 6,
    name: "Satin Evening Gown",
    category: "Gowns",
    image: "/uploads/marco-j-haenssgen-sE0udIZcgGM-unsplash.jpg.jpeg",
    hoverImage: "/uploads/luba-glazunova-hl8EFKDlbKw-unsplash.jpg.jpeg",
    description: "Elegant satin evening gown with a flowing silhouette, ideal for cocktail parties and formal events.",
    fabric: "Satin",
    moq: 25,
    samplePrice: 2200,
    price: 2200,
    originalPrice: 2999,
    bulkPriceRange: [1500, 2000],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#0F2545", "#B8862E", "#FFFFFF", "#E91E63"],
    isNew: true
  },
  {
    id: 7,
    name: "Crop Top & Skirt Co-ord",
    category: "Co-ord Sets",
    image: "/uploads/arawak-chen-HIrP05jnXNs-unsplash.jpg.jpeg",
    hoverImage: "/uploads/AdobeStock_91342287.webp",
    description: "Trendy crop top and skirt co-ord set with print, perfect for casual and party wear.",
    fabric: "Crepe",
    moq: 45,
    samplePrice: 850,
    price: 850,
    originalPrice: 1199,
    bulkPriceRange: [580, 750],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#FF5722", "#2196F3", "#4CAF50", "#FFC107"],
    isFeatured: true
  },
  {
    id: 8,
    name: "Shirt & Trousers Co-ord",
    category: "Co-ord Sets",
    image: "/uploads/AdobeStock_91342287.webp",
    hoverImage: "/uploads/arawak-chen-HIrP05jnXNs-unsplash.jpg.jpeg",
    description: "Stylish shirt and trousers co-ord set, perfect for office and semi-formal wear.",
    fabric: "Cotton Blend",
    moq: 40,
    samplePrice: 900,
    price: 900,
    originalPrice: 1299,
    bulkPriceRange: [600, 800],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#0F2545", "#FFFFFF", "#78909C", "#B8862E"],
    isNew: true
  },
  {
    id: 9,
    name: "Banarasi Silk Saree",
    category: "Ethnic Wear",
    image: "/uploads/luba-glazunova-hl8EFKDlbKw-unsplash.jpg.jpeg",
    hoverImage: "/uploads/francois-le-nguyen-pouTfHUG430-unsplash.jpg.jpeg",
    description: "Premium Banarasi silk saree with intricate zari work, perfect for weddings and festive occasions.",
    fabric: "Banarasi Silk",
    moq: 15,
    samplePrice: 4500,
    price: 4500,
    originalPrice: 5999,
    bulkPriceRange: [3000, 4200],
    sizes: ["One Size"],
    colors: ["#B8862E", "#E91E63", "#9C27B0", "#009688"],
    isFeatured: true
  },
  {
    id: 10,
    name: "Lehenga Choli",
    category: "Ethnic Wear",
    image: "/uploads/francois-le-nguyen-pouTfHUG430-unsplash.jpg.jpeg",
    hoverImage: "/uploads/equalstock-kuyumG6hKWk-unsplash.jpg.jpeg",
    description: "Heavy lehenga choli with embroidery and dupatta, ideal for bridal wear and wedding functions.",
    fabric: "Velvet & Net",
    moq: 12,
    samplePrice: 5500,
    price: 5500,
    originalPrice: 6999,
    bulkPriceRange: [3800, 5000],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#B8862E", "#E91E63", "#FFFFFF", "#673AB7"],
    isNew: true
  },
  {
    id: 11,
    name: "Formal Blazer & Dress",
    category: "Western Wear",
    image: "/uploads/equalstock-kuyumG6hKWk-unsplash.jpg.jpeg",
    hoverImage: "/uploads/collab-media-upKXvfgKABY-unsplash - Copy.jpg.jpeg",
    description: "Professional formal blazer and dress set, perfect for corporate wear and office use.",
    fabric: "Polyester Blend",
    moq: 30,
    samplePrice: 1600,
    price: 1600,
    originalPrice: 2199,
    bulkPriceRange: [1100, 1500],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#0F2545", "#263238", "#455A64", "#FFFFFF"],
    isFeatured: true
  },
  {
    id: 12,
    name: "Casual Maxi Dress",
    category: "Western Wear",
    image: "/uploads/collab-media-upKXvfgKABY-unsplash - Copy.jpg.jpeg",
    hoverImage: "/uploads/remy-gieling-KP6XQIEjjPA-unsplash.jpg.jpeg",
    description: "Comfortable and stylish casual maxi dress, perfect for everyday wear and outings.",
    fabric: "Rayon",
    moq: 50,
    samplePrice: 650,
    price: 650,
    originalPrice: 899,
    bulkPriceRange: [420, 580],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#4CAF50", "#2196F3", "#FF9800", "#E91E63"],
    isNew: true
  }
];

export const categories = [
  { id: 1, name: "Kurtis", image: "/uploads/luba-glazunova-hl8EFKDlbKw-unsplash.jpg.jpeg" },
  { id: 2, name: "Suits", image: "/uploads/francois-le-nguyen-pouTfHUG430-unsplash.jpg.jpeg" },
  { id: 3, name: "Gowns", image: "/uploads/equalstock-kuyumG6hKWk-unsplash.jpg.jpeg" },
  { id: 4, name: "Co-ord Sets", image: "/uploads/collab-media-upKXvfgKABY-unsplash - Copy.jpg.jpeg" },
  { id: 5, name: "Ethnic Wear", image: "/uploads/remy-gieling-KP6XQIEjjPA-unsplash.jpg.jpeg" },
  { id: 6, name: "Western Wear", image: "/uploads/marco-j-haenssgen-sE0udIZcgGM-unsplash.jpg.jpeg" }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Founder & Managing Director",
    bio: "With over 20 years of experience in the garment manufacturing industry, Rajesh founded SRM GLOBAL HUB with a vision to deliver premium quality ladies' wear with ethical manufacturing practices.",
    image: "/uploads/luba-glazunova-hl8EFKDlbKw-unsplash.jpg.jpeg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Head of Production",
    bio: "Priya oversees our entire production process, ensuring every garment meets our strict quality standards. With 15 years of experience, she manages our team of 200+ skilled workers efficiently.",
    image: "/uploads/francois-le-nguyen-pouTfHUG430-unsplash.jpg.jpeg"
  },
  {
    id: 3,
    name: "Anita Verma",
    role: "Head of Quality Control",
    bio: "Anita leads our quality control team with 12 years of experience in garment inspection. She ensures every piece passes through rigorous quality checks before dispatch.",
    image: "/uploads/equalstock-kuyumG6hKWk-unsplash.jpg.jpeg"
  },
  {
    id: 4,
    name: "Meera Patel",
    role: "Head of Design",
    bio: "Meera is our creative force, with 10 years of experience in fashion design. She keeps our designs fresh, trendy, and aligned with the latest market demands.",
    image: "/uploads/collab-media-upKXvfgKABY-unsplash - Copy.jpg.jpeg"
  }
];

export const milestones: Milestone[] = [
  { id: 1, year: "2010", title: "Company Founded", description: "SRM GLOBAL HUB started with a small team of 15 workers and a vision to become a leading garment manufacturer." },
  { id: 2, year: "2014", title: "Expanded Production", description: "Increased production capacity to 5,000 pieces per month and added new machinery to our factory." },
  { id: 3, year: "2018", title: "Quality Certifications", description: "Achieved ISO 9001:2015 certification for quality management systems and expanded our client base internationally." },
  { id: 4, year: "2021", title: "Sustainability Initiative", description: "Launched our sustainability program with eco-friendly fabrics and waste reduction measures." },
  { id: 5, year: "2024", title: "Current Status", description: "Now serving 100+ clients across 15+ countries with a production capacity of 20,000+ pieces per month." }
];

export const machineSpecs: MachineSpec[] = [
  { id: 1, type: "Single Needle Lockstitch Machine", brand: "Juki", quantity: 85 },
  { id: 2, type: "Overlock Machine", brand: "Brother", quantity: 40 },
  { id: 3, type: "Flatlock Machine", brand: "Pegasus", quantity: 20 },
  { id: 4, type: "Button Hole Machine", brand: "Juki", quantity: 8 },
  { id: 5, type: "Button Attach Machine", brand: "Brother", quantity: 8 },
  { id: 6, type: "Computerized Embroidery Machine", brand: "Barudan", quantity: 12 },
  { id: 7, type: "Fabric Cutting Machine", brand: "Eastman", quantity: 6 },
  { id: 8, type: "Steam Iron", brand: "Singer", quantity: 30 }
];

export const testimonials: TestimonialEntry[] = [
  {
    id: 1,
    name: "Anita Singh",
    brand: "Elegance Boutique, Mumbai",
    quote: "Working with SRM GLOBAL HUB has been a game-changer for our business. The quality is exceptional, and their turnaround time is impressive.",
    rating: 5,
    image: "/uploads/luba-glazunova-hl8EFKDlbKw-unsplash.jpg.jpeg"
  },
  {
    id: 2,
    name: "Rajiv Mehta",
    brand: "Fashion Hub Retail, Delhi",
    quote: "We've been partnering with SRM for 5 years now. Their private label service is top-notch, and the team is very professional.",
    rating: 5,
    image: "/uploads/francois-le-nguyen-pouTfHUG430-unsplash.jpg.jpeg"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    brand: "Global Trends Inc., USA",
    quote: "Excellent communication, great quality, and on-time delivery. SRM is our trusted manufacturing partner for all our ladies' wear collection.",
    rating: 5,
    image: "/uploads/equalstock-kuyumG6hKWk-unsplash.jpg.jpeg"
  },
  {
    id: 4,
    name: "Priya Desai",
    brand: "Trendy Styles Boutique, Bangalore",
    quote: "The custom design service is fantastic. They understood our vision perfectly and delivered beyond our expectations.",
    rating: 5,
    image: "/uploads/collab-media-upKXvfgKABY-unsplash - Copy.jpg.jpeg"
  },
  {
    id: 5,
    name: "Vikram Shah",
    brand: "Ethnic Wear Co., Ahmedabad",
    quote: "Reliable, professional, and quality-focused. SRM has been our go-to manufacturer for ethnic wear for 3 years.",
    rating: 4,
    image: "/uploads/remy-gieling-KP6XQIEjjPA-unsplash.jpg.jpeg"
  },
  {
    id: 6,
    name: "Lisa Anderson",
    brand: "Chic Fashion House, UK",
    quote: "Great attention to detail and excellent quality control. We're very happy with our partnership with SRM GLOBAL HUB.",
    rating: 5,
    image: "/uploads/marco-j-haenssgen-sE0udIZcgGM-unsplash.jpg.jpeg"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Start Your Own Clothing Brand",
    excerpt: "A comprehensive guide for aspiring entrepreneurs looking to launch their own clothing brand.",
    date: "July 20, 2024",
    author: "Meera Patel",
    image: "/uploads/luba-glazunova-hl8EFKDlbKw-unsplash.jpg.jpeg",
    category: "Business",
    content: `
      <h2>Introduction</h2>
      <p>Starting your own clothing brand is an exciting journey that combines creativity, business acumen, and dedication. In this guide, we'll walk you through the essential steps to launch your brand successfully.</p>
      
      <h2>1. Define Your Niche</h2>
      <p>Before you start, it's crucial to define your niche. Are you focusing on ethnic wear, western wear, casual, or formal? Who is your target audience? Answering these questions will help you position your brand effectively.</p>
      
      <h2>2. Create Your Designs</h2>
      <p>Once you have your niche, start creating your designs. You can work with a designer or create your own if you have the skills. Focus on creating a cohesive collection that tells a story.</p>
      
      <h2>3. Find a Reliable Manufacturer</h2>
      <p>This is one of the most critical steps. Look for a manufacturer with experience in your niche, good quality control, and reasonable pricing. SRM GLOBAL HUB offers comprehensive manufacturing solutions for ladies' wear brands of all sizes.</p>
      
      <h2>4. Plan Your Production</h2>
      <p>Work with your manufacturer to finalize patterns, samples, and production timelines. Start with a small production run to test the market before scaling up.</p>
      
      <h2>5. Launch and Market Your Brand</h2>
      <p>Once your products are ready, it's time to launch! Build a website, set up social media profiles, and start marketing your brand to your target audience.</p>
      
      <h2>Conclusion</h2>
      <p>Starting a clothing brand requires hard work and dedication, but with the right partner like SRM GLOBAL HUB, you can turn your vision into reality. Contact us today to discuss how we can help you launch your brand!</p>
    `
  },
  {
    id: 2,
    title: "Private Label vs White Label: Which Is Right for You?",
    excerpt: "Understanding the difference between private label and white label manufacturing for your clothing business.",
    date: "July 15, 2024",
    author: "Rajesh Kumar",
    image: "/uploads/francois-le-nguyen-pouTfHUG430-unsplash.jpg.jpeg",
    category: "Manufacturing",
    content: `
      <h2>Introduction</h2>
      <p>When it comes to launching your clothing line, you have several manufacturing options. Two popular choices are private label and white label. In this article, we'll explore the differences and help you decide which is right for your business.</p>
      
      <h2>What is Private Label?</h2>
      <p>Private label manufacturing involves working with a manufacturer to create products exclusively for your brand. You have control over design, materials, and branding, and the products are sold under your brand name only.</p>
      
      <h2>What is White Label?</h2>
      <p>White label products are pre-made products that the manufacturer sells to multiple brands, who then add their own branding. These products are generic and not exclusive to any single brand.</p>
      
      <h2>Key Differences</h2>
      <ul>
        <li><strong>Exclusivity:</strong> Private label is exclusive to your brand; white label is not.</li>
        <li><strong>Control:</strong> Private label gives you full control over design and materials; white label offers limited customization.</li>
        <li><strong>Cost:</strong> Private label typically has higher minimum order quantities (MOQs) but offers better margins.</li>
        <li><strong>Time:</strong> Private label takes longer to produce; white label is faster to market.</li>
      </ul>
      
      <h2>Which Is Right for You?</h2>
      <p>If you want to build a unique brand identity and have control over your products, private label is the way to go. If you're looking for a quick, low-cost way to enter the market, white label might be a better fit.</p>
      
      <h2>Conclusion</h2>
      <p>At SRM GLOBAL HUB, we offer both private label and custom manufacturing solutions. Contact us to discuss which option is best for your brand!</p>
    `
  },
  {
    id: 3,
    title: "A Startup's Guide to Fabric Selection",
    excerpt: "Everything you need to know about choosing the right fabrics for your clothing line.",
    date: "July 10, 2024",
    author: "Priya Sharma",
    image: "/uploads/equalstock-kuyumG6hKWk-unsplash.jpg.jpeg",
    category: "Design",
    content: `
      <h2>Introduction</h2>
      <p>Fabric selection is one of the most important decisions you'll make for your clothing line. The right fabric can make or break your product. In this guide, we'll cover the basics of fabric selection.</p>
      
      <h2>Consider Your Product</h2>
      <p>The type of product you're making will determine your fabric choice. For example:
        <ul>
          <li><strong>Kurtis:</strong> Cotton, georgette, rayon</li>
          <li><strong>Suits:</strong> Cotton, silk blend, georgette</li>
          <li><strong>Gowns:</strong> Net, satin, silk</li>
          <li><strong>Western Wear:</strong> Cotton, polyester blend, rayon</li>
        </ul>
      </p>
      
      <h2>Fabric Properties</h2>
      <p>When choosing fabric, consider these properties:
        <ul>
          <li><strong>Comfort:</strong> How does the fabric feel against the skin?</li>
          <li><strong>Durability:</strong> Will it hold up to washing and wear?</li>
          <li><strong>Drape:</strong> How does the fabric fall?</li>
          <li><strong>Breathability:</strong> Is it suitable for the climate?</li>
          <li><strong>Cost:</strong> Does it fit your budget?</li>
        </ul>
      </p>
      
      <h2>Work with Your Manufacturer</h2>
      <p>Your manufacturer can be a valuable resource when it comes to fabric selection. At SRM GLOBAL HUB, we work with a wide range of fabric suppliers and can help you choose the right fabric for your products.</p>
      
      <h2>Conclusion</h2>
      <p>Fabric selection is a critical part of creating a successful clothing line. Take the time to choose wisely, and work with your manufacturer to ensure you're making the best choice for your brand.</p>
    `
  },
  {
    id: 4,
    title: "Understanding MOQ in Garment Manufacturing",
    excerpt: "What is Minimum Order Quantity (MOQ) and how does it affect your clothing business?",
    date: "July 5, 2024",
    author: "Anita Verma",
    image: "/uploads/collab-media-upKXvfgKABY-unsplash - Copy.jpg.jpeg",
    category: "Manufacturing",
    content: `
      <h2>Introduction</h2>
      <p>If you're new to garment manufacturing, you've probably heard the term MOQ. MOQ stands for Minimum Order Quantity, and it's an important factor to consider when working with a manufacturer.</p>
      
      <h2>What is MOQ?</h2>
      <p>MOQ is the minimum number of pieces you need to order for a particular style or design. Manufacturers set MOQs to ensure they can cover their costs and make a profit on the order.</p>
      
      <h2>Why Do Manufacturers Have MOQs?</h2>
      <p>There are several reasons manufacturers have MOQs:
        <ul>
          <li><strong>Setup Costs:</strong> Setting up machines and patterns for a new style takes time and money.</li>
          <li><strong>Fabric Minimums:</strong> Fabric suppliers often have their own MOQs.</li>
          <li><strong>Efficiency:</strong> It's more efficient to produce larger quantities.</li>
        </ul>
      </p>
      
      <h2>How to Negotiate MOQ</h2>
      <p>While MOQs are usually non-negotiable, there are a few things you can do:
        <ul>
          <li>Order multiple colors in the same style to reach the MOQ.</li>
          <li>Start with a small sample order to test the market.</li>
          <li>Build a long-term relationship with your manufacturer.</li>
        </ul>
      </p>
      
      <h2>Conclusion</h2>
      <p>MOQ is an important part of garment manufacturing. At SRM GLOBAL HUB, we offer competitive MOQs for our clients. Contact us to discuss your needs and find a solution that works for your business!</p>
    `
  }
];

export const galleryItems: GalleryItem[] = [
  { id: 1, title: "Factory Floor", image: "/uploads/luba-glazunova-hl8EFKDlbKw-unsplash.jpg.jpeg", category: "Factory" },
  { id: 2, title: "Stitching Section", image: "/uploads/francois-le-nguyen-pouTfHUG430-unsplash.jpg.jpeg", category: "Factory" },
  { id: 3, title: "Quality Control Lab", image: "/uploads/equalstock-kuyumG6hKWk-unsplash.jpg.jpeg", category: "Factory" },
  { id: 4, title: "Computerized Embroidery Machine", image: "/uploads/collab-media-upKXvfgKABY-unsplash - Copy.jpg.jpeg", category: "Machinery" },
  { id: 5, title: "Sewing Machines", image: "/uploads/remy-gieling-KP6XQIEjjPA-unsplash.jpg.jpeg", category: "Machinery" },
  { id: 6, title: "Fabric Cutting Machine", image: "/uploads/marco-j-haenssgen-sE0udIZcgGM-unsplash.jpg.jpeg", category: "Machinery" },
  { id: 7, title: "Production Team", image: "/uploads/arawak-chen-HIrP05jnXNs-unsplash.jpg.jpeg", category: "Team" },
  { id: 8, title: "Design Team", image: "/uploads/AdobeStock_91342287.webp", category: "Team" },
  { id: 9, title: "Quality Control Team", image: "/uploads/luba-glazunova-hl8EFKDlbKw-unsplash.jpg.jpeg", category: "Team" },
  { id: 10, title: "Kurti Collection", image: "/uploads/francois-le-nguyen-pouTfHUG430-unsplash.jpg.jpeg", category: "Products" },
  { id: 11, title: "Suit Collection", image: "/uploads/equalstock-kuyumG6hKWk-unsplash.jpg.jpeg", category: "Products" },
  { id: 12, title: "Gown Collection", image: "/uploads/collab-media-upKXvfgKABY-unsplash - Copy.jpg.jpeg", category: "Products" },
  { id: 13, title: "Trade Show 2024", image: "/uploads/remy-gieling-KP6XQIEjjPA-unsplash.jpg.jpeg", category: "Events" },
  { id: 14, title: "Client Meeting", image: "/uploads/marco-j-haenssgen-sE0udIZcgGM-unsplash.jpg.jpeg", category: "Events" },
  { id: 15, title: "Team Celebration", image: "/uploads/arawak-chen-HIrP05jnXNs-unsplash.jpg.jpeg", category: "Events" }
];

export const faqItems: FAQItem[] = [
  { id: 1, question: "What is your Minimum Order Quantity (MOQ)?", answer: "Our MOQ varies by product category. For kurtis and co-ord sets, it's 40-50 pieces per style. For suits and gowns, it's 20-30 pieces per style. We can be flexible for new clients, so please contact us to discuss your specific needs." },
  { id: 2, question: "How much do you charge for samples?", answer: "Sample prices are higher than bulk prices to cover our setup costs. The exact price depends on the style and complexity. Once you place a bulk order, we can adjust the sample cost against your bulk order." },
  { id: 3, question: "How long does it take to make samples?", answer: "Sample development typically takes 7-10 business days, depending on the complexity of the design. Custom designs with intricate embroidery may take longer." },
  { id: 4, question: "What are your payment terms?", answer: "We typically require 30% advance payment to start production, and the remaining 70% before dispatch. For new clients, we may require full payment in advance for the first order." },
  { id: 5, question: "How long is your production turnaround time?", answer: "Production time depends on the order quantity and complexity. For standard orders, it's typically 2-4 weeks. Larger orders may take 4-6 weeks. We'll provide you with an exact timeline when you place your order." },
  { id: 6, question: "Do you offer private labeling?", answer: "Yes! We offer comprehensive private label services, including custom labeling, tagging, and packaging. We can also help you with brand development if needed." },
  { id: 7, question: "Can you source fabrics for us?", answer: "Absolutely! We work with a wide range of fabric suppliers and can source the perfect fabric for your needs. We can also work with fabrics you provide." },
  { id: 8, question: "What is your sample-to-bulk process?", answer: "Our process is: 1) You share your design or reference. 2) We develop a sample. 3) You approve the sample. 4) We start bulk production. 5) Quality inspection and dispatch." },
  { id: 9, question: "Do you export internationally?", answer: "Yes! We currently export to over 15 countries, including the USA, UK, UAE, Australia, and more. We can handle all export documentation and shipping logistics." },
  { id: 10, question: "What quality guarantees do you offer?", answer: "We have a rigorous quality control process with 3 stages of inspection: during production, after finishing, and before packing. If you receive any defective pieces, we'll replace them or offer a refund." },
  { id: 11, question: "Can I track my order?", answer: "Yes! Once your order is in production, we'll provide you with regular updates. We also have a client portal where you can track your order status in real-time." },
  { id: 12, question: "What is your cancellation policy?", answer: "Orders can be canceled before production starts with a 10% cancellation fee. Once production has started, cancellation is not possible, but we can work with you to make changes to your order if needed." }
];

export const careerPositions: CareerPosition[] = [
  {
    id: 1,
    title: "Pattern Master",
    department: "Production",
    description: "We're looking for an experienced pattern master to create and maintain patterns for our ladies' wear collection.",
    requirements: ["5+ years of experience in pattern making for ladies' wear", "Proficiency in CAD pattern making software", "Knowledge of different fabrics and their properties", "Attention to detail and precision"]
  },
  {
    id: 2,
    title: "Quality Inspector",
    department: "Quality Control",
    description: "Join our quality control team to ensure every garment meets our high standards before dispatch.",
    requirements: ["3+ years of experience in garment quality inspection", "Knowledge of quality standards and inspection processes", "Good eye for detail", "Ability to work in a fast-paced environment"]
  },
  {
    id: 3,
    title: "Merchandiser",
    department: "Sales & Marketing",
    description: "We're looking for a merchandiser to manage client relationships and coordinate between clients and our production team.",
    requirements: ["2+ years of experience in garment merchandising", "Excellent communication and negotiation skills", "Knowledge of garment manufacturing processes", "Ability to multitask and meet deadlines"]
  }
];

export const manufacturingSteps = [
  { id: 1, title: "Design & Consultation", icon: "✏️", description: "We start by understanding your requirements and creating designs or finalizing your designs." },
  { id: 2, title: "Fabric Sourcing", icon: "🧵", description: "We source the highest quality fabrics from trusted suppliers that meet your specifications." },
  { id: 3, title: "Pattern Making & Sampling", icon: "📐", description: "Our expert pattern makers create patterns and develop samples for your approval." },
  { id: 4, title: "Fabric Cutting", icon: "✂️", description: "Once the sample is approved, we cut the fabric with precision using modern cutting machines." },
  { id: 5, title: "Stitching & Production", icon: "🧵", description: "Our skilled workers stitch the garments with attention to detail and quality." },
  { id: 6, title: "Quality Checking", icon: "✅", description: "Every garment goes through rigorous quality checks to ensure it meets our standards." },
  { id: 7, title: "Finishing & Packing", icon: "📦", description: "Garments are finished, ironed, and packed carefully to ensure they reach you in perfect condition." },
  { id: 8, title: "Dispatch & Delivery", icon: "🚢", description: "Your order is dispatched and delivered to your doorstep, anywhere in the world." }
];

export const mockInquiries: Inquiry[] = [
  { id: "INQ-001", type: "quote", submittedAt: "2024-07-19 10:30", status: "New", name: "Anita Singh", email: "anita@eleganceboutique.com", phone: "+91 98765 43210", details: "Requesting quote for 100 kurtis in 3 colors." },
  { id: "INQ-002", type: "design", submittedAt: "2024-07-18 14:45", status: "Contacted", name: "Rajiv Mehta", email: "rajiv@fashionhub.com", phone: "+91 98765 43211", details: "Want to upload custom design for 50 suits." },
  { id: "INQ-003", type: "meeting", submittedAt: "2024-07-17 09:20", status: "Quotation Sent", name: "Sarah Johnson", email: "sarah@globaltrends.com", phone: "+1 555 123 4567", details: "Requesting video call to discuss private label." }
];
