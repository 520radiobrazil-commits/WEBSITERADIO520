import React from 'react';
import { useAppContext } from '../context/AppContext';

// Icons
const XIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>;
const InstagramIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.314.935 20.644.522 19.854.218 19.092-.083 18.222-.285 16.942-.344 15.667-.401 15.261-.416 12-.416zm-1.896 2.18c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.07c-1.17-.06-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.07-4.85c.055-1.17.249-1.805.413-2.227.217-.562.477.96.896-1.382.42-.419.819.679 1.381-.896.422-.164 1.057.36 2.227-.413C8.415 2.195 8.797 2.18 12 2.18zm0 5.438c-3.552 0-6.442 2.89-6.442 6.442s2.89 6.442 6.442 6.442 6.442-2.89 6.442-6.442-2.89-6.442-6.442-6.442zm0 10.899c-2.464 0-4.459-1.995-4.459-4.459s1.995-4.459 4.459-4.459 4.459 1.995 4.459 4.459-1.995 4.459-4.459-4.459zM16.949 5.232c-1.041 0-1.884.844-1.884 1.884s.844 1.884 1.884 1.884 1.884-.844 1.884-1.884-.843-1.884-1.884-1.884z"/></svg>;
const YouTubeIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
const MixcloudIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Mixcloud</title><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.18 15.75c-1.428 0-2.58-1.152-2.58-2.58s1.152-2.58 2.58-2.58c.4 0 .78.096 1.128.252l1.308-2.628a5.124 5.124 0 0 0-2.436-.612c-2.856 0-5.16 2.304-5.16 5.16s2.304 5.16 5.16 5.16a5.124 5.124 0 0 0 2.436-.612l-1.308-2.628c-.348.156-.726.252-1.128.252zm4.14-1.5c-.348 0-.684.06-.996.156l1.524-3.048c.3.108.624.156.96.156 1.428 0 2.58-1.152 2.58-2.58s-1.152-2.58-2.58-2.58-2.58 1.152-2.58 2.58c0 .24.036.48.096.708L8.1 12.3c-.6-.648-1.404-1.044-2.292-1.044-1.896 0-3.444 1.548-3.444 3.444s1.548 3.444 3.444 3.444 3.444-1.548 3.444-3.444c0-.3-.036-.588-.108-.876l2.256-1.584c.3.3.672.528 1.092.648l-1.524 3.048a2.59 2.59 0 0 1-.996-.156c-1.428 0-2.58 1.152-2.58 2.58s1.152 2.58 2.58 2.58 2.58-1.152 2.58-2.58-1.152-2.58-2.58-2.58zm5.508-2.76c-1.896 0-3.444 1.548-3.444 3.444s1.548 3.444 3.444 3.444 3.444-1.548 3.444-3.444-1.548-3.444-3.444-3.444z"/></svg>;

const Footer: React.FC = () => {
  const { handleNavigate } = useAppContext();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-200/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => handleNavigate('HOME')}>
              <img src="https://public-rf-upload.minhawebradio.net/249695/ad/1ccbd4ef8fcc652a7e0c5c0e6215d5ae.jpeg" alt="RADIO520 Logo" className="h-14 w-auto rounded-md" />
              <div className="ml-3">
                  <h1 className="text-3xl font-heading font-black tracking-tighter text-white leading-none">RADIO520</h1>
                  <span className="block text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent tracking-tight font-heading -mt-1">.COM.BR</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Jornalismo esportivo com análise, tecnologia e interatividade. A sua nova casa para o esporte.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-gray-300 mb-4">Navegação</h4>
            <nav className="space-y-2">
              <button onClick={() => handleNavigate('SPORTS')} className="text-gray-400 hover:text-white transition-colors block">Esportes</button>
              <button onClick={() => handleNavigate('SPECIALS')} className="text-gray-400 hover:text-white transition-colors block">Especiais</button>
              <button onClick={() => handleNavigate('ABOUT')} className="text-gray-400 hover:text-white transition-colors block">Sobre Nós</button>
            </nav>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-gray-300 mb-4">Legal</h4>
            <nav className="space-y-2">
              <button onClick={() => handleNavigate('PRIVACY')} className="text-gray-400 hover:text-white transition-colors block">Política de Privacidade</button>
              <button onClick={() => handleNavigate('TERMS')} className="text-gray-400 hover:text-white transition-colors block">Termos de Serviço</button>
               <a href="mailto:520radiobrazil@gmail.com" className="text-gray-400 hover:text-white transition-colors block">Anuncie Conosco</a>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-gray-300 mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/radio520oficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><XIcon /></a>
              <a href="https://instagram.com/radio520oficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon /></a>
              <a href="https://youtube.com/@RADIO520OFICIAL" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><YouTubeIcon /></a>
              <a href="https://www.mixcloud.com/radio520/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><MixcloudIcon /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} RADIO520.COM.BR. Todos os direitos reservados.</p>
           <p className="mt-2">Conteúdo gerado com o apoio de Inteligência Artificial.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
