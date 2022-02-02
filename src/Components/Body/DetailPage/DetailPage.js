const DetailPage = ({changeRoute, country, clickBorder}) => {
    const handleClick = () => {
        changeRoute('home')
    }
    const handleClickBorder = () => {
        clickBorder(country.alpha3code)
    }
    function renderElement(){
        if (country.hasOwnProperty('borders')){
            return country.borders.map(border => {
                return (
                    <>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-10 border border-slate-250 rounded shadow-2xl"
                    onClick={() => clickBorder(border)}>
                        {border}
                    </button>
                    </>
                    
                )
                }
            )
            
        } else {
            return <p>Not Surrounded</p>
        }
    }
    return (
        <div className='grid grid-rows-3 grid-cols-4 gap-4'>
            <div className="col-span-4 h-24 text-left">
                <button 
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-10 border border-slate-250 rounded shadow-2xl mt-20 ml-20"
                    onClick={handleClick}>
                    Back
                </button>
            </div>           
            <img 
                src={country.flag} 
                style={{
                    width:'600px', 
                    height:'400px'
                }}
                alt="flag"
                className="col-span-2 row-span-2 ml-20"/>
                
            <div className="row-span-1 grid-cols-2 text-left ml-10">
                <h1 className="text-3xl font-extrabold mb-10 col-span-1">{country.name}</h1>    
                <ul className="col-span-1">
                    <li>Native Name: {country.nativeName}</li>
                    <li>Population: {country.population}</li>
                    <li>Region: {country.region}</li>
                    <li>SubRegion: {country.subregion}</li>
                    <li>Capital: {country.capital}</li>
                </ul>
            </div>
            <div className="text-left mt-20">
                <ul className="col-span-1 mt-5">
                    <li>Top Level Domain: {country.topLevelDomain}</li>
                    <li>Currencies: {country.currencies[0].name}</li>
                    <li>Languages: {country.languages[0].name}</li>
                </ul>  
            </div>    
            <div className="col-span-2 flex-wrap text-left ml-10 mt-20">
                <h3 className="inline">Border Countries:</h3>
                
                {renderElement()}
                
            </div>                                    
        </div>
    )
}

export default DetailPage;