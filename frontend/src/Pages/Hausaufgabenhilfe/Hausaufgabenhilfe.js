import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios'; // Falls du axios verwenden möchtest

const Hausaufgabenhilfe = () => {
    const [homeworkText, setHomeworkText] = useState('');
    const [file, setFile] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');

    const handleTextChange = (e) => {
        setHomeworkText(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Simuliere einen API-Aufruf (hier ein Timeout als Platzhalter)
            await submitHomeworkToServer(homeworkText, file);
            setResponseMessage('Hausaufgabe erfolgreich abgesendet!');
        } catch (error) {
            console.error('Fehler beim Absenden der Hausaufgabe:', error);
            setResponseMessage('Fehler beim Absenden der Hausaufgabe.');
        }
    };

    const submitHomeworkToServer = async (text, file) => {
        try {
            // Hier die API-Anfrage an den Server
            const formData = new FormData();
            formData.append('homeworkText', text);
            formData.append('file', file);

            const response = await axios.post('/api/homework', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);
        } catch (error) {
            console.error('Fehler beim Speichern der Hausaufgabe:', error);
            throw error;
        }
    };

    return (
        <div>
            <Header />
            <h1>Hausaufgabenhilfe</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Beschreibe deine Hausaufgabe:
                        <textarea value={homeworkText} onChange={handleTextChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Datei hochladen:
                        <input type="file" onChange={handleFileChange} />
                    </label>
                </div>
                <button type="submit">Anfrage absenden</button>
            </form>

            {responseMessage && <p>{responseMessage}</p>}

            <Footer />
        </div>
    );
};

export default Hausaufgabenhilfe;
