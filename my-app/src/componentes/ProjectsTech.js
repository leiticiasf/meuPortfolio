 import { Container, Row, Col, Nav, Tab} from "react-bootstrap";
 import { DevCards } from "./ProjectsCardsTech";



export const DevProjects = () => { /* Parte Natureza*/
    const dev = [
        {
            title: "Atividade 1",
            description: "i somos amigos",
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
          
          <h2>Projetos Curso Técnico</h2>
          <p>Jais aqui as principais atividades do curso técnico ocorridas ao longo do ano</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center alignt-items-center" id="pills-tab">
                <Nav.Item>
                    <Nav.Link eventKey="dev">Desen. de Sistemas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="matematica"> Impl. e Manu. de Sistemas </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="linguagens" > Modelagem de Sistemas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="humanas" > SA </Nav.Link>
                </Nav.Item>
              
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="dev">
                   <Row>
                    {
                         dev.map((dev, index) => {
                            return(
                               <DevCards
                                key={index}
                                {...dev} />
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