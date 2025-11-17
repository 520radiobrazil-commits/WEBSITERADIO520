import React, { useEffect, useState, useRef } from 'react';
import { startArticleChat, sendMessageInChat } from '../services/geminiService';
import type { Chat } from '@google/genai';
import { Article } from '../types';

// --- Icons ---
const CloseIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const SendIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>);
const SparkleIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m1-9l2.293 2.293a1 1 0 010 1.414L10 17.414M14 3l2.293 2.293a1 1 0 010 1.414L10 13.414M17 5h4m-2-2v4m-2 13l2.293-2.293a1 1 0 000-1.414L14 13.414" /></svg>);
const AiIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>);


// --- Local AI Chat Modal Component ---
interface AiChatModalProps {
  articleTitle: string;
  articleContent: string;
  onClose: () => void;
}
interface Message { sender: 'user' | 'ai'; text: string; }

const AiChatModal: React.FC<AiChatModalProps> = ({ articleTitle, articleContent, onClose }) => {
    const [chatSession, setChatSession] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const session = startArticleChat(articleContent);
        setChatSession(session);
        setMessages([{
            sender: 'ai',
            text: `Olá! Sou a 520 AI. O que você gostaria de saber sobre o artigo "${articleTitle}"?`
        }]);
    }, [articleContent, articleTitle]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || !chatSession || isLoading) return;

        const userMessage: Message = { sender: 'user', text: userInput };
        setMessages(prev => [...prev, userMessage]);
        setUserInput('');
        setIsLoading(true);

        const aiResponseText = await sendMessageInChat(chatSession, userInput);
        const aiMessage: Message = { sender: 'ai', text: aiResponseText };
        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col border border-gray-700">
                <header className="p-4 border-b border-gray-700 flex justify-between items-center">
                    <div className="flex items-center">
                         <SparkleIcon />
                        <h2 className="text-lg font-bold text-white ml-2">Resumo com 520 AI</h2>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <CloseIcon />
                    </button>
                </header>

                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs md:max-w-md p-3 rounded-lg ${msg.sender === 'user' ? 'bg-teal-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                                <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="max-w-xs md:max-w-md p-3 rounded-lg bg-gray-700 text-gray-200">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
                    <div className="relative">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Pergunte sobre o artigo..."
                            disabled={isLoading}
                            className="w-full bg-gray-700 border border-gray-600 text-white rounded-full px-4 py-3 pr-12 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !userInput.trim()}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-white bg-teal-600 hover:bg-teal-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
                        >
                            <SendIcon />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// --- Main Floating Button Component ---
interface AiChatProps {
    article: Article;
}

const AiChat: React.FC<AiChatProps> = ({ article }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-900 font-bold px-4 py-3 rounded-full shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center gap-2"
                aria-label="Abrir chat com IA para resumir o artigo"
            >
                <AiIcon />
                <span className="hidden sm:inline">Resumir com IA</span>
            </button>
            {isModalOpen && (
                <AiChatModal
                    articleTitle={article.title}
                    articleContent={article.content}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
};

export default AiChat;
