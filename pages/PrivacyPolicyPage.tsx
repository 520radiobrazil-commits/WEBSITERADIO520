import React from 'react';
import SectionTitle from '../components/SectionTitle';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="animate-fade-in max-w-4xl mx-auto">
            <SectionTitle>Política de Privacidade</SectionTitle>
            <div className="prose-custom text-gray-300 mt-6 space-y-4">
                <p>Última atualização: 15 de Novembro de 2025</p>
                <p>
                    A sua privacidade é importante para nós. É política do RADIO520.COM.BR respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site RADIO520.COM.BR, e outros sites que possuímos e operamos.
                </p>
                <p>
                    Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                </p>
                <h3 className="text-white">1. Dados que Coletamos</h3>
                <p>
                    Coletamos dados de várias maneiras, incluindo:
                    <ul>
                        <li><strong>Comentários:</strong> Quando você deixa um comentário, coletamos os dados mostrados no formulário de comentários, além do endereço de IP e de dados do navegador, para auxiliar na detecção de spam.</li>
                        <li><strong>Cookies:</strong> Utilizamos cookies para melhorar a sua experiência. Os cookies são arquivos salvos em seu computador que nos ajudam a entender suas preferências.</li>
                        <li><strong>Analytics:</strong> Usamos o Google Analytics para entender como nosso site é usado e como podemos melhorar a experiência.</li>
                    </ul>
                </p>

                <h3 className="text-white">2. Uso de Dados</h3>
                <p>
                    Usamos suas informações para personalizar sua experiência, melhorar nosso site, e para fins de marketing, sempre com seu consentimento.
                </p>

                 <h3 className="text-white">3. Seus Direitos</h3>
                <p>
                   Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                </p>

                <p>
                    O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
