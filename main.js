var dishName = document.querySelector('.dish-name');
var cookpotImg = document.querySelector('#cookpot');
var dishView = document.querySelector('.randomDish');
var radioInputs = document.querySelector('.dish-selection');

var menuSelectBtn = document.querySelector('#menu-btn');
var clearButton = document.querySelector('#dish-clear-btn');

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
var meal;

radioInputs.addEventListener('click', handleFormState);
menuSelectBtn.addEventListener('click', renderDishSelection);
clearButton.addEventListener('click', toggleCookpot);

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
    if (currentDish.includes('dessert')) {
        dishName.innerHTML = currentDish;
    } else {
        dishName.innerHTML = `${currentDish}!`;
    }
}

function handleFormState() {;
    menuSelectBtn.removeAttribute('disabled');
}

function renderDishSelection(event) {
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
    if (dishSelection === 'entire-meal') {
        var side = sides[getRandomIndex(sides)];
        var main = mainDishes[getRandomIndex(mainDishes)];
        var dessert = desserts[getRandomIndex(desserts)];
        currentDish = `${main} with a side of ${side} and ${dessert} for dessert!`;
    }
    toggleDish();
    renderDishName(currentDish);
}

