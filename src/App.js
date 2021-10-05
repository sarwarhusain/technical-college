import './App.css';
import Departments from './components/Departments/Departments';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Department from './components/Department/Department';
import Contactus from './components/Contuct/Contactus';

import Aboutus from './components/Aboutus/Aboutus';

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
          <Route path="/Contactus">
            <Contactus></Contactus>
          </Route>
          <Route path="/about">
            <Aboutus></Aboutus>
          </Route>
          <Route path="/Department">
            <Department></Department>
          </Route>
          <Route path="/Departments">
            <Departments></Departments>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;