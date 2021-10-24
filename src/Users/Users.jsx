import React from "react";
import { useStateMachine } from "little-state-machine";
import {changeAction} from "../Utilities/updateAction";
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Users.css'

function Users () {
    const { state } = useStateMachine();
    const { actions } = useStateMachine({ changeAction });    

    const handleInfo = (id) => {
        actions.changeAction(id);
    }

    return(
        <div>          
            <h2>Users:</h2>
            {state.list.map( (user) => {
                if (!user.show){
                    return(
                        <div className="user-item" onClick= {() => handleInfo(user.id)} >
                        <span>{user.lastName}, {user.firstName} </span>
                        <FontAwesomeIcon icon ={faChevronRight} className="icon"/>
                        </div>)
                } else {
                    return(
                        <>
                            <div className="user-item" onClick= {() => handleInfo(user.id)}>
                                <span>{user.lastName}, {user.firstName}</span>
                                <FontAwesomeIcon icon ={faChevronDown} className="icon"/>
                                </div>
                            <div className="selectLi">
                                <p className="selectP">id: {user.id}</p>
                                <p className="selectP">email: {user.email}</p>
                                <p className="selectP">phone: {user.phone}</p>
                                <p className="selectP">adress1: {user.adress1}</p>
                                <p className="selectP">adress2: {user.adress2}</p>
                                <p className="selectP">birth date: {user.birthDate}</p>
                                <p className="selectP">cep: {user.cep}</p>
                                <p className="selectP">cpf: {user.cpf}</p>                            
                            </div>
                        </>
                    )
                }
            })}
        </div>
    )
}

export default Users