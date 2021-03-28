const onMenueItemClick = (elementId) => {
    const numberOfItem = document.getElementsByClassName('nav-items').length;
    for (let i = 0; i < numberOfItem; i++) {
        if (document.getElementsByClassName('nav-items')[i].classList.contains('active')) {
            document.getElementsByClassName('nav-items')[i].classList.remove('active');
        }
    }
    document.getElementById(elementId).classList.add('active');
}
const clickOnBurgerIcon = (elementId) => {
    if (document.getElementById("all-links-navbar").style.visibility === 'hidden')
        document.getElementById("all-links-navbar").style.visibility = "visible";
    else
        document.getElementById("all-links-navbar").style.visibility = "hidden";
};
