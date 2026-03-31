import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Candidatas", href: "#galeria" },
    { label: "Nossa História", href: "#historia" },
    { label: "Atrações", href: "#programacao" },
    { label: "Rainha da Pinha", href: "#concurso" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  const registrationLink = "finalizado";

  // Reorganização solicitada:
  // Esquerda: Início, Nossa História, Candidatas
  const leftItems = [menuItems[3], menuItems[4]];
  // Direita: Atrações, Realeza
  const rightItems = [menuItems[1], menuItems[2]];

  const NavLink = ({ item }: { item: (typeof menuItems)[0] }) => (
    <a
      key={item.label}
      href={item.href}
      onClick={(e) => scrollToSection(e, item.href)}
      className={`font-black uppercase text-[10px] xl:text-xs tracking-[0.2em] transition-all relative group whitespace-nowrap ${
        isScrolled
          ? "text-blue-900 hover:text-cyan-500"
          : "text-white lg:text-white-700 hover:text-cyan-500"
      }`}
    >
      {item.label}
      <span className="absolute -bottom-1 left-0 w-0 h-1 bg-pink-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
    </a>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "glass-header py-2 md:py-3 shadow-xl border-b border-white/10"
          : "bg-transparent py-4 md:py-6 border-b border-transparent"
      }`}
      style={{
        backfaceVisibility: "hidden", // Evita flickers em animações webkit
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Desktop Header Layout */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          {/* Lado Esquerdo: Início, História, Candidatas */}
          <nav className="flex items-center justify-end gap-6 xl:gap-10">
            {leftItems.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </nav>

          {/* Centro: Logo POP-OUT */}
          <div className="relative w-48 xl:w-72 h-12 flex justify-center items-center">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="absolute top-[-30px] xl:top-[-45px] z-[60] group block transition-transform hover:scale-105 active:scale-95 mt-2"
            >
              <img
                src="/logo_rp26_hero.png"
                alt="64ª Festa Rainha da Pinha"
                className={`w-auto object-contain transition-all duration-500 drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)] ${
                  isScrolled ? "h-32 xl:h-48" : "h-38 xl:h-36"
                }`}
              />
            </a>
          </div>

          {/* Lado Direito: Atrações, Realeza + Botão */}
          <nav className="flex items-center justify-start gap-6 xl:gap-8">
            {rightItems.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
            {/* <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-blue-900 text-white px-6 py-3 rounded-full font-black xl:text-xs transition-all transform hover:scale-105 active:scale-95 text-[10px] uppercase tracking-widest shadow-lg border-2 border-white whitespace-nowrap"
            >
              Inscrição 2026
            </a> */}
          </nav>
        </div>

        {/* Mobile Header Layout */}
        <div className="lg:hidden flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center group relative z-10"
          >
            <img
              src="/logo_rp26_hero.png"
              alt="64ª Festa Rainha da Pinha"
              className="h-20 w-auto object-contain transition-all duration-300 drop-shadow-md -mb-4"
            />
          </a>

          <button
            className={`p-3 rounded-2xl transition-all duration-300 transform active:scale-90 shadow-xl relative z-10 ${
              isScrolled
                ? "bg-blue-900 text-white"
                : "bg-transparent text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-blue-950 absolute top-0 left-0 w-full h-screen p-8 flex flex-col gap-6 z-[60] animate-in fade-in slide-in-from-top duration-500">
          <div className="flex justify-between items-center mb-12">
            <span className="font-black text-white text-2xl tracking-tighter uppercase italic">
              Menu <span className="text-cyan-400">Festivo</span>
            </span>
            <button
              className="p-3 bg-white/10 text-white rounded-2xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-6 overflow-y-auto max-h-[60vh]">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-white font-black text-4xl uppercase tracking-normal border-b-2 border-white/5 pb-4 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-auto pb-10">
            {/* <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-yellow-400 text-blue-900 text-center py-6 rounded-3xl font-black text-xl uppercase tracking-widest shadow-2xl block"
            >
              Inscreva-se Agora
            </a>
            <p className="text-center text-white/30 font-bold uppercase tracking-widest mt-6 text-xs italic">
              64ª Festa Rainha da Pinha
            </p> */}
            <img
              src="/logo_rp26.png"
              alt="Logo Rainha da Pinha 2026"
              className="h-auto w-full max-w-40 mx-auto" //antigo max-w-[400]
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
