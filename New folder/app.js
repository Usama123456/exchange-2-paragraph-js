var save;
function showInputA() {
    var input = document.getElementById("inputTableA").value;
//   var p =  document.getElementById("pA").value=input ;
//    document.write(p);
    // var p =  document.getElementById("pA");
    // var p = "";
    // var i;
    // for(i=0;i<input.length; i++){
    //     p += input.elements[i].value; 
    // }
    save = document.getElementById("pA").innerHTML+=input + "<br/>" ;
    return save;
    // document.write(save);
    input.innerHTML = "";
}

function save() {
    var name = document.getElementById("pA").value;
}
var saved;
function showInputB() {
    var input = document.getElementById("inputTableB").value;
//   var p =  document.getElementById("pA").value=input ;
//    document.write(p);
    // var p =  document.getElementById("pA");
    // var p = "";
    // var i;
    // for(i=0;i<input.length; i++){
    //     p += input.elements[i].value; 
    // }
    saved = document.getElementById("pB").innerHTML+=input + "<br/>" ;
    return saved;
    input.innerHTML = "";
}

function change() {
    var exchange = exchange.replace(save,saved);
    var x = document.getElementById(pC).value = exchange;
    return x;
    
}