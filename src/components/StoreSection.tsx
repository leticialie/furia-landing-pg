
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const STORE_ITEMS = [
  {
    id: 1,
    name: "Camiseta Furia Oficial '24 Preta",
    price: "R$ 259,00",
    image: "https://furiagg.fbitsstatic.net/img/p/camiseta-furia-oficial-24-preta-150177/336897-7.jpg?w=1280&h=1280&v=202502121640"
  },
  {
    id: 2,
    name: "Moletom Polo Furia x Zor Preto",
    price: "R$ 299,00",
    image: "https://furiagg.fbitsstatic.net/img/p/moletom-polo-furia-x-zor-preto-150248/337375-1.jpg?w=1280&h=1280&v=no-value"
  },
  {
    id: 3,
    name: "Sacochila Furia Preta",
    price: "R$ 179,00",
    image: "https://furiagg.fbitsstatic.net/img/p/sacochila-furia-preta-150267/337499-1.jpg?w=1280&h=1280&v=202504101318"
  },
  {
    id: 4,
    name: "Boné Furia Preto",
    price: "R$ 119,00",
    image: "https://furiagg.fbitsstatic.net/img/p/bone-furia-preto-150142/336658-1.jpg?w=1280&h=1280&v=no-value"
  }
];

const StoreSection: React.FC = () => {
  return (
    <section id="store" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">LOJA OFICIAL</h2>
          <a href="#" className="flex items-center text-furia hover:text-furia-light">
            Ver todos <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORE_ITEMS.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card className="furia-card group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        
      </div>
      <CardContent className="p-4">
        <h3 className="text-white font-medium mb-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-furia font-bold">{product.price}</span>
          <Button variant="outline" size="sm" className="border-furia text-furia hover:bg-furia hover:text-black">
            COMPRAR
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoreSection;
