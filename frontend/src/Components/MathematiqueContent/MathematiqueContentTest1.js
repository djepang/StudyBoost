import React from 'react';

const Übung1 = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Klasse 1 </h1>
            
            <div className="Übung">
                <h2 className="text-xl mb-2">Übung 1</h2>
                <p>Was ist 2 + 2?</p>
                <ul>
                    <li>4</li>
                    <li>3</li>
                    <li>5</li>
                </ul>
            </div>
            <div className="exercise">
                <h2 className="text-xl mb-2">Übung 2</h2>
                <p>Was ist 5 - 3?</p>
                <ul>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
        </div>
    );
};

export default Übung1;
