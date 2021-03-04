/* --------------------------------------------------------------------- */
/* -------▶︎▶︎▶︎ index.js: 필요한 함수들을 import해와서 프로그램을 실행 ◀︎◀︎◀︎----------*/
/* --------------------------------------------------------------------- */

/*
! Dom 핸들링은 여기서한다. translator.js는 오로지 로직에 관련된 것만 갖게 할 것.
todo - [x] translator 돌림판 위의 text node를 배열에 담아오는 함수 만들기
todo - [x] IIFE함수로 자동시작시키는 함수 만들기
todo - [ ] setTimeout으로 미리 입력된 text를 5초에 한번씩 화성으로 보내는 함수 만들기. (발송 되기 전 지구어를 아스키코드로 먼저 변환한다.)
todo - [ ] '해석하기', '지구로 보내기'버튼에 클릭이벤트 걸어주기
todo - [ ] MyPromise 생성자 미완 - 완성 시 활용하는 방법으로 리팩토링할 것.
*/

// import MyPromise from "./myPromise.js";
import { convertToHexadecimal } from "./translator.js";
import utill from "./utill.js";

const DOMREF = {
    textList : utill.$all("path"),
    hexToStrBtn : utill.$(".hexadecimal_translate"),
    sendToEarthBtn : utill.$(".languag_send"),
    sendInput: utill.$(".language_input")
}

//변환기 구동시키기 = text node를 가져오기
function activateTranslator(textList){
    return getNodeList(textList);
}

//5초마다 지구어 보내기
function sendSignalToMars(strArr) {
    strArr.
    setTimeout()
}

(function init(){
    sendSignalToMars(["hello", "mars", "howalive?"]);
    activateTranslator(DOMREF.textList);
})();

// const MYPROMISE = new MyPromise();
// console.log(MYPROMISE)