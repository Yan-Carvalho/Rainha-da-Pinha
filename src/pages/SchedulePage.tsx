import React from "react";
import { Clock } from "lucide-react";
import { schedule } from "../data/schedule";
import { sponsors } from "../data/sponsors";
import Footer from "../components/Footer";
import Patrocinadores from "../components/Patrocinadores";
import candidataBg from "../images/cd-rainha-pinha.png";
import manin from "../images/manin.jpg";
import tayrone from "../images/tayrone.jpg";

const artistImages = {
  Desfile: candidataBg,
  "Manim Vaqueiro": manin,
  Tayrone: tayrone,
};

function SchedulePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-[70svh] relative overflow-hidden">
        <div className="absolute inset-0 bg-pink-300"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80")',
          }}
        ></div>

        <div className="relative h-full flex items-center justify-center pt-20">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
              HORÁRIOS DOS
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text">
                SHOWS
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Confira os horários dos shows da
              <br />
              Rainha da Pinha 2025 e faça a sua programação!
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-yellow-400 to-transparent my-transparent-gradient"></div>
      </div>

      <div className="flex-grow bg-gradient-to-br from-yellow-400 via-pink-500 to-yellow-500 relative carnival-texture">
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-4xl mx-auto space-y-16">
            {schedule.map((day, index) => {
              const barracaoAndTrioEvents = day.events.filter(
                (e) => e.location === "Barracão" || e.location === "Trio"
              );
              const palcoEvents = day.events.filter(
                (e) => e.location === "Palco Principal"
              );
              const mainEvent =
                palcoEvents.find((e) => e.mainEvent) ||
                palcoEvents[0] ||
                barracaoAndTrioEvents[0];

              const hasOnlyTrio =
                barracaoAndTrioEvents.length > 0 &&
                barracaoAndTrioEvents.every((e) => e.location === "Trio");

              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-md rounded-lg overflow-hidden"
                >
                  <div
                    className="h-48 relative overflow-hidden"
                    style={{
                      backgroundImage: `url(${
                        artistImages[mainEvent?.artist] || ""
                      })`,
                      backgroundSize:
                        mainEvent?.artist === "Desfile" ? "contain" : "cover",
                      backgroundPosition:
                        mainEvent?.artist === "Desfile"
                          ? "center bottom"
                          : "center",
                      backgroundRepeat: "no-repeat",
                      backgroundColor:
                        mainEvent?.artist === "Desfile" ? "#ec4899" : undefined,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {day.day}
                      </h2>
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
                          {day.day.includes("13") ? "Trio" : "Barracão"}
                        </h3>
                        <div className="space-y-4">
                          {barracaoAndTrioEvents.map((event, i) => (
                            <div
                              key={i}
                              className="flex items-start space-x-4 p-4 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-pink-200"
                            >
                              <Clock
                                className="text-pink-500 flex-shrink-0"
                                size={24}
                              />
                              <div>
                                <p className="font-semibold text-gray-800">
                                  {event.time} - {event.artist}
                                </p>
                                <p className="text-gray-600">
                                  {event.location}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Divisor */}
                    {barracaoAndTrioEvents.length > 0 &&
                      palcoEvents.length > 0 && (
                        <div className="my-8">
                          <div className="text-center text-white text-xl font-bold tracking-wide uppercase mb-2"></div>
                          <div className="h-7 "></div>
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
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-500 via-yellow-500 relative carnival-texture">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-[160px] fill-white/95 relative z-10"
        >
          <path d="M0,192L80,160C160,128,320,64,480,48C640,32,800,64,960,112C1120,160,1280,224,1360,256L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      <div className="white-gradient"></div>
      <Patrocinadores />
      <Footer />
    </div>
  );
}

export default SchedulePage;
