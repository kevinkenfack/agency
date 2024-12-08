import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingComponent from './components/FloatingComponent.jsx';

// Import des sections et pages
import AboutUs from './components/AboutUs.jsx';
import AchievementsSection from './components/AchievementsSection.jsx';
import DomainsSection from './components/DomainSection.jsx';
import ProductsSection from './components/ProductsSection.jsx';
import IdeaSection from './components/IdeaSection.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import RefundPolicy from './pages/RefundPolicy.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';

function App() {
  // Récupérer la route actuelle
  const location = useLocation();

  // Liste des pages où le Header et le Footer ne doivent pas être visibles
  const hideHeaderFooterOnPaths = ['/privacy-policy', '/refund-policy', '/terms'];

  // Vérifier si la route actuelle correspond
  const shouldHideHeaderFooter = hideHeaderFooterOnPaths.includes(location.pathname);

  return (
    <div className="min-h-screen bg-white">
      {/* Afficher le Header seulement si nécessaire */}
      {!shouldHideHeaderFooter && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <AboutUs />
              <AchievementsSection />
              <DomainsSection />
              <ProductsSection />
              <IdeaSection />
            </main>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
       
      </Routes>

      {/* Afficher le Footer seulement si nécessaire */}
      {!shouldHideHeaderFooter && <Footer />}
      {!shouldHideHeaderFooter && <FloatingComponent />}
    </div>
  );
}

export default App;
