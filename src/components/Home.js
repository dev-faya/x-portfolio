import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import photo from '../assets/down.png'

export default class Home extends Component {
  render() {
    return (
      <Grid fluid className="home-section home">
        <div className="container-fluid">
            <nav className="container-fluid">
                <div className="logo">
                    <h2><a href="#home">X</a></h2>
                </div>
                <div class="toggle">
                    <i class="fa fa-bars menu" aria-hidden="true"></i>
                </div>
                
                <ul className="nav">
                    <li><a href="#home" className="link">Home</a></li>
                    <li><a href="#about" className="link">About</a></li>
                    <li><a href="#tools" className="link">Creative</a></li>
                    <li><a href="#blog" className="link">Blog</a></li>
                    <li><a href="#contact" className="link">Contact</a></li>
                </ul>

            </nav>
        </div>
        <Row>
            <Col sm={12} md={12} className="intro">
                <h2>
                    WAKE UP!
                </h2>
                <p>Don't Wait, The Time Will Never Be Just Right.</p>
            </Col>
        </Row>
        <Col md={12} className="bottom-box">
            <a href="#about">
                <Image src={photo} className="bottom" circle/>
            </a>
        </Col>

      </Grid>
    )
  }
}
