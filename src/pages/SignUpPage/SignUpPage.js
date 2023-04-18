import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";
import { useForms } from "../../hooks/useForm";
import axios from "axios";
import { baseURL } from "../../constants/baseURL";

function SignUpPage() {
  const navigate = useNavigate();

  const { form, onChange } = useForms({ name: "", email: "", password: "" })

  const enviarCadastro = (event) => {
    event.preventDefault()

    const body = {
      name: form.name,
      email: form.email,
      password: form.password
    }

    axios.post(`${baseURL}/user/signup`, body)
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
      <h1>Cadastro</h1>
      <FormContainer onSubmit={enviarCadastro}>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            id="name"
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            id="email"
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            name="password"
            value={form.password}
            onChange={onChange}
            id="password"
            required
          />
        </InputContainer>

        <button>Cadastrar</button>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;