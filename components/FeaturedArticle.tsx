import React from 'react';

const MusicNoteIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V4a1 1 0 00-1-1z" />
    </svg>
);

const hits = [
    { pos: 1, title: 'LUNCH', artist: 'Billie Eilish' },
    { pos: 2, title: 'Espresso', artist: 'Sabrina Carpenter' },
    { pos: 3, title: 'Not Like Us', artist: 'Kendrick Lamar' },
    { pos: 4, title: 'I Had Some Help', artist: 'Post Malone ft. Morgan Wallen' },
    { pos: 5, title: 'A Bar Song (Tipsy)', artist: 'Shaboozey' },
];

const TopHits520: React.FC = () => {
    return (
        <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider flex items-center font-heading">
                <MusicNoteIcon className="h-5 w-5 mr-2 text-cyan-400"/>
                Top Hits 520
            </h3>
            {hits.length > 0 ? (
                <ul className="space-y-3">
                    {hits.map((hit) => (
                        <li key={hit.pos}>
                            <a
                                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(hit.title + ' ' + hit.artist)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full text-left p-2 rounded-md hover:bg-gray-700/50 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-cyan-500 flex items-center gap-4"
                            >
                                <span className="text-3xl font-black text-gray-600 group-hover:text-cyan-400 transition-colors duration-200">
                                    {hit.pos}
                                </span>
                                <div>
                                    <p className="text-white font-semibold leading-tight group-hover:text-cyan-300 transition-colors duration-200">
                                        {hit.title}
                                    </p>
                                    <span className="text-gray-400 text-xs font-medium block">
                                        {hit.artist}
                                    </span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 text-sm">O ranking está sendo atualizado.</p>
            )}
            <p className="text-center text-cyan-400 text-xs font-bold italic mt-4 border-t border-gray-700 pt-3">
                As mais tocadas na programação da Rádio 520!
            </p>
        </div>
    );
};

export default TopHits520;