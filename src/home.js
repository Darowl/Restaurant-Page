const window = document.getElementById('content');

const addHome = () => {
    window.dataset.window = 'Home';
    window.innerHTML = `
    <article class="home">
            <h1>HAM<span>BURGER</span></h1>
            <div class="home-promotion">
                <figure class="promtion-img">
                    <img src="../images/img promotion.jpg" alt="hamburger promotion">
                </figure>
                <button type="button" class="promotion-button">Order Now</button>
            </div>
            <div class="home-schedule">
                <div class="schedule-reservation">
                    <h1>schedule</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit dolore aperiam exercitationem culpa? Commodi quod ipsum explicabo voluptatum quisquam a?</p>
                    <button>Make Your Reservation</button>
                </div>
                <div class="schedule-text">
                    <ul>
                        <li>Monday: 10:00 - 22:00</li>
                        <li>Tuesday: 10:00 - 22:00</li>
                        <li>Wednesday: 10:00 - 22:00</li>
                        <li>Thursday: 10:00 - 22:00</li>
                        <li>Friday: 10:00 - 22:00</li>
                        <li>Saturday: 10:00 - 18:00</li>
                        <li>Sunday: 10:00 - 18:00</li>
                    </ul>
                </div>
            </div>
            <div class="home-location">
                <div class="location-text">
                    <p>123 False Direction, Nowhere, Imaginary City</p>
                </div>
                
            </div>
        </article>
    `
}

export {
    addHome
}