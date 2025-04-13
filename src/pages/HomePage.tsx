import React from "react";
import {
  Music,
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  Crown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { schedule } from "../data/schedule";
import { sponsors } from "../data/sponsors";
import Footer from "../components/Footer";
import Patrocinadores from "../components/Patrocinadores";
import RainhaPinha from "../components/RainhaPinha";
import logo from "../images/Rpnb2.png";
import rainha from "../images/Rainha2025.jpg";

function HomePage() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Festival Banner Section - 100vh */}

      <section
        id="inicio"
        className="h-screen relative overflow-hidden flex items-center justify-center blur-bg"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1569774489379-34633a8e8615?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        <div className="relative text-center text-white px-4">
          <div className="mb-8">
            <img
              src={logo} // Caminho absoluto
              alt="Rainha da Pinha 2025"
              className="mx-auto w-64 md:w-96 lg:w-[500px] h-auto animate-fade-in-up"
            />
          </div>
          <button
            onClick={() => handleNavigation("/concurso")}
            className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition-colors text-lg"
          >
            Conheça as candidatas
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 my-transparent-gradient-white"></div>
      </section>

      {/* About Section */}
      <section id="sobre" className="bg-white/95 relative overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Um Espetáculo de Tradição e Alegria
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              A Rainha da Pinha em Presidente Dutra BA é uma celebração
              contagiante que reúne tradição, música e cultura, transformando as
              ruas num cenário de cores e emoção. Em três dias de festividade
              inesquecível, com atrações de peso em conjunto com atrações
              regionais e com o charme singular da rainha, preparamos uma
              experiência única para você se encantar com o melhor da festa.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-6 rounded-lg">
                <Music className="mx-auto text-pink-500 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Shows Incríveis</h3>
                <p className="text-gray-600">Os melhores artistas</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-6 rounded-lg">
                <MapPin className="mx-auto text-pink-500 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Circuitos</h3>
                <p className="text-gray-600">
                  Avenida São Gabriel e Praça Lia Barreto
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-6 rounded-lg">
                <Calendar className="mx-auto text-pink-500 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">3 Dias de Festa</h3>
                <p className="text-gray-600">11 a 13 de Abril</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-[160px] fill-white/95"
        >
          <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      {/* Schedule Preview Section */}
      <section id="programacao" className="py-16 relative overflow-hidden">
        <div className="carnival-speaker carnival-speaker-tl"></div>
        <div className="carnival-speaker carnival-speaker-tr"></div>
        {/* <div className="carnival-speaker carnival-speaker-bl"></div>
        <div className="carnival-speaker carnival-speaker-br"></div> */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Programação
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {schedule.slice(0, 1).map((day, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur rounded-lg p-6"
              >
                <h3 className="text-2xl font-bold text-pink-500 mb-4">
                  {day.day}
                </h3>
                <div className="space-y-4">
                  {day.events.slice(0, 5).map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="flex items-start space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-pink-50 rounded-lg"
                    >
                      <Clock
                        className="text-pink-500 flex-shrink-0"
                        size={24}
                      />
                      <div>
                        <p className="font-semibold text-gray-800">
                          {event.time} - {event.artist}
                        </p>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="text-center">
              <button
                onClick={() => handleNavigation("/programacao")}
                className="inline-flex items-center gap-2 text-white hover:text-yellow-400 transition-colors underline underline-offset-4"
              >
                Ver mais <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rainha da Pinha */}
      <section id="rainha-pinha" className="py-16 relative overflow-hidden">
        <div className="carnival-speaker carnival-speaker-tl"></div>
        <div className="carnival-speaker carnival-speaker-tr"></div>
        <div className="carnival-speaker carnival-speaker-bl"></div>
        <div className="carnival-speaker carnival-speaker-br"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="text-yellow-400" size={32} />
                <h2 className="text-4xl font-bold">Rainha da Pinha</h2>
              </div>
              <p className="text-lg mb-8">
                O concurso Rainha da Pinha é um dos eventos mais aguardados do
                calendário cultural de Presidente Dutra - BA. A vencedora tem a
                honra de representar a tradição e a beleza da nossa cidade,
                sendo uma verdadeira embaixadora da cultura local durante todo o
                ano.
              </p>
              <button
                onClick={() => handleNavigation("/concurso")}
                className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition-colors text-lg inline-flex items-center gap-2 mb-8 lg:mb-0"
              >
                Conheça as candidatas <ArrowRight size={20} />
              </button>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={rainha}
                  alt="Rainha da Pinha 2025"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Carla Cristina</h3>
                  <p className="text-white/90">Rainha da Pinha 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-[160px] fill-white/95"
        >
          <path d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <Patrocinadores />

      <Footer />
    </>
  );
}

export default HomePage;
