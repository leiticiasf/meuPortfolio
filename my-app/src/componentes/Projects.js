 import { Container, Row, Col, Nav, Tab} from "react-bootstrap";
 import { Cards } from "./ProjectsCards";
 import fotoMeme from  "../assets/naturezaImg/Memes.png";
 import fotoOrganica from  "../assets/naturezaImg/revisaoOrganica.png";
 import fotoAutoria from  "../assets/naturezaImg/autoria.png";
 import fotoCircuito from  "../assets/naturezaImg/circuito.png";
 import fotoFilme1917 from "../assets/humanasImg/1917.jpg";
 import fotoBandeiraMadagascar from "../assets/humanasImg/bandeira.png";
 import fotoPintura from "../assets/humanasImg/pintura.jpg";

export const Projects = () => { /* Parte Natureza*/
    const natureza = [
        {
            title: "Atividade Biologia",
            description: "Meme sobre evolucionismo.",
            imgUrl: fotoMeme,
        },
        {
            title: "Atividade 2",
            description: "Apresentação de uma revisão sobre química orgânica.",
            imgUrl: fotoOrganica,
        },
        {
            title: "Atividade 3",
            description: "Atividade prática de circuitos e resistores.",
            imgUrl: fotoCircuito,
        },
        {
            title: "Atividade 4",
            description: "Uma 'autoria' a partir da explicação \n durante a aula de Evolução e Teorias Evolucionistas.",
            imgUrl: fotoAutoria,
        },
    ];
    const humanas = [
        {
            title: "Review Filme 1917",
            description: "Neste dia, assistimos o filme 1917 pois o \n mesmo retrata de uma época a qual estamos \n estudando e depois respondemos um questionário sobre o filme.",
            imgUrl: fotoFilme1917,
        },
        {
            title:  "Introdução à Geopolítica",
            description: "Escolhemos um país do qual deveríamos fazer uma apresentação \n falando sobre a situação atual do país.",
            imgUrl: fotoBandeiraMadagascar
        },
        {
            title: "O Imperialismo na América",
            description: "Esta atividade requereu que nós fizessémos a análise de uma determinada imagem dada durante a aula para refletirmos em sala.  ",
            imgUrl: fotoPintura
        },
        {
            title: "",
            description: "",
        },
    ];


return(
    <section className="project" id="project">
        <Container>
        <Row>
            <Col>
          
          <h2>Projetos</h2>
          <p>Jaz aqui as principais atividades ocorridas ao longo do ano</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center alignt-items-center" id="pills-tab">
                <Nav.Item>
                    <Nav.Link eventKey="natureza">Natureza</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="matematica"> Matemática </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="linguagens" > Linguagens</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="humanas" > Humanas </Nav.Link>
                </Nav.Item>
              
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="natureza">
                   <Row>
                    {
                         natureza.map((natureza, index) => {
                            return(
                               <Cards
                                key={index}
                                {...natureza} />
                            )
                        })
                    }
                   </Row>
                </Tab.Pane>
                   <Tab.Pane eventKey="humanas">
                   <Row>
                    {
                         humanas.map((humanas, index) => {
                            return(
                               <Cards
                                key={index}
                                {...humanas} />
                            )
                        })
                    }
                   </Row>
                </Tab.Pane>

            </Tab.Content>
            </Tab.Container>
            </Col>
        </Row>
        </Container>
    </section>
)
                }
