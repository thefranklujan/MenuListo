"use client";

import { useState, useRef, useEffect, forwardRef } from "react";
import { demoRestaurant, type MenuCategory, type MenuItem } from "@/lib/demo-data";
import { Phone, MapPin, Clock, MessageCircle, ChevronUp, Flame, Star, X, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function DemoMenuPage() {
  const r = demoRestaurant;
  const [activeCategory, setActiveCategory] = useState(r.categories[0].id);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
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
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTMwVjBoLTEydjRoMTJ6TTI0IDI0di00aDEydjRIMjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative px-5 pt-12 pb-8">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight">{r.name}</h1>
            <p className="mt-2 text-stone-300 text-sm italic">{r.tagline}</p>
          </div>

          <div className="mt-6 flex flex-col gap-2 text-xs text-stone-300">
            <a href={`tel:${r.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand" />
              {r.phone}
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand shrink-0" />
              <span>{r.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-brand" />
              <span>{r.hours}</span>
            </div>
          </div>

          {r.whatsapp && (
            <a
              href={`https://wa.me/${r.whatsapp}?text=Hola!%20Quisiera%20hacer%20un%20pedido`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 w-full bg-whatsapp hover:bg-green-500 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Ordenar por WhatsApp
            </a>
          )}
        </div>
      </div>

      {/* Sticky Category Nav */}
      <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="flex overflow-x-auto gap-1 px-3 py-2 scrollbar-none">
          {r.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-brand text-white shadow-md shadow-brand/20"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
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
            ref={(el) => { categoryRefs.current[cat.id] = el; }}
          />
        ))}
      </main>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-brand text-white shadow-lg shadow-brand/30 flex items-center justify-center hover:bg-brand-dark transition-colors"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Powered by */}
      <footer className="fixed bottom-0 inset-x-0 bg-white/90 backdrop-blur border-t border-stone-100 py-2 text-center z-20">
        <p className="text-[10px] text-stone-400">
          Menú digital por <span className="font-semibold text-brand">MenuListo</span>
        </p>
      </footer>

      {/* Item Detail Modal */}
      {selectedItem && (
        <ItemDetailModal
          item={selectedItem}
          whatsapp={r.whatsapp}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

const CategorySection = forwardRef<HTMLDivElement, { category: MenuCategory; onItemClick: (item: MenuItem) => void }>(
  function CategorySection({ category, onItemClick }, ref) {
    return (
      <div ref={ref} className="mb-8 scroll-mt-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">{category.icon}</span>
          <h2 className="text-lg font-bold text-stone-800">{category.name}</h2>
          <div className="flex-1 h-px bg-stone-200 ml-2" />
        </div>
        <div className="space-y-3">
          {category.items.map((item) => (
            <MenuItemCard key={item.id} item={item} onClick={() => onItemClick(item)} />
          ))}
        </div>
      </div>
    );
  }
);

function MenuItemCard({ item, onClick }: { item: MenuItem; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left group bg-white rounded-xl shadow-sm border border-stone-100 hover:shadow-md hover:border-brand/20 transition-all overflow-hidden"
    >
      <div className="flex">
        {/* Image thumbnail */}
        <div className="relative w-24 h-24 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-semibold text-stone-800 text-sm truncate">{item.name}</h3>
              {item.popular && (
                <span className="shrink-0 flex items-center gap-0.5 px-1.5 py-0.5 bg-amber-50 text-amber-600 text-[10px] font-medium rounded-full">
                  <Star className="w-2.5 h-2.5 fill-current" />
                </span>
              )}
              {item.spicy && (
                <span className="shrink-0 flex items-center gap-0.5 px-1.5 py-0.5 bg-red-50 text-red-500 text-[10px] font-medium rounded-full">
                  <Flame className="w-2.5 h-2.5" />
                </span>
              )}
            </div>
            <p className="mt-0.5 text-[11px] text-stone-400 leading-snug line-clamp-2">{item.description}</p>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-brand font-bold text-sm">${item.price.toFixed(2)}</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-brand transition-colors" />
          </div>
        </div>
      </div>
    </button>
  );
}

function ItemDetailModal({ item, whatsapp, onClose }: { item: MenuItem; whatsapp?: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden animate-slide-up max-h-[90vh] flex flex-col">
        {/* Image */}
        <div className="relative w-full h-64 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Price badge */}
          <div className="absolute bottom-4 right-4 bg-brand text-white font-bold text-lg px-4 py-2 rounded-xl shadow-lg">
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
              <span className="flex items-center gap-1 px-2.5 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                <Flame className="w-3 h-3" />
                Picante
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto">
          <h2 className="font-display text-2xl font-bold text-stone-800">{item.name}</h2>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            {item.details || item.description}
          </p>

          {/* WhatsApp order button */}
          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp}?text=Hola!%20Quisiera%20ordenar%20${encodeURIComponent(item.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 w-full bg-whatsapp hover:bg-green-500 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Ordenar {item.name}
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
