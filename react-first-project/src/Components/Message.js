import React, { Component } from "react";

class Message extends Component {

    constructor(){
        super()
            this.state = {
                message: "Welcome Yogesh"
        }
    }

    changeMessage(){
        this.setState({
            message : "Thanks for Subscribing!"
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClickCapture={() => this.changeMessage()}>Subsribe</button>
            </div>
        )
    }
}

export default Message