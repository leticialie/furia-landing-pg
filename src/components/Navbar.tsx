
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-furia-dark/90 backdrop-blur-md border-b border-furia/30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-furia font-bold text-2xl mr-2">FURIA</div>
          <img
                alt="Furia Logo"
                src="https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c"
                className="h-8 w-auto"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavItem title="Home" href="#" />
          <NavItem title="Time" href="#team" />
          <NavItem title="Notícias" href="#news" />
          <NavItem title="Jogos" href="#schedule" />
          <NavItem title="Loja" href="#store" />
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        <Button variant="outline" className="hidden md:flex items-center border-furia text-furia hover:bg-furia hover:text-black">
          Cadastrar <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-furia-dark border-t border-furia/30 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <NavItem title="Home" href="#" mobile />
              <NavItem title="Time" href="#team" mobile />
              <NavItem title="Notícias" href="#news" mobile />
              <NavItem title="Jogos" href="#schedule" mobile />
              <NavItem title="Loja" href="#store" mobile />
              <Button variant="outline" className="w-full border-furia text-furia hover:bg-furia hover:text-white">
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavItemProps {
  title: string;
  href: string;
  mobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ title, href, mobile }) => {
  return (
    <a 
      href={href}
      className={`font-medium text-white hover:text-furia transition-colors ${mobile ? 'block py-2' : ''}`}
    >
      {title}
    </a>
  );
};

export default Navbar;
