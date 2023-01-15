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
                    <h1>Ligos.Tech</h1>
                    <h3>Quem somos nós?</h3>
                    <p>Somos especialistas em desenvolvimento e gestão de projetos,<br></br>Criando, projetando e disponibilizando softwares para vários setores e clientes.<br/><br></br>
                    Além da tecnologia, o nosso foco é você, inclusive na sua jornada, impulsionando os seus negócios e disponibilizando soluções eficientes.<br></br></p>
                    <br/>
                    <a href="https://api.whatsapp.com/send?phone=5551998810795"><img src={whatsImg} alt="whatsapp"/></a>
                </div>
                <hr/>
                <div className="method">
                    <h1>Nossas áreas de atuação</h1>
                    <div className="row">
                        <div className="column">
                            <div className="card">
                                <img src={designImg} alt="design"/>
                                <h3>Planejamento de Ideias</h3>
                                <br/>
                                <p>Consultoria para tirar seus sonhos do papel e virar realidade.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <img src={reqImg} alt="requisitos"/>
                                <h3>Inteligência Analítica</h3>
                                <br/>
                                <p>Visualização e análise de dados para decisões inteligentes.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <img src={devImg} alt="developer"/>
                                <h3>Software House</h3>
                                <br/>
                                <p>Soluções integradas e específicas para o seu momento atual.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <img src={showImg} alt="apresentação"/>
                                <h3>Infraestrutura Digital</h3>
                                <br/>
                                <p>Disponibilidade, escalabilidade e facilidades para as suas ideias.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work">
                    <h1>Realizações</h1>
                    <div className="juan-case">
                        <p>Juan<b> Amarante</b></p>
                        <h2>Setor: Profissional</h2>
                        <br/>
                        <h3>Site profissional no setor de tecnologia e gestão.</h3>
                        <br/>
                        <br/>
                        <a href="https://juanamarante.com">Acessar site</a>
                    </div>
                    <div className="juan-case">
                        <p>Aluguéis de Bikes</p>
                        <h2>Setor: Serviços</h2>
                        <br/>
                        <h3>Inteligência Artificial para previsão de aluguéis diários.</h3>
                        <br/>
                        <br/>
                        <a href="https://onedrive.com">Ver relatório</a>
                    </div>
                </div>
                <div className="contact">
                    <h1>Contate-nos</h1>
                    <p>Caso tenha interesse em estabelecer contato, clique no botão.</p>
                    <br/>
                    <br/>
                    <a href="mailto:leonardonichelework@outlook.com">Enviar mensagem</a>
                </div>
            </main>
            <footer>
                <p>Copyright © 2023 Ligos. Todos os direitos reservados.<br></br>
                CNPJ nº 42.907.335/0001-38 - RS / Brasil.</p>
            </footer>
        </div>
    );
}

export default Landing;