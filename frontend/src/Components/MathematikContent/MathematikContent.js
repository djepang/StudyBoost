import React from 'react';
import { Link } from 'react-router-dom';
import MathImage from '../../assets/math-image.jpg';

class MathematikContent extends React.Component {
    render() {
        return (
            <div
                className="flex flex-col items-center justify-center p-8 space-y-8"
                style={{
                    backgroundImage: `url(${MathImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh', // Adjust the height as needed
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backgroundBlendMode: 'overlay'
                }}
            >
                <div className="relative overflow-hidden w-full h-16 bg-white bg-opacity-75">
                    <h1 className="text-4xl font-bold text-center text-black animate-marquee whitespace-nowrap">
                        <span style={{ color: "blue" }}>*Mathematik: Die Sprache des Universums*</span>
                        <span style={{ color: "green" }}>Mathematik: Der Schlüssel zum Verständnis</span>
                        <span style={{ color: "orange" }}>*Entdecke die Macht der Zahlen.*</span>
                        <span style={{ color: "red" }}>Mathematik: Unendliche Möglichkeiten.</span>
                        <span style={{ color: "purple" }}>*Entdecke die Schönheit der Zahlen*</span>
                    </h1>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <img src={MathImage} alt="Mathematik" className="rounded-lg shadow-lg w-full h-48 object-cover" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <img src={MathImage} alt="Mathematik" className="rounded-lg shadow-lg w-full h-48 object-cover" />
                </div>
                <nav className="w-full mt-8 bg-white bg-opacity-75">
                    <ul className="flex flex-wrap justify-center gap-8">
                        <li>
                            <Link to="/Mathematik/Klasse1Test" className="flex items-center bg-blue-600 p-3 rounded-lg text-white shadow-md hover:bg-blue-700 transition">
                                <img src={MathImage} alt="Klasse1Test" className="h-10 w-10 mr-2 rounded-full object-cover" />
                                Klasse 1 
                            </Link>
                        </li>
                
                        <li>
                            <Link to="/mathematik/Klasse2" className="flex items-center bg-green-600 p-3 rounded-lg text-white shadow-md hover:bg-green-700 transition">
                                <img src={MathImage} alt="Klasse2" className="h-10 w-10 mr-2 rounded-full object-cover" />
                                Klasse 2 
                            </Link>
                        </li>
                        <li>
                            <Link to="/mathematik/Klasse3" className="flex items-center bg-orange-600 p-3 rounded-lg text-white shadow-md hover:bg-orange-700 transition">
                                <img src={MathImage} alt="Klasse3" className="h-10 w-10 mr-2 rounded-full object-cover" />
                                Klasse 3 
                            </Link>
                        </li>
                        <li>
                            <Link to="/mathematik/Klasse4" className="flex items-center bg-purple-600 p-3 rounded-lg text-white shadow-md hover:bg-purple-700 transition">
                                <img src={MathImage} alt="Klasse4" className="h-10 w-10 mr-2 rounded-full object-cover" />
                                Klasse 4 
                            </Link>
                        </li>
                    </ul>

                

                </nav>
            </div>
        );
    }
}

export default MathematikContent;
