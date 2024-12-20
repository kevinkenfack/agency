import React, { useState, useCallback } from 'react';
import '../styles/FAQSection.css';

const ModernFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern tech stacks including React, Next.js, Node.js, and various other cutting-edge technologies. Our choice of technology is always based on your specific project needs and requirements."
    },
    {
      question: "How do you handle project communication?",
      answer: "We maintain clear communication through regular meetings, progress updates, and dedicated project management tools. You'll have direct access to our team throughout the development process."
    },
    {
      question: "What is your pricing model?",
      answer: "Our pricing is project-based and depends on the scope, complexity, and timeline. We provide detailed quotes after understanding your specific requirements."
    }
  ];

  const toggleFAQ = useCallback((index) => {
    setActiveIndex(prev => prev === index ? null : index);
  }, []);

  return (
    <section className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
            role="button"
            tabIndex={0}
          >
            <div className="faq-question">
              <span className="question-text">{faq.question}</span>
              <span className="faq-icon" aria-hidden="true" />
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(ModernFAQ);