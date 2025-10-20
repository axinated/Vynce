import React from 'react';

const Features: React.FC = () => {
    return (
        <section className="features">
            <div className="container">
                <h2 className="features-title">Our Features</h2>
                <div className="features-list">
                    <div className="feature-item">
                        <h3>Feature One</h3>
                        <p>Description of feature one.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Feature Two</h3>
                        <p>Description of feature two.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Feature Three</h3>
                        <p>Description of feature three.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;