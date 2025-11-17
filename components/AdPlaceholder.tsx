import React, { useEffect, useRef } from 'react';

// Informa ao TypeScript sobre a existência do objeto adsbygoogle no window
declare global {
  interface Window {
    adsbygoogle?: object[];
  }
}

interface AdPlaceholderProps {
  slot: string;
  format?: string;
  responsive?: boolean;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  slot,
  format = 'auto',
  responsive = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Adiciona um pequeno atraso para garantir que o contêiner do anúncio
    // esteja visível e com as dimensões calculadas pelo navegador antes de
    // solicitar o anúncio. Isso corrige o erro "availableWidth=0" que
    // pode ocorrer em SPAs (Single Page Applications) quando o script do
    // AdSense é executado antes da finalização do layout.
    const timer = setTimeout(() => {
      // A verificação `offsetParent !== null` é uma forma eficaz de saber se o elemento está visível no DOM.
      if (containerRef.current && containerRef.current.offsetParent !== null) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
          console.error("Erro ao carregar o anúncio do AdSense:", err);
        }
      }
    }, 100); // Um atraso de 100ms é geralmente suficiente.

    return () => clearTimeout(timer);
  }, [slot]);

  return (
    // Um contêiner para o anúncio. O AdSense ajustará o tamanho.
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center justify-center bg-gray-800/50 rounded-lg text-center my-4 overflow-hidden"
      style={{ minHeight: '280px' }}
      key={slot} // Adiciona a key para forçar a remontagem se o slot mudar, garantindo um estado limpo.
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-3940256099942544" // Este é um ID de editor de TESTE
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      ></ins>
       <span className="text-xs text-gray-600 mt-1">Publicidade</span>
    </div>
  );
};

export default AdPlaceholder;