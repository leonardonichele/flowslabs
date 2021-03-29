import '../styles/landing.css';
import fl from '../assets/logo_black.png';
import flTwo from '../assets/fl-grey.png';
import flblack from '../assets/flblack.png';
import scrollImg from '../assets/down.webp';
import whatsappImg from '../assets/whatsapp.png';

function Landing() {
    return (
        <div id="homepage">
            <header>
                <div className="navbar">
                    <img src={fl} alt="logo" />
                </div>
            </header>
            <div className="main">
                <img src={flblack} alt="gif-init" />
                <br></br>
                <a href="mailto:flowslabswork@outlook.com">Contate-nos</a>
                <br></br>
            </div>
            <div className="markdown">
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
                    <div className="bg-one-user">
                        <h1>Soluções inteligentes,<br></br>para todos os tipos de negócios.</h1>
                        <h3>Seja você pessoa física ou jurídica.</h3>
                    </div>
                    <div className="line-colored"></div>
                    <div className="bg-two-dev">
                        <h1>Design e desenvolvimento web.</h1>
                        <h3>Da arquitetura até seu desenvolvimento funcional.</h3>
                    </div>
                    <div className="line-colored"></div>
                    <div className="bg-three-totvs">
                        <h1>Implantação TOTVS Protheus.</h1>
                        <h3>Aumente sua eficiência, automatizando processos.</h3>
                    </div>
                </section>
            </div>
            <div className="line-colored"></div>
            <div className="contact-us">
                <h1>Deseja saber mais? Entre em contato conosco.</h1>
                <br></br>
                <a href="mailto:flowslabswork@outlook.com">Contate-nos</a>
                <br></br>
            </div>
            <div className="line-colored"></div>
            <footer>
                <div className="infobar">
                    <img src={flTwo} alt="logo" />
                    <div className="line"></div>
                    <div className="sct-routes">
                        <section>
                            <a href="/">Início</a>
                            <br></br>
                            <a href="mailto:flowslabswork@outlook.com">Trabalhe conosco</a>
                        </section>
                    </div>
                    <h1>Copyright © 2021 FlowsLabs. Todos os direitos reservados.<br></br>
                    CNPJ nº 00.000.000/0000-00 - Rio Grande do Sul / Brasil.</h1>
                </div>
            </footer>
        </div>
    );
}

export default Landing;