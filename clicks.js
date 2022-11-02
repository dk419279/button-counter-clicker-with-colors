window.onload = function () {
    var button = document.getElementById("clickme"),
        count = 0;

    button.onclick = function () {
        count += 1;
        button.innerHTML = "Click me: " + count;
        var colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
        button.style.backgroundColor = colorList[Math.floor(colorList.length * Math.random())];
    }
};