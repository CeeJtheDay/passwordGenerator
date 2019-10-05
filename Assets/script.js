// program
// * Length (must be between 8 and 128 characters)
var passLength;
var passWord = "";
var characters = "";
var questions = [
    "Would you like to include special characters? (symbols)",
    "Would you like to include numbers?",
    "Would you like to include lower case letters?",
    "Would you like to include upper case letters?"
];
var include = [
    // * Special characters
    "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    // * Numeric characters
    "0123456789",
    // * Lowercase characters
    "abcdefghijklmnopqrstuvwxyz",
    // * Uppercase characters
    "ABCDEFGHIJKLMNOPQRTSUVWXYZ"
];
var pwDisplay = document.getElementById("password");
var copyButton = document.querySelector("#copy");

function generatePass() {
    passLength = prompt("How long would you like your password? pick a number between 8 - 128");
    for (var char = 0; char < 4; char++) {
        confirm(questions[char]);
        if (questions[char]) {
            characters += include[char];
            console.log(characters.length);
            console.log(characters);
        }
    };

    for (var pw = 0; pw < passLength; pw++) {
        var rng = Math.floor(Math.random() * characters.length) - 1;
        console.log(rng);
        console.log(characters[rng]);
        passWord += characters[rng];

        pwDisplay.innerHTML = passWord;
    }
}

function copyToClip() {
    navigator.clipboard.writeText(passWord).then(function () {
        alert("Copied your password: " + passWord);
    }, function(err) {
        alert("Error: not copied.")
    })
}

