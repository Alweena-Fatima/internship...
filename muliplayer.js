// .icon {
//     position: absolute;
//     top: 50%;
//     left: 10px; /* Adjust the left value to position the icon as per your design */
//     transform : translateY(-50%);
//     z-index: 1; /* Ensure the icon appears above the hero image */
//   }
  
//   .icon i {
//     font-size: 36px; /* Adjust the font size of your icon */
//     color: #ffffff; /* Set the color of your icon */
//   }
  
// document.getElementById("menu-icon").addEventListener("click", function() {
//     document.querySelector(".navlist").classList.toggle("active");
// });
// Select the menu icon and navlist elements
const menuIcon = document.getElementById("menu-icon");
const navlist = document.querySelector(".navlist");

// Toggle the active class on navlist when menu icon is clicked
menuIcon.addEventListener("click", function(event) {
    navlist.classList.toggle("active");
    event.stopPropagation(); // Prevent the click event from reaching the document body
});

// Close navlist when clicking outside of it
document.body.addEventListener("click", function(event) {
    // Check if the clicked element is not inside the navlist
    if (!navlist.contains(event.target) && !menuIcon.contains(event.target)) {
        navlist.classList.remove("active"); // Close navlist
    }
});
// var check=prompt("Enter your name","Name")
// const element = document.getElementsByClassName("hello");
// element[0].innerHTML="Welcome, User "+check+"!";

// Prevent clicks inside navlist from closing it
// navlist.addEventListener("click", function(event) {
//     event.stopPropagation(); // Prevent the click event from reaching the document body
// });
