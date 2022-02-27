import React from "react";
import logo from "./logo.svg";
import "./style.css";
import WanderLab from "./Lab.js";
import PlacesList from "./cities.js";
import { Button, Container, Col, Form, Row } from "react-bootstrap";

class App extends React.Component {
  // state = { setPlaces: places };
  // render() {
  //   const addPlace = (place) => {
  //     setPlaces([...places, place]);
  //   };
  render() {
    return (
      <>
        <Container>
          <Row>
            <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
              HEADER
            </h1>
          </Row>
          <Row>
            <PlacesList />
          </Row>
        </Container>
      </>
    );
  }
}
export default App;
