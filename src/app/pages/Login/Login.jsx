import "./Login.css";
import LoginForm from "./Forms/LoginForm";
import CreateAccountForm from "./Forms/CreateAccountForm";

export default function Login() {
  return (
    <div id="login-blur">
      <div className="overflow-handler">
        <div className="login-wraper">
          <input type="radio" name="login" id="createAccnt" />
          <input type="radio" name="login" id="login" />
          <div className="login-scroll">
            <LoginForm />
            <CreateAccountForm />
          </div>
        </div>
      </div>
    </div>
  );
}
