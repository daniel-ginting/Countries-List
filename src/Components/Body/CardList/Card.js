import './Card.css';


const Card = ({ flag, name, population, region, capital, changeRoute }) => {
        const handleChangeRoute = () => {
            changeRoute(name)
        }
        return (
            <div className="bg-light-gray br3 grow dib pa1 ma4" onClick={handleChangeRoute}>
                <img src={flag} alt='flag' className="image"/>
                <div>
                    <h2>{name}</h2>
                    <p>Population: {population}</p>
                    <p>Region: {region}</p>
                    <p>Capital: {capital}</p>
                </div>
            </div>
        )
    }


export default Card;