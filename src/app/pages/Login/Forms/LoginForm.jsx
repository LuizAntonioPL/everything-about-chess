export default function LoginForm() {
  return (
    <form className="login-form" id="login-form">
      <a className="sair" href="#">
        {/* Adicionar ícone de sair */}
      </a>
      <div className="login-top">
        <h1>Login</h1>
        <p>ou</p>
        <label htmlFor="createAccnt">Criar conta</label>
      </div>
      <fieldset className="inputs-container">
        <div className="float-label">
          <input name="Usuário" id="user" placeholder=" " required="required" />
          <label htmlFor="user">Usuário</label>
        </div>
        <div className="float-label">
          <input
            name="Senha"
            type="password"
            id="password"
            placeholder=" "
            required="required"
          />
          <label htmlFor="password">Senha</label>
          <input type="checkbox" id="showPassword" />
          <label
            htmlFor="showPassword"
            className="showPassword"
            onclick="showPsswrd(this)"
          >
            <span className="material-symbols-outlined"> visibility </span>
          </label>
        </div>
        <div
          className="g-recaptcha"
          data-sitekey="a"
          style={{ margin: "auto auto", scale: "0.9" }}
        />
      </fieldset>
      <div className="buttons">
        <a href="#" style={{ fontSize: 20, width: 100, textAlign: "center" }}>
          Recuperar senha
        </a>
        <button
          className="buttonEnabled"
          id="submit"
          type="submit"
        >
          Entrar
        </button>
      </div>
    </form>
  );
}
