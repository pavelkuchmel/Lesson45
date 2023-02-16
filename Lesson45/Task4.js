let a = parseInt(prompt("Enter number a", 0));
let b;
let c = 0;
while (a > 0.9){
    b = a % 10;
    c++;
    a = a / 10;
}
alert(c)