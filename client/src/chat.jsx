import React from 'react';

import Message from './message.jsx';
import Submit from './submit.jsx';
var ColorHash = require('color-hash');

//default react setup
class Chat extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        var colorHash = new ColorHash();

        return(<div id="chat">
        <div id="showUser">
            <span style={{'color': colorHash.hex(this.props.userName)}}>●</span>
            {this.props.userName}
        </div>
        {/* render a message component for each element in the messages prop*/}
        <div id="wordBox">
            {this.props.messages.map((message)=>{return(
                <Message message={message}/>
            )})}
            <div id="mark"/>{/* target for automatic scrolling. used in onComponentDidMount in messages.jsx */}
        </div>
            <Submit userName={this.props.userName}/>
        </div>)
    }
};

export default Chat;