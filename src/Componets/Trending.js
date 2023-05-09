import {Card , Button, Container, Row, Col , ButtonGroup} from 'react-bootstrap'
import Peterpan from "../asset/image/trending/peterpan.jpg"
import Strong from "../asset/image/trending/12-strong.jpg"
import Antman from "../asset/image/trending/ant-man.jpg"
import Triple9 from "../asset/image/trending/triple-9.jpg"
import Dune from "../asset/image/trending/dune.jpg"
import Guardian from "../asset/image/trending/guardian.jpg"

const Trending = () => {
    return (
        <Container id="Trending" className='pt-5'>
            <h1 className='text-center text-light pt-4'>Trending <span className='text-danger'>Now</span></h1>
            <Row className="p-4 pt-4 pb-4">
                <Col md={4} className='movieImage'> 
                <Card style={{ width: '16rem'}}  className='bg-dark text-light mb-3'>
        <Card.Img variant="dark" src= {Peterpan} alt='Peterpan' className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>Peterpan and Wendy</Card.Title>
            <Card.Text>Peter Pan and Wendy is a fantasy adventure film that is based on J.M. Barrie's classic tale of Peter Pan. The film follows the adventures of Peter Pan and Wendy in Neverland
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
        <Card.Img variant="dark" src= {Strong} alt='12-Strong' className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>12 Strong</Card.Title>
            <Card.Text>12 Strong is a war drama film based on the true story of Operation Enduring Freedom, where U.S. special forces fought against the Taliban in Afghanistan in 2001
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
        <Card.Img variant="dark" src= {Antman} alt='Ant-man' className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>Ant Man</Card.Title>
            <Card.Text>Ant-Man is a superhero film that follows the story of Scott Lang, a former criminal who becomes Ant-Man, a superhero with the ability to shrink his size but maintain the strength
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
        <Card.Img variant="dark" src= {Triple9} alt='Triple-9' className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>Triple-9</Card.Title>
            <Card.Text>Triple 9 is an action thriller film about a group of criminals who plan a very large bank heist. However, their plan is threatened when one of their members decides to betray them and work with the police.
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
        <Card.Img variant="dark" src= {Dune} alt='Dune' className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>Dune</Card.Title>
            <Card.Text> Dune is a science fiction epic film adapted from the classic novel by Frank Herbert of the same name. The film follows the story of Paul Atreides, a young man who is chosen to lead a planet
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
        <Card.Img variant="dark" src= {Guardian} alt ='Guardian of galaxy'className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>Guardian of galaxy</Card.Title>
            <Card.Text>Guardians of the Galaxy is a superhero film that follows the story of Peter Quill, a space adventurer who becomes involved in a war between different groups in the universe.
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
export default Trending;