# BarralCo Beverages — Prepare. Pour. Perform.

**BarralCo** is a next-generation, immersive e-commerce platform for India's first Evolved PTD (Prepare-To-Drink) beverage brand. By blending cinematic storytelling, adaptive UI theming, and seamless commerce, Barral transforms an ordinary cold drink into a personalized, emotional, and interactive experience.

---

## 🚀 Live Demo

**[Visit BarralIndia.com](https://barralindia.com)** *(Or your Vercel/Netlify URL)*

---

## 🧠 The Core Idea

Unlike traditional RTD (Ready-To-Drink) giants that dominate the market with carbonated sugar water, Barral introduces a revolutionary **"Mixer + Collectible Cup"** model. 

The platform is built around 4 key pillars:
1. **Storytelling:** Every cup has a story, and every flavor fits a specific mood or time of day.
2. **Personalization:** The UI adapts to the user's environment (Day/Night) and emotional needs.
3. **Collectibility:** Limited edition cup designs drive repeat purchases and social sharing.
4. **Seamless Commerce:** From discovery to Cash-on-Delivery (COD), the entire purchase journey is frictionless.

---

## ✨ Key Features

### 🎬 Cinematic User Experience
- **Diagonal Splash Reveal:** A specially crafted diagonal `clip-path` animation reveals the brand image and split-screen logo.
- **Adaptive Day/Night Themes:** The site automatically (or manually) shifts between a bright, morning "Day" theme and a cozy, warm "Night" theme. It incorporates background videos and ambient glow effects for full immersion.
- **Framer Motion Animations:** Smooth 60fps transitions on every element, button hover, mood switch, and page navigation.

### 🧘 Mood-Based Product Discovery
- Products are sorted into **Morning, Afternoon, Evening, and Night** categories.
- Each category features a **"Body Routine Suggestion"** panel that educates users on what their body needs at that specific time.
- Every drink features a **Mood Tag** (e.g., Focused, Relaxing, Zesty) and a deeply personal storyline.

### 🛒 Full E-Commerce Suite
- **Authentication:** Secure user Signup/Login via Supabase Auth (Email/Password).
- **Persistent Cart & Wishlist:** State management with React Context API ensures a seamless shopping experience.
- **Cash on Delivery (COD):** Detailed checkout form with Address, City, State, and Pincode capture.
- **Order Management:** All orders (with customer PII and cart details) are stored in a cloud-based PostgreSQL database.

### 🍸 Barral Reserve (Age-Gated)
- A dedicated, luxurious "Old Money Lounge" for alcoholic mocktails.
- Protected by a 21+ age verification modal.

---

## 🛠️ Tech Stack

This project is built using a modern, production-ready, and scalable stack:

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 18 + Vite | Fast, modular, and highly optimized SPA |
| **Language** | TypeScript | Ensures type safety, better maintainability, and fewer runtime errors |
| **Styling** | Tailwind CSS | Utility-first CSS framework for rapid, responsive UI development |
| **Animations** | Framer Motion | Advanced physics-based animations and transitions |
| **State Management** | React Context API | Lightweight, global state for Auth, Cart, and Wishlist |
| **Routing** | React Router DOM | Client-side routing and protected routes |
| **Media Storage & CDN** | Cloudinary | Global CDN for storing, optimizing, and serving all images and videos with auto-compression |
| **Backend (BaaS)** | Supabase | Serverless backend platform |
| **Database** | Supabase PostgreSQL | Scalable, permanent relational database with Row-Level Security (RLS) |
| **Authentication** | Supabase Auth | Secure JWT-based email/password authentication |
| **Notifications** | React Hot Toast | Instant, modern user feedback |
| **Hosting** | Vercel | Global Edge Network, zero-configuration, auto-scaling |

---


## 📂 Project Structure

```text
src/
├── components/
│   ├── AlcoholicPage.tsx      # Age-gated alcoholic lounge
│   ├── AllBeverages.tsx       # Full beverage catalog with Cart/Wishlist actions
│   ├── AuthPage.tsx           # Login and Signup page
│   ├── CheckoutPage.tsx       # COD order processing form
│   ├── CupGallery.tsx         # Collectible cup display
│   ├── Footer.tsx             # Site footer
│   ├── Hero.tsx               # Video-background hero section
│   ├── MoodSection.tsx        # Mood-based drink selection with Add to Cart
│   ├── Navbar.tsx             # Floating navigation with Cart/Wishlist icons
│   ├── PreOrder.tsx           # Pre-order pack builder
│   ├── SplashScreen.tsx       # Diagonal reveal intro animation
│   └── AgeGate.tsx            # 21+ age verification modal
├── context/
│   ├── StoreContext.tsx       # Global state for Auth, Cart, Wishlist, Orders
├── lib/
│   ├── data.ts                # Product data, color themes, suggestions
│   └── supabase.ts            # Supabase client initialization
├── App.tsx                    # Root App with theme handling and routing
├── main.tsx                   # React entry point with BrowserRouter
└── index.css                  # Global styles, theme variables, and animations
``` 
---

## 🚀 Getting Started (Local Development)

* Clone the repository: 

```text 
bash
git clone https://github.com/your-username/barral-website.git
cd barral-website

```

* Install dependencies:

bash
npm install

* Set up Supabase:

Create a project on Supabase.

Run the SQL provided in the project (or in README) to create the orders and products tables.

Copy your Project URL and Anon Key.

* Configure Environment Variables:
Create a .env file in the root directory:

```text 
env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

* Run the development server:

bash
npm run dev

## Your site is now live at 
 

## 🤝 Contributing
Contributions are always welcome! If you have suggestions for new features, improvements, or find any bugs, please open an issue or submit a pull request.

## 📜 License
This project is proprietary and copyrighted by BarralCo Beverages. All brand assets, logos, and product images belong to BarralCo.