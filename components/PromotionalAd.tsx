import React from 'react';

const ArrowRightIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);


const PromotionalAd: React.FC = () => {
  const adUrl = 'https://www.mixcloud.com/radio520/radio-520-dance-club-by-brako-dj-ep34/';

  return (
    <a
      href={adUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-800 rounded-lg overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-1"
    >
      <div className="relative">
        <img
          className="w-full h-60 object-cover"
          src="https://public-rf-upload.minhawebradio.net/249695/ad/bda4a07d7529383572a0c9cb1649bd0d.png"
          alt="Promotional Advertisement"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute top-3 right-3 bg-teal-500 text-gray-900 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">
          MIXCLOUD
        </div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-white font-bold text-xl leading-tight mb-2">
            AQUI, SÓ TOCA BATIDÃO
          </h3>
          <div className="inline-flex items-center text-sm font-semibold bg-gray-200/90 text-gray-900 px-4 py-2 rounded-md group-hover:bg-white transition-colors duration-200">
              OUÇA AQUI
              <ArrowRightIcon className="w-5 h-5 ml-2" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default PromotionalAd;