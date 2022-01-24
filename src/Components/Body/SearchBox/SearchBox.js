const SearchBox = ({searchChange}) => {
    return (
        <div className="mt4 ml4 tl ">
            <input 
                className=" pa3"
                type='search' placeholder="Search for a country..."
                onChange={searchChange}
                />
        </div>
    )
}

export default SearchBox;