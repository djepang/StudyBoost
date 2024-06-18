import React from 'react';
import YouTube from 'react-youtube';
import './zahleneinführung.css';

function Zahleneinführung() {
  return (
    <div className="zahleneinfuehrung">
      <header className="zahleneinführung-header">
<h1><strong>Einführung  Zahlen und Zählen</strong></h1>
      </header>
      <main>
        <section id="introduction">


          <h2><strong>Einführung  Zahlen bis 20</strong></h2>
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
          <div class="number-item"><strong>1:</strong> Eins</div>
          <div class="number-item"><strong>2:</strong> Zwei</div>
          <div class="number-item"><strong>3:</strong> Drei</div>
          <div class="number-item"><strong>4:</strong> Vier</div>
          <div class="number-item"><strong>5:</strong> Fünf</div>
          <div class="number-item"><strong>6:</strong> Sechs</div>
          <div class="number-item"><strong>7:</strong> Sieben</div>
          <div class="number-item"><strong>8:</strong> Acht</div>
          <div class="number-item"><strong>9:</strong> Neun</div>
          <div class="number-item"><strong>10:</strong> Zehn</div>
          <div class="number-item"><strong>11:</strong> Elf</div>
          <div class="number-item"><strong>12:</strong> Zwölf</div>
          <div class="number-item"><strong>13:</strong> Dreizehn</div>
          <div class="number-item"><strong>14:</strong> Vierzehn</div>
          <div class="number-item"><strong>15:</strong> Fünfzehn</div>
          <div class="number-item"><strong>16:</strong> Sechzehn</div>
          <div class="number-item"><strong>17:</strong> Siebzehn</div>
          <div class="number-item"><strong>18:</strong> Achtzehn</div>
          <div class="number-item"><strong>19:</strong> Neunzehn</div>
          <div class="number-item"><strong>20:</strong> Zwanzig</div>
          </div>
        </section>

        
        <section id="counting-images">
          
          <div className="image-gallery">
            <div className="image-card">
              
              <h2><strong>Was ist Addition?</strong></h2>
            <p>
                Die Addition ist die mathematische Operation, bei der zwei oder mehr Zahlen (Addenden) zusammengezählt werden, um eine Summe zu bilden.
                Das Symbol für Addition ist das Pluszeichen (+).
                Zum Beispiel: 4 + 5 = 9. Hier sind 4 und 5 die Addenden, und 9 ist die Summe.
            </p>

            </div>
            <div className="image-card">
            <h2><strong>Was ist Subtraktion?</strong></h2>
            <p>
                Die Subtraktion ist die mathematische Operation, bei der eine Zahl (der Subtrahend) von einer anderen Zahl (dem Minuend) abgezogen wird, um die Differenz zu erhalten.
                Das Symbol für Subtraktion ist das Minuszeichen (−).
                Zum Beispiel: 9 − 5 = 4. Hier ist 9 der Minuend, 5 der Subtrahend, und 4 ist die Differenz.
            </p>

            </div>
            {/* Weitere Bilder können nach Bedarf hinzugefügt werden */}
          </div>
        </section>

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
      <footer>
        <p>&copy; 2024 Beispielunterricht. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default Zahleneinführung;
