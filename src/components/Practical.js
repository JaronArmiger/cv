import React, { Component } from 'react';

class Practical extends Component {
  constructor() {
  	super();

    this.state = {
      edit: true,
      company_name: "",
      position: "",
      description: "",
      start_date: "",
      end_date: "",
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
            Company Name:
            <input
            onChange={this.handleChange}
             name="company_name"
             value={this.state.company_name}
             type="text"/>
          </label>
          <label>
            Position:
            <input
            onChange={this.handleChange}
             name="position"
             value={this.state.position}
             type="text"/>
          </label>
          <label>
            Description:
            <input
            onChange={this.handleChange}
            name="description"
             value={this.state.description}
             type="text"/>
          </label>
          <label>
            Date Started:
            <input
            onChange={this.handleChange}
            name="start_date"
             value={this.state.start_date}
             type="date"/>
          </label>
          <label>
            Date Finished:
            <input
            onChange={this.handleChange}
            name="end_date"
             value={this.state.end_date}
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
            <li><b>Company Name: </b>{this.state.company_name}</li>
            <li><b>Position: </b>{this.state.position}</li>
            <li><b>Description: </b>{this.state.description}</li>
            <li><b>Date Started: </b>{this.state.start_date}</li>
            <li><b>Date Finished: </b>{this.state.end_date}</li>
          </ul>
          <button onClick={this.toggleEdit}>Edit</button>  
        </div>
      );
    }
  }
}

export default Practical;
