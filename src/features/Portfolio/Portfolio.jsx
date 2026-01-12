import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import './Portfolio.css';

export const Portfolio = () => {
    const { t } = useTranslation();

    // Mock data - in a real app this might come from a CMS or JSON file
    // Mock data - in a real app this might come from a CMS or JSON file
    const projects = [
        { id: 1, title: 'The Red Wheel', cat: 'Branding', img: 'images/portfolio/red-wheel.jpg', link: '#' },
        { id: 2, title: 'Music Life', cat: 'Frontend Design', img: 'images/portfolio/music-life.jpg', link: '#' },
        { id: 3, title: 'OI Logo', cat: 'Branding', img: 'images/portfolio/oi-logo.jpg', link: '#' }, // Note: double extension in reference
        { id: 4, title: 'Corrugated Sheets', cat: 'Frontend Design', img: 'images/portfolio/corrugated-sheets.jpg', link: '#' },
        { id: 5, title: 'Woodcraft', cat: 'Frontend Design', img: 'images/portfolio/woodcraft.jpg', link: '#' },
        { id: 6, title: 'The Lamp', cat: 'Frontend Design', img: 'images/portfolio/lamp.jpg', link: '#' },
    ];

    return (
        <section id="portfolio" className="portfolio">
            <div className="container row portfolio__top">
                <div className="column large-4 medium-4">
                    <SectionTitle number="03" title={t('portfolio.title')} />
                </div>
                <div className="column large-6 medium-6">
                    <h1 className="display-1 title-section">{t('portfolio.heading')}</h1>
                </div>
            </div>

            <div className="container row portfolio__list collapse">
                {projects.map(item => (
                    <div key={item.id} className="column large-4 medium-4 portfolio__item-wrap">
                        <div className="folio-item">
                            <div className="folio-item__thumb">
                                <a href={item.link} className="folio-item__thumb-link">
                                    <img src={`${import.meta.env.BASE_URL}${item.img}`} alt={item.title} />
                                </a>
                            </div>
                            <div className="folio-item__info">
                                <div className="folio-item__cat">{item.cat}</div>
                                <h4 className="folio-item__title">{item.title}</h4>
                            </div>
                            <a href={item.link} className="folio-item__project-link">
                                {t('portfolio.projectLink')}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
