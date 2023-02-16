let isRun = true;
while (isRun){
    let a = parseInt(prompt("Enter number a", 0));
    let c = prompt("Enter number a", "-");
    let b = parseInt(prompt("Enter number a", 0));
    let y = "Continiue? Y/Other: ";
    switch (c){
        case "+":
            y += a + b;
            break;
        case "-":
            y += a - b;
            break;
        case "/":
            y += a / b;
            break;
        case "*":
            y += a * b;
            break;
    }
    let z = prompt(y, "y");
    if (z !== "y" && z !== "Y"){
        isRun = false;
    }
}