var janesname = document.querySelector("#janesname");
function changename() {
    janesname.innerText = "Todde E";
}

var userline1 = document.querySelector(".user-line1");
var connections1 = document.querySelector("#connections1");
var connection1num = 2;
function nameremove1() {
    userline1.remove();
    connection1num --;
    connections1.innerText = connection1num;
}

var userline2 = document.querySelector(".user-line2");
function nameremove2() {
    userline2.remove();
    connection1num --;
    connections1.innerText = connection1num;
}

var connections2 = document.querySelector("#connections2");
var connection2num = 500;
function nameadd() {
    connection2num ++;
    connections2.innerText = connection2num;
}