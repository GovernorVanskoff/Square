function square(){
    let a = document.sq.sq_a.value;
    let b = document.sq.sq_b.value;
    let c = document.sq.sq_c.value;
    let sol = document.getElementById("sq_sol");
    let d = b * b - 4 * a * c;
    let str;
    if ( d < 0 ) {
        str = "вещественных корней нет";
    }else if ( d == 0){
        str = "два однаковых вещественных корня:<br>x<sub>1</sub> = x<sub>2</sub>";
        str += -b / ( 2 * a );
        str += ".";
    }else {
        str = "два различных вещественных корня:<br>x<sub>1</sub> =";
        str += -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
        str += ", x<sub>2</sub> = ";
        str += -b / ( 2 * a ) + Marth.sqrt( d ) / ( 2 * a );
        str += ".";
    }
    sol.innerHTML = str;
}