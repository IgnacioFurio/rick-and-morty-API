import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export const LoginInput = () => {

    let loginUser = {
        usermail: "",
        password: ""
    };

    const [input, setInput] = useState(loginUser);
    const { usermail, password } = input;

    const newValue = ({target}) => {

        const {name, value} = target;

        setInput(
            {
                ...input,
                [name]:value
            }
        )
    };


    return(
        <>
            <InputGroup className="p-2">
                <Form.Control
                name='usermail'
                placeholder="username@email.com"
                aria-label="username@email.com"
                aria-describedby="basic-addon2"
                value={usermail}
                onChange={newValue}
            />
            </InputGroup>
            <InputGroup className="p-2">
                <Form.Control
                name='password'
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                value={password}
                onChange={newValue}
                />
            </InputGroup>
            <Button variant="success" className='col-6'>Log In</Button>
        </>
    )
};
