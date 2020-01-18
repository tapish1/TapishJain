import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent, Button } from "react-mdl";
import pic from "./me.JPG";
import Main from "./main";
import { Link } from "react-router-dom";

class ContactMe extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Tapish Jain</h2>
            <img
              src={pic}
              alt="me"
              style={{ height: "300px", width: "220px" }}
            ></img>
            <p style={{ width: "70%", margin: "auto", paddingTop: "1em" }}>
              Hi! If you'd like to get in touch with me please contact me on any
              one of the things on the right. To learn more about me click on
              the buttons below to go to the About Me page or to access my
              resume.
            </p>
            <br />
            <a
              href="https://docs.google.com/document/d/1483leEYVRqTmTPeoXDYg4Sg11j8s8Qm0B3hkbuYW0jA/edit?usp=sharing"
              target="_blank"
            >
              <Button
                raised
                colored
                style={{
                  backgroundColor: "grey",
                  position: "relative",
                  left: "2%",
                  fontSize: "18px"
                }}
              >
                Resume
              </Button>
            </a>
            <Link to="/about">
              <Button
                raised
                colored
                style={{
                  backgroundColor: "grey",
                  position: "relative",
                  left: "3%",
                  fontSize: "18px"
                }}
              >
                About Me
              </Button>
            </Link>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr></hr>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <a href="tel:16479247897" target="_blank">
                      <i className="fa fa-phone-square" aria-hidden="true"></i>
                    </a>
                    (647) 924-7897
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <a href="mailto:t9jain@uwaterloo" target="_blank">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                    t9jain@uwaterloo.ca
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <a
                      href="https://www.linkedin.com/in/tapish-jain-50879b192/"
                      target="_blank"
                    >
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                    Tapish jain
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <a
                      href="https://www.facebook.com/profile.php?id=100010806126687"
                      target="_blank"
                    >
                      <i
                        className="fa fa-facebook-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                    Tapish Jain
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default ContactMe;
