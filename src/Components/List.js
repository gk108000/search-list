import React,{ Component } from "react";
import userList from "../search-list.json";

/*
    Description: This component render a loader while searching, displays a table with results and if no result is found 
                    it displays a "no result found" message
*/
export default class List extends Component{
    constructor(props){
        super(props);
        this.state={
            matched: false  
        }
        this.search = this.search.bind(this);
        this.resultArr = [];
    }
    componentDidMount(){
        
            this.search()
          
        
    }
   
    search = ()=>{
        this.resultArr =   userList.filter(value=>{
            return value._id === this.props.id || value.name === this.props.id || value.gender === this.props.id
        })
        this.resultArr.map(value=>{
           value.name = value.name.split(">")[1];
        })
        if(this.resultArr.length>0){
            this.setState({
                matched: true
            })
        }
    }
    render(){
       
      
        if(this.state.matched){
        return(
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.resultArr.map((value,i)=>
                            
                                <tr key={i}>
                                <td>{value._id}</td>
                                <td>{value.name}</td>
                                <td>{value.gender}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </React.Fragment>
        )
                    }
        else{
        return(
            <h4>Sorry No Matches found</h4>
        )}
    }
}