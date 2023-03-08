import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const LoginInput = () => {
    return(
        <>
            <InputGroup className="m-2">
                <Form.Control
                placeholder="username@email.com"
                aria-label="username@email.com"
                aria-describedby="basic-addon2"
            />
            </InputGroup>
            <InputGroup className="m-2">
                <Form.Control
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
        </>
    )
};
