import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/';
import GraphicDesign from './Pages/Graphics';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/graphicdesign' component={GraphicDesign}/>

      </Switch>
    </Router>
  );
}

export default App;
