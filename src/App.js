import './App.css';
import Carousels from './components/Carousels/Carousels';
import Departments from './components/Departments/Departments';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">

          </Route>
          <Route path="/department">
            <Departments></Departments>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

 // <Header></Header>
      // <Carousels></Carousels>
      // <Departments></Departments>
      // <Footer></Footer>