import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/character">Character</Nav.Link>
                    <Nav.Link href="/detail">Detail</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Container>
                <Button href="/login">LogIn</Button>
            </Navbar>
        </>
    )
};