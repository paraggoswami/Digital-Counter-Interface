const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');
const counterDisplay = document.getElementById('counter-value');

let counter = 0;

function updateCounter() {
  counterDisplay.textContent = counter;
  handleButtonStates();
}

function handleButtonStates() {
  decrementBtn.disabled = counter === 0;
  
  incrementBtn.disabled = counter >= 10;
}

incrementBtn.addEventListener('click', function() {
  counter++;
  updateCounter();
});

decrementBtn.addEventListener('click', function() {
  counter--;
  updateCounter();
});

resetBtn.addEventListener('click', function() {
  counter = 0;
  updateCounter();
});

updateCounter();
