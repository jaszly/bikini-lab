import React from "react";
import logo from "./logo.svg";
import "./style.css";
import WanderLab from "./Lab.js";
import PlacesList from "./places.js";
import { Button, Container, Col, Form, Row, Tabs, Tab } from "react-bootstrap";

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
            <div style={{ textAlign: "center", textTransform: "lowercase" }}>
              <h1 id="header-txt">wander lab</h1>
              <h2 id="header-subtxt">
                handcrafted travel guides for the wanderlust adventurers{" "}
              </h2>
            </div>
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
