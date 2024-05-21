import React from 'react';
import './FutureComponent.css'; // Stellen Sie sicher, dass Sie die CSS-Datei einbinden

const FutureComponent = () => {
    return (
        <div className="future-container">
            <h2>Willkommen in der Zukunft des Lernens</h2>
            <div className="future-content">
                <div className="future-card">
                    <h3>Interaktive 3D-Lernwelten</h3>
                    <p>Entdecken Sie immersive 3D-Lernumgebungen, die das Lernen spannend und unterhaltsam machen.</p>
                </div>
                <div className="future-card">
                    <h3>Künstliche Intelligenz</h3>
                    <p>Erleben Sie personalisiertes Lernen durch KI-gesteuerte Empfehlungen und Analysen.</p>
                </div>
                <div className="future-card">
                    <h3>Virtuelle Tutorien</h3>
                    <p>Nehmen Sie an interaktiven virtuellen Tutorien teil, um Ihre Fähigkeiten zu verbessern.</p>
                </div>
            </div>
        </div>
    );
}

export default FutureComponent;
