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
            link: "https://www.canva.com/design/DAF-u7idW64/JRRP6Lr7weS-WB_vzXKVFQ/edit?utm_content=DAF-u7idW64&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        },
        {
            title: "Atividade 2",
            description: "Apresentação de uma revisão sobre química orgânica.",
            imgUrl: fotoOrganica,
            link: "https://docs.google.com/presentation/d/14Vx3aqsnkBRJZKg75W40nZ45MMyyvhsWnyX9g_DmrEs/edit?usp=classroom_web&authuser=0"
        },
        {
            title: "Atividade 3",
            description: "Atividade prática de circuitos e resistores.",
            imgUrl: fotoCircuito,
            link: "https://docs.google.com/document/d/1CV-GYZ9_vD-cs5GbQqaRbUw4TZKUeEzgbXZwvH4eo88/edit?usp=gmail"
        },
        {
            title: "Atividade 4",
            description: "Uma 'autoria' a partir da explicação \n durante a aula de Evolução e Teorias Evolucionistas.",
            imgUrl: fotoAutoria, 
            link: "https://docs.google.com/document/d/1h5dyq6SbD9ZF4406HQ0Dt7itMWpMOrHRlOweCz0A2H0/edit?usp=drive_link"
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
            imgUrl: fotoBandeiraMadagascar,
            link: "https://docs.google.com/presentation/d/1dwZV5mdLD-fFOPZFDIsrQBRoYr9vpUWh8YdFACdEAhM/edit?usp=classroom_web&authuser=0"
        },
        {
            title: "O Imperialismo na América",
            description: "Esta atividade requereu que nós fizessémos a análise de uma determinada imagem dada durante a aula para refletirmos em sala.  ",
            imgUrl: fotoPintura,
            link: "https://docs.google.com/document/d/1HN822HfWsRRpgmdv9IiM2XrpMgPL78rtLNoKDbVBUj0/edit?usp=classroom_web&authuser=0"
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
          <p>Jazem aqui as principais atividades ocorridas ao longo do ano</p>
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
