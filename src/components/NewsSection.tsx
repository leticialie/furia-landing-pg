
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

const NEWS_ITEMS = [
  {
    id: 1,
    title: "Em vlog, FalleN mostra chegada de molodoy no bootcamp",
    excerpt: "O vídeo acompanha os primeiros dias de treino da equipe até a chegada de molodoy na Sérvia",
    category: "Vlog",
    date: "2 dias atrás",
    image: "https://i3.ytimg.com/vi/trxObYSEBxA/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "FURIA, MIBR, ODDIK e paiN conhecem adversários da estreia na PGL Astana 2025",
    excerpt: "O torneio começa no dia 10 de maio e termina no dia 18 do mesmo mês",
    category: "Campeonatos",
    date: "2 dias atrás",
    image: "https://preview.redd.it/pgl-astana-2025-directly-invited-teams-v0-dr1xdtqcltne1.png?auto=webp&s=b4fe7703a645bd42cfd566f6b2c7c8d82ee9e083"
  },
  {
    id: 3,
    title: "FURIA apresenta ex-Falcons como novo auxiliar técnico",
    excerpt: "Cazaque também defendeu AVANGAR e Winstrike enquanto jogador",
    category: "Roster",
    date: "1 semana atrás",
    image: "https://static.draft5.gg/news/2025/04/30130546/AVANGAR-KrizzeN-IEM-Katowice-Major-2019-1.jpg"
  },
];

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">ÚLTIMAS NOTÍCIAS</h2>
          <a href="#" className="flex items-center text-furia hover:text-furia-light">
            Ver todas <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ITEMS.map(item => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface NewsItemProps {
  item: {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
  };
}

const NewsCard: React.FC<NewsItemProps> = ({ item }) => {
  return (
    <Card className="furia-card overflow-hidden h-full group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-center mb-3">
          <Badge variant="outline" className="border-furia text-furia">
            {item.category}
          </Badge>
          <span className="text-xs text-gray-400">{item.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
        <p className="text-gray-400">{item.excerpt}</p>
      </CardContent>
    </Card>
  );
};

export default NewsSection;
