/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import * as styles from "./AboutContent.styles";

const AboutContent = () => {
  return (
    <section className="about-page-content-component">
      <Container flexDirection="column">
        <Item align="center">
          <h1 css={styles.aboutPageHeader}>About this App</h1>
          <h3 css={styles.aboutPageSubHeader}>
            what i learn by building this app
          </h3>
        </Item>
        <Item>
          <Container>
            <p css={styles.aboutPageParagraph}>
              by building this app. i have learned React from the ground up. i
              know more about component, props, function, emotion css, styling
              in react, CSS in JS, React Router and more!
            </p>
          </Container>
        </Item>
        <Item align="center">
          <Link to="/">
            <span css={styles.backToHome}>Back to home</span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
