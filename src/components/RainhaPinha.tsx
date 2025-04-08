import React from 'react';
import { Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function RainhaPinha() {
  const navigate = useNavigate();

  return (
    <section className="relative">
      {/* Full-width banner */}
      <div className="relative h-[60vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=2000&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Maria Santos</h2>
          <p className="text-xl text-white/90">Rainha da Pinha 2025</p>
        </div>
      </div>

      {/* Details section */}
      <div className="bg-white/95">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="text-pink-500" size={32} />
                <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                  Conheça Nossa Rainha
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Maria Santos, 23 anos, natural de Presidente Dutra, é a atual Rainha da Pinha. 
                Estudante de Pedagogia e apaixonada pela cultura local, Maria representa a beleza, 
                a graça e a tradição do nosso município. Com seu carisma e dedicação, ela tem 
                contribuído para a preservação e divulgação da nossa cultura, especialmente da 
                tradicional festa do pinhão.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Como Rainha da Pinha 2025, Maria tem a missão de ser embaixadora cultural de 
                Presidente Dutra, participando ativamente dos eventos culturais e sociais da cidade, 
                além de promover nossas tradições e atrair visitantes para nossa região.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&w=800&q=80" 
                  alt="Maria Santos - Rainha da Pinha 2025"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm text-white/90">
                    Foto oficial da coroação - Janeiro 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RainhaPinha;