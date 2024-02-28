import { useState } from 'react';
import { Navbar, Container } from "react-bootstrap";

function BasicExample() {
  const {linkAtivo, setLinkAtivo} = useState('inicio');
  const {scrolled, setScrolled} = useState('false');

  useEffect(() => {
      const onScroll = () =>{
        if (window.scrollY > 50 ){
          setScrolled(true) ;
                } else{
                  setScrolled(false);
                }
              }

              window.addEventListener("scroll", onscroll);
              return () => window.removeEventListener ("scroll", onScroll);

  }, [])
 const onUpdateLinkAtivo = (value)=>{
  setLinkAtivo(value);
 }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled ": ""}>
      <Container>

        <Navbar.Brand href="#home">
        <img src={''} alt="desenhoDeMim" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio" className={linkAtivo === "inicio" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateLinkAtivo('inicio')}>Início</Nav.Link>
            <Nav.Link href="#sobreMim" className={linkAtivo === "sobreMim" ? 'active navbar-link' : 'navbar-link'}onClick={()=> onUpdateLinkAtivo('sobreMim')}>Sobre Mim</Nav.Link>
            <Nav.Link href="#projetos"className={linkAtivo === "projetos" ? 'active navbar-link' : 'navbar-link'}onClick={()=> onUpdateLinkAtivo('projetos')}>Projetos</Nav.Link>
            <Nav.Link href="#redesSociais"className={linkAtivo === "redesSociais" ? 'active navbar-link' : 'navbar-link'}onClick={()=> onUpdateLinkAtivo('redesSociais')}>Redes Sociais</Nav.Link>
          </Nav>
          <span className='navbar-texto'>
             <div className='social-icon'>
              <a href='#'><img src={} alt="" /> </a>
              <a href='#'><img src={} alt="" /> </a>
              <a href='#'><img src={} alt="" /> </a>
             </div>
             <button className="Botoes" onClick={() => console.log('connect')} > 
                      <span> Conectando </span>  </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;