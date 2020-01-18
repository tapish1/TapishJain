import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import Main from "./main";
import { Link } from "react-router-dom";

import pics from "./collage.png";

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
              fontSize: "22px",
              fontWeight: "bold",
              position: "relative",
              top: "-0.5%",
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
              borderRadius: "1px",
              borderWidth: 2,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 3,
              paddingBottom: 3,
              textAlign: "center",
              margin: 10,
              backgroundColor: "#91e3b3",
              fontSize: "20px",
              position: "relative",
              left: "6%"
            }}
          >
            Hometown
          </p2>
          <p3
            style={{
              fontSize: "20px",
              position: "relative",
              left: "8%"
            }}
          >
            Brampton, Ontario 🍁
          </p3>
          <br />
          <br />
          <p4
            style={{
              borderRadius: "1px",
              borderWidth: 2,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 3,
              paddingBottom: 3,
              textAlign: "center",
              margin: 10,
              backgroundColor: "#a4eef5",
              fontSize: "20px",
              position: "relative",
              left: "6%"
            }}
          >
            Education
          </p4>
          <p5 style={{ fontSize: "20px", position: "relative", left: "8%" }}>
            1B Computer Science, University of Waterloo
          </p5>
          <br />
          <br />
          <p6
            style={{
              borderRadius: "1px",
              borderWidth: 2,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 3,
              paddingBottom: 3,
              textAlign: "center",
              margin: 10,
              backgroundColor: "#e3919c",
              fontSize: "20px",
              position: "relative",
              left: "6%"
            }}
          >
            Skills
          </p6>
          <p7 style={{ fontSize: "20px", position: "relative", left: "8%" }}>
            Java, React, HTML/CSS, PHP, mySQL, Arduino, Python, C
          </p7>
          <br />
          <br />
          <p8
            style={{
              borderRadius: "1px",
              borderWidth: 2,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 3,
              paddingBottom: 3,
              textAlign: "center",
              margin: 10,
              backgroundColor: "#d2b2f7",
              fontSize: "20px",
              position: "relative",
              left: "6%"
            }}
          >
            Intrests
          </p8>
          <p9 style={{ fontSize: "20px", position: "relative", left: "8%" }}>
            Soccer, Basketball, YouTube
          </p9>
          <br />
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
            Just click below to find my resume or if you'd like to talk click on
            the Contact Me button.
          </p10>
          <br />
          <br />
          <a
            href="https://docs.google.com/document/d/1483leEYVRqTmTPeoXDYg4Sg11j8s8Qm0B3hkbuYW0jA/edit?usp=sharing"
            target="_blank"
          >
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
          </a>
          <Link to="/contact">
            <Button
              raised
              colored
              style={{ position: "relative", left: "6.5%", fontSize: "18px" }}
            >
              Contact Me
            </Button>
          </Link>
        </Cell>

        <Cell col={6}>
          <img
            className="collage"
            src={pics}
            alt="second img"
            style={{
              width: "400px",
              height: "440px",
              position: "relative",
              overflow: "scroll",
              left: "140%",
              bottom: "95%"
            }}
          ></img>
        </Cell>
      </Grid>
    );
  }
}

export default AboutMe;
