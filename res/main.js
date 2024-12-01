"use strict";

function generateStarField(numberOfStars) {
    if (!document.getElementById("starStyle")) {
        var style = `.star{
                    width: 0.1vw;
                    height: 0.1vw;
                    background: white;
                    border-radius: 100%;
                    z-index: -20;
                    position: fixed;
                }`;

        var styleSheet = document.createElement("style");
        styleSheet.id = "starStyle";
        styleSheet.innerText = style;
        document.head.appendChild(styleSheet);
    }

    if (!document.getElementById("starfieldContainer")) {
        var starfieldContainerElm = document.createElement("startfieldContainer");
        starfieldContainerElm.id = "starfieldContainer";
        document.body.appendChild(starfieldContainerElm);
    }

    for (var i = 0; i < numberOfStars; i++) {
        var xPos = 100 * Math.random();
        var yPos = 100 * Math.random();
        var starHtml = `<div class='star' style='left: ${xPos}%; top: ${yPos}%'></div>`;
        document.getElementById("starfieldContainer").innerHTML += starHtml;
    }
}

function addHomeLink() {
    var homeLink = document.createElement("div");
    homeLink.id = "homeLink";
    homeLink.innerHTML = "<a href='https://ashe.org.uk/aoc2024'>[Home]</a>";
    homeLink.innerHTML += "<a href='https://github.com/AshleyShalloe/aoc2024'>[Repo]</a>";
    homeLink.innerHTML += "<a href='https://adventofcode.com/' target='_blank'>[AOC]</a>";
    document.body.prepend(homeLink);
}

function mainInit() {
    addHomeLink();
    generateStarField(100);
}

window.onload = (event) => {
    mainInit();
};
