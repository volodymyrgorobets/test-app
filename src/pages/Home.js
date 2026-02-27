import data from '../data/users.json';

export default function Home() {
    return (
        <div className="homepage-wrapper">
            <div className="container">
                <div className="home-top">
                    <div className="home-top-text">
                        <h1>Rent Professional Tools. Build Your Dreams. Not Debt.</h1>
                        <p>Keep your budget intact. Minimize equipment costs, maximize your results.</p>
                        <a className="btn-gray" href="">Go to rent</a>
                    </div>
                    <div className="home-top-img">
                        <img src="assets/images/robot-circle.png" />
                    </div>
                </div>
                <div className="home-why-choose">
                    <h2>Why Choose ToolShare</h2>
                    <div className="home-why-choose-content">
                        <div className="why-choose-item">
                            <div className="why-choose-img"><img src="assets/images/why1.svg" /></div>
                            <div className="why-choose-title">Cost Savings</div>
                            <div className="why-choose-text">Pay only for the time you use, not the full price of the tool</div>
                        </div>
                        <div className="why-choose-item">
                            <div className="why-choose-img"><img src="assets/images/why2.svg" /></div>
                            <div className="why-choose-title">Reliability</div>
                            <div className="why-choose-text">All tools undergo inspection and maintenance</div>
                        </div>
                        <div className="why-choose-item">
                            <div className="why-choose-img"><img src="assets/images/why3.svg" /></div>
                            <div className="why-choose-title">24/7 Availability</div>
                            <div className="why-choose-text">Rent tools whenever it's convenient for you</div>
                        </div>
                        <div className="why-choose-item">
                            <div className="why-choose-img"><img src="assets/images/why4.svg" /></div>
                            <div className="why-choose-title">Simplicity</div>
                            <div className="why-choose-text">Easy rental process through mobile app</div>
                        </div>
                    </div>
                </div>
                <div className="home-reviews">
                    <h2>Customer Reviews</h2>
                    <div className="home-reviews-content">
                        <div className="home-review-item">
                            <p>Very convenient! Needed a hammer drill for a day, didn't want to buy it. ToolShare is the perfect solution!</p>
                            <div className="home-review-info">
                                <span className="home-review-author">Alexander K.</span>
                                <div className="home-review-rating"><img src="assets/images/stars.svg" /></div>
                            </div>
                        </div>
                        <div className="home-review-item">
                            <p>Tool quality is excellent, rental process is extremely simple. Highly recommend!</p>
                            <div className="home-review-info">
                                <span className="home-review-author">Maria S.</span>
                                <div className="home-review-rating"><img src="assets/images/stars.svg" /></div>
                            </div>
                        </div>
                        <div className="home-review-item">
                            <p>Used a grinder for renovation. Everything worked perfectly, fair price.</p>
                            <div className="home-review-info">
                                <span className="home-review-author">Igor T.</span>
                                <div className="home-review-rating"><img src="assets/images/stars.svg" /></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}