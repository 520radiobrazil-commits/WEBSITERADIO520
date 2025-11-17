import React from 'react';
import { useAppContext } from '../context/AppContext';

// Icons
const XIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>;
const InstagramIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.314.935 20.644.522 19.854.218 19.092-.083 18.222-.285 16.942-.344 15.667-.401 15.261-.416 12-.416zM12 2.18c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.07c-1.17-.06-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.07-4.85c.055-1.17.249-1.805.413-2.227.217-.562.477.96.896-1.382.42-.419.819.679 1.381-.896.422-.164 1.057.36 2.227-.413C8.415 2.195 8.797 2.18 12 2.18zm0 5.438c-3.552 0-6.442 2.89-6.442 6.442s2.89 6.442 6.442 6.442 6.442-2.89 6.442-6.442-2.89-6.442-6.442-6.442zm0 10.899c-2.464 0-4.459-1.995-4.459-4.459s1.995-4.459 4.459-4.459 4.459 1.995 4.459 4.459-1.995 4.459-4.459-4.459zM16.949 5.232c-1.041 0-1.884.844-1.884 1.884s.844 1.884 1.884 1.884 1.884-.844 1.884-1.884-.843-1.884-1.884-1.884z" /></svg>;
const FacebookIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>;

const Footer: React.FC = () => {
  const { handleNavigate } = useAppContext();
  
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center cursor-pointer mb-4" onClick={() => handleNavigate('HOME')}>
                <img src="https://public-rf-upload.minhawebradio.net/249695/ad/1ccbd4ef8fcc652a7e0c5c0e6215d5ae.jpeg" alt="RADIO520 Logo" className="h-12 w-12 rounded-md" />
                <div className="ml-3">
                    <h2 className="text-2xl font-heading font-black tracking-tighter text-white leading-none">RADIO520</h2>
                    <span className="block text-md font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent tracking-tight font-heading -mt-1">.COM.BR</span>
                </div>
            </div>
            <p className="text-sm">Sua fonte diária para as últimas notícias esportivas, destaques e análises aprofundadas.</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-heading mb-4">Seções</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNavigate('HOME')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => handleNavigate('ABOUT')} className="hover:text-white transition-colors">Sobre Nós</button></li>
              <li><a href="mailto:520radiobrazil@gmail.com" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-heading mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNavigate('PRIVACY')} className="hover:text-white text-left transition-colors">Política de Privacidade</button></li>
              <li><button onClick={() => handleNavigate('TERMS')} className="hover:text-white text-left transition-colors">Termos de Serviço</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-heading mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/radio_520" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Siga-nos no X"><XIcon /></a>
              <a href="https://www.instagram.com/radio520oficial/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Siga-nos no Instagram"><InstagramIcon /></a>
              <a href="https://www.facebook.com/share/1BS7uVusG5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Siga-nos no Facebook"><FacebookIcon /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} RADIO520.COM.BR. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;