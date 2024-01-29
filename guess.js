//declear a num and ask user to guess it untill it is right 
let correctnum = 10;
let guessnum = prompt("Enter a number:")
console.log("guessnum")
while(guessnum != correctnum){
    guessnum = prompt("You got it wrong guess again:")
}
alert("Congratulations! you got it right")
console.log("Congratulations! you got it right")