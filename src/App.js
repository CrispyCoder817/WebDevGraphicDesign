import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/';
import About from './Pages/About';
import GraphicDesign from './Pages/Graphics';
import WebDev from './Pages/WebDev';
import NotFound from './Pages/NotFound';
// import Header from './Components/Header';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/graphicdesign' component={GraphicDesign}/>
        <Route exact path='/webdev' component={WebDev}/>
        <Route exact path='' component={NotFound}/>
      </Switch>
    </Router>
  );
}




export default App;
