import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';
import '../styles/TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO at TechCorp",
      image: "/testimonials/user1.jpg",
      text: "Working with UIROOM transformed our digital presence. Their expertise in web development and design is exceptional.",
      rating: 5
    },
    {
      name: "Sarah Smith",
      role: "Founder of StartupX",
      image: "/testimonials/user2.jpg",
      text: "The team's attention to detail and commitment to quality is remarkable. They delivered beyond our expectations.",
      rating: 5
    },
    {
      name: "Mike Johnson",
      role: "CTO at InnovateTech",
      image: "/testimonials/user3.jpg",
      text: "Professional, responsive, and highly skilled. They helped us create a modern and efficient web application.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title">
          What Our Clients Say
        </h2>
        
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          slidesPerView="auto"
          freeMode={true}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          className="testimonials-swiper"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="testimonial-text">
                  "{testimonial.text}"
                </blockquote>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="testimonial-image"
                  />
                  <div>
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection; 