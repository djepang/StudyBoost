import React from 'react';
import YouTube from 'react-youtube';
import './Alphabeteinführung.css';
import appleImage from '../../../assets/apple-image.png';
import ballImage from '../../../assets/ball-image.png';
import { Link } from 'react-router-dom';
function Alphabeteinführung() {
  return (
    <div className="Alphabeteinführung">
      {/* Header */}
      <header className="Alphabeteinführung-header">
        <h1>📚 <strong>Einführung in das Alphabet</strong> 📚</h1>
      </header>
      <nav>
          <Link to="/"> <strong>Zurück zur Homeseite </strong></Link>
        </nav>

      {/* Hauptinhalt */}
      <main>
        {/* Abschnitt: Einführung Alphabet */}
        <section id="introduction">
          <h2>🔤 <strong>Einführung in das Alphabet</strong> 🔤</h2>
          <p>Das Alphabet ist die Grundlage jeder Sprache. Hier lernen Sie die Buchstaben des Alphabets kennen, ihre Schreibweise und ihre Aussprache.</p>
          <p>Diese grundlegenden Konzepte sind wichtig für das Lesen und Schreiben.</p>
          <div className="alphabet-grid">
            <div className="alphabet-item"><strong>A:</strong> Ah 🍏</div>
            <div className="alphabet-item"><strong>B:</strong> Beh 🎈</div>
            <div className="alphabet-item"><strong>C:</strong> Tseh 🐱</div>
            <div className="alphabet-item"><strong>D:</strong> Deh 🐶</div>
            <div className="alphabet-item"><strong>E:</strong> Eh 🥚</div>
            <div className="alphabet-item"><strong>F:</strong> Eff 🐸</div>
            <div className="alphabet-item"><strong>G:</strong> Geh 🍇</div>
            <div className="alphabet-item"><strong>H:</strong> Ha 🏠</div>
            <div className="alphabet-item"><strong>I:</strong> Ih 🍦</div>
            <div className="alphabet-item"><strong>J:</strong> Jott 🚀</div>
            <div className="alphabet-item"><strong>K:</strong> Kah 🔑</div>
            <div className="alphabet-item"><strong>L:</strong> Ell 🍋</div>
            <div className="alphabet-item"><strong>M:</strong> Emm 🍈</div>
            <div className="alphabet-item"><strong>N:</strong> Enn 🌙</div>
            <div className="alphabet-item"><strong>O:</strong> Oh 🐙</div>
            <div className="alphabet-item"><strong>P:</strong> Peh 🐧</div>
            <div className="alphabet-item"><strong>Q:</strong> Kuh 🍳</div>
            <div className="alphabet-item"><strong>R:</strong> Err 🌈</div>
            <div className="alphabet-item"><strong>S:</strong> Ess 🌞</div>
            <div className="alphabet-item"><strong>T:</strong> Teh 🌮</div>
            <div className="alphabet-item"><strong>U:</strong> Uh 🦄</div>
            <div className="alphabet-item"><strong>V:</strong> Vau 🎻</div>
            <div className="alphabet-item"><strong>W:</strong> Weh 🚴</div>
            <div className="alphabet-item"><strong>X:</strong> Iks ❌</div>
            <div className="alphabet-item"><strong>Y:</strong> Ypsilon 🍋</div>
            <div className="alphabet-item"><strong>Z:</strong> Zet 🦓</div>
          </div>
        </section>

        {/* Abschnitt: Alphabet-Songs */}
        <section id="alphabet-songs">
          <h2>🎵 <strong>Alphabet-Lieder</strong> 🎵</h2>
          <p className="center-text">Alphabet-Lieder sind eine unterhaltsame und effektive Methode, um die Buchstaben und ihre Reihenfolge zu lernen. Zum Beispiel: A, B, C, D, E, F, G...</p>
          <div className="video-container">
            <YouTube videoId="IX-iENdN41Q" />
            <YouTube videoId="_Z-JufpM5E8" />
          </div>
        </section>

        {/* Abschnitt: Bilder zur Buchstabenerkennung */}
        <section id="letter-recognition-images">
          <div className="image-gallery">
            <div className="image-card">
              <h2>📖 <strong>Der Buchstabe A</strong> 📖</h2>
              <p>A wie Apfel. Ein Apfel ist ein Beispiel für etwas, das mit dem Buchstaben A beginnt.</p>
              <img src={appleImage} alt="Apfel" />
            </div>
            <div className="image-card">
              <h2>📖 <strong>Der Buchstabe B</strong> 📖</h2>
              <p>B wie Ball. Ein Ball ist ein Beispiel für etwas, das mit dem Buchstaben B beginnt.</p>
              <img src={ballImage} alt="Ball" />
            </div>
            {/* Weitere Buchstabenbilder können hier hinzugefügt werden */}
          </div>
        </section>

        {/* Abschnitt: Lernvideos */}
        <section id="videos">
          <h2>🎥 <strong>Lernvideos</strong> 🎥</h2>
          <div className="video-container">
            <YouTube videoId="9EH1ybGHPQQ" />
            <YouTube videoId="tb5U2ThTlh0" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2024 Beispielunterricht. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default Alphabeteinführung;