import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const InfoCard = ({ infoPj }) => {
    return (
        <>
    <Card bg="info" border="warning" style={{ width: '16rem' }} className="m-2">
        <Card.Img variant="top" src={infoPj.image} />
        <Card.Body>
            <Card.Title>{infoPj.name}</Card.Title>
            <Card.Text>
                <p>Status: {infoPj.status}</p>
                <p>Species: {infoPj.species}</p>
                <p>id: {infoPj.id}</p>
            </Card.Text>
            <div className="d-grid gap-">
                <Button variant="success">Go somewhere</Button>
            </div>
        </Card.Body>
    </Card>
    </>
    );
};