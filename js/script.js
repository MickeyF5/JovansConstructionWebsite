console.log("Jovans Construction Website Loaded");

const hubToggle = document.getElementById("hub-toggle");
const hubMenu = document.getElementById("hubMenu");

hubToggle.addEventListener("click", () => {

    hubMenu.classList.toggle("active");

});

const closeButton = document.getElementById("quoteButton");

closeButton.addEventListener("click", () => {

    hubMenu.classList.remove("active");

});

/* ================= REVIEW SLIDER ================= */

const reviews = document.querySelectorAll(".review");

const nextReview = document.getElementById("nextReview");

const prevReview = document.getElementById("prevReview");

let currentReview = 0;

function showReview(index){

    reviews.forEach(review => review.classList.remove("active"));

    reviews[index].classList.add("active");

}

nextReview.addEventListener("click", ()=>{

    currentReview++;

    if(currentReview >= reviews.length){

        currentReview = 0;

    }

    showReview(currentReview);

});

prevReview.addEventListener("click", ()=>{

    currentReview--;

    if(currentReview < 0){

        currentReview = reviews.length - 1;

    }

    showReview(currentReview);

});
