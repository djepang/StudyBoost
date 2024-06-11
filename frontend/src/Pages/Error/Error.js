import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import * as THREE from 'three';

const ErrorPage = ({ errorCode }) => {
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
        
        // Erstelle ein neues Würfelgeometrie und -material
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        
        camera.position.z = 5;
        
        // Animationsfunktion
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        // Aufräumen bei Komponentenentfernung
        return () => {
            renderer.domElement.remove();
        };
    }, []);

    return (
        <div>
            <Header />
            <div ref={containerRef}>
                <h3>Error {errorCode}</h3>
                <p>Oops! Something went wrong.</p>
                <p>Please try again later.</p>
            </div>
            <Footer />
        </div>
    );
}

ErrorPage.propTypes = {
    errorCode: PropTypes.string.isRequired, // Prop-Validierung hinzugefügt
};

export default ErrorPage;