import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../ui/Button/Button';
import { LanguageSwitcher } from '../../../ui/LanguageSwitcher/LanguageSwitcher';
import './Header.css';

export const Header = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsSticky(scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isSticky ? 'header--sticky' : ''}`}>
            <div className="header__logo">
                <a href="/">
                    <img src="/images/logo.svg" alt="Skylos" />
                </a>
            </div>

            <div className={`header__content ${isMenuOpen ? 'header__content--open' : ''}`}>
                <nav className="header__nav-wrap">
                    <ul className="header__nav">
                        <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>{t('header.home')}</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t('header.about')}</a></li>
                        <li><a href="#services" onClick={() => setIsMenuOpen(false)}>{t('header.services')}</a></li>
                        <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>{t('header.works')}</a></li>
                    </ul>
                </nav>

                <Button href="mailto:hello@skylos.com.ar" className="btn--primary btn--small">
                    {t('header.getInTouch')}
                </Button>

                <LanguageSwitcher />
            </div>

            <a className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--is-clicked' : ''}`} href="#0" onClick={toggleMenu}>
                <span></span>
            </a>
        </header>
    );
};
