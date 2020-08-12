/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
// import styles from "./todoform.module.css";
import * as styles from "./todoform.styles";
import { useTheme } from "emotion-theming";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");
  const theme = useTheme();

  const HandleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No blank Todo!");
      return;
    }

    if (value.length > 40) {
      alert("plesase create a shorter todo text");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section css={styles.add}>
        <form css={styles.addForm} onSubmit={HandleFormSubmit}>
          <input
            type="text"
            css={styles.addInput({ theme })}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button css={styles.addBtn({ theme })}>add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
