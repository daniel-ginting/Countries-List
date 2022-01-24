import { Countries } from "./Countries";
import Card from "./Card";

const CardList = (props) => {
    return (
        <div>
        <Card 
        name={Countries[0].name} 
        population={Countries[0].population} region={Countries[0].region} 
        capital={Countries[0].capital}
        flag={Countries[0].flag}/>
      <Card 
        name={Countries[1].name} 
        population={Countries[1].population} region={Countries[1].region} 
        capital={Countries[1].capital}
        flag={Countries[1].flag}/>
      <Card 
        name={Countries[2].name} 
        population={Countries[2].population} region={Countries[2].region} 
        capital={Countries[2].capital}
        flag={Countries[2].flag}/>
        </div>
    )
}

export default CardList;