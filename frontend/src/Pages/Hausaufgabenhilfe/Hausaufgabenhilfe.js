import React, { useState } from 'react';
import axios from 'axios'; 

const Hausaufgabenhilfe = () => {
    // Definiert die State-Hooks für die Komponente
    const [homeworkText, setHomeworkText] = useState(''); // State für den Text der Hausaufgabe
    const [file, setFile] = useState(null); // State für die hochgeladene Datei
    const [responseMessage, setResponseMessage] = useState(''); // State für die Antwortnachricht

    // Handler für die Änderung des Hausaufgabentextes
    const handleTextChange = (e) => {
        setHomeworkText(e.target.value); // Aktualisiert den State mit dem neuen Textwert
    };


    const handleFileChange = (e) => {
        setFile(e.target.files[0]); 
    };

    // Handler für das Absenden des Formulars
    const handleSubmit = async (e) => {
        e.preventDefault(); // Verhindert die Standardaktion des Formulars (Seitenneuladen)

        try {
            // API-Aufruf zum Speichern der Hausaufgabe
            await submitHomeworkToServer(homeworkText, file); // Ruft die Funktion auf, um die Hausaufgabe an den Server zu senden
            setResponseMessage('Hausaufgabe erfolgreich abgesendet!'); // Setzt die Erfolgsnachricht
            // Formular zurücksetzen
            setHomeworkText(''); // Setzt den Hausaufgabentext zurück
            setFile(null); // Setzt die hochgeladene Datei zurück
        } catch (error) {
            console.error('Fehler beim Absenden der Hausaufgabe:', error); // Gibt den Fehler in der Konsole aus
            setResponseMessage('Fehler beim Absenden der Hausaufgabe.'); // Setzt die Fehlermeldung
        }
    };

    // Funktion zum Senden der Hausaufgabe an den Server
    const submitHomeworkToServer = async (text, file) => {
        try {
            // Erstellen von FormData für die Übermittlung von Text und Datei
            const formData = new FormData();
            formData.append('homeworkText', text); // Fügt den Text der Hausaufgabe zu FormData hinzu
            formData.append('file', file); // Fügt die Datei zu FormData hinzu

            // POST-Anfrage an den Server mit axios
            const response = await axios.post('/api/homework', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Setzt den Header für die Anfrage
                }
            });

            console.log('Serverantwort:', response.data); // Konsolenausgabe der Serverantwort
        } catch (error) {
            console.error('Fehler beim Speichern der Hausaufgabe:', error); // Gibt den Fehler in der Konsole aus
            throw error; // Weiterwerfen des Fehlers für eine höhere Fehlerbehandlung
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen"> 
            <div className="container mx-auto p-4"> 
                <h1 className="font-bold text-2xl mb-4">Hausaufgabenhilfe</h1> {/* Titel der Seite */}

                <form onSubmit={handleSubmit} className="max-w-lg bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    {/* Formularcontainer mit Stilklassen */}
                    <div className="mb-4"> {/* Container für das Textfeld */}
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Beschreibe deine Hausaufgabe:
                            <textarea
                                value={homeworkText}
                                onChange={handleTextChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>
                    <div className="mb-4"> {/* Container für das Dateiuploadfeld */}
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Datei hochladen:
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>
                    <div className="flex items-center justify-between"> {/* Container für den Submit-Button */}
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Anfrage absenden
                        </button>
                    </div>
                </form>

                {responseMessage && ( /* Wenn responseMessage vorhanden ist, zeige sie an */
                    <p className="text-sm text-green-500 mb-4">{responseMessage}</p>
                )}
            </div>
        </div>
    );
};

export default Hausaufgabenhilfe;