// // import React from "react";
// import React, { useState, useEffect } from "react";
// import { Calendar, MapPin, ChevronDown, Sparkles } from "lucide-react";

// const Hero: React.FC = () => {
//   const registrationLink =
//     "https://docs.google.com/forms/d/e/1FAIpQLScPAsdZAhFAy42UcJ-FNEAyTw4hSEZDvGleHieMMQRDWraZ_g/viewform?usp=publish-editor";

//   const [videoSrc, setVideoSrc] = useState("/vHero.mp4");

//   // Lógica para trocar o vídeo conforme o tamanho da tela
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setVideoSrc("/vHero-mobile.webm");
//       } else {
//         setVideoSrc("/vHero.mp4");
//       }
//     };

//     handleResize(); // Roda ao montar
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden"
//     >
//       <h1 className="hidden">
//         Rainha da Pinha 2026 - Presidente Dutra - Bahia
//       </h1>
//       {/* Background Video */}
//       <div className="absolute inset-0 -z-20">
//         <video
//           key={videoSrc}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         >
//           <source src={videoSrc} type="video/webm" />
//         </video>

//         {/* Overlay Escuro: Essencial para dar leitura aos textos brancos sobre o vídeo */}
//         <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/60 via-transparent to-[#202BB0]/80"></div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute top-20 left-10 animate-float opacity-30 hidden md:block">
//         <Sparkles size={80} className="text-yellow-400" />
//       </div>
//       <div
//         className="absolute bottom-40 right-10 animate-float opacity-30 hidden md:block"
//         style={{ animationDelay: "2s" }}
//       >
//         <Sparkles size={60} className="text-cyan-400" />
//       </div>

//       <div className="container mx-auto px-6 text-center z-10 flex flex-col items-center">
//         {/* Logo Mockup */}
//         <div className="mb-6"> {/*classname = animate-float*/}
//           <img
//             src="/logo_rp26.png"
//             alt="Logo Rainha da Pinha 2026"
//             className="h-auto w-full max-w-100 mx-auto" //antigo max-w-[400]
//           />
//         </div>

//         <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 mb-10 flex flex-col md:flex-row gap-6 items-center shadow-2xl">
//           <div className="flex items-center gap-2">
//             <Calendar className="text-yellow-400" size={20} />
//             <span className="font-bold text-lg text-white-700">
//               10 a 12 de Abril
//             </span>
//           </div>
//           <div className="hidden md:block w-px h-6 bg-white/30"></div>
//           <div className="flex items-center gap-2">
//             <MapPin className="text-cyan-400" size={20} />
//             <span className="font-bold text-lg text-white-700">
//               Presidente Dutra - BA
//             </span>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md md:max-w-none justify-center">
//           <a
//             href="#programacao"
//             className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-10 py-5 rounded-full font-black text-xl shadow-[0_10px_0_#b45309] transition-all transform hover:-translate-y-2 active:translate-y-1 uppercase tracking-tight"
//           >
//             Ver Programação
//           </a>
//         </div>
//       </div>

//       {/* Down Arrow */}
//       <div className="absolute bottom-10 animate-bounce">
//         <ChevronDown size={32} />
//       </div>

//       {/* Fluid SVG Divider - matching the start of Program section */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
//         <svg
//           className="relative block w-full h-[80px] md:h-[120px]"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,40.54V120H0Z"
//             fill="#202BB0"
//           ></path>
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { Calendar, MapPin, ChevronDown, Sparkles } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden"
    >
      <h1 className="sr-only">
        Rainha da Pinha 2026 - Presidente Dutra - Bahia
      </h1>
      
      {/* Background Video Otimizado */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline        
          poster="/hero-thumb.webp"
          className="w-full h-full object-cover"
        >
          {/* MOBILE: Tenta WebM primeiro (mais leve), depois MP4 como fallback */}
          <source
            src="/vHero-mobile.webm"
            type="video/webm"
            media="(max-width: 767px)"
          />
          <source
            src="/vHero-mobile.mp4"
            type="video/mp4"
            media="(max-width: 767px)"
          />
          {/* DESKTOP: Tenta WebM (se você tiver), senão vai para o MP4 padrão */}
          <source
            src="/vHero.webm"
            type="video/webm"
            media="(min-width: 768px)"
          />
          <source src="/vHero.mp4" type="video/mp4" /> 
          Seu navegador não suporta vídeos.
        </video>
        
        {/* Overlay Escuro */}
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/60 via-transparent to-[#202BB0]/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-30 hidden md:block">
        <Sparkles size={80} className="text-yellow-400" />
      </div>
      <div
        className="absolute bottom-40 right-10 animate-float opacity-30 hidden md:block"
        style={{ animationDelay: "2s" }}
      >
        <Sparkles size={60} className="text-cyan-400" />
      </div>

      <div className="container mx-auto px-6 text-center z-10 flex flex-col items-center">
        {/* Logo Otimizada (LCP) */}
        <div className="mb-6 animate-float">
          <img
            src="/logo_rp26-1.png"
            alt="Logo Rainha da Pinha 2026"
            className="h-auto w-full max-w-70 md:max-w-100 mx-auto"
            fetchPriority="high"
            loading="eager"
          />
        </div>

        <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 mb-10 flex flex-col md:flex-row gap-6 items-center shadow-2xl">
          <div className="flex items-center gap-2">
            <Calendar className="text-yellow-400" size={20} />
            <span className="font-bold text-lg text-white">
              10 a 12 de Abril
            </span>
          </div>
          <div className="hidden md:block w-px h-6 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <MapPin className="text-cyan-400" size={20} />
            <span className="font-bold text-lg text-white">
              Presidente Dutra - BA
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md md:max-w-none justify-center">
          <a
            href="#programacao"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-10 py-5 rounded-full font-black text-xl shadow-[0_6px_0_#b45309] transition-all transform hover:-translate-y-1 active:translate-y-1 uppercase tracking-tight"
          >
            Ver Programação
          </a>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown size={32} />
      </div>

      {/* Fluid SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[80px] md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,40.54V120H0Z"
            fill="#202BB0"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

