import React from "react";
import { Form, Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { Employee } from "../models/employee";

class EmployeeForm extends React.Component<any, Employee> {

    constructor(props: any) {
        super(props);

        this.state = {
            id: "",
            firstName: "",
            lastName: "",
            gender: "",
            dob: "",
            country: "",
            address: "",
            phoneNumber: "",
            emailId: ""
        };

        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(event: any) {
        this.setState({ [event.target.name]: event.target.value });
    }
    onsubmit = (event: any) => {
        console.log("submitted form values: " + JSON.stringify(this.state));
        alert(JSON.stringify(this.state))
        event.preventDefault();
    }

    render() {
        const { firstName, lastName, gender, dob, country, address, phoneNumber, emailId } = this.state;

        return (
            <React.Fragment>
                <div className="p-3 mb-4 bg-light rounded-3 container-fluid">
                    <h1>Add Employee</h1>
                    <form onSubmit={this.onsubmit}>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control value={firstName} onChange={this.changeHandler} type="text" name="firstName" placeholder="Enter first name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" value={lastName} onChange={this.changeHandler} name="lastName" placeholder="Enter last name" />
                        </Form.Group>

                        <Form.Label>Gender </Form.Label>
                        <br />
                        <ToggleButtonGroup type="radio" name="gender" value={gender} className="mb-2">
                            {['male', 'female'].map((value) => (
                                <ToggleButton
                                    key={value}
                                    id={`radio-${value}`}
                                    variant="secondary"
                                    name="gender"
                                    value={value}
                                    onChange={this.changeHandler}
                                >
                                    {value}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                        
                        <Form.Group className="mb-3" controlId="dob">
                            <Form.Label>Date of birth</Form.Label>
                            <Form.Control value={dob} onChange={this.changeHandler} type="text" name="dob" placeholder="Enter date of birth" />
                        </Form.Group>

                        <Form.Group controlId="country-dropdown" placeholder="Choose country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control as="select"  name="country" value={country} onChange={this.changeHandler}>
                                <option>India</option>
                                <option>US</option>
                                <option>UK</option>
                                <option>others</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" value={address} onChange={this.changeHandler} name="address" placeholder="Enter address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="phoneNumber">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="text" value={phoneNumber} onChange={this.changeHandler} name="phoneNumber" placeholder="Enter phone number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="emailId">
                            <Form.Label>Email Id</Form.Label>
                            <Form.Control type="text" value={emailId} onChange={this.changeHandler} name="emailId" placeholder="Enter email id" />
                        </Form.Group>

                        <Button variant="success" size="lg" type="submit">Save</Button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default EmployeeForm;