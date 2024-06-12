import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useUserAuth } from '../../context/UserAuthContext';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useUserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Einfache Validierung
    if (!username || !email || !password) {
      setError('Bitte fülle alle Felder aus.');
      return;
    }
    
    setError('');
    
    try {
      // Hier kannst du den Registrierungsprozess implementieren, z.B. eine API-Anfrage senden.
      await register(username, email, password);
      console.log('Registrierung erfolgreich:', { username, email, password });
      
      // Leere die Eingabefelder nach dem Absenden des Formulars
      setUsername('');
      setEmail('');
      setPassword('');
      
      // Nach erfolgreicher Registrierung kannst du den Benutzer z.B. zur Login-Seite weiterleiten.
      // history.push('/login'); // assuming you are using react-router
    } catch (err) {
      setError('Registrierung fehlgeschlagen: ' + err.message);
    }
  };

  const handleGoogleSignIn = async (credentialResponse) => {
    try {
      console.log('Google-Anmeldung erfolgreich:', credentialResponse);
      // Hier kannst du den Code für die Google-Authentifizierung einfügen
      // await googleSignIn(credentialResponse); // assuming you have a googleSignIn function
    } catch (err) {
      setError('Google-Anmeldung fehlgeschlagen: ' + err.message);
    }
  };

  const handleGoogleSignInFailure = (error) => {
    console.log('Google-Anmeldung fehlgeschlagen:', error);
    setError('Google-Anmeldung fehlgeschlagen');
  };

  return (
    <GoogleOAuthProvider clientId="360341916280-m17vkf8kql615n980ag6ijit6ve8754h.apps.googleusercontent.com">
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
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Passwort</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Registrieren</button>
            </form>
            <div className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
              <GoogleLogin
                onSuccess={handleGoogleSignIn}
                onError={handleGoogleSignInFailure}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Mit Google registrieren
                  </button>
                )}
              />
            </div>
            <div className="mt-4 flex items-center w-full text-center">
              <p>Bereits einen Account? <Link to="/login" className="text-indigo-600 hover:underline">Einloggen</Link></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </GoogleOAuthProvider>
  );
};

export default Register;
