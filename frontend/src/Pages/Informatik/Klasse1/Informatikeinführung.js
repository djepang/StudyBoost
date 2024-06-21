import React from 'react';
import YouTube from 'react-youtube';
import './Informatikeinführung.css';


function Informatikeinführung() {
  return (
    <div className="informatikeinfühhrung">
      {/* Header */}
      <header className="Einformatikeinführung-header">
        <h1><strong>Einführung in die Informatik</strong></h1>
      </header>
      
      {/* Hauptinhalt */}
      <main>
        {/* Abschnitt: Einführung Informatik */}
        <section id="introduction">
          <h2><strong>Einführung in die Informatik</strong></h2>
          <p>
            Informatik ist die Wissenschaft der systematischen Verarbeitung von Informationen, besonders der automatischen Verarbeitung mit Hilfe von Computern.
          </p>
          <p>
            Hier lernen Sie die grundlegenden Konzepte der Informatik kennen, wie z.B. Algorithmen, Programmierung und Datenspeicherung.
          </p>
          <p>
            Diese grundlegenden Konzepte sind wichtig für den Einstieg in die Welt der Computer und Technologie.
          </p>
        </section>

        {/* Abschnitt: Algorithmen */}
        <section id="algorithms">
          <h2><strong>Was ist ein Algorithmus?</strong></h2>
          <p className="center-text">
            Ein Algorithmus ist eine Schritt-für-Schritt-Anleitung zur Lösung eines Problems oder zur Erreichung eines Ziels. Es ist eine Reihe von klar definierten Anweisungen, die nacheinander ausgeführt werden.
          </p>
          <p>
            Zum Beispiel: Ein Rezept zum Backen eines Kuchens ist ein Algorithmus. Es gibt genaue Anweisungen, die in einer bestimmten Reihenfolge befolgt werden müssen, um das gewünschte Ergebnis zu erzielen.
          </p>
        </section>

        {/* Abschnitt: Programmierung */}
        <section id="programming">
          <div className="image-gallery">
            <div className="image-card">
              <h2><strong>Was ist Programmierung? 💻</strong></h2>
              <p>
                Programmierung ist der Prozess des Schreibens von Anweisungen, die ein Computer ausführen kann. Diese Anweisungen werden in einer Programmiersprache geschrieben.
              </p>
              <p>
                Zum Beispiel: Ein einfaches Programm könnte den Computer anweisen, "Hallo, Welt!" auf dem Bildschirm anzuzeigen.
              </p>
            </div>
            <div className="image-card">
              <h2><strong>Was ist ein Programmierer? 👩‍💻👨‍💻</strong></h2>
              <p>
                Ein Programmierer ist jemand, der Programme schreibt. Programmierer verwenden Programmiersprachen, um Software zu erstellen, die auf Computern und anderen Geräten läuft.
              </p>
              <p>
                Zum Beispiel: Spiele, Apps und Webseiten werden alle von Programmierern erstellt.
              </p>
            </div>
          </div>
        </section>

        {/* Abschnitt: Lernvideos */}
        <section className="video-section">
          <h2>🎥 Lernvideos 🎥</h2>
          <div className="video-container">
            <YouTube videoId="JG-gofSMWGw" />
            <YouTube videoId="3Kq1MIfTWCE" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Beispielunterricht. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default Informatikeinführung;
