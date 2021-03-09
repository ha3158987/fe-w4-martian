/* --------------------------------------------------------------------- */
/* -------▶︎▶︎▶︎ index.js: 필요한 함수들을 import해와서 프로그램을 실행 ◀︎◀︎◀︎----------*/
/* --------------------------------------------------------------------- */

/*
! 
! Dom 핸들링은 여기서한다. translator.js는 오로지 로직에 관련된 것만 갖게 할 것.
todo - [x] translator 돌림판 위의 text node를 배열에 담아오는 함수 만들기
todo - [x] IIFE함수로 자동시작시키는 함수 만들기
todo - [x] setTimeout으로 미리 입력된 text를 5초에 한번씩 화성으로 보내는 함수 만들기. (발송 되기 전 지구어를 아스키코드로 먼저 변환한다.)
        * ------------세부사항-------------
        * 1. 5초 간격으로 단어를 하나씩 보낸다. sendSignalToMars (x)
        * 2. 하나의 알파벳 단위로 단어를 쪼갠다. splitString (x)
        * 3. 쪼개진 알파벳은 16진수 아스키코드로 변환해서 한 글자씩 수신기로 보낸다. sendHexOneByOne (x)
todo - [ ] (수신기 입장에서) 글자 1개가 들어온면 일어나는 일:
        * ------------세부사항-------------
        * 1. 화살표가 해당 16진수 글자를 "2초동안" 가리켜야 한다.
        * 2. 송수신정보에 해당 글자를 출력(render)해줘야한다. 이 때, 2글자가 들어오면 ''(띄어쓰기)를 추가해서 글자간 간격을 넣어준다. 그리고 ,(콤마)는 없애준다.
todo - [ ] '해석하기', '지구로 보내기'버튼에 클릭이벤트 걸어주기
todo - [ ] MyPromise 생성자 미완 - 완성 시 활용하는 방법으로 리팩토링할 것.
*/

// import MyPromise from "./myPromise.js";
import { convertToHexadecimal , convertToString } from "./translator.js";
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
        await delay(1000);
    }
}

async function getWordFromEarth(str) {
    const hexArr = analyzeWord(str);
    for (let hex of hexArr) {
        getHexOneByOne(hex);
        await delay(2000);
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

}


(function init(){
    getWordFromEarth("howalive");
})();
