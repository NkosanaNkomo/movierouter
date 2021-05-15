import './App.css';
import Titles from './Components/Titles';
import Summary from './Components/Summary';
import Cast from './Components/Cast';
import Director from './Components/Director';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
     
        
       
      <div>
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/titles" component={Titles}/> 
      <Route path="/summary" component={Summary}/>
      <Route path="/cast" component={Cast}/>
      <Route path="/director" component={Director}/>
      </Switch>
      </div> 
      

     
      </Router>
</div>
  );
}

const Home = ()=> (
  <div>
    <h1>Home</h1>
  </div>
)

export default App;
