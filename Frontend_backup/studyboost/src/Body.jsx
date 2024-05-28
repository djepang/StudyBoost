import React from 'react';
import './Body.css';
import beautifulImage from './assets/beautiful-image.jpg'; 

const Body = () => {
    return (
        <div className="body-container">
            <h2>Willkommen bei Unsere beste nachhilfe!</h2>
            <h3>Hier können Sie Ihre Lernreise beginnen und sich auf ein aufregendes Lernerlebnis vorbereiten.</h3>
            <h3>Entdecken Sie unsere verschiedenen Lernkategorien und wählen Sie diejenige aus, die am besten zu Ihren Interessen und Bedürfnissen passt.</h3>
            <div className="image-container">
                <img src={beautifulImage} alt="Beautiful Scenery" className="beautiful-image" />
            </div>
        </div>
    );
};

export default Body;

