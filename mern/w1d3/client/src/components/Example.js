import React from "react";
import Name from "./Name";

class Example extends React.Component {

    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            number: props.number * 50
        }
    }

    clickHandler = event => {
        this.setState({
            number: this.state.number + 1
        });
    }


    render () {
        return (
            <div>
                <h1>Hello this is the example component!! also the number is {this.state.number}</h1>
                <Name name={this.props.name} number={this.state.number} clickHandler={this.clickHandler}/>
            </div>
        )
    }
}


export default Example;