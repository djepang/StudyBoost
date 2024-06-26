import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import './GeschichtenMaerchen.css';
import Header from '../../../Components/Header/Header';
import pumucklAudio from '../../../assets/pumuckl-und-der-geburtstag.mp3';
import { Link } from 'react-router-dom';


function Märchen() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;

    const playPromise = audioElement.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        audioElement.pause();
      }).catch(error => {
        // Autoplay was prevented
        console.log("Autoplay prevented: ", error);
      });
    }

    audioElement.addEventListener('loadedmetadata', () => {
      setDuration(audioElement.duration);
    });

    audioElement.addEventListener('timeupdate', () => {
      setCurrentTime(audioElement.currentTime);
      setProgress((audioElement.currentTime / audioElement.duration) * 100);
    });

    return () => {
      audioElement.removeEventListener('loadedmetadata', () => {});
      audioElement.removeEventListener('timeupdate', () => {});
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="page-container">
       <div>
      <Header />
      {<h2>🌟 Geschichten und Märchen 🌟</h2>}
    </div>
      
      <nav>
          <Link to="/"> <strong>Zurück zur Homeseite </strong></Link>
        </nav>

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
            <YouTube videoId="0Ah4y8gCA-Q" />
            <YouTube videoId="mGvd6yRgkXw" />
          </div>
        </section>
        <section className="audio-section">
          <h2>🎧 Hörbuch "Pumuckl und der Geburtstag" 🎂</h2>
          <div className="audio-container">
            <div className="audio">
              <h3>Pumuckl und der Geburtstag 🎉</h3>
              <audio ref={audioRef} src={pumucklAudio} className="hidden"></audio>
              <button className="play-button" onClick={togglePlay}>
                {playing ? '⏸️ Pause' : '▶️ Abspielen'}
              </button>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="time-display">
                <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>© 2024 Märchenwelt. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default Märchen;