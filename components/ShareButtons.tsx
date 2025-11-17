import React, { useState } from 'react';
import { Article } from '../types';

const XIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
);
const InstagramIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.314.935 20.644.522 19.854.218 19.092-.083 18.222-.285 16.942-.344 15.667-.401 15.261-.416 12-.416zM12 2.18c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.07c-1.17-.06-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.07-4.85c.055-1.17.249-1.805.413-2.227.217-.562.477.96.896-1.382.42-.419.819.679 1.381-.896.422-.164 1.057.36 2.227-.413C8.415 2.195 8.797 2.18 12 2.18zm0 5.438c-3.552 0-6.442 2.89-6.442 6.442s2.89 6.442 6.442 6.442 6.442-2.89 6.442-6.442-2.89-6.442-6.442-6.442zm0 10.899c-2.464 0-4.459-1.995-4.459-4.459s1.995-4.459 4.459-4.459 4.459 1.995 4.459 4.459-1.995 4.459-4.459-4.459zM16.949 5.232c-1.041 0-1.884.844-1.884 1.884s.844 1.884 1.884 1.884 1.884-.844 1.884-1.884-.843-1.884-1.884-1.884z" /></svg>;
const WhatsAppIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);
const TelegramIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Telegram</title><path d="M.436 11.832c-1.031.39-1.028 1.045.21 1.41l4.464 1.392 2.035 6.42c.322 1.016 1.385.968 1.82.043l2.843-6.08L18.604 21.1c.78.59 1.765.112 1.86-1.002L23.95 2.158c.11-1.21-.94-1.8-1.874-1.287L.436 11.832z"/></svg>
);
const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" /></svg>
);
const BlueskyIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Bluesky</title><path d="M18.523 2.535a.5.5 0 0 0-.625.04L13.5 6.764 9.083 2.575a.5.5 0 0 0-.625-.04l-5.92 5.347a.5.5 0 0 0 .01.76l5.05 4.149-5.05 4.149a.5.5 0 0 0-.01.76l5.92 5.347a.5.5 0 0 0 .625.04L13.5 18.236l4.417 4.189a.5.5 0 0 0 .625-.04l5.92-5.347a.5.5 0 0 0-.01-.76l-5.05-4.149 5.05-4.149a.5.5 0 0 0 .01-.76l-5.92-5.347Z"/></svg>
);

interface ShareButtonsProps {
  article: Article;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ article }) => {
  const [copyStatus, setCopyStatus] = useState('Copiar Link');
  
  // FIX: Use the specific article URL for sharing, not the homepage URL.
  const urlToShare = `https://radio520.com.br/noticia/${article.slug}`;

  const encodedUrl = encodeURIComponent(urlToShare);
  const encodedTitle = encodeURIComponent(article.title);
  const hashtags = article.hashtags?.map(tag => tag.replace('#', '')).join(',') || '';

  const shareLinks = {
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${hashtags}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    bluesky: `https://bsky.app/intent/compose?text=${encodedTitle}%20${encodedUrl}`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(urlToShare).then(() => {
      setCopyStatus('Copiado!');
      setTimeout(() => setCopyStatus('Copiar Link'), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      setCopyStatus('Falha ao copiar');
       setTimeout(() => setCopyStatus('Copiar Link'), 2000);
    });
  };

  return (
    <div className="flex items-center flex-wrap gap-3">
        <span className="text-sm font-semibold text-gray-300 mr-2">Compartilhe este artigo:</span>
        <a href={shareLinks.x} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-black hover:text-white transition-colors duration-200" aria-label="Compartilhar no X">
            <XIcon />
        </a>
        <a href="https://www.instagram.com/radio520oficial/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-pink-600 hover:text-white transition-colors duration-200" aria-label="Visitar nosso Instagram">
            <InstagramIcon />
        </a>
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-green-500 hover:text-white transition-colors duration-200" aria-label="Compartilhar no WhatsApp">
            <WhatsAppIcon />
        </a>
        <a href={shareLinks.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-sky-400 hover:text-white transition-colors duration-200" aria-label="Compartilhar no Telegram">
            <TelegramIcon />
        </a>
        <a href={shareLinks.bluesky} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-sky-500 hover:text-white transition-colors duration-200" aria-label="Compartilhar no Bluesky">
            <BlueskyIcon />
        </a>
        <button onClick={handleCopyLink} className="flex items-center text-sm font-semibold bg-gray-700 text-gray-300 px-4 py-2 rounded-full hover:bg-teal-500 hover:text-gray-900 transition-colors duration-200" aria-label="Copiar link do artigo">
            <LinkIcon />
            <span className="ml-2">{copyStatus}</span>
        </button>
    </div>
  );
};

export default ShareButtons;
