import { useEffect, useState} from 'react'
import {Card , Button, Container, Row, Col , ButtonGroup} from 'react-bootstrap'
import axios from 'axios'
const Trending = () => {
const [movies, setMovies] = useState ([])    
    useEffect (() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
        api_key: process.env.REACT_APP_TMDB_KEY
        }
        }).then((response) => {
            setMovies(response.data.results)
        })
    } , []
)
    return (
        <Container id="Trending" className='pt-5'>
            <h1 className='text-center text-light pt-4'>Trending <span className='text-danger'>Now</span></h1>
            <Row className="p-4 pt-4 pb-4">
                {movies.map((result, index) => {
                return(
                    <Col md={4} className='movieImage' key={index}> 
                <Card style={{ width: '16rem'}}  className='bg-dark text-light mb-3'>
        <Card.Img variant="dark" src= {`${process.env.REACT_APP_IMG_URL}/${result.poster_path}` } alt='test' className='Images' />
        <Card.Body>
            <Card.Title className='text-center'>{result.title}</Card.Title>
            <Card.Text>{ result.overview }
            </Card.Text>
            <Card.Text>{ result.relese_date }
            </Card.Text>
            <ButtonGroup aria-label="Basic example" className='d-flex'>
        <Button variant="outline-warning">⭐</Button>
        <Button variant="outline-danger">Play</Button>
        </ButtonGroup>
        </Card.Body>
        </Card>
            </Col> 
            )
                })}
            </Row>
        </Container>
    )
}
export default Trending;