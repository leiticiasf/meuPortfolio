 import { Container, Row, Col, Nav, Tab} from "react-bootstrap";
 import { NaturezaCards } from "./ProjectsCards";
 import teste from  "./gon.jpg";

export const NaturezaProjects = () => { /* Parte Natureza*/
    const natureza = [
        {
            title: "Atividade 1",
            description: "i somos amigos",
            imgUrl: teste,
        },
        {
            title: "Atividade 2",
            description: "",
        },
        {
            title: "Atividade 3",
            description: "",
        },
        {
            title: "Atividade 4",
            description: "",
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