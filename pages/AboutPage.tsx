import React from 'react';
import SectionTitle from '../components/SectionTitle';

const AboutPage: React.FC = () => {
    return (
        <div className="animate-fade-in max-w-4xl mx-auto">
            <SectionTitle>Sobre a RADIO520.COM.BR</SectionTitle>
            <div className="prose-custom text-gray-300 mt-6 space-y-4">
                <p>
                    Bem-vindo à <strong>RADIO520.COM.BR</strong>, sua nova casa para o jornalismo esportivo com uma pegada moderna, tecnológica e interativa. Nascemos da paixão por esportes e da vontade de ir além do óbvio, trazendo não apenas as notícias, mas também análises, debates e uma experiência multimídia completa para quem respira esporte.
                </p>
                <p>
                    Nossa missão é simples: conectar você ao mundo dos esportes de uma forma que você nunca viu. Combinamos a credibilidade do jornalismo com a inovação da tecnologia para oferecer uma experiência multimídia completa e interativa. Quer seja futebol, automobilismo, tênis ou as últimas tendências do esporte, estamos aqui para cobrir tudo.
                </p>
                <h3 className="text-white">O que nos move?</h3>
                <ul>
                    <li><strong>Paixão:</strong> Somos fãs, assim como você. Vivemos cada lance, cada corrida, cada ponto.</li>
                    <li><strong>Inovação:</strong> Usamos a tecnologia para enriquecer sua experiência e trazer informações de forma rápida e precisa.</li>
                    <li><strong>Comunidade:</strong> Acreditamos no poder da resenha. Este espaço é seu para comentar, compartilhar e debater.</li>
                </ul>
                <p>
                    Sintonize na nossa rádio, ouça nossos podcasts, assista aos nossos vídeos e mergulhe nos nossos artigos. A RADIO520.COM.BR é mais que um portal de notícias, é o seu ponto de encontro com o esporte.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;