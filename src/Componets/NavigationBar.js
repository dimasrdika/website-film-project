import {Nav, Container , Navbar , NavDropdown} from 'react-bootstrap'

function NavigationBar() {
return (
    <Navbar collapseOnSelect expand="lg" style={{background:`#191919`}} variant="dark" fixed='top'>
    <Container>
        <Navbar.Brand className='text-danger fs-3' href="/">DIM'S FILM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-3 fs-5">
            <Nav.Link className='text-light' href="#Home">Home</Nav.Link>
            <NavDropdown title="Category" id="collasible-nav-dropdown" menuVariant='dark'>
            <NavDropdown.Item href="#Action">Action</NavDropdown.Item>
            <NavDropdown.Item href="#Trending">
                Trending
            </NavDropdown.Item>
            <NavDropdown.Item href="#Thriller">Thriller</NavDropdown.Item>
            <NavDropdown.Divider />
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default NavigationBar;