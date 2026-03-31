import React from "react";
import { Users, History, Landmark } from "lucide-react";

const About: React.FC = () => {
  const stats = [
    {
      icon: <Landmark size={32} />,
      val: "1962",
      label: "Fundação",
      numColor: "text-yellow-400",
    },
    {
      icon: <Users size={32} />,
      val: "15mil+",
      label: "Habitantes",
      numColor: "text-cyan-400",
    },
    {
      icon: <History size={32} />,
      val: "64",
      label: "Anos",
      numColor: "text-yellow-400",
    },
  ];

  return (
    <section
      id="historia"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Top Fluid Divider */}

      <div className="container mx-auto px-6 relative z-10 pt-8">
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24 mb-16 lg:mb-24">
          {/* Texto - Ordem 1 */}
          <div className="w-full lg:w-1/2">
            <span className="text-blue-900 font-black tracking-[0.2em] uppercase text-xs mb-4 block text-center lg:text-left">
              Nossa Herança Cultural
            </span>
            <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none text-blue-900 mb-8 text-center lg:text-left">
              Capital da <br /> <span className="text-pink-500">Pinha!</span>
            </h2>
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-xl text-gray-800 font-semibold leading-relaxed">
                Presidente Dutra - BA não é apenas um ponto no mapa, é o coração
                pulsante da produção de pinha no Brasil. A Festa Rainha da
                Pinha, iniciada em 1976 e oficializada em 1993, nasceu para
                celebrar a colheita e a força do nosso povo.
              </p>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                Ao longo de mais de seis décadas, o evento se transformou na
                maior vitrine cultural da região de Irecê. Mais do que música e
                desfiles, a festa é um motor econômico vital que movimenta o
                comércio local e valoriza o pequeno produtor.
              </p>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                Celebrar 64 anos é honrar cada agricultor e cada família que
                ajudou a construir a história de Presidente Dutra como a Capital
                Mundial da Pinha, mantendo viva a tradição através do nosso
                concurso histórico.
              </p>
            </div>
          </div>

          {/* Imagem - Ordem 2 */}
          <div className="w-full lg:w-1/2 relative group max-w-md mx-auto lg:max-w-none">
            <div className="absolute -inset-4 bg-cyan-400 organic-radius opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative organic-radius overflow-hidden shadow-3xl aspect-square border-8 border-white">
              <img
                src="/pdutra2.webp"
                alt="Vista da Cidade de Presidente Dutra - Bahia. Imagem criada com nano banana 2 / gemini"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-[#202BB0] text-white p-6 md:p-8 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl transform -rotate-6 border-4 border-white z-20">
              <span className="block font-black text-3xl md:text-4xl leading-none italic mb-1">
                63º
              </span>
              <span className="block font-bold uppercase text-[10px] md:text-xs tracking-widest text-cyan-400">
                Aniversário
              </span>
            </div>
          </div>
        </div>

        {/* Stats Section - Desktop Only and Positioned Below Everything */}
        <div className="hidden lg:block">
          <div className="flex flex-row items-center justify-between gap-6 bg-white/50 backdrop-blur-sm p-10 rounded-[4rem] border border-gray-100 shadow-xl max-w-5xl mx-auto w-full">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center text-center"
              >
                <div className="text-blue-900 mb-3 opacity-80">
                  {React.cloneElement(
                    stat.icon as React.ReactElement<{ size?: number }>,
                    { size: 40 },
                  )}
                </div>
                <div
                  className={`text-4xl font-black ${stat.numColor} tracking-wide mb-1`}
                >
                  {stat.val}
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-gray-400 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
