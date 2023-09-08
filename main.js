//------ Query selector vars for viewables -------//
var dishName = document.querySelector(".dish-name");


//------- Query selectors for buttons -------//
var menuSelectBtn = document.querySelector("#menu-btn");

var sides = [
    "Sweet Potato Fries",
    "Fried Okra",
    "Street Corn",
    "Smashed Potatoes",
    "Hummus"
];

var mainDishes = [
    "Chicken Marsala",
    "Chicken Tikka Masala",
    "Pork Carnitas",
    "Veggie Burger",
    "Vegan Pasta Pomodoro"
];

var desserts = [
    "Vegan Peanut Butter Chocolate Chip Cookies",
    "Red Velvet Cupcakes",
    "Pistachio Oat Squares",
    "Raspberry Cheesecake",
    "Cherry & Mint Sorbet"
];

var currentDish;

//-------- Event Listeners ------//




//------ Event Handler Functions ---------//

// Rewrite problem: Function that when user selects a radio option and hits the
// lets cook btn, it populates a random dish from the corresponding array
// Data used: strings from corresponding array


//Function for random array:
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function randomDish() {

}