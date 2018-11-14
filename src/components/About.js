import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import avatar from '../assets/avatar.jpeg'

export default class About extends Component {
  render() {
    return (
        <Grid className="about-section" id="about">
            <Row>
                <Col md={12}>
                    <Image src={avatar} alt="avatar" className="avatar" circle/>
                </Col>
            </Row>
            <Row className="presentation-box">
                <Col sm={5} md={5} className="text-presentation">
                    <h2>Who Am i ?</h2>
                    <p>
                        Et enim eiusmod nisi occaecat amet eiusmod est minim sunt aliqua esse reprehenderit cupidatat fugiat. Velit Lorem excepteur mollit nisi laboris magna magna non ullamco minim laborum occaecat officia labore. Ut amet ex adipisicing anim pariatur ea mollit minim culpa sit. Incididunt nulla mollit magna culpa voluptate voluptate consectetur reprehenderit id cupidatat. Deserunt ut pariatur proident cupidatat minim.
                    </p>
                </Col>
                <Col sm={7} md={7} className="skills">
                    <h2>Skills</h2>
                    <Row>
                        <Col sm={4} md={4}>
                            <div className="box">
                                <h4>Web Design</h4>
                                <div className="chart" data-percent="85">85%</div>
                            </div>
                        </Col>
                        <Col sm={4} md={4}>
                            <div className="box">
                                <h4>Branding</h4>
                                <div className="chart" data-percent="73">73%</div>
                            </div>
                        </Col>
                        <Col sm={4} md={4}>
                            <div className="box">
                                <h4>Development</h4>
                                <div className="chart" data-percent="80">80%</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
    )
  }
}
