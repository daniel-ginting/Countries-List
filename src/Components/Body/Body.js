import CardList from "./CardList/CardList";
import SearchBox from "./SearchBox/SearchBox";
import { Countries } from "../../Data/Countries";
import { Component } from "react";

class Body extends Component{
    constructor() {
        super()
        this.state = {
            countries: Countries,
            searchField: ''
        }
    }
    render(){
        return (
            <div>
                <SearchBox/>
                <CardList countries={this.state.countries}/>
            </div>
        )
    }
}

export default Body;