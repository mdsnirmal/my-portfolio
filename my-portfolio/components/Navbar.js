import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black py-4 shadow-md">
      <div className="container mx-auto flex justify-center space-x-10">
        <Link href="#home" className="nav-link">Home</Link>
        <Link href="#about" className="nav-link">About</Link>
        <Link href="#services" className="nav-link">Services</Link>
        <Link href="#portfolio" className="nav-link">Portfolio</Link>
        <Link href="#contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
