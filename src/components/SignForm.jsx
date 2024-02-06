import * as yup from "yup";
import "./Sign.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const SignForm = () => {
  const schma = yup.object().shape({
    FirstName: yup.string().required("Your Name required"),
    LastName: yup.string().required(),
    Email: yup.string().email().required(),
    Age: yup.number().positive().integer().min(18).required(),
    Password: yup.string().min(4).max(12).required(),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref("Password"), null], "Password Not Matching"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schma) });
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
          <p>{errors.FirstName?.message}</p>
          <input
            className="input"
            placeholder="LastName"
            {...register("LastName")}
          ></input>
          <p>{errors.LastName?.message}</p>
          <input
            className="input"
            placeholder="Email"
            {...register("Email")}
          ></input>
          <p>{errors.Email?.message}</p>
          <input
            className="input"
            placeholder="Age"
            {...register("Age")}
          ></input>
          <p>{errors.Age?.message}</p>
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...register("Password")}
          ></input>
          <p>{errors.Password?.message}</p>
          <input
            type="password"
            className="input"
            placeholder="Confirm-Password"
            {...register("ConfirmPassword")}
          ></input>
          <p>{errors.ConfirmPassword?.message}</p>
          <input className="btn" type="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default SignForm;
