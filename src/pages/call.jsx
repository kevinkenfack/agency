import React, { useEffect } from 'react';
import '../styles/call.css';

const CallPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="call-page">
      <div className="call-container">
        <div className="call-content">
          <div className="call-header">
            <h1>Book your <span className="gradient-text">free</span> consultation</h1>
            <p>30 minutes to discuss your project</p>
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
  );
};

export default CallPage;
