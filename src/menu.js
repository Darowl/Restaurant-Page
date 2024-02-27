const window = document.getElementById('content');

const addMenu = () => {
    window.dataset.window = 'Menu';
    window.innerHTML = `
    <article class="menu">
        <h1>menu</h1>
        <div class="menu-pack">
            <figure>
                <img src="../images/img menu pack.jpg" alt="menu pack">
            </figure>
            <div class="pack-text">
                <h1>Normal Combo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id porro odit, quas facilis sapiente libero suscipit quod excepturi facere.</p>
                <button type="button">Order</button>
            </div>
        </div>

        <div class="menu-pack">
            <figure>
                <img src="../images/img menu pack.jpg" alt="menu pack">
            </figure>
            <div class="pack-text">
                <h1>Normal Combo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id porro odit, quas facilis sapiente libero suscipit quod excepturi facere.</p>
                <button type="button">Order</button>
            </div>
        </div>

        <div class="menu-pack">
            <figure>
                <img src="../images/img menu pack.jpg" alt="menu pack">
            </figure>
            <div class="pack-text">
                <h1>Normal Combo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id porro odit, quas facilis sapiente libero suscipit quod excepturi facere.</p>
                <button type="button">Order</button>
            </div>
        </div>
        <button type="button">Watch all the menu</button>
    </article> 
    `
}

export {addMenu}