
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DisplayPieChart from './DisplayPieChart';
import DisplayBarChart from './DisplayBarChart';

import './App.css';

const App = () => (
  <>
    <Container>
      <h5>My Info</h5>

      <Row className="accordion-body">
        <Col md={3}>
          <b> NAME : </b>
          <span style={{ marginLeft: "10px" }}> JOHN WILLIAMS </span>
        </Col>

        <Col md={3}>
          <b style={{ marginLeft: "80px" }}>AGE : </b>
          <span style={{ marginLeft: "10px" }}> 25 </span>
        </Col>

        <Col md={6}>
          <b>ADDRESS : </b>
          <span style={{ marginLeft: "10px" }}> 299 MILLER ISLANDS APT. 403 OLSONCHESTER, NM 67179. </span>
        </Col>
      </Row>

      <h5>Assets - Beneficiary Wise Allocation</h5>
      <Row className="accordion-body">
        <Col md={6}><DisplayBarChart></DisplayBarChart></Col>
        <Col md={6} style={{ paddingLeft: "110px" }}><DisplayPieChart></DisplayPieChart></Col>
      </Row>

      <h5>My Assets : </h5>
      <Row className="accordion-body">
        <Col md={6}><DisplayBarChart></DisplayBarChart></Col>
        <Col md={6} style={{ paddingLeft: "110px" }}><DisplayPieChart></DisplayPieChart></Col>
      </Row>

    </Container>

  </>
);

export default App;
