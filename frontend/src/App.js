import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Help from './Pages/Help/Help';
import Login from './Pages/Login/Login';
import Error from './Pages/Error/Error';
import Hausaufgabenhilfe from './Pages/Hausaufgabenhilfe/Hausaufgabenhilfe';
import Notenverbesserung from './Pages/Notenverbesserung/Notenverbesserung';
import Register from './Components/Register/Register'; // Korrekte Importanweisung
import Mathematique from './Pages/Mathematique/Mathematique';
import MathematiqueContent from './Components/MathematiqueContent/MathematiqueContent';
import MathematiqueContentTest1 from './Components/MathematiqueContentTest1/MathematiqueContentTest1';
import Klasse1Test from './Pages/Mathematique/Klasse1/Test';
function App() {
  return (

  
    <div className="App">
      <Routes>
        <Route path="/register" element={Register} />
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/help' element={<Help />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Hausaufgabenhilfe' element={<Hausaufgabenhilfe />} />
        <Route path='/Notenverbesserung' element={< Notenverbesserung />} />
        <Route path='/Mathematique' element={< Mathematique />} />
        <Route path="/Mathematique/Klasse1Test" element={<Klasse1Test />} />
        <Route path="/Mathematique" element={<MathematiqueContent />} />
        <Route path="/Mathematique" element={<MathematiqueContentTest1 />} />
        <Route path='*' element={<Error />} />
        
        
      </Routes>
    </div>
  );
}

export default App;
