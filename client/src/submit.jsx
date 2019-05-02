import React from 'react';
import axios from 'axios';

//default react setup
class Submit extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    //post message and username to server
    makePost(){
        //post message to server
        axios.post("http://127.0.0.1:1337/record", {
            text: document.getElementById("textInput").value, 
            userName: this.props.userName
        })
        .then((result)=>{document.getElementById("textInput").value = ""})//clear the input feild
        .catch((err)=>{console.log(err)});
    }

    render(){
        //render an input box
        return(<div id="submit">
            <form onSubmit={(e)=>{e.preventDefault(); this.makePost()}}>{/* on submit, run the makePost method */}
                <input id="textInput" type="text" placeholder="type your message here" autoFocus/>
            </form>
        </div>)
    }
};

export default Submit;