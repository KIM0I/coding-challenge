import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Map from "./components/Map";
import FaveList from "./components/FaveList";

/*
 * Use this component as a launching-pad to build your functionality.
 *
 */

export default class YourComponent extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1> Put your solution here!</h1>

        <Row>
          <Col md="12" lg="8" style={colStyle}>
            <Map />
          </Col>

          <Col md="12" lg="4" style={colStyle}>
            <FaveList />
          </Col>
        </Row>
        
      </div>
    );
  }
}

var divStyle = {
  border: "red",
  borderWidth: 2,
  borderStyle: "solid",
  height: "100vh",
};

var colStyle = {
  height: "85vh",
  padding: 20,
};
