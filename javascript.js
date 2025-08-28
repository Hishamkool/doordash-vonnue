
/* tab selection */
const alltabs = document.querySelectorAll(".tabbar-head a");

alltabs.forEach(currenttab => {
    currenttab.addEventListener('click', e => {
        alltabs.forEach(t => t.classList.remove('selected'));
        e.preventDefault();
        currenttab.classList.add('selected');
    });
});

/* see more button and list visibility  */
const hiddenList = document.querySelectorAll('.see-more-top-cities');
const seeMoreBtn = document.getElementById('see-more-btn');
const seeMoreDiv = document.querySelector('.see-more');
const seeMoreText = seeMoreDiv.querySelector('span');
const arrow = document.getElementById('arrow');


seeMoreBtn.addEventListener("click", k => {

    hiddenList.forEach(hiddenItem => {
        hiddenItem.classList.toggle("enable");

    });
    arrow.classList.toggle('open');
    if (hiddenList[0].classList.contains('enable')) {
        seeMoreText.textContent = "See Less";

    } else {

        seeMoreText.textContent = "See More";
    }

    /* moving see more to the end of the list */
    /*  seeMoreDiv.parentNode.appendChild(seeMoreDiv); */
    console.log("clicked see more button");
});

/* disbling navigations for all a tags */
const a = document.querySelectorAll('a');
a.forEach(anchortag => {
    anchortag.addEventListener("click", e => {
        e.preventDefault();
    });
});

/* floating navigation bar */
document.addEventListener("DOMContentLoaded", () => {
    /* to make floating header visible after scrolling to search field */
    const floatingHeader = document.querySelector('.floating-header');
    const searchField = document.querySelector('.main-banner .search-field');

    window.addEventListener("scroll", () => {
        const targetLocation = searchField.offsetTop + searchField.offsetHeight;
        if (window.scrollY > targetLocation) {
            floatingHeader.classList.add("visible");
        } else {
            floatingHeader.classList.remove("visible");
        }
        console.log("page scrolled");
    });
});


/* changing login text to sign up for desktop in multiple places one in header and one in actions */

const loginBtns = document.querySelectorAll(".loginbtn");
const openAppBtns = document.querySelectorAll(".openappbtn");
const loginBottom = document.querySelector('.login-location-btn .llb-login-btn span');

function updateButtonText() {
    if (window.innerWidth >= 768) {
        loginBtns.forEach(
            login => {
                login.textContent = "Sign In";
                login.classList.add("open-btn");
            }
        );
        openAppBtns.forEach(open => {
            open.textContent = "Sign Up";
            open.classList.remove("open-btn");
        });

        loginBottom.textContent = "Sign In"
        
    } else {
        
        loginBtns.forEach(
            login => {
                login.textContent = "Login";
                login.classList.remove("open-btn");
            }
        );
        openAppBtns.forEach(open => {
            open.textContent = "Open App";
            open.classList.add("open-btn");
        });
        
        loginBottom.textContent = "Login"
    }
}
updateButtonText();

window.addEventListener("resize", updateButtonText);
