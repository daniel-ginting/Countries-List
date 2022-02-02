import Card from "./Card";

const CardList = ({countries, changeRoute}) => { 
        
    return (
        <div>
            {countries.map(
                (country, i) => {
                    return <Card
                    key={i} 
                    name={countries[i].name} 
                    population={countries[i].population} region={countries[i].region} 
                    capital={countries[i].capital}
                    flag={countries[i].flag}
                    code={countries[i].alpha3Code}
                    changeRoute={changeRoute}/>
                }
            )}
        </div>
    )
}

export default CardList;