import React, { useState } from 'react';
import './formenmuster.css';

function FormenMuster() {
  const [showNext, setShowNext] = useState(false);
  const handleNextClick = () => {
    setShowNext(true);
  };

  return (
    <div className="formen-muster-container">
      <header className="header">
        <h1>✨ Formen und Muster ✨</h1>
      </header>

      <section className="introduction">
        <h2>Willkommen zu Formen und Muster! 😊</h2>
        <p>Erkunde Grundformen und erstelle einfache Muster. Lass uns Spaß mit Formen haben!</p>
      </section>

      <section className="shapes">
        <h2>Grundformen</h2>
        <div className="shape-card-container">
          <div className="shape-card">
            <div className="shape square">⬜</div>
            <p>Quadrat</p>
          </div>
          <div className="shape-card">
            <div className="shape circle">🔵</div>
            <p>Kreis</p>
          </div>
          <div className="shape-card">
            <div className="shape triangle">🔺</div>
            <p>Dreieck</p>
          </div>
          <div className="shape-card">
            <div className="shape rectangle">🔶</div>
            <p>Rechteck</p>
          </div>
        </div>
      </section>

      <section className="patterns">
        <h2>Erstelle Muster 🖍️</h2>
        <p>Ziehe die Formen, um dein eigenes Muster zu erstellen!</p>
        <div className="pattern-board">
          {/* Hier könnten Sie Drag-and-Drop-Funktionalität hinzufügen */}
        </div>
      </section>

      {showNext ? (
        <section className="exercise">
          <h2>Übungen</h2>
          <p>Beantworte die Fragen zu den Formen:</p>
          <div className="question">
            <p>Wie viele Kreise siehst du? 🔵</p>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
          <div className="question">
            <p>Welche Form ist ein Quadrat? ⬜</p>
            <button>🔵</button>
            <button>🔶</button>
            <button>⬜</button>
          </div>
          {/* Weitere Fragen können hier hinzugefügt werden */}
        </section>
      ) : (
        <button onClick={handleNextClick} className="next-button">
          Weiter zu den Übungen ➡️
        </button>
      )}

      <footer>
        <p>Viel Spaß beim Erkunden der Formen und Muster! 🎉</p>
      </footer>
    </div>
  );
}

export default FormenMuster;