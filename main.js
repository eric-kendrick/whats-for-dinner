//------ Query selector vars for viewables -------//
var dishName = document.querySelector('.dish-name');
var cookpotImg = document.querySelector('#cookpot');
var dishView = document.querySelector('.randomDish');

//------- Query selectors for buttons -------//
var menuSelectBtn = document.querySelector('#menu-btn');

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
menuSelectBtn.addEventListener('click', getDishSelection);



//------ Event Handler Functions ---------//

// Rewrite problem: Function that when user selects a radio option and hits the
// lets cook btn, it populates a random dish from the corresponding array
// Data used: strings from corresponding array


//Function for random array:
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function toggleCookpot() {
    cookpotImg.classList.remove('hidden');
    dishView.classList.add('hidden');
}

function toggleDish() {
    cookpotImg.classList.add('hidden');
    dishView.classList.remove('hidden');
}

function renderDishName() {
    console.log(currentDish);
    dishName.innerHTML = `${currentDish}!`;
}

// Function that identifies which radio btn is selected, then finds a random element from 
// the appropriate array

function getDishSelection(event) {
    event.preventDefault();
    var dishSelection = document.querySelector('input[name="dish-choice"]:checked').value;
    if (dishSelection === 'side') {
        currentDish = sides[getRandomIndex(sides)];
    }
    if (dishSelection === 'main') {
        currentDish = mainDishes[getRandomIndex(mainDishes)];
    }
    if (dishSelection === 'dessert') {
        currentDish = desserts[getRandomIndex(desserts)];
    }
    toggleDish();
    renderDishName(currentDish);

}
