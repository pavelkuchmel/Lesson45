var a = "Таблица умножения:\n"
for (var i = 2; i <= 9; i++){
    for (var j = 1; j <= 10; j++){
        a += i * j;
        a += " "
    }
    a += "\n"
}
alert(a);