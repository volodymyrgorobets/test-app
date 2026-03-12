export default function render({isOpen, closeModal, openLogin}){
    return (
        <div className={`modal ${isOpen ? 'in' : ''}`}>
            <div className="modal-content" id="login">
                <div className="login-card">
                    <div className="logo">
                        <img src="assets/images/TS.svg"/>
                    </div>
                    <div className="close-modal" onClick={closeModal}>x</div>
                    <div className="input-field">
                        <label>Name</label>
                        <input type="text"/>
                    </div>

                    <div className="input-field">
                        <label>Email</label>
                        <input type="email"/>
                    </div>

                    <div className="input-field">
                        <label>Password</label>
                        <input type="password"/>
                    </div>

                    <div className="input-field">
                        <label>Confirm Password</label>
                        <input type="password"/>
                    </div>

                    <button className="btn-login" >Register</button>

                    <a href="#" className="reg-link" onClick={()=>{openLogin();closeModal();}}>already have an account? log in</a>

                    <div className="divider"></div>

                    <div className="social-login">
                        <img src="assets/images/google.svg"/>
                            <span className="color-google">or sign up with</span>
                    </div>
                </div>
            </div>
        </div>
    )
        
}