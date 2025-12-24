"use client";

import React from "react";
import Image from "next/image";
import {
  Mail,
  ExternalLink,
  Code2,
  Globe,
  Cpu,
  Palette,
  FileCode,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="bg-[#111111] text-white min-h-screen font-sans selection:bg-gray-700 scroll-smooth">
      <nav className="h-20 border-b border-white/10 flex items-center justify-between px-6 md:px-12 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <Code2 className="text-white" /> UCHRAL
        </div>
        <div className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-widest text-gray-400">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-[calc(100vh-80px)] flex items-center px-6 md:px-12"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          <div>
            <h1 className="text-5xl md:text-8xl font-black leading-none mb-6 text-white uppercase">
              I AM <span className="text-gray-500">UCHRAL</span>
            </h1>
            <p className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
              Би бол frontend хөгжүүлэгч болох гээд хичээж байгаа хүн
            </p>
            <div className="flex gap-6 mb-10">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://mail.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all text-white"
              >
                <Mail size={20} />
              </a>
            </div>
            <a
              href="#projects"
              className="inline-block bg-white text-black rounded-full px-10 py-4 font-bold uppercase hover:bg-gray-200 transition-all text-sm tracking-widest"
            >
              See My Projects
            </a>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500 bg-zinc-900 shadow-2xl">
              <Image
                src="/picsart.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-40 px-6 md:px-12 bg-[#0c0c0c]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest text-white">
            About Me
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Миний гол зорилго өөртөө зориулж{" "}
            <span className="text-white italic underline">ecommerce</span> цахим
            хуудас хийж борлуулалтаа өсгөх юм. Одоогоор Erxes Academy-д сурч,
            өөрийн чадвараа тасралтгүй хөгжүүлж байна.
          </p>
        </div>
      </section>

      <section id="skills" className="py-32 px-6 md:px-12 bg-black text-center">
        <h2 className="text-3xl font-bold mb-16 uppercase tracking-widest text-white">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-white">
          <div className="group border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-4">
            <Cpu className="text-blue-400" />
            <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">
              React
            </span>
          </div>
          <div className="group border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-4">
            <Globe className="text-white" />
            <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">
              Next.js
            </span>
          </div>
          <div className="group border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-4">
            <Palette className="text-cyan-400" />
            <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">
              Tailwind
            </span>
          </div>
          <div className="group border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-4">
            <FileCode className="text-yellow-400" />
            <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">
              JavaScript
            </span>
          </div>
          <div className="group border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-4">
            <Code2 className="text-orange-500" />
            <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">
              HTML
            </span>
          </div>
          <div className="group border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-4">
            <Palette className="text-blue-500" />
            <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">
              CSS
            </span>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 uppercase tracking-widest text-center text-white">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <a
              href="https://project-group1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/50 hover:bg-zinc-800 transition-all duration-300"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/web1.png"
                  alt="Project 1"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4 text-gray-400 group-hover:text-white transition-colors text-2xl font-bold">
                  <h3>E-Commerce Site</h3>
                  <ExternalLink size={20} />
                </div>
                <p className="text-gray-400">Багаараа хийсэн анхны төсөл</p>
              </div>
            </a>
            <a
              href="#home"
              className="group block border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/50 hover:bg-zinc-800 transition-all duration-300"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/web2.png"
                  alt="Project 2"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4 text-gray-400 group-hover:text-white transition-colors text-2xl font-bold">
                  <h3>Portfolio</h3>
                  <ExternalLink size={20} />
                </div>
                <p className="text-gray-400">
                  Өөрийгөө танилцуулах бие даасан төсөл
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 text-center bg-[#0c0c0c]">
        <p className="text-xs uppercase tracking-[0.5em] text-gray-600">
          Built with Love ♡ 2025
        </p>
      </footer>
    </div>
  );
}
