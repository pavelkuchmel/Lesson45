let a = prompt("Enter number: ", "");
let b = parseInt(prompt("Enter shift: ", 0));
let c = "";
for (var i = b; i < a.length; i++){
    c += a.charAt(i);
}
for (var i = 0; i < b; i++){
    c += a.charAt(i);
}
alert(c);
