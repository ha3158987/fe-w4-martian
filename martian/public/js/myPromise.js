/* --------------------------------------------------------------------- */
/* --------▶︎▶︎▶︎ MyPromise 클래스: 비동기적으로 실행되는 함수의 순서를 제어 ◀︎◀︎◀︎--------*/
/* --------------------------------------------------------------------- */

/*
! then은 콜백함수를 인자로 받으며 자기 자신(this)을 리턴한다.
TODO: - [ ] MyPrimise 안에서 순서대로 실행되어야 하는 함수는 cblist라는 배열에 담는다.
TODO: - [ ]

*/

export default class MyPromise {
    constructor(callback) {
        this.cbList = [];
        this.then(this.cb);
    }

    then(cb){
        return this;
    }
} 