import React, { useState, useEffect } from 'react';
import { Comment } from '../types';

interface CommentsProps {
  articleId: string;
}

const Comments: React.FC<CommentsProps> = ({ articleId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    try {
      const storedComments = localStorage.getItem(`comments-${articleId}`);
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      }
    } catch (error) {
      console.error("Failed to parse comments from localStorage", error);
      setComments([]);
    }
  }, [articleId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newComment: Comment = {
      id: new Date().toISOString(),
      articleId,
      author: author.trim() || 'Anonymous',
      text: text.trim(),
      timestamp: new Date().toISOString(),
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${articleId}`, JSON.stringify(updatedComments));

    setAuthor('');
    setText('');
  };

  return (
    <section className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-2xl font-bold text-white mb-6">Comentários ({comments.length})</h3>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-1">
            <label htmlFor="author" className="block text-sm font-medium text-gray-300 mb-1">
              Nome
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Seu nome (opcional)"
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
            />
          </div>
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-300 mb-1">
            Seu Comentário
          </label>
          <textarea
            id="comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Participe da discussão..."
            rows={4}
            required
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
          ></textarea>
        </div>
        <div className="mt-4 text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-teal-500 text-gray-900 font-semibold rounded-md hover:bg-teal-400 transition-colors"
          >
            Publicar Comentário
          </button>
        </div>
      </form>

      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="p-4 bg-gray-700/50 rounded-md border border-gray-600">
              <div className="flex items-center mb-2">
                <p className="font-semibold text-teal-300 mr-3">{comment.author}</p>
                <p className="text-xs text-gray-400">
                  {new Date(comment.timestamp).toLocaleString()}
                </p>
              </div>
              <p className="text-gray-200 whitespace-pre-wrap">{comment.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center py-4">Seja o primeiro a comentar.</p>
        )}
      </div>
    </section>
  );
};

export default Comments;