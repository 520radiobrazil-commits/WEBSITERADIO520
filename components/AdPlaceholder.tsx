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
    const timer = setTimeout(() => {
      if (containerRef.current && containerRef.current.offsetParent !== null) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
          console.error("Erro ao carregar o anúncio do AdSense:", err);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [slot]);

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center justify-center bg-gray-800/50 rounded-lg text-center my-4 overflow-hidden"
      style={{ minHeight: '280px' }}
      key={slot}
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