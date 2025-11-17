import React from 'react';
import SectionTitle from '../components/SectionTitle';

const TermsOfServicePage: React.FC = () => {
    return (
        <div className="animate-fade-in max-w-4xl mx-auto">
            <SectionTitle>Termos de Serviço</SectionTitle>
            <div className="prose-custom text-gray-300 mt-6 space-y-4">
                <p>Última atualização: 15 de Novembro de 2025</p>
                
                <h3 className="text-white">1. Termos</h3>
                <p>
                    Ao acessar ao site RADIO520.COM.BR, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                </p>
                
                <h3 className="text-white">2. Uso de Licença</h3>
                <p>
                    É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site RADIO520.COM.BR , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: 
                </p>
                <ol>
                    <li>modificar ou copiar os materiais;</li>
                    <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                    <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site RADIO520.COM.BR;</li>
                    <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                    <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                </ol>
                <p>
                    Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por RADIO520.COM.BR a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
                </p>
                
                <h3 className="text-white">3. Isenção de responsabilidade</h3>
                <p>
                    Os materiais no site da RADIO520.COM.BR são fornecidos 'como estão'. RADIO520.COM.BR não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                </p>
                
                <h3 className="text-white">4. Limitações</h3>
                <p>
                    Em nenhum caso o RADIO520.COM.BR ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em RADIO520.COM.BR, mesmo que RADIO520.COM.BR ou um representante autorizado da RADIO520.COM.BR tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
                </p>

            </div>
        </div>
    );
};

export default TermsOfServicePage;
