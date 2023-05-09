import {Card , Button, Container, Row, Col , ButtonGroup} from 'react-bootstrap'
import Annabelle from "../asset/image/thriller/annabelle.jpg"
import Conjuring from "../asset/image/thriller/conjuring.jpg"
import GirlTrain from "../asset/image/thriller/girl-train.jpg"
import Insidios from "../asset/image/thriller/insidious.jpg"
import IT from "../asset/image/thriller/it.jpg"
import TheStrays from "../asset/image/thriller/the-strays.jpg"

const Thriller = () => {
    return (
        <Container id="Thriller" className='pt-5'>
            <h1 className='text-center pt-4' style={{color:"red"}}>Thriller</h1>
            <Row className="p-4 pt-4 pb-4">
                <Col md={4} className='movieImage'> 
                <Card style={{ width: '16rem'}}  className='bg-dark text-light mb-3'>
        <Card.Img variant="dark" src= {Annabelle} alt='Annabelle' className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>Annabelle</Card.Title>
            <Card.Text>Annabelle is a horror film about a possessed doll that terrorizes a young couple who recently lost their daughter. The film follows the couple as they struggle to understand the supernatural 
            </Card.Text>
            <ButtonGroup aria-label="Basic example" className='d-flex'>
        <Button variant="outline-warning">⭐</Button>
        <Button variant="outline-danger">Play</Button>
        </ButtonGroup>
        </Card.Body>
        </Card>
                </Col>
                <Col md={4} className='movieImage'> 
                <Card style={{ width: '16rem'}}  className='bg-dark text-light mb-3'>
        <Card.Img variant="dark" src= {Conjuring} alt='Conjuring' className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>The Conjuring</Card.Title>
            <Card.Text>The Conjuring is a supernatural horror film about a family who moves into a haunted house in Rhode Island. 
            </Card.Text>
            <ButtonGroup aria-label="Basic example" className='d-flex'>
        <Button variant="outline-warning">⭐</Button>
        <Button variant="outline-danger">Play</Button>
        </ButtonGroup>
        </Card.Body>
        </Card>
                </Col>
                <Col md={4} className='movieImage'> 
                <Card style={{ width: '16rem'}} className='bg-dark text-light mb-3'>
        <Card.Img variant="dark" src= {GirlTrain} alt='GirlTrain' className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>Girl Train</Card.Title>
            <Card.Text>Girl on the Train is a psychological thriller film about a woman named Rachel who becomes involved in a missing persons case. 
            </Card.Text>
            <ButtonGroup aria-label="Basic example" className='d-flex'>
        <Button variant="outline-warning">⭐</Button>
        <Button variant="outline-danger">Play</Button>
        </ButtonGroup>
        </Card.Body>
        </Card>
                </Col>
                <Col md={4} className='movieImage'> 
                <Card style={{ width: '16rem'}}  className='bg-dark text-light mb-3 pb-3 mt-3'>
        <Card.Img variant="dark" src= {Insidios} alt='Insidios' className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>Insidious</Card.Title>
            <Card.Text>Insidious is a horror film about a family who moves into a new home, only to discover that it's haunted by evil spirits. The film follows the family as they try to uncover
            </Card.Text>
            <ButtonGroup aria-label="Basic example" className='d-flex'>
        <Button variant="outline-warning">⭐</Button>
        <Button variant="outline-danger">Play</Button>
        </ButtonGroup>
        </Card.Body>
        </Card>
            </Col>
                <Col md={4} className='movieImage'> 
                <Card style={{ width: '16rem'}}   className='bg-dark text-light pb-3 mt-2'>
        <Card.Img variant="dark" src= {IT} alt='IT' className='Images' />
        <Card.Body>
            <Card.Title className='text-center text-danger'>IT</Card.Title>
            <Card.Text>Insidious is a horror film about a family who moves into a new home, only to discover that it's haunted by evil spirits. The film follows the family as they try to uncover 
            </Card.Text>
            <ButtonGroup aria-label="Basic example" className='d-flex'>
        <Button variant="outline-warning">⭐</Button>
        <Button variant="outline-danger">Play</Button>
        </ButtonGroup>
        </Card.Body>
        </Card>
            </Col>
                <Col md={4} className='movieImage'> 
                <Card style={{ width: '16rem'}}   className='bg-dark text-light pb-3 mt-2'>
        <Card.Img variant="dark" src= {TheStrays} alt ='TheStrays'className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>The Strays</Card.Title>
            <Card.Text>A woman's meticulously-crafted life of privilege unravels when two strangers show up in her quaint suburban town.
            </Card.Text>
            <ButtonGroup aria-label="Basic example" className='d-flex'>
        <Button variant="outline-warning">⭐</Button>
        <Button variant="outline-danger">Play</Button>
        </ButtonGroup>
        </Card.Body>
        </Card>
            </Col>
            </Row>
        </Container>
    )
}
export default Thriller;