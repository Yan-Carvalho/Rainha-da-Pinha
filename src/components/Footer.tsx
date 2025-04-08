import React from "react";
import { Instagram, Facebook } from "lucide-react";
import prefeitura from "../images/PresidenteDutra.png";
import logo from "../images/Rpnb.png";

function Footer() {
  return (
    <>
      <div className="relative">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-[160px] fill-white/95"
          style={{
            background: "linear-gradient(to right, #ec4899, #eaac12)",
          }}
        >
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <footer className="bg-white/90 backdrop-blur custom-gradient">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto items-center">
            {/* Logo da Prefeitura */}
            <div className="flex justify-center">
              <a href="http://www.presidentedutra.ba.gov.br/">
                <img
                  src={prefeitura}
                  alt="Prefeitura de Presidente Dutra"
                  className="h-24 w-auto"
                />
              </a>
            </div>

            {/* Logo da Festa */}
            <div className="flex justify-center">
              <a href="https://www.instagram.com/rainhadapinha/">
                <img src={logo} alt="Rainha da Pinha" className="h-24 w-auto" />
              </a>
            </div>

            {/* Redes Sociais */}
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                Redes Sociais
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/prefeituradepresidentedutraba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
                >
                  <Instagram size={20} />
                  <span>Prefeitura de Presidente Dutra BA</span>
                </a>
                <a
                  href="https://instagram.com/rainhadapinha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
                >
                  <Instagram size={20} />
                  <span>Rainha da Pinha</span>
                </a>
                <a
                  href="https://facebook.com/prefeiturapresidentedutra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
                >
                  <Facebook size={20} />
                  <span>Prefeitura de Presidente Dutra</span>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Rainha da Pinha 2025
            </h2>
            <p className="text-gray-600">© 2025 Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
