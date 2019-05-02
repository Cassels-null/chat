import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Chat from './chat.jsx';
import SignIn from './signIn.jsx';

//normal react setup
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            userName: ""
        };
        this.changeUserName = this.changeUserName.bind(this);
    }

    //initialize the update function
    componentDidMount(){
        this.update();
    }

    changeUserName(name){
        this.setState({userName: name});
    }

    //get messages from server and sets them to state
    update(){
        axios.get("http://127.0.0.1:1337/read")
        .then((result)=>{this.setState({messages : result.data})})
        .catch((err)=>{console.log(err)});
        setTimeout(()=>{this.update()},200);//check for new messages every .2 seconds
    }

    render(){
        return(<div id="master">
        <SignIn changeUserName={this.changeUserName} userName={this.state.userName} messages={this.state.messages}/>
{/*         
        <Chat messages={this.state.messages}/>{/* render the app UI */}
        </div>)
    }
};

ReactDOM.render(<App />, document.getElementById("app"));