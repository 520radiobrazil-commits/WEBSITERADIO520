import React, { useState } from 'react';
import LikeButton from './LikeButton';

// Icons
const SpeechBubbleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    </svg>
);
const XIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>;
const WhatsAppIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);
const BlueskyIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Bluesky</title><path d="M18.523 2.535a.5.5 0 0 0-.625.04L13.5 6.764 9.083 2.575a.5.5 0 0 0-.625-.04l-5.92 5.347a.5.5 0 0 0 .01.76l5.05 4.149-5.05 4.149a.5.5 0 0 0-.01.76l5.92 5.347a.5.5 0 0 0 .625.04L13.5 18.236l4.417 4.189a.5.5 0 0 0 .625-.04l5.92-5.347a.5.5 0 0 0-.01-.76l-5.05-4.149 5.05-4.149a.5.5 0 0 0 .01-.76l-5.92-5.347Z"/></svg>
);

const Resenha520Card: React.FC = () => {
    // Card Content
    // FIX: Explicitly type imageUrl as string to prevent TypeScript from inferring
    // a literal type, which causes a comparison error with an empty string.
    const imageUrl: string = "https://www.motoo.com.br/fotos/2025/11/960_720/diogo-moreira-9_14112025_66460_960_720.jpg";
    const title = "Diogo Moreira: O Título da Moto2 já tem dono";
    const author = "Rudy Da Galera";
    const subtitle = "Opinião sem papas na língua";
    const content = [
      "Mano… vamos falar a real: o título da Moto2 já tem dono, e ele atende por Diogo Moreira. A etapa de Valencia virou protocolo, porque o brasileiro chega com 24 pontos de vantagem e um rival que só pode torcer por um milagre.",
      "A matemática é brutal: González precisa vencer. Não é 'brigar pela vitória', é vencer. Ponto. Se ele não vencer, Diogo é campeão mesmo se assistir a corrida da arquibancada.",
      "E mesmo no único cenário onde o espanhol vence, Moreira ainda tem caminho de sobra: chegar entre os 14 primeiros já garante o título. O risco real só existe se ele ficar fora dos pontos.",
      "O paddock pode inventar tensão, mas a verdade é uma só: Diogo Moreira chega em Valencia com o campeonato na mão. Valencia 2025 não é uma final. É um carimbo."
    ];
    const footerText = "Se tem brasileiro brilhando, a gente tá de olho!";

    // Like Button State
    const [likes, setLikes] = useState(1950); // Initial likes count from the article
    const handleUpdateLikes = (id: string, newLikes: number) => {
        setLikes(newLikes);
    };

    // Share Button Logic
    const urlToShare = 'https://radio520.com.br/';
    const shareText = `Resenha 520 por Rudy Da Galera: ${title} #DiogoMoreira #Moto2 #Motovelocidade`;
    const encodedUrl = encodeURIComponent(urlToShare);
    const encodedText = encodeURIComponent(shareText);

    const shareLinks = {
        x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodedText}`,
        bluesky: `https://bsky.app/intent/compose?text=${encodedText}`,
    };

    const validImageUrl =
      imageUrl?.trim() && imageUrl !== ""
        ? imageUrl
        : "/placeholder.jpg";

    return (
        <div className="bg-gray-800 rounded-lg p-4 border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
            <div className="flex items-center mb-4">
                <SpeechBubbleIcon className="h-6 w-6 mr-3 text-indigo-400"/>
                <div>
                    <h3 className="text-white font-bold text-lg uppercase tracking-wider">RESENHA 520</h3>
                    <span className="text-xs text-indigo-400 font-bold tracking-wider">por {author}</span>
                </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden mb-4">
                <img
                    src={validImageUrl}
                    alt={title}
                    className="w-full aspect-video object-cover rounded-lg"
                    onError={(e) => {
                        e.currentTarget.src = "/placeholder.jpg";
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                    <h4 className="text-2xl font-black text-white leading-tight drop-shadow-lg">
                        {title}
                    </h4>
                    <p className="text-indigo-400 font-semibold text-sm drop-shadow-md">{subtitle}</p>
                </div>
            </div>
            
            <div className="text-gray-300 text-sm space-y-3">
                {content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-700/50 flex items-center justify-between">
                <LikeButton 
                    articleId={"resenha-card-diogo-moreira"} // Static unique ID for this card
                    initialLikes={likes}
                    onUpdateLikes={handleUpdateLikes}
                />
                <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-400">Compartilhar:</span>
                     <a href={shareLinks.x} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full text-gray-300 hover:bg-black hover:text-white transition-colors duration-200" aria-label="Compartilhar no X">
                        <XIcon />
                    </a>
                    <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full text-gray-300 hover:bg-green-500 hover:text-white transition-colors duration-200" aria-label="Compartilhar no WhatsApp">
                        <WhatsAppIcon />
                    </a>
                    <a href={shareLinks.bluesky} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full text-gray-300 hover:bg-sky-500 hover:text-white transition-colors duration-200" aria-label="Compartilhar no Bluesky">
                        <BlueskyIcon />
                    </a>
                </div>
            </div>

            <p className="text-center text-indigo-400 text-xs font-bold italic mt-4 border-t border-gray-700 pt-3">
                {footerText}
            </p>
        </div>
    );
};

export default Resenha520Card;