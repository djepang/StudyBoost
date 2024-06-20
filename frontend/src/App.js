import { Route, Routes } from 'react-router-dom';
import 'bootstrap';
import './App.css';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Help from './Pages/Help/Help';
import Login from './Pages/Login/Login';
import Error from './Pages/Error/Error';
import Hausaufgabenhilfe from './Pages/Hausaufgabenhilfe/Hausaufgabenhilfe';
import Notenverbesserung from './Pages/Notenverbesserung/Notenverbesserung';
import Register from './Components/Register/Register';
import Mathematik from './Pages/Mathematik/Mathematik';
import MathematikContent from './Components/MathematikContent/MathematikContent';
import DeutschContent from './Components/DeutschContent/DeutschContent';
import MathematikContentTest1 from './Components/MathematikContentTest1/MathematikContentTest1';
import DeutschContentTest1 from './Components/DeutschContentTest1/DeutschContentTest1';
import Klasse1Test from './Pages/Mathematik/Klasse1/Test';
import Klasse1deutsch from './Pages/Deutsch/Klasse1/deutsch';
import Klasse1zahleneinführung from './Pages/Mathematik/Klasse1/zahleneinführung';
import Klasse1Woertersaetze from './Pages/Deutsch/Klasse1/Woertersaetze';
import Klasse1Alphabeteinführung from './Pages/Deutsch/Klasse1/Alphabeteinführung';
import Klasse1GeschichtenMaerchen from './Pages/Deutsch/Klasse1/GeschichtenMaerchen'
import Klasse1additionsubtraktion from './Pages/Mathematik/Klasse1/additionsubtraktion';
import Klasse1formenmuster from './Pages/Mathematik/Klasse1/formenmuster';
import Deutsch from './Pages/Deutsch/Deutsch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/help' element={<Help />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Hausaufgabenhilfe' element={<Hausaufgabenhilfe />} />
        <Route path='/Notenverbesserung' element={<Notenverbesserung />} />
        <Route path='/Mathematik' element={<Mathematik />} />
        <Route path='/Deutsch' element={<Deutsch />} />
        <Route path="/Mathematik/Klasse1Test" element={<Klasse1Test />} />
        <Route path="/Deutsch/Klasse1deutsch" element={<Klasse1deutsch />} />
        <Route path="/Deutsch/Klasse1Woertersaetze" element={<Klasse1Woertersaetze />} />
        <Route path="/Deutsch/Klasse1Alphabeteinführung" element={<Klasse1Alphabeteinführung />} />
        <Route path="/Deutsch/Klasse1GeschichtenMaerchen" element={<Klasse1GeschichtenMaerchen />} />
        <Route path="/Mathematik/Klasse1zahleneinführung" element={<Klasse1zahleneinführung />} />
        <Route path="/Mathematik/Klasse1additionsubtraktion" element={<Klasse1additionsubtraktion />} />
        <Route path="/Mathematik/Klasse1formenmuster" element={<Klasse1formenmuster />} />
        <Route path="/MathematikContent" element={<MathematikContent />} />
        <Route path="/DeutschContent" element={<DeutschContent />} />
        <Route path="/MathematikContentTest1" element={<MathematikContentTest1 />} />
        <Route path="/DeutschContentTest1" element={<DeutschContentTest1 />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
