import React from "react";
import { useForm  } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { firstAction } from "../Utilities/Action";
import { useHistory } from "react-router";
import './FormStyle/Form.css'
import { ErrorType } from '../Utilities/Errors'

const Step1 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { actions } = useStateMachine({ firstAction });
    const history = useHistory();

    const onSubmit = (data) => {
        actions.firstAction(data);
        history.push("./step2")
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">Name: </label>
      <ErrorType error = {errors.firstName} />
      {errors.firstName && errors.firstName.type === "maxLength" && (
      <span className ="alert">Max length exceeded</span>)}
      <input {...register("firstName", { required: true , maxLength: 30})} placeholder="Rafael" aria-invalid={errors.firstName ? "true" : "false"}  id="firstName"/>
         
      <label htmlFor="lastName">Last Name:</label>
      <ErrorType error = {errors.lastName} />
      <input {...register("lastName", { required: true })} placeholder="Silva" aria-invalid={errors.lastName ? "true" : "false"} id="lastName"/>

      <label htmlFor="email">E-mail:</label>
      <ErrorType error = {errors.email} />
      <input {...register("email", { required: true })} placeholder="rafaelsilva@gmail.com" type="email" aria-invalid={errors.email ? "true" : "false"} id ="email"/>
      
      <label htmlFor="email">Phone number:</label>
      <ErrorType error = {errors.phone} />
      <input {...register("phone", { required: true, maxLength: 13})} placeholder="Ex: 11 99999-9999" type="tel" aria-invalid={errors.phone ? "true" : "false"} id="phone" />
      <button> Next </button>
    </form>
  );
};

export default withRouter(Step1);
