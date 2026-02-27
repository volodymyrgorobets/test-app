import {logo_url} from '../Settings';
import {Link} from 'react-router-dom';

export default function render() {
    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <div className="main-logo">
                    <a href="/" alt="">
                        <img src={logo_url} />
                    </a>
                    <span>ToolShare</span>
                </div>
                <nav>
                    <div className="menu-item">
                        <a href="">Catalog</a>
                    </div>
                    <div className="menu-item">
                        <a href="/about">About Us</a>
                    </div>
                    <div className="menu-item">
                        <a href="">How it Works</a>
                    </div>
                    <div className="menu-item">
                        <a href="">Support</a>
                    </div>
                </nav>
                <div className="account-menu">
                    <a href="#" className="login-btn">
                        <img src="assets/images/login-icon.png" />
                    </a>
                </div>
            </div>
        </div>
    );
}