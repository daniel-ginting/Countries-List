import Dropdown from "./Dropdown/Dropdown";
import { useState } from "react";
import react from "react";

class Filter extends react.Component{
    constructor(){
        super();
        this.state = {
            selected: 'Filter by region'
        }
    }
    setSelected = (option) => {
        this.setState({selected: option})
    }
    render(){
        return (
            <>
            <Dropdown 
                selected={this.state.selected} 
                setSelected={this.setSelected} 
            />   
        </>  
        )
    }
}


export default Filter;