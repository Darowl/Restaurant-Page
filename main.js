(()=>{"use strict";const n=document.getElementById("content"),i=()=>{n.dataset.window="Home",n.innerHTML='\n    <article class="home">\n            <h1>HAM<span>BURGER</span></h1>\n            <div class="home-promotion">\n                <figure class="promtion-img">\n                    <img src="../images/img promotion.jpg" alt="hamburger promotion">\n                </figure>\n                <button type="button" class="promotion-button">Order Now</button>\n            </div>\n            <div class="home-schedule">\n                <div class="schedule-reservation">\n                    <h1>schedule</h1>\n                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit dolore aperiam exercitationem culpa? Commodi quod ipsum explicabo voluptatum quisquam a?</p>\n                    <button>Make Your Reservation</button>\n                </div>\n                <div class="schedule-text">\n                    <ul>\n                        <li>Monday: 10:00 - 22:00</li>\n                        <li>Tuesday: 10:00 - 22:00</li>\n                        <li>Wednesday: 10:00 - 22:00</li>\n                        <li>Thursday: 10:00 - 22:00</li>\n                        <li>Friday: 10:00 - 22:00</li>\n                        <li>Saturday: 10:00 - 18:00</li>\n                        <li>Sunday: 10:00 - 18:00</li>\n                    </ul>\n                </div>\n            </div>\n            <div class="home-location">\n                <div class="location-text">\n                    <p>123 False Direction, Nowhere, Imaginary City</p>\n                </div>\n                \n            </div>\n        </article>\n    '},e=document.getElementById("content"),t=document.getElementById("content"),o=document.querySelectorAll(".btn-header"),a=document.getElementById("content").dataset.window;"null"===a&&i(),o.forEach((n=>{n.addEventListener("click",(n=>{let o=n.target.dataset.btn,s=n.target.textContent;o===s&&o!==a&&s!==a&&("Home"===o&&(console.log("its home"),i()),"Menu"===o&&(e.dataset.window="Menu",e.innerHTML='\n    <article class="menu">\n        <h1>menu</h1>\n        <div class="menu-pack">\n            <figure>\n                <img src="../images/img menu pack.jpg" alt="menu pack">\n            </figure>\n            <div class="pack-text">\n                <h1>Normal Combo</h1>\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id porro odit, quas facilis sapiente libero suscipit quod excepturi facere.</p>\n                <button type="button">Order</button>\n            </div>\n        </div>\n\n        <div class="menu-pack">\n            <figure>\n                <img src="../images/img menu pack.jpg" alt="menu pack">\n            </figure>\n            <div class="pack-text">\n                <h1>Normal Combo</h1>\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id porro odit, quas facilis sapiente libero suscipit quod excepturi facere.</p>\n                <button type="button">Order</button>\n            </div>\n        </div>\n\n        <div class="menu-pack">\n            <figure>\n                <img src="../images/img menu pack.jpg" alt="menu pack">\n            </figure>\n            <div class="pack-text">\n                <h1>Normal Combo</h1>\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id porro odit, quas facilis sapiente libero suscipit quod excepturi facere.</p>\n                <button type="button">Order</button>\n            </div>\n        </div>\n        <button type="button">Watch all the menu</button>\n    </article> \n    ',console.log("its Menu")),"About"===o&&(t.dataset.window="About",t.innerHTML='\n    <article class="about">\n        <h1>About <span>Us</span></h1>\n        <div class="about-info">\n            <figure>\n                <img src="../images/restaurant local.jpg" alt="menu pack">\n            </figure>\n            <ul class="info">\n                <li class="info-item">\n                    <img src="../images/phone-icon.svg" alt="icon-phone">\n                    <p>123-456-7890</p>\n                </li>\n                <li class="info-item">\n                    <img src="../images/email-icon.svg" alt="icon-mail">\n                    <p>burgeRestaurant@email.com</p>\n                </li>\n                <li class="info-item">\n                    <img src="../images/location-icon.svg" alt="icon-place">\n                    <p>Imaginary Location, Random City</p>\n                </li>\n            </ul>\n        </div>\n    </article>\n    ',console.log("its About")))}))}))})();