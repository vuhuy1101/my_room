//var clock = document.getElementById('number');
//var numDiv = clock.getElementsByTagName('div');
//var numSpan = clock.getElementsByTagName('span');

//for(var i = 0; i < numDiv.length; i++){
//  numDiv[i].style.WebkitTransform = "rotate(" + (90+30*i) + "deg)";
//  if((i%3) != 0){
//    numDiv[i].style.fontSize = "8px";
//  }
//  else{
//    numDiv[i].style.fontSize = "8px";
//  }
//}
//
//for(i=0;i < numSpan.length; i++){
//  numSpan[i].style.WebkitTransform = "rotate(" + (-90-30*i) + "deg)";
//}

function getTime(){
  var d = new Date();
  var currentHr = d.getHours();
  var currentMin = d.getMinutes();
  var currentSec = d.getSeconds();

  var hour = document.getElementById('hour');
  var minute = document.getElementById('minute');
  var second = document.getElementById('second');

  hour.style.WebkitTransform = "rotate(" + ((currentHr/12*360) + (30*currentMin/60)) + "deg)";
  minute.style.WebkitTransform = "rotate(" + (currentMin/60*360) + "deg)";
  second.style.WebkitTransform = "rotate(" + (currentSec/60*360) + "deg)";
}

updateTime = setInterval(getTime,1000);
