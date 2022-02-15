import react, { Component } from "react";

class ClassOne extends Component{  //class component
    constructor(props){
        super(props);
        this.state={
            name:"Nishant",
            age: 20
        }
    }
    handleName = () =>{
        console.log("test");
        this.setState({name: "mayank"})
    }
    render(){  
        return(
            <div>
                My name is  {this.state.name}

                <button className="btn btn-primary" onClick={this.handleName}>Change</button>
            </div>
        )
    }
}

export default ClassOne;