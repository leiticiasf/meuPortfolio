import { Container, Row, Col} from "react-bootstrap";


export const Projects = () => {
    const projects = [
        {
            title: "Blabla",
            description: "Blelbleleb",
            imgUrl: projImg1,
        },
        {
            title: "Blabla",
            description: "Blelbleleb",
            imgUrl: projImg1,
        },
        {
            title: "Blabla",
            description: "Blelbleleb",
            imgUrl: projImg1,
        },
        {
            title: "Blabla",
            description: "Blelbleleb",
            imgUrl: projImg1,
        },    
    ];



return(
    <section className="project" id="project">
        <Container>
        <Row>
            <Col>
          
          <h2>Projetos</h2>
          <p>E tudo que eu posso te dar<br/>
            É solidão com vista pro mar<br/>
            Ou outra coisa pra lembrar<br/>
            Se você quiser, eu<br/>
            Eu posso tentar, mas<br/>
            Eu não sei dançar tão devagar<br/>
            Pra te acompanhar</p>
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="first">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Option2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third" > Disabled </Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
        </Row>
        </Container>
    </section>
)
}