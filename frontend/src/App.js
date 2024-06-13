import { Route, Routes } from 'react-router-dom';
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
import MathematikContentTest1 from './Components/MathematikContentTest1/MathematikContentTest1';
import Klasse1Test from './Pages/Mathematik/Klasse1/Test';
import Klasse1zahleneinführung from './Pages/Mathematik/Klasse1/zahleneinführung';

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
        <Route path="/Mathematik/Klasse1Test" element={<Klasse1Test />} />
        <Route path="/Mathematik/Klasse1zahleneinführung" element={<Klasse1zahleneinführung />} />
        <Route path="/MathematikContent" element={<MathematikContent />} />
        <Route path="/MathematikContentTest1" element={<MathematikContentTest1 />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
