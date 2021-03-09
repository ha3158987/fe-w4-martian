import _ from "./utill.js";

function calculateDeg(letter) {
    const degPerLetter = 360 / 16;
    const startingPoint = degPerLetter / 2;
    const decimal = parseInt(letter, 16);
    let targetDeg = decimal * degPerLetter + startingPoint;
    return targetDeg;
}

function getPrevArc(arrowNode) {
    const style = window.getComputedStyle(arrowNode);
    return style.getPropertyValue('transform');
}

function moveArrow(arrow, targetDeg, arrowLocation) {
    console.log(arrowLocation)
    arrow.style.transform = `rotate(${targetDeg}deg)`;
}

function rotateArrow(letter, translateButton, arrow) {
    const targetDeg = calculateDeg(letter);
    const arrowLocation = getPrevArc(arrow);
    moveArrow(arrow, targetDeg, arrowLocation);
}

export default rotateArrow;