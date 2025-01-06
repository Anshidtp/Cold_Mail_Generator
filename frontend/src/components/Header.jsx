import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Header({ isDarkMode }) {
  return (
    <div className={`text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <div className="flex items-center justify-center mb-4">
        <Sparkles className="w-12 h-12 text-indigo-500 mr-2" />
        <h1 className="text-4xl font-bold">Cold Email Generator</h1>
      </div>
      <p className="text-lg opacity-75">
        Generate personalized cold emails for your job applications
      </p>
    </div>
  );
}