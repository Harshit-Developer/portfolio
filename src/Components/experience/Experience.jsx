import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Experience.style.css";
import happypot from "../../assets/icons/logo.jfif";
import Tilt from "react-parallax-tilt";

const Experience = () => {
  return (
    <div className="experienceWrapper" id="experience">
      <Container fluid className="pt-4 ">
        <Container>
          <Row>
            <Col className="text-center mb-3">
              <p className="experience">LIVE PROJECTS/INTERNSHIPS</p>
            </Col>
          </Row>
          <Tilt>
            <Row className="justify-content-center mb-4 pb-4">
              <Card className="cardWrapper">
                <Card.Header
                  as="h5"
                  className="d-flex justify-content-center flex-wrap"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={happypot}
                    alt="Accenture logo"
                  />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">
                      UI Developer
                    </Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong>Domain:</strong> Front-End Developer
                      <br />
                      <strong>Role:</strong> UI Development
                      <br />
                      <strong>Description:</strong> Worked as a Front-End
                      developer to create admin panel of a plant renting
                      E-commerce website. Used technologies like HTML , CSS ,
                      Bootstrap , JQuery to develop the project.
                      <br />
                      <strong>Technology:</strong> HTML5 , CSS3 , Bootstrap4 ,
                      JQuery.
                      <br />
                      <strong>Duration:</strong> Feb 2020 - May 2020.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Row>
          </Tilt>

          {/****************************** CSE DEPARTMENT ***********************/}
          <Tilt>
            <Row className="justify-content-center mt-4 pt-5  pb-5">
              <Card className="cardWrapper">
                <Card.Header
                  as="h5"
                  className="d-flex justify-content-center flex-wrap"
                >
                  <Card.Title className="text-center cse-text">
                    CSE DEPARTMENT (ABES Engineering College)
                  </Card.Title>
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">
                      UI Developer
                    </Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center ">
                      <strong>Domain:</strong> Front-End Developer
                      <br />
                      <strong>Role:</strong> UI Development using React.js
                      <br />
                      <strong>Description:</strong> Working as a UI developer to
                      create the admin panel of a platform which would used by
                      CSE Department of ABES Engineering College for NBA
                      Accreditation related work.
                      <br />
                      <strong>Technology:</strong> React.js , Material Ui .
                      <br />
                      <strong>Duration:</strong> July 2020 - Present
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Row>
          </Tilt>
        </Container>
      </Container>
    </div>
  );
};

export default Experience;
