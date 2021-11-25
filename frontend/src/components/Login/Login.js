import './Login.css'

function Login() {
    return (
        <section id="login-section" >
            <form id="" method=''>
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <input id="login-button" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
};

export default Login;