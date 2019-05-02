import React from 'react';
import Chat from './chat.jsx';

//default react setup
class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    //render a sign-in prompt
    renderSignIn(){return(
        <div id="signIn">
            <form onSubmit={(e)=>{
                e.preventDefault(); 
                this.props.changeUserName(document.getElementById("nameInput").value);
            }}>
                <input id="nameInput" type="text" placeholder="What's your name?" autoFocus/>
            </form>
        </div>)
    }

    render(){
        if(this.props.userName == ""){//if the userename is blank, render the sign-in
            return(this.renderSignIn());
        } else{//if username is set, render the chat app
            return(<Chat messages={this.props.messages} userName={this.props.userName}/>);
        }
    }
};

export default SignIn;