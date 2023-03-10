import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export const UserInformation = () => {

    let registerUser = {
        firstname: "",
        lastname: "",
        username: "",
        city: "",
        state: "",
        zip: "",
    };

    const [input, setInput] = useState(registerUser);
    const { firstname, lastname, username, city, state, zip } = input;

    const newValueRegister = ({target}) => {

        const {name, value} = target;

        setInput(
            {
                ...input,
                [name]:value
            }
        );    };

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    const saveData = (event) => {
        event.preventDefault()
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mx-1">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                    required
                    name="firstname"
                    type="text"
                    placeholder="First name"
                    defaultValue="Mark"
                    value={firstname}
                    onChange={newValueRegister}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    required
                    name="lastname"
                    type="text"
                    placeholder="Last name"
                    defaultValue="Otto"
                    value={lastname}
                    onChange={newValueRegister}

                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                    name="username"
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    value={username}
                    onChange={newValueRegister}
                    required
                    />
                    <Form.Control.Feedback type="invalid">
                    Please choose a username.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        </Row>
        <Row className="mx-1">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control 
                name="city"
                type="text"
                placeholder="City"
                value={city}
                onChange={newValueRegister} 
                required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control 
                name='state'
                type="text" 
                placeholder="State"
                value={state}
                onChange={newValueRegister} 
                required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                name='zip' 
                type="text" 
                placeholder="Zip"
                value={zip}
                onChange={newValueRegister}
                required />
                    <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Form.Group className="m-3">
            <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            />
        </Form.Group>
        <Button 
        type="submit" 
        className="m-3"
        onClick={saveData}
        >
            Submit form</Button>
        </Form>
    );
};