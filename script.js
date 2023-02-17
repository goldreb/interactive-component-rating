//when the button is clicked it should show the thank you card.

//grabbing the initial view container
const initialView = document.getElementById("initial-view");
//get the final view container
const finalView = document.getElementById("final-view");
//get the submit button
const submitBtn = document.getElementById("btn");
//get the ratings button and the id to select the rating
const ratings = document.querySelectorAll(".rating-btn");

const selectRating = document.getElementById("selected-rating");

//the final view is already hidden. we need to show finalview when the submit button is clicked
submitBtn.addEventListener("click", () => {
  finalView.classList.remove("hidden");
  initialView.style.display = "none";
});

//getting each rating button and when clicked the number selected should show in the final view container
ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    console.log(rating.innerHTML);
    rating.classList.toggle("active");
    
    // rating.classList.add('active')
    selectRating.innerHTML = rating.innerHTML;
  });
});
