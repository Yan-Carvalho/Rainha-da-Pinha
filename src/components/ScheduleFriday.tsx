import React from "react";
import { Clock, ArrowRight } from "lucide-react";
import { schedule } from "../data/schedule";

// Imagens dos artistas
import candidataBg from "../images/Rainha-da-Pinha-logo.png";
import manin from "../images/manin.jpg";
import tayrone from "../images/tayrone.jpg";

// Tipos (ajuste conforme os dados reais do seu schedule)
interface Event {
  time: string;
  artist: string;
  location: string;
  mainEvent?: boolean;
}

interface DaySchedule {
  day: string;
  events: Event[];
}

const artistImages: Record<string, string> = {
  Desfile: candidataBg,
  "Manim Vaqueiro": manin,
  Tayrone: tayrone,
};

const ScheduleFriday: React.FC = () => {
  const friday: DaySchedule | undefined = schedule.find(
    (day) => day.day === "Sexta, 11 de Abril"
  );

  if (!friday) return null;

  const barracaoAndTrioEvents = friday.events.filter(
    (e) => e.location === "Barracão" || e.location === "Trio"
  );
  const palcoEvents = friday.events.filter(
    (e) => e.location === "Palco Principal"
  );
  const mainEvent =
    palcoEvents.find((e) => e.mainEvent) ||
    palcoEvents[0] ||
    barracaoAndTrioEvents[0];

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <div className="bg-white/90 backdrop-blur-md rounded-lg overflow-hidden">
        {/* Capa com imagem do artista */}
        <div
          className="h-48 relative overflow-hidden"
          style={{
            backgroundImage: `url(${artistImages[mainEvent?.artist] || ""})`,
            backgroundSize:
              mainEvent?.artist === "Desfile" ? "contain" : "cover",
            backgroundPosition:
              mainEvent?.artist === "Desfile" ? "center bottom" : "center",
            backgroundRepeat: "no-repeat",
            backgroundColor:
              mainEvent?.artist === "Desfile" ? "#ec4899" : undefined,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-3xl font-bold text-white mb-2">{friday.day}</h2>
            <p className="text-xl text-white/90">
              Artista Principal: {mainEvent?.artist || ""}
            </p>
          </div>
        </div>

        <div className="p-6 space-y-12">
          {/* Barracão e Trio */}
          {barracaoAndTrioEvents.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-pink-700 mb-4 uppercase tracking-wide">
                {friday.day.includes("13") ? "Trio" : "Barracão"}
              </h3>
              <div className="space-y-4">
                {barracaoAndTrioEvents.map((event, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg shadow-md transition transform hover:scale-105"
                  >
                    <Clock className="text-pink-500 flex-shrink-0" size={24} />
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
          )}

          {/* Palco Principal */}
          {palcoEvents.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide bg-gradient-to-r from-pink-600 to-yellow-500 inline-block px-6 py-2 rounded-full shadow-md">
                Palco Principal
              </h3>
              <div className="space-y-4">
                {palcoEvents.map((event, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gradient-to-r hover:from-pink-300 hover:to-yellow-300 border border-pink-300"
                  >
                    <Clock
                      className="text-yellow-600 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <p className="font-bold text-pink-800">
                        {event.time} - {event.artist}
                      </p>
                      <p className="text-pink-600 font-medium text-sm">
                        {event.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Botão "Ver Mais" */}
      <div className="text-center">
        <button
          onClick={() => (window.location.href = "/programacao")}
          className="inline-flex items-center gap-2 text-white hover:text-yellow-400 transition-colors underline underline-offset-4"
        >
          Ver mais <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ScheduleFriday;
