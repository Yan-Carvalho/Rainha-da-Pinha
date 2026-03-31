import React, { useState, useEffect, useRef } from "react";
import { Instagram, Star } from "lucide-react";

const Gallery: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const candidates = [
    {
      id: 1,
      name: "Beatryz",
      age: 17,
      photo: "/images/candidata-beatryz-rainha-da-pinha-2026.webp",
      instagram: "eu.bia_felix_",
    },
    {
      id: 2,
      name: "Enilly",
      age: 16,
      photo: "/images/candidata-enilly-rainha-da-pinha-2026.webp",
      instagram: "enyy_miranda",
    },
    {
      id: 3,
      name: "Gisely",
      age: 20,
      photo: "/images/candidata-gisely-rainha-da-pinha-2026.webp",
      instagram: "gisellly_dias",
    },
    {
      id: 4,
      name: "Kedla",
      age: 22,
      photo: "/images/candidata-kedla-rainha-da-pinha-2026.webp",
      instagram: "kedyllamiranda",
    },
    {
      id: 5,
      name: "Letícia",
      age: 17,
      photo: "/images/candidata-leticia-rainha-da-pinha-2026.webp",
      instagram: "leticia_machado13",
    },
    {
      id: 6,
      name: "Estéfane",
      age: 25,
      photo: "/images/candidata-estefane-rainha-da-pinha-2026.webp",
      instagram: "esteffane_20",
    },
  ];

  return (
    <section id="galeria" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-stars opacity-60 pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {candidates.map((c) => (
            <CandidateCard
              key={c.id}
              candidate={c}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CandidateCard = ({ candidate, activeId, setActiveId }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isActive = activeId === candidate.id;

  useEffect(() => {
    // IntersectionObserver roda apenas no mobile (< 1024px)
    if (window.innerWidth >= 1024) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveId(candidate.id);
      },
      { rootMargin: "-35% 0% -35% 0%", threshold: 0.5 },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [candidate.id, setActiveId]);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-[4rem] aspect-4/5.5 bg-blue-950 shadow-2xl cursor-pointer"
    >
      {/* Imagem: Efeito hover no Desktop / Efeito active no Mobile */}
      {/* <img
        src={candidate.photo}
        alt={candidate.name}
        className={`w-full h-full object-cover transition-transform duration-1000 opacity-80 
          lg:group-hover:scale-110 lg:group-hover:opacity-100 
          ${isActive ? "scale-110 opacity-100" : "scale-100 opacity-80"}`}
      /> */}
      <img
          src={candidate.photo}
          alt={candidate.name}
          loading="lazy" 
          decoding="async"
          className={`w-full h-full object-cover transition-transform duration-1000 opacity-80 
            lg:group-hover:scale-110 lg:group-hover:opacity-100 
            ${isActive ? "scale-110 opacity-100" : "scale-100 opacity-80"}`}
        />


      {/* Borda: Apenas Hover no Desktop / Active no Mobile */}
      <div
        className={`absolute inset-6 border-2 border-white/20 rounded-[3rem] transition-opacity duration-500 pointer-events-none z-20 opacity-0 
        lg:group-hover:opacity-100 
        ${isActive ? "opacity-100" : "opacity-0"}`}
      ></div>

      {/* Overlay: Padding inferior maior no mobile (pb-14) para não colar embaixo */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/10 to-transparent transition-opacity duration-500 flex flex-col justify-end p-8 pb-14 lg:pb-8 z-10 opacity-80 
        lg:group-hover:opacity-95 
        ${isActive ? "opacity-95" : "opacity-0 lg:opacity-80"}`}
      >
        {/* Animação de subida (Translate) */}
        <div
          className={`transform transition-transform duration-500 text-center translate-y-8 
          lg:group-hover:translate-y-0 
          ${isActive ? "translate-y-0" : "translate-y-8 lg:translate-y-6"}`}
        >
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase italic leading-tight tracking-tighter">
            {candidate.name}
          </h3>

          <div className="flex items-center justify-center gap-3 text-cyan-400 font-black mb-6 text-[10px] md:text-xs uppercase tracking-widest">
            <span>{candidate.age} Anos</span>
          </div>

          <div className="flex justify-center w-full">
            <a
              href={`https://instagram.com/${candidate.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[240px] flex items-center justify-center gap-2 bg-white/10 backdrop-blur-xl text-white border border-white/20 px-5 py-4 rounded-[1.5rem] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-blue-900 transition-all transform hover:-translate-y-1 shadow-xl no-underline"
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
