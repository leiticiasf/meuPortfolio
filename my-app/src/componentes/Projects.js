 import { Container, Row, Col, Nav, Tab} from "react-bootstrap";
 import { NaturezaCards } from "./ProjectsCards";
 import fotoMeme from  "../assets/naturezaImg/Memes.png";
 import fotoOrganica from  "../assets/naturezaImg/revisaoOrganica.png";
 import fotoAutoria from  "../assets/naturezaImg/autoria.png";
 import fotoCircuito from  "../assets/naturezaImg/circuito.png";


export const NaturezaProjects = () => { /* Parte Natureza*/
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




return(
    <section className="project" id="project">
        <Container>
        <Row>
            <Col>
          
          <h2>Projetos</h2>
          <p>Jais aqui as principais atividades ocorridas ao longo do ano</p>
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
                               <NaturezaCards
                                key={index}
                                {...natureza} />
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