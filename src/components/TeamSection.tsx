
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "FalleN",
    fullName: "Gabriel Toledo",
    role: "In-game Leader",
    image: "https://img-cdn.hltv.org/playerbodyshot/Wf26SO_o8nvnsLh0AqZXc5.png?ixlib=java-2.1.0&w=400&s=36b7189a4ae7b020d0acb087fd44777a",
    stats: { rating: 1.05, kd: 1.13, maps: 1995 }
  },
  {
    id: 2,
    name: "KSCERATO",
    fullName: "Kaike Cerato",
    role: "Rifler",
    image: "https://img-cdn.hltv.org/playerbodyshot/U6t0j2bJDKUR3mTI8rIqv7.png?ixlib=java-2.1.0&w=400&s=b5257c378b8122f415f21985855e95ca",
    stats: { rating: 1.19, kd: 1.25, maps: 1318 }
  },
  {
    id: 3,
    name: "yuurih",
    fullName: "Yuri Santos",
    role: "Rifler",
    image: "https://img-cdn.hltv.org/playerbodyshot/i6UGhkYxrhutAOmWZT0-8O.png?ixlib=java-2.1.0&w=400&s=2cd696f6ff4baf5680a43d537214b6eb",
    stats: { rating: 1.16, kd: 1.16, maps: 1411 }
  },
  {
    id: 4,
    name: "YEKINDAR",
    fullName: "Mareks Gaļinskis",
    role: "Entry Fragger",
    image: "https://img-cdn.hltv.org/playerbodyshot/rRclDPBXIMxFv2fv0dV0J0.png?ixlib=java-2.1.0&w=400&s=2b0f6209ca40efa081852b9d1d8e01c1",
    stats: { rating: 1.12, kd: 1.05, maps: 1489 }
  },
  {
    id: 5,
    name: "molodoy",
    fullName: "Danil Golubenko",
    role: "AWPer",
    image: "https://img-cdn.hltv.org/playerbodyshot/qNyAd_xVHTTmbCAKPx-jPk.png?ixlib=java-2.1.0&w=400&s=b128ede878e462107c70590202b14139",
    stats: { rating: 1.21, kd: 1.35, maps: 148 }
  }
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-furia-dark/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">NOSSO TIME</h2>
          <div className="w-20 h-1 bg-furia mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PlayerProps {
  player: {
    id: number;
    name: string;
    fullName: string;
    role: string;
    image: string;
    stats: {
      rating: number;
      kd: number;
      maps: number;
    };
  };
}

const PlayerCard: React.FC<PlayerProps> = ({ player }) => {
  return (
    <Card className="furia-card group">
      <div className="relative overflow-hidden">
        <img 
          src={player.image} 
          alt={player.name} 
          className="w-full aspect-[3/4] object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">{player.name}</h3>
              <p className="text-sm text-gray-400">{player.fullName}</p>
            </div>
            <div className="bg-furia px-2 py-1 text-xs rounded text-black">
              {player.role}
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="grid grid-cols-3 gap-2 text-center">
          <StatBox label="Rating" value={player.stats.rating} />
          <StatBox label="K/D" value={player.stats.kd} />
          <StatBox label="Maps" value={player.stats.maps} />
        </div>
      </CardContent>
    </Card>
  );
};

const StatBox: React.FC<{ label: string; value: number }> = ({ label, value }) => {
  return (
    <div className="bg-furia-dark p-2 rounded">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="font-bold text-white">{value}</p>
    </div>
  );
};

export default TeamSection;
