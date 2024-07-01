import React from 'react'
import DeutschContent from '../../Components/DeutschContent/DeutschContent'
import { Link } from 'react-router-dom';

<nav>
<Link to="/"> <strong>Zurück zur Homeseite </strong></Link>
</nav>


const Deutsch = () => {
    return (
        <div>
            <DeutschContent />
        </div>
    )
}

export default Deutsch