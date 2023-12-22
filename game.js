
// Retrieve the user's name from localStorage with a version number
let playerName = localStorage.getItem("playerName_v1");

// If the name is not in localStorage, ask for it
if (!playerName) {
    playerName = prompt("Hey there! What's your name?") || "Player";

    // Save the name to localStorage with the version number
    localStorage.setItem("playerName_v1", playerName);
}



// we are changing dice image from 1-6 according to the random number
randomNumber1=Math.floor(Math.random()*6)+1;
if(randomNumber1===1)
{
    document.querySelector(".img1").setAttribute( "src","images/dice1.png");
}
else if(randomNumber1===2)
{
    document.querySelector(".img1").setAttribute( "src","images/dice2.png");
}else if(randomNumber1===3)
{
    document.querySelector(".img1").setAttribute( "src","images/dice3.png");
}
else if(randomNumber1===4)
{
    document.querySelector(".img1").setAttribute( "src","images/dice4.png");
}
else if(randomNumber1===5)
{
    document.querySelector(".img1").setAttribute( "src","images/dice5.png");
}
else if(randomNumber1===6)
{
    document.querySelector(".img1").setAttribute( "src","images/dice6.png");
}

// doing same for the second player also
randomNumber2=Math.floor(Math.random()*6)+1;
if(randomNumber2===1)
{
    document.querySelector(".img2").setAttribute( "src","images/dice1.png");
}
else if(randomNumber2===2)
{
    document.querySelector(".img2").setAttribute( "src","images/dice2.png");
}else if(randomNumber2===3)
{
    document.querySelector(".img2").setAttribute( "src","images/dice3.png");
}
else if(randomNumber2===4)
{
    document.querySelector(".img2").setAttribute( "src","images/dice4.png");
}
else if(randomNumber2===5)
{
    document.querySelector(".img2").setAttribute( "src","images/dice5.png");
}
else if(randomNumber2===6)
{
    document.querySelector(".img2").setAttribute( "src","images/dice6.png");
}

// here we will declare the winner 
if(randomNumber1>randomNumber2)
{
    const tieMessages = [
        "Challenges are more this time ...but you can do it . You have to do it👍",
        "Challenges are more this time ...but it's just a piece of cake for you .. right😉"
    ];

    const randomMessageIndex = Math.floor(Math.random() * tieMessages.length);
    document.querySelector("h1").innerHTML=tieMessages[randomMessageIndex];
    // document.querySelector("h1").innerHTML="Challenges are more this time ...but you can do it . You have to do it👍";
}
else if(randomNumber2>randomNumber1)
{
    const tieMessages = [
        "hurreyyyyy🥳🥳you did it😄👍", 
        "Hey champs, you've nailed it!🔥",
        "I knew it... that you can do it😄"
    ];
    const randomMessageIndex = Math.floor(Math.random() * tieMessages.length);
    document.querySelector("h1").innerHTML=tieMessages[randomMessageIndex];

}
else if(randomNumber1===randomNumber2) {
    const tieMessages = [
        "Well, well, well... it's a draw! But you know what, life's all about spice, and challenges add that masala! 💪",
        "Guess what? It's a tie, but that just means more room for growth and learning! 🌱",
        "So, it's a draw, but your resilience is off the charts! 🚀",
        "Alright, it's a tie, but your positive vibes are making you stand out! 😊",
        "Hold up, it's a tie, but guess what? You're making progress, my friend! Keep hustling! 🎉"
    ];

    const randomMessageIndex = Math.floor(Math.random() * tieMessages.length);
    document.querySelector("h1").innerHTML=tieMessages[randomMessageIndex];
}