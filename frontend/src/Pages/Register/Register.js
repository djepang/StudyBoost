import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Einfache Validierung
    if (!username || !email || !password) {
      setError('Bitte fülle alle Felder aus.');
      return;
    }
    
    setError('');
    
    console.log('Formular abgeschickt:', { username, email, password });
    
    // Hier kannst du den Registrierungsprozess implementieren, z.B. eine API-Anfrage senden.
    // Nach erfolgreicher Registrierung kannst du den Benutzer z.B. zur Login-Seite weiterleiten.
    
    // Leere die Eingabefelder nach dem Absenden des Formulars
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const handleGoogleSignIn = () => {
    // Hier kannst du den Code für die Google-Authentifizierung einfügen
    console.log('Google-Anmeldung...');
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
        <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
          <div
            className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-xl text-gray-600 text-center">Registrieren</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="username">Benutzername</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Passwort</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Registrieren</button>
            </form>
            <button onClick={handleGoogleSignIn} className="w-full flex justify-center mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Mit Google registrieren</button>
            <div className="mt-4 flex items-center w-full text-center">
              <p>Bereits einen Account? <Link to="/login" className="text-indigo-600 hover:underline">Einloggen</Link></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
