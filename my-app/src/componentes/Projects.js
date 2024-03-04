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
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="natureza">Option 1 </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="matematica">Option 2 </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="humanas" > Option 3 </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="linguagens" > Option 3 </Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="natureza">
                   <Row>
                    {
                        projects.map((project, index) => {
                            return(
                                <p>{project.title }</p>
                            )
                        })
                    }
                   </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="natureza"> eu amo roblox. eu amo mais robox. 1% do meu amor por roblox equivale ao amor de todos vocês. </Tab.Pane>
                <Tab.Pane eventKey="humanas">wake up. put in yourself a little makeup.</Tab.Pane>
                <Tab.Pane eventKey="linguagens">zaizaizaizzziaaaiza. memowmeomowmeowemow</Tab.Pane>
            </Tab.Content>
            </Tab.Container>
            </Col>
        </Row>
        </Container>
    </section>
)
}