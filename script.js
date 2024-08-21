const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () =>{
    navbarNav.classList.toggle('active');
};

const hambuger = document.querySelector('#hamburger-menu');

document.addEventListener('click',function (e){

    if (!hambuger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search');
    const menuBtn = document.getElementById('hamburger-menu');

    


    const searchBar = document.querySelector('.search-bar');

    searchBtn.addEventListener('click', function(event) {
        event.preventDefault();
        searchBar.classList.toggle('active');
    });

    cartBtn.addEventListener('click', function(event) {
        event.preventDefault();
        searchBar.classList.remove('active');
    });

    menuBtn.addEventListener('click', function(event) {
        event.preventDefault();
        searchBar.classList.remove('active');

    });
});