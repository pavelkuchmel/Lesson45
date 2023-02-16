let a = parseInt(prompt("Enter number a", 0));
let b = a + " ";
for (let i = a; i > 0; i--){
    if (a % i == 0){
        b += i + " ";
    }
}
alert(b)