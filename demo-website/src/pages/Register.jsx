const Register = ({ setPage }) => {
  return (
    <div>
      <h2>Register</h2>
      <button onClick={() => setPage("login")}>Go Login</button>
    </div>
  );
};

export default Register;