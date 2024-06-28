import React , { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";


function Login() {


  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    // const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      // Handle unsuccessful uploads
      setError(true);
    }
  };



  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="password" />

          <button>Sign in</button>
          {error && <span>Somthing wrong</span>}
        </form>
        <p>
          You don't have an account?
          <Link to='/register' >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
