import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import L_REACT from "../../assets/img/skills/react.svg";
import Material from "../../assets/icons/Material-Ui.jpg";
import chart from "../../assets/icons/chartjs.svg";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/img/profile/Harshit.jpg";
import Covid from "../../assets/img/projects/Covid.png";
import GymHero from "../../assets/img/projects/GymHero.jpg";
import arcDev from "../../assets/img/projects/Arc-Development.svg";
import Html from "../../assets/icons/HTML5.png";
import CSS3 from "../../assets/icons/CSS3.png";
import Bootstrap from "../../assets/icons/Bootstrap.png";
import reactBootstrap from "../../assets/icons/react-bootstrap.png";
import "./Project.style.css";

export default function TimeLine() {
  return (
    <div id="projects" className="projectWrapper">
      <h1 className="pt-5 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Portfolio using Django */}
          <ImageEvent
            date="July/2020"
            className="text-center "
            text="Portfolio using React js"
            src={Profile}
            alt="Portfolio using React"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is my first portfolio
                        website built using React.js and React-Bootstrap.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Developed using React.js</li>
                          <li>Usage of React-Bootstrap library</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                className="img-icon m-2"
                                src={Html}
                                alt="HTML 5"
                                rounded
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                className="img-icon m-2"
                                src={CSS3}
                                alt="CSS 3"
                                rounded
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                className="img-icon"
                                src={Bootstrap}
                                alt="Bootstrap 4"
                                rounded
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                className="img-icon m-2"
                                src={reactBootstrap}
                                alt="react-bootstrap"
                                rounded
                              ></Image>{" "}
                              React-Bootstrap
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="#" target="_blank">
                  Live Demo
                </UrlButton>
                <UrlButton
                  href="https://github.com/Harshit-Developer/portfolio"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Covid-19 Tracker */}
          <ImageEvent
            date="July/2020"
            className="text-center"
            text="Covid-19 Tracker"
            src={Covid}
            alt="Covid-19 Tracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that tracks
                        covid-19 patient across the globe
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="img-icon m-2"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Material}
                                alt="Material-Ui"
                                rounded
                                className="img-icon m-2"
                              ></Image>{" "}
                              Material UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={chart}
                                alt="Chart js"
                                rounded
                                className="img-icon m-2"
                              ></Image>{" "}
                              Chart.js
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                          <strong>Features :</strong>
                          <br />
                          <br />
                          You can <strong>select a country</strong> and see
                          <strong> number of covid-19 cases.</strong> This
                          project makes use of a public API to fetch the data.
                          <br />
                          <br />
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href=" https://react-covid19-app.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Harshit-Developer/Covid-Tracker"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Arc Development */}

          <ImageEvent
            date="June/2020"
            className="text-center"
            text="Arc-Development"
            src={arcDev}
            alt="Arc Development"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Developed this beautiful
                        website to practice and enhance my knowledge of React js
                        and Material Ui.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Made with React.js</li>

                          <li>Usage of Material Ui component library.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="img-icon m-2"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Material}
                                alt="Material Ui"
                                rounded
                                className="img-icon m-2"
                              ></Image>{" "}
                              Material Ui
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://react-arc-development.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton href="#" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Gym Insights */}

          <ImageEvent
            date="Jan/2020"
            className="text-center"
            text="Gym Insights"
            src={GymHero}
            alt="Gym Insights"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Created a static website
                        using my web development skills of HTML5 , CSS3 ,
                        JavaScript and Bootstrap.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Used HTML , CSS , Bootstrap and JQuery</li>
                          <li>Compleyely responsive and mobile-friendly.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Html}
                                alt="HTML 5"
                                rounded
                                className="img-icon m-2"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={CSS3}
                                alt="CSS 3"
                                rounded
                                className="img-icon m-2"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Bootstrap}
                                alt="Bootstrap 4"
                                rounded
                                className="img-icon m-2"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://gyminsights.000webhostapp.com"
                  target="_blank"
                >
                  Live Demo
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
}
