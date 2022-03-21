import React, { useState } from "react";
import logo from "./logo.svg";
import "./style.css";
import { Button, Container, Col, Form, Row } from "react-bootstrap";

//create place obj

//add to lab
const WanderLab = ({ index, onCreatePlace }) => {
  const [userName, setuserName] = useState("");
  const [cityName, setcityName] = useState("");
  const [type, settype] = useState("");
  const [eat, seteat] = useState("");
  const [mustTryFood, setmustTryFood] = useState("");
  const [drink, setdrink] = useState("");
  const [mustTryDrink, setmustTryDrink] = useState("");
  const [activity, setActivity] = useState("");
  const [especiallySee, setespeciallySee] = useState("");
  const [mustDo, setmustDo] = useState("");
  const [explore, setexplore] = useState("");
  const [budget, setbudget] = useState(0);
  const [cityImg, setcityImg] = useState("");

  const createPlace = (event) => {
    event.preventDefault();
    const place = {
      id: index,
      userName,
      cityName,
      type,
      eat,
      mustTryFood,
      drink,
      mustTryDrink,
      activity,
      especiallySee,
      mustDo,
      explore,
      budget,
      cityImg,
    };
    onCreatePlace(place);

    //reset the form
    setcityName("");
    setuserName("");
    seteat("");
    settype("");
    setmustTryFood("");
    setdrink("");
    setmustTryDrink("");
    setActivity("");
    setespeciallySee("");
    setmustDo("");
    setexplore("");
    setbudget("");
    setcityImg("");
  };
  const Place = ({
    cityName,
    userName,
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
    onCalculateTotal,
  }) => {
    //Declare a new state var called quantity
    // const [quantity, setQuantity] = useState(0);
    // const buy = () => {
    //alert('You selected this place')
    //   setQuantity(quantity + 1);
    //   onCalculateTotal(budget);
    // };
  };

  return (
    <Container>
      <Row>
        <Col>
          <div id="lab-header">
            <h1 className="headers" style={{ margin: "2vh" }}>
              welcome to your wander lab
            </h1>
            <p style={{ margin: "2vh 1vw 4vh" }}>
              use this space to build your guide and preview on the right.{" "}
            </p>
            <hr />
          </div>

          <div className="text-editor">
            <Form style={{ border: ".5px solid #7b8a96" }}>
              <Form.Control
                style={{
                  marginBottom: "2vh",
                  marginLeft: "1vw",
                  padding: "2vw",
                }}
                type="text"
                value={userName}
                placeholder="@ create username"
                onChange={(e) => setuserName(e.target.value)}
              />
              <hr className="underline" style={{ marginBottom: "4vh" }} />
              <span className="form-section" style={{ color: "grey" }}>
                CITY:
              </span>

              <Form.Group>
                <Form.Control
                  style={{ marginTop: "-3vh" }}
                  className="aboveline"
                  type="text"
                  value={cityName}
                  placeholder="name of city:"
                  onChange={(e) => setcityName(e.target.value)}
                />
                <hr className="underline" />

                <Form.Control
                  type="file"
                  name="file"
                  value={cityImg}
                  className="form-control bubbles"
                  onChange={(e) => setcityImg(e.target.value)}
                />

                <Form.Select
                  className="form-control bubbles"
                  aria-label="Default select example"
                  id="type"
                  name="type"
                  value={type}
                  onChange={(e) => settype(e.target.value)}
                >
                  <option selected>(Select time frame)</option>
                  <option value="in a morning">
                    in a morning (12pm and earlier)
                  </option>
                  <option value="in an afternoon">
                    in an afternoon (6 hours or less)
                  </option>
                  <option value="in an evening">
                    in an evening (after 5pm)
                  </option>
                  <option value="at night">at night (late night) </option>
                </Form.Select>

                <div style={{ border: ".5px solid #384a5a" }}>
                  <span
                    className="form-section"
                    style={{ color: "grey", margin: "3vw" }}
                  >
                    FOOD + DRINK
                  </span>
                  <Form.Label></Form.Label>
                  <Form.Control
                    style={{ marginBottom: "-3vw" }}
                    className="aboveline"
                    type="text"
                    value={eat}
                    placeholder="restaurant or cafe"
                    onChange={(e) => seteat(e.target.value)}
                  />
                  <br /> <br />
                  <hr className="underline" />
                  <Form.Group
                    style={{
                      margin: "2vh 1vw 0 1vw",
                      border: "0.5px solid rgb(123, 138, 150)",
                      borderRadius: "30px",
                      padding: "5vh",
                    }}
                  >
                    <Form.Control
                      type="text"
                      value={mustTryFood}
                      placeholder="best thing to order:"
                      onChange={(e) => setmustTryFood(e.target.value)}
                      style={{ margin: "-23px -2vw" }}
                    />

                    <Form.Control
                      type="text"
                      value={drink}
                      placeholder="grab a beverage here:"
                      onChange={(e) => setdrink(e.target.value)}
                      style={{ margin: "54px -2vw" }}
                    />

                    <Form.Control
                      type="text"
                      value={mustTryDrink}
                      placeholder="best drink(s):"
                      onChange={(e) => setmustTryDrink(e.target.value)}
                      style={{ margin: "54px -2vw" }}
                    />
                    <hr />
                  </Form.Group>
                </div>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group className="mb-1">
                <br />
                <br />
              </Form.Group>
              <br />
              <Form.Group className="mb-1">
                <Form.Label>
                  Must activity landmark/area/historic site etc:
                </Form.Label>
                <Form.Control
                  className="input-lrg"
                  type="text"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                />
                <Form.Label> Especially: </Form.Label>
                <Form.Control
                  type="textarea"
                  value={especiallySee}
                  onChange={(e) => setespeciallySee(e.target.value)}
                />
                <Form.Label>
                  {" "}
                  Must do activity/excursion/tour/experience:{" "}
                </Form.Label>
                <Form.Control
                  className="input-lrg"
                  type="text"
                  value={mustDo}
                  onChange={(e) => setmustDo(e.target.value)}
                />
                <Form.Label> Best thing to explore {type}: </Form.Label>
                <Form.Control
                  className="input-lrg"
                  type="text"
                  value={explore}
                  onChange={(e) => setexplore(e.target.value)}
                />
              </Form.Group>
              <Form.Label> Budget </Form.Label>
              <Form.Select
                className="form-control"
                aria-label="  select budget"
                id="budget"
                name="budget"
                value={budget}
                onChange={(e) => setbudget(e.target.value)}
              >
                <option selected>Select budget</option>
                <option value="$">low cost</option>
                <option value="$$">medium cost</option>
                <option value="$$$">high cost</option>
              </Form.Select>
              <Button onClick={createPlace}> Add to Wander Lab</Button>
              <hr />
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WanderLab;
