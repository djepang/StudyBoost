import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../../context/ThemeProvider';
import { Monitor, Sun, Moon } from 'lucide-react';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    const handleThemeToggle = () => {
        console.log('Toggle Theme');
        toggleTheme();
    };

    return (
        <header className="p-4 bg-gradient-to-r from-blue-500 to-blue-700 shadow-md flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <Monitor className="text-white" />
                <span className="text-lg text-white font-bold">StudyBoost</span>
            </div>
            <nav>
                <ul className="flex flex-row gap-6">
                    <li><Link to="/" className="text-white font-medium hover:underline">Home</Link></li>
                    <li><Link to="/courses" className="text-white font-medium hover:underline"></Link></li>
                    <li><Link to="/help" className="text-white font-medium hover:underline">Hilfe</Link></li>
                    <li><Link to="/login" className="bg-white p-2 rounded-lg text-blue-600 border border-b-4 border-blue-800 hover:border-b-2">Login</Link></li>
                    <li><Link to="/register" className="bg-white p-2 rounded-lg text-blue-600 border border-b-4 border-blue-800 hover:border-b-2">Register</Link></li>
                </ul>
            </nav>
            <button onClick={handleThemeToggle} className="p-2 rounded-full focus:outline-none">
                {theme === 'light' ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-200" />}
            </button>
        </header>
    );
};

export default Header;
