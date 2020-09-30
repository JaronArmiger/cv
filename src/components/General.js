import React, { Component } from 'react';

class General extends Component {
  constructor() {
  	super();

    this.state = {
      edit: true,
      name: "",
      email: "",
      phone: "",
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
            Name:
            <input
            onChange={this.handleChange}
             name="name"
             value={this.state.name}
             type="text"/>
          </label>
          <label>
            Email:
            <input
            onChange={this.handleChange}
             name="email"
             value={this.state.email}
             type="text"/>
          </label>
          <label>
            Phone Number:
            <input
            onChange={this.handleChange}
            name="phone"
             value={this.state.phone}
             type="text"/>
          </label>
          <input type="submit"/>
        </form>
      </div>
    );
    } else {
      return (
        <div className="info">
          <ul>
            <li><b>Name: </b>{this.state.name}</li>
            <li><b>Email: </b>{this.state.email}</li>
            <li><b>Phone: </b>{this.state.phone}</li>
          </ul>
          <button onClick={this.toggleEdit}>Edit</button>  
        </div>
      );
    }
  }
}

export default General;
