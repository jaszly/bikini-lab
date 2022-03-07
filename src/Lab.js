import React, { useState } from "react";
import logo from "./logo.svg";
import "./style.css";
import { Button, Container, Col, Form, Row } from "react-bootstrap";

//create place obj

//add to lab
const WanderLab = ({ index, onCreatePlace }) => {
  const [cityName, setcityName] = useState("");
  const [type, settype] = useState("");
  const [eat, seteat] = useState("");
  const [mustTryFood, setmustTryFood] = useState("");
  const [drink, setdrink] = useState("");
  const [mustTryDrink, setmustTryDrink] = useState("");
  const [see, setsee] = useState("");
  const [especiallySee, setespeciallySee] = useState("");
  const [mustDo, setmustDo] = useState("");
  const [explore, setexplore] = useState("");
  const [budget, setBudget] = useState(0);
  const [content, setContent] = useState("");

  const createPlace = (event) => {
    event.preventDefault();
    const place = {
      id: index,
      cityName,
      type,
      eat,
      mustTryFood,
      drink,
      mustTryDrink,
      see,
      especiallySee,
      mustDo,
      explore,
      budget,
      content,
    };
    onCreatePlace(place);

    //reset the form
    setcityName("");
    seteat("");
    settype("");
    setmustTryFood("");
    setdrink("");
    setmustTryDrink("");
    setsee("");
    setespeciallySee("");
    setmustDo("");
    setexplore("");
    setBudget("");
    setContent("");
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
                placeholder="your top reccomended beverage(s)  "
                onChange={(e) => setmustTryDrink(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-1">
              <Form.Label>
                {" "}
                Must see landmark/area/historic site etc:{" "}
              </Form.Label>
              <Form.Control
                className="input-lrg"
                type="text"
                value={see}
                onChange={(e) => setsee(e.target.value)}
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
            <Form.Control
              type="number"
              placeholder="$0.00"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            <br />
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
