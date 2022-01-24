import Card from "./Card";

const CardList = ({countries}) => { 
        
    return (
        <div>
            {countries.map(
            (country, i) => {
                return <Card
                key={i} 
                name={countries[i].name} 
                population={countries[i].population} region={countries[i].region} 
                capital={countries[i].capital}
                flag={countries[i].flag}/>
    })
    }
        </div>
    )
}

export default CardList;