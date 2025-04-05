import React, { useState, useEffect } from 'react';
import './../styles/certificates.css';

import devopscertificate from '../assets/devopscertificate.png';
import associatecertificate from '../assets/associatecertificate.png';
import zscerti from '../assets/zaidcertificate1.jpg';
// import aviatrixCert from '../assets/aviatrix-cert.jpg';
// import talentnextJava from '../assets/talentnext-java.jpg';

const certificates = [
    {
        id: 1,
        title: 'Microsoft Azure DevOps Engineer Expert (Az-400)',
        link: 'https://learn.microsoft.com/api/credentials/share/en-us/Gargeya-Durgempudi/9A9781593EC33EC2?sharingId=DDCCF32885C522AE',
        image: devopscertificate,
    },
    {
        id: 2,
        title: 'Microsoft Developer Associate (Az-204)',
        link: 'https://learn.microsoft.com/api/credentials/share/en-us/Gargeya-Durgempudi/BBB64182BA555B64?sharingId=DDCCF32885C522AE',
        image: associatecertificate,
    },
    {
        id: 3,
        title: 'Learn Ethical Hacking From Scratch 2024',
        link: 'https://www.udemy.com/certificate/UC-a3fc486d-f89f-423d-98fc-fc9c82579fab/',
        image: zscerti,
    },
];

const Certificates = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            setTheme(currentTheme);
        });

        observer.observe(document.documentElement, { attributes: true });

        // Initial check
        setTheme(document.documentElement.getAttribute('data-theme'));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="certificates-section">
            <h2>My Certificates</h2>

            <div
                className="certificates-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={`certificate-list ${isHovered ? 'paused' : ''}`}>
                    {[...certificates, ...certificates].map((certificate, index) => (
                        <div key={`${certificate.id}-${index}`} className="certificate-card">
                            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="certificate-image"
                                />
                                <p>{certificate.title}</p>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Certificates;
