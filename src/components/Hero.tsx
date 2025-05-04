
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, PanelTop } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://img-cdn.hltv.org/gallerypicture/ZaW6QE7PHJDRlWZId4mQHL.jpg?ixlib=java-2.1.0&w=1200&s=ca4914350ef57342b3929aae0ed92df2')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-furia-dark via-furia-dark/90 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center px-4 pt-20">
        <div className="max-w-xl animate-slide-in">
          <div className="inline-block border-2 border-white px-3 py-1 mb-6">
            <span className="text-white font-bold">FURIA ESPORTS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            A ELITE DO <span className="text-white">CS BRASILEIRO</span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-8">
            Somos uma das maiores organizações de esports do Brasil. Nossa missão é desenvolver
            talentos e conquistar títulos mundiais.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href='#schedule'>
            <Button className="bg-white hover:bg-white/90 text-black">
              PRÓXIMOS JOGOS <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            </a>
            <a href='#team'>
            <Button variant="outline" className="border-white text-white hover:bg-white/90">
              CONHEÇA O TIME
            </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Team Logo Silhouette */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
        <PanelTop className="w-full h-full text-white" />
      </div>
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
