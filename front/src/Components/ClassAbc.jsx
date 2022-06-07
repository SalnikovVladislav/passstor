import React from "react";

class ClassAbc extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count: 0
        }
        this.inc = this.inc.bind(this)
        this.dec = this.dec.bind(this)
        // this.state ={
        //     value: 0
        // }
    }

    inc(){
        this.setState({count: this.state.count + 1})
    }
    dec(){
        this.setState({count: this.state.count - 1})
    }
    // setValue(){
    //     this.setState({count: event.target.value})
    // }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                {/* <h1>{this.value}</h1>
                <input type="text" onChange={event => setValue(event.target.value)}/> */}
                <button onClick={this.inc}> + 1</button>
                <button onClick={this.dec}> - 1</button>
            </div>
        )
    }
}