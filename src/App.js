import { React, useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Navigation from "./Navigation/Navigation";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Users from "./Users/Users"
import './styles.css'

createStore({
  data: {},
  list: []
});

function App() {
  const [classNav, setClassNav] = useState("NavCointainer");

  const handleNavShow = () => {
    setClassNav("NavCointainerShow")
  }

  const handleNavHide = () => {
    setClassNav("NavCointainer")
  }

  return (
    <StateMachineProvider>
      <Router>
        <div className="app-container" >
          <Navigation className={classNav} handleNav = {handleNavHide}/>
          <div className="app-routes">
            <div className="header">
              <FontAwesomeIcon icon ={faBars} className="icon-bar" onClick = {handleNavShow}/>
              <h1>TEST VENTURELABS FRONT-END</h1>
            </div>
            <Route exact path="/" component={Step1} />
            <Route path="/step2" component={Step2} />
            <Route path="/Step3" component={Step3} />
            <Route path="/users" component={Users} />
          </div>
        </div>
      </Router>
    </StateMachineProvider>
  );
}

export default App;
