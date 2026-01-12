import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import './About.css';

export const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="about">
            <div
                className="about__dots"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/dots.svg)` }}
            ></div>
            <div className="about__line"></div>

            <div className="container row">
                <div className="column large-12 medium-12">
                    <SectionTitle number="01" title={t('about.title')} />
                </div>

                <div className="column large-6 medium-6 about__intro">
                    <h1 className="display-1">
                        {t('about.heading')}
                    </h1>
                    <p className="lead">
                        {t('about.description')}
                    </p>
                </div>

                <div className="column large-6 medium-6 about__photo-block">
                    <div
                        className="about__photo"
                        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/skylos-hero-text.png)` }}
                    ></div>
                </div>
            </div>

            <div className="container row about__process">
                <div className="column large-3 medium-6 tab-12 item-process">
                    <h3 className="item-title">{t('about.process.define.title')}</h3>
                    <p>{t('about.process.define.desc')}</p>
                </div>
                <div className="column large-3 medium-6 tab-12 item-process">
                    <h3 className="item-title">{t('about.process.design.title')}</h3>
                    <p>{t('about.process.design.desc')}</p>
                </div>
                <div className="column large-3 medium-6 tab-12 item-process">
                    <h3 className="item-title">{t('about.process.build.title')}</h3>
                    <p>{t('about.process.build.desc')}</p>
                </div>
                <div className="column large-3 medium-6 tab-12 item-process">
                    <h3 className="item-title">{t('about.process.launch.title')}</h3>
                    <p>{t('about.process.launch.desc')}</p>
                </div>
            </div>
        </section>
    );
};
