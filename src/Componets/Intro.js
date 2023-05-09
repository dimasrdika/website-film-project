import { Col, Container, Row } from 'react-bootstrap';
const Intro = () => {
    return(
<div id="Home">
        <Container className="mt-5 fs-3 position-absolute top-50 start-50 translate-middle d-flex text-light text-uppercase text-center justify-content-center">
    <Row>
    <Col><p>Experience the magic of <span className='text-danger'>cinema</span></p> 
        <p>one <span className='text-danger'>frame</span> at a time.</p>
        <button type="button" class="btn btn-danger text-uppercase">watch now</button>
        </Col>
    </Row>
</Container>
    </div>
    )
}

export default Intro;