import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { FormContainer, InputContainer } from "./styled.js";
import { useForms } from "../../hooks/useForm.js";
import axios from "axios";
import { baseURL } from "../../constants/baseURL.js";


function LoginPage() {
  const navigate = useNavigate();

  const { form, onChange } = useForms({ email: "", password: "" })

  const body = {
    email: form.email,
    password: form.password
  }

  const enviarLogin = (event) => {
    event.preventDefault()

    console.log(body)
    axios.post(`${baseURL}/user/login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        goToFeed(navigate)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  return (
    <main>
      <h1>Login</h1>
      <FormContainer onSubmit={enviarLogin}>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={onChange}
            required
          />
        </InputContainer>
        <button>Entrar</button>
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
    </main>
  );
}

export default LoginPage;
