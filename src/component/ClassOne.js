import React, { Component } from "react";
import List from "./List";

class ClassOne extends Component{  //class component
    constructor(props){
        super(props);
        this.state={
            name:"Nishant",
            age: 20
            
        }
    }
    componentWillMount(){
        console.log("component will mount")
    }
    componentDidMount(){
        console.log("component did mount")
    }
    handleName = () =>{
        this.data = 10;
        console.log("test");
        this.setState({name: "mayank", age: 40})
        console.log(this.state.name, this.state.age);
    }

    render(){  
        console.log("render");
        return(
            <div>
                My name is  {this.state.name}
                <div>My age is {this.state.age}</div>
                <button className="btn btn-primary" onClick={this.handleName}>Change</button>

                <List name="test" age={30}/>
                
            </div>
        )
    }
}

export default ClassOne;