const onMenueItemClick = (elementId) => {
    const numberOfItem = document.getElementsByClassName('nav-items').length;
    const navItems = document.querySelectorAll('.nav-items');
    navItems.forEach(navItem => {
        if (navItem.classList.contains('active')) {
            navItem.classList.remove('active');
        }
    });
     document.getElementById(elementId).classList.add('active');
}
const handleBurgerIconClick = (elementId) => {
    if (document.getElementById("all-links-navbar").style.visibility === 'hidden')
        document.getElementById("all-links-navbar").style.visibility = "visible";
    else
        document.getElementById("all-links-navbar").style.visibility = "hidden";
};
