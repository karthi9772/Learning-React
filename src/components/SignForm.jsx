import * as yup from "yup";
import "./Sign.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const SignForm = () => {
  const schma = yup.object().shape({
    FirstName: yup.string().required(),
    LastName: yup.string().required(),
    Email: yup.string().email().required(),
    Age: yup.number().positive().integer().min(18).required(),
    Password: yup.string().min(4).max(12).required(),
    ConfirmPassword: yup.string().oneOf([yup.ref("Password"), null]),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schma) });
  const submitfn = (data) => {
    console.log(data);
    if (data.Password != data.ConfirmPassword) {
      alert("invalid Password");
    }
  };

  return (
    <div className="body">
      <div className="container">
        <h1>Sign-In</h1>
        <form onSubmit={handleSubmit(submitfn)} className="form">
          <input
            className="input"
            placeholder="FirstName"
            {...register("FirstName")}
          ></input>
          <input
            className="input"
            placeholder="LastName"
            {...register("LastName")}
          ></input>
          <input
            className="input"
            placeholder="Email"
            {...register("Email")}
          ></input>
          <input
            className="input"
            placeholder="Age"
            {...register("Age")}
          ></input>
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...register("Password")}
          ></input>
          <input
            type="password"
            className="input"
            placeholder="Confirm-Password"
            {...register("ConfirmPassword")}
          ></input>
          <input className="btn" type="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default SignForm;

