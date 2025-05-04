
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MATCHES = [
  {
    id: 1,
    opponent: "The MongolZ",
    logo: "https://img-cdn.hltv.org/teamlogo/bRk2sh_tSTO6fq1GLhgcal.png?ixlib=java-2.1.0&w=200&s=d82e930fcea873b51ceab34c1a338b02",
    date: "10 de Maio, 2025",
    time: "05:00",
    tournament: "PGL Astana 2025",
    isUpcoming: true
  },
  {
    id: 2,
    opponent: "The MongolZ",
    logo: "https://img-cdn.hltv.org/teamlogo/bRk2sh_tSTO6fq1GLhgcal.png?ixlib=java-2.1.0&w=200&s=d82e930fcea873b51ceab34c1a338b02",
    date: "9 de Abril, 2025",
    time: "09:50",
    tournament: "PGL Bucharest 2025",
    isUpcoming: false,
    result: "Derrota 0-2"
  },
  {
    id: 3,
    opponent: "Virtus.pro",
    logo: "https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875",
    date: "8 de Abril, 2025",
    time: "06:05",
    tournament: "PGL Bucharest 2025",
    isUpcoming: false,
    result: "Derrota 0-2"
  }
];

const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-furia-dark/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">PRÓXIMOS JOGOS</h2>
          <div className="w-20 h-1 bg-furia mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {MATCHES.map(match => (
            <MatchCard key={match.id} match={match} />
          ))}
          
          <div className="text-center pt-8">
            <Button className="bg-furia hover:bg-furia/90 text-black">
              VER CALENDÁRIO COMPLETO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface MatchProps {
  match: {
    id: number;
    opponent: string;
    logo: string;
    date: string;
    time: string;
    tournament: string;
    isUpcoming: boolean;
    result?: string;
  };
}

const MatchCard: React.FC<MatchProps> = ({ match }) => {
  return (
    <Card className={`furia-card ${match.isUpcoming ? 'border-furia/30' : ''}`}>
      <CardContent className="p-0">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 mr-4">
              <img 
                src="https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c" 
                alt="FURIA" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-furia font-bold min-w-40">FURIA</span>
              <span className="text-xs text-gray-400">{match.tournament}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            {match.isUpcoming ? (
              <>
                <div className="text-white font-mono bg-furia/20 px-3 py-1 rounded mb-1">
                  {match.time}
                </div>
                <div className="text-xs text-gray-400">{match.date}</div>
              </>
            ) : (
              <div className="text-furia font-semibold">{match.result}</div>
            )}
          </div>
          
          <div className="flex items-center">
            <div className="flex flex-col items-end mr-4">
              <span className="text-white min-w-40 font-bold text-right">{match.opponent}</span>
              <span className="text-xs text-gray-400">Adversário</span>
            </div>
            <div className="w-12 h-12 mr-4">
              <img 
                src={match.logo} 
                alt={match.opponent} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {match.isUpcoming && (
          <div className="bg-furia px-4 py-2 text-black text-sm text-center">
            {match.isUpcoming ? 'EM BREVE' : 'CONCLUÍDO'}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ScheduleSection;
