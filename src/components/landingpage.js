import React, { Component } from "react";
import { Grid, Cell, FooterSection, Footer, FooterLinkList } from "react-mdl";
import Logo from "./unnamed.png";
import logo from "./github.jpg";

class Landing extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <img src={Logo} alt="picture" className="picture-style" />
          <div className="banner-txt">
            <h1>Tapish Jain</h1>
            <hr />
            <p>
              Hi! I'm currently a 1B Computer Science (coop) student at the
              Univeristy of Waterloo <br />
              seeking internships for Summer 2020. You can find me on the
              following:
            </p>
            <div className="socials">
              <a
                href="https://github.com/tapish1?tab=repositories"
                target="_blank"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/tapish-jain-50879b192/"
                target="_blank"
              >
                <i class="fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100010806126687"
                target="_blank"
              >
                <i class="fa fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/tapish_23/" target="_blank">
                <i class="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <br />
          <br />
          <br />
        </Cell>

        <Footer
          size="mini"
          style={{
            width: "100%",
            position: "fixed",
            overlfow: "scroll",
            left: "0px",
            bottom: "-35px",
            height: "0px",
            backgroundColor: "black"
          }}
        >
          <FooterSection type="left">
            <FooterLinkList>
              <p
                style={{
                  position: "fixed",
                  bottom: "-2.5%",
                  left: "45%",
                  color: "white"
                }}
              >
                Developed by Tapish Jain
              </p>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </Grid>
    );
  }
}

export default Landing;
