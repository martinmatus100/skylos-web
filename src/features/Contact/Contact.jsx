import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import './Contact.css';

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="contact">
            <div className="container row contact__top">
                <div className="column large-12">
                    <SectionTitle title={t('contact.title')} />
                </div>
                <div className="column large-12 contact__text">
                    <h1 className="display-1">
                        {t('contact.heading')}
                    </h1>
                    <a href="mailto:hello@skylos.com.ar" className="contact__email-link">hello@skylos.com.ar</a>
                </div>
            </div>
        </section>
    );
};
