import React, { useState, useEffect } from 'react';
import { Article } from '../types';

const ErrorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400 mb-2 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

const SpotifyIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 fill-current"><title>Spotify</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.835 17.402a.5.5 0 01-.69.158c-2.01-1.23-4.52-1.51-7.53-.824a.5.5 0 01-.545-.492c-.04-1.04.492-1.125.545-.492 3.255-.75 6.015-.42 8.28.945.24.148.33.465.182.705zm1.05-2.27a.625.625 0 01-.863.2c-2.31-1.42-5.685-1.845-8.385-.99-.623.18-1.192-.255-1.38-.87-.187-.623.255-1.192.87-1.38 3.12-.945 6.885-.45 9.585 1.125.27.165.375.525.203.81zm.12-2.58A.75.75 0 0118.06 15c-2.61-1.59-6.9-1.92-9.795-1.05-.75.225-1.5-.165-1.725-.915-.225-.75.165-1.5.915-1.725 3.36-.975 8.16-.6 11.16 1.26a.75.75 0 01.255 1.035z"/></svg>
);

interface AudioPlayerProps {
  article: Article;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ article }) => {
  if (!article.audioUrl) return null;

  const [playerState, setPlayerState] = useState<'loading' | 'loaded' | 'error'>('loading');

  const isSpotifyLink = article.audioUrl.includes('open.spotify.com/episode/');
  let spotifyEmbedUrl = '';

  if (isSpotifyLink) {
    try {
      const url = new URL(article.audioUrl);
      const episodeId = url.pathname.split('/').pop();
      if (episodeId) {
        spotifyEmbedUrl = `https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator&theme=0`;
      }
    } catch (error) {
      console.error("Invalid Spotify URL", error);
      return null;
    }
  }

  // Define um timeout para lidar com casos em que o iframe não carrega (ex: problemas de rede)
  useEffect(() => {
    setPlayerState('loading');

    const timer = setTimeout(() => {
      // Se o player ainda estiver 'carregando' após o timeout, muda para 'erro'
      setPlayerState(prevState => (prevState === 'loading' ? 'error' : prevState));
    }, 10000); // Timeout de 10 segundos

    return () => clearTimeout(timer);
    // FIX: The 'Article' type does not have an 'id' property. Changed to 'slug' which is the unique identifier.
  }, [article.slug]); // Reexecuta o efeito se o ID do artigo mudar

  // Trunca o resumo para evitar que textos longos quebrem o layout.
  const truncatedSummary = article.summary.length > 180
    ? article.summary.substring(0, 180) + '...'
    : article.summary;

  return (
    <div className="bg-gray-800 rounded-lg p-4 flex flex-col">
      <h3 className="text-white font-bold text-lg mb-2 uppercase">{article.category}</h3>
      <p className="text-gray-300 font-semibold text-base mb-2">{article.title}</p>
      <p className="text-gray-400 text-sm mb-4">
        {truncatedSummary}
      </p>
      {isSpotifyLink && spotifyEmbedUrl ? (
        <div className="w-full h-[152px] rounded-lg bg-gray-700/50 flex items-center justify-center text-center relative">
          {playerState === 'loading' && (
            <div className="animate-pulse text-gray-400">Carregando Player...</div>
          )}
          {playerState === 'error' && (
            <div className="p-4">
              <ErrorIcon />
              <p className="text-sm font-semibold text-white mb-3">Player indisponível no momento.</p>
              <a
                href={article.audioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <SpotifyIcon />
                Ouvir no Spotify
              </a>
            </div>
          )}
          <iframe
            style={{
              borderRadius: '12px',
              visibility: playerState === 'loaded' ? 'visible' : 'hidden',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            src={spotifyEmbedUrl}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={`Spotify Player for ${article.title}`}
            onLoad={() => setPlayerState('loaded')}
          />
        </div>
      ) : (
        <audio controls className="w-full">
          <source src={article.audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default AudioPlayer;
