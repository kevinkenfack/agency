import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingComponent from './components/FloatingComponent.jsx';
import Loader from './components/Loader';
import CallPage from './pages/call.jsx';

// Import des sections et pages
import AboutUs from './components/AboutUs.jsx';
import AchievementsSection from './components/AchievementsSection.jsx';
import DomainsSection from './components/DomainSection.jsx';
import ProductsSection from './components/ProductsSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import CTASection from './components/CTASection.jsx';
import FAQSection from './components/FAQSection.jsx';
import IdeaSection from './components/IdeaSection.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import RefundPolicy from './pages/RefundPolicy.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import ProjectScroller from './components/ProjectScroller.jsx';
import ProcessSection from './components/ProcessSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();
  const hideHeaderFooterOnPaths = ['/privacy-policy', '/refund-policy', '/terms'];
  const hideHeaderOnPaths = [...hideHeaderFooterOnPaths, '/book-call'];
  const hideFloatingOnPaths = [...hideHeaderOnPaths];
  
  const shouldHideHeaderFooter = hideHeaderFooterOnPaths.includes(location.pathname);
  const shouldHideHeader = hideHeaderOnPaths.includes(location.pathname);
  const shouldHideFloating = hideFloatingOnPaths.includes(location.pathname);

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-white">
      {!shouldHideHeader && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <AboutUs />
              <AchievementsSection />
              <DomainsSection />
              <ProjectScroller />
              <ProcessSection />
              <ProductsSection />
              <TestimonialsSection />
              <CTASection />
              <FAQSection />
              <IdeaSection />
            </main>
          }
        />
        <Route path="/book-call" element={<CallPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>

      {!shouldHideHeaderFooter && <Footer />}
      {!shouldHideFloating && <FloatingComponent />}
    </div>
  );
}

export default App;
