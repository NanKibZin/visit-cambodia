import { topDestinations, highlights, popularPlaces } from "./data.js"; import { displayTopDestinations, displayHighlights, displayPopular } from "./display.js"; 
 
document.addEventListener("DOMContentLoaded", () => {     displayTopDestinations(topDestinations);     displayHighlights(highlights);     displayPopular(popularPlaces); 
 
    // Search functionality for Select Dropdown     const searchBtn = document.querySelector(".search-btn");     const selectLocation = document.querySelector(".search-item select"); 
 
    searchBtn.addEventListener("click", () => {         const value = selectLocation.value;         const filtered = popularPlaces.filter(place =>              place.location.toLowerCase().includes(value.toLowerCase()) 
        ); 
        displayPopular(filtered); 
    }); 
}); 
 
