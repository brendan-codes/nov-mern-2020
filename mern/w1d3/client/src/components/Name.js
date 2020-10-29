import React from "react";


class Name extends React.Component {

    constructor(props){
        super(props);

        console.log(props);
    }


    render () {
        return (
            <div>
                <h1>Let's read that name: {this.props.name}</h1>
                <h1>Let's read that name: {this.props.number}</h1>
                <button onClick={this.props.clickHandler}>Please update the number!</button>
            </div>
        )
    }
}


export default Name;