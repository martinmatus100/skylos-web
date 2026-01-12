import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="hero" className="hero">
            <div
                className="hero__bg"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.png)` }}
            >
                <div className="hero__gradient-overlay"></div>
            </div>

            <div className="hero__content container">
                <div className="hero__content-inner">
                    <h1 className="hero__title">
                        <span
                            className="hero__dots"
                            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/dots.svg)` }}
                        ></span>
                        {t('hero.greeting')}
                    </h1>

                    <div className="hero__about">
                        <p dangerouslySetInnerHTML={{ __html: t('hero.intro').replace('\n', '<br/>') }} />

                        <div className="hero__social">
                            <a href="#0"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                            <a href="#0"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                            <a href="#0"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                            <a href="#0"><i className="fab fa-dribbble" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>



            <div className="hero__scroll">
                <a href="#about" className="hero__scroll-link">
                    {t('hero.scrollDown')}
                </a>
            </div>
        </section>
    );
};
