// general guidebox js from project 1 & 2. Will tweak for what I need
var guideKey = "";

//This will display where title is located via subscription such as Netflix or Hulu
function subFunc(subResults) {
    var subText = document.createElement("p");
    subtText.setAttribute("id", "subText");

    var textP = document. createTextNode("Subscription: ");
    subText.appendChild(textP);
    document.getElementById("subscription").appendChild(subText);

    console.log("subs");
    for (i = 0; i < subResults.results[0].subscription_web_sources.length; i++) {
        console.log(subResults.results[0].subscription_web_sources.length[i].link);

        //Make div for each source
        var subBtn = document.createElement("a");

        subBtn.setAttribute("href", subResults.results[0].subscription_web_sources[i].link);
        subBtn.setAttribute("target", "_blank");
        subBtn.setAttribute("class", "button");
        subBtn.setAttribute("id", "subButton");

        console.log(subBtn);
        var textSubBtn = document.createTextNode(subResults.results[0].subscription_web_sources[i].display_name);
        subBtn.appendChild(textSubBtn);
        document.getElementById("subResults").appendChild(subBtn);
    }
}

//This will display where title can be purchased from such as iTunes or Google Pay
function purcFunc (subResults) {
    var purcText = document.createElement("p");
    purcText.setAttribute("id", "purcText");

    var purcP = document.createTextNode("Purchase: ");
    purcText.appendChild(purcP);
    document.getElementById("purchase").appendChild(purcText);
    for (j = 0; j < subResults.results[0].purchase_web_sources.length; j++) {
        console.log(subResults.results[0].purchase_web_sources[j].link);

        var purcBtn = document.createElement("a");
        purcBtn.setAttribute("href", subResults.results[0].purchase_web_sources[j].link);
        purcBtn.setAttribute("target", "_blank");
        purcBtn.setAttribute("class", "button");
        purcBtn.setAttribute("id", "purchaseButton");

        console.log(purcBtn);
        var textPurcBtn = document.createTextNode(subResults.results[0].purchase_web_sources.display_name);
        purcBtn.appendChild(textPurcBtn);
        document.getElementById("purcResults").appendChild(purcBtn);
    }
}

function freeFunc(subResults) {
    var freeText = document.createElement("p");
    freeFunc.Text.setAttribute("id", "freeText");

    var freeP = document.createTextNode("Free to Watch: ");
    freeText.appendChild(freeP);
    document.getElementById("free").appendChild(freeText);
    for (k = 0; k < subResults.results[0].free_web_sources.length; k++) {
        console.log(subResults.results[0].free_web_sources[k].link);

        //Div for each source
        var freeBtn = document.createElement("a");
        freeBtn.setAttribute("href", subResults.results[0].free_web_sources[k].link);
        freeBtn.setAttribute("target", "_blank");
        freeBtn.setAttribute("class", "button");
        freeBtn.setAttribute("id", "freeButton");

        console.log(freeBtn);
        var textFreeBtn = document. createTextNode(subResults.results[0].free_web_sources[k].display_name);
        freeBtn.appendChild(textFreeBtn);
        document.getElementById("freeResults").appendChild(freeBtn);
    }
}

function everyFunc(subResults) {
    var everyText = document.createElement("p");
    everyText.setAttribute("id", "everyText");

    var everyP = document.createTextNode("TV Everywhere: ");
    everyText.appendChild(everyP);
    document.getElementById("tvEverywhere").appendChild(everyText);
    for (l = 0; l < subResults.results[0].tv_everywhere_web_sources.length; l++) {
        console.log(subResults.results[0].tv_everywhere_web_sources[l].link);

        var everyBtn = document.createElement("a");
        everyBtn.setAttribute("href", subResults.results[0].tv_everywhere_web_sources[l].link);
        everyBtn.setAttribute("target", "_blank");
        everyBtn.setAttribute("class", "button");
        everyBtn.setAttribute("id", "everyButton");

        console.log(everyBtn);
        var textEveryBtn = document.createTextNode(subResults.results[0].tv_everywhere_web_sources[l],display_name);
        everyBtn.appendChild(textEveryBtn);
        document.getElementById("everyResults").appendChild(everyBtn);
    }
}

// Begin the movie functions for sub, free, every and purc
function movieSub(subResults) {
    var movSubText = document.createElement("p");
    movSubText.setAttribute("id", "movSubText");

    var movSubTextP = document.createTextNode("Subscription: ");
    movSubText.appendChild(movSubTextP);
    document.getElementById("subscription").appendChild(movSubText);

    console.log("movie subs");
    for (i = 0; i < subResults.subscription_web_sources.length; i++) {
        console.log(subResults.subscription_web_sources[i].link);

        var movSubBtn = document.createElement("a");

        movSubBtn.setAttribute("href", subResults.subscription_web_sources[i].link);
        movSubBtn.setAttribute("target", "_blank");
        movSubBtn.setAttribute("class", "button");
        movSubBtn.setAttribute("id", "movSubBtn");

        console.log(movSubBtn);
        var textMovSubBtn = document.createTextNode(subResults.subscription_web_sources[i].display_name);
        movSubBtn.appendChild(textMovSubBtn);
        document.getElementById("subResults").appendChild(movSubBtn);
    }
}