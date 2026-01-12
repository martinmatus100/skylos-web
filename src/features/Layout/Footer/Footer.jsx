import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

export const Footer = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className="s-footer">
            <div className="row row-y-top">

                <div className="column large-8 medium-12">
                    <div className="row">
                        <div className="column large-7 tab-12 s-footer__block">
                            <h4 className="h6">{t('footer.whereToFindUs')}</h4>

                            <p>
                                {t('footer.address')}
                            </p>
                        </div>

                        <div className="column large-5 tab-12 s-footer__block">
                            <h4 className="h6">{t('footer.followUs')}</h4>

                            <ul className="s-footer__list">
                                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                                <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter (X)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="column large-4 medium-12 s-footer__block--end">
                    <a href="mailto:#0" className="btn h-full-width">{t('footer.letsTalk')}</a>

                    <div className="ss-copyright">
                        <span>{t('footer.copyright', { year })}</span>
                        <span>{t('footer.designBy')}</span>
                    </div>
                </div>

                <div className="ss-go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top">
                        top
                    </a>
                </div>

            </div>
        </footer>
    );
};
