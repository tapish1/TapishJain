import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import Main from "./main";
import { Link } from "react-router-dom";

class AboutMe extends Component {
  render() {
    return (
      <Grid className="projects-grid">
        <Cell col={12}>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              position: "relative",
              top: "6%",
              left: "5%"
            }}
          >
            Tapish Jain
          </h1>
          <h2
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              position: "relative",
              top: "-2.5%",
              left: "5%"
            }}
          >
            a little about me
          </h2>
          <p1 style={{ fontSize: "20px", position: "relative", left: "5%" }}>
            Hello 👋 my name's Tapish, nice to meet you. Heres a bit about me:
          </p1>
          <br></br>
          <br />
          <p2
            style={{
              backgroundColor: "#3B7A57",
              fontSize: "20px",
              position: "relative",
              left: "7%"
            }}
          >
            Hometown
          </p2>
          <p3
            style={{
              fontSize: "20px",
              position: "relative",
              left: "9%"
            }}
          >
            Brampton, Ontario 🍁
          </p3>
          <br />
          <br />
          <p4
            style={{
              backgroundColor: "#7CB9E8",
              fontSize: "20px",
              position: "relative",
              left: "7%"
            }}
          >
            Education
          </p4>
          <p5 style={{ fontSize: "20px", position: "relative", left: "9%" }}>
            1B Computer Science, University of Waterloo
          </p5>
          <br />
          <br />
          <p6
            style={{
              backgroundColor: "#F19CBB",
              fontSize: "20px",
              position: "relative",
              left: "7%"
            }}
          >
            Skills
          </p6>
          <p7 style={{ fontSize: "20px", position: "relative", left: "9%" }}>
            Java, React, HTML/CSS, PHP, mySql, Arduino, Phython, C
          </p7>
          <br />
          <br />
          <p8
            style={{
              backgroundColor: "#FFBF00",
              fontSize: "20px",
              position: "relative",
              left: "7%"
            }}
          >
            Intrests
          </p8>
          <p9 style={{ fontSize: "20px", position: "relative", left: "9%" }}>
            Soccer, Basketball, YouTube
          </p9>
          <br />
          <br />
          <p10 style={{ fontSize: "20px", position: "relative", left: "7%" }}>
            My passion is creating and problem solving. I just finished up my 1A
            term at Uwaterloo for CS
            <br /> and am now looing for any opportunities for a
            <p11 style={{ fontWeight: "bold" }}>
              {" "}
              Summer 2020 internship
            </p11>. <br />
            <br />
            Just click below to find my resume or if you'd like to talk navigate
            to the contacts page on the website.
          </p10>
          <br />
          <br />
          <a href="https://github.com/tapish1/WebScraper" target="_blank">
            <Button
              raised
              colored
              style={{
                position: "relative",
                left: "5.5%",
                fontSize: "18px"
              }}
            >
              Resume
            </Button>
            <Link to="/contact">
              <Button
                raised
                colored
                style={{ position: "relative", left: "6.5%", fontSize: "18px" }}
              >
                Contact Me
              </Button>
            </Link>
          </a>
        </Cell>
      </Grid>
    );
  }
}

export default AboutMe;
