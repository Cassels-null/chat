import React from 'react';

//react setup
class Message extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(<div id="message">
            <div className="userName">{this.props.message.userName}</div>
            <div id="text">{this.props.message.text}</div>
        </div>)
    }
};

export default Message;