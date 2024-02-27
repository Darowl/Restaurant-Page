const window = document.getElementById('content');

const addAbout = () => {
    window.dataset.window = 'About';
    window.innerHTML = `
    <article class="about">
        <h1>About <span>Us</span></h1>
        <div class="about-info">
            <figure>
                <img src="../images/restaurant local.jpg" alt="menu pack">
            </figure>
            <ul class="info">
                <li class="info-item">
                    <img src="../images/phone-icon.svg" alt="icon-phone">
                    <p>123-456-7890</p>
                </li>
                <li class="info-item">
                    <img src="../images/email-icon.svg" alt="icon-mail">
                    <p>burgeRestaurant@email.com</p>
                </li>
                <li class="info-item">
                    <img src="../images/location-icon.svg" alt="icon-place">
                    <p>Imaginary Location, Random City</p>
                </li>
            </ul>
        </div>
    </article>
    `
}

export {addAbout}