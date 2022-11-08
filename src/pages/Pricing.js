import React from 'react';
import "../CSS/pricing.css";

export default function Pricing() {
    return (
        <div className="pricing-container">
            <div className='pricing-card'>
                <img
                src={require('../assets/images/video.jpg')}
                alt="headshot"
                className="card-img"
                />
                <h2 className='pricing-card-title'>
                    Videography
                </h2>
                <h3>$250</h3>
                <p>
                    HD Video with professional editing for your business or residential property
                </p>
            </div>
            <div className='pricing-card'>
                <img
                src={require('../assets/images/lobby.jpg')}
                alt="headshot"
                className="card-img"
                />
                <h2 className='pricing-card-title'>
                    Business / Real Estate Photos
                </h2>
                <h3>$150</h3>
                <p>
                    High quality photos for your business or residential property.
                </p>
            </div>
            <div className='pricing-card'>
                <img
                src={require('../assets/images/headshot.jpg')}
                alt="headshot"
                className="card-img"
                />
                <h2 className='pricing-card-title'>
                    Business Headshots
                </h2>
                <h3>$150</h3>
                <p>
                    Professional headshots for your Linkedin, website and business cards.
                </p>
            </div>
        </div>
    )
}