import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../../context/ThemeContext';
import { Monitor, Sun, Moon } from 'lucide-react';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="bg-gray-200 dark:bg-gray-800 p-4 flex justify-between">
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
                    <li><Link to="/register" className="bg-blue-600 p-2 rounded-lg text-white border border-b-4 border-blue-800 hover:border-b-2">Register</Link></li>
                </ul>
            </nav>
            <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
      >
        {theme === 'light' ? <Sun className="text-yellow-500" /> : <Moon className="text-white" />}
      </button>
        </header>
    );
};

export default Header;
