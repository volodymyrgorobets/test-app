export default function render(){
    return (
        <div className="modal">
            <div className="modal-content" id="login">
                <div className="login-card">
                    <div className="logo">
                        <img src="assets/images/TS.svg" />
                    </div>

                    <div className="input-field">
                        <label>Name</label>
                        <input type="text" />
                    </div>

                    <div className="input-field">
                        <label>Email</label>
                        <input type="email" />
                    </div>

                    <div className="input-field">
                        <label>Password</label>
                        <input type="password" />
                    </div>

                    <button className="btn-login">Log in</button>

                    <a href="#" className="reg-link">register a new user</a>

                    <div className="divider"></div>

                    <div className="social-login">
                        <img src="assets/images/google.svg" />
                        <span className="color-google">or sign up with</span>
                    </div>
                </div>
            </div>
        </div>
    );
}