import './Navigation.css'
import { faPlusCircle, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";


function Navigation(props) {

  return (
    <div className={props.className} onClick = {() => props.handleNav()}>
      <img src="https://venturelabs.group/wp-content/uploads/2021/08/VL_Element.gif" alt="vl-logo" />

        <NavLink className="link" activeClassName="selected-link" to ="/users">
          <div className="option-items"> 
            <FontAwesomeIcon icon ={faHome} className="icon"/>
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink className="link" activeClassName="selected-link" exact={true} to="/">
          <div className="option-items">
            <FontAwesomeIcon icon ={faPlusCircle} className="icon"/>
            <p>Register</p>
          </div>
        </NavLink>
    </div>
  );
}

export default Navigation;


