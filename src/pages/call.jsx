import React, { useEffect } from 'react';
import { Calendar, Clock, Video, Users } from 'lucide-react';
import '../styles/call.css';

const CallPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="call-page">
      <div className="call-container">
        <div className="call-content">
          <div className="call-header">
            <h1 className="call-title">
              Book Your
              <span className="gradient-text"> Strategy Session</span>
            </h1>
            <p className="call-subtitle">
              Let's discuss your project and explore the best solutions to achieve your goals
            </p>
          </div>

          <div className="call-features">
            <div className="feature-card">
              <Clock className="feature-icon" />
              <h3>30 Minutes</h3>
              <p>Focused discussion on your needs</p>
            </div>
            <div className="feature-card">
              <Video className="feature-icon" />
              <h3>Google Meet</h3>
              <p>Video call with screen sharing</p>
            </div>
            <div className="feature-card">
              <Users className="feature-icon" />
              <h3>Expert Team</h3>
              <p>Meet with our senior consultants</p>
            </div>
            <div className="feature-card">
              <Calendar className="feature-icon" />
              <h3>Flexible Schedule</h3>
              <p>Choose a time that works for you</p>
            </div>
          </div>

          <div className="calendar-section">
            <div className="calendar-info">
              <div className="call-info">
                <h2>What to Expect</h2>
                <ul className="expectation-list">
                  <li>Analysis of your goals and challenges</li>
                  <li>Technical solutions discussion</li>
                  <li>Timeline and budget overview</li>
                  <li>Next steps and process</li>
                </ul>
              </div>
            </div>
            
            <div className="calendar-container">
              <div 
                className="cal-embed"
                data-cal-link="your-username/consultation"
                style={{ minHeight: '700px' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallPage;
