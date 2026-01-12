import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import './Clients.css';

const clientsList = [
    { name: 'Dropbox', icon: 'dropbox.svg' },
    { name: 'Atom', icon: 'atom.svg' },
    { name: 'Github', icon: 'github.svg' },
    { name: 'Redhat', icon: 'redhat.svg' },
    { name: 'Medium', icon: 'medium.svg' },
    { name: 'Messenger', icon: 'messenger.svg' },
    { name: 'Steam', icon: 'steam.svg' },
    { name: 'Spotify', icon: 'spotify.svg' }
];

// Duplicate list for infinite scroll effect
const marqueeList = [...clientsList, ...clientsList, ...clientsList];

export const Clients = () => {
    return (
        <section id="clients" className="clients">

            <div className="container row clients__top">
                <div className="column large-4 medium-4">
                    <SectionTitle number="04" title="Our Clients" className="clients-section-title" />
                </div>
                <div className="column large-6 medium-6">
                    <h1 className="display-1 title-section">
                        We've had the privilege of working with
                        some of the largest and most iconic brands
                    </h1>
                </div>
            </div>

            <div className="container row clients__list">
                <div className="column large-12">
                    <div className="clients__carousel">
                        <div className="clients__track">
                            {marqueeList.map((client, index) => (
                                <a href="#0" title={client.name} className="clients__slide" key={`${client.name}-${index}`}>
                                    <img src={`images/icons/clients/${client.icon}`} alt={client.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
