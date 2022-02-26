import './Card.css';


const Card = ({ flag, name, population, region, capital, changeRoute, code }) => {
        const handleChangeRoute = () => {
            changeRoute(code)
        }
        return (
            <button 
                className="bg-light-gray br3 grow ma4" 
                onClick={handleChangeRoute}
                style={{width: '300px', height: '300px'}}>
                <img src={flag} alt='flag' className="image" style={{height: '200px'}}/>
                <div>
                    <h2 style={{fontWeight: 'bold'}}>{name}</h2>
                    <p>Population: {population}</p>
                    <p>Region: {region}</p>
                    <p>Capital: {capital}</p>
                </div>
            </button>
        )
    }


export default Card;