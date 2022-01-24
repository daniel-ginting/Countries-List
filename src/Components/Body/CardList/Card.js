import './Card.css';


const Card = ({ flag, name, population, region, capital }) => {
        return (
            <div className="bg-light-gray br3 grow dib pa1 ma4">
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