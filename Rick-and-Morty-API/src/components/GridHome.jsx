import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InfoCard } from './Card';
import { data } from '../data/dataBase';

export const GridHome = () => {
  return (
    <Container>
      <Row>
        {data.map(info => {return <Col sm={6} lg={4} xxl={3}><InfoCard key={info.id} infoPj={info}/></Col>})}
      </Row>
    </Container>
  );
}