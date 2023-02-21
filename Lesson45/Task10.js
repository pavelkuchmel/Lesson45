var number;
var run = true;
var max = 100;
var min = 0;
var current;
var lies = "Вранье. Мама не учила говорить правду?"
function func(){
    document.getElementById("spanUp").innerText = current;
    document.getElementById("spanEquals").innerText = current;
    document.getElementById("spanDown").innerText = current;
    document.getElementById("text3").innerText = "";
}

document.getElementById("start").onclick = function (){
    number = document.getElementById("number").value;
    document.getElementById("div1").hidden = true;
    document.getElementById("div2").hidden = false;
    //alert(number);
    var t = document.getElementById("div1").hidden;
    document.getElementById("yourNumber").innerText = number;
    //document.getElementById("text1").innerText = t;
    //console.log("console: " + t);
    current = parseInt(max / 2);
    func();
}
document.getElementById("btnDown").onclick = function (){
    if (number < current){
        max = current - 1;
        current = parseInt((max + min) / 2);
        func()
    }
    else {
        document.getElementById("text3").innerText = lies;
    }
}
document.getElementById("btnEquals").onclick = function (){
    if (number == current){
        document.getElementById("text3").innerText = "Загаданное число " + current;
    }
    else {
        document.getElementById("text3").innerText = lies;
    }
}
document.getElementById("btnUp").onclick = function (){
    if (number > current){
        min = current + 1;
        current = parseInt((max + min) / 2);
        func()
    }
    else {
        document.getElementById("text3").innerText = lies;
    }
}
