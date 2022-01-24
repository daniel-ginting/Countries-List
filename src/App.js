import './App.css';
import CardList from './Components/CardList';
import 'tachyons';
import { Countries } from './Components/Countries';


function App() {
  return (
    <div className="App">
      <CardList countries={Countries}/>
    </div>
  );
}

export default App;
