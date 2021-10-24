import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../Utilities/Action";
import { ErrorType } from '../Utilities/Errors'
import './FormStyle/Form.css'

const Step2 = (props) => {
    const {register, handleSubmit, formState: { errors }} = useForm() 
    const { actions } = useStateMachine({ updateAction });

    const onSubmit = (data) => {
        actions.updateAction(data);
        props.history.push("./step3")
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="cep">CEP: </label>
      <ErrorType error = {errors.cep} />
      <input {...register("cep", { required: true })} placeholder="99999-999" aria-invalid={errors.cep ? "true" : "false"}  id="cep" pattern="\d{5}-?\d{3}"/>
   
      <label htmlFor="adress1">Adress 1:</label>
      <ErrorType error = {errors.adress1} />
      <input {...register("adress1", { required: true })} placeholder="Ex: Av. Paulista, 1920" aria-invalid={errors.adress1 ? "true" : "false"} id="adress1"/>
   
      <label htmlFor="adress2">Adress 2:</label>
      <input {...register("adress2", { required: false })} placeholder="Ex: Av. Miguel Ignácio Curi, 111" aria-invalid={errors.adress2 ? "true" : "false"} id="adress2"/>
   
      <button> Next </button>
    </form>
  );
};

export default withRouter(Step2);
