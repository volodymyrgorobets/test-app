import { Outlet, useLocation } from 'react-router-dom';
import '../assets/css/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Modals/Login';
import Register from '../components/Modals/Register';
import { useState } from 'react';


function MainLayout({props}) {
  let current_location = useLocation();
  const path = current_location.pathname;

  const [show_login_modal, setShowLoginModal] = useState(false);
  const[showRegisterModal, setShowRegisterModal] = useState(false)
  return (
    <div className="page">
        <div className={`main ${path != '/catalog' ? 'with-bottom-border' : ''} ${path == '/' ? 'with-stripes' : ''}`}>
            <Header showLogin={() => setShowLoginModal(true)} />

            <Outlet />
        </div>
        <Footer />
        <Register isOpen={showRegisterModal}  closeModal={() => setShowRegisterModal(false)} openLogin={()=>setShowLoginModal(true)}/>
    
        
        <Login isOpen={show_login_modal}  closeModal={() => setShowLoginModal(false)} openRegister={()=>setShowRegisterModal(true)}/>
    </div>
  );
}

export default MainLayout;
