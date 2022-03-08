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
  const [content, setContent] = useState("");

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
      content,
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
    setContent("");
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
    content,
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

          <Form>
            <Form.Label style={{ border: "none", marginTop: "2vh" }}>
              your user name:
            </Form.Label>
            <Form.Control
              type="text"
              value={userName}
              placeholder="enter a username"
              onChange={(e) => setuserName(e.target.value)}
            />
            <Form.Group className="mb-1">
              <Form.Label style={{ border: "none", marginTop: "2vh" }}>
                City + Time of day:
              </Form.Label>
              <Form.Control
                type="text"
                value={cityName}
                placeholder="name of city"
                onChange={(e) => setcityName(e.target.value)}
              />

              <br />
              <Form.Select
                className="form-control"
                aria-label="Default select example"
                id="type"
                name="type"
                value={type}
                onChange={(e) => settype(e.target.value)}
              >
                {" "}
                <option selected>Select time frame</option>
                <option value="in a morning">
                  in a morning (12pm and earlier)
                </option>
                <option value="in an afternoon">
                  in an afternoon (6 hours or less)
                </option>
                <option value="in an evening">in an evening (after 5pm)</option>
                <option value="at night">at night (late night) </option>
              </Form.Select>
              <br />
              <Form.Label> Upload a photo </Form.Label>

              <Form.Control type="file" name="file" className="form-control" />
            </Form.Group>
            <br />
            <Form.Group className="mb-1">
              <Form.Label> best place to eat {type}: </Form.Label>
              <Form.Control
                type="text"
                value={eat}
                placeholder="best place to eat"
                onChange={(e) => seteat(e.target.value)}
              />
              <br />
              <Form.Control
                type="text"
                value={mustTryFood}
                placeholder="must try food"
                onChange={(e) => setmustTryFood(e.target.value)}
              />{" "}
              <br />
              <Form.Label> Grab a beverage {type} </Form.Label>
              <Form.Control
                type="text"
                value={drink}
                placeholder="grab a beverage here"
                onChange={(e) => setdrink(e.target.value)}
              />{" "}
              <br />
              <Form.Control
                type="text"
                value={mustTryDrink}
                placeholder="your top reccomended beverage(s)"
                onChange={(e) => setmustTryDrink(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-1">
              <Form.Label>
                {" "}
                Must activity landmark/area/historic site etc:{" "}
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
              <option value="$">$ low cost</option>
              <option value="$$">$$ moderate cost</option>
              <option value="$$$">$$$ medium cost</option>
              <option value="$$$$">$$$$ high cost</option>
            </Form.Select>
            <br />
            <Form.Label> Content </Form.Label>
            <Form.Control
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />{" "}
            <br />
            <Button onClick={createPlace}> Add to Wander Lab</Button>
            <hr />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default WanderLab;
