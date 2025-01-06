import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { generateEmail } from '../services/api';

export default function EmailGenerator({ setGeneratedEmails, loading, setLoading, isDarkMode }) {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    try {
      const response = await generateEmail(url);
      setGeneratedEmails(response.emails);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`max-w-2xl mx-auto mb-8 p-6 rounded-xl shadow-lg ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste job URL here..."
            className={`w-full px-4 py-3 rounded-lg border ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300'
            } focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center px-4 py-3 rounded-lg ${
            loading
              ? 'bg-gray-400'
              : 'bg-indigo-600 hover:bg-indigo-700'
          } text-white font-medium transition-colors`}
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
          ) : (
            <Send className="w-5 h-5 mr-2" />
          )}
          {loading ? 'Generating...' : 'Generate Email'}
        </button>
      </form>
    </div>
  );
}