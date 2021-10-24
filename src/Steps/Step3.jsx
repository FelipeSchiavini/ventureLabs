import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { finishAction } from "../Utilities/Action";
import { ErrorType } from '../Utilities/Errors'
import './FormStyle/Form.css'

const Step3 = (props) => {
    const {register, handleSubmit, formState: { errors }} = useForm() 
    const { actions } = useStateMachine({ finishAction });

    const onSubmit = (data) => {
        actions.finishAction(data);
        props.history.push("./users")
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="birthDate">Data de Nascimento: </label>
      <ErrorType error = {errors.birthDate} />
      <input {...register("birthDate", { required: true })} placeholder="Ex. 99999-999" aria-invalid={errors.birthDate ? "true" : "false"}  id="birthDate" type="date"/>
   
      <label htmlFor="adress1">CPF: </label>
      <ErrorType error = {errors.cpf} />
      <input {...register("cpf", { required: true })} placeholder="Ex. 108.513.038.88" aria-invalid={errors.cpf ? "true" : "false"} id="cpf" type="string"/>
   
      <label htmlFor="salary">Salary :</label>
      <input {...register("salary", { required: false })} placeholder="Ex. R$ 15.000,00" aria-invalid={errors.salary ? "true" : "false"} id="salary"/>
   
      <button> Next </button>
    </form>
  );
};

export default withRouter(Step3);
