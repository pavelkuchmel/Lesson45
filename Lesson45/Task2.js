let a = parseInt(prompt("Enter number a", 0));
let b = parseInt(prompt("Enter number b", 0));

while (a != 0 && b != 0){
    if (a > b) {
        a = a % b;
    }
    else {
        b = b % a;
    }
}

alert(a + b);