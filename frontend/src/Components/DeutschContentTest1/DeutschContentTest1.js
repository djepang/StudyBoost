import React from 'react';
import { Link } from 'react-router-dom';
import DeutschersteklasseImage from '../../assets/Deutschersteklasse-image.jpg';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const DeutschContentTest1 = () => {
    return (
        <div>
            < Header/ >
        
        <div
            className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${DeutschersteklasseImage})`,
                minHeight: '100vh', 
                padding: '8rem 2rem', 
                color: '#333', 
            }}
        >   <nav>
        
      </nav>
            <div className="w-full max-w-4xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">

                <h1 className="text-4xl font-bold text-center text-purple-900 mb-8">
                    Deutschthemen für die erste Klasse
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Alphabet und Buchstaben</h2>
                        <p className="text-lg text-gray-800">
                            Einführung in das Alphabet und das Erkennen von Buchstaben.
                        </p>
                    </div>
                    
                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Einfache Wörter und Sätze</h2>
                        <p className="text-lg text-gray-800">
                            Lesen und Schreiben von einfachen Wörtern und Sätzen.
                        </p>
                    </div>
                    
                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Geschichten und Märchen</h2>
                        <p className="text-lg text-gray-800">
                            Erkunden von Geschichten und Märchen für Kinder.
                        </p>
                    </div>
                    
                </div>

            


                <nav className="w-full mt-8">
                    <ul className="flex flex-wrap justify-center gap-8">
                        <li>
                            <Link to="/Deutsch/Klasse1Alphabeteinführung" className="flex items-center bg-purple-600 p-3 rounded-lg text-white shadow-md hover:bg-purple-700 transition">
                                Alphabet und Buchstaben
                            </Link>
                        </li>
                        <li>
                            <Link to="/Deutsch/Klasse1Woertersaetze" className="flex items-center bg-purple-600 p-3 rounded-lg text-white shadow-md hover:bg-purple-700 transition">
                                Wörter und Sätze
                            </Link>
                        </li>
                        <li>
                            <Link to="/Deutsch/Klasse1GeschichtenMaerchen" className="flex items-center bg-purple-600 p-3 rounded-lg text-white shadow-md hover:bg-purple-700 transition">
                                Geschichten und Märchen
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
         </div>
        < Footer/ >
     </div>
    );
}

export default DeutschContentTest1;
