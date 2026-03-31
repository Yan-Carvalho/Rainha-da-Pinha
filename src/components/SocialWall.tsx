// import React, { useEffect, useState } from "react";
// import { Instagram, Heart, MessageCircle } from "lucide-react";

// interface InstagramPost {
//   id: string;
//   mediaUrl: string;
//   permalink: string;
//   caption?: string;
//   likeCount: number;
//   commentsCount: number;
// }

// const SocialWall: React.FC = () => {
//   const [posts, setPosts] = useState<InstagramPost[]>([]);
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   fetch("https://feeds.behold.so/xrEZQuMx7pPUkZQ4zSda")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       // Verifica se existe a lista de posts
//   //       if (data && data.posts) {
//   //         const formattedPosts = data.posts.map((post: any) => ({
//   //           id: post.id || Math.random().toString(),
//   //           mediaUrl: post.sizes?.medium?.mediaUrl || post.mediaUrl || "",
//   //           permalink: post.permalink || "#",
//   //           caption: post.caption || "",
//   //           // Se o campo não existir no JSON, coloca 0 para não quebrar
//   //           likeCount: post.likeCount ?? 0,
//   //           commentsCount: post.commentsCount ?? 0,
//   //         }));

//   //         setPosts(formattedPosts.slice(0, 8));
//   //       }
//   //       setLoading(false);
//   //     })
//   //     .catch((err) => {
//   //       console.error("Erro ao buscar Instagram:", err);
//   //       setLoading(false);
//   //     });
//   // }, []);

//   return (
//     <section className="py-20 lg:py-24 overflow-hidden bg-white">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 lg:mb-16 gap-8 text-center lg:text-left">
//           <div className="max-w-xl">
//             <span className="text-cyan-500 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 block">
//               Siga nossa festa
//             </span>
//             <h2 className="text-3xl md:text-6xl font-black text-blue-900 uppercase italic tracking-tighter leading-tight">
//               #RainhaDaPinha2025
//             </h2>
//           </div>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full lg:w-auto bg-blue-900 text-white px-8 py-5 rounded-3xl md:rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-pink-500 transition-all shadow-lg active:scale-95"
//           >
//             <Instagram size={22} /> @pref.presidentedutra
//           </a>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
//           {loading
//             ? [...Array(8)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="aspect-square bg-gray-100 rounded-3xl animate-pulse"
//                 />
//               ))
//             : posts.map((post) => (
//                 <a
//                   key={post.id}
//                   href={post.permalink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group relative aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
//                 >
//                   <img
//                     src={post.mediaUrl}
//                     alt={post.caption || "Post da Prefeitura"}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     loading="lazy"
//                     decoding="async"
//                   />

//                   {/* AQUI É O LUGAR DO OVERLAY COM OS DADOS REAIS */}
//                   <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 md:gap-6 text-white font-bold text-sm">
//                     <div className="flex items-center gap-1.5">
//                       <Heart size={20} fill="white" />
//                       {post.likeCount}
//                     </div>
//                     <div className="flex items-center gap-1.5 hidden md:flex">
//                       <MessageCircle size={20} fill="white" />
//                       {post.commentsCount}
//                     </div>
//                   </div>
//                 </a>
//               ))}
//         </div>

//         <div className="mt-16 text-center">
//           <p className="text-gray-300 font-black uppercase tracking-[0.5em] text-[10px] md:text-xs animate-pulse">
//             O brilho do sertão no seu feed
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SocialWall;

// import React, { useEffect } from "react";
// import { Instagram } from "lucide-react";

// const SocialWall: React.FC = () => {
//   // LISTA MANUAL DE POSTS
//   const posts = [
//     "https://www.instagram.com/p/DUnMOk0jer8/",
//     "https://www.instagram.com/p/DU52J6NkTZe/",
//     "https://www.instagram.com/p/DUnMOk0jer8/",
//     "https://www.instagram.com/p/DUnMOk0jer8/",
//   ];

//   useEffect(() => {
//     const scriptId = "instagram-embed-script";

//     if (!document.getElementById(scriptId)) {
//       const script = document.createElement("script");
//       script.id = scriptId;
//       script.src = "https://www.instagram.com/embed.js";
//       script.async = true;
//       document.body.appendChild(script);
//     } else {
//       // Reprocessa embeds se já existir script
//       // @ts-ignore
//       if (window.instgrm) {
//         // @ts-ignore
//         window.instgrm.Embeds.process();
//       }
//     }
//   }, []);

//   return (
//     <section className="py-20 lg:py-24 overflow-hidden bg-white">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 lg:mb-16 gap-8 text-center lg:text-left">
//           <div className="max-w-xl">
//             <span className="text-cyan-500 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 block">
//               Siga nossa festa
//             </span>

//             <h2 className="text-3xl md:text-6xl font-black text-blue-900 uppercase italic tracking-tighter leading-tight">
//               #RainhaDaPinha2025
//             </h2>
//           </div>

//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full lg:w-auto bg-blue-900 text-white px-8 py-5 rounded-3xl md:rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-pink-500 transition-all shadow-lg active:scale-95"
//           >
//             <Instagram size={22} /> @pref.presidentedutra
//           </a>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {posts.map((permalink, index) => (
//             <blockquote
//               key={index}
//               className="instagram-media w-full"
//               data-instgrm-permalink={permalink}
//               data-instgrm-version="14"
//             />
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <p className="text-gray-300 font-black uppercase tracking-[0.5em] text-[10px] md:text-xs animate-pulse">
//             O brilho do sertão no seu feed
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SocialWall;

import React, { useEffect, useRef, useState } from "react";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";

const SocialWall: React.FC = () => {
  const posts = [
    "https://www.instagram.com/p/DUnMOk0jer8/",
    "https://www.instagram.com/p/DU52J6NkTZe/",
    "https://www.instagram.com/p/DUnMOk0jer8/",
    "https://www.instagram.com/p/DUnMOk0jer8/",
  ];

  const extendedPosts = [...posts, ...posts];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);

  const autoplay = useRef<number | null>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const prevTranslate = useRef(0);
  const currentTranslate = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  /* ---------------- RESPONSIVO ---------------- */

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setVisible(1);
      else setVisible(4);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ---------------- INSTAGRAM EMBED ---------------- */

  useEffect(() => {
    const scriptId = "instagram-embed-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // @ts-ignore
      if (window.instgrm) window.instgrm.Embeds.process();
    }
  }, []);

  /* ---------------- AUTOPLAY ---------------- */

  const startAutoplay = () => {
    stopAutoplay();

    autoplay.current = window.setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplay.current !== null) clearInterval(autoplay.current);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  /* ---------------- LOOP INFINITO ---------------- */

  useEffect(() => {
    if (index >= posts.length) {
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
        }
        setIndex(0);
      }, 500);
    }
  }, [index]);

  /* ---------------- CONTROLES ---------------- */

  const next = () => setIndex((prev) => prev + 1);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));

  /* ---------------- DRAG ---------------- */

  const dragStart = (x: number) => {
    dragging.current = true;
    startX.current = x;
    stopAutoplay();

    document
      .querySelectorAll(".instagram-media")
      .forEach((el) => ((el as HTMLElement).style.pointerEvents = "none"));
  };

  const dragMove = (x: number) => {
    if (!dragging.current) return;

    const diff = x - startX.current;
    currentTranslate.current = prevTranslate.current + diff;

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  const dragEnd = () => {
    dragging.current = false;

    document
      .querySelectorAll(".instagram-media")
      .forEach((el) => ((el as HTMLElement).style.pointerEvents = "auto"));

    const moved = currentTranslate.current - prevTranslate.current;

    if (moved < -100) next();
    else if (moved > 100) prev();

    setTimeout(startAutoplay, 4000);
  };

  /* ---------------- RENDER ---------------- */

  return (
    <section className="py-20 lg:py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        {/* HEADER */}

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 gap-8 text-center lg:text-left">
          <div>
            <span className="text-cyan-500 font-black uppercase tracking-[0.3em] text-xs">
              Siga nossa festa
            </span>

            <h2 className="text-3xl md:text-6xl font-black text-blue-900 uppercase italic">
              #RainhaDaPinha2026
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 text-white px-8 py-4 rounded-full font-black flex items-center gap-3"
          >
            <Instagram size={20} /> @pref.presidentedutra
          </a>
        </div>

        {/* CARROSSEL */}

        <div
          className="overflow-hidden touch-pan-y select-none"
          onMouseDown={(e) => dragStart(e.pageX)}
          onMouseMove={(e) => dragMove(e.pageX)}
          onMouseUp={dragEnd}
          onMouseLeave={dragEnd}
          onTouchStart={(e) => dragStart(e.touches[0].clientX)}
          onTouchMove={(e) => dragMove(e.touches[0].clientX)}
          onTouchEnd={dragEnd}
        >
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${index * (100 / visible)}%)`,
            }}
          >
            {extendedPosts.map((permalink, i) => (
              <div
                key={i}
                className="p-2"
                style={{ minWidth: `${100 / visible}%` }}
              >
                <blockquote
                  className="instagram-media w-full"
                  data-instgrm-permalink={permalink}
                  data-instgrm-version="14"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SETAS DESKTOP */}

        <div className="hidden md:flex justify-between mt-6">
          <button
            onClick={prev}
            className="p-3 bg-blue-900 text-white rounded-full"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="p-3 bg-blue-900 text-white rounded-full"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* DOTS */}

        <div className="flex justify-center gap-3 mt-6">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                index % posts.length === i
                  ? "w-6 bg-blue-900"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 font-black uppercase tracking-[0.5em] text-xs">
            O brilho do sertão no seu feed
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialWall;
