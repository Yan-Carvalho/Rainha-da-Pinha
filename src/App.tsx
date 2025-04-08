import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HomePage from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";
import ContestPage from "./pages/ContestPage";
import logo from "./images/Rpnb.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-pink-500 to-yellow-500">
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
          isScrolled || isMenuOpen
            ? "animated-gradient shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div
              onClick={() => handleNavigation("/")}
              className="cursor-pointer"
            >
              <img
                src={logo}
                alt="Rainha da Pinha - Presidente Dutra BA"
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 font-medium">
              <div
                onClick={() => handleNavigation("/")}
                className={`transition-colors cursor-pointer text-lg ${
                  isScrolled
                    ? "text-white hover:text-yellow-200"
                    : "bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-yellow-400"
                }`}
              >
                Início
              </div>
              <div
                onClick={() => handleNavigation("/concurso")}
                className={`transition-colors cursor-pointer text-lg ${
                  isScrolled
                    ? "text-white hover:text-yellow-200"
                    : "bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-yellow-400"
                }`}
              >
                Concurso
              </div>
              <div
                onClick={() => handleNavigation("/programacao")}
                className={`transition-colors cursor-pointer text-lg ${
                  isScrolled
                    ? "text-white hover:text-yellow-200"
                    : "bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-yellow-400"
                }`}
              >
                Programação
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${
                isScrolled || isMenuOpen ? "text-white" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-2">
              <div className="flex flex-col space-y-4">
                <div
                  onClick={() => handleNavigation("/")}
                  className="text-white hover:text-yellow-200 transition-colors cursor-pointer text-lg"
                >
                  Início
                </div>
                <div
                  onClick={() => handleNavigation("/concurso")}
                  className="text-white hover:text-yellow-200 transition-colors cursor-pointer text-lg"
                >
                  Concurso
                </div>
                <div
                  onClick={() => handleNavigation("/programacao")}
                  className="text-white hover:text-yellow-200 transition-colors cursor-pointer text-lg"
                >
                  Programação
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programacao" element={<SchedulePage />} />
        <Route path="/concurso" element={<ContestPage />} />
      </Routes>
    </div>
  );
}

export default App;
