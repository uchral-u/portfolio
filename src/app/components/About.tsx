// "use client";

// import React from "react";
// export default function Portfolio() {
//   return (
//     <div className=" bg-[#111111] text-white min-h-screenz font-sans selection:bg-gray-700">
//       {/* tses */}
//       <nav className="h-20 border-b border-white/10 flex items-center justify-between px-6 md:px-12 sticky top-0 bg-black/80 backdrop-blur-md z-50">
//         <div className="text-2xl font-bold tracking-tighter">UCHRAL</div>
//         <div className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-widest">
//           <a href="#home" className="hover:text-gray-400 transition-colors">
//             Home
//           </a>
//           <a href="#about" className="hover:text-gray-400 transition-colors">
//             About
//           </a>
//           <a href="#projects" className="hover:text-gray-400 transition-colors">
//             Projects
//           </a>
//         </div>
//       </nav>

//       {/* Home heseg */}
//       <section
//         id="home"
//         className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 md:px-12"
//       >
//         <p className="text-gray-400 font-mono mb-4">This is my portfolio</p>
//         <h1 className="text-5xl md:text-8xl font-black leading-none mb-6">
//           <span className="text-gray-500">I AM UCHRAL</span>
//         </h1>
//         <p className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed">
//           Би бол frontend хөгжүүлэгч болох гээд хичээж байгаа хүн
//         </p>
//         <div className="mt-10">
//           <a
//             href="#projects"
//             className="bg-white text-black px-8 py-4 font-bold uppercase hover:bg-gray-200 transition-all"
//           >
//             See My Work
//           </a>
//         </div>
//       </section>

//       {/* minii tuhai heseg */}
//       <section id="about" className="py-32 px-6 md:px-12 bg-[#111111]">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
//           <div>
//             <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest">
//               About Me
//             </h2>
//             <p className="text-gray-400 text-lg leading-relaxed mb-6">
//               Миний гол зорилго өөртөө зориулж ecommerce цахим хуудас хийж
//               борлуулалтаа өсгөх юм. Одоогоор Erxes Academy-д сурсан шинэ зүйлс:
//             </p>
//           </div>

//           {/* Husnegt */}
//           <div className="grid grid-cols-2 gap-4">
//             <div className="border border-white/10 p-4 rounded hover:border-white/40 transition-colors">
//               <span className="font-mono text-sm">React</span>
//             </div>

//             <div className="border border-white/10 p-4 rounded hover:border-white/40 transition-colors">
//               <span className="font-mono text-sm">Next.js</span>
//             </div>

//             <div className="border border-white/10 p-4 rounded hover:border-white/40 transition-colors">
//               <span className="font-mono text-sm">Tailwind</span>
//             </div>

//             <div className="border border-white/10 p-4 rounded hover:border-white/40 transition-colors">
//               <span className="font-mono text-sm">JavaScript</span>
//             </div>

//             <div className="border border-white/10 p-4 rounded hover:border-white/40 transition-colors">
//               <span className="font-mono text-sm">HTML</span>
//             </div>

//             <div className="border border-white/10 p-4 rounded hover:border-white/40 transition-colors">
//               <span className="font-mono text-sm">CSS</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* tusul heseg */}
//       <section id="projects" className="py-32 px-6 md:px-12">
//         <h2 className="text-3xl font-bold mb-16 uppercase tracking-widest">
//           Projects
//         </h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="group border border-white/10 p-8 rounded-lg hover:bg-[#111111] transition-all">
//             <h3 className="text-2xl font-bold mb-2">E-Commerce Site</h3>
//             <p className="text-gray-400 mb-6">Багаараа хийсэн анхны төсөл</p>
//           </div>

//           <div className="group border border-white/10 p-8 rounded-lg hover:bg-[#111111] transition-all">
//             <h3 className="text-2xl font-bold mb-2">Portfolio</h3>
//             <p className="text-gray-400 mb-6">
//               Өөрийгөө танилцуулах, бие даан хийж байгаа миний энэ сайт
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-20 border-t border-white/10 text-center text-gray-500">
//         <p className="text-sm uppercase tracking-widest">Built with Love ♡  </p>
//       </footer>
//     </div>
//   );
// }
