import React, {useState, useEffect} from "react";
import { Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/photos/cachorro.png";



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Citilia", "Titicia", "Lefstilia"];
    const period = 2000;

    useEffect(() =>{
        let ticker = setInterval(() => {
                tick();

        }, delta)

        return() => {clearInterval(ticker)}
    },[text])
   
    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
            
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                       <span className="tagline">Este é o meu Portfolio</span>
                       <h1>Olá, eu sou a <span className="wrap">{text}</span></h1>
                       <p>Me chamo Letícia, tenho 17 anos e estou no 3° ano do Ensino Médio cursando o Técnico na instituição de ensino Escola Sesi.</p>
                       <p> Meus hobbies envolvem desenhar, ouvir música, cozinhar (principalmente confeitaria), tocar guitarra e jogar volêi.</p>
                        <button onClick={() => console.log('connect')}>Fale comigo!< ArrowRightCircle size={25}/></button>
                    </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Header img" />
                        </Col>
                </Row>
            </Container>
        </section>
    )
}