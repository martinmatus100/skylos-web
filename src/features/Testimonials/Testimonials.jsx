import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import './Testimonials.css';

export const Testimonials = () => {
    const { t } = useTranslation();
    const testimonialsData = t('testimonials.list', { returnObjects: true });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance (in px) 
    const minSwipeDistance = 50;

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const onTouchStart = (e) => {
        setTouchEnd(null); // Reset touch end
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <section id="testimonials" className="testimonials">

            <div className="container row testimonials__header">
                <div className="column large-4 medium-4">
                    <SectionTitle number="05" title={t('testimonials.title')} />
                </div>
                <div className="column large-6 medium-6">
                    <h1 className="display-1 title-section">
                        {t('testimonials.heading')}
                    </h1>
                </div>
            </div>

            <div className="container row testimonials__content">
                <div className="column large-12">

                    <div
                        className="testimonial-slider"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >

                        {/* Custom Arrows */}
                        <button className="slick-arrow slick-prev" aria-label="Previous" onClick={prevSlide}>Previous</button>
                        <button className="slick-arrow slick-next" aria-label="Next" onClick={nextSlide}>Next</button>

                        <div className="testimonial-slider__track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {testimonialsData.map((item, index) => (
                                <div className={`testimonial-slider__slide ${index === currentIndex ? 'active' : ''}`} key={index}>
                                    <p>
                                        {item.text}
                                    </p>
                                    <div className="testimonial-slider__author">
                                        <img src={`${import.meta.env.BASE_URL}images/avatars/${item.image}`} alt={item.author} className="testimonial-slider__avatar" />
                                        <cite className="testimonial-slider__cite">
                                            <strong>{item.author}</strong>
                                            <span>{item.role}</span>
                                        </cite>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="testimonial-slider__controls">
                            {testimonialsData.map((_, index) => (
                                <button
                                    key={index}
                                    className={`testimonial-slider__dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
