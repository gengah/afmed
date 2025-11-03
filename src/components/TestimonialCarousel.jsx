import React, { useState, useEffect } from 'react';
import './TestimonialCarousel.css';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      quote: 'AFMED Healthcare has been our family\'s trusted partner for years. The care is exceptional and the staff is always compassionate.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      quote: 'The virtual care option saved me so much time. I could get quality medical advice without leaving my office.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      quote: 'From routine check-ups to specialized care, AFMED provides comprehensive services that meet all our family\'s needs.',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Patients Say</h2>
        <div className="carousel">
          <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
                <div className="testimonial-content">
                  <p className="quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <div className="rating">{renderStars(testimonial.rating)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;