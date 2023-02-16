let isRun = true;
var c = 1;
while (isRun){
    let y;
    switch (c){
        case 1:
            y = "Понедельник"
            break;
        case 2:
            y = "Вторник"
            break;
        case 3:
            y = "Среда"
            break;
        case 4:
            y = "Четверг"
            break;
        case 5:
            y = "Пятница"
            break;
        case 6:
            y = "Суббота"
            break;
        case 7:
            y = "Воскресенье"
            break;
    }
    let z = prompt(y + "\nContiniue? Y/Other: ", "y");
    if (z !== "y" && z !== "Y"){
        isRun = false;
    }
    if (c === 7){
        c = 1;
    }
    else {
        c++;
    }
}