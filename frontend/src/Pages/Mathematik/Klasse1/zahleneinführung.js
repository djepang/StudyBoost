import React from 'react';
import './zahleneinführung.css';


function zahleneinführung() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Einführung in Zahlen und Zählen</h1>
      </header>
      <main>
        <section id="introduction">
          <h2>Einführung in Zahlen bis 20</h2>
          <p>
            Hier finden Sie grundlegende Informationen über Zahlen bis 20.
            Erklären Sie wichtige Konzepte und Beispiele.
          </p>
        </section>

        <section id="counting-images">
          <h2>Zählen durch Bilder</h2>
          <div className="image-gallery">
            <div className="image-card">
              <img src="image1.jpg" alt="Bild 1" />
              <p>Beschreibung oder Erklärung des ersten Bildes</p>
            </div>
            <div className="image-card">
              <img src="image2.jpg" alt="Bild 2" />
              <p>Beschreibung oder Erklärung des zweiten Bildes</p>
            </div>
            {/* Weitere Bilder können nach Bedarf hinzugefügt werden */}
          </div>
        </section>

        <section id="number-lines">
          <h2>Zahlenlinien</h2>
          <p>
            Erklären Sie, wie Zahlenlinien verwendet werden können,
            um Zahlen bis 20 zu veranschaulichen. Beispiele und Anwendungen.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Beispielunterricht. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default zahleneinführung;
