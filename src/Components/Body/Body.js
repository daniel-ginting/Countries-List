import CardList from "./CardList/CardList";
import SearchBox from "./SearchBox/SearchBox";
import { Component } from "react";
import Dropdown from "./Dropdown/Dropdown";
import DetailPage from "./DetailPage/DetailPage";
import Pagination from "./Pagination/Pagination";
import Scroll from "./Scroll/Scroll";
import './Body.css';

class Body extends Component{
    constructor() {
        super()
        this.state = {
            countries: [],
            searchField: '',
            selected: 'Filter by region',
            route: 'home',
            currentPage: 1,
            countryPerPage: 12
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
        this.setState({currentPage: 1})
    }

    setSelected = (option) => {
        this.setState({selected: option})
    }

    onChangeRoute = (country) => {
        this.setState({route: country})
    }

    onClickBorder = (code) => {
        this.setState({route: code})
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    // Change pagination page
    paginate = (pageNumber) => {
        this.setState({currentPage: pageNumber})
    }

    render(){

        // This is the first stage of filtering the countries, filtering by region
        const filterRegion = this.state.countries.filter(country => {
            if (this.state.selected === 'Filter by region' || this.state.selected === 'None'){
                return country;
            } else {
                return country.region.toLowerCase().includes(this.state.selected.toLowerCase())
            }            
        })

        // After filter by region, we filter by searchbox.
        const filteredCountries = filterRegion.filter(country => {
            return country.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        // This variable functions as route changer
        const selectedCountry = this.state.countries.filter(country => {
            return country.alpha3Code === this.state.route
        })

        //Get current post
        const indexOfLastPost = this.state.currentPage * this.state.countryPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.countryPerPage;
        const currentPost = filteredCountries.slice(indexOfFirstPost, indexOfLastPost)
        
        // Elements to render
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
                            <Scroll>
                                <CardList 
                                    countries={currentPost}
                                    changeRoute={this.onChangeRoute}/>
                                <Pagination   
                                    countryPerPage={this.state.countryPerPage} 
                                    totalCountry={filteredCountries.length}
                                    paginate={this.paginate}
                                />
                            </Scroll>
                        </div>
                    
                    )
                } else {
                    return (
                        <>
                        <DetailPage
                        changeRoute={this.onChangeRoute}
                        country={selectedCountry[0]}
                        clickBorder={this.onClickBorder}/>
                        </>
                        
                    )
                }
            }
        }
        
        
    }


export default Body;