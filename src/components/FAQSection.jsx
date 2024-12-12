import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/FAQSection.css';

const FAQSection = () => {
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

  return (
    <section className="faq-section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="faq-item"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className={`icon ${activeIndex === index ? 'active' : ''}`}>+</span>
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="faq-answer"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection; 