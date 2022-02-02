import CardList from "./CardList/CardList";
import SearchBox from "./SearchBox/SearchBox";
import { Component } from "react";
import Dropdown from "./Dropdown/Dropdown";
import DetailPage from "./DetailPage/DetailPage";

class Body extends Component{
    constructor() {
        super()
        this.state = {
            countries: [],
            searchField: '',
            selected: 'Filter by region',
            route: 'home'
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

    onChangeRoute = (country) => {
        this.setState({route: country})
    }

    onClickBorder = (code) => {
        const selected = this.state.countries.filter(country => {
            return country.alpha3Code.includes(code)
        })
        this.setState({route: code})
        console.log(code);
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
        const selectedCountry = this.state.countries.filter(country => {
            return country.alpha3Code === this.state.route
        }

        )
        
            if (this.state.countries.length === 0){
                return <h1>Loading...</h1>
            } else {
                if (this.state.route === 'home'){
                    return (
                        <div>
                            
                            <SearchBox searchChange={this.onSearchChange}/>
                            <Dropdown 
                                selected={this.state.selected} 
                                setSelected={this.setSelected} 
                            />
                            <CardList 
                                countries={filteredCountries}
                                changeRoute={this.onChangeRoute}/>
                            {console.log(selectedCountry[0])}
                            {console.log(this.state.route)}
                        </div>
                    
                    )
                } else {
                    return (
                        <>
                        <DetailPage
                        changeRoute={this.onChangeRoute}
                        country={selectedCountry[0]}
                        clickBorder={this.onClickBorder}/>
                        {console.log(selectedCountry[0])}
                        {console.log(this.state.route)}
                        </>
                        
                    )
                }
            }
        }
        
        
    }


export default Body;