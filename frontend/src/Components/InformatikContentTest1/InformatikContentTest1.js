import React from 'react';
import { Link } from 'react-router-dom';
import InformatikersteklasseImage from '../../assets/Informatikersteklasse-image.jpg';

const InformatikContent = () => {
    return (
        <div
            className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${InformatikersteklasseImage})`,
                minHeight: '100vh',
                padding: '8rem 2rem',
                color: '#333',
            }}
        >
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
                            <Link to="/Informatik/Klasse1Einführung" className="flex items-center bg-blue-600 p-3 rounded-lg text-white shadow-md hover:bg-blue-700 transition">
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
