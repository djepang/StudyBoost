import React from 'react';
import BeautifulImage from '../../assets/beautiful-image.jpg'
class HomeContent extends React.Component {
    state = {}
    render() {
        return (
            <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
                <h1 className="text-4xl font-bold text-center">Willkommen bei StudyBoost</h1>
                <img src={BeautifulImage} alt="Bild von einem Computer" className="rounded-lg mt-5 w-[600px]" />
                <p className="text-center text-lg mt-4">Hier findest du die besten Kurse für deine Prüfungsvorbereitung</p>
                <button className="bg-blue-600 text-white p-2 rounded-lg mt-5">Zu den Kursen</button>
            </div>
        );
    }
}

export default HomeContent;