import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
      school_name: "",
      major: "",
      grad_date: "",
    }

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    this.toggleEdit();
    console.log(this.state);
  }

  toggleEdit = () => {
    this.setState({
      edit: !(this.state.edit),
    });
  }

  render() {
    if (this.state.edit) {
      return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label>
            School Name:
            <input
            onChange={this.handleChange}
             name="school_name"
             value={this.state.school_name}
             type="text"/>
          </label>
          <label>
            Major:
            <input
            onChange={this.handleChange}
             name="major"
             value={this.state.major}
             type="text"/>
          </label>
          <label>
            Graduation Date:
            <input
            onChange={this.handleChange}
            name="grad_date"
             value={this.state.grad_date}
             type="date"/>
          </label>
          <input type="submit"/>
        </form>
      </div>
    );
    } else {
      return (
        <div className="info">
          <ul>
            <li><b>School Name: </b>{this.state.school_name}</li>
            <li><b>Major: </b>{this.state.major}</li>
            <li><b>Graduation Date: </b>{this.state.grad_date}</li>
          </ul>
          <button onClick={this.toggleEdit}>Edit</button>  
        </div>
      );
    }
  }
}

export default Education;
