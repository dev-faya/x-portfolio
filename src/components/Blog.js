import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import photo1 from '../assets/01.jpg';
import photo2 from '../assets/02.jpg';
import photo3 from '../assets/03.jpg';

export default class Blog extends Component {
  render() {
    return (
      <Grid className="blog-section blog" id="blog" fluid>
        <Row>
            <Col md={12}>
                <section className="mbr-section content4 cid-r9dt4drgqY" id="content4-4">
                    <div className="container">
                        <div className="media-container-row">
                            <div className="title col-12 col-md-12">
                                <h2 className="align-center pb-3 mbr-fonts-style display-2">
                                    Blog</h2>
                                <h3 className="mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5">
                                    Lorem Ipsum is simply dummy text of the printing and type setting industry
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
            </Col>
            <Col>
            <section className="features3 cid-r9dxoPuSJA" id="features3-d">
                <div className="container">
                    <div className="media-container-row">
                        <div className="card p-3 col-sm-4 col-md-4">
                            <div className="card-wrapper">
                                <div className="card-img">
                                    <img src={photo1} alt="Mobirise" className="animated fadeInUp"/>
                                </div>
                                <div className="card-box">
                                    <h4 className="card-title mbr-fonts-style display-7 animated fadeInUp">
                                        No Coding
                                    </h4>
                                    <p className="mbr-text mbr-fonts-style display-7 animated fadeInUp">
                                        Aliqua reprehenderit in veniam esse cupidatat voluptate esse.
                                    </p>
                                </div>
                                <div className="mbr-section-btn text-center">
                                    <Button href="#blog" className="display-4" bsStyle="primary">Learn More</Button>
                                </div>
                            </div>
                        </div>

                        <div className="card p-3 col-sm-4 col-md-4">
                            <div className="card-wrapper">
                                <div className="card-img">
                                    <img src={photo2} alt="Mobirise" className="animated fadeInUp"/>
                                </div>
                                <div className="card-box">
                                    <h4 className="card-title mbr-fonts-style display-7 animated fadeInUp">
                                        Mobile Friendly
                                    </h4>
                                    <p className="mbr-text mbr-fonts-style display-7 animated fadeInUp">
                                    Aliqua reprehenderit in veniam esse cupidatat voluptate esse.
                                    </p>
                                </div>
                                <div className="mbr-section-btn text-center">
                                    <Button href="#blog" className="display-4" bsStyle="primary">Learn More</Button>
                                </div>
                            </div>
                        </div>

                        <div className="card p-3 col-sm-4 col-md-4">
                            <div className="card-wrapper">
                                <div className="card-img">
                                    <img src={photo3} alt="Mobirise" className="animated fadeInUp"/>
                                </div>
                                <div className="card-box">
                                    <h4 className="card-title mbr-fonts-style display-7 animated fadeInUp">
                                        Unique Styles
                                    </h4>
                                    <p className="mbr-text mbr-fonts-style display-7 animated fadeInUp">
                                    Aliqua reprehenderit in veniam esse cupidatat voluptate esse.
                                    </p>
                                </div>
                                <div className="mbr-section-btn text-center">
                                    <Button href="#blog" className="display-4" bsStyle="primary">Learn More</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Col>
        </Row>
      </Grid>
    )
  }
}
