import React from 'react';
var ColorHash = require('color-hash');

//react setup
class Message extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){//scroll to bottom of chat. called when a new message is posted
        document.getElementById("mark").scrollIntoView();
    }

    render(){
        //varible declaration
        var colorHash = new ColorHash();
        const date = new Date(this.props.message.time);

        return(
        <div className="wrapper">
            {/* display username with personal colour */}
            <span className="userName"
            style={{'background-color': colorHash.hex(this.props.message.userName)}}>
            {this.props.message.userName}</span>
            <br/>
            {/* text content of message */}
            <div className="message">
                <span className="text">{this.props.message.text}</span>
            </div>
            {/* display timestamp in "mm/dd hr:min" format */}
            <div className="timeStamp">
                {date.getMonth() + 1}/{date.getDate()} {date.getHours()}:{date.getMinutes()}
            </div>
            <br/>
        </div>)
    }
};

export default Message;