export default function render() {
    return (
        <div>
            <section className="about">
                <div className="container">
                    <h1 className="title">About Us</h1>
                    <p className="second-title">Revolutionizing tool access for everyone</p>
                    <div className="about-content">
                        <div className="about-text">
                            <h2>Who We Are</h2>
                            <p>
                            ToolShare is revolutionizing the way professionals and DIY enthusiasts
                            access the tools they need. Founded in 2025, we recognized that buying
                            expensive equipment for occasional use doesn't make financial sense for
                            most people.
                            </p>
                            <p>
                            Our innovative ToolShare Boxes are strategically located throughout the city,
                            providing 24/7 access to professional-grade tools at affordable rental rates.
                            No more storage hassles, no more buying tools you use once.
                            </p>
                            <p>
                            We believe in sustainability, accessibility, and empowering people to bring
                            their projects to life without the burden of equipment ownership.
                            </p>
                        </div>

                        <div className="about-stats">
                            <div className="stat-card">
                            <h3>50+</h3>
                            <p>ToolShare Boxes</p>
                            </div>
                            <div className="stat-card">
                            <h3>200+</h3>
                            <p>Professional Tools</p>
                            </div>
                            <div className="stat-card">
                            <h3>10K+</h3>
                            <p>Happy Users</p>
                            </div>
                            <div className="stat-card">
                            <h3>24/7</h3>
                            <p>Availability</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="second-container">
                <h2>Our story</h2>
                <div className="story-box">
                    <p>It all started when our founder, trying to complete a simple home renovation, realized he needed to spend over $500 on tools he'd only use once. That's when the idea for ToolShare was born.</p>

                    <p>We spent two years developing our secure, user-friendly ToolShare Boxes and building partnerships with leading tool manufacturers. In 2020, we launched our first location in downtown New York, and the response was overwhelming.</p>

                    <p>Today, we're proud to serve thousands of customers across the city, helping them save money, reduce waste, and complete their projects with confidence.</p>

                </div>
                <div className="mission">
                    <h2>Our Mission</h2>
                    <p>To make professional tools accessible to everyone, reducing waste and promoting sustainability while helping people complete their projects without breaking the bank. We envision a future where tool ownership is unnecessary, and quality equipment is always just a tap away.</p>
                </div>
                <h2>Our Values</h2>
                <div className="values">
                    <div className="value-card">
                    <div className="value-icons">💡</div>
                    <h3>Innovation</h3>
                    <p>Constantly improving our technology and service to provide the best rental experience</p>
                    </div>
                    <div className="value-card">
                    <div className="value-icons">🌱</div>
                    <h3>Sustainability</h3>
                    <p>Reducing waste through shared resources and promoting responsible consumption</p>
                    </div>
                    <div className="value-card">
                    <div className="value-icons">🤝</div>
                    <h3>Community</h3>
                    <p>Building a community of makers, builders, and creators who support each other</p>
                    </div>
                </div>
            </div>
        </div>
    );
}