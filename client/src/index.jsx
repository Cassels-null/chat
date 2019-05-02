import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages: []
        };
    }

    componentDidMount(){
        this.update();
    }

    update(){
        axios.get("http://127.0.0.1:1337/read")
        .then((result)=>{this.setState({messages : result.data})})
        .catch((err)=>{console.log(err)});
        setTimeout(()=>{this.update()},200);
    }

    render(){
        return(<div id="master">
        tempwords
        </div>)
    }
};

ReactDOM.render(<App />, document.getElementById("app"));