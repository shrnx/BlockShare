import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Issuer from '../components/entities/Issuer';
import Student from '../components/entities/Student';
import Verifier from '../components/entities/Verifier';

const Card = ({ title, description, image, link }) => (
  <Link to={link} className="group">
    <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-md transition-transform transform hover:scale-105 group-hover:bg-gray-100">
      <img src={image} alt={title} className="h-32 w-32 mb-4 rounded-full" />
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 text-center">{description}</p>
    </div>
  </Link>
);

const CardPage = () => {
  const cards = [
    {
      title: 'University',
      description: 'Upload a Document',
      image: 'https://via.placeholder.com/150',
      link: '/issuer', // Link to the Issuer page
    },
    {
      title: 'Student',
      description: 'View all the documents issued.',
      image: 'https://via.placeholder.com/150',
      link: '/student', // Link to the Student page
    },
    {
      title: 'Verifier',
      description: 'Check the authenticity of documents',
      image: 'https://via.placeholder.com/150',
      link: '/verifier', // Link to the Verifier page
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-40">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardPage;
