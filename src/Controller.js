(function exportController() {
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
        };
        renderPorts(ports) {
            const portsElement = document.querySelector('#ports');
            portsElement.style.width = '0px';
            ports.forEach((port, index) => {
                const newPortElement = document.createElement('div');
                newPortElement.className = 'port';
                newPortElement.dataset.portName = port.name;
                newPortElement.dataset.portIndex = index;
                portsElement.appendChild(newPortElement);
                const portsElementWidth = parseInt(portsElement.style.width, 10);
                portsElement.style.width = `${portsElementWidth + 256}px`;
            });
        };
        renderShip(ship) {
            const shipPortIndex = ship.currentPortNumber;
            const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
            const shipElement = document.querySelector("#ship");
            shipElement.style.top = `${portElement.offsetTop + 32}px`;
            shipElement.style.left = `${portElement.offsetLeft - 38}px`;
        };
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    };
}());