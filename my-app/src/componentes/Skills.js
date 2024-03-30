import Carousel from "react-multi-carousel";
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import Linux from '../assets/img/linux.png';
import Ciber from '../assets/img/ciberseguranca.png';
import Python from '../assets/img/python.png';
import English from '../assets/img/ingles.png';
import Prova from '../assets/img/prova.png';

export const Skills =  () => {
    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills"> 
            <Container>
                <Row>
                    <Col>
                    <br></br>
                        <div className="skills-bx">
                            <h2>
                                Skills
                                <p>Cursos e certificados</p>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                  <div className="item">
                                    <img src={English} alt="Image" />
                                    <h5>Curso de Inglês</h5>
                                  </div>
                                    <div className="item">
                                      <img src={Prova} alt="Image" />
                                      <h5>Prova Cambridge</h5>
                                  </div>
                                    <div className="item">
                                      <img src={Python} alt="Image" />
                                      <h5>Python Essentials</h5>
                                  </div> 
                                    <div className="item">
                                      <img src={Linux} alt="Image" />
                                      <h5>Introdução ao Linux</h5>
                                  </div>
                                    <div className="item">
                                      <img src={Ciber} alt="Image" />
                                      <h5>Introdução a Cibersegurança</h5>
                                  </div> 
                                </Carousel>
                            </h2>
                        </div>
                    </Col>
                </Row>
            </Container>

            </section>
      )
}
