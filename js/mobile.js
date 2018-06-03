function clickButton() {
    var x = document.getElementById("theButton");
    var y = document.getElementById("navigation");
    var z = document.getElementById("logo");
    var a = document.getElementsByTagName("article");
    if (x.className === "open") {
        x.className = "";
        y.className = "";
        z.style.visibility = "visible";
        a[0].style.visibility = "visible";
    } else {
        x.className = "open";
        y.className = "large";
        z.style.visibility = "hidden";
        a[0].style.visibility = "hidden";
    }
}
function runAtStart() {
    var y = document.getElementById("navigation");
    y.addEventListener('transitionrun', function() {
    });
    y.addEventListener('transitionstart', function() {
    });
}
if (window.attachEvent) {
    window.attachEvent('onload', runAtStart);
} else if (window.addEventListener) {
    window.addEventListener('load', runAtStart, false);
} else {
    document.addEventListener('load', runAtStart, false);
}