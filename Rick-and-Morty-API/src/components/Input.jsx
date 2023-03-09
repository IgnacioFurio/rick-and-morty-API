import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const LoginInput = () => {

    let loginUser = {
        usermail: "",
        password: ""
    };

    const [input, setInput] = useState(loginUser);
    const { mail, pass} = input;

    console.log(input);

    const newValue = ({target}) => {
        console.log(input);

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
                value={mail}
                onChange={newValue}
            />
            </InputGroup>
            <InputGroup className="p-2">
                <Form.Control
                name='password'
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                value={pass}
                onChange={newValue}
                />
            </InputGroup>
        </>
    )
};
