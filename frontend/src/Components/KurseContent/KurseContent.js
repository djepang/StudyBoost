import React from 'react';
import MathImage from '../../assets/math-image.jpg';
import PhysicsImage from '../../assets/physics-image.jpg';
import EnglishImage from '../../assets/english-image.jpg';
import BiologieImage from '../../assets/biologie-image.jpg';
import DeutschImage from '../../assets/deutsch-image.jpg';
import InformatikImage from '../../assets/informatik-image.jpg';

import { Link } from 'react-router-dom';

class KurseContent extends React.Component {
    state = {}
    render() {
        return (
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-300 via-pink-300 to-blue-200 p-8 space-y-8">
                <h1 className="text-4xl font-bold text-center text-blue-900">Willkommen bei unseren Kursen</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <img src={MathImage} alt="Mathematik" className="rounded-lg shadow-lg w-full h-48 object-cover" />
                    <img src={PhysicsImage} alt="Physik" className="rounded-lg shadow-lg w-full h-48 object-cover" />
                    <img src={EnglishImage} alt="Englisch" className="rounded-lg shadow-lg w-full h-48 object-cover" />
                    <img src={BiologieImage} alt="Biologie" className="rounded-lg shadow-lg w-full h-48 object-cover" />
                    <img src={DeutschImage} alt="Deutsch" className="rounded-lg shadow-lg w-full h-48 object-cover" />
                    <img src={InformatikImage} alt="Informatik" className="rounded-lg shadow-lg w-full h-48 object-cover" />
                </div>

                <nav className="w-full mt-8">
                    <ul className="flex flex-wrap justify-center gap-8">
                        <li>
                            <Link to="/Mathematique" className="flex items-center bg-blue-600 p-3 rounded-lg text-white shadow-md hover:bg-blue-700 transition">
                                <img src={MathImage} alt="Mathematik" className="h-10 w-10 mr-2 rounded-full object-cover" />
                                Mathematique
                            </Link>
                        </li>

                        <li>
                            <Link to="/Physik" className="flex items-center bg-blue-600 p-3 rounded-lg text-white shadow-md hover:bg-blue-700 transition">
                                <img src={PhysicsImage} alt="Physik" className="h-10 w-10 mr-2 rounded-full object-cover" />
                                Physik
                            </Link>
                        </li>

                        <li>
                            <Link to="/English" className="flex items-center bg-blue-600 p-3 rounded-lg text-white shadow-md hover:bg-blue-700 transition">
                                <img src={EnglishImage} alt="Englisch" className="h-10 w-10 mr-2 rounded-full object-cover" />
                                English
                            </Link>
                        </li>

                        <li>
                            <Link to="/Deutsch" className="flex items-center bg-blue-600 p-3 rounded-lg text-white shadow-md hover:bg-blue-700 transition">
                                <img src={DeutschImage} alt="Deutsch" className="h-10 w-10 mr-2 rounded-full object-cover" />
                                Deutsch
                            </Link>
                        </li>

                        <li>
                            <Link to="/Biologie" className="flex items-center bg-blue-600 p-3 rounded-lg text-white shadow-md hover:bg-blue-700 transition">
                                <img src={BiologieImage} alt="Biologie" className="h-10 w-10 mr-2 rounded-full object-cover" />
                                Biologie
                            </Link>
                        </li>

                        <li>
                            <Link to="/Informatik" className="flex items-center bg-blue-600 p-3 rounded-lg text-white shadow-md hover:bg-blue-700 transition">
                                <img src={InformatikImage} alt="Informatik" className="h-10 w-10 mr-2 rounded-full object-cover" />
                                Informatik
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        );
    }
}

export default KurseContent;
