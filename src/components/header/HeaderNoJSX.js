/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Button from "../button/ButtonNoJSX";
import * as styles from "./header.styles";
import { useTheme } from "emotion-theming";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    "section",
    {
      className: "header-component"
    },
    jsx(
      Container,
      {
        alignItems: "flex-start"
      },
      jsx(
        //Item Pertama
        Item,
        {
          flex: 1
        },
        jsx(Button, {
          text: showAdd ? "Finish" : "Add",
          onClick: showAddToggle
        })
      ),
      jsx(
        Item,
        {
          flex: 2
        },
        jsx(
          "h1",
          {
            css: styles.headerTitle(theme)
          },
          "Todo Lists"
        )
      ),
      jsx(
        Item,
        {
          flex: 1,
          align: "right"
        },
        jsx(Button, {
          text: "Clear",
          onClick: clearTodos,
          color: "red",
          align: "right"
        })
      )
    )
  );
};

Header.propTyes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
