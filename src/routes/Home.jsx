import { } from 'react'
import ombro from '../assets/ombro.jpg'
import anotacoes from '../assets/anotacoes.jpg'
import consultas from '../assets/consultas.jpg'
import mobilidade from '../assets/mobilidade.jpg'

function Home() {
    return (
        <>
            <div className='Home'>
                <main>
                    <img src={ombro} alt="Pessoa com dores no ombro" className="main_img" />
                    <section className="main_info">
                        <h1 className='main-title'>O retorno da sua mobilidade</h1>
                        <p>
                            RecuFIT oferece uma solução inovadora, personalizando planos de exercícios para recuperação pós-cirúrgica. Integra mobilidade restaurada, motivação contínua e colaboração profissional, proporcionando uma experiência de recuperação única e eficaz.
                        </p>
                    </section>
                    <div className='div-button'>
                        <button className='btn main-button'>Mais informações</button>
                    </div>
                </main>
                <aside>
                    <section className='aside-container'>
                        <article className='aside-item'>
                            <h1>O que é a solução:</h1>
                            <p>RecuFIT é uma solução digital revolucionária desenvolvida para otimizar a recuperação pós-cirúrgica. Trata-se de um aplicativo inovador projetado para oferecer orientações personalizadas de exercícios, adaptadas às necessidades específicas de cada usuário, com o objetivo de promover uma recuperação ativa e eficaz.</p>
                        </article>
                        <hr width='90%' className='aside-separador'></hr>
                        <article className='aside-item'>
                            <h1>O que ela fará:</h1>
                            <p>A proposta central do RecuFIT é fornecer planos de exercícios altamente personalizados, levando em consideração informações médicas individuais e o tipo específico de cirurgia realizada. Além disso, o aplicativo buscará incentivar a aderência dos usuários aos planos de exercícios por meio de recursos motivacionais, como lembretes personalizados, acompanhamento visual de progresso e interações envolventes. Em suma, RecuFIT visa não apenas restaurar a mobilidade, mas também proporcionar uma experiência de recuperação pós-cirúrgica mais motivadora e eficaz.</p>
                        </article>
                        <hr width='90%' className='aside-separador'></hr>
                        <article className='aside-item'>
                            <h1>Como funcionará:</h1>
                            <p>RecuFIT funcionará como um guia personalizado de recuperação, iniciando com a coleta de informações detalhadas sobre o histórico médico e o tipo de cirurgia do usuário. Com base nesses dados, algoritmos adaptativos criarão planos de exercícios específicos. A interatividade será incentivada por meio de recursos que permitirão aos usuários acompanhar seu progresso e se conectar diretamente com profissionais de saúde para ajustes em tempo real. Essa abordagem dinâmica e personalizada garantirá uma experiência de recuperação integral e alinhada com as necessidades individuais de cada usuário.</p>
                        </article>
                    </section>

                </aside>
            </div>
            <section className="vantagens">
                <h1 className='vantagens-titulo'>Vantagens</h1>
                <div className='cards'>
                    <article className='vantagens-article'>
                        <img src={mobilidade} alt='mobilidade' className='article-img' />
                        <div className='article-div'>
                            <h1 className='vantagens-numero'>01</h1>
                            <h1 className='vantagens-vantagem'>Mobilidade restaurada</h1>
                            <p className='vantagem-texto'>RecuFit visa restaurar a mobilidade por meio de exercícios adequados e personalizados.</p>
                        </div>
                    </article>

                    <article className='vantagens-article'>
                        <img src={anotacoes} alt='Plano de exercicios personalizado' className='article-img' />
                        <div className='article-div'>
                            <h1 className='vantagens-numero'>02</h1>
                            <h1 className='vantagens-vantagem'>Personalização Adaptativa</h1>
                            <p className='vantagem-texto'>Planos de exercícios personalizados com base no tipo de cirurgia e histórico médico.</p>
                        </div>
                    </article>

                    <article className='vantagens-article'>
                        <img src={consultas} alt='Acompanhamento médico' className='article-img' />
                        <div className='article-div'>
                            <h1 className='vantagens-numero'>03</h1>
                            <h1 className='vantagens-vantagem'>Colaboração Profissional</h1>
                            <p className='vantagem-texto'>Comunique-se diretamente com seus profissionais de saúde para ajustes personalizados em tempo real.</p>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Home