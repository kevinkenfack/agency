import React from 'react'
import Header from './components/Header.jsx';
import ProductsSection from './components/ProductsSection.jsx'
import DomainsSection from './components/DomainSection.jsx'
import AchievementsSection from './components/AchievementsSection.jsx'
import IdeaSection from './components/IdeaSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProductsSection />
        <DomainsSection />
        <AchievementsSection />
        <IdeaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

