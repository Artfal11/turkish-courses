const html = document.querySelector('html');

window.onscroll = function() {
    let header = document.querySelector('.header');
    let hero = document.querySelector('.hero');
    let heroHeight = hero.clientHeight;
    if(window.pageYOffset > heroHeight){
        header.classList.add('white');
    } else{
        header.classList.remove('white');
    }
}

let popupBtn = document.querySelectorAll('.popup-btn');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.close-popup');

popupBtn.forEach(item => {
    item.addEventListener("click", function() {
        popup.classList.add('open');
        html.classList.add('no-scroll');
    });
});
popupClose.addEventListener("click", function() {
    popup.classList.remove('open');
    html.classList.remove('no-scroll');
});

let tab = function () {
    let tabNav = document.querySelectorAll('.price-button'),
        tabContent = document.querySelectorAll('.price-text'),
        tabName;
    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });
    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};

tab();