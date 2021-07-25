// ***** selectedIndex property has an error and clear() dosen't work

// in case of one choice 



// function display() {
//     var Inx = document.getElementById(menu).selectedIndex;
//     var val = document.getElementById(menu).options[Inx].value;
//     var val = document.getElementById(menu).options[Inx].text;


//     document.getElementById("div1").innerHTML = val;
//     document.getElementById("div2").innerHTML = txt;


// }


// in the case of multiple choices

function clear() {
    document.getElementById("div1").innerHTML = " ";
    document.getElementById("div2").innerHTML = " ";
}

function display() {
    document.getElementById("div1").innerHTML = " ";
    document.getElementById("div2").innerHTML = " ";

    var sel = document.getElementById("menu");
    var len = document.getElementById("menu").length;

    for (var i = 0; i < len; i++) {
        if (document.getElementById("menu").options[i].selected == true) {
            document.getElementById("div1").innerHTML += sel.options[i].value;
            document.getElementById("div2").innerHTML += sel.options[i].text;
        }

    }

}