import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


export default class Tools extends Component {
  render() {
    return (
    <Grid className="tools-section tools" id="tools" fluid>
        <Row>
            <Col md={12}>
                <section className="mbr-section content4 cid-r9dt4drgqY" id="content4-4">
                    <div className="container">
                        <div className="media-container-row">
                            <div className="title col-12 col-md-12">
                                <h2 className="align-center pb-3 mbr-fonts-style display-2">
                                    Creative</h2>
                                <h3 className="mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5">
                                    Lorem Ipsum is simply dummy text of the printing and type setting industry
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
            </Col>
            <Col md={12}>
            <section className="features1 cid-r9dBhSLr8i" id="features1-h">    
                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-sm-4 col-md-4">
                                <div className="card-img pb-3">
                                    <span className="mbr-iconfont mbri-bootstrap"></span>
                                </div>
                                <div className="card-box">
                                    <h4 className="card-title py-3 mbr-fonts-style display-5">Web &amp; Mobile Development</h4>
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Lorem Ipsum is simply dummy text of the printing and type setting industry
                                    </p>
                                </div>
                            </div>

                            <div className="card p-3 col-sm-4 col-md-4">
                                <div className="card-img pb-3">
                                    <span className="mbr-iconfont mbri-change-style"></span>
                                </div>
                                <div className="card-box">
                                    <h4 className="card-title py-3 mbr-fonts-style display-5">
                                        Design</h4>
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Lorem Ipsum is simply dummy text of the printing and type setting industry
                                    </p>
                                </div>
                            </div>

                            <div className="card p-3 col-sm-4 col-md-4">
                                <div className="card-img pb-3">
                                    <span className="mbr-iconfont mbri-responsive"></span>
                                </div>
                                <div className="card-box">
                                    <h4 className="card-title py-3 mbr-fonts-style display-5">
                                        Clean Design</h4>
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Lorem Ipsum is simply dummy text of the printing and type setting industry
                                    </p>
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
