import React from "react";
import Counter from "./Counter";
import Name from './Name';


class Counters extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            total: 0
        }
    }

    updateTotal = (event) => {
        console.log(event);
        this.setState({
            total: this.state.total + 1
        })
    }


    render () {
        return (
            <div>
                <Counter total={this.state.total} />
                <Counter total={this.state.total} />
                <Counter total={this.state.total} />
                <Counter total={this.state.total} />
                <Counter total={this.state.total} />
                <Counter total={this.state.total} />
                <button onClick={this.updateTotal}>Click here to update the total!</button>
            </div>
        )
    }
}


export default Counters;