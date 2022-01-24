import CardList from "./CardList/CardList";
import SearchBox from "./SearchBox/SearchBox";
import { Component } from "react";

class Body extends Component{
    constructor() {
        super()
        this.state = {
            countries: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://restcountries.com/v2/all')
        .then(response => {
            return response.json()
        })
        .then(countries => {
            this.setState({ countries: countries })
        })
        
    }
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    render(){
        const filteredCountries = this.state.countries.filter(country => {
            return country.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList countries={filteredCountries}/>
            </div>
        )
    }
}

export default Body;