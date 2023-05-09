import {Card , Button, Container, Row, Col , ButtonGroup} from 'react-bootstrap'
import Ffs from "../asset/image/action/fast-furious.jpg"
import Johnwick from "../asset/image/action/john-wick.jpg"
import Mi from "../asset/image/action/mission-impossible.jpg"
import Tos from "../asset/image/action/tears-of-the-sun.jpg"
import TombRaider from "../asset/image/action/tomb-raider.jpg"
import Extraction from "../asset/image/action/Extraction.jpg"

const Action = () => {
    return (
        <Container id="Action" className='pt-5'>
            <h1 className='text-center text-light pt-4'>Action</h1>
            <Row className="p-4 pt-4 pb-4">
                <Col md={4} className='movieImage'> 
                <Card style={{ width: '16rem'}}  className='bg-dark text-light mb-3'>
        <Card.Img variant="dark" src= {Ffs} alt='Ffs' className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>Fast and furious 7</Card.Title>
            <Card.Text>Fast and Furious 7 is an action-packed film about a group of skilled drivers who are on the run from a dangerous enemy. 
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
        <Card.Img variant="dark" src= {Johnwick} alt='JohnWick' className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>JohnWick</Card.Title>
            <Card.Text>John Wick is a thrilling action film about a retired hitman who is forced back into the world of assassins after his beloved dog is killed by a Russian mobster.
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
        <Card.Img variant="dark" src= {Mi} alt='Mission Imposible' className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>Mission impossible</Card.Title>
            <Card.Text>Mission Impossible is a spy film series that follows the adventures of Ethan Hunt, a special agent who works for the Impossible Missions Force (IMF).
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
        <Card.Img variant="dark" src= {Tos} alt='Tears of the sun' className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>Tears of the sun</Card.Title>
            <Card.Text>Tears of the Sun is a war drama film about a group of Navy SEALs who are sent on a dangerous mission to rescue American citizens from a civil war in Nigeria.
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
        <Card.Img variant="dark" src= {TombRaider} alt='Tomb Raider' className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>Tomb Raider</Card.Title>
            <Card.Text> Tomb Raider is an action-adventure film about a young woman named Lara Croft who embarks on a dangerous mission to uncover the truth about her father's disappearance. 
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
        <Card.Img variant="dark" src= {Extraction} alt ='Extraction'className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>Extraction</Card.Title>
            <Card.Text>Extraction is an action-thriller film about a black-market mercenary named Tyler Rake who is hired to rescue the kidnapped son of an international crime lord. 
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
export default Action;