import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "./Skills.style.css";

const Skills = () => {
  const name = "HTML5";
  const value = 90;

  return (
    <div className="skillWrapper pt-5 pb-5" id="skills">
      <Container-fluid>
        <Container>
          <Row>
            <Col className="text-center mb-3">
              <p className="about">MY SKILLS.</p>
            </Col>
          </Row>
          <Row>
            <Col lg={2} md={2} sm={4} xs={4}>
              <p className="progress-text">HTML5</p>
            </Col>
            <Col lg={10} md={10} sm={8} xs={8} className="pt-2">
              <ProgressBar
                variant="success"
                variant="warning"
                animated
                now={90}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={2} md={2} sm={4} xs={4}>
              <p className="progress-text">CSS3</p>
            </Col>
            <Col lg={10} md={10} sm={8} xs={8} className="pt-2">
              <ProgressBar
                className="right"
                variant="warning"
                animated
                now={90}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={2} md={2} sm={4} xs={4}>
              <p className="progress-text">Javascript</p>
            </Col>
            <Col lg={10} md={10} sm={8} xs={8} className="pt-2">
              <ProgressBar
                className="right"
                variant="warning"
                animated
                now={70}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={2} md={2} sm={4} xs={4}>
              <p className="progress-text">Bootstrap4</p>
            </Col>
            <Col lg={10} md={10} sm={8} xs={8} className="pt-2">
              <ProgressBar
                className="right"
                variant="warning"
                animated
                now={90}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={2} md={2} sm={4} xs={4}>
              <p className="progress-text">React.js</p>
            </Col>
            <Col lg={10} md={10} sm={8} xs={8} className="pt-2">
              <ProgressBar
                className="right"
                variant="warning"
                animated
                now={80}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={2} md={2} sm={4} xs={4}>
              <p className="progress-text">Material UI</p>
            </Col>
            <Col lg={10} md={10} sm={8} xs={8} className="pt-2">
              <ProgressBar
                className="right"
                variant="warning"
                animated
                now={70}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={2} md={2} sm={4} xs={4}>
              <p className="progress-text">React-Bootstrap</p>
            </Col>
            <Col lg={10} md={10} sm={8} xs={8} className="pt-2">
              <ProgressBar
                className="right"
                variant="warning"
                animated
                now={80}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={2} md={2} sm={4} xs={4}>
              <p className="progress-text">Node.js</p>
            </Col>
            <Col lg={10} md={10} sm={8} xs={8} className="pt-2">
              <ProgressBar
                className="right"
                variant="warning"
                animated
                now={65}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={2} md={2} sm={4} xs={4}>
              <p className="progress-text">Express.js</p>
            </Col>
            <Col lg={10} md={10} sm={8} xs={8} className="pt-2">
              <ProgressBar
                className="right"
                variant="warning"
                animated
                now={60}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={2} md={2} sm={4} xs={4}>
              <p className="progress-text">MongoDB</p>
            </Col>
            <Col lg={10} md={10} sm={8} xs={8} className="pt-2">
              <ProgressBar
                className="right"
                variant="warning"
                animated
                now={68}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={2} md={2} sm={4} xs={4}>
              <p className="progress-text">Java</p>
            </Col>
            <Col lg={10} md={10} sm={8} xs={8} className="pt-2">
              <ProgressBar
                className="right"
                variant="warning"
                animated
                now={60}
              />
            </Col>
          </Row>
        </Container>
      </Container-fluid>
    </div>
  );
};

export default Skills;
