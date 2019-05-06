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