import CardList from "./CardList/CardList";
import SearchBox from "./SearchBox/SearchBox";
import { Component } from "react";
import Filter from "./Filter/Filter";
import Dropdown from "./Filter/Dropdown/Dropdown";

class Body extends Component{
    constructor() {
        super()
        this.state = {
            countries: [],
            searchField: '',
            selected: 'Filter by region'
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

    setSelected = (option) => {
        this.setState({selected: option})
    }

    render(){
        const filterRegion = this.state.countries.filter(country => {
            if (this.state.selected === 'Filter by region'){
                return country;
            } else {
                return country.region.toLowerCase().includes(this.state.selected.toLowerCase())
            }            
        })
        const filteredCountries = filterRegion.filter(country => {
            return country.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div>
                <SearchBox searchChange={this.onSearchChange}/>
                <Dropdown 
                    selected={this.state.selected} 
                    setSelected={this.setSelected} 
                />
                <CardList countries={filteredCountries}/>
                {console.log(this.state.selected)}
            </div>
        )
    }
}

export default Body;