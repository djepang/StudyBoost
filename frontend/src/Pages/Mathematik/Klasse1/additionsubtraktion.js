import React from 'react';
import YouTube from 'react-youtube';
import additionImage from '../../../assets/addition-image.jpg'; 
import subtractionImage from '../../../assets/subtraction-image.jpg'; 
import transparentImage from '../../../assets/transparent-image.png';
import QuestSpiel from '../../../Components/QuestSpiel/QuestSpiel';
import GameLink from '../../../Components/GameLink/GameLink'; 
import './addition-subtraktion.css';

const TransparentImage = ({ src }) => (
  <img className="transparent-image" src={src} alt="Transparentes Bild" />
);

const VideoSection = () => (
  <section id="video">
    <h8><strong>Lernvideos</strong></h8>
    <div className="video-container">
      <YouTube videoId="QXS4exogzb0" />
      <YouTube videoId="J0VA-WcsOtI" />
    </div>
  </section>
);

const ImageGallery = () => (
  <section id="images">
    <h5><strong>Schöne Bilder zur Veranschaulichung</strong></h5>
    <div className="image-gallery">
      <div className="image-card">
        <img src={additionImage} alt="Addition" />
        <p><strong>Bild zur Addition</strong></p>
      </div>
      <div className="image-card">
        <img src={subtractionImage} alt="Subtraktion" />
        <p><strong>Bild zur Subtraktion</strong></p>
      </div>
    </div>
  </section>
);

function AdditionSubtraktion() {
  return (
    <div className="addition-subtraktion">
      <header className="header">
      <h2><span class="badge text-bg-secondary"><strong>Übungen zur Addition und Subtraktion</strong></span></h2>
      </header>
      <main>
        <TransparentImage src={transparentImage} />
        <ImageGallery />
        <QuestSpiel /> {/* Fügen Sie die QuestSpiel-Komponente hier ein */}
        <VideoSection />
        
        <GameLink /> {/* Einfügen der GameLink-Komponente */}
      </main>
      <footer>
      <h2><span class="badge text-bg-secondary"><p>&copy; 2024 Beispielunterricht. Alle Rechte vorbehalten.</p></span></h2>
      </footer>
    </div>
  );
}

export default AdditionSubtraktion;

