// ======================
// Part 1: JavaScript Basics
// ======================

// Variable declarations
let userName = "Student";
let isLoggedIn = true;
let age = 20;

// Conditional logic using if/else
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are underage.");
}

// DOM interaction using conditionals
function showGreeting() {
  const greeting = document.getElementById("greeting");
  if (isLoggedIn) {
    greeting.textContent = `Hello, ${userName}! Welcome back.`;
  } else {
    greeting.textContent = `Hello, Guest. Please log in.`;
  }
}

// ======================
// Part 2: Functions
// ======================

// Function 1: Add two numbers
function calculateTotal() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const sum = n1 + n2;

  document.getElementById("result").textContent = `The total is: ${sum}`;
}

// Function 2: Format a string
function formatString(str) {
  return str.trim().toUpperCase();
}
console.log(formatString("  hello world  ")); // Logs: HELLO WORLD

// ======================
// Part 3: Loops
// ======================

// Example 1: for loop to display list
function displayItems() {
  const items = ["Apples", "Bananas", "Cherries"];
  const list = document.getElementById("itemList");
  list.innerHTML = ""; // Clear previous items

  for (let i = 0; i < items.length; i++) {
    const li = document.createElement("li");
    li.textContent = items[i];
    list.appendChild(li);
  }
}

// Example 2: while loop for countdown
function startCountdown() {
  let count = 5;
  const countdownEl = document.getElementById("countdown");
  countdownEl.textContent = "";

  const interval = setInterval(() => {
    countdownEl.textContent = `Countdown: ${count}`;
    count--;

    if (count < 0) {
      clearInterval(interval);
      countdownEl.textContent = "Time's up!";
    }
  }, 1000);
}

// ======================
// Part 4: DOM Interactions
// ======================
// 1. Change text content dynamically (see showGreeting)
// 2. Create list items and append (see displayItems)
// 3. Countdown timer that updates element every second (see startCountdown)
