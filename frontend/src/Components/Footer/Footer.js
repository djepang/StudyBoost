import React from 'react';
import { Linkedin } from 'lucide-react';

class Footer extends React.Component {
    state = {}
    render() {
        return (
            <footer className="p-3 bg-gray-800 text-white text-center">
                <p>&copy; 2024 StudyBoost</p>
                <span className="text-lg text-blue-600 font-bold">Linked<Linkedin className="text-blue-600" /></span>
            </footer>
        );
    }
}

export default Footer;