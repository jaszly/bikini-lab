import React, { useState } from "react";
import logo from "./logo.svg";
import "./style.css";
import WanderLab from "./Lab.js";

import { Button, Container, Col, Row } from "react-bootstrap";

//create place obj

//build out places list
const PlacesList = () => {
  const [total, setTotal] = useState(0);
  const [places, setPlaces] = useState([
    {
      id: 1,
      cityName: "Atlanta",
      type: "at night",
      eat: "Poor Calvins",
      mustTryFood: "Lamb Ossoburro",
      drink: "Poor Calvins",
      mustTryDrink: "vodka martini",
      see: "midtown",
      especiallySee: "piedmont park ",
      mustDo: "music in piedmont park",
      explore: "midtown",
      budget: "200",
    },
  ]);

  //get total budget
  const calculateTotal = (budget) => {
    setTotal(total + parseInt(budget));
  };

  //alert place
  const showPlace = (cityName) => {
    alert("You selected " + cityName);
  };

  const addPlace = (place) => {
    setPlaces([...places, place]);
  };

  const Place = ({
    cityName,
    eat,
    type,
    mustTryFood,
    drink,
    mustTryDrink,
    see,
    especiallySee,
    mustDo,
    explore,
    budget,
    content,
    onShowPlace,
    onCalculateTotal,
  }) => {
    //Declare a new state var called quantity
    const [quantity, setQuantity] = useState(0);

    const buy = () => {
      //alert('You selected this place')
      setQuantity(quantity + 1);
      onCalculateTotal(budget);
    };
    return (
      <>
        <div style={{ textAlign: "center", textTransform: "lowercase" }}>
          <Row>
            <h3 style={{ fontSize: "10vh", textTransform: "capitalize" }}>
              {cityName}
            </h3>
            <p className="type">{type}</p>
            <p className="user">by @user</p>
          </Row>

          <img
            style={{ width: " 40vw", margin: "4vh 0 -4vh 0" }}
            src="https://images.unsplash.com/photo-1589414480645-9c552d67f352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXRsYW50YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            class="img-thumbnail"
            alt="..."
          />
          <Row className="grid three sections">
            <div>
              <h3>eat</h3>
            </div>
            <Col>
              <Row className="eat">{eat}</Row>
              <Row>
                <p className="especially">Must try:</p> {mustTryFood}
              </Row>
            </Col>
            <div>
              <img
                className="imgs"
                src={
                  "https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
                class="img-thumbnail"
                alt="..."
              />
            </div>
          </Row>

          <Row className="grid three sections">
            <div>
              <h3>drink</h3>
            </div>
            <Col>
              <Row className="eat">{drink}</Row>
              <Row> Must try: {mustTryDrink}</Row>
            </Col>
            <div>
              <img src="..." class="img-thumbnail" alt="..." />
            </div>
          </Row>

          <Row className="grid three sections">
            <div>
              <h3>see</h3>
            </div>
            <Col>
              <Row>{see}</Row>
              <Row> especially: {especiallySee}</Row>
            </Col>
            <div>
              <img src="..." class="img-thumbnail" alt="..." />
            </div>
          </Row>

          <Row className="grid three sections">
            <div>
              <h3>do</h3>
            </div>
            <Col>
              <Row>{mustDo}</Row>
            </Col>
            <div>it will be all written here, but not yet!</div>
          </Row>

          <Row className="grid three sections">
            <div>
              <h3 style={{ marginLeft: "2vw" }}>explore</h3>
            </div>
            <Row>{explore}</Row>
            <div>
              <img src="..." class="img-thumbnail" alt="..." />
            </div>
          </Row>
          <hr />

          <Row className="grid two  ">
            <div>
              <p>budget</p>
            </div>
            <Row>{budget}</Row>
          </Row>
        </div>
      </>
    );
  };

  return (
    <>
      {" "}
      <div className="grid two">
        <div id="lab">
          <WanderLab index={places.length + 1} onCreatePlace={addPlace} />
        </div>
        <div id="places">
          {places.map((p) => (
            <Place
              key={p.id}
              cityName={p.cityName}
              type={p.type}
              eat={p.eat}
              mustTryFood={p.mustTryFood}
              drink={p.drink}
              mustTryDrink={p.mustTryDrink}
              see={p.see}
              especiallySee={p.especiallySee}
              mustDo={p.mustDo}
              explore={p.explore}
              budget={p.budget}
              content={p.content}
              onCalculateTotal={calculateTotal}
              onShowPlace={showPlace}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default PlacesList;
