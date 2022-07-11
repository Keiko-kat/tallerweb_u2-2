function gamble() {
    //primero acortar las direccione por comodidad
    var d1 = "DicePack/1.png";
    var d2 = "DicePack/2.png";
    var d3 = "DicePack/3.png";
    var d4 = "DicePack/4.png";
    var d5 = "DicePack/5.png";
    var d6 = "DicePack/6.png";

    switch(Math.floor(Math.random()*6)){
        case 1:
            window.open(d1,"_self");
            break;
        case 2:
            window.open(d2,"_self");
            break;
        case 3:
            window.open(d3,"_self");
            break;
        case 4:
            window.open(d4,"_self");
            break;
        case 5:
            window.open(d5,"_self");
            break;
        case 6:
            window.open(d6,"_self");
            break;
        default: break;
    }
}