// Code your solutions in this file

// const events = "surprise";
function writeCards(gifter, events) {
  let arr = [];
  for (let i = 0; i < gifter.length; i++) {
    arr.push(`Thank you, ${gifter[i]}, for the wonderful ${events} gift!`);
  }
  return arr;
}
writeCards(["Ada", "Brendan", "Ali"], "Bday");

function countDown(number) {
  while (number > 0) {
    console.log(number);
    number -= 1;
  }
  console.log(number);
}

countDown(10);
