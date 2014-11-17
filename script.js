function showHidden1() {
    var e = document.getElementsByClassName("item")[0].getElementsByClassName("partHidden")[0];
    var i = window.getComputedStyle(e, null).getPropertyValue("display");
    if (i == "none") {
        e.style.display = "block";
        document.getElementById("item1").style.height = "auto";
    } else if (i == "block") {
        e.style.display = "none";
        document.getElementById ("item1").style.height = "250px";
    }
}

function showHidden2() {
    var e = document.getElementsByClassName("item")[1].getElementsByClassName("partHidden")[0];
    var i = window.getComputedStyle(e, null).getPropertyValue("display");
    if (i == "none") {
        e.style.display = "block";
        document.getElementById("item2").style.height = "auto";
    } else if (i == "block") {
        e.style.display = "none";
        document.getElementById ("item2").style.height = "250px";
    }
}

function showHidden3() {
    var e = document.getElementsByClassName("item")[2].getElementsByClassName("partHidden")[0];
    var i = window.getComputedStyle(e, null).getPropertyValue("display");
    if (i == "none") {
        e.style.display = "block";
        document.getElementById("item3").style.height = "auto";
    } else if (i == "block") {
        e.style.display = "none";
        document.getElementById ("item3").style.height = "250px";
    }
}

function showHidden4() {
    var e = document.getElementsByClassName("item")[3].getElementsByClassName("partHidden")[0];
    var i = window.getComputedStyle(e, null).getPropertyValue("display");
    if (i == "none") {
        e.style.display = "block";
        document.getElementById("item4").style.height = "auto";
    } else if (i == "block") {
        e.style.display = "none";
        document.getElementById ("item4").style.height = "250px";
    }
}

function showHidden5() {
    var e = document.getElementsByClassName("item")[4].getElementsByClassName("partHidden")[0];
    var i = window.getComputedStyle(e, null).getPropertyValue("display");
    if (i == "none") {
        e.style.display = "block";
        document.getElementById("item5").style.height = "auto";
    } else if (i == "block") {
        e.style.display = "none";
        document.getElementById ("item5").style.height = "250px";
    }
}