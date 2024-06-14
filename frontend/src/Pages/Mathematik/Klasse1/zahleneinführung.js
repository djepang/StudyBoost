import React from 'react';
import './zahleneinführung.css';

function Zahleneinführung() {
  return (
    <div className="zahleneinfuehrung">
      <header className="zahleneinführung-header">
        <h1>Einführung in Zahlen und Zählen</h1>
      </header>
      <main>
        <section id="introduction">
          <h2>Einführung in Zahlen bis 20</h2>
          <p>
            Zahlen sind die Grundlage der Mathematik.
          </p>
          <p>
            Hier lernen Sie die Zahlen von 1 bis 20 kennen, ihre Schreibweise und wie man sie zählt.
          </p>
          <p>
            Diese grundlegenden Konzepte sind wichtig für den Einstieg in die Mathematik.
          </p>
          <ul>
            <li><strong>1:</strong> Eins</li>
            <li><strong>2:</strong> Zwei</li>
            <li><strong>3:</strong> Drei</li>
            <li><strong>4:</strong> Vier</li>
            <li><strong>5:</strong> Fünf</li>
            <li><strong>6:</strong> Sechs</li>
            <li><strong>7:</strong> Sieben</li>
            <li><strong>8:</strong> Acht</li>
            <li><strong>9:</strong> Neun</li>
            <li><strong>10:</strong> Zehn</li>
            <li><strong>11:</strong> Elf</li>
            <li><strong>12:</strong> Zwölf</li>
            <li><strong>13:</strong> Dreizehn</li>
            <li><strong>14:</strong> Vierzehn</li>
            <li><strong>15:</strong> Fünfzehn</li>
            <li><strong>16:</strong> Sechzehn</li>
            <li><strong>17:</strong> Siebzehn</li>
            <li><strong>18:</strong> Achtzehn</li>
            <li><strong>19:</strong> Neunzehn</li>
            <li><strong>20:</strong> Zwanzig</li>
          </ul>
        </section>

        <section id="counting-images">
          <h2>Zählen durch Bilder</h2>
          <div className="image-gallery">
            <div className="image-card">
              <img src="path/to/image1.jpg" alt="Bild 1" />
              <p>Beschreibung oder Erklärung des ersten Bildes</p>
            </div>
            <div className="image-card">
              <img src="path/to/image2.jpg" alt="Bild 2" />
              <p>Beschreibung oder Erklärung des zweiten Bildes</p>
            </div>
            {/* Weitere Bilder können nach Bedarf hinzugefügt werden */}
          </div>
        </section>

        <section id="number-lines">
          <h2>Zahlenlinien</h2>
          <p>
            Zahlenlinien sind eine visuelle Darstellung, um die Position von Zahlen zu zeigen. Sie können verwendet werden, um Addition und Subtraktion zu veranschaulichen.
          </p>
          <p>
            Zum Beispiel:
            <strong>0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - 11 - 12 - 13 - 14 - 15 - 16 - 17 - 18 - 19 - 20</strong>
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Beispielunterricht. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default Zahleneinführung;
