// Create an array of taglines
var taglines = [
  "Baked with love, served with a smile. 😊",
  "Fresh, delicious, and always on time. 🕒",
  "The sweetest place in town. 🍰",
  "Where every bite is a delight. 😋",
  "Come for the bread, stay for the spread. 🍞",
  "Nothing beats our treats. 🍪",
  "We make your dough dreams come true. 🥐",
  "A slice of heaven in every bite. 🥧",
  "The best thing since sliced bread. 🍞",
  "Where the magic happens. ✨",
];

// Get a random index from the array
var randomIndex = Math.floor(Math.random() * taglines.length);

// Get the tagline at that index
var randomTagline = taglines[randomIndex];

// Get the element where you want to display the tagline
var taglineElement = document.getElementById("tagline");

// Set the text content of the element to the tagline
taglineElement.textContent = randomTagline;