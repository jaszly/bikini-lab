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
      eat: "Rubios",
      mustTryFood: "Steak Tacos",
      drink: "Calvins",
      mustTryDrink: "vodka martini",
      see: "midtown",
      especiallySee: "piedmont park",
      mustDo: "catch a show in piedmont park",
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

  //get all existing ptoduct inside the list
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
        <div style={{ textAlign: "center" }}>
          <Row>
            <h3 style={{ fontSize: "10vh", textTransform: "capitalize" }}>
              {cityName}
            </h3>
            <p className="type">{type}</p>
            <p className="user">by @user</p>
          </Row>
          <img src="..." class="img-thumbnail" alt="..." />
          <Row className="grid three sections">
            <div>
              <h3>eat</h3>
            </div>
            <Col>
              <Row>{eat}</Row>
              <Row> Must try: {mustTryFood}</Row>
            </Col>
            <div>
              <img src="..." class="img-thumbnail" alt="..." />
            </div>
          </Row>

          <Row className="grid three sections">
            <div>
              <h3>drink</h3>
            </div>
            <Col>
              <Row>{drink}</Row>
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
              <Row style={{ margin: "0 -2vw" }}>{mustDo}</Row>
              <Row style={{ textAlign: "left", margin: "0 -2vw" }}>
                it will be all written here, but not yet!{" "}
              </Row>
            </Col>
            <div></div>
          </Row>

          <Row className="grid three sections">
            <div>
              <h3>explore</h3>
            </div>
            <Row>{explore}</Row>
            <div>
              <img src="..." class="img-thumbnail" alt="..." />
            </div>
          </Row>

          <p>${budget}</p>
          <p>this says somting</p>
          <Button className="cartButton" onClick={buy}>
            Add to Budget
          </Button>
          <hr />
        </div>
      </>
    );
  };

  const Total = ({ totalBudget }) => {
    return <h3>Trip Budget Estimator: {totalBudget}.00</h3>;
  };

  return (
    <>
      {" "}
      <div className="grid two">
        <div style={{ border: "1px solid pink" }}>
          <WanderLab index={places.length + 1} onCreatePlace={addPlace} />
        </div>
        <div>
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
          <Total totalBudget={total} />{" "}
        </div>
      </div>
    </>
  );
};
export default PlacesList;
