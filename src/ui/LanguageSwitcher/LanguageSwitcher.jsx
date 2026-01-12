import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-switcher">
            <button
                className={`language-switcher__btn ${i18n.language === 'en' ? 'language-switcher__btn--active' : ''}`}
                onClick={() => changeLanguage('en')}
            >
                EN
            </button>
            <span className="language-switcher__separator">|</span>
            <button
                className={`language-switcher__btn ${i18n.language === 'es' ? 'language-switcher__btn--active' : ''}`}
                onClick={() => changeLanguage('es')}
            >
                ES
            </button>
        </div>
    );
};
