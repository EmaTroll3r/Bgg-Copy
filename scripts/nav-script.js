
const navItems = document.querySelectorAll('.nav-links-item');
const navMenu = document.querySelector('#nav-menu-container');
const quickbar = document.querySelector('#quickbar');

for(let item of navItems) {
    item.addEventListener('click', function() {
        item.classList.add('nav-show-Submenu');
    });
}


document.addEventListener('click', function() {
    for (let item of navItems) {
        item.classList.remove('nav-show-Submenu');
    }
}
,{ capture: true}
);


navMenu.addEventListener('click', function(event) {
    console.log(quickbar);
    quickbar.classList.toggle('quickbar-show');
});
    
