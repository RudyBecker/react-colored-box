import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BoxComponent from './BoxComponent'

class App extends Component {
    constructor(){
        super()
        this.state = {
            themBoxes: []   //all Of Our Colored Buttons
        }
        this.changeNumberOfBoxesBy(30)
    }


    // Will add or remove boxes.
    //  The number of boxes it will add or remove is determined by 'numIn'
    //  'numIn' is a number (positive or negative)
    changeNumberOfBoxesBy = (numIn) => {

        numIn = parseInt(numIn, 10)

            if (numIn !== 0){

                // Temporally holding onto all of our colored Boxes
                //  so we may manipulate how many there are, before
                //  sending them back to our App.
                let boxArray = this.state.themBoxes

                // Adding Boxes  (receiving a positive number)
                if (numIn > 0){
                    for (let i=0; i<numIn; i++)
                    {
                        boxArray.push(<BoxComponent />)
                    }
                }

                // Removing Boxes  (receiving a negative number)
                else if (numIn < 0){
                    numIn *= -1
                    for (let i=0; i<numIn; i++)
                    {
                        boxArray.pop()
                    }
                }

                // Send our modified array of boxes back to our App
                this.setState({themBoxes: boxArray})
            }


    }



    handleChange = (e) => {
      // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
      // no need to modify this method
      console.log("gfd")
      this.setState({ phrase: e.target.value })
    }



render (){
//let num = 5;
  return (
    <div>
        <div className="App-Top">
            <button
                onClick = { () => this.changeNumberOfBoxesBy(1)}
                className="BoxChangers AddOne"
                > Add One </button>

                <div className="InputBox">
                    <h3>How many boxes would you like to add or remove?</h3>
                    <input
                      id="inputPhrase"
                      onChange={ this.handleChange }
                      value={ this.state.phrase }
                    />
                    <button
                        className="EnterButton"
                        onClick={ () => this.changeNumberOfBoxesBy(this.state.phrase)}
                        >Enter</button>
                </div>


            <button
                onClick = { () => this.changeNumberOfBoxesBy(-1)}
                className="BoxChangers RemoveOne"
                > Remove One </button>
        </div>

        <div className="App">{this.state.themBoxes}</div>
    </div>
  );
}
}
export default App;
