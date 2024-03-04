import {Row, Col, Container} from'react-bootstrap';

export const ProjectsCards = ({title, description, imgUrl}) =>{
   

    return(
       <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl} />
            <div className='proj-txt'>
                
            </div>
        </div>
       </Col>
    )
}