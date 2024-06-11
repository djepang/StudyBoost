import React from 'react';
import MathImage from '../../assets/math-image.jpg';
;

import { Link } from 'react-router-dom';

class KurseContent extends React.Component {
    state = {}
    render() {
        return (
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-300 via-pink-300 to-blue-200 p-8 space-y-8">
                <div className="relative overflow-hidden w-full h-16">
                <h1 className="text-4xl font-bold text-center text-blue-900 animate-marquee whitespace-nowrap">
    <span style={{ color: "blue" }}>*Willkommen bei unseren mathematischen Kurse*</span><span style={{ color: "green" }}>Welcome to our courses</span><span style={{ color: "orange" }}>*Bienvenue dans nos cours*</span><span style={{ color: "red" }}>Ласкаво просимо на наші курси</span><span style={{ color: "purple" }}>*مرحبًا بكم في دوراتنا*</span>
</h1>

                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <img src={MathImage} alt="Mathematik" className="rounded-lg shadow-lg w-full h-48 object-cover" />
                    
                </div>

                <nav className="w-full mt-8">
                    <ul className="flex flex-wrap justify-center gap-8">
                        <li>
                            <Link to="/Mathematique" className="flex items-center bg-blue-600 p-3 rounded-lg text-white shadow-md hover:bg-blue-700 transition">
                                <img src={MathImage} alt="Mathematik" className="h-10 w-10 mr-2 rounded-full object-cover" />
                                Mathematique
                            </Link>
                        </li>

                    
                    </ul>
                </nav>
            </div>
        );
    }
}

export default KurseContent;
