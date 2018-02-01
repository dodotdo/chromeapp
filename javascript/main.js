var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 10000); // Change image every 2 seconds
}

function printClock() {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var clock = document.getElementById("time");            // 출력할 장소 선택
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
    clock.innerHTML = currentHours+":"+currentMinute+"<br>"+day[currentDate.getDay()] + ", " + currentDate.getDate() + " " + month[currentDate.getMonth()]; //날짜를 출력해 줌

    setTimeout("printClock()",1000);         // 1초마다 printClock() 함수 호출
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

var in_menu = document.getElementsByClassName("in_menu");

for (var i = 0; i < in_menu.length; i++) {
  in_menu[i].addEventListener("mouseover", function() {
      // highlight the mouseover target
      this.style.border = "white solid 2px";
      this.style.boxShadow = "inset 0 0 6.7px 3.3px #0fd4ff";

    }, false);

  in_menu[i].addEventListener("mouseout", function() {
      // highlight the mouseover target
      this.style.border = "none";
      this.style.boxShadow = "inset 0 0 0 0";
    }, false);
}


var todaysEvents_btn = document.getElementById("todaysEvents_btn");
var main = document.getElementById("main");
var todaysEvents = document.getElementById("todaysEvents");
var back_to_main_btn = document.getElementById("back_to_main_btn");

todaysEvents_btn.addEventListener("click", function(){

    main.style.display = 'none';
    todaysEvents.style.display = 'block';


  
}, false);



window.onload = function() {
    printClock();
    todaysEvents.style.display = 'none';
}
