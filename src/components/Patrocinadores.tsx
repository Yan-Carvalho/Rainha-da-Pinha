import React from "react";
import { sponsors, organization } from "../data/sponsors";

function Sponsors() {
  return (
    <section id="patrocinadores" className="bg-white/95 py-16">
      <div className="container mx-auto px-4">
        {/* Organização */}
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
          Organização
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {organization.map((org, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white rounded-lg shadow-md p-4 w-full aspect-[2/1] relative overflow-hidden">
                <a href={org.website}>
                  <img
                    src={org.logo}
                    alt={`Logo ${org.name}`}
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              <p className="mt-2 font-semibold text-gray-800">{org.name}</p>
              <span className="text-sm text-pink-500">{org.role}</span>
            </div>
          ))}
        </div>

        {/* Patrocinadores */}
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
          Patrocinadores Oficiais
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white rounded-lg shadow-md p-4 w-full aspect-[2/1] relative overflow-hidden">
                <a href={sponsor.website}>
                  <img
                    src={sponsor.logo}
                    alt={`Logo ${sponsor.name}`}
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              <p className="mt-2 font-semibold text-gray-800">{sponsor.name}</p>
              <span className="text-sm text-pink-500">{sponsor.tier}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;

// import React from 'react';
// import { sponsors, organization } from '../data/sponsors';

// function Sponsors() {
//   return (
//     <section id="patrocinadores" className="bg-white/95 py-16 relative z-0">
//       <div className="container mx-auto px-4">
//         {/* Organização */}
//         <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
//           Organização
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
//           {organization.map((org, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div className="bg-white rounded-lg shadow-md p-4 w-full aspect-[2/1] relative overflow-hidden">
//                 <img
//                   src={org.logo}
//                   alt={`Logo ${org.name}`}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <p className="mt-2 font-semibold text-gray-800">{org.name}</p>
//               <span className="text-sm text-pink-500">{org.role}</span>
//             </div>
//           ))}
//         </div>

//         {/* Patrocinadores */}
//         <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
//           Patrocinadores Oficiais
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//           {sponsors.map((sponsor, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div className="bg-white rounded-lg shadow-md p-4 w-full aspect-[2/1] relative overflow-hidden">
//                 <img
//                   src={sponsor.logo}
//                   alt={`Logo ${sponsor.name}`}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <p className="mt-2 font-semibold text-gray-800">{sponsor.name}</p>
//               <span className="text-sm text-pink-500">{sponsor.tier}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Sponsors;
