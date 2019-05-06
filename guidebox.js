// general guidebox js from project 1 & 2. Will tweak for what I need
var guideKey = "";

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

function purcFunc (subResults) {
    
}