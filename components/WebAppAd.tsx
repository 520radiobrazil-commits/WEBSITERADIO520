import React from 'react';

// Icon for the install button
const DownloadIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const WebAppAd: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden relative border border-teal-500/30 shadow-lg shadow-teal-500/10">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1604999565976-89e9a5843c0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
      ></div>
      <div className="relative p-6 flex flex-col items-center text-center">
        <img 
            src="https://public-rf-upload.minhawebradio.net/249695/ad/1ccbd4ef8fcc652a7e0c5c0e6215d5ae.jpeg" 
            alt="RADIO520 Logo" 
            className="w-20 h-20 rounded-2xl mb-4 border-2 border-gray-700"
        />
        <h3 className="text-xl font-black text-white uppercase tracking-wider">
            Leve a Rádio 520 com você
        </h3>
        <p className="text-gray-300 text-sm mt-2 mb-6 max-w-xs">
            Instale nosso Web App e tenha acesso rápido a notícias, podcasts e à rádio ao vivo, direto na sua tela inicial.
        </p>

        <a
          href="https://radio520.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center text-base font-bold bg-teal-500 hover:bg-teal-400 text-gray-900 px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-teal-500 group"
        >
          <DownloadIcon className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
          ADICIONAR À TELA INICIAL
        </a>
        
        <p className="text-xs text-gray-500 mt-4">
            Grátis, rápido e não ocupa espaço.
        </p>
      </div>
    </div>
  );
};

export default WebAppAd;