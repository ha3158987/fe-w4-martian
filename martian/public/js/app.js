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
        * 5초 간격으로 단어를 하나씩 보낸다.
        * 하나의 알파벳 단위로 단어를 쪼갠다.
        * 쪼개진 알파벳은 16진수 아스키코드로 변환해서 저장한다.
        * 저장된 16진수는 한 글자씩 수신기로 보낸다.
todo - [ ] (수신기 입장에서) 글자 1개가 들어온면 일어나는 일:
        * ------------세부사항-------------
        * 화살표가 해당 16진수 글자를 "2초동안" 가리켜야 한다.
        * 송수신정보에 해당 글자를 출력(render)해줘야한다. 이 때, 2글자가 들어오면 ''(띄어쓰기)를 추가해서 글자간 간격을 넣어준다. 그리고 ,(콤마)는 없애준다.
todo - [ ] '해석하기', '지구로 보내기'버튼에 클릭이벤트 걸어주기
todo - [ ] MyPromise 생성자 미완 - 완성 시 활용하는 방법으로 리팩토링할 것.
*/

// import MyPromise from "./myPromise.js";
import { convertToHexadecimal , convertToString } from "./translator.js";
import utill from "./utill.js";
const _ = utill;

const DOMREF = {
    textList : _.$all("path"),
    hexToStrBtn : _.$(".hexadecimal_translate"),
    resultBox: _.$(".hexadecimal_result"),
    sendToEarthBtn : _.$(".languag_send"),
    sendInput: _.$(".language_input")
}

//변환기 구동시키기 = text node를 가져오기/화살표 이동거리 계산하기/화살표 움직이기/해석하기 버튼 활성화/해석결과 보여주기
function activateTranslator(textList){
    return textList;
}

//5초마다 지구어 보내기
function sendSignalToMars(strArr) {
    let wholeStr = '';
    strArr.forEach((el, i) => {
        wholeStr += ` ${el}`;
        setTimeout(() => sendWord(el, wholeStr), (i + 1) * 1000);
    })
}

//배열로 문자열을 쪼개고, 반복문을 돌리기
//한 글자마다 실행되어야 할 함수: 화살표 돌리기, 받은 글자 viewBox에 보여주기
const splitString = (str) => str.split('');

//받은 지구어 16진수 아스키코드로 변환해서 출력
function sendWord(str, wholeStr) {
    const viewBox = DOMREF.resultBox;
    const receivedWord = convertToHexadecimal(str);
    receivedWord.forEach(letterPair => {
        const oneLetterArr = splitString(letterPair); //결과:["6", "8"]
        oneLetterArr.forEach(letter => {
            
        })
        console.log("oneLetter", oneLetterArr);
    })

    // viewBox.innerText = wholeStr; //이건 나중에 '해석하기'버튼이 눌리면 보여져야 함.
    
    viewBox.innerText = receivedWord;

    console.log("str:", str);
    console.log("receivedWord", receivedWord);
    console.log(wholeStr);
}



(function init(){
    sendSignalToMars(["hello", "mars"]);
    activateTranslator(DOMREF.textList);
    console.log(DOMREF.textList)
})();

// const MYPROMISE = new MyPromise();
// console.log(MYPROMISE)