import DOMREF from "./app.js";

function rotateArrow(letter) {
    const targetDegree = calculateDegree(letter);
    const currentArc = getCurrentArc();
}

function calculateDegree(letter) {
    const degreePerLetter = 360 / 16;
    const startingPoint = degreePerLetter / 2;
    return (parseInt(letter, 16) * degreePerLetter) + startingPoint;
}


function getCurrentArc(){}

export default rotateArrow;