import React from 'react';
import { Zap } from 'lucide-react';

export default function Verifier() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Verifier Dashboard</h1>
      <div className="flex items-center space-x-4">
        <Zap className="h-12 w-12 text-purple-500" />
        <p className="text-lg text-gray-600 dark:text-gray-300">Verify the legitimacy of documents in seconds.</p>
      </div>
    </div>
  );
}
