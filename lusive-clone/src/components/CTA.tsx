import React from 'react';

const CTA: React.FC = () => {
    return (
        <div className="cta-container">
            <h2 className="cta-title">Join Us Today!</h2>
            <p className="cta-description">Sign up now to get exclusive access to our features and updates.</p>
            <a href="/signup" className="cta-button">Get Started</a>
        </div>
    );
};

export default CTA;