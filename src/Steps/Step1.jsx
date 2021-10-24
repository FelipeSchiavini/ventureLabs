import React from "react";
import { useForm  } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { firstAction } from "../Utilities/updateAction";
import { useHistory } from "react-router";
import './FormStyle/Form.css'

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
      {errors.firstName && errors.firstName.type === "required" && (
      <span className ="alert">This is required</span>)}
      {errors.firstName && errors.firstName.type === "maxLength" && (
      <span className ="alert">Max length exceeded</span>)}
      <input {...register("firstName", { required: true , maxLength: 30})} placeholder="Fulano de Tal" aria-invalid={errors.firstName ? "true" : "false"}  id="firstName"/>
         
      <label htmlFor="lastName">Last Name:</label>
      {errors.lastName && errors.lastName.type === "required" && (
      <span className ="alert">This is required</span>)}
      <input {...register("lastName", { required: true })} placeholder="Fulano de Tal" aria-invalid={errors.lastName ? "true" : "false"} id="lastName"/>

      <label htmlFor="email">E-mail:</label>
      {errors.email && errors.email.type === "required" && (
      <span className ="alert">This is required</span>)}
      <input {...register("email", { required: true })} placeholder="fulano@gmail.com" type="email" aria-invalid={errors.email ? "true" : "false"} id ="email"/>
      
      <label htmlFor="email">Phone number:</label>
      {errors.phone && errors.phone.type === "required" && (
      <span className ="alert">This is required</span>)}
      <input {...register("phone", { required: true, maxLength: 13})} placeholder="(11)99999-9999" type="tel" aria-invalid={errors.phone ? "true" : "false"} id="phone" />
      <button> Next </button>
    </form>
  );
};

export default withRouter(Step1);
