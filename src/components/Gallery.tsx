// import React from "react";
// import { Instagram, Star } from "lucide-react";

// const Gallery: React.FC = () => {
//   const candidates = [
//     {
//       id: 1,
//       name: "Beatryz",
//       age: 17,
//       photo: "/images/candidata-beatryz-rainha-da-pinha-2026.webp",
//     },
//     {
//       id: 2,
//       name: "Enilly",
//       age: 16,
//       photo: "/images/candidata-enilly-rainha-da-pinha-2026.webp",
//     },
//     {
//       id: 3,
//       name: "Gisely",
//       age: 20,
//       photo: "/images/candidata-gisely-rainha-da-pinha-2026.webp",
//     },
//     {
//       id: 4,
//       name: "Kedla",
//       age: 22,
//       photo: "/images/candidata-kedla-rainha-da-pinha-2026.webp",
//     },
//     {
//       id: 5,
//       name: "Letícia",
//       age: 17,
//       photo: "/images/candidata-leticia-rainha-da-pinha-2026.webp",
//     },
//     {
//       id: 6,
//       name: "Estéfane",
//       age: 25,
//       photo: "/images/candidata-estefane-rainha-da-pinha-2026.webp",
//     },
//   ];

//   return (
//     <section id="galeria" className="py-24 bg-white relative overflow-hidden">
//       {/* Background Star Pattern */}
//       <div className="absolute inset-0 bg-pattern-stars opacity-60 pointer-events-none"></div>

//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 text-pink-500 font-black uppercase tracking-[0.4em] text-xs mb-4">
//             <Star size={16} fill="currentColor" /> Favoritas do Público{" "}
//             <Star size={16} fill="currentColor" />
//           </div>
//           <h2 className="text-5xl md:text-8xl font-black text-blue-900 mb-6 uppercase tracking-tighter italic">
//             Nossas <span className="text-cyan-400">Estrelas</span>
//           </h2>
//           <div className="flex justify-center gap-3">
//             <div className="w-16 h-2 bg-yellow-400 rounded-full"></div>
//             <div className="w-8 h-2 bg-pink-500 rounded-full"></div>
//             <div className="w-4 h-2 bg-cyan-400 rounded-full"></div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
//           {candidates.map((c) => (
//             <div
//               key={c.id}
//               className="group relative overflow-hidden rounded-[4rem] aspect-4/5.5 bg-blue-950 shadow-2xl cursor-pointer"
//             >
//               <img
//                 src={c.photo}
//                 alt={`Candidata ${c.name} - Rainha da Pinha 2026`}
//                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
//               />

//               {/* Border visible on hover */}
//               <div className="absolute inset-6 border-2 border-white/20 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"></div>

//               {/* Overlay with info - pb-12 on mobile to detach button from bottom edge */}
//               <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10 pb-12 md:pb-8 z-10">
//                 <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 text-center">
//                   {/* Name - Reduced size */}
//                   <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase italic leading-tight tracking-tighter transition-colors">
//                     {c.name}
//                   </h3>

//                   {/* Info Row */}
//                   <div className="flex items-center justify-center gap-3 text-cyan-400 font-black mb-6 text-[10px] md:text-xs uppercase tracking-widest">
//                     <span>{c.age} Anos</span>
//                     {/* <span className="w-1 h-1 bg-white/30 rounded-full"></span>
//                     <span>{c.neighborhood}</span> */}
//                   </div>

//                   {/* Centralized Instagram Button at the bottom */}
//                   <div className="flex justify-center w-full">
//                     <button className="w-full max-w-[240px] flex items-center justify-center gap-2 bg-white/10 backdrop-blur-xl text-white border border-white/20 px-5 py-4 rounded-[1.5rem] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-blue-900 transition-all transform hover:-translate-y-1 shadow-xl">
//                       <Instagram size={18} /> Instagram
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

// import React, { useState, useEffect, useRef } from "react";
// import { Instagram, Star } from "lucide-react";

// const Gallery: React.FC = () => {
//   const [activeId, setActiveId] = useState<number | null>(null);

//   const candidates = [
//     {
//       id: 1,
//       name: "Beatryz",
//       age: 17,
//       photo: "/images/candidata-beatryz-rainha-da-pinha-2026.webp",
//     },
//     {
//       id: 2,
//       name: "Enilly",
//       age: 16,
//       photo: "/images/candidata-enilly-rainha-da-pinha-2026.webp",
//     },
//     {
//       id: 3,
//       name: "Gisely",
//       age: 20,
//       photo: "/images/candidata-gisely-rainha-da-pinha-2026.webp",
//     },
//     {
//       id: 4,
//       name: "Kedla",
//       age: 22,
//       photo: "/images/candidata-kedla-rainha-da-pinha-2026.webp",
//     },
//     {
//       id: 5,
//       name: "Letícia",
//       age: 17,
//       photo: "/images/candidata-leticia-rainha-da-pinha-2026.webp",
//     },
//     {
//       id: 6,
//       name: "Estéfane",
//       age: 25,
//       photo: "/images/candidata-estefane-rainha-da-pinha-2026.webp",
//     },
//   ];

//   return (
//     <section id="galeria" className="py-24 bg-white relative overflow-hidden">
//       <div className="absolute inset-0 bg-pattern-stars opacity-60 pointer-events-none"></div>
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 text-pink-500 font-black uppercase tracking-[0.4em] text-xs mb-4">
//             <Star size={16} fill="currentColor" /> Favoritas do Público{" "}
//             <Star size={16} fill="currentColor" />
//           </div>
//           <h2 className="text-5xl md:text-8xl font-black text-blue-900 mb-6 uppercase tracking-tighter italic">
//             Nossas <span className="text-cyan-400">Estrelas</span>
//           </h2>
//           <div className="flex justify-center gap-3">
//             <div className="w-16 h-2 bg-yellow-400 rounded-full"></div>
//             <div className="w-8 h-2 bg-pink-500 rounded-full"></div>
//             <div className="w-4 h-2 bg-cyan-400 rounded-full"></div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
//           {candidates.map((c) => (
//             <CandidateCard
//               key={c.id}
//               candidate={c}
//               activeId={activeId}
//               setActiveId={setActiveId}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const CandidateCard = ({ candidate, activeId, setActiveId }: any) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const isActive = activeId === candidate.id;

//   useEffect(() => {
//     if (window.innerWidth >= 1024) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Ativa se mais de 50% do card estiver na zona central
//         if (entry.isIntersecting) {
//           setActiveId(candidate.id);
//         }
//       },
//       {
//         // Ajustado para uma janela de detecção mais suave no meio da tela
//         rootMargin: "-25% 0% -25% 0%",
//         threshold: 0.5,
//       },
//     );

//     if (cardRef.current) observer.observe(cardRef.current);
//     return () => observer.disconnect();
//   }, [candidate.id, setActiveId]);

//   return (
//     <div
//       ref={cardRef}
//       className="group relative overflow-hidden rounded-[4rem] aspect-4/5.5 bg-blue-950 shadow-2xl cursor-pointer"
//     >
//       <img
//         src={candidate.photo}
//         alt={`Candidata ${candidate.name} - Rainha da Pinha 2026 - Presidente Dutra -Bahia`}
//         /* Aumentado duration e adicionado ease-in-out para suavizar escala */
//         className={`w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:opacity-100 opacity-80 ${
//           isActive
//             ? "lg:scale-100 scale-110 lg:opacity-80 opacity-100"
//             : "scale-100"
//         }`}
//       />

//       {/* Borda com transição suave */}
//       <div
//         className={`absolute inset-6 border-2 border-white/20 rounded-[3rem] transition-opacity duration-700 pointer-events-none z-20 opacity-0 group-hover:opacity-100 ${
//           isActive ? "lg:opacity-0 opacity-100" : ""
//         }`}
//       ></div>

//       {/* Overlay Info - Suavizado com duration-700 */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/10 to-transparent transition-all duration-700 ease-out flex flex-col justify-end p-8 md:p-10 pb-12 md:pb-8 z-10 opacity-80 group-hover:opacity-95 ${
//           isActive ? "lg:opacity-80 opacity-95" : "opacity-0"
//         }`}
//       >
//         {/* Texto subindo suavemente (translate-y-0) */}
//         <div
//           className={`transform transition-all duration-700 ease-out text-center translate-y-8 group-hover:translate-y-0 ${
//             isActive ? "lg:translate-y-8 translate-y-0" : ""
//           }`}
//         >
//           <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase italic leading-tight tracking-tighter">
//             {candidate.name}
//           </h3>

//           <div className="flex items-center justify-center gap-3 text-cyan-400 font-black mb-6 text-[10px] md:text-xs uppercase tracking-widest">
//             <span>{candidate.age} Anos</span>
//           </div>

//           <div className="flex justify-center w-full">
//             <button className="w-full max-w-60 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-xl text-white border border-white/20 px-5 py-4 rounded-[1.5rem] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-blue-900 transition-all transform hover:-translate-y-1 shadow-xl active:scale-95">
//               <Instagram size={18} /> Instagram
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

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
      <img
        src={candidate.photo}
        alt={candidate.name}
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
