import { Outlet, useLocation } from 'react-router-dom';
import '../assets/css/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout({props}) {
  let current_location = useLocation();
  const path = current_location.pathname;


  return (
    <div className="page">
        <div className={`main ${path != '/catalog' ? 'with-bottom-border' : ''} ${path == '/' ? 'with-stripes' : ''}`}>
            <Header />

            <Outlet />
        </div>
        <Footer />
    </div>
  );
}

export default MainLayout;
