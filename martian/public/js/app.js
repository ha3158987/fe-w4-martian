/* --------------------------------------------------------------------- */
/* -------▶︎▶︎▶︎ index.js: 필요한 함수들을 import해와서 프로그램을 실행 ◀︎◀︎◀︎----------*/
/* --------------------------------------------------------------------- */

/*
todo [x] 지구로부터 string을 받는다 -> 받은 string을 split해준다 -> 16진수로 변환한다.
todo [x] 한 쌍의 16진수를 다시 하나의 글자로 쪼개서 반복문을 돌린다. 한 글자가 반복문에 들어올 때마다 실행되어야 하는 일들:
    1) 화살표 움직이기
    2) (화살표 움직임이 끝나면)textbox에 받은 글자 누적해서 보여주기
    3) 해당 글씨 반짝이기
    4) (2번이 끝나면)해석하기버튼 활성화하기
*/

// import MyPromise from "./myPromise.js";
import { convertToHexadecimal , convertToString } from "./translator.js";
import rotateArrow from "./arrowActivator.js";
import utill from "./utill.js";
const _ = utill;

const DOMREF = {
    textList : _.$all("path"),
    arrow: _.$(".arrow"),
    hexToStrBtn : _.$(".hexadecimal_translate"),
    resultBox: _.$(".hexadecimal_result"),
    sendToEarthBtn : _.$(".languag_send"),
    sendInput: _.$(".language_input")
}

const splitString = (str) => str.split('');

const delay = ms => new Promise ((resolve) => setTimeout(() => resolve(), ms));

function analyzeWord(str) {
    const splitedWord = splitString(str);
    return convertToHexadecimal(splitedWord);
}

async function getHexOneByOne(hex){
    for (let oneHex of hex) {
        activateTranslator(oneHex);
        await delay(2000);
    }
}

async function getWordFromEarth(str) {
    const hexArr = analyzeWord(str);
    for (let hex of hexArr) {
        getHexOneByOne(hex);
        await delay(5000);
    }
}

function fillUpTextBox(str) {
    const viewBox = DOMREF.resultBox;
    viewBox.innerText += str;
    //매 두번쨰마다 template literal로  ' '도 같이 추가.
}

//변환기 구동시키기 = text node를 가져오기/화살표 이동거리 계산하기/화살표 움직이기/해석하기 버튼 활성화/해석결과 보여주기
function activateTranslator(letter){
    fillUpTextBox(letter);
    rotateArrow(letter);
}

(function init(){
    getWordFromEarth("howalive");
})();

export default DOMREF;