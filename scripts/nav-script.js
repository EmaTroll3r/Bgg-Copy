
const navItems = document.querySelectorAll('.nav-links-item');
const navMenu = document.querySelector('#nav-menu-container');
const quickbar = document.querySelector('#quickbar');

function showSubmenu(event) {
    event.currentTarget.classList.toggle('nav-show-Submenu');
}

function hideAllSubMenu() {
    for (let item of navItems) {
        item.classList.remove('nav-show-Submenu');
    }
}

function toggleQuickbar() {
    quickbar.classList.toggle('quickbar-show');
}

for(let item of navItems) {
    item.addEventListener('click', showSubmenu);
}

document.addEventListener('click', hideAllSubMenu,{ capture: true});

navMenu.addEventListener('click', toggleQuickbar);
    
