import React, { Component } from "react";

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    {
      if (e.target.input.value.length > 0) {
        this.props.addTodo(this.state);
        e.target.input.value = "";
      }
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Todo</label>
          <input type="text" id="input" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default AddForm;
