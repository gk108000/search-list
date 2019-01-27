import React,{ Component } from "react";
import List from "./List"
/*
    Description : This component a input box with a search button and pass the user input to list component
*/
export default class SearchInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchId:"",
            buttonClicked: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange = (e)=>{
        e.preventDefault();
        this.setState({
            searchId: e.target.value
        })
    }
    handleSearch = (e)=>{
        e.preventDefault();
        if(this.state.searchId !== ""){
                this.setState(
                    {
                        buttonClicked: true
                    }
                )
        }
    }
    render(){
       
        
        return(
            <React.Fragment>
                {/* Reanders search box */}
                <div style={{width:"40vw",height:"20vw",backgroundColor:"grey",margin:"10vw 25vw"}}>
                    <input type="text" placeholder="Enter id to search" onChange={this.handleChange} style={{marginLeft:"5vw",marginTop:"2vw",height:"4vw",width:"30vw",fontSize:"2vw",borderRadius:"5PX",border:"none"}}/>
                    <br/>
                    <button type="button" onClick={this.handleSearch} style={{marginLeft:"5vw",marginTop:"2vw",height:"4vw",width:"30.3vw",fontSize:"2vw",borderRadius:"5PX",border:"none"}}>Search</button>
                </div>
                {this.state.buttonClicked &&
                                          <List id={this.state.searchId} />}
            </React.Fragment>
        )
        
    }
}