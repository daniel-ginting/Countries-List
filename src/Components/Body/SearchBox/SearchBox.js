import './SearchBox.css';

const SearchBox = ({searchChange}) => {
    return (
        <div className=''>
            <input 
                className=" pa3 border-4"
                type='search' placeholder="Search for a country..."
                onChange={searchChange}
                />
        </div>
    )
}

export default SearchBox;