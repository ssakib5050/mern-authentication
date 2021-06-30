import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      history.push("/");
    }
  }, [history]);

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      // header: {
      // }
    };
    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        setError("");
      }, 5000);

      return setError("Password do not matched");
    }

    try {
      const { data } = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });
      localStorage.setItem("authToken", data.token);
      history.push("/");
    } catch (err) {
      setError(err.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <h3>Register</h3>

      {error && <h2>{error}</h2>}
      <form action="" onSubmit={registerHandler}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          required
          id="name"
          placeholder=""
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="">Email</label>
        <input
          type="text"
          required
          id="name"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor="">Password</label>
        <input
          type="text"
          required
          id="name"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <label htmlFor="">Confirm Password</label>
        <input
          type="text"
          required
          id="name"
          placeholder=""
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />

        <button type="submit">Register</button>
        <span>
          Already have an account? <Link to="/">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterScreen;
