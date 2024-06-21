import React from 'react';
import { Link } from 'react-router-dom';
import InformatikImage from '../../assets/informatik-image.jpg';

const InformatikContent = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${InformatikImage})`,
        minHeight: '100vh',
        padding: '8rem 2rem',
        backgroundColor: '#f3f4f6', // Updated background color
        color: '#333',
      }}
    >
       <div className="relative overflow-hidden w-full h-16 bg-white bg-opacity-75">
    <h1 className="text-4xl font-bold text-center text-black animate-marquee whitespace-nowrap">
        <span style={{ color: "blue" }}>*Informatik: Die Sprache der Zukunft*</span>
        <span style={{ color: "green" }}>Informatik: Der Schlüssel zur Innovation</span>
        <span style={{ color: "orange" }}>*Entdecke die Macht des Codes.*</span>
        <span style={{ color: "red" }}>Informatik: Unendliche Möglichkeiten.</span>
        <span style={{ color: "purple" }}>*Entdecke die Schönheit der Technologie*</span>
    </h1>
</div>
      <nav>
        {/* Navigation if needed */}
      </nav>
      <div className="w-full max-w-4xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Informatikthemen für die erste Klasse
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Einführung in die Informatik</h2>
            <p className="text-lg text-gray-800">
              Grundlegende Konzepte der Informatik kennenlernen.
            </p>
          </div>

          <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Algorithmen und ihre Anwendung</h2>
            <p className="text-lg text-gray-800">
              Verstehen, wie Algorithmen funktionieren und angewendet werden.
            </p>
          </div>

          <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Grundlagen der Programmierung</h2>
            <p className="text-lg text-gray-800">
              Einführung in die Programmierung und einfache Programme erstellen.
            </p>
          </div>
        </div>

        <nav className="w-full mt-8">
          <ul className="flex flex-wrap justify-center gap-8">
            <li>
              <Link to="/Informatik/Klasse1Informatikeinführung" className="flex items-center bg-blue-600 p-3 rounded-lg text-white shadow-md hover:bg-blue-700 transition">
                Einführung in die Informatik
              </Link>
            </li>
            <li>
              <Link to="/Informatik/Klasse1Algorithmen" className="flex items-center bg-blue-600 p-3 rounded-lg text-white shadow-md hover:bg-blue-700 transition">
                Algorithmen
              </Link>
            </li>
            <li>
              <Link to="/Informatik/Klasse1Programmierung" className="flex items-center bg-blue-600 p-3 rounded-lg text-white shadow-md hover:bg-blue-700 transition">
                Programmierung
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default InformatikContent;
