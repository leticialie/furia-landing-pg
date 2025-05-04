
import React from 'react';
import { SocialIcon } from 'react-social-icons'


const Footer: React.FC = () => {
  return (
    <footer className="bg-furia-dark pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-furia font-bold text-2xl mr-2">FURIA</div>
              <img
                alt="Furia Logo"
                src="https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Somos uma das maiores organizações de esports do Brasil. Nossa missão é desenvolver
              talentos e conquistar títulos mundiais.
            </p>
            <div className="flex space-x-4">
            <SocialIcon url="https://www.facebook.com/furiagg/" target='_blank'/>
            <SocialIcon url="https://x.com/FURIA" target='_blank'/>
            <SocialIcon url="https://www.instagram.com/furiagg/" target='_blank'/>
            <SocialIcon url="https://www.youtube.com/@FURIAggCS" target='_blank'/>
            <SocialIcon url="https://www.twitch.tv/furiatv" target='_blank'/>
             
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#" text="Sobre Nós" />
              <FooterLink href="#team" text="Time" />
              <FooterLink href="#news" text="Notícias" />
              <FooterLink href="#schedule" text="Calendário" />
              <FooterLink href="#store" text="Loja" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <FooterLink href="#" text="contato@furia.gg" />
              <FooterLink href="#" text="Imprensa" />
              <FooterLink href="#" text="Parcerias" />
              <FooterLink href="#" text="Carreiras" />
              <FooterLink href="#" text="FAQ" />
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FURIA Esports. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-furia">Termos de Uso</a>
            <a href="#" className="hover:text-furia">Política de Privacidade</a>
            <a href="#" className="hover:text-furia">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => {
  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-furia transition-colors">
        {text}
      </a>
    </li>
  );
};





export default Footer;
