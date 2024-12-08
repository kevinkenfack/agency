import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  return (
    <div>
      <h1>Sitemap</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        <li><Link to="/refund-policy">Refund Policy</Link></li>
        <li><Link to="/terms">Terms and Conditions</Link></li>
        {/* Ajouter d'autres liens en fonction des pages de ton site */}
      </ul>
    </div>
  );
};

export default Sitemap;
