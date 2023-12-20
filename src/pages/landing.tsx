import * as React from 'react';
import '../styles/landing.css';
import logoImg from '../assets/logo.png';
import whatsImg from '../assets/whats.png';
import instaImg from '../assets/insta.png';
import designImg from '../assets/design.png';
import reqImg from '../assets/requisitos.png';
import devImg from '../assets/dev.png';
import gradientImg from '../assets/gradient.png';
import showImg from '../assets/show.png';
import scrollWebm from '../assets/scroll.png';

function Landing() {
    return (
        <div className="behind">
            <div className="content">
                <header>
                    <div className="topnav">
                        <img src={logoImg} alt="flowslabs"/>
                    </div>
                </header>
                <main>
                    <hr />
                    <div className="hero">
                        <h1>LSN Consulting...</h1>
                    </div>
                    <div className="flow">
                        <img src={gradientImg} alt="gradient"/>
                    </div>
                    <div className="scroll">
                        <img src={scrollWebm} alt="scroll"/>
                    </div>
                    <hr />
                    <div className="about">
                        <h3>Quem somos nós?</h3>
                        <p>Em um mundo onde a tecnologia molda o amanhã, somos a bússola que guia sua jornada rumo ao sucesso. Especializados no setor de tecnologia, movidos pela paixão por soluções inovadoras.
                        <br/><br/>Com uma equipe apaixonada e experiente, trazemos soluções que transcendem o convencional, 
                        moldando o futuro digital.<br/><br/>Na interseção entre visão e execução, transformamos desafios em oportunidades, 
                        guiando você para o próximo nível de excelência operacional.</p>
                        <br/>
                        <h4>Seja parte da revolução digital conosco.</h4>
                        <br/>
                        <a href="https://api.whatsapp.com/send?phone=5551998810795"><img src={whatsImg} alt="whatsapp"/></a>
                        <a href="https://www.instagram.com/lsntech/"><img src={instaImg} alt="whatsapp"/></a>
                    </div>
                    <hr/>
                    <div className="method">
                        <h1>O que lhe oferecemos?</h1>
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                    <img src={designImg} alt="design"/>
                                    <h3>Consultoria<br/>360°</h3>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <img src={reqImg} alt="requisitos"/>
                                    <h3>Inteligência<br/>Analítica</h3>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <img src={devImg} alt="developer"/>
                                    <h3>Software<br/>House</h3>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <img src={showImg} alt="apresentação"/>
                                    <h3>Infraestrutura<br/>Digital</h3>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                    <img src={designImg} alt="design"/>
                                    <h3>Design Center<br/>UI & UX</h3>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <img src={reqImg} alt="requisitos"/>
                                    <h3>Inteligência<br/>Analítica</h3>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <img src={devImg} alt="developer"/>
                                    <h3>Software<br/>House</h3>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <img src={showImg} alt="apresentação"/>
                                    <h3>Infraestrutura<br/>Digital</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="work">
                        <h1>Confira nossos cases de referência.</h1>
                        <div className="cases">
                            <h1>Ferramenta de manutenção para equipamentos.</h1>
                            <h2>Mobilidade e Transportes</h2>
                            <br/>
                            <p>Construção de aplicação mobile multi-plataforma para dispositivos Android, IOS e Windows para nosso cliente líder global em mobilidade urbana. Empresa com atuação a mais de 40 anos no setor, promovendo inovações em elevadores, escadas/esteiras rolantes e aeroportos.</p>
                        </div>
                        <div className="cases">
                            <h1>Website para divulgação de estabelecimento.</h1>
                            <h2>Comércios e Restaurantes</h2>
                            <br/>
                            <p>Construímos um website para nosso cliente seguindo padrões de arquitetura de qualidade, visando a melhor exibição de seus produtos e reconhecimento de sua marca.</p>
                        </div>
                        <div className="cases">
                            <h1>Inteligência Artificial para predição de alugueis diários.</h1>
                            <h2>Tecnologia para Inovação</h2>
                            <br/>
                            <p>A combinação de dados com tecnologias emergentes nos permitem gerar coisas grandiosas, utilizando-se o Microsoft Azure e o seu studio de dados conseguimos gerar insights preditivos.</p>
                        </div>
                    </div>
                    <div className="contact">
                        <h1>Para saber mais, entre em contato conosco e poderemos lhe ajudar.</h1>
                        <p>Por favor, clique no botão abaixo e envie um e-mail.</p>
                        <br/>
                        <br/>
                        <a href="mailto:leonardonichelework@outlook.com">Enviar mensagem</a>
                    </div>
                </main>
                <footer>
                    <p>Copyright © 2023 LSN Consulting. Todos os direitos reservados.<br></br>
                    CNPJ nº 42.907.335/0001-38 - RS / Brasil.</p>
                </footer>
            </div>
        </div>
    );
}

export default Landing;