import { Col} from'react-bootstrap';

export const DevCards = ({title, description, imgUrl, link}) =>{
    const handleClick = () => {
        if (link) {
            window.open(link, '_blank');
        }
    };
   

    return(
       <Col sm={6} md={4}>
        <div className='proj-imgbx' onClick={handleClick} style={{ cursor: 'pointer' }}>
            <img src={imgUrl} />
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
       </Col>

    )
}

            
