import Card from 'react-bootstrap/Card';
import React, { useState } from "react";
import data from "../PostList.json";
import Heart from './myboton';
import Toast from 'react-bootstrap/Toast';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import BasicNavbar from './Navbar';


function Filtro() {
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   getList().then((data) => {
  //     setSearchTerm(data);
  //   },);
  // }, []);

  return (
    <>
      <BasicNavbar />
      <div className="templateContainer">
        <div className="searchInput_Container">
          <InputGroup size="sm" className="mb-3 px-2">
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm" id="searchInput" type="text" onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </InputGroup>
        </div>
        <div className="template_Container">
          {
            data
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (val.autor.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                } else if (val.text.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <Card className="container rounded me-2" key={val.id} style={{ width: '30rem' }}>
                    <Card.Img className="mt-3 mb-2 px-2" style={{ width: '28rem' }} variant="top" src={val.image} />
                    <Card.Body>
                      <Card.Title>{val.autor}</Card.Title>
                      <Card.Text>{val.text}
                      </Card.Text>
                      <Heart />
                      <Toast className="mx-auto" style={{ width: '30rem' }}>
                        <Toast.Header >
                          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                          <strong className="me-auto">{val.coments}</strong>
                          <small>{val.creted}</small>
                        </Toast.Header>
                        <Toast.Body>{val.cardtext}</Toast.Body>
                      </Toast>
                    </Card.Body>
                  </Card>
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default Filtro;