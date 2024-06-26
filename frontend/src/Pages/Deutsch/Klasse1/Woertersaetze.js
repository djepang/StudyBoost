import React from 'react';
import YouTube from 'react-youtube';
import Header from '../../../Components/Header/Header';
import './Woertersaetze.css';
import appleImage from '../../../assets/apple-image.png';
import ballImage from '../../../assets/ball-image.png';
import { Link } from 'react-router-dom';

function Woertersaetze() {
  return (
    <div className="Woertersaetze">
      <div>
      <Header />
    </div>
      <header className="Woertersaetze-header">
        <h1>📚 <strong>Einführung in Wörter und Sätze</strong> 📚</h1>
      </header>
      <nav>
          <Link to="/"> <strong>Zurück zur Homeseite </strong></Link>
        </nav>


      {/* Hauptinhalt */}
      <main>
        {/* Abschnitt: Einführung Wörter und Sätze */}
        <section id="introduction">
          <h2>🔤 <strong>Einführung in Wörter und Sätze</strong> 🔤</h2>
          <p>Wörter und Sätze sind die Bausteine jeder Sprache. Hier lernst du verschiedene Wörter und einfache Sätze kennen, ihre Bedeutung und wie man sie verwendet.</p>
          <p>Diese grundlegenden Konzepte sind wichtig für das Lesen und Schreiben.</p>
          <div className="word-grid">
            <div className="word-item"><strong>Apfel:</strong> Ein Apfel ist lecker und gesund. 🍏</div>
            <div className="word-item"><strong>Ball:</strong> Mit einem Ball kann man spielen. 🎈</div>
            <div className="word-item"><strong>Katze:</strong> Die Katze ist ein niedliches Haustier. 🐱</div>
            <div className="word-item"><strong>Hund:</strong> Der Hund ist ein treuer Begleiter. 🐶</div>
            <div className="word-item"><strong>Ei:</strong> Ein Ei ist ein gesundes Frühstück. 🥚</div>
            <div className="word-item"><strong>Frosch:</strong> Der Frosch macht "quak quak". 🐸</div>
            <div className="word-item"><strong>Traube:</strong> Trauben sind süß und saftig. 🍇</div>
            <div className="word-item"><strong>Haus:</strong> In einem Haus kann man wohnen. 🏠</div>
            <div className="word-item"><strong>Eis:</strong> Eiscreme schmeckt köstlich. 🍦</div>
            <div className="word-item"><strong>Rakete:</strong> Die Rakete fliegt hoch in den Himmel. 🚀</div>
            <div className="word-item"><strong>Schlüssel:</strong> Mit einem Schlüssel kann man Türen öffnen. 🔑</div>
            <div className="word-item"><strong>Zitrone:</strong> Zitronen sind sauer und erfrischend. 🍋</div>
            <div className="word-item"><strong>Melone:</strong> Melonen sind im Sommer sehr erfrischend. 🍈</div>
            <div className="word-item"><strong>Mond:</strong> Der Mond scheint in der Nacht. 🌙</div>
            <div className="word-item"><strong>Oktopus:</strong> Der Oktopus hat viele Arme. 🐙</div>
            <div className="word-item"><strong>Pinguin:</strong> Pinguine leben in der Antarktis. 🐧</div>
            <div className="word-item"><strong>Pfanne:</strong> In einer Pfanne kann man kochen. 🍳</div>
            <div className="word-item"><strong>Regenbogen:</strong> Ein Regenbogen ist wunderschön. 🌈</div>
            <div className="word-item"><strong>Sonne:</strong> Die Sonne scheint am Himmel. 🌞</div>
            <div className="word-item"><strong>Taco:</strong> Tacos sind eine mexikanische Spezialität. 🌮</div>
            <div className="word-item"><strong>Einhorn:</strong> Einhörner sind mystische Kreaturen. 🦄</div>
            <div className="word-item"><strong>Violine:</strong> Die Violine ist ein Musikinstrument. 🎻</div>
            <div className="word-item"><strong>Fahrrad:</strong> Mit einem Fahrrad kann man radfahren. 🚴</div>
            <div className="word-item"><strong>Xylophon:</strong> Das Xylophon macht schöne Töne. ❌</div>
            <div className="word-item"><strong>Zebra:</strong> Zebras haben Streifen. 🦓</div>
          </div>
        </section>

        {/* Abschnitt: Wörter-Lieder */}
        <section id="word-songs">
          <h2>🎵 <strong>Wörter-Lieder</strong> 🎵</h2>
          <p className="center-text">Wörter-Lieder sind eine unterhaltsame und effektive Methode, um Wörter und ihre Bedeutung zu lernen. Zum Beispiel: Apfel, Ball, Katze, Hund...</p>
          <div className="video-container">
            <YouTube videoId="rJWZhitXWzI" />
            <YouTube videoId="YFo1-c4peEE" />
          </div>
          <p className="advertisement">Möchtest du noch mehr lernen? Besuche unseren <a href="https://example.com">Online-Kurs</a> für weitere spannende Themen!</p>
        </section>

        {/* Abschnitt: Bilder zur Worterkennung */}
        <section id="word-recognition-images">
          <div className="image-gallery">
            <div className="image-card">
              <h2>📖 <strong>Das Wort Apfel</strong> 📖</h2>
              <p>Ein Apfel ist lecker und gesund. Hier ist ein Bild von einem Apfel.</p>
              <img src={appleImage} alt="Apfel" />
            </div>
            <div className="image-card">
              <h2>📖 <strong>Das Wort Ball</strong> 📖</h2>
              <p>Ein Ball ist rund und kann hüpfen. Hier ist ein Bild von einem Ball.</p>
              <img src={ballImage} alt="Ball" />
            </div>
            {/* Weitere Bilder können hier hinzugefügt werden */}
          </div>
        </section>

        {/* Abschnitt: Lernvideos */}
        <section id="videos">
          <h2>🎥 <strong>Lernvideos</strong> 🎥</h2>
          <div className="video-container">
            <YouTube videoId="l9zQackwUww" />
            <YouTube videoId="lxwsCnrX_T8" />
          </div>
        </section>

        {/* Abschnitt: Übungen */}
        <section id="exercises">
          <h2>✏️ <strong>Übungen</strong> ✏️</h2>
          <div className="exercises-container">
            <div className="exercise">
              <h3>Schreibe das Wort Apfel</h3>
              <p>Versuche das Wort "Apfel" auf ein Blatt Papier zu schreiben. Zeichne auch einen Apfel dazu!</p>
            </div>
            <div className="exercise">
              <h3>Schreibe das Wort Ball</h3>
              <p>Versuche das Wort "Ball" auf ein Blatt Papier zu schreiben. Zeichne auch einen Ball dazu!</p>
            </div>
            {/* Weitere Übungen können hier hinzugefügt werden */}
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

export default Woertersaetze;
