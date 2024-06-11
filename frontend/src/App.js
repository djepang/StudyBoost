import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Help from './Pages/Help/Help';
import Login from './Pages/Login/Login';
import Error from './Pages/Error/Error';
import Hausaufgabenhilfe from './Pages/Hausaufgabenhilfe/Hausaufgabenhilfe';
import Notenverbesserung from './Pages/Notenverbesserung/Notenverbesserung';
import Register from './Pages/Register/Register'; // Korrekte Importanweisung


function App() {
  return (

  
    <div className="App">
      <Routes>
        <Route path="/register" component={Register} />
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/help' element={<Help />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Hausaufgabenhilfe' element={<Hausaufgabenhilfe />} />
        <Route path='/Notenverbesserung' element={< Notenverbesserung />} />
        <Route path='*' element={<Error />} />
        
        
      </Routes>
    </div>
  );
}

export default App;
