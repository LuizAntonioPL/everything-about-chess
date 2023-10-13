export default function CreateAccountForm() {
  return (
    <form className="createAccnt">
      <div className="login-top">
        <h1>Criar conta</h1>
        <label htmlFor="login">Voltar</label>
      </div>
      <div className="overflow">
        <fieldset className="inputs-container">
          <div className="float-label">
            <input
              name="Usuário"
              id="user"
              placeholder=" "
              required="required"
            />
            <label htmlFor="user">Usuário</label>
          </div>
          <div className="float-label">
            <input
              type="email"
              name="Email"
              id="email"
              placeholder=" "
              required="required"
            />
            <label htmlFor="email">Email</label>
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
            <input type="checkbox" id="showPassword" onclick />
            <label
              htmlFor="showPassword"
              className="showPassword"
              onclick="showPsswrd(this)"
            >
              <span className="material-symbols-outlined">visibility</span>
            </label>
          </div>
          <p>Data de Nascimento</p>
          <input type="date" id="bDay" required="required" />
          <p>Gênero</p>
          <select id="gender" required="required">
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outro</option>
            <option>Prefiro não dizer</option>
          </select>
          <p>Quais jogos você mais gosta?</p>
          <div className="gamesRadio">
            <div>
              <label>Mundo aberto</label>
              <input type="checkbox" />
            </div>
            <div>
              <label>Sobrevivência</label>
              <input type="checkbox" />
            </div>
            <div>
              <label>First Person Shooters</label>
              <input type="checkbox" />
            </div>
            <div>
              <label>Roleplaying Games</label>
              <input type="checkbox" />
            </div>
            <div>
              <label>Tabuleiro</label>
              <input type="checkbox" />
            </div>
            <div>
              <label>Cartas</label>
              <input type="checkbox" />
            </div>
          </div>
          <button type="submit" className="buttonEnabled">
            Criar conta
          </button>
        </fieldset>
      </div>
    </form>
  );
}
