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
              style={{ height: "250px", width: "200px" }}
            ></img>
            <p style={{ width: "70%", margin: "auto", paddingTop: "1em" }}>
              Hi! If you'd like to get in touch with me please contact me on any
              one of the things on the right. To learn more about me click on
              the buttons below to go to the About Me page or to access my
              resume.
            </p>
            <br />
            <a href="https://github.com/tapish1/WebScraper" target="_blank">
              <Button
                raised
                colored
                style={{
                  backgroundColor: "grey",
                  position: "relative",
                  left: "5.5%",
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
                  left: "6.5%",
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
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                    (647) 924-7897
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true"></i>
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
