import { GoogleGenAI, Chat } from "@google/genai";

// A API_KEY é esperada estar disponível no ambiente.
// A configuração do projeto lida com isso.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
const model = 'gemini-2.5-flash';

/**
 * Cria uma nova sessão de chat com a Gemini, preparada com o conteúdo de um artigo.
 * @param articleContent O contexto para a sessão de chat.
 * @returns Uma instância de Chat.
 */
export const startArticleChat = (articleContent: string): Chat => {
    return ai.chats.create({
      model,
      config: {
        systemInstruction: `You are a helpful sports analyst assistant called "520 AI". Your knowledge is based on the article provided below. Answer the user's questions in Portuguese, strictly based on the article's content. If the answer is not in the article, say "Essa informação não está disponível no artigo." Do not invent information. Be concise and friendly.

--- ARTICLE START ---
${articleContent}
--- ARTICLE END ---`,
      },
    });
};

/**
 * Envia uma mensagem para uma sessão de chat em andamento e obtém a resposta.
 * @param chat A instância ativa de Chat.
 * @param message A mensagem do usuário.
 * @returns O texto da resposta da IA ou uma mensagem de erro.
 */
export const sendMessageInChat = async (chat: Chat, message: string): Promise<string> => {
    try {
        const response = await chat.sendMessage({ message });
        return response.text;
    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        return "Desculpe, não consegui processar sua pergunta. Tente novamente.";
    }
};