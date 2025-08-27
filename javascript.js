
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
const seeMoreContent = document.querySelector('.see-more-top-cities');
const seeMoreBtn = document.getElementById('see-more-btn');
const seeMoreDiv = document.querySelector('.see-more');
const seeMoreText = seeMoreDiv.querySelector('span');
const arrow = document.getElementById('arrow');
seeMoreBtn.addEventListener("click", k => {
    seeMoreContent.classList.toggle('enable');
    /* moving see more to the end of the list */
    seeMoreDiv.parentNode.appendChild(seeMoreDiv);
    arrow.classList.toggle('open');
    if (seeMoreContent.classList.contains('enable')) {
        seeMoreText.textContent = "See less";

    } else {

        seeMoreText.textContent = "See More";
    }
    console.log("clicked see more button");
});

/* disbling navigations for all a tags */
const a = document.querySelectorAll('a');
a.forEach(anchortag =>{
    anchortag.addEventListener("click" , e =>{
        e.preventDefault();
    });
});
