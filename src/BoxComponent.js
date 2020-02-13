import React, { Component } from 'react'
import './App.css';

class BoxComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: "I am box"
    }
  }
//<h2>Counter: { this.state.count }</h2>

    handleChange = () => {
        //let ourColor = this.state.color
        let colorArray = [
            "Red",
            "Orange",
            "Black",
            "Green",
            "Gray",
            "Blue"]

        let randomWholeNumber = Math.floor(     Math.random() * colorArray.length     )

        let ourColor = colorArray[randomWholeNumber]
        this.setState({ color: ourColor })
    }

  render() {
    return (
        <div>

      <button
        className="boxed"
        onClick = { this.handleChange }
        style={{ backgroundColor: this.state.color }}
        >
      {this.state.color}
      </button>
      </div>
    )
  }
}

export default BoxComponent
