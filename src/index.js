import { addHome } from "./home";
import { addMenu } from "./menu";
import { addAbout } from "./about";


const buttons = document.querySelectorAll('.btn-header');
const window = document.getElementById('content').dataset.window;

if(window === 'null') {
    addHome()
}

buttons.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        let nameData = e.target.dataset.btn;
        let nameClass = e.target.textContent;
        
        
        if(nameData === nameClass && nameData !== window && nameClass !== window) {
            
            if(nameData === "Home") {
                console.log('its home');
                addHome()
            }
            if(nameData === "Menu") {
                addMenu();
                console.log('its Menu');
            }
            if(nameData === "About") {
                addAbout()
                console.log('its About');
            }
        }
        
    })
    // console.log(btn.clas);
});
