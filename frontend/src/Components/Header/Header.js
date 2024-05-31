import React from "react";
import { Link } from "react-router-dom";
import { Monitor } from 'lucide-react';

class Header extends React.Component {
    state = {}
    render() {
        return (
            <header className="p-3 flex justify-between">
                <div className="flex justify-between w-32">
                    <Monitor className="text-blue-600" />
                    <span className="text-lg text-blue-600 font-bold">StudyBoost</span>
                </div>
                <nav>
                    <ul className="flex flex-row gap-5">
                        <li><Link to="/" className="font-medium hover:underline">Home</Link></li>
                        <li><Link to="/courses" className="font-medium hover:underline">Kurse</Link></li>
                        <li><Link to="/help" className="font-medium hover:underline">Hilfe</Link></li>
                        <li><Link to="/login" className="bg-blue-600 p-2 rounded-lg text-white border border-b-4 border-blue-800 hover:border-b-2">Login</Link></li>
                        <li><Link to="/Register" className="bg-blue-600 p-2 rounded-lg text-white border border-b-4 border-blue-800 hover:border-b-2">Register</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;