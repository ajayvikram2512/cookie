import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";

function Login() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "") {
      setError("Please enter your name");
      return;
    }

    setError("");
    login();
    navigate("/");
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-5">Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          className="border p-2 w-full rounded mb-3"
        />

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default Login;
