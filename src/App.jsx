import React from 'react'
import Header from './components/header.jsx'
import ProductsSection from './components/products-section.jsx'
import DomainsSection from './components/domains-section.jsx'
import AchievementsSection from './components/achievements-section.jsx'
import IdeaSection from './components/idea-section.jsx'
import Footer from './components/footer.jsx'

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

