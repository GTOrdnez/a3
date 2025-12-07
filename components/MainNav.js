import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { readToken, removeToken } from "@/lib/authenticate";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MainNav() {
    const router = useRouter();
    const [token, setToken] = useState(null);

    // Prevent SSR hydration errors
    useEffect(() => {
        setToken(readToken());
    }, []);

    function logout() {
        removeToken();
        setToken(null);
        router.push("/login");
    }

    return (
        <Navbar className="fixed-top navbar-dark bg-primary" expand="lg">
            <Container>
                <Navbar.Brand as={Link} href="/">Guillermo Torrez</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} href="/about">About</Nav.Link>
                    </Nav>

                    {token && (
                        <Nav>
                            <NavDropdown title={token.userName} align="end">
                                <NavDropdown.Item as={Link} href="/favourites">Favourites</NavDropdown.Item>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    )}

                    {!token && (
                        <Nav>
                            <Nav.Link as={Link} href="/register">Register</Nav.Link>
                            <Nav.Link as={Link} href="/login">Login</Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
