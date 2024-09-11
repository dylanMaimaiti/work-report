
let allInternCards = document.querySelectorAll(".homePageInternCard");


allInternCards.forEach(internCard => {
    internCard.style.border="2px solid black";
    internCard.addEventListener("click", (event) => {
        let temp = "./" + internCard.dataset.newpage;
        window.location.href=temp;
    });

    internCard.addEventListener("mouseenter", (event) => {
        internCard.style.border="2px solid #85b6c9";
    });

    internCard.addEventListener("mouseleave", (event) => {
        internCard.style.border="2px solid black";
    })
});