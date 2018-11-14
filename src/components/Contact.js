import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export default class Contact extends Component {
  render() {
    return (
      <Grid fluid className="contact-section" id="contact">
        <Col md={12} className="form-box">
          <Row className="form">
              <Col sm={12} md={12}>
                  <input type="text" placeholder="Send me message"/>
              </Col>
              <Col sm={12} md={12}>
                <Button bsStyle="primary">Send</Button>
              </Col>
          </Row>
        </Col>
      </Grid>
    )
  }
}
