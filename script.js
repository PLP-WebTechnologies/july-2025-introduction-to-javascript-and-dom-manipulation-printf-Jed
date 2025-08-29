// ==========================
// Part 1: Variables & Conditionals
// ==========================
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "✅ You are an adult.";
  } else if (age > 0) {
    result.textContent = "👶 You are a minor.";
  } else {
    result.textContent = "⚠️ Please enter a valid age.";
  }
}

// ==========================
// Part 2: Functions (Reusability)
// ==========================

// Example 1: Greeting function
function showGreeting(name) {
  let message = `Hello, ${name}! Welcome to JavaScript Functions ✨`;
  document.getElementById("greeting").textContent = message;
}

// Example 2: Sum function
function addNumbers(a, b) {
  return a + b;
}
console.log("Sum of 5 and 7:", addNumbers(5, 7));

// ==========================
// Part 3: Loops
// ==========================

// Example 1: Countdown using a for loop
function startCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous list

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Example 2: Looping through an array
let fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];
fruits.forEach(function(fruit) {
  console.log("Fruit:", fruit);
});

// ==========================
// Part 4: DOM Manipulation
// ==========================

// Example 1: Toggle title color
document.getElementById("toggleBtn").addEventListener("click", function() {
  let title = document.getElementById("title");
  title.style.color = (title.style.color === "teal") ? "purple" : "teal";

  document.getElementById("clickMessage").textContent =
    "🎨 You toggled the title color!";
});

// Example 2: Changing text dynamically
document.getElementById("title").addEventListener("mouseover", function() {
  this.textContent = "Hovered over the title!";
});

// Example 3: Creating an element dynamically
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was created with JavaScript 👨🏽‍💻";
document.body.appendChild(newPara);
