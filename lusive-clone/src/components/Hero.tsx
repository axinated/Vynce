import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to Lusive</h1>
                <p className="hero-description">Discover amazing features and services tailored just for you.</p>
                <a href="#cta" className="hero-cta-button">Get Started</a>
            </div>
        </section>
    );
};

export default Hero;