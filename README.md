# StudyBoost
# StudyBoost
Server.js:
Importieren von Modulen:
const express = require("express");//express: Ein Web-Framework für Node.js, das verwendet wird, um Webanwendungen und APIs zu erstellen
const cors = require("cors");//cors: Ein Middleware-Paket, das Cross-Origin Resource Sharing (CORS) ermöglicht.
const dbConfig = require("./app/config/db.config");// Eine Datei, die Datenbankkonfigurationsinformationen enthält.
const dotenv = require("dotenv");//Ein Paket, das verwendet wird, um Umgebungsvariablen aus einer .env-Datei 
dotenv.config({ path: ".env" });//Lädt Umgebungsvariablen aus der .env-Datei.
Abrufen des Datenbank-Passworts:
const db_key = process.env.PASSWORD;//db_key speichert das Passwort für die Datenbank, das aus der .env-Datei gelesen wird.
Erstellen einer Express-Anwendung:
const app = express();//app ist eine Instanz von Express.
CORS-Konfiguration:
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));//Konfiguriert CORS, sodass Anfragen von http://localhost:8081 erlaubt sind.
Middleware zum Parsen von Anfragen: