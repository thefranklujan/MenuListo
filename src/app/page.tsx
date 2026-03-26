"use client";

import { useState } from "react";
import {
  QrCode,
  Smartphone,
  MessageCircle,
  Clock,
  DollarSign,
  Star,
  ArrowRight,
  Check,
  Phone,
  ChevronDown,
  ChevronUp,
  Zap,
  TrendingUp,
  Users,
  Menu,
  X,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <DemoPreviewSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTMwVjBoLTEydjRoMTJ6TTI0IDI0di00aDEydjRIMjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-5 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
            <QrCode className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">MenuListo</span>
        </div>
        <a href="tel:+15125550142" className="flex items-center gap-1.5 text-sm text-stone-300 hover:text-white transition-colors">
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Llámanos</span>
        </a>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-5 pt-12 pb-20 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 bg-brand/20 text-brand-light text-xs font-medium px-3 py-1 rounded-full mb-6">
          <Zap className="w-3 h-3" />
          Activo en 24 horas
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
          Tu menú digital,{" "}
          <span className="text-brand">listo.</span>
        </h1>
        <p className="mt-5 text-stone-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Dale a tus clientes un menú profesional en su teléfono. Con código QR, pedidos por WhatsApp, y todo lo que necesitas para vender más.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#precios"
            className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-brand/30"
          >
            Ver Precios
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/demo"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-3.5 rounded-xl transition-colors text-sm border border-white/10"
          >
            <Smartphone className="w-4 h-4" />
            Ver Demo
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center justify-center gap-6 text-xs text-stone-400">
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-1">
              {["bg-red-400", "bg-blue-400", "bg-green-400", "bg-amber-400"].map((c, i) => (
                <div key={i} className={`w-5 h-5 rounded-full ${c} border-2 border-stone-900`} />
              ))}
            </div>
            <span>Restaurantes activos</span>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-3 h-3 text-amber-400 fill-amber-400" />
            ))}
            <span className="ml-1">5.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Menús de papel no funcionan",
      desc: "Se ensucian, se pierden, y no puedes cambiar los precios fácil.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Clientes quieren ver tu menú antes de llegar",
      desc: "Si no estás en línea, no existes para el 70% de tus clientes potenciales.",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Pierdes ventas de pedidos para llevar",
      desc: "Tus clientes quieren ordenar por teléfono pero no tienen cómo ver tus opciones.",
    },
  ];

  return (
    <section className="py-16 px-5 max-w-4xl mx-auto">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-center text-stone-800">
        Tu menú de papel te está costando dinero
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {problems.map((p, i) => (
          <div key={i} className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
            <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              {p.icon}
            </div>
            <h3 className="mt-4 font-semibold text-stone-800 text-sm">{p.title}</h3>
            <p className="mt-2 text-xs text-stone-500 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Nos das tu menú",
      desc: "Nos pasas tus platillos, precios, y fotos. Nosotros hacemos todo.",
    },
    {
      num: "02",
      title: "Creamos tu menú digital",
      desc: "En menos de 24 horas, tu menú está listo con código QR.",
    },
    {
      num: "03",
      title: "Tus clientes escanean y ordenan",
      desc: "Pones el QR en las mesas. Los clientes ven tu menú y te escriben por WhatsApp.",
    },
  ];

  return (
    <section className="py-16 px-5 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-center">
          Así de fácil funciona
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand text-white font-bold text-sm">
                {s.num}
              </div>
              <h3 className="mt-4 font-semibold text-sm">{s.title}</h3>
              <p className="mt-2 text-xs text-stone-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoPreviewSection() {
  return (
    <section className="py-16 px-5 bg-brand-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-800">
          Mira cómo se ve
        </h2>
        <p className="mt-3 text-sm text-stone-500">
          Así es como tus clientes verán tu menú en su teléfono.
        </p>
        <div className="mt-8 flex justify-center">
          {/* Phone mockup */}
          <div className="relative w-[280px]">
            <div className="bg-stone-900 rounded-[2.5rem] p-3 shadow-2xl shadow-stone-900/30">
              <div className="bg-white rounded-[2rem] overflow-hidden h-[500px]">
                <iframe
                  src="/demo"
                  className="w-full h-full border-0 pointer-events-none"
                  title="Demo del menú"
                />
              </div>
            </div>
          </div>
        </div>
        <a
          href="/demo"
          className="mt-6 inline-flex items-center gap-2 text-brand font-semibold text-sm hover:underline"
        >
          <Smartphone className="w-4 h-4" />
          Abrir demo en pantalla completa
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="precios" className="py-16 px-5 scroll-mt-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-center text-stone-800">
          Precios simples, sin sorpresas
        </h2>
        <p className="mt-3 text-center text-sm text-stone-500">
          Una inversión que se paga sola con unos cuantos pedidos extra al mes.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
          {/* Basic */}
          <div className="bg-white rounded-2xl p-6 border-2 border-stone-200 shadow-sm">
            <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">Menú Digital</div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold text-stone-800">$149</span>
              <span className="text-stone-400 text-sm">una vez</span>
            </div>
            <div className="mt-1 text-stone-500 text-sm">+ $49/mes</div>
            <div className="mt-5 h-px bg-stone-100" />
            <ul className="mt-5 space-y-3">
              {[
                "Menú digital profesional",
                "Código QR personalizado",
                "Actualización de precios ilimitada",
                "Compatible con todos los teléfonos",
                "Información de contacto y horarios",
                "Soporte en español",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-stone-600">
                  <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="mt-6 block text-center bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold py-3 rounded-xl transition-colors text-sm"
            >
              Empezar
            </a>
          </div>

          {/* Pro */}
          <div className="relative bg-stone-900 text-white rounded-2xl p-6 border-2 border-brand shadow-xl shadow-brand/10">
            <div className="absolute -top-3 right-6 bg-brand text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Más Popular
            </div>
            <div className="text-xs font-medium text-stone-400 uppercase tracking-wider">Menú + Pedidos</div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold">$149</span>
              <span className="text-stone-400 text-sm">una vez</span>
            </div>
            <div className="mt-1 text-stone-400 text-sm">+ $79/mes</div>
            <div className="mt-5 h-px bg-stone-700" />
            <ul className="mt-5 space-y-3">
              {[
                "Todo del plan Menú Digital",
                "Botón de ordenar por WhatsApp",
                "Notificaciones de nuevos pedidos",
                "Menú disponible en inglés y español",
                "Estadísticas de visitas",
                "Prioridad en soporte",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-stone-300">
                  <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="mt-6 block text-center bg-brand hover:bg-brand-dark text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-lg shadow-brand/30"
            >
              Empezar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "¿Necesito saber de tecnología?",
      a: "No. Nosotros hacemos todo. Solo nos das tu menú y tus precios, y te entregamos todo listo para usar.",
    },
    {
      q: "¿Cuánto tiempo tarda?",
      a: "Tu menú está listo en menos de 24 horas después de que nos des la información.",
    },
    {
      q: "¿Cómo funciona el código QR?",
      a: "Te damos un código QR que puedes imprimir y poner en tus mesas. Cuando un cliente lo escanea con su teléfono, ve tu menú automáticamente.",
    },
    {
      q: "¿Puedo cambiar mis precios después?",
      a: "Sí, puedes pedir cambios de precios, platillos, o fotos las veces que quieras. Está incluido en tu plan.",
    },
    {
      q: "¿Funciona con todos los teléfonos?",
      a: "Sí. Funciona con iPhone, Android, y cualquier teléfono que tenga cámara y navegador de internet.",
    },
    {
      q: "¿Puedo cancelar cuando quiera?",
      a: "Sí. Sin contratos, sin penalidades. Cancelas cuando quieras.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 px-5 bg-stone-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-center text-stone-800">
          Preguntas Frecuentes
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-stone-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-stone-800 hover:bg-stone-50 transition-colors"
              >
                {f.q}
                {open === i ? (
                  <ChevronUp className="w-4 h-4 text-stone-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                )}
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-xs text-stone-500 leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contacto" className="py-16 px-5 bg-gradient-to-br from-brand to-brand-dark text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">
          ¿Listo para tu menú digital?
        </h2>
        <p className="mt-4 text-sm text-white/80 max-w-md mx-auto">
          Llámanos o mándanos un mensaje. Te respondemos en minutos, no en días.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/15125550142?text=Hola!%20Me%20interesa%20un%20menú%20digital%20para%20mi%20restaurante"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-green-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Escríbenos por WhatsApp
          </a>
          <a
            href="tel:+15125550142"
            className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium px-7 py-3.5 rounded-xl transition-colors text-sm border border-white/20"
          >
            <Phone className="w-4 h-4" />
            Llamar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-5 bg-stone-900 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-md bg-brand flex items-center justify-center">
          <QrCode className="w-3 h-3 text-white" />
        </div>
        <span className="font-bold text-white text-sm">MenuListo</span>
      </div>
      <p className="text-[10px] text-stone-500">
        Un servicio de Crafted &amp; Company
      </p>
      <p className="text-[10px] text-stone-600 mt-1">
        &copy; {new Date().getFullYear()} MenuListo. Todos los derechos reservados.
      </p>
    </footer>
  );
}
