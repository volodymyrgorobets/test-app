export default function product(){
    return(

<div class="homepage-wrapper">
                <div class="container">
                    <div class="product-card">
                        <div class="status">Available</div>
                        <div class="image-container">
                            <img src="assets/images/image.svg"/>
                        </div>
                        <a class="left">
                            <img src="assets/images/left.svg"/>
                        </a>
                        <a class="right"><img src="assets/images/right.svg"/>
                        </a>
                       
                    </div>
                     <div class="product-conteiner">  
                     
    <h2 class="sidebar-title">Rental Details</h2>

    <div class="input-group">
        <p class="icon-location"> Pickup Location</p>
        <input type="text" placeholder="Enter location"/>
    </div>

    <div class="input-group">
        <p class="icon-date">Start Date & Time 
            </p>
        <input type="text" placeholder="Select date and time"/>
    </div>

    <div class="input-group">
        <div class="icon-time"> Rental Duration (Hours)</div>
        <div class="counter">
            <button type="button">−</button>
            <input type="number" value="4"/>
            <button type="button">+</button>
        </div>
        <small class="hint">Enter number of hours (1-168)</small>
    </div>

    <div class="input-group">
        <label><i class="icon-quantity"></i> Quantity</label>
        <div class="counter">
            <button type="button">−</button>
            <input type="number" value="1"/>
            <button type="button">+</button>
        </div>
    </div>

    <hr class="divider"/>

    <div class="price-details">
        <div class="price-row">
            <span>Price per hour</span>
            <span>$15/hour</span>
        </div>
        <div class="price-row">
            <span>Duration</span>
            <span>4 hours</span>
        </div>
        <div class="price-row">
            <span>Quantity</span>
            <span>x1</span>
        </div>
    </div>

    <div class="total-section">
        <span class="total-label">Total</span>
        <span class="total-amount">$60</span>
    </div>

    <button class="rent-button">Rent Now</button>

    <div class="info-footer">
        <span class="info-icon">ⓘ</span>
        <p>Pickup available within 2 hours of booking. Valid ID required. Security deposit may apply.</p>
    </div>

                 </div>
                </div>
            </div>
            
               )
            }