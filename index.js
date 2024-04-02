// Code your solutions in this file
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`wrapped ${gifts[i]} and added a bow!`);
    }
}
wrapGifts(gifts);
*/


function writeCards(names, eventName){
let thankYouMessages = []
    for (let x = 0; x < names.length; x++) {
thankYouMessages.push (`Thank you, ${names[x]}, for the wonderful ${eventName} gift!`)}
return thankYouMessages
}

function countDown(number){
   let x = number;
    while (x >= 0) {
    console.log(x);
    x--;
    }
}
