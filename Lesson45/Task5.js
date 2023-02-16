let positive = 0;
let negative = 0;
let zero = 0;
let chet = 0;
let neChet = 0;

for (let i = 0; i < 10; i++){
    let a = parseInt(prompt("Enter number a", 0));
    if (a > 0){
        positive++;
        if (a % 2 != 0){
            neChet++;
        }
        else {
            chet++;
        }
    }
    else if (a < 0){
        negative++;
        if (a % 2 != 0){
            neChet++;
        }
        else {
            chet++;
        }
    }
    else {
        zero++;
    }
}
alert("positive = " + positive + "\nnegative = " + negative + "\nzero = " + zero + "\nchet = " + chet + "\nneChet = " + neChet)
