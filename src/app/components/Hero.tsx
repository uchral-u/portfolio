// "use client";

// const Hero = () => {
//   return (
//     <section className="min-h-screen bg-[#222222] flex items-center justify-center p-8">
//       <div className="max-w-6xl w-full text-white">
//         <h1 className="text-6xl font-extrabold">
//           My Portfolio <br /> Website
//         </h1>
//         <p className="text-xl mt-4">Welcome to my portfolio</p>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// "use client";

// import React from "react";
// import Image from "next/image";
// // Lucide icons-ийг дуудаж байна
// import { Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";

// export default function Portfolio() {
//   // Чадваруудыг иконтой нь массив болгож бэлдлээ
//   const skills = [
//     { name: "React", logo: "https://simpleicons.org/icons/react.svg", color: "#61DAFB" },
//     { name: "Next.js", logo: "https://simpleicons.org/icons/nextdotjs.svg", color: "#FFFFFF" },
//     { name: "Tailwind", logo: "https://simpleicons.org/icons/tailwindcss.svg", color: "#06B6D4" },
//     { name: "JavaScript", logo: "https://simpleicons.org/icons/javascript.svg", color: "#F7DF1E" },
//     { name: "HTML", logo: "https://simpleicons.org/icons/html5.svg", color: "#E34F26" },
//     { name: "CSS", logo: "https://simpleicons.org/icons/css3.svg", color: "#1572B6" },
//   ];

//   return (
//     <div className="bg-[#111111] text-white min-h-screen font-sans selection:bg-gray-700">
//       {/* NAVBAR */}
//       <nav className="h-20 border-b border-white/10 flex items-center justify-between px-6 md:px-12 sticky top-0 bg-black/80 backdrop-blur-md z-50">
//         <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
//           <Code2 className="text-white" /> UCHRAL
//         </div>
//         <div className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-widest">
//           <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
//           <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
//           <a href="#projects" className="hover:text-gray-400 transition-colors">Projects</a>
//         </div>
//       </nav>

//       {/* HOME */}
//       <section id="home" className="min-h-[calc(100vh-80px)] flex items-center px-6 md:px-12">
//         <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
//           <div>
//             <p className="text-gray-400 font-mono mb-4 italic">// This is my portfolio</p>
//             <h1 className="text-5xl md:text-8xl font-black leading-none mb-6">
//               I AM <span className="text-gray-500">UCHRAL</span>
//             </h1>
//             <p className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
//               Би бол frontend хөгжүүлэгч болох гээд хичээж байгаа хүн
//             </p>
            
//             {/* Social Icons */}
//             <div className="flex gap-6 mb-10">
//               <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
//                 <Github size={20} />
//               </a>
//               <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
//                 <Linkedin size={20} />
//               </a>
//               <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
//                 <Mail size={20} />
//               </a>
//             </div>

//             <a href="#projects" className="inline-block bg-white text-black rounded-full px-10 py-4 font-bold uppercase hover:bg-gray-200 transition-all text-sm tracking-widest">
//               See My Work
//             </a>
//           </div>

//           <div className="flex justify-center md:justify-end">
//             <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
//               <Image
//                 src="/picsart.png"
//                 alt="Uchral profile"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" className="py-32 px-6 md:px-12 bg-[#0c0c0c]">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
//           <div>
//             <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest border-l-4 border-white pl-6">
//               About Me
//             </h2>
//             <p className="text-gray-400 text-lg leading-relaxed mb-6">
//               Миний гол зорилго өөртөө зориулж <span className="text-white italic underline">ecommerce</span> цахим хуудас хийж
//               борлуулалтаа өсгөх юм. Одоогоор Erxes Academy-д сурсан зүйлс:
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             {skills.map((skill) => (
//               <div
//                 key={skill.name}
//                 className="group border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-all flex items-center gap-4"
//               >
//                 <img 
//                   src={skill.logo} 
//                   alt={skill.name} 
//                   className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all"
//                 />
//                 <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROJECTS */}
//       <section id="projects" className="py-32 px-6 md:px-12">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold mb-16 uppercase tracking-widest">
//             Projects
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="group border border-white/10 p-10 rounded-2xl hover:bg-[#1a1a1a] transition-all relative">
//               <div className="mb-4 text-gray-500 group-hover:text-white transition-colors">
//                 <ExternalLink size={24} />
//               </div>
//               <h3 className="text-2xl font-bold mb-2">E-Commerce Site</h3>
//               <p className="text-gray-400">Багаараа хийсэн анхны төсөл</p>
//             </div>

//             <div className="group border border-white/10 p-10 rounded-2xl hover:bg-[#1a1a1a] transition-all relative">
//               <div className="mb-4 text-gray-500 group-hover:text-white transition-colors">
//                 <ExternalLink size={24} />
//               </div>
//               <h3 className="text-2xl font-bold mb-2">Portfolio</h3>
//               <p className="text-gray-400">Өөрийгөө танилцуулах бие даасан төсөл</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="py-20 border-t border-white/5 text-center bg-black">
//         <p className="text-xs uppercase tracking-[0.5em] text-gray-600">Built with Love ♡ 2024</p>
//       </footer>
//     </div>
//   );
// }