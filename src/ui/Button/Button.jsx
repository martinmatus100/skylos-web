import React from 'react';
import './Button.css';

export const Button = ({ children, href, type = 'button', className = '', ...props }) => {
    const btnClass = `btn ${className}`;

    if (href) {
        return (
            <a href={href} className={btnClass} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={btnClass} {...props}>
            {children}
        </button>
    );
};
