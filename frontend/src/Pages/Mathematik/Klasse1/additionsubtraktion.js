import React from 'react';
import YouTube from 'react-youtube';
import additionImage from '../../../assets/addition-image.jpg'; 
import subtractionImage from '../../../assets/subtraction-image.jpg'; 
import transparentImage from '../../../assets/transparent-image.png'; // Beispiel: transparentes Bild importieren
import './addition-subtraktion.css';

function AdditionSubtraktion() {
  return (
    <div className="addition-subtraktion">
      <header className="header">
        <h1>Übungen zu Addition und Subtraktion</h1>
      </header>
      <main>
        {/* Transparentes Bild über den Inhalten */}
        <img className="transparent-image" src={transparentImage} alt="Transparentes Bild" />

        <section id="introduction">
          <h2>Aufgaben</h2>
          <div className="introduction">
            <h3>Addition</h3>
            <ul>
              <li>5 + 3 = ?</li>
              <li>7 + 2 = ?</li>
              <li>10 + 4 = ?</li>
              <li>6 + 5 = ?</li>
              <li>8 + 7 = ?</li>
            </ul>
          </div>
          <div className="task">
            <h3>Subtraktion</h3>
            <ul>
              <li>9 - 4 = ?</li>
              <li>10 - 3 = ?</li>
              <li>15 - 7 = ?</li>
              <li>12 - 5 = ?</li>
              <li>8 - 6 = ?</li>
            </ul>
          </div>
        </section>

        <section id="video">
          <h2>Lernvideos</h2>
          <div className="video-container">
            <YouTube videoId="pvz5kfF6pys" />
          </div>
          <div className="video-container">
            <YouTube videoId="L7kk6Lz8HS4" />
          </div>
        </section>

        <section id="images">
          <h2>Schöne Bilder zur Veranschaulichung</h2>
          <div className="image-gallery">
            <div className="image-card">
              <img src={additionImage} alt="Addition" />
              <p>Bild zur Addition</p>
            </div>
            <div className="image-card">
              <img src={subtractionImage} alt="Subtraktion" />
              <p>Bild zur Subtraktion</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Beispielunterricht. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default AdditionSubtraktion;
