import React from 'react';

import Message from './message.jsx';

//react setup
class Chat extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(<div id="chat">
        {this.props.messages.map((message)=>{return(
            <Message message={message}/>
        )})}
        </div>)
    }
};

export default Chat;