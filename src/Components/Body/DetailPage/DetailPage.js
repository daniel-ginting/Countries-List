import './DetailPage.css';

const DetailPage = ({changeRoute, country, clickBorder}) => {
    const handleClick = () => {
        changeRoute('home')
    }
    function renderElement(){
        if (country.hasOwnProperty('borders')){
            return country.borders.map(border => {
                return (
                    <>
                    <button
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
        <>
        <div style={{textAlign:'left'}}>
            <button 
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-10 border border-slate-250 rounded shadow-2xl text-left mt-20 ml-40"
                style={{textAlign:'left'}}
                onClick={handleClick}>
                Back
            </button>
         </div>
        <section class="nation">
        <img src={country.flag} alt="Flag" class="nation__flag"/>
        <div class="nation__info">
            <h3 class="nation__name">{country.name}</h3>
            <div class="nation__details">
                <div class="nation__details--1">
                    <div class="nation__detail-item">
                        <div class="nation__detail-text">Native Name:</div>
                        <p class="nation__detail-value">{country.nativeName}</p>
                    </div>
                    <div class="nation__detail-item">
                        <div class="nation__detail-text">Population:</div>
                        <p class="nation__detail-value">{country.population}</p>
                    </div>
                    <div class="nation__detail-item">
                        <div class="nation__detail-text">Region:</div>
                        <p class="nation__detail-value">{country.region}</p>
                    </div>
                    <div class="nation__detail-item">
                        <div class="nation__detail-text">Sub Region:</div>
                        <p class="nation__detail-value">{country.subregion}</p>
                    </div>
                    <div class="nation__detail-item">
                        <div class="nation__detail-text">Capital:</div>
                        <p class="nation__detail-value">{country.capital}</p>
                    </div>
                </div>
                <div class="nation__details--2">
                    <div class="nation__detail-item">
                        <div class="nation__detail-text">Top Level Domain:</div>
                        <p class="nation__detail-value">{country.topLevelDomain}</p>
                    </div>
                    <div class="nation__detail-item">
                        <div class="nation__detail-text">Currencies:</div>
                        <p class="nation__detail-value">{country.currencies[0].name}</p>
                    </div>
                    <div class="nation__detail-item">
                        <div class="nation__detail-text">Languages:</div>
                        <p class="nation__detail-value">{country.languages[0].name}</p>
                    </div>
                </div>
            </div>
            <div class="nation__border">
                <div class="nation__border-text">Border Countries</div>
                    <div class="nation__border-contries">
                        {renderElement()}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default DetailPage;