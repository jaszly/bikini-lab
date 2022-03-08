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
      userName: "jaszly",
      cityName: "San Francisco",
      type: "in an afternoon",
      eat: "Hog Island Oyster co",
      mustTryFood:
        "any of the local oysters to start. mussels, the shrimp po boy and fries for the table.",
      drink: "Red Bay Coffee",
      mustTryDrink: "Candied Yam Latte",
      activity: "Bike the Embarcadero",
      mustDo:
        "Rent a bike or scooter and ride the embarcadero trail from the Ferry building to the Chase Center. Stop for photos by the bridge.",
      explore: "The Ferry Building",
      especiallySee:
        "check out the farmers market, roam the shops, sample food from local artisians and pick up souvenirs.",
      budget: "$$$",
    },
  ]);

  //get total budget

  //alert place
  const showPlace = (cityName) => {
    alert("You selected " + cityName);
  };

  const addPlace = (place) => {
    setPlaces([...places, place]);
  };

  const Place = ({
    userName,
    cityName,
    eat,
    type,
    mustTryFood,
    drink,
    mustTryDrink,
    activity,
    especiallySee,
    mustDo,
    explore,
    budget,
    content,
    onShowPlace,
  }) => {
    //Declare a new state var called quantity
    // const [quantity, setQuantity] = useState(0);

    // const buy = () => {
    //   //alert('You selected this place')
    //   setQuantity(quantity + 1);
    //   onCalculateTotal(budget);
    // };
    return (
      <>
        <div style={{ textAlign: "center", textTransform: "lowercase" }}>
          <Row style={{ textAlign: "center" }}>
            <div>
              <h3
                style={{
                  fontFamily: "Noto Serif Display",
                  fontSize: "10vh",
                  textTransform: "lowercase",
                }}
              >
                <i className="fas fa-map-marker-alt"></i>
                {cityName}
              </h3>
            </div>
            <p className="type">{type}</p>
            <p style={{ fontSize: "15px" }} className="user">
              by @{userName}
            </p>
          </Row>
          <hr />

          <img
            style={{ width: " 40vw", margin: "4vh 0 -4vh 0", opacity: "80%" }}
            src="https://images.unsplash.com/photo-1425321395722-b1dd54a97cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            className="img-thumbnail"
            alt="..."
          />
          <Row className="grid three sections">
            <div>
              <h3 className="subtitle">eat</h3>
            </div>
            <Col>
              <Row className="input-primary">"{eat}"</Row>
              <Row>
                <p
                  className="subtitle-secondary"
                  style={{ margin: "1vh -4vw}" }}
                >
                  Must try:
                </p>
                <p className="description">"{mustTryFood}"</p>
              </Row>
            </Col>
            <div>
              <img
                className="img-thumbnail little-imgs"
                src={
                  "https://images.unsplash.com/photo-1627898292764-6733087b55ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3lzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                }
                alt="..."
              />
            </div>
          </Row>
          <hr />
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
                <p className="description" style={{ marginTop: "3vh" }}>
                  "{mustTryDrink}"
                </p>
              </Row>
            </Col>
            <div>
              <img
                src="https://cdn.vox-cdn.com/thumbor/eER6G3tGnquawRm-ehn9QIdYr9E=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22436364/RedBayCoffee_PChang_3243.jpg"
                className="img-thumbnail little-imgs"
                alt="..."
              />
            </div>
          </Row>
          <hr />

          <Row className="grid three sections">
            <div>
              <h3 className="subtitle">do</h3>
            </div>
            <Col>
              <Row className="input-primary">{activity}</Row>
              <Row className="subtitle-secondary"></Row>
            </Col>
            <Row style={{ fontWeight: "400" }} className="description">
              "{mustDo}"
            </Row>
          </Row>
          <hr />

          <Row className="grid two sections">
            <div>
              <h3 className="subtitle">explore</h3>
            </div>
            <Col>
              <Row className="input-primary">{explore}</Row>
            </Col>
            <div style={{ fontWeight: "400" }} className="description">
              {especiallySee}
            </div>
          </Row>
          <hr />

          <Row className="grid two sections" style={{ margin: "0 11vw" }}>
            <div>
              <h3 className="subtitle">budget:</h3>
            </div>
            <Row className="input-primary" style={{ fontSize: "5vh" }}>
              {budget}
            </Row>
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
              userName={p.userName}
              cityName={p.cityName}
              type={p.type}
              eat={p.eat}
              mustTryFood={p.mustTryFood}
              drink={p.drink}
              mustTryDrink={p.mustTryDrink}
              activity={p.activity}
              especiallySee={p.especiallySee}
              mustDo={p.mustDo}
              explore={p.explore}
              budget={p.budget}
              content={p.content}
              onShowPlace={showPlace}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default PlacesList;
