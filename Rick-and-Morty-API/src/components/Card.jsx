import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const InfoCard = ({ infoPj }) => {
    return (
        <>
        {/* <h1>{JSON.stringify(data.id)}</h1> */}
    <Card bg="info" border="warning" style={{ width: '18rem' }} className="m-2">
        <Card.Img variant="top" src={infoPj.image} />
        <Card.Body>
            <Card.Title>{infoPj.name}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Button variant="success">Go somewhere</Button>
        </Card.Body>
    </Card>
    </>
    );
};