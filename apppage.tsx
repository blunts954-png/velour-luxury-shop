import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Menu, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian">
      
      {/* 1. TRANSPARENT NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-gradient-to-b from-obsidian/80 to-transparent backdrop-blur-[2px]">
        {/* Left: Mobile Menu */}
        <button className="text-ivory hover:text-gold transition-colors">
          <Menu className="w-6 h-6" />
        </button>

        {/* Center: Logo (Serif) */}
        <Link href="/" className="font-serif text-2xl tracking-widest font-bold text-ivory">
          V E L O U R
        </Link>

        {/* Right: Icons */}
        <div className="flex gap-6">
          <button className="text-ivory hover:text-gold transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-ivory hover:text-gold transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full" />
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION (Matches your image) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* REPLACE THIS SRC WITH YOUR IMAGE URL */}
          <Image 
            src="/hero-bg.jpg" 
            alt="Models wearing luxury streetwear" 
            fill
            className="object-cover opacity-80"
            priority
          />
          {/* Dark Overlay to make text pop */}
          <div className="absolute inset-0 bg-black/40 vignette" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl px-4 mt-20">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory mb-6 tracking-tight leading-tight">
            DESIGNER <span className="italic font-light">STREET</span> BAGS.
          </h1>
          <p className="font-sans text-gold tracking-[0.2em] uppercase text-sm md:text-base mb-12 font-medium">
            Built Different.
          </p>
          
          <button className="group relative px-10 py-4 border border-gold/50 text-gold font-sans text-sm tracking-widest uppercase hover:bg-gold hover:text-obsidian transition-all duration-500 ease-out">
            <span className="relative z-10">Shop Bags</span>
            <div className="absolute inset-0 h-full w-full bg-gold/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </button>
        </div>
      </section>

      {/* 3. CATEGORY GRID (Below the fold) */}
      <section className="py-24 px-4 bg-obsidian">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
            <h2 className="font-serif text-3xl text-ivory">Latest Collections</h2>
            <Link href="/shop" className="text-sm text-gold hover:text-white transition-colors flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {/* Card 1 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-charcoal">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              {/* Product Image Placeholder */}
              <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-white/10 font-serif text-4xl">
                IMG
              </div>
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-gold text-xs tracking-widest uppercase mb-2">New Season</p>
                <h3 className="font-serif text-2xl text-ivory">The Crossbody</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-charcoal">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
               {/* Product Image Placeholder */}
               <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-white/10 font-serif text-4xl">
                IMG
              </div>
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-gold text-xs tracking-widest uppercase mb-2">Limited</p>
                <h3 className="font-serif text-2xl text-ivory">Travel Duffels</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-charcoal">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
               {/* Product Image Placeholder */}
               <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-white/10 font-serif text-4xl">
                IMG
              </div>
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-gold text-xs tracking-widest uppercase mb-2">Essentials</p>
                <h3 className="font-serif text-2xl text-ivory">Accessories</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}