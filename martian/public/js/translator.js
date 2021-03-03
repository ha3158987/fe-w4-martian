import utill from './utill.js';

const slices = utill.$all("path");
function fillSlices() {
    const textArr = utill.$all("path");
    textArr[0].setAttribute('fill', '#ff7f50');
    utill.addClass(textArr[0], "glow");
    console.log(slices)
}




// const svgEl = utill.$('svg');
// const slices = [
//   { percent: 0.0625, color: 'Coral' },
//   { percent: 0.0625, color: '#00ab6b' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
// ];
// let cumulativePercent = 0;

// function getCoordinatesForPercent(percent) {
//   const x = Math.cos(2 * Math.PI * percent);
//   const y = Math.sin(2 * Math.PI * percent);
//   return [x, y];
// }

// //svg에 path를 동적으로 만들어서 추가
// function fillSlices(){
//     slices.forEach(slice => {
//     const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
//     // 히나의 슬라이스가 끝나는 곳이 다른 슬라이스가 시작되는 곳이 되므로 퍼센트는 누적된다.
//     cumulativePercent += slice.percent;
//     const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
//     // 만약 50퍼가 넘는 슬라이스가 있을 경우, 더 큰 arc를 택한다.
//     const largeArcFlag = slice.percent > .5 ? 1 : 0;
//     // 읽기 쉽도록 배열로 만들어서 쪼인.
//     const pathData = [
//         `M ${startX} ${startY}`, // Move
//         `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
//         `L 0 0`, // Line
//     ].join(' ');
//     //패쓰 만들어서 svg에 추가하기
//     const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//     pathEl.setAttribute('d', pathData);
//     pathEl.setAttribute('fill', slice.color);
//     svgEl.appendChild(pathEl);
//     })
// }

export { slices, fillSlices }