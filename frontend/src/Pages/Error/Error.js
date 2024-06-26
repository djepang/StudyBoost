import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const ErrorPage = ({ errorCode, errorMessage }) => {
    const containerRef = useRef();

    useEffect(() => {
        // Erstelle eine neue Szene
        const scene = new THREE.Scene();

        // Erstelle eine neue Kamera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Erstelle ein neues Rendervorrichtung
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Erstelle ein neues Licht
        const light = new THREE.AmbientLight(0xffffff);
        scene.add(light);

        // Lade die Schriftart und erstelle den 3D-Text
        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
            const textContent = errorMessage ? errorMessage : 'Error'; // Verwende errorMessage oder Standard "Error"
            const geometry = new TextGeometry(textContent, {
                font: font,
                size: 1,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.03,
                bevelOffset: 0,
                bevelSegments: 5
            });
            const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const textMesh = new THREE.Mesh(geometry, material);
            scene.add(textMesh);
            textMesh.position.set(-1.5, 0, 0);

            // Animationsfunktion
            const animate = () => {
                requestAnimationFrame(animate);
                textMesh.rotation.x += 0.01;
                textMesh.rotation.y += 0.01;
                renderer.render(scene, camera);
            };

            animate();
        });

        camera.position.z = 5;

        // Aufräumen bei Komponentenentfernung
        const currentContainer = containerRef.current;
        return () => {
            if (currentContainer) {
                currentContainer.removeChild(renderer.domElement);
            }
        };
    }, [errorMessage]); // Überwache errorMessage in der Abhängigkeitsliste

    return (
        <div>
            <Header />
            <div ref={containerRef} style={{ position: 'relative', height: '100vh', width: '100vw' }}>
                <h3 style={{ position: 'absolute', top: '10px', left: '10px' }}>Error {errorCode}</h3>
                <p style={{ position: 'absolute', top: '40px', left: '10px' }}>Oops! Something went wrong.</p>
                <p style={{ position: 'absolute', top: '70px', left: '10px' }}>Please try again later.</p>
            </div>
            <Footer />
        </div>
    );
}

ErrorPage.propTypes = {
    errorCode: PropTypes.string.isRequired,
    errorMessage: PropTypes.string // Optionaler Prop für die Fehlermeldung
};

export default ErrorPage;
