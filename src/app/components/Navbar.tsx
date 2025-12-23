const Navbar = () => {
  return (
    <nav className="h-20 bg-black w-full flex items-center justify-between px-10">
      <div className="text-white text-3xl font-bold">Uchral</div>
      <div className="flex gap-8 text-white text-lg">
        <a href="#home" className="hover:text-gray-400">
          Home
        </a>
        <a href="#about" className="hover:text-gray-400">
          About
        </a>
        <a href="#projects" className="hover:text-gray-400">
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
