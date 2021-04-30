import * as React from 'react';
import '../styles/landing.css';
import logoImg from '../assets/logo.png';
import heroImg from '../assets/hero.png';
import whatsImg from '../assets/whats.png';
import designImg from '../assets/design.png';
import reqImg from '../assets/requisitos.png';
import devImg from '../assets/dev.png';
import showImg from '../assets/show.png';

function Landing() {
    return (
        <div className="content">
            <header>
                <div className="topnav">
                    <img src={logoImg} alt="flowslabs"/>
                </div>
            </header>
            <main>
                <div className="hero">
                    <img src={heroImg} alt="banner"/>
                </div>
                <div className="about">
                    <h1>FlowsLabs</h1>
                    <h3>Quem somos nós?</h3>
                    <p>Uma empresa que surgiu na vontade de inovar, desde as pequenas coisas até as grandes.<br></br>Criado por Leonardo da Silva Nichele.<br></br><br/>
                    Desenvolvemos soluções digitais incluindo:<br></br>
                    - Desenvolvimento Web.<br></br>
                    - Design. (Web/Mobile/Banners).</p>
                    <br/>
                    <a href="https://api.whatsapp.com/send?phone=5551998810795"><img src={whatsImg} alt="whatsapp"/></a>
                </div>
                <hr/>
                <div className="method">
                    <h1>Nosso método de desenvolvimento</h1>
                    <div className="row">
                        <div className="column">
                            <div className="card">
                                <img src={designImg} alt="design"/>
                                <h3>Design</h3>
                                <br/>
                                <p>Estudo visual com tendências de satisfazer o cliente e suas necessidades.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <img src={reqImg} alt="requisitos"/>
                                <h3>Requisitos</h3>
                                <br/>
                                <p>Definição de métricas a fins de garantir estabilidade e performance.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <img src={devImg} alt="developer"/>
                                <h3>Desenvolver e testes</h3>
                                <br/>
                                <p>Hora do código + verificações de qualidade.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <img src={showImg} alt="apresentação"/>
                                <h3>Apresentação de projeto</h3>
                                <br/>
                                <p>Exibição ao cliente de versão finalizada.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work">
                    <h1>Realizações</h1>
                    <div className="juan-case">
                        <p>Juan<b> Amarante</b></p>
                        <h2>Projeto: JFSA-Web</h2>
                        <br/>
                        <h3>Site profissional no setor de tecnologia e gestão.</h3>
                        <br/>
                        <br/>
                        <a href="https://juanamarante.com">Acessar site</a>
                    </div>
                </div>
                <div className="contact">
                    <h1>Contate-me</h1>
                    <p>Caso tenha interesse em estabelecer contato, clique abaixo.</p>
                    <br/>
                    <br/>
                    <a href="mailto:flowslabswork@outlook.com">Enviar mensagem</a>
                </div>
            </main>
            <footer>
                <p>Copyright © 2021 FlowsLabs. Todos os direitos reservados.<br></br>
                CNPJ nº 35.004.327/0001-16 - Rio Grande do Sul / Brasil.</p>
            </footer>
        </div>
    );
}

export default Landing;