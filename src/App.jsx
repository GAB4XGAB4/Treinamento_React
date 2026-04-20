import { useState } from "react";

const CREDENCIAIS = {
  email: "eduardo.lino@pucpr.br",
  senha: "123456"
};

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const validarAcesso = () => {
    const emailValido = email.trim() === CREDENCIAIS.email;
    const senhaValida = senha === CREDENCIAIS.senha;

    if (emailValido && senhaValida) {
      setMensagem("Acessado com sucesso!");
      return;
    }

    setMensagem("Usuário ou senha incorretos!");
  };

  return (
    <main className="pagina-login">
      <section className="card-login" aria-label="Formulário de login">
        <h1>Login</h1>

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        <button type="button" onClick={validarAcesso}>
          Acessar
        </button>

        <p className="mensagem-status" role="status" aria-live="polite">
          {mensagem}
        </p>
      </section>
    </main>
  );
}

export default App;
