"use client";

import React from "react";
import Image from "next/image";
// Lucide icons-ийг дуудаж байна
import { Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";

export default function Portfolio() {
  // Чадваруудыг иконтой нь массив болгож бэлдлээ
  const skills = [
    {
      name: "React",
      logo: "data:image/png;base64,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",
      bg: "white",
    },
    {
      name: "Next.js",
      logo: "data:image/png;base64,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",
      color: "#FFFFFF",
    },
    {
      name: "Tailwind",
      logo: "data:image/png;base64,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",
      color: "#06B6D4",
    },
    {
      name: "JavaScript",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACUCAMAAACtIJvYAAAAjVBMVEXw208yMzDw2kvy4XXx3Fby4G4vMDDs2E7y3U8hJi9LSDP24FD65FHizkwdIi4mKS9CQDH/6VIqLC8ZHy4PGC1ZVTXNu0jn0028rEUAACxOSzOWij45OTE8PDETGy5iXDahlEDWxEqOgz0ADC1rZDd/djsDEi2pm0KEezt3bznFtEdxajn05Yy0pUNTUDSRKhWtAAAFtUlEQVR4nO2a/ZuqKhDH9Z57EQNFsbTNXtTK3k7+/3/e1bZdAdHIk27Pefj+uMvkx3FgZgDj1xvqt/HPG+o/4w2lqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdSlqdT1N1NBTh3DEMZ+JYxRx7gXUTmcWpAQjNJDtis8b7I5xdc0QmhIKmgtPUYzS+IFiPF1PwnWNqEAAErcqVvszxjLHfYaKhfUohMJFbIS0ybAZAWIu7paUn+9hspmH9akgv58NuWR7mPXmxT/EBWE2ZZKmCrR/ICarh2BCuKd28JUyY2b3hqeClobuxWpUp41vDU8lX/s8tTNWwcx5AenQvPtAyjT/AgFrKGpYFTIJh8vWgihODQVTtYPoUwzOPLOGpgKYiounXYpwi8UNDiO6is0D7jn2+B4OIfz5EII46kiFBaHganwkXBQmxRVwjCdfdlQN2mknWGpyrUKcFDf2Rjh7BZwYLpLmyl6YCrHY6iAmTIRB/ellW0eDEl+HpgqZT8gPbFOgUZBgpMjrWUGpgrZYCd8xkMhnUsy8/BUiKOyEyTYtRWjo/oqExaA1sp96LhiMzPdqf7i0FRLbmU4ywrP8an43AxWkRrW0Nn5wmU86oUts25UKhxzGcekdmy1dFsjUqF0avKyaew89NfQX9BfNoq+YJmlfjfY0FToGohUZY0VzM6dH3L4Cnkhq5BLrsRo5xq+mwhzCVU5zA2y1gAbvvPCRzHgv+Qus5bvOELvjPbN0LoPtfNYmqHH6Ohh0YZV+mtxlrhrlN0PdJTH1m14fooa7hpnpwjFQdumTOmumTN6R/8pnHZ8ReqKtcRIVAayDoHd1tsDMxy1d2YGYSteBi1cwOY/4mhUVXQ5MSXy+CIbzmhEqspfxnW2JjIsN2adNSpV5S8r3AFJgAGXtRqZquLCTuw1d5RdtgEaneoGFiWe6C+wiGqzn6C6TciECvFFz3Vk/QzVbUIKW8tu8vNU5boK+VqCXN6BquznZ+ziBbyxqeSYaM4tqcEfRrtYqTysZELpESWMVuxE/KgH9aCCOBLKOoutgcGCpy7n236bSDt5zHUaH9YfUKFoR/guADofLFXBJVpkJYAAIJ4+vJYK+cnKDvhXR2e21AQz5p9fJ4N0CZtY0PI4KqMnFUTnhVv9Uso+A2fsgkhOuB4ebu7FC50162A+2gHoF+1lhGSflS5ZMC0AtCbsK7tfjqyGk+95YBdQ3OlDBUtFi14rQ1lOTr8eYl/qIMAZd9SW3zMHjA5rdm5Sc84dyiOLP8y0j32ocDpj1mJ7Y/mouryA/AN//pffZygMP4QjHHef+vh+5wH5YcEnQvfagwrv+YfQfH9O0zQ8LPk2gey+nAj3Yn1HtpM4TB3HScPEywVmz+kRV/jQ2Ilag6XpiqV4nWSh0zyEo25gepPJqmFWpsE+9RU0Ns2SW1JTrupXxnPp2W516aH515yd1upxhc5tuxis7D3zyujhkXNtd+lZt/txe6NZ+4HNRg/uDLB2jIufo4LWrvsKgNk4boeWIlY+790PQrR4gLXeiyslvjx2cPUyvN1TGQeKVa0ge9Pc+DC6Nj4+BdbihYZn8+Cl48h9epKUd9A/F9KbO7WjVo2DlCdrBgivpMVdhMbymhMZsdm68VGaXRobRc/XV9jJmkugCezpLmzbEy7LxHiSEwkYcIOLzOz5qg9CJ14Bl3wvhYDaZHkKJQVUbYOs+aVkIPXthtLKNr0slZr1qdshhmFyWtDtdptvt/bkEs8j3MH0yYWjc7KfLdelUWkVeJvjIYQvvUEHEYJW5JTJOXUiy0BKB1mfRqVVmN6sYPs1yP6dl8JNzC6jTrO/+Rbrq6Wp1KWp1KWp1PW2VP++oX79D4aWbLW+/pvHAAAAAElFTkSuQmCC",
      color: "#F7DF1E",
    },
    {
      name: "HTML",
      logo: "https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png",
      color: "#E34F26",
    },
    {
      name: "CSS",
      logo: "data:image/png;base64,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",
      color: "#1572B6",
    },
  ];

  return (
    <div className="bg-[#111111] text-white min-h-screen font-sans selection:bg-gray-700">
      {/* NAVBAR */}
      <nav className="h-20 border-b border-white/10 flex items-center justify-between px-6 md:px-12 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <Code2 className="text-white" /> UCHRAL
        </div>
        <div className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-widest">
          <a href="#home" className="hover:text-gray-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-gray-400 transition-colors">
            Projects
          </a>
        </div>
      </nav>

      {/* HOME */}
      <section
        id="home"
        className="min-h-[calc(100vh-80px)] flex items-center px-6 md:px-12"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          <div>
            <h1 className="text-5xl md:text-8xl font-black leading-none mb-6">
              I AM <span className="text-gray-500">UCHRAL</span>
            </h1>
            <p className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
              Би бол frontend хөгжүүлэгч болох гээд хичээж байгаа хүн
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 mb-10">
              <a
                href="#"
                className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <Mail size={20} />
              </a>
            </div>

            <a
              href="#projects"
              className="inline-block bg-white text-black rounded-full px-10 py-4 font-bold uppercase hover:bg-gray-200 transition-all text-sm tracking-widest"
            >
              See My Work
            </a>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/picsart.png"
                alt="Uchral profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="pt-[228px] pb-[228px] px-6 md:px-12 bg-[#0c0c0c]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest">
            About Me
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Миний гол зорилго өөртөө зориулж{" "}
            <span className="text-white italic underline">ecommerce</span> цахим
            хуудас хийж борлуулалтаа өсгөх юм. Одоогоор Erxes Academy-д сурсан
            зүйлс:
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32 px-6 md:px-12 h-160 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 uppercase tracking-widest text-center">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-4"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all"
                />
                <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
{/* 
      <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/web1.png"
                alt="Uchral profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div> */}
      <section id="projects" className="py-32 h-160 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 uppercase tracking-widest">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group border border-white/10 p-10 rounded-2xl hover:bg-[#1a1a1a] transition-all relative">
              <div className="mb-4 text-gray-500 group-hover:text-white transition-colors">
                <ExternalLink size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">E-Commerce Site</h3>
              <p className="text-gray-400">Багаараа хийсэн анхны төсөл</p>
            </div>

            <div className="group border border-white/10 p-10 rounded-2xl hover:bg-[#1a1a1a] transition-all relative">
              <div className="mb-4 text-gray-500 group-hover:text-white transition-colors">
                <ExternalLink size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Portfolio</h3>
              <p className="text-gray-400">
                Өөрийгөө танилцуулах бие даасан төсөл
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center bg-[#0c0c0c] ">
        <p className="text-xs uppercase tracking-[0.5em] text-gray-600">
          Built with Love ♡ 2024
        </p>
      </footer>
    </div>
  );
}
