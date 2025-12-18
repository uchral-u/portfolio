import React from "react";

const page = () => {
  return (
    <div>
      <div className="h-20 bg-black w-full m-0 flex items-center justify-between px-10">
        <div className=" text-white text-3xl font-bold ">Uchral</div>
        <div className="flex gap-8 text-white text-lg">
          <a href="#Home" className="hover:text-gray-400 transition-colors">
            Home
          </a>
          <a href="#About" className="hover:text-gray-400 transition-colors">
            About
          </a>
          <a href="#More" className="hover:text-gray-400 transition-colors">
            What i do
          </a>
        </div>
      </div>
      <section className="min-h-screen bg-[#222222] flex items-center justify-center p-8 font-sans">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-white space-y-6">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
              My Portfolio <br /> Website
            </h1>

            <p className="text-lg md:text-xl font-medium inline-block pb-1">
              Welcome to my portfolio
            </p>

            <div className="pt-4">
              <a
                href="#"
                className="bg-[#65B723] hover:bg-[#549a1d] text-white px-8 py-4 rounded-full text-xl font-bold transition-transform hover:scale-105 inline-block"
              >
                Go to portfolio
              </a>
            </div>
          </div>

          {/* <div className="flex-1 flex justify-center md:justify-end">
      <div className="w-72 h-72 md:w-120 md:h-120">
          <img 
            src="your-avatar-image.png" 
            alt="Portfolio Avatar" 
            className="w-full h-full object-contain"
          />
      </div>
    </div> */}
        </div>
      </section>

      <div>
        <h1 className=" text-white text-3xl md:text-3xl font-extrabold tracking-tight flex justify-center py-7">What I Do</h1>
        <div className="min-h-screen bg-[#222222] flex items-center justify-center p-8 font-sans">
        </div>
      </div>
    </div>
  );
};

export default page;
