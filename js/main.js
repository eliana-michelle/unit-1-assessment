/*----- constants -----*/
STARTING_INPUT = 1;
/*----- app's state (variables) -----*/
let currentCount = 0;
let currentInput;

/*----- cached element references -----*/
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let input = document.getElementById('user-input')
let counter = document.getElementById('counter');

/*----- event listeners -----*/
plus.addEventListener('click', add);
minus.addEventListener('click', subtract);

/*----- functions -----*/
init();

function init(){
  currentCount = 0;
  counter.append(currentCount);
  input.value = STARTING_INPUT;
}

function add(){
  let userInput = parseInt(input.value);
  console.log(typeof userInput);
  currentCount += userInput;
  counter.textContent = currentCount;
  if (currentCount >= 0){
    counter.style.color = "black";
  }
}

function subtract(){
  let userInput = parseInt(input.value);
  currentCount -= userInput;
  counter.textContent = currentCount;
  if (currentCount < 0){
    counter.style.color = "red";
  }
}
