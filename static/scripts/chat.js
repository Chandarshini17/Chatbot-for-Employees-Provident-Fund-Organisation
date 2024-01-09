var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}
function firstBotMessage() {
    let firstMessage = "Hello!! I am Bot...How may I help you..I will help you find the path in this website"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

JAVASCRIPT
(Responses)
function getBotResponse(input) {

    if (input == "Member PassBook") {
        return "Services->For Employees->Member Passbook (or) https://passbook.epfindia.gov.in/MemberPassBook/Login";
    } 
else if (input == "Claim Status") {
        return "Services->For Employees->Claim Status (or) https://passbook.epfindia.gov.in/MemClaimStatusUAN/";
    } 
else if (input == "Pensioner's Portal") {
        return "Services->For Employees->Pensioner's Portal(or)https://mis.epfindia.gov.in/PensionPaymentEnquiry/enquiry.jsp";
    }
else if (input == "Nearest pf office") {
        return "Services->Locate an EPFO Office(or)https://www.epfindia.gov.in/site_en/Location_an_office.php#";
    } 
else if (input == "Jeevan Praaman Centre") {
        return "Services->For Pensioner's-Jeevan Praaman centre (or) https://jeevanpramaan.gov.in/locator";
    }
else if (input ==  "claim form") {
        return "Services->For Employees->Know your claim form to submit(or)https://www.epfindia.gov.in/site_en/WhichClaimForm.php";
     } 
else {
        return "Try asking something else!";
    }
}