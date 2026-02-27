import { Outlet } from 'react-router-dom';
import '../assets/css/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout({props}) {
  return (
    <div className="page">
        <div className="main with-bottom-border with-stripes">
            <Header />

            <Outlet />
        </div>
        <Footer />
    </div>
  );
}

export default MainLayout;
