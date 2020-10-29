import React from "react";


class Name extends React.Component {

    constructor(props){
        super(props);
    }


    render () {
        return (
            <div>
                <p>name: {this.props.name}</p>
            </div>
        )
    }
}


export default Name;