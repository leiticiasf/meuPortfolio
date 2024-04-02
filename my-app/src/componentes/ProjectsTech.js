 import { Container, Row, Col, Nav, Tab} from "react-bootstrap";
 import { DevCards } from "./ProjectsCardsTech";
 import fotoCalcReact from "../assets/tecnicoImg/calculadoraReact.png";
 import fotoCasoUML from "../assets/tecnicoImg/casoDeUso.png";


export const DevProjects = () => { /* Parte Desenvolvimento de Sistemas*/
    const ads = [
        {
            title: "Calculadora de Horas",
            description: "Neste trabalho nós fizemos uma calculadora de horas em React.",
            imgUrl: fotoCalcReact,
            link: "https://github.com/leiticiasf/calculadoraReact",
        },
        {
            title: "Postman",
            description: "Primeiro contato com JAVA e Banco de Dados",
        },
   
    ];      
    
    const modelagem = [
        {
            title:"Caso de Uso SA",
            description: "Esta atividade tinha como requerimento que nós criássemos um diagrama UML que explicasse o funcionamento do nosso site da SA. ",  
            imgUrl: fotoCasoUML,
            link: "https://lucid.app/lucidchart/d44af6f0-98d9-4c0b-b85c-38a961aa19c7/edit?viewport_loc=-201%2C399%2C1993%2C789%2C0_0&invitationId=inv_17bc7a94-ccf2-4de0-af71-5722ce18cc03",  
        }                                                       
    ]



return(
    <section className="project" id="project">
        <Container>
        <Row>
            <Col>
          
          <h2>Projetos Curso Técnico</h2>
          <p>Jazem aqui as principais atividades do curso técnico ocorridas ao longo do ano</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center alignt-items-center" id="pills-tab">
                <Nav.Item>
                    <Nav.Link eventKey="ads">Desen. de Sistemas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="ims"> Impl. e Manu. de Sistemas </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="modelagem" > Modelagem de Sistemas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="sa" > SA </Nav.Link>
                </Nav.Item>
              
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="ads">
                   <Row>
                    {
                         ads.map((ads, index) => {
                            return(
                               <DevCards
                                key={index}
                                {...ads} />
                            )
                        })
                    }
                   </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="modelagem">
                    <Row>
                        {
                            modelagem.map((modelagem, index) => {
                                return(
                                    <DevCards 
                                    key={index}
                                    {...modelagem} />
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