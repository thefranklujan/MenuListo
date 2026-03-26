"use client";

import { useState, useRef, useEffect, forwardRef } from "react";
import { elCorralRestaurant } from "@/lib/el-corral-data";
import { type MenuCategory, type MenuItem } from "@/lib/demo-data";
import { Phone, MapPin, MessageCircle, ChevronUp, Flame, Star, X, ChevronRight, AtSign } from "lucide-react";

const BRAND = {
  red: "#D42426",
  redDark: "#B91C1C",
  green: "#1B7A2B",
  greenDark: "#166534",
  cream: "#FFF8E7",
  brown: "#5C3D2E",
  gold: "#FFD700",
};

export default function ElCorralMenu() {
  const r = elCorralRestaurant;
  const [activeCategory, setActiveCategory] = useState(r.categories[0].id);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedItem]);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    categoryRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND.cream }}>
      {/* Top green bar */}
      <div className="h-2" style={{ backgroundColor: BRAND.green }} />

      {/* Hero header with red background */}
      <div className="relative text-white" style={{ backgroundColor: BRAND.red }}>
        <div className="relative px-5 pt-5 pb-4">
          {/* Actual Logo */}
          <div className="flex justify-center mb-3">
            <img
              src="/el-corral-logo.png"
              alt="El Corral Mexican Grill & Bar"
              className="h-20 object-contain drop-shadow-lg"
            />
          </div>

          {/* Contact info row */}
          <div className="flex flex-col gap-1.5 text-xs text-white/90">
            <a href={`tel:${r.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-white/70" />
              {r.phone}
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-white/70 shrink-0" />
              <span>{r.address}</span>
            </div>
            <a href="https://www.instagram.com/ElCorralHTX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <AtSign className="w-3 h-3 text-white/70" />
              @ElCorralHTX
            </a>
          </div>

          {/* Action buttons */}
          <div className="mt-4 flex gap-2">
            <a
              href={`https://wa.me/${r.whatsapp}?text=Hola!%20Quisiera%20hacer%20un%20pedido`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
              style={{ backgroundColor: BRAND.green }}
            >
              <MessageCircle className="w-4 h-4" />
              Ordenar por WhatsApp
            </a>
            <a
              href={`tel:${r.phone}`}
              className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm border border-white/20"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative green accent divider */}
      <div className="w-full h-1.5" style={{ backgroundColor: BRAND.green }} />

      {/* Sticky Category Nav */}
      <nav className="sticky top-0 z-30 border-b shadow-sm" style={{ backgroundColor: "rgba(255,248,231,0.97)", borderColor: "#E5D5B5" }}>
        <div className="flex overflow-x-auto gap-1 px-3 py-2 scrollbar-none">
          {r.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium transition-all"
              style={
                activeCategory === cat.id
                  ? { backgroundColor: BRAND.red, color: "white", boxShadow: "0 4px 12px rgba(212,36,38,0.25)" }
                  : { backgroundColor: "#F5EDD8", color: BRAND.brown }
              }
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Menu Content */}
      <main className="px-4 pt-4 pb-24 max-w-lg mx-auto">
        {r.categories.map((cat) => (
          <CategorySection
            key={cat.id}
            category={cat}
            onItemClick={setSelectedItem}
            brand={BRAND}
            ref={(el) => { categoryRefs.current[cat.id] = el; }}
          />
        ))}
      </main>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full text-white shadow-lg flex items-center justify-center transition-colors"
          style={{ backgroundColor: BRAND.red }}
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Powered by footer */}
      <footer className="fixed bottom-0 inset-x-0 py-2 text-center z-20 border-t" style={{ backgroundColor: "rgba(255,248,231,0.92)", borderColor: "#E5D5B5" }}>
        <p className="text-[10px]" style={{ color: BRAND.brown }}>
          Menú digital por <span className="font-semibold" style={{ color: BRAND.red }}>MenuListo</span>
        </p>
      </footer>

      {/* Item Detail Modal */}
      {selectedItem && (
        <ItemDetailModal
          item={selectedItem}
          whatsapp={r.whatsapp}
          brand={BRAND}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

const CategorySection = forwardRef<HTMLDivElement, { category: MenuCategory; onItemClick: (item: MenuItem) => void; brand: typeof BRAND }>(
  function CategorySection({ category, onItemClick, brand }, ref) {
    return (
      <div ref={ref} className="mb-8 scroll-mt-14">
        {/* Category header styled like their menu */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">{category.icon}</span>
          <h2 className="text-lg font-extrabold italic" style={{ color: brand.green }}>{category.name}</h2>
          <div className="flex-1 h-px ml-2" style={{ backgroundColor: "#E5D5B5" }} />
        </div>
        <div className="space-y-3">
          {category.items.map((item) => (
            <MenuItemCard key={item.id} item={item} brand={brand} onClick={() => onItemClick(item)} />
          ))}
        </div>
      </div>
    );
  }
);

function MenuItemCard({ item, brand, onClick }: { item: MenuItem; brand: typeof BRAND; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left group rounded-xl shadow-sm border overflow-hidden transition-all hover:shadow-md"
      style={{ backgroundColor: "white", borderColor: "#E5D5B5" }}
    >
      <div className="flex">
        <div className="relative w-24 h-24 shrink-0">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex-1 min-w-0 p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-sm truncate" style={{ color: brand.brown }}>{item.name}</h3>
              {item.popular && (
                <span className="shrink-0 flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-medium rounded-full" style={{ backgroundColor: "#FEF3C7", color: "#D97706" }}>
                  <Star className="w-2.5 h-2.5 fill-current" />
                </span>
              )}
              {item.spicy && (
                <span className="shrink-0 flex items-center gap-0.5 px-1.5 py-0.5 bg-red-50 text-red-500 text-[10px] font-medium rounded-full">
                  <Flame className="w-2.5 h-2.5" />
                </span>
              )}
            </div>
            <p className="mt-0.5 text-[11px] leading-snug line-clamp-2" style={{ color: "#9C8B75" }}>{item.description}</p>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="font-bold text-sm" style={{ color: brand.green }}>${item.price.toFixed(2)}</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-red-500 transition-colors" />
          </div>
        </div>
      </div>
    </button>
  );
}

function ItemDetailModal({ item, whatsapp, brand, onClose }: { item: MenuItem; whatsapp?: string; brand: typeof BRAND; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden max-h-[90vh] flex flex-col" style={{ animation: "slideUp 0.3s ease-out" }}>
        {/* Image */}
        <div className="relative w-full h-64 shrink-0">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Close */}
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors">
            <X className="w-4 h-4" />
          </button>

          {/* Price */}
          <div className="absolute bottom-4 right-4 text-white font-bold text-lg px-4 py-2 rounded-xl shadow-lg" style={{ backgroundColor: brand.green }}>
            ${item.price.toFixed(2)}
          </div>

          {/* Badges */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {item.popular && (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
                <Star className="w-3 h-3 fill-current" />
                Popular
              </span>
            )}
            {item.spicy && (
              <span className="flex items-center gap-1 px-2.5 py-1 text-white text-xs font-medium rounded-full" style={{ backgroundColor: brand.red }}>
                <Flame className="w-3 h-3" />
                Picante
              </span>
            )}
          </div>

          {/* Mini logo watermark */}
          <div className="absolute top-4 left-4">
            <img src="/el-corral-logo.png" alt="" className="h-8 opacity-80 drop-shadow-lg" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto" style={{ backgroundColor: brand.cream }}>
          <h2 className="font-extrabold text-2xl" style={{ color: brand.brown }}>{item.name}</h2>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: "#7C6F60" }}>
            {item.details || item.description}
          </p>

          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp}?text=Hola!%20Quisiera%20ordenar%20${encodeURIComponent(item.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 w-full text-white font-semibold py-3.5 rounded-xl transition-colors text-sm shadow-md"
              style={{ backgroundColor: brand.green }}
            >
              <MessageCircle className="w-4 h-4" />
              Ordenar {item.name}
            </a>
          )}

          {/* Call to order */}
          <a
            href={`tel:${elCorralRestaurant.phone}`}
            className="mt-2 flex items-center justify-center gap-2 w-full font-semibold py-3 rounded-xl transition-colors text-sm border"
            style={{ color: brand.red, borderColor: brand.red }}
          >
            <Phone className="w-4 h-4" />
            Llamar para ordenar
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
