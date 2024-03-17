//array of paris of the card
const cardValues = ["A", "B", "C", "D", "E", "F", "G", "H"];
const cardParis = [...cardValues, ...cardValues];
console.log(cardParis);
//shuffle the array to randomize card position
const shuffledPairs = shuffleArray(cardParis);
//create the game board
const gameBoard = document.getElementById("game-board");
createGameBoard(shuffledPairs);
//function to shuffle an array using fisher-yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], (array[[j]] = [array[j]]), array[i]];
  }
  return array;
}

//function to create the game board
function createGameBoard(cards) {
  cards.forEach((value, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "hidden");
    card.dataset.index = index;
    card.innerText = value;
    card.addEventListener("click", revealCard);
    gameBoard.appendChild(card);
  });
}
let flippedCards = [];
let matchedPairs = 0;

//function to handle card click
function revealCard() {
  const selectedCard = this;
  if (selectedCard.classList.contains("hidden") && flippedCards.length < 2) {
    selectedCard.classList.remove("hidden");
    flippedCards.push(selectedCard);
    if (flippedCards.length == 2) {
      setTimeout(checkMatch, 500);
    }
  }
}
function checkMatch() {
  const card1 = flippedCards[0];
  const card2 = flippedCards[1];
  if (card1.innerText == card2.innerText) {
    //matched
    card1.removeEventListener("click", revealCard);
    card1.removeEventListener("click", revealCard);
    matchedPairs++;
    //check if all pairs are matched
    if (matchedPairs == cardValues.length) {
      alert("congratulations! you matched all pairs");
    }
  } else {
    //not matched
    card1.classList.add("hidden");
    card2.classList.add("hidden");
  }
  flippedCards=[];
}
