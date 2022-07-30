const userName = 'Bob';
userQuestion = 'Will I win the lottery?'
const randomNumber = Math.floor(Math.random() * 8);
const eightBall = randomNumber;


if (userName == 'Bob') {
    console.log(`Hello, ${userName}!`);
} else {
    console.log('Hello!');
} 
console.log(`${userName}, your question is "${userQuestion}".`)

if (eightBall== 0) {
    console.log('It is decidedly so');
}   else if (eightBall == 1) {
    console.log('Reply hazy try again');
}   else if (eightBall== 2) {
    console.log('Cannot predict now');
}   else if (eightBall == 3) {
    console.log('Do not count on it');
}   else if (eightBall == 4) {
    console.log('My sources say no');
}   else if (eightBall == 5) {
    console.log('Outlook is not so good');
}   else if (eightBall == 6) {
    console.log('Reply hazy try again');
}   else if (eightBall == 7) {
    console.log('Signs point to yes');
}   else if (eightBall == 8) {
    console.log('It is certain');
}
