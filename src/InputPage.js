import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import { connect } from "react-redux";
// import * as inputAction from "./action/inputActions";
// import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";

function InputPage(course) {
  const [inputValue, setInputValue] = useState("");
  // const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(inputValue);
    setInputValue("");
    // dispatch(inputValue());
  };

  return (
    <div>
      <h1> Input</h1>
      <TextField
        id="name"
        label="Name"
        type="text"
        value={inputValue}
        variant="outlined"
        onChange={(e) => setInputValue(e.target.value)}
      />

      <Button
        onClick={(e) => onSubmit(e.target.value)}
        variant="contained"
        color="primary"
      >
        Add
      </Button>
      {/* {course.map((inputValue) => (
        <div key={inputValue}>{inputValue}</div>
      ))} */}
    </div>
  );
}

// InputPage.propTypes = {
//   inputs: PropTypes.array.isRequired,
//   dispatch: PropTypes.func.isRequired,
// };

// function mapStateToProps(state) {
//   return {
//     inputs: state.inputs,
//   };
// }
export default InputPage;
