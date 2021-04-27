import '../styles/portfolio.css';
import fl from '../assets/logo_black.png';
import flTwo from '../assets/fl-grey.png';
import flblack from '../assets/flblack.png';
import scrollImg from '../assets/down.webp';
import whatsappImg from '../assets/whatsapp.png';
import roadmapImg from '../assets/road.png';

function Portfolio() {
    return (
        <div id="homepage">
            <header>
                <div className="navbar">
                <a href="/">
                    <img src={fl} alt="logo"></img>
                </a>
                </div>
            </header>
            <div className="main">
                <img src={flblack} alt="gif-init" />
                <br></br>
                <a href="/">Início</a>
                <br></br>
            </div>
            <div className="markdown">
                <h3>Realizações</h3>
                <div className="main-img">
                    <img src={scrollImg} alt="scrollImg" />
                </div>
            </div>
            <a href="https://api.whatsapp.com/send?phone=5551998810795" className="float">
                <i className="fa fa-plus my-float"><img src={whatsappImg} alt="whatsapp" /></i>
            </a>
            <div className="line-colored"></div>
            <div className="information">
                <section className="list">
                    <div className="bg-one-welcome">
                        <h1>Quem somos nós?</h1>
                        <h3>Uma empresa que surgiu na vontade de inovar,<br></br>
                        desde as pequenas coisas até as grandes.<br></br><br/>
                        Desenvolvemos soluções digitais incluindo:<br></br>
                        - Desenvolvimento Web. (Websites)<br></br>
                        - Design. (Web/Mobile/Banners)
                        </h3>
                    </div>
                </section>
            </div>
            <div className="line-colored"></div>
            <div className="roadway">
                <h1>Nosso método de desenvolvimento</h1>
                <img src={roadmapImg} alt="roadmap"/>
            </div>
            <div className="line-colored"></div>
            <div className="cases">
                <h2>Realizações</h2>
                <section className="case-list">
                    <div className="case-one">
                        <h1>Juan Felipe Silva do Amarante</h1>
                        <h3>Projeto: JFSA Web</h3>
                        <p>Site profissional no setor de tecnologia e gestão.</p>
                        <a href="https://juanamarante.com/">Acesse o website aqui</a>
                    </div>
                </section>
            </div>
            <div className="line-colored"></div>
            <footer>
                <div className="infobar">
                    <a href="/">
                        <img src={flTwo} alt="logo" />
                    </a>
                    <div className="line"></div>
                    <div className="sct-routes">
                        <section>
                            <a href="/">Início</a>
                            <br></br>
                            <a href="mailto:flowslabswork@outlook.com">Trabalhe conosco</a>
                        </section>
                    </div>
                    <h1>Copyright © 2021 FlowsLabs. Todos os direitos reservados.<br></br>
                    CNPJ nº 35.004.327/0001-16 - Rio Grande do Sul / Brasil.</h1>
                </div>
            </footer>
        </div>
    );
}

export default Portfolio;