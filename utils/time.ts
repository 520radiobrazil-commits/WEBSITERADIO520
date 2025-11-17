// FIX: This file was missing, causing module resolution errors across the application.
// It has been created to provide necessary date and time utility functions.

/**
 * Calculates the estimated reading time for a given text content.
 * Averages 200 words per minute.
 * @param content The string content of the article.
 * @returns A formatted string like "5 min de leitura".
 */
export const calculateReadTime = (content: string): string => {
  if (!content) return '';
  // Remove HTML tags to get a better word count
  const text = content.replace(/<[^>]*>?/gm, '');
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  if (readTimeMinutes <= 1) {
    return '1 min de leitura';
  }
  return `${readTimeMinutes} min de leitura`;
};

/**
 * Formats an ISO date string into a short format (e.g., "15 de nov").
 * @param isoDate The ISO date string to format.
 * @returns A formatted date string.
 */
export const formatShortDate = (isoDate: string): string => {
  try {
    const date = new Date(isoDate);
    // Format to "15 de nov"
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'short',
    }).format(date).replace('.', '');
  } catch (error) {
    console.error("Error formatting short date:", error);
    return 'Data inválida';
  }
};

/**
 * Formats an ISO date string into a full date and time format (e.g., "15 de novembro de 2025, 12:00").
 * @param isoDate The ISO date string to format.
 * @returns A formatted date and time string.
 */
export const formatFullDateTime = (isoDate: string): string => {
   try {
    const date = new Date(isoDate);
    // e.g. "15 de novembro de 2025, 12:00"
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  } catch (error) {
    console.error("Error formatting full date:", error);
    return 'Data inválida';
  }
};


/**
 * Formats an ISO date string into a relative time string (e.g., "há 2 horas").
 * @param isoDate The ISO date string.
 * @param baseTime The current time to compare against.
 * @returns A relative time string.
 */
export const formatRelativeTime = (isoDate: string, baseTime: Date): string => {
    try {
        const date = new Date(isoDate);
        const seconds = Math.floor((baseTime.getTime() - date.getTime()) / 1000);
        
        if (seconds < 5) {
            return 'agora mesmo';
        }

        let interval = seconds / 31536000;
        if (interval > 1) {
            const years = Math.floor(interval);
            return `há ${years} ${years === 1 ? 'ano' : 'anos'}`;
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            const months = Math.floor(interval);
            return `há ${months} ${months === 1 ? 'mês' : 'meses'}`;
        }
        interval = seconds / 86400;
        if (interval > 1) {
            const days = Math.floor(interval);
            return `há ${days} ${days === 1 ? 'dia' : 'dias'}`;
        }
        interval = seconds / 3600;
        if (interval > 1) {
            const hours = Math.floor(interval);
            return `há ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
        }
        interval = seconds / 60;
        if (interval > 1) {
            const minutes = Math.floor(interval);
            return `há ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`;
        }
        return `há ${Math.floor(seconds)} segundos`;
    } catch (error) {
        console.error("Error formatting relative time:", error);
        return '';
    }
};

/**
 * Generates a dynamic ISO date string in the past relative to the current time.
 * @param options An object with hours, minutes, or seconds to subtract.
 * @returns An ISO date string.
 */
export const generateDynamicPastDateISO = (options: {
  hours?: number;
  minutes?: number;
  seconds?: number;
}): string => {
  const now = new Date();
  if (options.hours) {
    now.setHours(now.getHours() - options.hours);
  }
  if (options.minutes) {
    now.setMinutes(now.getMinutes() - options.minutes);
  }
  if (options.seconds) {
    now.setSeconds(now.getSeconds() - options.seconds);
  }
  return now.toISOString();
};
