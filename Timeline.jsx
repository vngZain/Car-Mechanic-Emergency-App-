// Timeline.jsx
import React from 'react';
import './Timeline.css';

const Timeline = () => {
    return (
        <div className="timeline-container">
            <h1 className="timeline-heading">Our Journey</h1>
            <p className="timeline-subtitle">From our humble beginnings to where we are today</p>

            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-date">2019</div>
                    <div className="timeline-content">
                        <h3>Grand Opening</h3>
                        <p>We opened our first branch in Lahore with a vision to serve the best fusion food.</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-date">2021</div>
                    <div className="timeline-content">
                        <h3>2nd Branch Launched</h3>
                        <p>Due to high demand, we launched our second branch in Islamabad.</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-date">2023</div>
                    <div className="timeline-content">
                        <h3>Won Best Taste Award</h3>
                        <p>Recognized as one of the top-rated restaurants by customers and critics.</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-date">2024</div>
                    <div className="timeline-content">
                        <h3>Online Booking Launched</h3>
                        <p>We introduced online table reservations and delivery options through our website.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;