/* --------------------------------------------------------------------- */
/* ----------▶︎▶︎▶︎ translator.js: 문자/16진수 변환과 관련된 함수 저장 ◀︎◀︎◀︎----------*/
/* --------------------------------------------------------------------- */

/*
! 모든 함수는 순수하게(의존성을 낮추기) 만들기. 매직넘버 없게 주의.
todo - [x] 16진수 -> 문자열 변환 함수 만들기
todo - [x] 문자열 -> 16진수(배열) 변환 함수 만들기
*/

//문자열 -> 10진수 -> 16진수 (배열로 return)
function convertToHexadecimal (letterArr) {
    return letterArr.map(letter => letter.charCodeAt(0))
    .map(dec => dec.toString(16));
}

//16진수 -> 10진수 -> 문자열
function convertToString (hexArr) {
    return hexArr
    .map(hex => parseInt(hex, 16))
    .reduce((acc, dec) => acc += String.fromCharCode(dec), '');
}

export { convertToHexadecimal, convertToString }