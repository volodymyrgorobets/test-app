export default function Catalog() {
    return (
        <div className="market-wrapper">
            <div className="container">
                <div className="market-top">
                    <h1>Explore Our Tools</h1>
                    <div className="search-box">
                        <form action="">
                            <input type="text" name="search" value="" placeholder="Search for Tools" />
                            <button type="submit"></button>
                        </form>
                    </div>
                </div>
                <div className="market-content">
                    <div className="filters">
                        <div className="filter-top">
                            <div className="filter-title">Filters</div>
                        </div>
                        <div className="filter-section">
                            <div className="filter-section-title">Price Range <span className="f-value">$0 - $100</span></div>
                            <div className="filter-range">
                                <div className="range-select"></div>
                            </div>
                        </div>
                        <div className="filter-section">
                            <div className="filter-section-title">Brand</div>
                            <div className="filter-checkboxes">
                                <div className="filter-checkbox">
                                    <input type="checkbox" id="checkbox1" />
                                    <label for="checkbox1">Bosch</label>
                                </div>
                                <div className="filter-checkbox">
                                    <input type="checkbox" id="checkbox2" />
                                    <label for="checkbox2">DeWalt</label>
                                </div>
                                <div className="filter-checkbox">
                                    <input type="checkbox" id="checkbox3" />
                                    <label for="checkbox3">Makita</label>
                                </div>
                                <div className="filter-checkbox">
                                    <input type="checkbox" id="checkbox4" />
                                    <label for="checkbox4">Ryobi</label>
                                </div>
                            </div>
                        </div>
                        <div className="filter-section">
                            <div className="filter-section-title">Type</div>
                            <div className="filter-tags">
                                <a className="filter-tag">Polisher</a>
                                <a className="filter-tag">Drill</a>
                                <a className="filter-tag">Grinder</a>
                                <a className="filter-tag">Sander</a>
                                <a className="filter-tag">Jigsaw</a>
                                <a className="filter-tag">Scalant</a>
                            </div>
                        </div>
                        <div className="filter-section">
                            <div className="filter-section-title">Features</div>
                            <div className="filter-tags">
                                <a className="filter-tag">Cordless</a>
                                <a className="filter-tag">Ergonomic Design</a>
                                <a className="filter-tag">Variable Speed</a>
                                <a className="filter-tag">Dust Collection</a>
                                <a className="filter-tag">High Power</a>
                                <a className="filter-tag">LED Light</a>
                            </div>
                        </div>
                        <div className="filter-section">
                            <div className="filter-section-title">Availability</div>
                            <div className="filter-checkboxes">
                                <div className="filter-checkbox">
                                    <input type="checkbox" id="checkbox6" />
                                    <label for="checkbox6">Available Now</label>
                                </div>
                                <div className="filter-checkbox">
                                    <input type="checkbox" id="checkbox7" />
                                    <label for="checkbox7">Limited Stock</label>
                                </div>
                                <div className="filter-checkbox">
                                    <input type="checkbox" id="checkbox8" />
                                    <label for="checkbox8">Pre-Order</label>
                                </div>
                            </div>
                        </div>
                        <div className="filter-buttons">
                            <a className="filter-btn-gray" href="#">Reset All</a>
                            <a className="filter-btn-orange" href="#">Apply</a>
                        </div>
                    </div>
                    <div className="products-list">
                        <div className="product-item">
                            <div className="pi-image">
                                <img src="assets/images/product-image.png" />
                                <div className="pi-availability in-stock">Available</div>
                            </div>
                            <div className="pi-info">
                                <div className="pi-title">Cordless Polishers</div>
                                <div className="pi-brand">DeWalt</div>
                                <div className="pi-desc">Achieve a professional shine with our range of ergonomic</div>
                                <div className="pi-rating">
                                    <img src="assets/images/cat-stars.svg" className="pi-stars" />
                                    <div className="pi-reviews">158</div>
                                </div>
                                <div className="pi-btn">
                                    <a href="product-details.html">Rent $75/day</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="pi-image">
                                <img src="assets/images/product-image.png" />
                                <div className="pi-availability in-stock">Available</div>
                            </div>
                            <div className="pi-info">
                                <div className="pi-title">Cordless Polishers</div>
                                <div className="pi-brand">DeWalt</div>
                                <div className="pi-desc">Achieve a professional shine with our range of ergonomic</div>
                                <div className="pi-rating">
                                    <img src="assets/images/cat-stars.svg" className="pi-stars" />
                                    <div className="pi-reviews">158</div>
                                </div>
                                <div className="pi-btn">
                                    <a href="product-details.html">Rent $75/day</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="pi-image">
                                <img src="assets/images/product-image.png" />
                                <div className="pi-availability in-stock">Available</div>
                            </div>
                            <div className="pi-info">
                                <div className="pi-title">Cordless Polishers</div>
                                <div className="pi-brand">DeWalt</div>
                                <div className="pi-desc">Achieve a professional shine with our range of ergonomic</div>
                                <div className="pi-rating">
                                    <img src="assets/images/cat-stars.svg" className="pi-stars" />
                                    <div className="pi-reviews">158</div>
                                </div>
                                <div className="pi-btn">
                                    <a href="product-details.html">Rent $75/day</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="pi-image">
                                <img src="assets/images/product-image.png" />
                                <div className="pi-availability in-stock">Available</div>
                            </div>
                            <div className="pi-info">
                                <div className="pi-title">Cordless Polishers</div>
                                <div className="pi-brand">DeWalt</div>
                                <div className="pi-desc">Achieve a professional shine with our range of ergonomic</div>
                                <div className="pi-rating">
                                    <img src="assets/images/cat-stars.svg" className="pi-stars" />
                                    <div className="pi-reviews">158</div>
                                </div>
                                <div className="pi-btn">
                                    <a href="product-details.html">Rent $75/day</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="pi-image">
                                <img src="assets/images/product-image.png" />
                                <div className="pi-availability limited">Limited</div>
                            </div>
                            <div className="pi-info">
                                <div className="pi-title">Cordless Polishers</div>
                                <div className="pi-brand">DeWalt</div>
                                <div className="pi-desc">Achieve a professional shine with our range of ergonomic</div>
                                <div className="pi-rating">
                                    <img src="assets/images/cat-stars.svg" className="pi-stars" />
                                    <div className="pi-reviews">158</div>
                                </div>
                                <div className="pi-btn">
                                    <a href="product-details.html">Rent $75/day</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="pi-image">
                                <img src="assets/images/product-image.png" />
                                <div className="pi-availability pre-order">Pre-Order</div>
                            </div>
                            <div className="pi-info">
                                <div className="pi-title">Cordless Polishers</div>
                                <div className="pi-brand">DeWalt</div>
                                <div className="pi-desc">Achieve a professional shine with our range of ergonomic</div>
                                <div className="pi-rating">
                                    <img src="assets/images/cat-stars.svg" className="pi-stars" />
                                    <div className="pi-reviews">158</div>
                                </div>
                                <div className="pi-btn">
                                    <a href="product-details.html">Rent $75/day</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}