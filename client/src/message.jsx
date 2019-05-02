import React from 'react';

//react setup
class Message extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){//scroll down when a new message appears
        document.getElementById("mark").scrollIntoView();
    }

    render(){
        return(<div className="message">
            <div className="userName">{this.props.message.userName}</div>
            <div id="text">{this.props.message.text}</div>
        </div>)
    }
};

export default Message;