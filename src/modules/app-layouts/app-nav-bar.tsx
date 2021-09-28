import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

function AppNavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="container-fluid">
                <Navbar.Brand href="#home">React Web Application</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/about">About React</Nav.Link>
                        <Nav.Link href="/employee">Employee management</Nav.Link>
                        <Nav.Link href="/articles">Articles management</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default AppNavBar;