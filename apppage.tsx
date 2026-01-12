import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Menu, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian">
      
      {/* 1. TRANSPARENT NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-gradient-to-b from-obsidian/80 to-transparent backdrop-blur-[2px]">
        <button className="text-ivory hover:text-gold transition-colors">
          <Menu className="w-6 h-6" />
        </button>

        <Link href="/" className="font-serif text-2xl tracking-widest font-bold text-ivory">
          V E L O U R
        </Link>

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

      {/* 2. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.jpg" 
            alt="Luxury Streetwear Models" 
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 vignette" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-4 mt-20">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory mb-6 tracking-tight leading-tight drop-shadow-2xl">
            DESIGNER <span className="italic font-light">STREET</span> WEAR.
          </h1>
          <p className="font-sans text-gold tracking-[0.2em] uppercase text-sm md:text-base mb-12 font-medium drop-shadow-lg">
            Built Different.
          </p>
          
          {/* UPDATED SHOP BUTTON */}
          <Link href="/shop">
            <button className="group relative px-12 py-5 border border-ivory/30 bg-black/20 backdrop-blur-sm text-ivory font-sans text-sm tracking-widest uppercase hover:bg-gold hover:border-gold hover:text-obsidian transition-all duration-500 ease-out">
              <span className="relative z-10 font-bold">Shop Now</span>
            </button>
          </Link>
        </div>
      </section>

      {/* 3. CATEGORY GRID (Shoes, Bags, Accessories) */}
      <section className="py-24 px-4 bg-obsidian">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
            <h2 className="font-serif text-3xl text-ivory">Ladies Collection</h2>
            <Link href="/shop" className="text-sm text-gold hover:text-white transition-colors flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            
            {/* CARD 1: SHOES */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-charcoal cursor-pointer">
              <Image 
                src="/shoes.jpg" 
                alt="Luxury Sneakers"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-gold text-xs tracking-widest uppercase mb-2">Footwear</p>
                <h3 className="font-serif text-3xl text-ivory group-hover:translate-x-2 transition-transform">Shoes</h3>
              </div>
            </div>

            {/* CARD 2: BAGS */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-charcoal cursor-pointer">
              <Image 
                src="/bag.jpg" 
                alt="Designer Handbag"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-gold text-xs tracking-widest uppercase mb-2">Leather Goods</p>
                <h3 className="font-serif text-3xl text-ivory group-hover:translate-x-2 transition-transform">Bags</h3>
              </div>
            </div>

            {/* CARD 3: ACCESSORIES (Gloves) */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-charcoal cursor-pointer">
              <Image 
                src="/accessories.jpg" 
                alt="Luxury Gloves"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-gold text-xs tracking-widest uppercase mb-2">Essentials</p>
                <h3 className="font-serif text-3xl text-ivory group-hover:translate-x-2 transition-transform">Accessories</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}