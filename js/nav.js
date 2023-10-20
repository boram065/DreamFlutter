const navToggleI = nav_toggle.getElementsByTagName("i")[0];

nav_toggle.onclick = () => {
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");
}