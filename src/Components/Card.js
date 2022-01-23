import { Component } from "react";
import './Card.css';


class Card extends Component {
    render() {
        return (
            <div className="bg-light-gray br3 grow dib pa1 ma4">
                <img src="https://raw.githubusercontent.com/mledoze/countries/86fd7ef8076dd65e2527b95d67d03e0b09044f42/data/abw.svg" alt='flag' className="image"/>
                <div>
                    <h2>Germany</h2>
                    <p>Population: 81,770,900</p>
                    <p>Region: Europe</p>
                    <p>Capital: Berlin</p>
                </div>
            </div>
        )
    }
}

export default Card;