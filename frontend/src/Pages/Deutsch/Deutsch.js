import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import DeutschContent from '../../Components/DeutschContent/DeutschContent'
import { Link } from 'react-router-dom';

<nav>
<Link to="/"> <strong>Zurück zur Homeseite </strong></Link>
</nav>


const Deutsch = () => {
    return (
        <div>
            <Header />
            <DeutschContent />
            <Footer />
        </div>
    )
}

export default Deutsch