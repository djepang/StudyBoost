import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './StartPage';
import Home from './pages/Home';
import Futur from './pages/Futur';
import Header from './pages/Header';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Futur/>
    </Router>
  );
}

export default App;
