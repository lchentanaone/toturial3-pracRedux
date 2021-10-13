import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as inputAction from "./action/inputActions";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

function InputPage() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(inputValue);
    setInputValue("");
    dispatch(inputValue());
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
      {inputValue.map((inputValue) => (
        <div key={inputValue}>{inputValue}</div>
      ))}
    </div>
  );
}

InputPage.propTypes = {
  inputs: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    inputs: state.inputs,
  };
}
export default connect(mapStateToProps)(InputPage);

// --------/////--------

// import React, { useState } from "react";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import { connect } from "react-redux";
// import * as inputAction from "./action/inputActions";
// import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";

// class InputPage extends React.Component {
//   state = {
//     inputValue: {
//       title: " ",
//     },
//   };
//   handleChange = (event) => {
//     const inputvalue = { ...this.state.inputValue, title: event.target.value };
//     this.setState({ inputvalue });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.dispatch(inputAction.createInput(this.state.inputValue));
//   };
//   render() {
//     return (
//       <div>
//         <h1> Input</h1>
//         <inpu
//           type="text"
//           onChange={this.handleChange}
//           value={this.state.inputValue.title}
//         />
//         <input type="submit" value="Save" />
//         {this.props.inputValue.map((inputValue) => (
//           <div key={inputValue}>{inputValue}</div>
//         ))}
//       </div>
//     );
//   }
// }

// // function InputPage() {
// //   const [inputValue, setInputValue] = useState("");
// //   const dispatch = useDispatch();

// //   const onSubmit = () => {
// //     console.log(inputValue);
// //     setInputValue("");
// //     dispatch(inputValue());
// //   };
// // }

// InputPage.propTypes = {
//   inputs: PropTypes.array.isRequired,
//   dispatch: PropTypes.func.isRequired,
// };

// function mapStateToProps(state) {
//   return {
//     inputs: state.inputs,
//   };
// }
// export default connect(mapStateToProps)(InputPage);
