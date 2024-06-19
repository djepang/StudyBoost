import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import './GeschichtenMaerchen.css';
import bgMusic from './background-music.mp3';

function Märchen() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    <div className="page-container">
      <header>
        <h1>🌟 Geschichten und Märchen 🌟</h1>
      </header>
      <main>
        <div className="quote">
          <p>"Ein Buch ist ein Traum, den du in deinen Händen hältst." - Neil Gaiman</p>
        </div>
        <section className="story-section">
          <h2>📖 Geschichten 📖</h2>
          <div className="story">
            <h3>Die kleine Raupe Nimmersatt 🐛</h3>
            <p>
              Es war einmal eine kleine Raupe, die immer hungrig war. Sie fraß und fraß, bis sie eines Tages zu einem wunderschönen Schmetterling wurde. 🦋
            </p>
          </div>
          <div className="story">
            <h3>Hänsel und Gretel 🍭🏡</h3>
            <p>
              Hänsel und Gretel verirrten sich im Wald und fanden ein Haus aus Lebkuchen. Doch die böse Hexe, die dort lebte, hatte andere Pläne für sie.
            </p>
          </div>
        </section>
        <section className="video-section">
          <h2>🎥 Lernvideos 🎥</h2>
          <div className="video-container">
            <YouTube videoId="d4kj9zCv0O8" />
            <YouTube videoId="4KQ5XlJ5xSo" />
          </div>
        </section>
        <div className="music-control">
          <button onClick={togglePlay}>
            {playing ? '⏸️ Musik stoppen' : '▶️ Musik spielen'}
          </button>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </main>
      <footer>
        <p>© 2024 Märchenwelt. Alle Rechte vorbehalten.</p>
      </footer>
      <audio ref={audioRef} src={bgMusic} className="hidden"></audio>
    </div>
  );
}

export default Märchen;