import { Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/photos/banner-img.svg";
export const Banner = () => {
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                       <span className="tagline">Este é o meu Portfolio</span>
                       <h1>{`Olá, me chamo Letícia`} <span className="wrap">desenvolvedora web</span></h1>
                       <p>⁠Meu nome é Yoshikage Kira. Tenho 33 anos. Minha casa fica na parte nordeste de Morioh, onde todas as casas estão, e eu não sou casado.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect< ArrowRightCircle size={25}/></button>
                    </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Header img" />
                        </Col>
                </Row>
            </Container>
        </section>
    )
}