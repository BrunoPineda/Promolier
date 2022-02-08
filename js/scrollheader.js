window.addEventListener("scroll", e => {
    var y = (window.pageYOffset);
    if (y > 10) {
        document.querySelector('.container-promotion').classList.add('container-promotion2');
        document.querySelector('.header').classList.add('header2');
        document.querySelector('.main').classList.add('main2');
        document.querySelector('.logo').classList.add('logo2');
        document.querySelector('.header-icons').classList.add('header-icons2');

    } else {
        document.querySelector('.header').classList.remove('header2');
        document.querySelector('.container-promotion').classList.remove('container-promotion2');
        document.querySelector('.header-icons').classList.remove('header-icons2');
    }
});