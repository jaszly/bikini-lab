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
      cityName: "Paris",
      type: "in a morning",
      eat: "Boulange",
      mustTryFood:
        "the pan du fromage, the french toast, the strawberry sorbet. yum.",
      drink: "cafe de atlier",
      mustTryDrink: "parisian latte",
      see: "le minoff",
      especiallySee: "park",
      mustDo: "selfie from the ne corner of tour effiel",
      explore: "le marais",
      budget: "20",
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
            <div>
              <h3
                style={{
                  fontFamily: "Raleway",
                  fontSize: "10vh",
                  textTransform: "capitalize",
                }}
              >
                <i className="fas fa-map-marker-alt"></i>
                {cityName}
              </h3>
            </div>
            <p className="type">
              <i class="far fa-clock"></i>
              {type}
            </p>
            <p style={{ fontSize: "15px" }} className="user">
              by @user
            </p>
          </Row>

          <img
            style={{ width: " 40vw", margin: "4vh 0 -4vh 0", opacity: "60%" }}
            src="https://images.unsplash.com/photo-1500301111609-42f1aa6df72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            class="img-thumbnail"
            alt="..."
          />
          <Row className="grid three sections">
            <div>
              <h3 className="subtitle">eat</h3>
            </div>
            <Col>
              <Row className="input-primary">"{eat}"</Row>
              <Row>
                <p className="especially">Must try:</p>
                <p className="description">"{mustTryFood}"</p>
              </Row>
            </Col>
            <div>
              <img
                className="img-thumbnail little-imgs"
                src={
                  "https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
                alt="..."
              />
            </div>
          </Row>

          <Row className="grid three sections">
            <div>
              <h3 className="subtitle">drink</h3>
              <Row>
                <p className="subtitle-secondary">Must try: </p>
              </Row>
            </div>
            <Col>
              <Row style={{ marginTop: "2vh" }} className="input-primary">
                "{drink}"
              </Row>

              <Row>
                <p className="description">"{mustTryDrink}"</p>
              </Row>
            </Col>
            <div>
              <img
                src="https://images.unsplash.com/photo-1602833334025-5019f046b8f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                className="img-thumbnail little-imgs"
                alt="..."
              />
            </div>
          </Row>

          <Row className="grid three sections">
            <div>
              <h3 className="subtitle">see</h3>
            </div>
            <Col>
              <Row className="input-primary">{see}</Row>
              <Row className="subtitle-secondary">
                {" "}
                especially: {especiallySee}
              </Row>
            </Col>
            <div>
              <img src="..." className="img-thumbnail" alt="..." />
            </div>
          </Row>

          <Row className="grid three sections">
            <div>
              <h3 className="subtitle">do</h3>
            </div>
            <Col>
              <Row
                style={{ fontStyle: "normal", fontWeight: "400" }}
                className="description"
              >
                {mustDo}
              </Row>
            </Col>
            <div
              style={{ fontStyle: "normal", fontWeight: "400" }}
              className="description"
            >
              more info more infoselfie from the ne corner of tour effiel.
              loreum ipsum is def loreum ipsum
            </div>
          </Row>

          <Row className="grid three sections">
            <div>
              <h3 style={{ marginLeft: "2vw" }}>explore</h3>
            </div>
            <Row className="input-primary">{explore}</Row>
            <div>
              <img src="..." className="img-thumbnail" alt="..." />
            </div>
          </Row>

          <Row className="grid two  ">
            <div>
              <h3 style={{ marginLeft: "2vw" }}>budget:</h3>
            </div>
            <Row className="input-primary">${budget}</Row>
          </Row>
          <hr />
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
