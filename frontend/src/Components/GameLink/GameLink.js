import React from 'react';
import './GameLink.css'; // Import der CSS-Datei
import googlePlayLogo from '../../assets/google-play-logo.png'; // Import des Google Play-Logos

function GameLink() {
  const handleClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.rvappstudios.math.kids.counting', '_blank');
  };

  return (
    <div className="game-link-container">
      <h2><strong>Mathematik-Spiel für Kinder</strong></h2>
      <button 
        onClick={handleClick}
        className="google-play-button"
      >
        <img src={googlePlayLogo} alt="Google Play Logo" className="google-play-logo" /></button>
        <span><strong>Bitte spiel im Google Play Store herunterladen. Danke!</strong></span>
      
    </div>
  );
}

export default GameLink;

