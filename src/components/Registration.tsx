import React from "react";
import { Send, Crown, Sparkles } from "lucide-react";

const Registration: React.FC = () => {
  const registrationLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScPAsdZAhFAy42UcJ-FNEAyTw4hSEZDvGleHieMMQRDWraZ_g/viewform?usp=publish-editor";

  return (
    <section id="inscricao" className="py-24 bg-white relative overflow-hidden">
      {/* Pattern background specifically for this section */}
      <div className="absolute inset-0 bg-pattern-fluid opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-[#202BB0] to-blue-900 rounded-[4rem] p-10 md:p-20 shadow-3xl flex flex-col items-center text-center text-white border-4 border-cyan-400">
          <div className="mb-8 p-6 bg-white/10 rounded-full backdrop-blur-md animate-float">
            <Crown size={64} className="text-yellow-400" />
          </div>

          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6">
            Sua Vez de <br /> <span className="text-cyan-400">Brilhar!</span>
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl font-medium mb-12">
            O trono de{" "}
            <span className="text-yellow-400 font-black">
              Rainha da Pinha 2026
            </span>{" "}
            está esperando por você. Represente a força e o orgulho das nossas
            raízes sertanejas!
          </p>

          <div className="flex flex-col items-center gap-6">
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-yellow-400 hover:bg-white text-blue-900 px-12 md:px-20 py-6 md:py-8 rounded-full font-black text-2xl md:text-4xl shadow-[0_15px_0_#b45309] transition-all transform hover:-translate-y-2 active:translate-y-1 uppercase tracking-tight"
            >
              Inscreva-se Agora
              {/* <Send
                size={32}
                className="group-hover:translate-x-3 transition-transform"
              /> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
