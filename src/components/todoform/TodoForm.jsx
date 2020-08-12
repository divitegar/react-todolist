import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./todoform.module.css";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");

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
      <section className={styles.add}>
        <form className={styles.addForm} onSubmit={HandleFormSubmit}>
          <input
            type="text"
            className={styles.addBtn}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className={styles.addBtn}>add</button>
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