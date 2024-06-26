import React from 'react';
import BeautifulImage from '../../assets/beautiful-image.jpg'
import { Link } from 'react-router-dom'
class HomeContent extends React.Component {
    state = {}
    render() {
        return (
            <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
                <h1 className="text-4xl font-bold text-center">Willkommen bei StudyBoost</h1>
                <img src={BeautifulImage} alt="Bild von einem Computer" className="rounded-lg mt-5 w-[500px]" />
                <p className="text-center text-lg mt-4">Hier findest du die besten Kurse für deine Prüfungsvorbereitung</p>
            
                <button className="bg-blue-600 text-white p-2 rounded-lg mt-5">Zu den Kursen</button>

            
                <p className="text-center text-lg mt-4">Was ist das Ziel StudyBoost?</p>
                
                
                <div class="h-56 grid grid-cols-3 gap-5 content-start ...  ...">
                    
                <nav>

                    <ul className="flex flex-row gap-5">
                
                        <li><Link to="/Hausaufgabenhilfe" className="bg-blue-900 p-2 rounded-lg text-white border border-b-4 border-blue-800 hover:border-b-2">Hausaufgabenhilfe</Link></li>
                        <li><Link to="/Notenverbesserung" className="bg-blue-600 p-2 rounded-lg text-white border border-b-4 border-blue-800 hover:border-b-2">Notenverbesserung</Link></li>
                        
                    </ul>
                </nav>
</div>


            </div>


        );
    }
}



export default HomeContent;