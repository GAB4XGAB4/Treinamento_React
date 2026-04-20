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

        <div className="senha-wrapper">
          <input
            id="senha"
            type={mostrarSenha ? "text" : "password"}
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />

          <button
            type="button"
            className="botao-olho"
            aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
            title={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
            onClick={() => setMostrarSenha((estadoAtual) => !estadoAtual)}
          >
            {mostrarSenha ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
                <circle cx="12" cy="12" r="3" />
                <path d="M4 20 20 4" />
              </svg>
            )}
          </button>
        </div>

        <button type="button" className="botao-acessar" onClick={validarAcesso}>
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
