// This script handles the functionality of a dropdown menu.
document.querySelectorAll('.menu__itemWrapper').forEach(wrapper => {
    wrapper.addEventListener('click', () => {
        const dropdown = wrapper.nextElementSibling;
        const isActive = dropdown && dropdown.classList.contains('active');
        const menuIcon = wrapper.querySelector('.menu__icon');
        const menuTitle = wrapper.querySelector('.menu__title');

        // Remove 'active' class from all dropdowns, icons, and titles
        document.querySelectorAll('.menu__dropdown.active').forEach(activeDropdown => {
            activeDropdown.classList.remove('active');
        });
        document.querySelectorAll('.menu__icon.active').forEach(activeIcon => {
            activeIcon.classList.remove('active');
        });
        document.querySelectorAll('.menu__title.active').forEach(activeTitle => {
            activeTitle.classList.remove('active');
        });

        // If it wasn't already active, open it and activate icon/title
        if (dropdown && !isActive && dropdown.classList.contains('menu__dropdown')) {
            dropdown.classList.add('active');
            if (menuIcon) menuIcon.classList.add('active');
            if (menuTitle) menuTitle.classList.add('active');
        }
    });
});

// Remove all 'active' classes when mouse leaves the navBar
const navBar = document.querySelector('.navBar');
if (navBar) {
    navBar.addEventListener('mouseleave', () => {
        document.querySelectorAll('.menu__dropdown.active').forEach(activeDropdown => {
            activeDropdown.classList.remove('active');
        });
        document.querySelectorAll('.menu__icon.active').forEach(activeIcon => {
            activeIcon.classList.remove('active');
        });
        document.querySelectorAll('.menu__title.active').forEach(activeTitle => {
            activeTitle.classList.remove('active');
        });
    });
}


const infoBoxbutton = document.querySelector('.specification__titleBar');

document.querySelectorAll('.specification__titleBar').forEach(button => {
    button.addEventListener('click', () => {
            const infoBox = button.nextElementSibling;
            infoBox.classList.toggle('active');
            const specButton = button.lastElementChild;
            specButton.classList.toggle('active');
        });
    });

