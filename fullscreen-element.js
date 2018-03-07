(function() {
    document.addEventListener('keydown', fullScreenElement);

    fullScreenElementInjectStyles();
    fullScreenElementInjectClose();
})();

function fullScreenElementInjectStyles() {
    var style = document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = 'reveal-plugins/fullscreen-element/fullscreen-element.css';
    document.querySelector('head').appendChild(style);
}

function fullScreenElementInjectClose() {
    var close = document.createElement('div');
    close.innerText = 'X';
    close.classList.add('fullscreen-element-close');
    close.classList.add('controls');
    document.querySelector('.reveal ').appendChild(close);
    close.addEventListener('click', fullScreenElementHandle);
}

function fullScreenElement(event) {
    var key = 'g'; // f key
    var handler = event.key === key ? fullScreenElementHandle : fullScreenElementIgnore;

    handler();
}

function fullScreenElementIgnore() {
    return false;
}

function fullScreenElementHandle() {
    var currentSlide = Reveal.getCurrentSlide();

    if(!currentSlide.querySelector('[data-allow-full-screen]')) {
        return false
    }

    currentSlide.classList.toggle('fullscreen-element-slide');
    document.querySelector('.slides').classList.toggle('fullscreen-element-slides');
}

Reveal.addEventListener( 'slidechanged', function( event ) {
    event.previousSlide.classList.remove('fullscreen-element-slide');
    document.querySelector('.slides').classList.remove('fullscreen-element-slides');
} );