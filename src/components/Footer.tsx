import React from "react";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#202BB0] text-white pt-24 pb-12 overflow-hidden">
      {/* Top Divider - Corrected to match bg-gray-50 (#F9FAFB) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative block w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86C213,70.52,125.75,80.3,67.52,63,40.66,55.06,17.41,45.42,0,33.58V0H1200V95.8C1113,85.2,1055.71,111.31,985.66,92.83Z"
            fill="#F9FAFB"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 items-center text-center md:text-left">
          <div className="flex flex-col items-center">
            <img
              src="/lrpd26.png"
              alt="Logo Rainha da Pinha 2026"
              className="h-auto w-full max-w-50 mx-auto"
            />
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/rainhadapinha/"
                className="p-3 bg-white/10 rounded-xl hover:bg-pink-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/PrefeituradePresidenteDutra"
                className="p-3 bg-white/10 rounded-xl hover:bg-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga-nos no Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-6">
              Contatos
            </h4>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Mail className="text-cyan-400" size={20} />
              <span className="font-medium">
                pmpdba@presidentedutra.ba.gov.br
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <MapPin className="text-pink-500" size={20} />
              <span className="font-medium text-sm">
                Centro <br /> Presidente Dutra - BA
              </span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-[3rem] border border-white/10">
            <h4 className="font-black uppercase italic mb-4">Realização</h4>
            <p className="text-blue-200 text-sm font-medium leading-relaxed">
              Prefeitura Municipal de Presidente Dutra - BA <br />
              Desenvolvendo o Futuro da Nossa Gente.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-blue-300 text-xs font-bold uppercase tracking-[0.3em]">
          <p>© 2026 Rainha da Pinha | Presidente Dutra - BA</p>

          <p>
            Criado por{" "}
            <a
              href="https://www.yancarvalhodev.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors "
            >
              Yan Carvalho Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
