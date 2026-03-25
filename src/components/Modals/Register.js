import { useState } from 'react';

export default function Register({isOpen, closeModal, openLogin}){
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
        let input = new FormData(e.target);
      await submitForm(input);
    setError(null);
      setStatus('success');
      setTimeout(closeModal,1500);
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }
    return (
        <div className={`modal ${isOpen ? 'in' : ''}`}>
            <div className="modal-content" id="login">
                <div className="login-card">
                    <div className="logo">
                        <img src="assets/images/TS.svg"/>
                    </div>
                    <div className="close-modal" onClick={closeModal}>x</div>
                    <form onSubmit={handleSubmit}>
                        {error !== null ? (
                        <p className="error-message">{error.message}</p>
                        ) : ('')
                        }
                        {status === "success" ? (
                        <p className="success-message">registration completed!</p>
                        ) : ('')
                        }
                    <div className="input-field">
                        <label>Name</label>
                        <input type="text" name='name'/>
                    </div>

                    <div className="input-field">
                        <label>Email</label>
                        <input type="text" name='email'/>
                    </div>

                    <div className="input-field">
                        <label>Password</label>
                        <input type="password" name='password'/>
                    </div>

                    <div className="input-field">
                        <label>Confirm Password</label>
                        <input type="password" name='secondPassword'/>
                    </div>
                      
                    <button className="btn-login" >Register</button>
                     </form>
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
 
function submitForm(input) {
    //console.log(input); return;
    //const name = input.get("name");
    //const email = input.get("email");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let name = input.get("name");
      let email = input.get("email");
      let password = input.get("password");
      let passwordConfirm = input.get("secondPassword");


      if (name === '' || email === '' || password === '' || passwordConfirm === '') {
        reject(new Error('please fill in required fields  '));
      } else if (!validateEmail(email)){
        reject(new Error('email field is invalid'))
      } else if (password.length < 8 ) {
        reject(new Error('password should be at least 8 symbols'))

      } else if (password != passwordConfirm ){
        reject(new Error('password miss match'))

      } else {
        resolve();
      }
    }, 1500);
  });
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}