const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const names = ["Mike", "Emma", "Nika"];
const event = "bithday";

function writeCards(names, event) {
  let card = [];
  for (let i = 0; i < names.length; i++) {
    card.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return card;
}

const integer = [10];

function countDown(integer) {
  while (integer >= 0) {
    console.log(integer--);
  }
}
