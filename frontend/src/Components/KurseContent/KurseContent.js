import React from 'react';
import MathImage from '../../assets/math-image.jpg'; // Bilddateien sollten eindeutige Namen haben
import PhysicsImage from '../../assets/physics-image.jpg'; // Physik-Bild-Dateiname korrigiert
import EnglishImage from '../../assets/english-image.jpg'; 
import BiologieImage from '../../assets/biologie-image.jpg'; 
import DeutschImage from '../../assets/deutsch-image.jpg'; 

import { Link } from 'react-router-dom';

class KurseContent extends React.Component {
    state = {}
    render() {
        return (
            <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
                <h1 className="text-4xl font-bold text-center">Willkommen bei unseren Kurses</h1>
                
                <img src={PhysicsImage} alt="Bild von einem Computer" className="rounded-lg mt-5 w-[300px]" />
                <img src={EnglishImage} alt="Bild von einem Computer" className="rounded-lg mt-5 w-[300px]" />
                <img src={MathImage} alt="Bild von einem Computer" className="rounded-lg mt-5 w-[550px]" />
                <img src={BiologieImage} alt="Bild von einem Computer" className="rounded-lg mt-5 w-[600px]" />
                <img src={DeutschImage} alt="Bild von einem Computer" className="rounded-lg mt-5 w-[600px]" />

                <div className="h-56 grid grid-cols-3 gap-5 content-start"> {/* className statt class */}
                    <nav>
                        <ul className="flex flex-row gap-5">
                        
<li>
<Link to="/Mathematique" className="bg-blue-600 p-2 rounded-lg text-white border-b-4 border-blue-590 hover:border-b-2 flex items-center">
<img src={MathImage} alt="Bild von einem Computer" className="rounded-lg mt-5 w-[550px]" />
  
</Link>
</li>

<li>
<Link to="/Physik" className="bg-blue-600 p-2 rounded-lg text-white border-b-4 border-blue-590 hover:border-b-2 flex items-center">
<img src={PhysicsImage} alt="Bild von einem Computer" className="rounded-lg mt-5 w-[600px]" />

</Link>
</li>

<li>
<Link to="/English" className="bg-blue-600 p-2 rounded-lg text-white border-b-4 border-blue-590 hover:border-b-2 flex items-center">
<img src={EnglishImage} alt="Bild von einem Computer" className="rounded-lg mt-5 w-[600px]" />
</Link>
</li>
<li>
<Link to="/Deutsch" className="bg-blue-600 p-2 rounded-lg text-white border-b-4 border-blue-590 hover:border-b-2 flex items-center">
<img src={DeutschImage} alt="Bild von einem Computer" className="rounded-lg mt-5 w-[600px]" />

</Link>
</li>

<li>
<Link to="/Biologie" className="bg-blue-600 p-2 rounded-lg text-white border-b-4 border-blue-590 hover:border-b-2 flex items-center">
<img src={BiologieImage} alt="Bild von einem Computer" className="rounded-lg mt-5 w-[600px]" />

</Link>
</li>
                
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default KurseContent;
