import React from "react";


class Counter extends React.Component {

    constructor(props){
        super(props);
    }


    render () {
        return (
            <div>
                <p>{this.props.total}</p>
            </div>
        )
    }
}


export default Counter;