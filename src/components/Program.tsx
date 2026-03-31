// import React, { useState, useMemo, useEffect, useRef } from "react";
// import { Clock, Star, Music, ChevronRight, MapPin } from "lucide-react";

// interface Show {
//   time: string;
//   artist: string;
//   stage: string;
//   isMain?: boolean;
// }

// interface DayProgram {
//   date: string;
//   title: string;
//   mainArtist: string;
//   bannerImg: string;
//   barracao: Show[];
//   palcoPrincipal: Show[];
// }

// const Program: React.FC = () => {
//   const [activeDay, setActiveDay] = useState(0);
//   const [isMeteorVisible, setIsMeteorVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsMeteorVisible(entry.isIntersecting);
//       },
//       { threshold: 0.1 },
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const programs: DayProgram[] = useMemo(
//     () => [
//       {
//         date: "Sexta, 10 de ABRIL",
//         title: "Abertura Oficial",
//         mainArtist: "Toque Dez",
//         bannerImg: "/logo_rp26_hero.png",
//         barracao: [
//           { time: "15:00", artist: "Marcos Machado", stage: "Barracão" },
//           { time: "16:00", artist: "Cristiano Martins", stage: "Barracão" },
//           { time: "17:00", artist: "Ricardo Vaqueiro", stage: "Barracão" },
//           { time: "18:00", artist: "Gil Vasconcelos", stage: "Barracão" },
//         ],
//         palcoPrincipal: [
//           {
//             time: "19:30",
//             artist: "Adãozinho Felipe",
//             stage: "Palco Principal",
//           },
//           { time: "20:30", artist: "Nilton Guedes", stage: "Palco Principal" },
//           { time: "21:30", artist: "Lucas Lutti", stage: "Palco Principal" },
//           {
//             time: "22:30",
//             artist: "Desfile das Candidatas",
//             stage: "Palco Principal",
//             isMain: true,
//           },
//           {
//             time: "23:30",
//             artist: "Toque Dez",
//             stage: "Palco Principal",
//             isMain: true,
//           },
//           { time: "01:30", artist: "Patrick Levi", stage: "Palco Principal" },
//           { time: "03:00", artist: "Rick Mento", stage: "Palco Principal" },
//         ],
//       },
//       {
//         date: "Sábado, 11 de ABRIL",
//         title: "A Noite das Estrelas",
//         mainArtist: "Limão com Mel & Psirico",
//         bannerImg: "/logo_rp26_hero.png",
//         barracao: [
//           { time: "15:00", artist: "Forró do Sertão", stage: "Barracão" },
//           { time: "17:00", artist: "Zé do Fole", stage: "Barracão" },
//         ],
//         palcoPrincipal: [
//           { time: "21:00", artist: "Banda Local", stage: "Palco Principal" },
//           {
//             time: "23:00",
//             artist: "Limão com Mel",
//             stage: "Palco Principal",
//             isMain: true,
//           },
//           {
//             time: "01:30",
//             artist: "Psirico",
//             stage: "Palco Principal",
//             isMain: true,
//           },
//         ],
//       },
//       {
//         date: "Domingo, 12 de ABRIL",
//         title: "Grande Encerramento",
//         mainArtist: "Tayrone",
//         bannerImg: "/logo_rp26_hero.png",
//         barracao: [
//           { time: "14:00", artist: "Som do Paredão", stage: "Barracão" },
//         ],
//         palcoPrincipal: [
//           {
//             time: "18:00",
//             artist: "Coroação Rainha",
//             stage: "Palco Principal",
//             isMain: true,
//           },
//           {
//             time: "21:00",
//             artist: "Tayrone",
//             stage: "Palco Principal",
//             isMain: true,
//           },
//           {
//             time: "23:30",
//             artist: "Banda Despedida",
//             stage: "Palco Principal",
//           },
//         ],
//       },
//     ],
//     [],
//   );

//   const current = programs[activeDay];

//   const ScheduleCard: React.FC<{ show: Show }> = ({ show }) => (
//     <article
//       className={`group relative flex items-center gap-4 p-5 mb-4 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.01] bg-white shadow-md ${
//         show.isMain
//           ? "border-[#EC4899] ring-2 ring-[#EC4899]/10 shadow-[#EC4899]/5"
//           : "border-slate-100 hover:border-[#22D3EE]/30"
//       }`}
//       aria-label={`${show.time} - ${show.artist} no ${show.stage}`}
//     >
//       <div
//         className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-3 ${
//           show.isMain
//             ? "bg-[#EC4899] text-white"
//             : "bg-[#FACC15]/10 text-[#FACC15]"
//         }`}
//       >
//         <Clock size={28} strokeWidth={2.5} />
//       </div>

//       <div className="flex-grow">
//         <div className="flex items-center gap-2 mb-1">
//           <span
//             className={`font-black text-lg ${show.isMain ? "text-[#EC4899]" : "text-[#202BB0]"}`}
//           >
//             {show.time}
//           </span>
//           {show.isMain && (
//             <span className="bg-[#EC4899]/10 text-[#EC4899] text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">
//               Destaque
//             </span>
//           )}
//         </div>
//         <h4
//           className={`font-black text-xl leading-tight uppercase tracking-tight ${
//             show.isMain ? "text-[#202BB0]" : "text-slate-800"
//           }`}
//         >
//           {show.artist}
//         </h4>
//         <div className="flex items-center gap-1.5 mt-1 opacity-70">
//           <MapPin
//             size={12}
//             className={show.isMain ? "text-[#EC4899]" : "text-[#22D3EE]"}
//           />
//           <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
//             {show.stage}
//           </span>
//         </div>
//       </div>

//       {show.isMain && (
//         <div className="relative">
//           <Star
//             className="text-[#FACC15] fill-[#FACC15] animate-pulse"
//             size={24}
//           />
//           <div className="absolute inset-0 bg-[#FACC15] blur-md opacity-30 animate-pulse"></div>
//         </div>
//       )}
//     </article>
//   );

//   return (
//     <section
//       id="programacao"
//       ref={sectionRef}
//       className="relative min-h-screen bg-gradient-to-b from-[#202BB0] via-[#1a238a] to-[#202BB0] pt-24 pb-48 overflow-hidden"
//     >
//       {/* Meteor Falling Stars Container */}
//       <div className={`meteor-container ${isMeteorVisible ? "active" : ""}`}>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       {/* Dynamic Background Effects */}
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#EC4899]/30 to-transparent rounded-full blur-[140px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#22D3EE]/20 to-transparent rounded-full blur-[120px] -z-10 -translate-x-1/2"></div>

//       <div className="container mx-auto px-4 max-w-5xl relative z-10">
//         <header className="text-center mb-14">
//           <div className="inline-block px-4 py-1.5 bg-[#FACC15] text-[#202BB0] rounded-full text-xs font-black uppercase tracking-widest mb-4 shadow-lg">
//             Programação 2025
//           </div>
//           <h2 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter mb-8 leading-[0.85]">
//             O Palco vai{" "}
//             <span className="text-[#22D3EE] drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
//               Ferver!
//             </span>
//           </h2>

//           <nav
//             className="flex justify-center flex-wrap gap-3"
//             aria-label="Seleção de dias"
//           >
//             {programs.map((p, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setActiveDay(idx)}
//                 className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${
//                   activeDay === idx
//                     ? "bg-[#FACC15] text-[#202BB0] scale-110 shadow-xl shadow-[#FACC15]/20 ring-4 ring-[#FACC15]/20"
//                     : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
//                 }`}
//               >
//                 Dia 0{idx + 1}
//               </button>
//             ))}
//           </nav>
//         </header>

//         {/* Day Header Banner */}
//         <div className="relative rounded-[3rem] overflow-hidden mb-16 shadow-2xl border-[6px] border-white group">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#202BB0]/90 via-[#202BB0]/50 to-transparent z-10"></div>
//           <img
//             src={current.bannerImg}
//             alt={`Banner de ${current.date}`}
//             className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 z-20 p-10 flex flex-col justify-center text-white">
//             <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-3">
//               {current.date}
//             </h3>
//             <p className="text-xl md:text-2xl font-bold flex items-center gap-3">
//               <span className="text-[#22D3EE] uppercase tracking-widest text-sm">
//                 Artista Principal:
//               </span>
//               <span className="text-[#FACC15] font-black text-glow-yellow">
//                 {current.mainArtist}
//               </span>
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Barracão Column */}
//           <section>
//             <div className="flex items-center gap-4 mb-8">
//               <div className="bg-[#FACC15] p-3 rounded-2xl text-[#202BB0] shadow-lg">
//                 <Music size={24} strokeWidth={3} />
//               </div>
//               <h4 className="text-3xl font-black text-white uppercase tracking-normal italic">
//                 Barracão
//               </h4>
//               <div className="h-px flex-grow bg-white/10"></div>
//             </div>
//             <div className="space-y-4">
//               {current.barracao.map((show, idx) => (
//                 <ScheduleCard key={idx} show={show} />
//               ))}
//             </div>
//           </section>

//           {/* Palco Principal Column */}
//           <section>
//             <div className="flex items-center gap-4 mb-8">
//               <div className="bg-[#EC4899] p-3 rounded-2xl text-white shadow-lg">
//                 <Star size={24} strokeWidth={3} />
//               </div>
//               <h4 className="text-3xl font-black text-white uppercase tracking-normal italic">
//                 Palco Principal
//               </h4>
//               <div className="h-px flex-grow bg-white/10"></div>
//             </div>

//             <div className="space-y-4">
//               {current.palcoPrincipal.map((show, idx) => (
//                 <ScheduleCard key={idx} show={show} />
//               ))}
//             </div>
//           </section>
//         </div>

//         {/* Floating Call to Action */}
//         <div className="mt-20 relative z-30">
//           <div className="bg-[#EC4899] p-6 md:p-12 rounded-[3.5rem] shadow-[0_40px_80px_rgba(236,72,153,0.4)] flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto transform hover:translate-y-[-8px] transition-all duration-500 border-4 border-white/20">
//             <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
//               <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-[2rem] flex items-center justify-center shrink-0 shadow-2xl rotate-3">
//                 <Star size={52} className="text-[#EC4899] fill-[#EC4899]" />
//               </div>
//               <div className="text-center md:text-left text-white">
//                 <h4 className="text-2xl md:text-4xl font-black uppercase italic leading-none mb-3 tracking-tighter">
//                   {current.mainArtist}
//                 </h4>
//                 <p className="text-white/90 font-bold text-lg max-w-lg">
//                   O show mais esperado do interior baiano! Prepare sua energia
//                   para uma noite inesquecível.
//                 </p>
//               </div>
//             </div>
//             <button className="bg-white text-[#EC4899] p-5 rounded-3xl hover:bg-[#22D3EE] hover:text-white transition-all group shadow-xl">
//               <ChevronRight
//                 size={48}
//                 className="group-hover:translate-x-2 transition-transform"
//               />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Aesthetic Bottom Wave matching colors */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none ">
//         <svg
//           className="relative block w-full h-[120px] md:h-[180px] "
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,120 V80 C200,30 400,130 600,80 C800,30 1000,130 1200,80 V120 Z"
//             fill="#f9fafb"
//           ></path>
//         </svg>
//       </div>
//     </section>
//   );
// };

export default Program;

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Star, Music, MapPin } from "lucide-react";

const Program: React.FC = () => {
  const [isMeteorVisible, setIsMeteorVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsMeteorVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Lista Unificada de Artistas (Sem dias, horários ou separação de palco)
  const artistas = useMemo(
    () => [
      {
        name: "Tony Salles",
        isMain: true,
        img: "/images/TonySalles.webp",
      },
      {
        name: "Thiago Aquino",
        isMain: true,
        img: "/images/ThiagoAquino.webp",
      },
      {
        name: "Rubynho",
        isMain: true,
        img: "/images/Rubynho.webp",
      },
      {
        name: "Leozinho",
        isMain: true,
        img: "/images/Leozinho.webp",
      },
      {
        name: "Klessinha",
        isMain: true,
        img: "/images/Klessinha.webp",
      },
      {
        name: "Iguinho e Lulinha",
        isMain: true,
        img: "/images/iguinhoElulinha.webp",
      },
      {
        name: "Chicafé",
        isMain: true,
        img: "/images/Chicafe.webp",
      },
    ],
    [],
  );

  return (
    <section
      id="programacao"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-[#202BB0] via-[#1a238a] to-[#202BB0] pt-12 pb-48 overflow-hidden"
    >
      {/* Meteor Falling Stars - Mantido conforme original */}
      <div className={`meteor-container ${isMeteorVisible ? "active" : ""}`}>
        {[...Array(15)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* Dynamic Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#EC4899]/30 to-transparent rounded-full blur-[140px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#22D3EE]/20 to-transparent rounded-full blur-[120px] -z-10 -translate-x-1/2"></div>

      <div className="flex flex-col items-center relative z-10">
        {/* Banner Principal - Estendido para 1920px */}
        <div className="w-full max-w-[1280px] px-4 mb-16">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#202BB0]/30 via-[#202BB0]/10 to-transparent z-10"></div>
            <img
              src="/images/Cantores.webp"
              alt="Banner Oficial"
              loading="lazy"
              className="w-full h-100 md:h-125 object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#202BB0]/30 via-[#202BB0]/10 to-transparent z-10"></div>
            <div className="absolute inset-0 z-20 p-10 md:p-20 flex flex-col justify-center text-white">
              <div className="inline-block w-fit px-4 py-1.5 bg-[#FACC15] text-[#202BB0] rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-lg">
                Programação 2026
              </div>
              <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-3">
                O Palco vai <br />
                <span className="text-[#22D3EE] drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  Ferver!
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Grid de Cards - Centralizado em 1280px */}
        <div className="w-full max-w-[1280px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artistas.map((show, idx) => (
              <article
                key={idx}
                className={`group relative flex flex-col rounded-[2.5rem] border-[4px] transition-all duration-300 hover:scale-[1.03] bg-white shadow-xl overflow-hidden ${
                  show.isMain
                    ? "border-[#EC4899] shadow-[#EC4899]/10"
                    : "border-white hover:border-[#22D3EE]/30"
                }`}
              >
                {/* Imagem em Aspect Ratio 4/5 */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={`${show.img}?auto=format&fit=crop&q=80&w=600`}
                    alt={show.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {show.isMain && (
                    <div className="absolute top-4 right-4 z-20">
                      <Star
                        className="text-[#FACC15] fill-[#FACC15] animate-pulse shadow-glow"
                        size={32}
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between">
                    <h3
                      className={`font-black text-2xl uppercase tracking-tight ${show.isMain ? "text-[#202BB0]" : "text-slate-800"}`}
                    >
                      {show.name}
                    </h3>
                    {show.isMain ? (
                      <div className="bg-[#EC4899] p-2 rounded-xl text-white">
                        <Star size={20} fill="currentColor" />
                      </div>
                    ) : (
                      <div className="bg-slate-100 p-2 rounded-xl text-slate-400">
                        <Music size={20} />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 opacity-70">
                    <MapPin
                      size={14}
                      className={
                        show.isMain ? "text-[#EC4899]" : "text-[#22D3EE]"
                      }
                    />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                      Atração Confirmada
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Onda Decorativa mantida */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg
          className="relative block w-full h-[120px] md:h-[180px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 V80 C200,30 400,130 600,80 C800,30 1000,130 1200,80 V120 Z"
            fill="#f9fafb"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Program;

