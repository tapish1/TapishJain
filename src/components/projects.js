import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
import Logo from "./website-pic.png";
import pic from "./parki.jpg";
import Main from "./main";
import { Link } from "react-router-dom";

class Projects extends Component {
  render() {
    return (
      <Grid className="projects-grid">
        <Cell col={12}>
          <h1
            style={{
              fontSize: "40px",
              position: "relative",
              top: "-1%",
              left: "5%"
            }}
          >
            Projects
          </h1>
          <h2
            style={{
              fontSize: "30px",
              position: "relative",
              top: "-2.5%",
              left: "5%"
            }}
          >
            heres some stuff i've built
          </h2>
          <div className="cards">
            <div className="card1">
              <Card shadow={0} style={{ width: "100%", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "300px",
                    width: "100%",
                    background:
                      "url(https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/bitqth9ewqzxmagijcpw.jpg) center / cover"
                  }}
                >
                  <h1 style={{ fontSize: "36px" }}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    Web Scraper
                  </h1>
                </CardTitle>
                <CardText>
                  Created a Web Scraper for Amazon's top 100 books in Java using
                  javax.swing* and the Jsoup library. This application allows
                  users to search books by Name, Author Name and Price
                </CardText>
                <CardActions border>
                  <a
                    href="https://github.com/tapish1/WebScraper"
                    target="_blank"
                  >
                    <Button colored>GitHub</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>
            <br />
            <br />
            <div className="card2">
              <Card shadow={0} style={{ width: "100%", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "300px",
                    width: "100%",
                    background: `url(${Logo}) center / cover`
                  }}
                >
                  <h1
                    style={{
                      fontSize: "36px",
                      position: "relative",
                      bottom: "-45%"
                    }}
                  >
                    Personal Website
                  </h1>
                </CardTitle>
                <CardText>
                  Designed a modern and sleek design using React with the help
                  of React-MDL. Learn more about me, the projects I've worked on
                  my interests.
                </CardText>
                <CardActions border>
                  <a
                    href="https://github.com/tapish1/TapishJain"
                    target="_blank"
                  >
                    <Button colored>GitHub</Button>
                  </a>

                  <Link to="/" target="_blank">
                    <Button colored>Live demo</Button>
                  </Link>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>
            <br />
            <br />
            <div className="card3">
              <Card shadow={0} style={{ width: "100%", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "300px",
                    width: "100%",
                    background: `url(${pic}) center / cover`
                  }}
                >
                  <h1
                    style={{
                      fontSize: "36px",
                      position: "relative",
                      bottom: "-45%"
                    }}
                  >
                    Parki
                  </h1>
                </CardTitle>
                <CardText>
                  A phyton script updates the number of parking spots in a given
                  lot by using an ultrasonic sensor positioned on the ground, by
                  the entrance . Then with the help of Google Maps Geolocation
                  API, the informs the user whether or not they can park in the
                  parking lot nearest to them, and if not, where the nearest
                  parking lot is.
                </CardText>
                <CardActions border>
                  <a
                    href="https://github.com/Mi1ind/HacktheNorth2019"
                    target="_blank"
                  >
                    <Button colored>GitHub</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Projects;
