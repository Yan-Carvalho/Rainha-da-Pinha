import React from "react";
import { candidates } from "../data/candidates";
import { sponsors } from "../data/sponsors";
import Footer from "../components/Footer";
import Patrocinadores from "../components/Patrocinadores";
import bgFesta from "../images/cd-rainha-pinha.png";

function ContestPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner Section */}
      {/* Hero Banner */}
      <div className="h-[70svh] relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // backgroundImage:
            //   'url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: window.innerWidth < 768 ? "cover" : "70%",
            backgroundSize: "70%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Light Beams Effect */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center pt-20">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
              RAINHA DA
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text">
                PINHA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Conheça as candidatas ao título de Rainha da Pinha 2025
            </p>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-yellow-400 to-transparent my-transparent-gradient"></div>
      </div>

      {/* Candidates Section */}
      <section className="carnival-texture relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-pink-500 to-yellow-500"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Candidatas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {candidates.map((candidate, index) => (
              <a
                key={index}
                href={candidate.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-105"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="aspect-[4/5] relative">
                    <img
                      src={candidate.photo}
                      alt={candidate.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-xl text-gray-800">
                      {candidate.name}
                    </h3>
                    <p className="text-pink-500">{candidate.city}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider with Carnival Texture */}
      <div className="carnival-texture relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-yellow-500 to-yellow-500"></div>
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-[160px] fill-white/95 relative z-10"
        >
          <path d="M0,224L40,213.3C80,203,160,181,240,149.3C320,117,400,75,480,69.3C560,64,640,96,720,128C800,160,880,192,960,186.7C1040,181,1120,139,1200,122.7C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>

      {/* History Section */}
      <section className="background-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              História da Rainha da Pinha
            </h2>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                O concurso Rainha da Pinha nasceu em Presidente Dutra - BA como
                uma celebração da cultura local e da importância do pinhão para
                a economia da região. Desde sua primeira edição, o evento se
                tornou um dos momentos mais aguardados do calendário cultural da
                cidade.
              </p>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                A cada ano, jovens representantes da comunidade participam do
                concurso, que vai além da beleza, valorizando o conhecimento
                sobre a cultura local e o comprometimento com o desenvolvimento
                da região.
              </p>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                O título de Rainha da Pinha carrega consigo a responsabilidade
                de ser embaixadora da cultura local, promovendo as tradições e o
                turismo de Presidente Dutra durante todo o ano de reinado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="white-gradient2"></div>
      {/* Sponsors Section */}
      <Patrocinadores />

      <Footer />
    </div>
  );
}

export default ContestPage;
