import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Nav from './components/Nav.jsx';
import About from './components/About';
import Detail from './components/Detail';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="div">

      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/fav" component={Favorites}/>
        <Route  path="/about" component={About}/>
        <Route  path="/movie/:id" component={Detail}/>
        <Route  path="*" component={NotFound}/>
      </Switch>
    
    </div>
  );
}

export default App;
