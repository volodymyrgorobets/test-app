import {logo_url} from '../Settings';
import {Link} from 'react-router-dom';

export default function render() {
    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <a className="main-logo" href="/" alt="">
                    <img src={logo_url} />
                    <span>ToolShare</span>
                </a>
                <nav>
                    <div className="menu-item">
                        <a href="/catalog">Catalog</a>
                    </div>
                    <div className="menu-item">
                        <a href="/about">About Us</a>
                    </div>
                    <div className="menu-item">
                        <a href="/how-it-works">How it Works</a>
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