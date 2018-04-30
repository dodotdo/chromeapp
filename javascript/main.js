

function printClock() {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	  var day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var clock = document.getElementById("time");          // 시간 출력할 장소 선택
    var date = document.getElementById("date");          // 날짜 출력할 장소 선택
    var currentDate = new Date();                                     // 현재시간
    var calendar = currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() // 현재 날짜
    var amPm = 'AM'; // 초기값 AM
    var currentHours = addZeros(currentDate.getHours(),2);
    var currentMinute = addZeros(currentDate.getMinutes() ,2);
    var currentSeconds =  addZeros(currentDate.getSeconds(),2);

    if(currentHours >= 12){ // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
    	amPm = 'PM';
    	currentHours = addZeros(currentHours - 12,2);
    }

    if(currentSeconds >= 50){// 50초 이상일 때 색을 변환해 준다.
       currentSeconds = '<span style="color:#de1951;">'+currentSeconds+'</span>'
    }
    clock.innerHTML = currentHours+":"+currentMinute;
    date.innerHTML = day[currentDate.getDay()] + ", " + currentDate.getDate() + " " + month[currentDate.getMonth()]; //날짜를 출력해 줌

    setInterval("printClock()",1000);         // 1초마다 printClock() 함수 호출
}

function addZeros(num, digit) { // 자릿수 맞춰주기
	  var zero = '';
	  num = num.toString();
	  if (num.length < digit) {
	    for (i = 0; i < digit - num.length; i++) {
	      zero += '0';
	    }
	  }
	  return zero + num;
}


function openEventPage(){
  var main = document.getElementById("main");
  var todaysEvents = document.getElementById("todaysEvents");
  var todaysEventsBtn = document.getElementById("todaysEvents-btn");
  todaysEventsBtn.addEventListener("click", function(){
      main.style.display = 'none';
      todaysEvents.style.display = 'block';
  }, false);
}

openEventPage();

function openWatchTVPage(){
  var main = document.getElementById("main");
  var watchTVEvents = document.getElementById("watchTV");
  var watchTVEventsBtn = document.getElementById("watchTV-btn");
  watchTVEventsBtn.addEventListener("click", function(){
      main.style.display = 'none';
      watchTVEvents.style.display = 'block';
  }, false);
}

openWatchTVPage();

function moveBtn(btn) {//main page do not disturb, please clean btn 이동
  if(btn.style.left == 54 + '%') {//버튼이 오른쪽에 가있을 때 left 값이 4가 될 때까지 왼쪽으로 이동
    var pos = 44;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 4) {
        clearInterval(id);
      } else {
        pos--;
        btn.style.left = pos + '%';
      }
    }
  }
  else{ //버튼이 왼쪽에 가있을 때 left 값이 54가 될 때까지 오른쪽으로 이동
    var pos = 4;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 54) {
        clearInterval(id);
      } else {
        pos++;
        btn.style.left = pos + '%';
      }
    }
  }

}

function moveOnOffBtn(){ //moveBtn 함수 호출
  var onOffBtn = document.getElementsByClassName("on-off-btn");
  onOffBtn[0].addEventListener("click", function(){
    moveBtn(onOffBtn[0]);
  }, false);
  onOffBtn[1].addEventListener("click", function(){
    moveBtn(onOffBtn[1]);
  }, false);
}

moveOnOffBtn();

function openCountBox(){
  var stuff = document.getElementsByClassName("stuff");
  var countBox = document.getElementsByClassName("count-box");
  stuff[0].addEventListener("click", function(){
    countBox[0].style.display = 'block';
  }, false);
  stuff[1].addEventListener("click", function(){
    countBox[1].style.display = 'block';
  }, false);
  stuff[2].addEventListener("click", function(){
    countBox[2].style.display = 'block';
  }, false);

}


openCountBox();

function cancelCountBox(){
  var cancelBtn = document.getElementsByClassName("cancel-btn");
  var countBox = document.getElementsByClassName("count-box");
  cancelBtn[0].addEventListener("click", function(){
      countBox[0].style.display = "none";
  }, false);
  cancelBtn[1].addEventListener("click", function(){
      countBox[1].style.display = 'none';
  }, false);
  cancelBtn[2].addEventListener("click", function(){
      countBox[2].style.display = 'none';
  }, false);

}

cancelCountBox();

window.onload = function() {
    printClock();
}
