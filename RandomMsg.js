////// ARRAY WITH MESSAGES //////
const subjects = [
    "The journey",
    "Success",
    "Happiness",
    "Wisdom",
    "Love"
  ];
  
  const actions = [
    "begins with",
    "is the result of",
    "comes from",
    "is achieved through",
    "is found in"
  ];
  
  const objects = [
    "a single step.",
    "perseverance.",
    "self-awareness.",
    "hard work.",
    "being present."
  ];
  ////// END OF ARRAYS WITH MESSAGES //////

  // Take an array as an argument and return a random element from that array
  function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  // Construct the message by concatenating the randomly selected elements
  function generateRandomMessage() {
    const subject = getRandomElement(subjects);
    const action = getRandomElement(actions);
    const object = getRandomElement(objects);
    
    return `${subject} ${action} ${object}`;
  }
  
  // Call the function and print it to the console
  console.log(generateRandomMessage());