import React from 'react';
import YouTube from 'react-youtube';
import './zahleneinführung.css';
import { Link } from 'react-router-dom';
function Zahleneinführung() {
  return (
    <div className="zahleneinfuehrung">
      {/* Header */}
      <nav>
          <Link to="/"> <strong>Zurück zur Homeseite </strong></Link>
        </nav>
      <header className="zahleneinführung-header">
        <h1><strong>Einführung Zahlen und Zählen</strong></h1>
      </header>
      
      {/* Hauptinhalt */}
      <main>
        {/* Abschnitt: Einführung Zahlen bis 20 */}
        <section id="introduction">
          <h2><strong>Einführung Zahlen bis 20</strong></h2>
          <p>
            Zahlen sind die Grundlage der Mathematik.
          </p>
          <p>
            Hier lernen Sie die Zahlen von 1 bis 20 kennen, ihre Schreibweise und wie man sie zählt.
          </p>
          <p>
            Diese grundlegenden Konzepte sind wichtig für den Einstieg in die Mathematik.
          </p>
          <div className="numbers-grid">
            <div className="number-item"><strong>1:</strong> Eins</div>
            <div className="number-item"><strong>2:</strong> Zwei</div>
            <div className="number-item"><strong>3:</strong> Drei</div>
            <div className="number-item"><strong>4:</strong> Vier</div>
            <div className="number-item"><strong>5:</strong> Fünf</div>
            <div className="number-item"><strong>6:</strong> Sechs</div>
            <div className="number-item"><strong>7:</strong> Sieben</div>
            <div className="number-item"><strong>8:</strong> Acht</div>
            <div className="number-item"><strong>9:</strong> Neun</div>
            <div className="number-item"><strong>10:</strong> Zehn</div>
            <div className="number-item"><strong>11:</strong> Elf</div>
            <div className="number-item"><strong>12:</strong> Zwölf</div>
            <div className="number-item"><strong>13:</strong> Dreizehn</div>
            <div className="number-item"><strong>14:</strong> Vierzehn</div>
            <div className="number-item"><strong>15:</strong> Fünfzehn</div>
            <div className="number-item"><strong>16:</strong> Sechzehn</div>
            <div className="number-item"><strong>17:</strong> Siebzehn</div>
            <div className="number-item"><strong>18:</strong> Achtzehn</div>
            <div className="number-item"><strong>19:</strong> Neunzehn</div>
            <div className="number-item"><strong>20:</strong> Zwanzig</div>
          </div>
        </section>

        {/* Abschnitt: Zahlenlinien */}
        <section id="number-lines">
          <h2><strong>Zahlenlinien</strong></h2>
          <p className="center-text">
            Zahlenlinien sind eine visuelle Darstellung, um die Position von Zahlen zu zeigen. Sie können verwendet werden, um Addition und Subtraktion zu veranschaulichen.
          </p>
          <p>
            Zum Beispiel:
            <strong>0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - 11 - 12 - 13 - 14 - 15 - 16 - 17 - 18 - 19 - 20</strong>
          </p>
        </section>

        {/* Abschnitt: Bilder zum Zählen */}
        <section id="counting-images">
          <div className="image-gallery">
            <div className="image-card">
              <h2><strong>Was ist Addition? ⭐️</strong></h2>
              <p>
               Das Pluszeichen <strong>(+)</strong> ist das Symbol für die Addition.
               Bei der Addition addiert man zwei oder mehr Zahlen, um eine Summe zu bilden.
                
                Zum Beispiel: 4 + 5 = 9. </p>  
                
                <p>9 ist die Summe.</p>
              <p>Zum Beispiel⭐️+⭐️+⭐️+⭐️+⭐️+⭐️+⭐️+⭐️+⭐️=⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ wir haben ingesamt 9 Sterne</p>
            </div>
            <div className="image-card">
              <h2><strong>Was ist Subtraktion? 🌟</strong></h2>
              <p>
              Das Minuszeichen <strong>(-)</strong> ist das Symbol für die Subtraktion.
                Bei der Subtraktion zieht  man eine Zahl von einer anderen Zahl ab , um die Differenz zu erhalten.
                Zum Beispiel: 9 - 5 = 4.</p>
                <p>4 ist die Differenz.</p>
                
                <p> Zum Beispiel:🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟-🌟🌟🌟🌟🌟🌟=🌟🌟🌟 hier bleibt 3 Sterne</p>
         
            </div>
          </div>
        </section>

        {/* Abschnitt: Lernvideos */}
        <section id="videos">
          <h2><strong>Lernvideos</strong></h2>
          <div className="video-container">
            <YouTube videoId="pvz5kfF6pys" />
          </div>
          <div className="video-container">
            <YouTube videoId="L7kk6Lz8HS4" />
          </div>
        </section>
      </main>
      {/* Footer */}
    </div>
  );
}

export default Zahleneinführung;
