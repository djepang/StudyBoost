import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

class Footer extends React.Component {
    render() {
        return (
            <footer className="p-3 bg-gray-800 text-white text-center">
                <p>&copy; 2024 StudyBoost</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://www.linkedin.com/in/studyboost-studyboost-55ba07313" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 font-bold">
                        <FaLinkedin className="text-blue-600 inline-block" />
                    </a>
                    <a href="https://twitter.com/StudyBoostprofile" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 font-bold">
                        <FaTwitter className="text-blue-600 inline-block" />
                    </a>
                    <a href="https://facebook.com/StudyBoostprofile" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 font-bold">
                        <FaFacebook className="text-blue-600 inline-block" />
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;