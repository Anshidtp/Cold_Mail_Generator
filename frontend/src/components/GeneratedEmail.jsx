import React from 'react';
import { Copy, Check } from 'lucide-react';

export function GeneratedEmail({ email, isDarkMode }) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`max-w-2xl mx-auto mb-4 p-6 rounded-xl shadow-lg ${
      isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">Generated Email</h3>
        <button
          onClick={copyToClipboard}
          className={`p-2 rounded-lg transition-colors ${
            isDarkMode 
              ? 'hover:bg-gray-700' 
              : 'hover:bg-gray-100'
          }`}
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Copy className="w-5 h-5" />
          )}
        </button>
      </div>
      <div className={`whitespace-pre-wrap ${
        isDarkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {email}
      </div>
    </div>
  );
}