import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Harshit from "../../assets/img/profile/Harshit.jpg";
import "./About.style.css";

const About = () => {
  return (
    <Container fluid>
      <Container>
        <Row>
          <Col className="text-center mb-3">
            <p className="about">ABOUT ME</p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <img src={Harshit} alt="Harshit" className="profile" />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className="align-center">
            <p className="para">
              Hi there! I am <b>Harshit Kumar Tyagi.</b>
              <br />
              <br />A passioante programmer born and brought up in Ghaziabad. I
              am a Web/Full Stack Developer with React.js , Node.js , Express.js
              and MongoDB as my tech stack. Currently I am completing my
              Engineering degree in Computer Science and Engineering from ABES
              Engineering College.
            </p>
            <p className="para">
              Along with that , I am also a learner who loves to explore and
              learn about new technologies , what problem they are solving how
              can I use them to create better products.
            </p>
            <div className="mr-auto">
              <span>
                <a href="#contact">
                  <Button className="m-2" variant="outline-primary">
                    Let's talk
                  </Button>
                </a>
              </span>
              <span>
                <a
                  href="https://drive.google.com/file/d/19F8kZPImT6KqChSWZlWz9kRmcazkh7x2/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="m-2" variant="outline-success">
                    My Resume
                  </Button>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/Harshit-Developer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="m-2" variant="outline-dark">
                    GitHub
                  </Button>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/harshit-tyagi-20b1a714b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="m-2" variant="outline-info">
                    LinkedIn
                  </Button>
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
