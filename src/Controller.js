class Controller {
    constructor () {
    };
    initialiseSea() {
        const backgrounds = [
            "./assets/water1.png",
            "./assets/water0.png"
        ]
        let backgroundIndex = 0;
        window.setInterval(() => {
            document.querySelector('#viewport').style.backgroundImage = `url("${backgrounds[backgroundIndex % backgrounds.length]}")`;
            backgroundIndex += 1;
        }, 1000);
    }
}