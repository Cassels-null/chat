import React from 'react';
var ColorHash = require('color-hash');

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
        var colorHash = new ColorHash();
        var date = new Date(this.props.message.time);
        return(
        <div className="wrapper">
            <span className="userName"
            style={{'background-color': colorHash.hex(this.props.message.userName)}}
            >{this.props.message.userName}</span>

            <br/>
            <div className="message">
                {/* <br/> */}
                <span className="text">{this.props.message.text}</span>
            </div>
            <div className="timeStamp">{date.getMonth()}/{date.getDate()} {date.getHours()}:{date.getMinutes()}</div>
            <br/>
        </div>)
    }
};

export default Message;