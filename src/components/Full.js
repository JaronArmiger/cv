import React, { Component } from 'react';
import General from './General';
import Education from './Education';
import Practical from './Practical';
import uniqid from 'uniqid';

class Full extends Component {
  constructor() {
  	super();

    this.state = {
      educationArr: [<Education key={uniqid()}/>],
      practicalArr: [<Practical key={uniqid()}/>],
    }
  }
  
  addEducation = () => {
    this.setState({
      educationArr: this.state.educationArr.concat(<Education key={uniqid()}/>),
    });
  }

  addPractical = () => {
    this.setState({
      practicalArr: this.state.practicalArr.concat(<Practical key={uniqid()}/>),
    });
  }

  render() {
    return (
      <div>
        <h1>General</h1>
        <General/>
        <h1>Education</h1>
        {this.state.educationArr.map((instance) => {
          return instance;
        })}
        <button onClick={this.addEducation}>Add another</button>
        <h1>Practical</h1>
        {this.state.practicalArr.map((instance) => {
          return instance;
        })}
        <button onClick={this.addPractical}>Add another</button>
      </div>
    );
  }
}

export default Full;