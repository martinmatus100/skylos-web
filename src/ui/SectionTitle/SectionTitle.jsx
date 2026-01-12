import React from 'react';
import './SectionTitle.css';

export const SectionTitle = ({ number, title, className = '' }) => {
    return (
        <div className={`section-title ${className}`} data-num={number}>
            <h3 className="h6">{title}</h3>
        </div>
    );
};
