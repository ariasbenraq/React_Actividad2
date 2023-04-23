import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import UserLogo from '../img/user-solid.svg'
import { Link } from 'react-router-dom';



function BasicNavbar() {
  return (
    <Navbar classNam="px-3" bg="light" expand="lg">
      <Container>
        <Link to="/items">
          <Navbar.Brand>Semana 2</Navbar.Brand>
        </Link>
        <Link to="/ProfilePage">
          <Navbar.Brand>
            <img src={UserLogo} width="30" height="30" alt="" ></img>
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
}


export default BasicNavbar;
