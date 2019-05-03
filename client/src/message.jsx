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
        return(
        <div className="wrapper">
        <span className="userName">{this.props.message.userName}</span>
        <br/>
        <div className="message">
            {/* <br/> */}
            <span className="text">{this.props.message.text}</span>
        </div>
        <br/>
        </div>)
    }
};

export default Message;