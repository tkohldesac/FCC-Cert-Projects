function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

console.log("Try calling the contactInfo function :)")

function contactInfo() {
    console.log("I'm trying to hide my contact info because I value my privacy and don't want to publicly display it for everyone to see.");
    console.log("I can be reached via SMS or Voice 480-375-5252. I can also be reached at the e-mail address: topher@kohldesac.com.")
    console.log("My voicemail greeting is 1 second of silence to confuse telemarketers and auto-dialers.")
    console.log("Thanks for taking the time/effort to find this. Have a great day!")
}