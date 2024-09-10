import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
    country: "",
    img: "",
    city: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    if (errors[e.target.id]) {
      setErrors((prev) => ({ ...prev, [e.target.id]: "" }));
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let formIsValid = true;

    // Vérifier si les champs obligatoires sont vides
    Object.entries(credentials).forEach(([key, value]) => {
      if (!value) {
        setErrors((prev) => ({ ...prev, [key]: "Ce champ est obligatoire" }));
        formIsValid = false;
      }
    });

    if (!formIsValid) {
      return;
    }

    if (!validateEmail(credentials.email)) {
      setErrors((prev) => ({ ...prev, email: "Format d'email invalide" }));
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("/auth/register", credentials);
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data && typeof err.response.data === "string") {
        setErrors({ serverError: err.response.data });
      } else if (err.response && err.response.data && typeof err.response.data === "object") {
        setErrors(err.response.data);
      } else {
        setErrors({ serverError: "Une erreur s'est produite" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <input
          type="text"
          className="rInput"
          placeholder="username"
          id="username"
          onChange={handleChange}
          required
        />
        {errors.username && <span className="error">{errors.username}</span>}
        <input
          type="password"
          className="rInput"
          placeholder="password"
          id="password"
          onChange={handleChange}
          required
        />
        {errors.password && <span className="error">{errors.password}</span>}
        <input
          type="text"
          className="rInput"
          placeholder="email"
          id="email"
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          type="text"
          className="rInput"
          placeholder="country"
          id="country"
          onChange={handleChange}
          required
        />
        {errors.country && <span className="error">{errors.country}</span>}
        <input
          type="text"
          className="rInput"
          placeholder="img"
          id="img"
          onChange={handleChange}
          required
        />
        {errors.img && <span className="error">{errors.img}</span>}
        <input
          type="text"
          className="rInput"
          placeholder="city"
          id="city"
          onChange={handleChange}
          required
        />
        {errors.city && <span className="error">{errors.city}</span>}
        <input
          type="text"
          className="rInput"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          required
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
        <button disabled={loading} onClick={handleClick} className="rButton">
          {loading ? "Chargement..." : "Register"}
        </button>
        {errors.serverError && <span className="error">{errors.serverError}</span>}
      </div>
    </div>
  );

};

export default Register;
