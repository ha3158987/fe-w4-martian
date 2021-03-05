/* --------------------------------------------------------------------- */
/* ----------▶︎▶︎▶︎ translator.js: 문자/16진수 변환과 관련된 함수 저장 ◀︎◀︎◀︎----------*/
/* --------------------------------------------------------------------- */

/*
! 모든 함수는 순수하게(의존성을 낮추기) 만들기. 매직넘버 없게 주의.
todo - [x] 16진수 -> 문자열 변환 함수 만들기
todo - [x] 문자열 -> 16진수(배열) 변환 함수 만들기
todo - [ ] 수신한 16진수를 송수신정보에 출력해주는 함수 만들기
todo - [ ] 해석하기 버튼에 클릭이벤트 발생 시 지구어로 변환된 결과를 송수신정보에 출력해주는 함수 만들기
todo - [ ] 현재 화살표 위치에서 다음 글자를 가리킬때 이동각도 계산해주는 함수 만들기
todo - [ ] 수신한/입력받은 16진수를 2초마다 하나씩 가리키는 함수(화살표의 각도를 돌려주는 애니메이션 함수) 만들기
*/

import utill from './utill.js';

//문자열 -> 10진수 -> 16진수 (배열로 return)
function convertToHexadecimal (str) {
    return str.split('')
    .map(letter => letter.charCodeAt(0))
    .map(dec => dec.toString(16));
}

//16진수 -> 10진수 -> 문자열
function convertToString (hexArr) {
    return hexArr
    .map(hex => parseInt(hex, 16))
    .reduce((acc, dec) => acc += String.fromCharCode(dec), '');
}

//test code
// console.log(convertToHexadecimal('howalive?'));  //["68", "6f", "77", "61", "6c", "69", "76", "65", "3f"]
// console.log(convertToString(["68", "65", "6c", "6c", "6f"])); //hello

export { convertToHexadecimal, convertToString }