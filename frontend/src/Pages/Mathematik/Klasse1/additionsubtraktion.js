import React from 'react';
import YouTube from 'react-youtube';
import additionImage from '../../../assets/addition-image.jpg'; 
import subtractionImage from '../../../assets/subtraction-image.jpg'; 
import transparentImage from '../../../assets/transparent-image.png';
import GameLink from '../../../Components/GameLink/GameLink'; 
import './addition-subtraktion.css';

const TransparentImage = ({ src }) => (
  <img className="transparent-image" src={src} alt="Transparentes Bild" />
);

const Introduction = () => (
  <section id="introduction">
    <h5>Aufgaben</h5>
    <div className="introduction">
      <h3>Addition</h3>
      <ul className="flex flex-row gap-5">
        <li>5 + 3 = ?</li>
        <li>7 + 2 = ?</li>
        <li>10 + 4 = ?</li>
        <li>6 + 5 = ?</li>
        <li>8 + 7 = ?</li>
      </ul>
    </div>
    <div className="task">
      <h7>Subtraktion</h7>
      <ul className="flex flex-row gap-5">
        <li>9 - 4 = ?</li>
        <li>10 - 3 = ?</li>
        <li>15 - 7 = ?</li>
        <li>12 - 5 = ?</li>
        <li>8 - 6 = ?</li>
      </ul>
    </div>
  </section>
);

const VideoSection = () => (
  <section id="video">
    <h8>Lernvideos</h8>
    <div className="video-container">
      <YouTube videoId="QXS4exogzb0" />
      <YouTube videoId="J0VA-WcsOtI" />
    </div>
  </section>
);

// Komponente für die Bildergalerie
const ImageGallery = () => (
  <section id="images">
    <h5>Schöne Bilder zur Veranschaulichung</h5>
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
);

function AdditionSubtraktion() {
  return (
    <div className="addition-subtraktion">
      <header className="header">
      <h2><span class="badge text-bg-secondary">Übungen zu Addition und Subtraktion</span></h2>
      </header>
      <main>
        <TransparentImage src={transparentImage} />
        <Introduction />
        <VideoSection />
        <ImageGallery />
        <GameLink /> {/* Einfügen der GameLink-Komponente */}
      </main>
      <footer>
      <h2><span class="badge text-bg-secondary"><p>&copy; 2024 Beispielunterricht. Alle Rechte vorbehalten.</p></span></h2>
      </footer>
    </div>
  );
}

export default AdditionSubtraktion;

