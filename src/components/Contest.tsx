import React from "react";
import { Crown, Star, Sparkles, Heart } from "lucide-react";

const Contest: React.FC = () => {
  return (
    <section
      id="concurso"
      className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Mobile Header - Title first on mobile */}
        <div className="text-center lg:hidden mb-10">
          <span className="inline-block bg-cyan-100 text-cyan-600 font-black uppercase tracking-widest text-xs px-4 py-2 rounded-full mb-4">
            Nossa Soberana
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-blue-900 leading-none uppercase italic tracking-tighter">
            Rainha <br /> da{" "}
            <span className="text-pink-500 not-italic">Pinha</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Image Block - Following Gallery Pattern */}
          <div className="lg:w-1/3 relative group w-full max-w-sm mx-auto lg:max-w-none">
            {/* Background Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-400 via-pink-500 to-yellow-400 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity rounded-full"></div>

            <div className="relative z-10 bg-blue-950 rounded-[4rem] aspect-[421/485] md:aspect-[476/589] w-full overflow-hidden shadow-2xl transform hover:-rotate-1 transition-transform duration-700 border-8 border-white">
              <img
                src="/gisely.webp"
                alt="Rainha da Pinha 2025"
                loading="lazy"     
                decoding="async"    
                className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105"
              />

              {/* Floating Crown Badge */}
              <div className="absolute top-6 right-6 w-12 h-12 md:w-14 md:h-14 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-xl animate-bounce z-20">
                <Crown className="text-blue-900" size={24} />
              </div>
            </div>

            {/* Badge floating on image - Refined to match image mockup */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-right-6 bg-blue-900 p-4 md:p-5 rounded-[2rem] shadow-2xl flex items-center gap-4 transform md:rotate-6 border-4 border-white z-20 min-w-[240px]">
              <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                <Heart fill="currentColor" size={24} />
              </div>
              <div className="text-left">
                <span className="block font-black text-yellow-400 text-lg leading-none uppercase tracking-wide">
                  Gisely
                </span>
                <span className="block font-bold text-white text-[10px] uppercase tracking-widest opacity-70">
                  Rainha 2026
                </span>
              </div>
            </div>
          </div>

          {/* Text Block */}
          <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
            {/* Title for Desktop */}
            <div className="hidden lg:block mb-8">
              <span className="inline-block bg-cyan-100 text-cyan-600 font-black uppercase tracking-widest text-xs px-4 py-2 rounded-full mb-6">
                Nossa Identidade
              </span>
              <h2 className="text-6xl md:text-8xl font-black text-blue-900 leading-[0.9] uppercase italic tracking-tighter">
                Rainha <br /> da{" "}
                <span className="text-pink-500 not-italic">Pinha</span>
              </h2>
            </div>

            <div className="bg-white/50 backdrop-blur-sm lg:bg-transparent p-6 rounded-[2.5rem] lg:p-0 shadow-lg lg:shadow-none border border-white lg:border-none">
              <div className="flex justify-center lg:justify-start mb-4">
                <div className="flex text-yellow-400 gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-blue-900 mb-4 uppercase italic tracking-tight leading-tight">
                Um Brilho que <span className="text-cyan-500">Encantou</span> o
                Sertão!
              </h3>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-6">
                Nossa majestosa Rainha da Pinha de 2026,{" "}
                <span className="text-pink-500 font-bold">Gisely</span>,
                 brilha com uma beleza radiante e a simpatia que só ela possui. Seu reinado exalta o encanto e a sofisticação da mulher de Presidente Dutra, honrando com extrema elegância o legado da nossa capital mundial da pinha.
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-pink-500 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
                <Sparkles size={16} /> Tradição & Beleza
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contest;
