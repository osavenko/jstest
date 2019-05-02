function chDay(day){
    var cur = document.getElementById("curentDay");
    var lesson1 = document.getElementById("lesson1");
    var lesson2 = document.getElementById("lesson2");
    var lesson3 = document.getElementById("lesson3");
    var lesson4 = document.getElementById("lesson4");
    var lesson5 = document.getElementById("lesson5");
    var lesson6 = document.getElementById("lesson6");                    
    switch(day){
        case 1:
            cur.innerText = "Уроки на понеділок";

            lesson1.innerText = "Літературне читання";
            lesson2.innerText = "Природа";
            lesson3.innerText = "Трудове навчання";
            lesson4.innerText = "Образотворче мистецтво";
            lesson5.innerText = "Українська мова";
            lesson6.innerText = "Англіська мова";

            break;
        case 2:
            cur.innerText = "Уроки на вівторок";

            lesson1.innerText = "Англіська мова";
            lesson2.innerText = "Фіз. культура";
            lesson3.innerText = "Математика";
            lesson4.innerText = "Музика";
            lesson5.innerText = "Літературне читання";
            lesson6.innerText = "";

            break;
        case 3:
            cur.innerText = "Уроки на сесреду";

            lesson1.innerText = "Фіз. культура";
            lesson2.innerText = "Природа";
            lesson3.innerText = "Математика";
            lesson4.innerText = "Інформатика";
            lesson5.innerText = "Літературне читання";
            lesson6.innerText = "";

            break;
        case 4:
            cur.innerText = "Уроки на четвер";

            lesson1.innerText = "Укр. мова";
            lesson2.innerText = "Англіська мова";
            lesson3.innerText = "Фіз. культура";
            lesson4.innerText = "Математика";
            lesson5.innerText = "Я у світі";
            lesson6.innerText = "";

            break;
        case 5:
            cur.innerText = "Уроки на пятницю";

            lesson1.innerText = "Укр. мова";
            lesson2.innerText = "Англіська мова";
            lesson3.innerText = "Математика";
            lesson4.innerText = "Літературне читання";
            lesson5.innerText = "Основи здоров'я";
            lesson6.innerText = "";

            break;
        default:
            cur.innerText = "В цей уроків немає";

            lesson1.innerText = "";
            lesson2.innerText = "";
            lesson3.innerText = "";
            lesson4.innerText = "";
            lesson5.innerText = "";
            lesson6.innerText = "";

    }
}
