// import DOMREF from "./app.js";
import _ from "./utill.js";

const isFirst = (node) => _.contains(node, "first");

function checkFirst(buttonNode) {
    if (isFirst(buttonNode)) _.removeClass(buttonNode, "first");
    return isFirst(buttonNode) ? ((360 / 16) / 2) : 0;
}

function calculateDegree(letter, startingPoint) {
    const degreePerLetter = 360 / 16;
    const decimal = parseInt(letter, 16); //10진수
    let targetDegree = decimal * degreePerLetter;
    startingPoint === 0 ? null : targetDegree += startingPoint;
    return targetDegree;
}

function getPrevArc(arrowNode) {
    const style = window.getComputedStyle(arrowNode);
    const prevArc = style.getPropertyValue('transform');
}

function rotateArrow(letter, translateButton, arrow) {
    const startingPoint = checkFirst(translateButton);
    const targetDegree = calculateDegree(letter, startingPoint);
    const prevArc = getPrevArc(arrow);
}

export default rotateArrow;