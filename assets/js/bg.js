var body = document.querySelector('body');
var backgrounds = ['assets/img/bg/bg1.webp','assets/img/bg/bg2.webp','assets/img/bg/bg3.webp','assets/img/bg/bg4.webp','assets/img/bg/bg5.webp','assets/img/bg/bg7.webp','assets/img/bg/bg8.webp',];
var getBG = function(max) {
    var result = Math.round(Math.random() * max);
    return backgrounds[result]
}

body.style.backgroundImage = `url('${getBG(backgrounds.length - 1)}')`;





















