import React, { useState } from 'react';
import Header from './components/Header';
import EmailGenerator from './components/EmailGenerator';
import ThemeToggle from './components/ThemeToggle';
import { GeneratedEmail } from './components/GeneratedEmail';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [generatedEmails, setGeneratedEmails] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="absolute top-4 right-4">
          <ThemeToggle isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
        </div>
        <Header isDarkMode={isDarkMode} />
        <EmailGenerator 
          setGeneratedEmails={setGeneratedEmails}
          loading={loading}
          setLoading={setLoading}
          isDarkMode={isDarkMode}
        />
        {generatedEmails.map((email, index) => (
          <GeneratedEmail 
            key={index} 
            email={email} 
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  );
}