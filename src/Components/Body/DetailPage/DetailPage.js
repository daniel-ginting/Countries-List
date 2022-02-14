import './DetailPage.css';

const DetailPage = ({changeRoute, country, clickBorder}) => {
    const handleClick = () => {
        changeRoute('home')
    }
    function renderElement(){
        if (country.hasOwnProperty('borders')){
            return country.borders.map((border, i) => {
                return (
                    <button
                    key={`${border}-${i}`}
                    onClick={() => clickBorder(border)}
                    >
                        {border}
                    </button>
                )
            }
            )
            
        } else {
            return <p>Not Surrounded</p>
        }
    }

    // This function acts as a checker if a country has a currency because some (like Antartica), doesn't have a currency
    const checkCurrency = () => {
        if (country.hasOwnProperty('borders')){
            return country.currencies[0].name
        } else {
            return 'No currency'
        }
    }
    return (
        <>
        <div style={{textAlign:'left'}}>
            <button 
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-10 border border-slate-250 rounded shadow-2xl text-left mt-20 ml-40"
                style={{textAlign:'left'}}
                onClick={handleClick}>
                Back
            </button>
         </div>
        <section className="nation">
        <img src={country.flag} alt="Flag" className="nation__flag"/>
        <div className="nation__info">
            <h3 className="nation__name">{country.name}</h3>
            <div className="nation__details">
                <div className="nation__details--1">
                    <div className="nation__detail-item">
                        <div className="nation__detail-text">Native Name:</div>
                        <p className="nation__detail-value">{country.nativeName}</p>
                    </div>
                    <div className="nation__detail-item">
                        <div className="nation__detail-text">Population:</div>
                        <p className="nation__detail-value">{country.population}</p>
                    </div>
                    <div className="nation__detail-item">
                        <div className="nation__detail-text">Region:</div>
                        <p className="nation__detail-value">{country.region}</p>
                    </div>
                    <div className="nation__detail-item">
                        <div className="nation__detail-text">Sub Region:</div>
                        <p className="nation__detail-value">{country.subregion}</p>
                    </div>
                    <div className="nation__detail-item">
                        <div className="nation__detail-text">Capital:</div>
                        <p className="nation__detail-value">{country.capital}</p>
                    </div>
                </div>
                <div className="nation__details--2">
                    <div className="nation__detail-item">
                        <div className="nation__detail-text">Top Level Domain:</div>
                        <p className="nation__detail-value">{country.topLevelDomain}</p>
                    </div>
                    <div className="nation__detail-item">
                        <div className="nation__detail-text">Currencies:</div>
                        <p className="nation__detail-value">{checkCurrency()}</p>
                    </div>
                    <div className="nation__detail-item">
                        <div className="nation__detail-text">Languages:</div>
                        <p className="nation__detail-value">{country.languages[0].name}</p>
                    </div>
                </div>
            </div>
            <div className="nation__border">
                <div className="nation__border-text">Border Countries</div>
                    <div className="nation__border-contries">
                        {renderElement()}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default DetailPage;