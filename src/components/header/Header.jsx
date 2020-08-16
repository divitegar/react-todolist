/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Button from "../button/ButtonClass";
// import styles from "./header.module.css";
import * as styles from "./header.styles";
import { useTheme } from "emotion-theming";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex={1}>
          <Button text={showAdd ? "finish" : "add"} onClick={showAddToggle} />
        </Item>
        <Item flex={2}>
          <h1 css={styles.headerTitle(theme)}>Todo Lists</h1>
        </Item>
        <Item flex={1} align="right">
          <Button text="Clear" onClick={clearTodos} color="red" align="right" />
        </Item>
      </Container>
    </section>
  );
};

Header.propTyes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
