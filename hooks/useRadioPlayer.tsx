import { useState, useRef, useCallback, useEffect } from 'react';

const useRadioPlayer = (streamUrl: string) => {
  const [isRadioPlaying, setIsRadioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Inicializa o elemento de áudio de forma preguiçosa
  const getAudioElement = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(streamUrl);
      audioRef.current.preload = 'none';
    }
    return audioRef.current;
  }, [streamUrl]);
  
  const toggleRadio = useCallback(() => {
    setIsRadioPlaying(prev => !prev);
  }, []);

  useEffect(() => {
    const audio = getAudioElement();
    if (isRadioPlaying) {
      audio.play().catch(error => {
        console.error("Error playing radio stream:", error);
        setIsRadioPlaying(false); // Reverte o estado em caso de falha na reprodução
      });
    } else {
      audio.pause();
    }
  }, [isRadioPlaying, getAudioElement]);

  // Limpeza na desmontagem do componente
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) {
        audio.pause();
        audio.src = ''; // Libera o recurso
      }
    };
  }, []);


  return { isRadioPlaying, toggleRadio };
};

export default useRadioPlayer;
