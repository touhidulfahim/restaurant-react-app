import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Control, Errors, LocalForm } from 'react-redux-form';




class Contact extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         firstName: "",
    //         lastName: "",
    //         phone: "",
    //         email: "",
    //         agree: false,
    //         contactType: "Tel.",
    //         message: ""
    //     }
    //     this.handleInputChange = this.handleInputChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     //==UnControlled Form Handle
    //     // this.handleSubmit = this.handleSubmit.bind(this);
    //     // this.firstName = React.createRef();
    //     // this.lastName = React.createRef();
    //     // this.phone = React.createRef();
    //     // this.email = React.createRef();
    //     // this.agree = React.createRef();
    //     // this.contactType = React.createRef();
    //     // this.message = React.createRef();
    //     //==UnControlled Form Handle
    // }


    // handleInputChange = event => {
    //     const name = event.target.name;
    //     const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    //     this.setState({
    //         [name]: value
    //     });
    // }



    handleSubmit = values => {
        console.log(values);
        //event.preventDefault();
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
                                    />
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
                                    />
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
                                    />
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
                                    />
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
                                    />
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
