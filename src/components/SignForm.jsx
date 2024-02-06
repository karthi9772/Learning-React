import "./Sign.css";
const SignForm = () => {
  return (
    <div className="body">
      <div className="container">
        <h1>Sign-In</h1>
        <form className="form">
          <input className="input" placeholder="FirstName"></input>
          <input className="input" placeholder="LastName"></input>
          <input className="input" placeholder="Email"></input>
          <input className="input" placeholder="Age"></input>
          <input className="input" placeholder="Password"></input>
          <input className="input" placeholder="Confirm-Password"></input>
          <input className="btn" type="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default SignForm;
