import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import './Services.css';

export const Services = () => {
    const { t } = useTranslation();

    const services = [
        { key: 'productDesign', icon: 'service-icon--product-design' },
        { key: 'branding', icon: 'service-icon--branding' },
        { key: 'frontend', icon: 'service-icon--frontend' },
        { key: 'uxResearch', icon: 'service-icon--research' },
        { key: 'illustration', icon: 'service-icon--illustration' },
        { key: 'ecommerce', icon: 'service-icon--ecommerce' },
    ];

    return (
        <section id="services" className="services">
            <div className="container row">
                <div className="column large-12 medium-12">
                    <SectionTitle number="02" title={t('services.title')} />
                </div>

                <div className="column large-6 medium-6 services__intro">
                    <h1 className="display-1">{t('services.heading')}</h1>
                </div>
                <div className="column large-6 medium-6 services__desc">
                    <p className="lead">{t('services.description')}</p>
                </div>
            </div>

            <div className="container row services__list">
                {services.map((service) => (
                    <div key={service.key} className="column large-4 medium-6 tab-12 item-service">
                        <span className={`service-icon ${service.icon}`}></span>
                        <h3 className="item-title">{t(`services.items.${service.key}.title`)}</h3>
                        <p>{t(`services.items.${service.key}.desc`)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
