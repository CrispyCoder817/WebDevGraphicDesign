import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import About from './Pages/About';
import GraphicDesign from './Pages/Graphics';
import WebDev from './Pages/WebDev';
import NotFound from './Pages/NotFound';
import Header from './Components/Header';
// import Footer from './Components/Footer';


function App() {
  
  return (
    <div className="application">
    <Header/>
    <Router>
      <Switch>
        {/* <Route exact path='/' component={Home}/> */}
        <Route exact path='/about' component={About}/>
        <Route exact path='/graphicdesign' component={GraphicDesign}/>
        <Route exact path='/webdev' component={WebDev}/>
        <Route exact path='' component={NotFound}/>
      </Switch>
    </Router>
    {/* <Footer/> */}
    </div>
  );
}




export default App;
