import React, { Component } from 'react';
import { Button, FormGroup, Label, Col } from 'reactstrap';
import { Control, Errors, LocalForm } from 'react-redux-form';


const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validateEmail = val => (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(val));




class Contact extends Component {

    handleSubmit = values => {
        console.log(values);
    }


    render() {
        document.title = "Contact-Restaurant App";
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".firstName"
                                        name="firstName"
                                        placeholder="Enter First Name"
                                        className="form-control"
                                        validators={{ required }}
                                    />
                                    <Errors className="text-danger" model=".firstName" show="touched" messages={{ required: "Required" }} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lastName"
                                        name="lastName"
                                        placeholder="Enter Last Name"
                                        className="form-control"
                                        validators={{ required }}
                                    />
                                    <Errors className="text-danger" model=".lastName" show="touched" messages={{ required: "Required" }} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phone" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".phone"
                                        name="phone"
                                        placeholder="Enter Contact No"
                                        className="form-control"
                                        validators={{ required, isNumber }}
                                    />
                                    <Errors className="text-danger" model=".phone" show="touched" messages={{ required: "Required", isNumber: "Invalid Number" }} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        name="email"
                                        placeholder="Enter Email"
                                        className="form-control"
                                        validators={{ required, validateEmail }}
                                    />
                                    <Errors className="text-danger" model=".email" show="touched" messages={{ required: "Required", validateEmail: "Invalid Email ID" }} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                            />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select
                                        model=".contactType"
                                        name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="message" md={2}>Text Area</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".message"
                                        name="message"
                                        rows="12"
                                        className="form-control"
                                        validators={{ required }}
                                    />
                                    <Errors className="text-danger" model=".message" show="touched" messages={{ required: "Required" }} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact;
