import React from "react";

const Sponsors: React.FC = () => {
  const externalLink = "https://presidentedutra.ba.gov.br/";

  const getImagePath = (name: string) =>
    `/patrocinadores/${name.toLowerCase().replace(/\s+/g, "-")}.webp`;

  const organization = [
    {
      name: "Prefeitura de Presidente Dutra",
      role: "Realização",
      image: "/patrocinadores/LOGO_PREFEITURA_E_CULTURA.webp",
    },
    {
      name: "Governo do Estado da Bahia",
      role: "Apoio Institucional",
      image: "/patrocinadores/GOV_BA.webp",
    },
    {
      name: "Governo Federal",
      role: "Apoio Institucional",
      image: "/patrocinadores/GOV_FEDERAL.webp",
    },
  ];

  const officialSponsors = [
    {
      name: "Pneuscar",
      role: "Patrocinador",
      image: "/patrocinadores/Pneuscar.webp",
    },
    {
      name: "Distribuidora Boi Gordo",
      role: "Patrocinador",
      image: "/patrocinadores/boiGordo.webp",
    },
    {
      name: "Yan Carvalho",
      role: "Patrocinador",
      image: "/patrocinadores/yanLogo.webp",
    },
    {
      name: "Amstel",
      role: "Patrocinador",
      image: "/patrocinadores/amstel.webp",
    },
    {
      name: "PITÚ",
      role: "Patrocinador",
      image: "/patrocinadores/pitu.webp",
    },
    {
      name: "Holística",
      role: "Patrocinador",
      image: "/patrocinadores/holistica.webp",
    },
    {
      name: "Irecê Informática",
      role: "Patrocinador",
      image: "/patrocinadores/ireceInformatica.webp",
    },
    {
      name: "JE Blocos e Pisos",
      role: "Patrocinador",
      image: "/patrocinadores/JE-Blocos-e-Pisos.webp",
    },
    {
      name: "RCA Renato Carvalho",
      role: "Patrocinador",
      image: "/patrocinadores/RCA-Renato-Carvalho.webp",
    },
    {
      name: "Galpão da Construção",
      role: "Patrocinador",
      image: "/patrocinadores/Galpao-da-Construcao.webp",
    },
    {
      name: "Flávio Lanches",
      role: "Patrocinador",
      image: "/patrocinadores/Flavio-Lanches.webp",
    },
    {
      name: "Ribeiro Construção e Irrigação",
      role: "Patrocinador",
      image: "/patrocinadores/ribeiro.webp",
    },
    {
      name: "Dedetizadora Silva",
      role: "Patrocinador",
      image: "/patrocinadores/dedetizadoraSilva.webp",
    },
    {
      name: "Alconta",
      role: "Patrocinador",
      image: "/patrocinadores/alconta.webp",
    },
    {
      name: "Grupo Serra Grande",
      role: "Patrocinador",
      image: "/patrocinadores/grupoSerraGrande.webp",
    },
    {
      name: "Leec",
      role: "Patrocinador",
      image: "/patrocinadores/leec.webp",
    },
    {
      name: "Ótica real",
      role: "Patrocinador",
      image: "/patrocinadores/oticaReal.webp",
    },
    {
      name: "Shopping do Médico",
      role: "Patrocinador",
      image: "/patrocinadores/shoppingDoMedico.webp",
    },
    {
      name: "Natucoco",
      role: "Patrocinador",
      image: "/patrocinadores/natucoco.webp",
    },
    {
      name: "Caipirinha do Serjão",
      role: "Patrocinador",
      image: "/patrocinadores/caipirinhaDoSerjao.webp",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        {/* Organização Section */}
        <div className="mb-20">
          <h3 className="text-center text-blue-900 font-black uppercase tracking-[0.4em] mb-12 text-sm flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-blue-900/20"></span>
            Organização
            <span className="h-px w-12 bg-blue-900/20"></span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {organization.map((org, idx) => (
              <a
                key={idx}
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block transition-transform hover:-translate-y-2 duration-500"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-900 to-cyan-500 rounded-[3rem] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative bg-white p-10 rounded-[2.5rem] shadow-sm group-hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center h-full border-b-8 border-b-blue-900">
                  <div className="w-full h-40 flex items-center justify-center mb-6">
                    <img
                      src={org.image}
                      alt={org.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="font-black text-blue-900 uppercase tracking-tight text-xl mb-2">
                    {org.name}
                  </h4>
                  <span className="text-cyan-500 font-bold uppercase tracking-widest text-[10px]">
                    {org.role}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Patrocinadores Section */}
        <div>
          <h3 className="text-center text-gray-400 font-black uppercase tracking-[0.4em] mb-12 text-sm flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gray-200"></span>
            Patrocinadores Oficiais
            <span className="h-px w-12 bg-gray-200"></span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {officialSponsors.map((sponsor, idx) => {
              const isLink = sponsor.name === "Yan Carvalho";

              // Guardamos o conteúdo (imagem + animações) numa variável para não repetir código
              const CardContent = (
                <div className="w-full aspect-4/3 bg-white rounded-3xl flex items-center justify-center border border-gray-100 p-6 relative overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:border-gray-200 group-hover:-translate-y-1">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain z-10 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              );

              return (
                <div key={idx} className="group flex flex-col items-center">
                  {isLink ? (
                    <a
                      href="https://yancarvalhodev.com.br"
                      target="_blank"
                      className="w-full cursor-pointer"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <div className="w-full cursor-default">{CardContent}</div>
                  )}

                  <p className="mt-3 font-bold text-gray-800 text-[12px] uppercase tracking-widest transition-colors duration-300 group-hover:text-blue-900">
                    {sponsor.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
