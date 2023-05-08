import { ReactElement, Dispatch, SetStateAction } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomeComponent from './HomeContent.tsx';
import TestComponent from './TestComponent';

interface Props {
  setContent: Dispatch<SetStateAction<ReactElement>>;
}

function NavbarComponent({setContent}: Props) {
  const handleContentChange = (content: string) => {
    switch (content) {
      case 'home':
        setContent(<HomeComponent />);
        break;
      case 'test':
        setContent(<TestComponent />);
        break;
      default:
        setContent(<HomeComponent />);
        break;
    }
  }
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => handleContentChange("home")}>Home</Nav.Link>
              <Nav.Link onClick={() => handleContentChange("test")}>Test Page</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarComponent;