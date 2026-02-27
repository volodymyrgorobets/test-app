

export default function render() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-menu">
                    <div className="footer-menu-section">
                        <div className="footer-logo">
                            <a href=""><img src="assets/images/logo.png" /></a>
                            <span>ToolShare</span>
                        </div>
                        <p className="footer-text">Rent professional tools at affordable rates. Build your dreams without breaking the bank.</p>
                        <div className="social-links">
                            <a href=""><img src="assets/images/facebook.svg" alt="Facebook" /></a>
                            <a href=""><img src="assets/images/twitter.svg" alt="X" /></a>
                            <a href=""><img src="assets/images/instagram.svg" alt="Instagram" /></a>
                            <a href=""><img src="assets/images/In.svg" alt="Linkedin" /></a>
                        </div>
                    </div>
                    <div className="footer-menu-section">
                        <div className="footer-menu-title">Resources</div>
                            <div className="footer-menu-links">
                            <a className="footer-menu-link" href="/faq">FAQ</a>
                            <a className="footer-menu-link" href="">Blog</a>
                            <a className="footer-menu-link" href="">Safety Guidelines</a>
                            <a className="footer-menu-link" href="">Box Locations</a>
                            </div>
                    </div>
                    <div className="footer-menu-section">
                        <div className="footer-menu-title">Contact</div>
                            <div className="footer-menu-links with-icons">
                            <a className="footer-menu-link tel" href="tel:+1(234)567-890">+1 (234) 567-890</a>
                            <a className="footer-menu-link email" href="mailto:support@toolshare.com">support@toolshare.com</a>
                            <a className="footer-menu-link address" href="">123 Builder Street <br/> New York, NY 10001</a>
                            </div>
                    </div>
                </div>
                <div className="bottom-line">
                    <div className="copyright">© 2025 ToolShare. All rights reserved.</div>
                    <div className="tos-links">
                        <a className="footer-menu-link" href="">Privacy Policy</a>
                        <a className="footer-menu-link" href="">Terms of Service</a>
                        <a className="footer-menu-link" href="">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}