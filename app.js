var display = document.getElementById("display");

function getbtnvalue(a){
    display.value += a;
}
function calculate(){
    var a = eval(display.value);
    display.value = a;
}

function clearall(){
    display.value = "";
}