import React, { useState } from "react";
import logo from "./logo.svg";
import "./style.css";
import WanderLab from "./Lab.js";

import { Button, Card, Container, Col, Row } from "react-bootstrap";

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
      cityImg:
        "https://images.unsplash.com/photo-1425321395722-b1dd54a97cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
    cityImg,
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
              <h3 className="city">
                <i className="fas fa-map-marker-alt"></i>
                {cityName}
              </h3>
            </div>
            <p className="time-of-day">{type}</p>
            <p style={{ fontSize: "15px" }} className="user">
              by @{userName}
            </p>
          </Row>
          <hr />

          <div
            style={{ backgroundImage: `url('${cityImg}')` }}
            className="city-img"
          ></div>

          <div class="gridplaces">
            <div class="grid-item">
              <Card className="cards">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1621247473481-88661d45084e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                />
                <Card.Body>
                  <p className="card-section">eat</p>

                  <Card.Title>
                    <h1 className="card-subtitle">"{eat}"</h1>
                  </Card.Title>
                  <Card.Text className="card-description">
                    "try: {mustTryFood}"
                  </Card.Text>
                </Card.Body>
              </Card>{" "}
            </div>
            <div class="grid-item">
              {" "}
              <Card className="cards">
                <Card.Img
                  variant="top"
                  src="https://cdn.vox-cdn.com/thumbor/eER6G3tGnquawRm-ehn9QIdYr9E=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22436364/RedBayCoffee_PChang_3243.jpg"
                />
                <Card.Body>
                  <p className="card-section">drink</p>
                  <Card.Title>
                    <h1 className="card-subtitle">"{drink}"</h1>
                  </Card.Title>
                  <Card.Text className="card-description">
                    "order: {mustTryDrink}"
                  </Card.Text>
                </Card.Body>
              </Card>{" "}
            </div>
            <div class="grid-item">
              {" "}
              <Card className="cards">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1621247473481-88661d45084e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                />
                <Card.Body>
                  <p className="card-section">do</p>

                  <Card.Title>
                    <h1 className="card-subtitle">"{activity}"</h1>
                  </Card.Title>
                  <Card.Text className="card-description">
                    "try: {mustDo}"
                  </Card.Text>
                </Card.Body>
              </Card>{" "}
            </div>
            <div class="grid-item">
              {" "}
              <Card className="cards">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1621247473481-88661d45084e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                />
                <Card.Body>
                  <p className="card-section">explore</p>

                  <Card.Title>
                    <h1 className="card-subtitle">"{explore}"</h1>
                  </Card.Title>
                  <Card.Text className="card-description">
                    "especially: {especiallySee}"
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

          <Row className="budget">
            <Col>
              <h3 className="card-section">budget:</h3>
            </Col>
            <Col className="price">{budget}</Col>
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
              cityImg={p.cityImg}
              onShowPlace={showPlace}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default PlacesList;
