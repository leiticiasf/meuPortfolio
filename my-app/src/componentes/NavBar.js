import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import github from '../assets/img/GitHubIcon.svg';
import linkedin from '../assets/img/LinkedInIcon.svg';
import pinterest from '../assets/img/PinterestIcon.svg';
import desenhoLeticia from '../assets/photos/leticiaDesenho.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>

        <Navbar.Brand href="#home">
          <img id="imgP"src={desenhoLeticia} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Início</Nav.Link>
            <Nav.Link href="#sobreMim" className={activeLink === "sobreMim" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sobreMim')}>Sobre Mim</Nav.Link>
            <Nav.Link href="#projetos" className={activeLink === "projetos" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projetos')}>Projetos</Nav.Link>
            <Nav.Link href="#redesSociais" className={activeLink === "redesSociais" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('redesSociais')}>Redes Sociais</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href='https://github.com/'><img src={github} alt="github" /> </a>
              <a href='#'><img src={linkedin} alt="linkedin" /> </a>
              <a href='#'><img src={pinterest} alt="pinterest" /> </a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')} >  <span> Conectando </span>  </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
