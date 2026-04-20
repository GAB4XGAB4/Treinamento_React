import { useState } from "react";

const CREDENCIAIS = {
  email: "eduardo.lino@pucpr.br",
  senha: "123456"
};

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
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
      <section className="card-login" aria-label="Formulario de login">
        <h1>Login</h1>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          id="senha"
          type={mostrarSenha ? "text" : "password"}
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        <button
          type="button"
          onClick={() => setMostrarSenha((estadoAtual) => !estadoAtual)}
        >
          {mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
        </button>

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
