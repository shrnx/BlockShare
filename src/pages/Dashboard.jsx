import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Issuer from '../components/entities/Issuer';
import Student from '../components/entities/Student';
import Verifier from '../components/entities/Verifier';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">

      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="issuer" className="hover:bg-gray-700 px-4 py-2 rounded-md">Issuer</Link>
          <Link to="student" className="hover:bg-gray-700 px-4 py-2 rounded-md">Student</Link>
          <Link to="verifier" className="hover:bg-gray-700 px-4 py-2 rounded-md">Verifier</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Routes>
          <Route path="issuer" element={<Issuer />} />
          <Route path="student" element={<Student />} />
          <Route path="verifier" element={<Verifier />} />
        </Routes>
      </main>
    </div>
  );
}
